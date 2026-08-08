/** Office chair, pushed back from the desk. */
export default function Chair() {
  return (
    <g>
      <rect x={352} y={228} width={4} height={14} className="s-light" />
      <rect x={336} y={242} width={36} height={3} className="s-light" />
      <rect x={330} y={245} width={8} height={3} className="s-mid" />
      <rect x={370} y={245} width={8} height={3} className="s-mid" />
      <rect x={330} y={214} width={48} height={14} className="s-amber" />
      <rect x={366} y={188} width={14} height={30} className="s-amber" />
      <rect x={368} y={190} width={10} height={26} className="s-hot" />
    </g>
  );
}
