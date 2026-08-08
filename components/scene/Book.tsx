'use client';

import Hotspot from '@/components/Hotspot';
import type { Book as BookType } from '@/lib/types';

const HEIGHT = 34;

/** One spine on the shelf. Stands on the board at `shelf`. */
export default function Book({ book }: { book: BookType }) {
  const { x, w, shelf, fill, ink, spine, id, title } = book;
  const top = shelf - HEIGHT;
  const bandFill = ink === '#F2F1EC' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.28)';
  const tx = x + w / 2 + 1.8;
  const ty = top + HEIGHT - 7;

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
        x={tx}
        y={ty}
        className="spine-label"
        fill={ink}
        textAnchor="start"
        transform={`rotate(-90 ${tx} ${ty})`}
      >
        {spine}
      </text>
    </Hotspot>
  );
}
