'use client';

import { useRoom } from '@/lib/room-context';
import { useTip } from '@/lib/tip-store';
import { useIstClock } from '@/hooks/useIstClock';

/**
 * Wordmark, clock, hint and credit. Everything outside the SVG except
 * the tooltip, which lives in its own component because it has to
 * position itself against a hotspot.
 */
export default function Hud() {
  const { night } = useRoom();
  const tip = useTip();
  const clock = useIstClock();

  return (
    <>
      <div className="mark">
        <span className="cube" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <i key={i} />
          ))}
        </span>
        AKRVERSE
      </div>

      <div className="meta">
        <span className="clock">{clock}</span>
        <span>{night ? 'Lights on' : 'Pull the cord'}</span>
      </div>

      {/* Standing invitation. Steps aside while a tooltip is up. */}
      <div className={`hint${tip ? '' : ' is-on'}`}>
        {night
          ? 'Night in Jamshedpur — the room is still open'
          : 'Jamshedpur, 2026 — everything in this room opens'}
      </div>

      <div className="credit">© 2026 Ayush Kumar Singh</div>
    </>
  );
}
