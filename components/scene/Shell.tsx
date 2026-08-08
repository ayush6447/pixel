/**
 * Walls, floor, skirting. Purely decorative — no hotspots.
 *
 * The room is drawn on a 480x270 viewBox with preserveAspectRatio="meet",
 * so on any window that isn't 16:9 there is empty space above/below or
 * left/right of the room. The wall and floor are therefore drawn far
 * outside the viewBox — combined with `overflow: visible` on the <svg>
 * (see globals.css) the bleed paints into that empty space, so the
 * background always reaches the edge of the viewport.
 *
 * BLEED is generous on purpose: these are four flat rects, they cost
 * nothing, and it has to survive an ultrawide monitor and a phone held
 * in portrait.
 */
const BLEED = 600;
const X = -BLEED;
const W = 620 + BLEED * 2;

/** y where the wall meets the floor */
const HORIZON = 232;

export default function Shell() {
  return (
    <g>
      <rect x={X} y={-BLEED} width={W} height={HORIZON + BLEED} className="s-wall" />
      <rect x={X} y={-BLEED} width={W} height={HORIZON + BLEED} fill="url(#dots)" />
      <rect id="dayLight" x={X} y={-BLEED} width={W} height={120 + BLEED} fill="url(#dayG)" />
      {/* chair rail and wainscot — gives the wall a horizon to sit against
          instead of one flat field of dots */}
      <rect x={X} y={176} width={W} height={2} className="s-shade" />
      <rect x={X} y={178} width={W} height={46} className="s-wainscot" />
      <g className="s-shade">
        <rect x={X} y={182} width={W} height={1} />
        <rect x={X} y={220} width={W} height={1} />
      </g>
      <rect x={X} y={224} width={W} height={8} className="s-shade" />
      <rect x={X} y={HORIZON} width={W} height={38 + BLEED} className="s-floor" />
      <rect x={X} y={HORIZON} width={W} height={3} className="s-floor2" />
      <g className="s-floor2">
        <rect x={24} y={240} width={70} height={1} />
        <rect x={130} y={252} width={90} height={1} />
        <rect x={250} y={242} width={60} height={1} />
        <rect x={330} y={258} width={110} height={1} />
        <rect x={60} y={262} width={50} height={1} />
        <rect x={468} y={246} width={84} height={1} />
        <rect x={520} y={264} width={90} height={1} />
      </g>
    </g>
  );
}
