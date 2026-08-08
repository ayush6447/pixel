'use client';

import { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { useRoom } from '@/lib/room-context';
import Shell from './scene/Shell';
import Bookshelf from './scene/Bookshelf';
import Desk from './scene/Desk';
import Chair from './scene/Chair';
import Monitor from './scene/Monitor';
import Lamp from './scene/Lamp';
import Portrait from './scene/Portrait';
import ChessTable from './scene/ChessTable';
import DeskItems from './scene/DeskItems';
import Speaker from './scene/Speaker';
import Printer from './scene/Printer';
import WallArt from './scene/WallArt';

/**
 * The whole room lives on a 620 x 270 grid. Keep every coordinate an
 * integer (or a clean half) so edges stay crisp when it scales up.
 *
 * Draw order is back to front: shell, glow, furniture, props. The two
 * <g class="layer"> wrappers are the parallax depth planes — the shell
 * trails the furniture, so the room leans as the pointer moves.
 */
export default function Room() {
  const stage = useRef<HTMLDivElement>(null);
  const { openId, focus } = useRoom();
  useParallax(stage);

  return (
    <div
      className={`stage${openId ? ' is-zoomed' : ''}`}
      ref={stage}
      style={
        focus
          ? ({
              // transform-origin for the push-in; .stage is fixed inset 0,
              // so the hotspot's viewport centre is already stage-local.
              ['--zx' as string]: `${focus.x}px`,
              ['--zy' as string]: `${focus.y}px`,
            } as React.CSSProperties)
          : undefined
      }
    >
      <svg
        viewBox="0 0 620 270"
        preserveAspectRatio="xMidYMid meet"
        shapeRendering="crispEdges"
        role="img"
        aria-label="An interactive pixel-art room. Objects in it open project details."
      >
        <defs>
          <pattern id="dots" width={8} height={8} patternUnits="userSpaceOnUse">
            <rect x={0} y={0} width={2} height={2} className="s-dot" />
            <rect x={4} y={4} width={2} height={2} className="s-dot" />
          </pattern>
          <radialGradient id="lampG">
            <stop offset="0%" stopColor="#FFD489" stopOpacity=".85" />
            <stop offset="100%" stopColor="#FFD489" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="scrG">
            <stop offset="0%" stopColor="#E9A13B" stopOpacity=".7" />
            <stop offset="100%" stopColor="#E9A13B" stopOpacity="0" />
          </radialGradient>
          {/* userSpaceOnUse so the bleed in <Shell> can extend the rect
              without stretching the falloff — above y=0 it just pads. */}
          <linearGradient
            id="dayG"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2="120"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className="layer layer--back">
          <Shell />
          <ellipse id="lampGlow" cx={370} cy={104} rx={120} ry={86} fill="url(#lampG)" />
        </g>

        <g className="layer layer--front">
          <Bookshelf />
          <Lamp />
          <Portrait />
          <Desk />
          <Monitor />
          <DeskItems />
          <Chair />
          <ChessTable />
          <WallArt />
          <Printer />
          {/* last, so the music notes float over the shelf they rise out of */}
          <Speaker />
        </g>
      </svg>
    </div>
  );
}
