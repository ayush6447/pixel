'use client';

import type { ReactNode } from 'react';
import { useRoom } from '@/lib/room-context';
import type { Rect } from '@/lib/types';

type Props = {
  /** matches an Entry id in data/registry.ts — omit when using onActivate */
  id?: string;
  /** shown in the caption bar on hover and read by screen readers */
  label: string;
  /** invisible click target; make it generous, especially for touch */
  hit: Rect;
  /** hover/focus outline. Defaults to the hit box, inset by 1. */
  ring?: Rect;
  /** the little amber dot that pulses until first interaction */
  pip?: { x: number; y: number };
  /** override the default "open the drawer" behaviour (the lamp uses this) */
  onActivate?: () => void;
  children: ReactNode;
};

/**
 * Wraps a piece of scenery in a focusable, clickable, captioned control.
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
  onActivate,
  children,
}: Props) {
  const { open, setCaption } = useRoom();
  const box = ring ?? { x: hit.x + 1, y: hit.y + 1, w: hit.w - 2, h: hit.h - 2 };

  const activate = () => {
    if (onActivate) onActivate();
    else if (id) open(id);
  };

  return (
    <g
      className="hot"
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
      onMouseEnter={() => setCaption(label)}
      onMouseLeave={() => setCaption(null)}
      onFocus={() => setCaption(label)}
      onBlur={() => setCaption(null)}
    >
      {children}
      <rect className="hit" x={hit.x} y={hit.y} width={hit.w} height={hit.h} />
      <rect className="ring" x={box.x} y={box.y} width={box.w} height={box.h} />
      {pip && <rect className="pip" x={pip.x} y={pip.y} width={2.5} height={2.5} />}
    </g>
  );
}
