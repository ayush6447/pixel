/**
 * Every clickable thing in the room resolves to one Entry.
 * To add a new object: draw it, wrap it in <Hotspot>, add an Entry here.
 */

export type Rect = { x: number; y: number; w: number; h: number };

export type EntryLink = {
  label: string;
  value: string;
  href: string;
};

export type Entry = {
  /** matches the Hotspot id */
  id: string;
  /** small eyebrow above the title: "Project", "About", "Contact"... */
  kind: string;
  title: string;
  /** line under the title — year, domain, status */
  meta: string;
  /** paragraphs, separated by a blank line */
  text?: string;
  /** monospace terminal block, rendered before the text */
  term?: string[];
  links?: EntryLink[];
  chips?: string[];
  cta?: { label: string; href: string };
};

/** A book on the shelf. Position is in SVG units on the 480x270 grid. */
export type Book = Entry & {
  /** left edge of the spine */
  x: number;
  /** y of the shelf board the book stands on */
  shelf: number;
  /** spine width, 9–14 reads well */
  w: number;
  /** svg palette class for the spine */
  fill: SwatchClass;
  /** text colour on the spine */
  ink: string;
  /** short uppercase label printed on the spine */
  spine: string;
};

export type SwatchClass =
  | 's-bone'
  | 's-amber'
  | 's-indigo'
  | 's-light'
  | 's-mid'
  | 's-leaf'
  | 's-muted';
