'use client';

import Hotspot from '@/components/Hotspot';

/** Side table with a few pieces mid-game. */
export default function ChessTable() {
  return (
    <Hotspot
      id="chess"
      label="Chess"
      tone="none"
      hit={{ x: 214, y: 186, w: 58, h: 42 }}
      ring={{ x: 215, y: 186, w: 56, h: 20 }}
      pip={{ x: 272, y: 188 }}
    >
      <rect x={216} y={200} width={54} height={4} className="s-light" />
      <rect x={220} y={204} width={3} height={24} className="s-mid" />
      <rect x={263} y={204} width={3} height={24} className="s-mid" />
      <rect x={220} y={226} width={46} height={2} className="s-mid" />
      <g className="s-bone">
        <rect x={222} y={196} width={4} height={4} />
        <rect x={230} y={192} width={4} height={8} />
        <rect x={229} y={190} width={6} height={2} />
        <rect x={240} y={194} width={4} height={6} />
        <rect x={239} y={191} width={6} height={3} />
      </g>
      <g className="s-dark">
        <rect x={250} y={192} width={5} height={8} />
        <rect x={249} y={188} width={7} height={4} />
        <rect x={260} y={195} width={4} height={5} />
        <rect x={259} y={192} width={6} height={3} />
      </g>
    </Hotspot>
  );
}
