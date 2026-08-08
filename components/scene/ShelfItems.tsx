'use client';

import Hotspot from '@/components/Hotspot';

/**
 * The four things on the shelf that aren't books: trophy, diploma, mortarboard
 * and briefcase. Each stands on a shelf board (y = 90, 130, 170, 206) and opens
 * its own Entry.
 *
 * They also exist to fill the case — six thin spines in a 180-unit bookshelf
 * read as an empty room at desktop size.
 */
export default function ShelfItems() {
  return (
    <>
      {/* mortarboard on a stack of books — top shelf, board y=90 */}
      <Hotspot
        id="education"
        label="Education"
        hit={{ x: 146, y: 66, w: 40, h: 26 }}
        ring={{ x: 147, y: 67, w: 38, h: 24 }}
        pip={{ x: 186, y: 67 }}
      >
        {/* books it rests on */}
        <rect x={152} y={82} width={30} height={4} className="s-indigo" />
        <rect x={154} y={86} width={26} height={4} className="s-bone" />
        {/* crown, then the flat board — light, or it vanishes into the shelf */}
        <rect x={158} y={76} width={18} height={6} className="s-edge" />
        <rect x={150} y={72} width={34} height={4} className="s-light" />
        <rect x={154} y={70} width={26} height={2} className="s-light" />
        <rect x={165} y={68} width={4} height={2} className="s-amber" />
        {/* tassel */}
        <rect x={182} y={73} width={2} height={9} className="s-amber" />
        <rect x={180} y={82} width={5} height={3} className="s-hot" />
      </Hotspot>

      {/* framed certificate, leaning on the back — second shelf, board y=130 */}
      <Hotspot
        id="certifications"
        label="Certifications"
        hit={{ x: 148, y: 102, w: 40, h: 30 }}
        ring={{ x: 149, y: 103, w: 38, h: 28 }}
        pip={{ x: 188, y: 103 }}
      >
        <rect x={150} y={104} width={36} height={26} className="s-light" />
        <rect x={152} y={106} width={32} height={22} className="s-bone" />
        {/* ruled text */}
        <g className="s-muted">
          <rect x={156} y={110} width={24} height={2} />
          <rect x={156} y={114} width={17} height={1.5} />
          <rect x={156} y={117} width={20} height={1.5} />
          <rect x={156} y={120} width={13} height={1.5} />
        </g>
        {/* wax seal and ribbon */}
        <circle cx={178} cy={122} r={3.5} className="s-amber" />
        <rect x={176} y={125} width={2} height={4} className="s-hot" />
        <rect x={179} y={125} width={2} height={4} className="s-hot" />
      </Hotspot>

      {/* trophy — third shelf, board y=170 */}
      <Hotspot
        id="achievements"
        label="Achievements"
        hit={{ x: 100, y: 140, w: 26, h: 32 }}
        ring={{ x: 101, y: 142, w: 24, h: 29 }}
        pip={{ x: 126, y: 141 }}
      >
        {/* handles */}
        <rect x={102} y={146} width={3} height={8} className="s-amber" />
        <rect x={121} y={146} width={3} height={8} className="s-amber" />
        <rect x={102} y={145} width={5} height={2} className="s-amber" />
        <rect x={119} y={145} width={5} height={2} className="s-amber" />
        {/* bowl */}
        <rect x={105} y={144} width={16} height={11} className="s-amber" />
        <rect x={107} y={155} width={12} height={3} className="s-amber" />
        <rect x={108} y={146} width={3} height={7} className="s-hot" />
        {/* stem and base */}
        <rect x={111} y={158} width={4} height={4} className="s-amber" />
        <rect x={106} y={162} width={14} height={3} className="s-amber" />
        <rect x={103} y={165} width={20} height={5} className="s-hot" />
      </Hotspot>

      {/* briefcase — bottom shelf, board y=206 */}
      <Hotspot
        id="experience"
        label="Experience"
        hit={{ x: 80, y: 184, w: 30, h: 24 }}
        ring={{ x: 81, y: 185, w: 28, h: 22 }}
        pip={{ x: 110, y: 185 }}
      >
        <rect x={91} y={186} width={8} height={2} className="s-light" />
        <rect x={90} y={186} width={2} height={5} className="s-light" />
        <rect x={98} y={186} width={2} height={5} className="s-light" />
        <rect x={82} y={190} width={26} height={16} className="s-light" />
        <rect x={84} y={192} width={22} height={12} className="s-dark" />
        <rect x={82} y={196} width={26} height={2} className="s-mid" />
        <rect x={92} y={195} width={6} height={4} className="s-amber" />
      </Hotspot>
    </>
  );
}
