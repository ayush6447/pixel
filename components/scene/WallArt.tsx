'use client';

import Hotspot from '@/components/Hotspot';

/**
 * The things hanging on the wall that aren't the portrait: a racing tapestry
 * beside the monitor, a game poster over the printer, and a weapon charm
 * dangling off the shelf.
 *
 * All three are fan art drawn from rectangles — a silhouette and a colour
 * scheme, not anybody's actual logo.
 *
 * The tapestry and poster are away from the shelf, so they take tone="none":
 * they lift on hover instead of growing a label.
 */
export default function WallArt() {
  return (
    <>
      {/* racing tapestry — hangs on the wall right of the monitor */}
      <Hotspot
        id="racing"
        label="Formula 1"
        tone="none"
        hit={{ x: 420, y: 58, w: 46, h: 122 }}
        ring={{ x: 422, y: 60, w: 42, h: 118 }}
        pip={{ x: 466, y: 60 }}
      >
        {/* rail and cloth */}
        <rect x={420} y={60} width={46} height={3} className="s-edge" />
        <rect x={422} y={63} width={42} height={112} className="s-hot" />
        <rect x={422} y={63} width={42} height={112} fill="#B4231F" />

        {/* tricolore band */}
        <rect x={422} y={63} width={14} height={5} className="s-leaf" />
        <rect x={436} y={63} width={14} height={5} className="s-bone" />
        <rect x={450} y={63} width={14} height={5} fill="#8E1A16" />

        {/* Car in side profile rather than a prancing horse — a horse is
            unreadable at 30 units across, a single-seater silhouette is not. */}
        <g fill="#151920">
          {/* rear wing */}
          <rect x={451} y={84} width={10} height={3} />
          <rect x={454} y={87} width={3} height={5} />
          {/* airbox and halo */}
          <rect x={445} y={86} width={5} height={6} />
          <rect x={438} y={89} width={8} height={3} />
          {/* body, nose, front wing */}
          <rect x={436} y={92} width={16} height={7} />
          <rect x={428} y={94} width={9} height={5} />
          <rect x={424} y={97} width={6} height={3} />
          {/* floor */}
          <rect x={427} y={99} width={30} height={2} />
          {/* wheels */}
          <rect x={429} y={99} width={9} height={9} />
          <rect x={448} y={99} width={9} height={9} />
        </g>
        {/* rims */}
        <g fill="#B4231F">
          <rect x={432} y={102} width={3} height={3} />
          <rect x={451} y={102} width={3} height={3} />
        </g>

        {/* race number plate */}
        <rect x={430} y={122} width={26} height={16} className="s-bone" />
        <text x={443} y={134} className="plate-num" textAnchor="middle">
          16
        </text>

        {/* chequered hem */}
        <g>
          <rect x={422} y={166} width={42} height={9} className="s-bone" />
          <g fill="#151920">
            <rect x={422} y={166} width={7} height={4.5} />
            <rect x={436} y={166} width={7} height={4.5} />
            <rect x={450} y={166} width={7} height={4.5} />
            <rect x={429} y={170.5} width={7} height={4.5} />
            <rect x={443} y={170.5} width={7} height={4.5} />
            <rect x={457} y={170.5} width={7} height={4.5} />
          </g>
        </g>
      </Hotspot>

      {/* game poster — above the printer */}
      <Hotspot
        id="gaming"
        label="Games"
        tone="none"
        hit={{ x: 496, y: 36, w: 84, h: 74 }}
        ring={{ x: 498, y: 38, w: 80, h: 70 }}
        pip={{ x: 580, y: 38 }}
      >
        <rect x={498} y={38} width={80} height={70} className="s-light" />
        <rect x={501} y={41} width={74} height={64} fill="#1E1622" />

        {/* dusk sky */}
        <rect x={501} y={41} width={74} height={30} fill="#C24A2A" />
        <rect x={501} y={41} width={74} height={12} fill="#E9A13B" />
        <circle cx={538} cy={57} r={9} fill="#FFD489" />

        {/* skyline */}
        <g fill="#241A2B">
          <rect x={503} y={62} width={9} height={20} />
          <rect x={514} y={56} width={7} height={26} />
          <rect x={523} y={66} width={11} height={16} />
          <rect x={536} y={59} width={8} height={23} />
          <rect x={546} y={68} width={10} height={14} />
          <rect x={558} y={62} width={7} height={20} />
          <rect x={567} y={70} width={8} height={12} />
        </g>
        {/* palm */}
        <g fill="#171021">
          <rect x={565} y={54} width={2} height={28} />
          <rect x={559} y={52} width={7} height={2} />
          <rect x={566} y={50} width={7} height={2} />
          <rect x={562} y={49} width={4} height={2} />
        </g>

        <rect x={501} y={82} width={74} height={23} fill="#141019" />
        <text x={538} y={95} className="poster-text" textAnchor="middle">
          LOS SANTOS
        </text>
        <rect x={520} y={99} width={36} height={1.5} className="s-amber" />
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
