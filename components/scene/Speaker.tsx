'use client';

import Hotspot from '@/components/Hotspot';
import { useRoom } from '@/lib/room-context';

/**
 * The one speaker in the room. It stands on the third shelf board (y=170),
 * like the reference, and — like the lamp — uses onActivate instead of an id,
 * so clicking toggles the ambient loop rather than opening a panel.
 *
 * It draws after the bookshelf so the notes rise over the board above it;
 * there is no headroom inside a 40-unit compartment for them otherwise.
 */
export default function Speaker() {
  const { music, toggleMusic } = useRoom();

  return (
    <g>
      <g className={`notes${music ? ' is-on' : ''}`} aria-hidden="true">
        <g className="note note--a">
          <NoteSingle x={196} y={140} tone="s-amber" />
        </g>
        <g className="note note--b">
          <NoteBeamed x={188} y={144} tone="s-bone" />
        </g>
        <g className="note note--c">
          <NoteSingle x={202} y={137} tone="s-bone" />
        </g>
      </g>

      <Hotspot
        label={
          music
            ? 'Chill beats on loop — click to mute'
            : 'Speakers — click to play something'
        }
        onActivate={toggleMusic}
        tone="pill"
        hit={{ x: 170, y: 142, w: 32, h: 30 }}
        ring={{ x: 172, y: 144, w: 28, h: 27 }}
        pip={{ x: 203, y: 144 }}
      >
        {/* cabinet */}
        <rect x={174} y={146} width={24} height={24} className="s-light" />
        <rect x={176} y={148} width={20} height={22} className="s-dark" />

        {/* woofer */}
        <circle cx={185} cy={160} r={6} className="s-mid" />
        <circle cx={185} cy={160} r={4.5} className="s-amber" />
        <circle cx={185} cy={160} r={2} className="s-dark" />

        {/* tweeter + port */}
        <circle cx={192} cy={152} r={1.5} className="s-mid" />
        <rect x={190} y={165} width={4} height={2} className="s-mid" />

        {/* power LED — blinks along while something is playing */}
        <rect
          x={178}
          y={151}
          width={2}
          height={2}
          className={music ? 's-hot blink' : 's-mid'}
        />
      </Hotspot>
    </g>
  );
}

/** Eighth note, 12 units tall. (x, y) is the top of the stem. */
function NoteSingle({ x, y, tone }: { x: number; y: number; tone: string }) {
  return (
    <g className={tone}>
      <rect x={x + 4} y={y} width={2} height={10} />
      <rect x={x + 6} y={y} width={4} height={2} />
      <rect x={x + 8} y={y + 2} width={2} height={3} />
      <rect x={x} y={y + 8} width={5.5} height={4} />
    </g>
  );
}

/** Two notes under one beam. */
function NoteBeamed({ x, y, tone }: { x: number; y: number; tone: string }) {
  return (
    <g className={tone}>
      <rect x={x} y={y} width={11.5} height={2} />
      <rect x={x} y={y} width={2} height={10} />
      <rect x={x + 9.5} y={y} width={2} height={10} />
      <rect x={x - 3.5} y={y + 8} width={5.5} height={4} />
      <rect x={x + 6} y={y + 8} width={5.5} height={4} />
    </g>
  );
}
