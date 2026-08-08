'use client';

import { useRoom } from '@/lib/room-context';
import { useIstClock } from '@/hooks/useIstClock';

const DEFAULT_DAY = 'Ranchi, 2026 — everything in this room opens';
const DEFAULT_NIGHT = 'Night in Ranchi — the room is still open';

/** Wordmark, clock, caption bar and credit. Everything outside the SVG. */
export default function Hud() {
  const { caption, night } = useRoom();
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

      <div className="caption" aria-live="polite">
        {caption ? (
          <>
            <b>▸</b> {caption}
          </>
        ) : night ? (
          DEFAULT_NIGHT
        ) : (
          DEFAULT_DAY
        )}
      </div>

      <div className="credit">© 2026 Ayush Kumar Singh</div>
    </>
  );
}
