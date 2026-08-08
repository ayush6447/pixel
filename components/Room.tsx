'use client';

import Shell from './scene/Shell';
import Bookshelf from './scene/Bookshelf';
import Desk from './scene/Desk';
import Chair from './scene/Chair';
import Monitor from './scene/Monitor';
import Lamp from './scene/Lamp';
import Portrait from './scene/Portrait';
import ChessTable from './scene/ChessTable';
import DeskItems from './scene/DeskItems';

/**
 * The whole room lives on a 480 x 270 grid. Keep every coordinate an
 * integer (or a clean half) so edges stay crisp when it scales up.
 *
 * Draw order is back to front: shell, glow, furniture, props.
 */
export default function Room() {
  return (
    <div className="stage">
      <svg
        viewBox="0 0 480 270"
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
          <linearGradient id="dayG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <Shell />
        <ellipse id="lampGlow" cx={370} cy={104} rx={120} ry={86} fill="url(#lampG)" />

        <Bookshelf />
        <Lamp />
        <Portrait />
        <Desk />
        <Monitor />
        <DeskItems />
        <Chair />
        <ChessTable />
      </svg>
    </div>
  );
}
