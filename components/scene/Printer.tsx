'use client';

import Hotspot from '@/components/Hotspot';

/**
 * Bed-slinger 3D printer in the right-hand bay, mid-print. Opens EmbryoGen —
 * it is the project whose hardware side actually needed printing.
 *
 * The gantry head sweeps horizontally and the print grows a layer at a time;
 * both are CSS animations on .print-head / .print-part, so the whole thing is
 * inert under prefers-reduced-motion.
 *
 * Occupies x 470–610, standing on the floor line at y = 232.
 */
export default function Printer() {
  return (
    <Hotspot
      id="embryogen"
      label="3D printer — printing an EmbryoGen part"
      tone="none"
      hit={{ x: 470, y: 118, w: 140, h: 116 }}
      ring={{ x: 472, y: 120, w: 136, h: 112 }}
      pip={{ x: 611, y: 120 }}
    >
      {/* bench it stands on */}
      <rect x={470} y={218} width={140} height={6} className="s-light" />
      <rect x={470} y={224} width={140} height={3} className="s-mid" />
      <rect x={476} y={227} width={6} height={5} className="s-mid" />
      <rect x={598} y={227} width={6} height={5} className="s-mid" />

      {/* frame */}
      <rect x={492} y={126} width={96} height={92} className="s-mid" />
      <rect x={496} y={130} width={88} height={84} className="s-dark" />
      <rect x={492} y={126} width={96} height={4} className="s-light" />
      <rect x={492} y={214} width={96} height={4} className="s-light" />
      <rect x={492} y={126} width={4} height={92} className="s-light" />
      <rect x={584} y={126} width={4} height={92} className="s-light" />

      {/* gantry rail */}
      <rect x={496} y={142} width={88} height={2} className="s-edge" />

      {/* moving head */}
      <g className="print-head">
        <rect x={524} y={140} width={16} height={10} className="s-light" />
        <rect x={526} y={142} width={12} height={6} className="s-mid" />
        <rect x={529} y={150} width={6} height={4} className="s-edge" />
        <rect x={531} y={154} width={2} height={2} className="s-hot" />
      </g>

      {/* print bed */}
      <rect x={504} y={196} width={72} height={5} className="s-light" />
      <rect x={506} y={193} width={68} height={3} className="s-edge" />

      {/* the part, growing */}
      <g className="print-part">
        <rect x={526} y={181} width={28} height={12} className="s-amber" />
        <rect x={530} y={175} width={20} height={6} className="s-amber" />
        <rect x={534} y={170} width={12} height={5} className="s-hot" />
      </g>

      {/* spool */}
      <circle cx={478} cy={152} r={10} className="s-mid" />
      <circle cx={478} cy={152} r={6} className="s-amber" />
      <circle cx={478} cy={152} r={2} className="s-dark" />
      <rect x={478} y={144} width={34} height={1.5} className="s-amber" />

      {/* control panel */}
      <rect x={548} y={202} width={24} height={12} className="s-dark" />
      <rect x={550} y={204} width={20} height={8} fill="#0E1116" />
      <rect x={552} y={206} width={10} height={2} className="s-leaf" />
      <rect x={552} y={209} width={6} height={2} className="s-amber" />
    </Hotspot>
  );
}
