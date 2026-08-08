/** Walls, floor, skirting. Purely decorative — no hotspots. */
export default function Shell() {
  return (
    <g>
      <rect x={0} y={0} width={480} height={232} className="s-wall" />
      <rect x={0} y={0} width={480} height={232} fill="url(#dots)" />
      <rect id="dayLight" x={0} y={0} width={480} height={120} fill="url(#dayG)" />
      <rect x={0} y={224} width={480} height={8} className="s-shade" />
      <rect x={0} y={232} width={480} height={38} className="s-floor" />
      <rect x={0} y={232} width={480} height={3} className="s-floor2" />
      <g className="s-floor2">
        <rect x={24} y={240} width={70} height={1} />
        <rect x={130} y={252} width={90} height={1} />
        <rect x={250} y={242} width={60} height={1} />
        <rect x={330} y={258} width={110} height={1} />
        <rect x={60} y={262} width={50} height={1} />
      </g>
    </g>
  );
}
