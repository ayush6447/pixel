import Book from './Book';
import ShelfItems from './ShelfItems';
import { PROJECTS } from '@/data/projects';

/**
 * The case itself plus the non-interactive dressing.
 * Shelf boards: y = 90, 130, 170, 206. Interior runs x 38..198.
 */
export default function Bookshelf() {
  return (
    <g>
      {/* carcass */}
      <rect x={28} y={42} width={180} height={6} className="s-light" />
      <rect x={30} y={48} width={176} height={180} className="s-dark" />
      <rect x={36} y={52} width={164} height={172} className="s-mid" />
      <rect x={38} y={54} width={160} height={170} className="s-dark" />

      <g className="s-light">
        <rect x={36} y={90} width={164} height={4} />
        <rect x={36} y={130} width={164} height={4} />
        <rect x={36} y={170} width={164} height={4} />
        <rect x={36} y={206} width={164} height={4} />
      </g>
      <g className="s-mid">
        <rect x={36} y={94} width={164} height={1} />
        <rect x={36} y={134} width={164} height={1} />
        <rect x={36} y={174} width={164} height={1} />
        <rect x={36} y={210} width={164} height={1} />
      </g>
      <rect x={28} y={222} width={180} height={6} className="s-light" />

      {/* plant — the only dressing left on the bottom shelf. The mug and the
          flat book stack went; four hotspots plus six spines was already a
          busy case, and the eye had nowhere to rest. */}
      <g>
        <rect x={142} y={196} width={14} height={10} className="s-amber" />
        <rect x={140} y={193} width={18} height={3} className="s-hot" />
        <rect x={148} y={180} width={2} height={14} className="s-leaf" />
        <rect x={142} y={176} width={6} height={2} className="s-leaf" />
        <rect x={140} y={178} width={4} height={2} className="s-leaf" />
        <rect x={150} y={172} width={6} height={2} className="s-leaf" />
        <rect x={154} y={174} width={4} height={4} className="s-leaf" />
        <rect x={144} y={184} width={4} height={2} className="s-leaf" />
        <rect x={150} y={186} width={5} height={2} className="s-leaf" />
      </g>

      {PROJECTS.map((book) => (
        <Book key={book.id} book={book} />
      ))}

      <ShelfItems />
    </g>
  );
}
