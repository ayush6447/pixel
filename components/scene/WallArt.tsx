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
 * Rearing horse, 22 x 31, traced off the real badge rather than plotted by
 * hand. Three hand-drawn attempts read as a dog, a bird and a blob in turn —
 * the pose has too much going on (arched neck, tucked forelegs, plume tail)
 * to fake at this size. Downsampling the actual silhouette got it in one.
 *
 * Only cleanup applied: a few interior gaps filled and stray single pixels
 * merged, which the resampler leaves behind at the edges.
 */
const HORSE = [
  '..........##..........',
  '..........####........',
  '........#..####.......',
  '.......##########.....',
  '......####..####......',
  '..........######......',
  '..........######......',
  '.........#######......',
  '...#....##.####.......',
  '..###..#########......',
  '..#.###########.....#.',
  '.##.###########.#....#',
  '.############..#...##.',
  '###..#########.....###',
  '###..#########.....##.',
  '..#...##########....#.',
  '..##...##########.....',
  '...#....##########....',
  '...#.....#########..##',
  '.........############.',
  '..........##.###.##...',
  '..........##########..',
  '..........##########..',
  '...........#####.#....',
  '.......#...###...#....',
  '.....#########........',
  '.............##.......',
  '............##........',
  '...........##.........',
  '..........##..........',
  '.........##...........',
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
        hit={{ x: 466, y: 20, w: 74, h: 90 }}
        ring={{ x: 468, y: 21, w: 70, h: 86 }}
        pip={{ x: 538, y: 21 }}
      >
        <rect x={470} y={22} width={66} height={84} className="s-light" />
        <rect x={473} y={25} width={60} height={78} fill="#141019" />

        {/* red field with the tricolore across the top */}
        <rect x={473} y={25} width={60} height={60} fill="#B4231F" />
        <rect x={473} y={25} width={20} height={5} className="s-leaf" />
        <rect x={493} y={25} width={20} height={5} className="s-bone" />
        <rect x={513} y={25} width={20} height={5} fill="#8E1A16" />

        {/* shield */}
        <g fill="#F5C518">
          <rect x={487} y={32} width={32} height={40} />
          <rect x={489} y={72} width={28} height={4} />
          <rect x={493} y={76} width={20} height={3} />
          <rect x={498} y={79} width={10} height={2} />
          <rect x={501} y={81} width={4} height={2} />
        </g>
        <PixelArt map={HORSE} x={492} y={34} scale={1} fill="#151920" />

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
        hit={{ x: 538, y: 20, w: 74, h: 90 }}
        ring={{ x: 540, y: 21, w: 70, h: 86 }}
        pip={{ x: 610, y: 21 }}
      >
        <rect x={542} y={22} width={66} height={84} className="s-light" />
        <rect x={545} y={25} width={60} height={78} fill="#1E1622" />

        {/* dusk sky */}
        <rect x={545} y={25} width={60} height={38} fill="#C24A2A" />
        <rect x={545} y={25} width={60} height={16} fill="#E9A13B" />
        <circle cx={575} cy={45} r={10} fill="#FFD489" />

        {/* skyline */}
        <g fill="#241A2B">
          <rect x={547} y={63} width={8} height={22} />
          <rect x={557} y={54} width={6} height={31} />
          <rect x={565} y={68} width={10} height={17} />
          <rect x={577} y={58} width={7} height={27} />
          <rect x={586} y={70} width={9} height={15} />
          <rect x={597} y={61} width={7} height={24} />
        </g>
        {/* palm */}
        <g fill="#171021">
          <rect x={594} y={50} width={2} height={35} />
          <rect x={588} y={48} width={7} height={2} />
          <rect x={595} y={46} width={7} height={2} />
          <rect x={591} y={45} width={4} height={2} />
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
        {/* charm plate - Red border on Dark Charcoal background */}
        <rect
          x={201}
          y={54}
          width={22}
          height={24}
          fill="#0F1923"
          stroke="#FF4655"
          strokeWidth={1.5}
          rx={1}
        />

        {/* Valorant Logo Mark (Red on Dark) */}
        <g fill="#FF4655">
          {/* Left main arm */}
          <polygon points="205,60 205,65 211,71 214,71 208,60" />
          {/* Right wedge triangle */}
          <polygon points="218,60 218,65 213,66" />
        </g>
      </Hotspot>
    </>
  );
}
