'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { useRoom } from '@/lib/room-context';
import { useTip } from '@/lib/tip-store';

/** px between the object and the tooltip */
const GAP = 12;
/** px the tooltip keeps clear of the viewport edge */
const EDGE = 12;

/**
 * The label that floats over whichever object is hovered or focused.
 *
 * Two looks. 'plain' is the quiet outlined box every object gets, and it
 * prefers to sit *below* its object. 'pill' is the amber callout with the
 * pixel notch and prefers to sit above — it belongs to the speaker alone,
 * so the loud style always means "this toggles something".
 *
 * Position is computed in a layout effect so the box is measured with its
 * new text already in place; it never paints at a stale position.
 */
export default function Tooltip() {
  const { openId } = useRoom();
  const tip = useTip();
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ left: 0, top: -9999, notch: 0, below: true });

  // Keep the last label through the fade-out, so the box doesn't collapse
  // to nothing on its way off screen.
  const lastLabel = useRef('');
  const lastVariant = useRef<'pill' | 'plain'>('plain');
  if (tip) {
    lastLabel.current = tip.label;
    lastVariant.current = tip.variant;
  }
  const label = tip?.label ?? lastLabel.current;
  const variant = tip?.variant ?? lastVariant.current;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !tip) return;

    const { offsetWidth: w, offsetHeight: h } = el;
    const roomAbove = tip.top - h - GAP >= EDGE;
    const roomBelow = tip.bottom + h + GAP <= window.innerHeight - EDGE;

    // Each variant has a preferred side and falls back to the other.
    const below =
      tip.variant === 'pill' ? !roomAbove : roomBelow || !roomAbove;

    const top = below ? tip.bottom + GAP : tip.top - h - GAP;

    // Clamp horizontally, then point the notch back at the object.
    const maxLeft = Math.max(EDGE, window.innerWidth - w - EDGE);
    const left = Math.min(Math.max(tip.x - w / 2, EDGE), maxLeft);

    setBox({ left, top, notch: tip.x - left, below });
  }, [tip]);

  const on = Boolean(tip) && !openId;

  return (
    <div
      ref={ref}
      className={[
        'tip',
        `tip--${variant}`,
        on ? 'is-on' : '',
        box.below ? 'is-below' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        left: box.left,
        top: box.top,
        // consumed by .tip--pill::after to place the arrow
        ['--notch' as string]: `${box.notch}px`,
      }}
      aria-live="polite"
    >
      {label}
    </div>
  );
}
