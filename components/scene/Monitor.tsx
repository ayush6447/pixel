'use client';

import Hotspot from '@/components/Hotspot';

/** CRT on the desk. Opens the terminal entry. */
export default function Monitor() {
  return (
    <Hotspot
      id="terminal"
      label="Terminal — read the intro"
      hit={{ x: 322, y: 140, w: 96, h: 56 }}
      ring={{ x: 320, y: 138, w: 100, h: 54 }}
      pip={{ x: 416, y: 138 }}
    >
      <ellipse id="screenGlow" cx={370} cy={168} rx={76} ry={54} fill="url(#scrG)" />
      <rect x={364} y={188} width={12} height={6} className="s-mid" />
      <rect x={352} y={192} width={36} height={4} className="s-light" />
      <rect x={322} y={140} width={96} height={50} className="s-mid" />
      <rect x={325} y={143} width={90} height={42} className="s-dark" />
      <rect x={328} y={146} width={84} height={36} fill="#0E1116" />
      <text x={336} y={162} className="screen-text">$ whoami</text>
      <rect x={356} y={169} width={5} height={6} className="s-hot blink" />
      <rect x={404} y={186} width={4} height={2} className="s-amber" />
    </Hotspot>
  );
}
