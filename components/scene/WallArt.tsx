'use client';

import Hotspot from '@/components/Hotspot';

/**
 * Renders a pixel map as rects. Rows are strings, '#' is on, anything else is
 * off. Hand-plotting a horse as forty <rect> elements is unreadable; this way
 * the drawing is legible in the source and easy to nudge.
 */
function PixelArt({
  map,
  x,
  y,
  scale = 2,
  fill,
}: {
  map: string[];
  x: number;
  y: number;
  scale?: number;
  fill: string;
}) {
  const rects: React.ReactNode[] = [];

  map.forEach((row, r) => {
    let run = 0;
    // Emit one rect per horizontal run instead of per pixel.
    for (let c = 0; c <= row.length; c += 1) {
      if (row[c] === '#') {
        run += 1;
        continue;
      }
      if (run) {
        rects.push(
          <rect
            key={`${r}-${c}`}
            x={x + (c - run) * scale}
            y={y + r * scale}
            width={run * scale}
            height={scale}
          />,
        );
        run = 0;
      }
    }
  });

  return <g fill={fill}>{rects}</g>;
}

/**
 * Rearing horse, facing left, tail up the right side. 16 x 20.
 *
 * The legibility trick at this size is the neck: keep it thin and sloping
 * for four or five rows before it meets the withers. Merge it into the body
 * any earlier and the whole thing reads as a dog.
 */
const HORSE = [
  '.....##....##...',
  '....###....##...',
  '...####...###...',
  '..#####...##....',
  '.#####....##....',
  '..####...###....',
  '...####..##.....',
  '...####..##.....',
  '....####.##.....',
  '....########....',
  '...#########....',
  '..##########....',
  '.###########....',
  '####.#######....',
  '###...#####.....',
  '##....##.##.....',
  '#.....##.##.....',
  '......##.##.....',
  '.....###.##.....',
  '....####.###....',
];

/**
 * The wall above the printer bench, hung as a pair of framed posters, plus a
 * weapon charm clipped to the shelf.
 *
 * The racing poster started life as a tapestry beside the monitor and was
 * crowding it — the monitor, lamp, desk and sensor were all fighting for the
 * same patch of wall. Over here the two posters read as a set and that whole
 * area went quiet.
 *
 * Both posters are fan art drawn from rectangles: silhouettes and colour
 * schemes, not traced artwork.
 *
 * They are away from the shelf, so they take tone="none" — they lift on
 * hover instead of growing a label.
 */
export default function WallArt() {
  return (
    <>
      {/* racing poster */}
      <Hotspot
        id="racing"
        label="Formula 1"
        tone="none"
        hit={{ x: 468, y: 30, w: 70, h: 78 }}
        ring={{ x: 469, y: 31, w: 68, h: 76 }}
        pip={{ x: 538, y: 31 }}
      >
        <rect x={470} y={32} width={66} height={74} className="s-light" />
        <rect x={473} y={35} width={60} height={68} fill="#141019" />

        {/* red field with the tricolore across the top */}
        <rect x={473} y={35} width={60} height={50} fill="#B4231F" />
        <rect x={473} y={35} width={20} height={4} className="s-leaf" />
        <rect x={493} y={35} width={20} height={4} className="s-bone" />
        <rect x={513} y={35} width={20} height={4} fill="#8E1A16" />

        {/* shield */}
        <g fill="#F5C518">
          <rect x={490} y={42} width={26} height={28} />
          <rect x={492} y={70} width={22} height={3} />
          <rect x={495} y={73} width={16} height={3} />
          <rect x={498} y={76} width={10} height={2} />
          <rect x={501} y={78} width={4} height={2} />
        </g>
        <PixelArt map={HORSE} x={495} y={44} scale={1} fill="#151920" />

        <rect x={473} y={85} width={60} height={18} fill="#141019" />
        <text x={503} y={95} className="poster-text" textAnchor="middle">
          SCUDERIA 44
        </text>
        <rect x={488} y={99} width={30} height={1.5} fill="#F5C518" />
      </Hotspot>

      {/* games poster */}
      <Hotspot
        id="gaming"
        label="Games"
        tone="none"
        hit={{ x: 540, y: 30, w: 70, h: 78 }}
        ring={{ x: 541, y: 31, w: 68, h: 76 }}
        pip={{ x: 610, y: 31 }}
      >
        <rect x={542} y={32} width={66} height={74} className="s-light" />
        <rect x={545} y={35} width={60} height={68} fill="#1E1622" />

        {/* dusk sky */}
        <rect x={545} y={35} width={60} height={32} fill="#C24A2A" />
        <rect x={545} y={35} width={60} height={13} fill="#E9A13B" />
        <circle cx={575} cy={52} r={9} fill="#FFD489" />

        {/* skyline */}
        <g fill="#241A2B">
          <rect x={547} y={58} width={8} height={22} />
          <rect x={557} y={51} width={6} height={29} />
          <rect x={565} y={62} width={10} height={18} />
          <rect x={577} y={54} width={7} height={26} />
          <rect x={586} y={64} width={9} height={16} />
          <rect x={597} y={57} width={7} height={23} />
        </g>
        {/* palm */}
        <g fill="#171021">
          <rect x={594} y={48} width={2} height={32} />
          <rect x={588} y={46} width={7} height={2} />
          <rect x={595} y={44} width={7} height={2} />
          <rect x={591} y={43} width={4} height={2} />
        </g>

        <rect x={545} y={85} width={60} height={18} fill="#141019" />
        <text x={575} y={95} className="poster-text" textAnchor="middle">
          LOS SANTOS
        </text>
        <rect x={560} y={99} width={30} height={1.5} className="s-amber" />
      </Hotspot>

      {/* weapon charm, hanging off the shelf's right edge */}
      <Hotspot
        id="valorant"
        label="Valorant — Ascendant"
        hit={{ x: 198, y: 42, w: 26, h: 44 }}
        ring={{ x: 200, y: 44, w: 22, h: 40 }}
        pip={{ x: 224, y: 44 }}
      >
        {/* clip and chain onto the shelf edge */}
        <rect x={209} y={45} width={5} height={3} className="s-edge" />
        <rect x={211} y={48} width={2} height={8} className="s-edge" />
        {/* charm plate */}
        <rect x={202} y={56} width={20} height={22} fill="#FF4655" />
        <rect x={204} y={58} width={16} height={18} fill="#0F1923" />
        {/* the three-prong mark, in blocks */}
        <g fill="#FF4655">
          <rect x={206} y={61} width={3} height={9} />
          <rect x={215} y={61} width={3} height={9} />
          <rect x={206} y={70} width={12} height={3} />
          <rect x={210} y={64} width={4} height={6} />
        </g>
        {/* ascendant tick */}
        <rect x={208} y={80} width={8} height={2} className="s-leaf" />
        <rect x={210} y={82} width={4} height={2} className="s-leaf" />
      </Hotspot>
    </>
  );
}
