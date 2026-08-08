'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useRoom } from '@/lib/room-context';
import { setTip } from '@/lib/tip-store';
import type { Rect } from '@/lib/types';

type Props = {
  /** matches an Entry id in data/registry.ts — omit when using onActivate */
  id?: string;
  /** shown in the tooltip on hover and read by screen readers */
  label: string;
  /** invisible click target; make it generous, especially for touch */
  hit: Rect;
  /** hover/focus outline. Defaults to the hit box, inset by 1. */
  ring?: Rect;
  /** the little amber dot that pulses until first interaction */
  pip?: { x: number; y: number };
  /**
   * How this hotspot announces itself on hover.
   *   'plain' — outlined label. Objects *on the shelf* only.
   *   'pill'  — amber callout with the notch. The speaker toggle, alone.
   *   'none'  — no label at all; the object lifts slightly instead. Used by
   *             everything away from the shelf, which would otherwise litter
   *             the room with floating text.
   * The aria-label is unaffected either way, so screen readers lose nothing.
   */
  tone?: 'pill' | 'plain' | 'none';
  /** override the default "open the drawer" behaviour (the lamp uses this) */
  onActivate?: () => void;
  children: ReactNode;
};

/**
 * Wraps a piece of scenery in a focusable, clickable, labelled control.
 *
 *   <Hotspot id="poster" label="Poster" hit={{x:60,y:8,w:70,h:32}}>
 *     ...rects...
 *   </Hotspot>
 */
export default function Hotspot({
  id,
  label,
  hit,
  ring,
  pip,
  tone = 'plain',
  onActivate,
  children,
}: Props) {
  const { open } = useRoom();
  const hitRef = useRef<SVGRectElement>(null);
  const [shown, setShown] = useState(false);
  const box = ring ?? { x: hit.x + 1, y: hit.y + 1, w: hit.w - 2, h: hit.h - 2 };

  /**
   * Measuring the hit rect in viewport pixels is what lets the tooltip sit on
   * the object at any window size. It re-runs on:
   *   - `label`, so toggles that rename themselves mid-hover (lamp, speaker)
   *     update the tooltip without the pointer having to leave;
   *   - pointermove, so the tooltip stays glued while the parallax drifts the
   *     scene underneath it. setTip() drops no-op updates, so the common case
   *     costs one getBoundingClientRect per frame and no render.
   */
  useEffect(() => {
    if (!shown || tone === 'none') return;

    let frame = 0;

    const place = () => {
      const el = hitRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setTip({
        label,
        x: r.left + r.width / 2,
        top: r.top,
        bottom: r.bottom,
        variant: tone,
      });
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        place();
      });
    };

    place();
    window.addEventListener('resize', schedule);
    window.addEventListener('pointermove', schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('pointermove', schedule);
      setTip(null);
    };
  }, [shown, label, tone]);

  /** The camera zooms toward whatever you clicked, so hand it the centre. */
  const activate = () => {
    if (onActivate) {
      onActivate();
      return;
    }
    if (!id) return;
    const r = hitRef.current?.getBoundingClientRect();
    open(id, r ? { x: r.left + r.width / 2, y: r.top + r.height / 2 } : undefined);
  };

  return (
    <g
      className={`hot${tone === 'none' ? ' hot--lift' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={activate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      }}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onFocus={() => setShown(true)}
      onBlur={() => setShown(false)}
    >
      {children}
      <rect
        ref={hitRef}
        className="hit"
        x={hit.x}
        y={hit.y}
        width={hit.w}
        height={hit.h}
      />
      <rect className="ring" x={box.x} y={box.y} width={box.w} height={box.h} />
      {pip && <rect className="pip" x={pip.x} y={pip.y} width={2.5} height={2.5} />}
    </g>
  );
}
