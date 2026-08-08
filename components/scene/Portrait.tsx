'use client';

import Hotspot from '@/components/Hotspot';

/** Framed portrait on the wall. Replace the silhouette with your own pixels. */
export default function Portrait() {
  return (
    <Hotspot
      id="about"
      label="About me"
      hit={{ x: 228, y: 96, w: 52, h: 62 }}
      ring={{ x: 226, y: 94, w: 56, h: 66 }}
      pip={{ x: 278, y: 94 }}
    >
      <rect x={228} y={96} width={52} height={62} className="s-light" />
      <rect x={232} y={100} width={44} height={54} className="s-indigo" />
      <g className="s-dark">
        <rect x={244} y={112} width={20} height={18} />
        <rect x={242} y={120} width={24} height={10} />
        <rect x={238} y={132} width={32} height={22} />
        <rect x={236} y={140} width={36} height={14} />
      </g>
      <g className="s-hot">
        <rect x={240} y={108} width={2} height={2} />
        <rect x={266} y={110} width={2} height={2} />
        <rect x={236} y={118} width={2} height={2} />
        <rect x={270} y={124} width={2} height={2} />
        <rect x={248} y={104} width={2} height={2} />
        <rect x={258} y={106} width={2} height={2} />
      </g>
      <text x={254} y={168} className="cap" textAnchor="middle">
        ABOUT ME
      </text>
    </Hotspot>
  );
}
