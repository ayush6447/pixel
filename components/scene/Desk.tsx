/** Desk slab, drawers and legs. Top surface sits at y = 196. */
export default function Desk() {
  return (
    <g>
      <rect x={286} y={196} width={168} height={6} className="s-light" />
      <rect x={286} y={202} width={168} height={3} className="s-mid" />
      <rect x={290} y={205} width={6} height={23} className="s-mid" />
      <rect x={444} y={205} width={6} height={23} className="s-mid" />
      <rect x={296} y={205} width={148} height={16} className="s-dark" />
      <rect x={300} y={209} width={66} height={8} className="s-mid" />
      <rect x={374} y={209} width={66} height={8} className="s-mid" />
      <rect x={330} y={212} width={6} height={2} className="s-edge" />
      <rect x={404} y={212} width={6} height={2} className="s-edge" />
    </g>
  );
}
