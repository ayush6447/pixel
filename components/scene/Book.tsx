'use client';

import Hotspot from '@/components/Hotspot';
import type { Book as BookType } from '@/lib/types';

const HEIGHT = 34;
/** vertical run the label may use, leaving a margin at each end of the spine */
const RUN = HEIGHT - 9;
/** advance per character at 1px font: JetBrains Mono is 0.6em, plus tracking */
const ADVANCE = 0.66;
const MAX_SIZE = 5;

/**
 * One spine on the shelf. Stands on the board at `shelf`.
 *
 * The label is rotated a quarter turn and centred on the spine. Its size is
 * derived from the character count rather than fixed, because the long titles
 * (BLINDASSIST, MODERATION) overrun both ends of the book at 5px and spill
 * onto the shelf above.
 */
export default function Book({ book }: { book: BookType }) {
  const { x, w, shelf, fill, ink, spine, id, title } = book;
  const top = shelf - HEIGHT;

  const cx = x + w / 2;
  const cy = top + HEIGHT / 2;
  const size = Math.min(MAX_SIZE, RUN / (spine.length * ADVANCE));

  const bandFill = ink === '#F2F1EC' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.28)';

  return (
    <Hotspot
      id={id}
      label={title}
      hit={{ x: x - 1, y: top - 1, w: w + 2, h: HEIGHT + 2 }}
      ring={{ x: x - 1.5, y: top - 1.5, w: w + 3, h: HEIGHT + 3 }}
      pip={{ x: x + w + 1, y: top - 3 }}
    >
      <rect x={x} y={top} width={w} height={HEIGHT} className={fill} />
      <rect x={x + 1} y={top + 3} width={w - 2} height={2} fill={bandFill} />
      <rect x={x + 1} y={top + HEIGHT - 5} width={w - 2} height={2} fill={bandFill} />
      <text
        x={cx}
        y={cy}
        className="spine-label"
        fill={ink}
        fontSize={size}
        textAnchor="middle"
        dominantBaseline="central"
        transform={`rotate(-90 ${cx} ${cy})`}
      >
        {spine}
      </text>
    </Hotspot>
  );
}
