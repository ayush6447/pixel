/**
 * Every clickable thing in the room resolves to one Entry.
 * To add a new object: draw it, wrap it in <Hotspot>, add an Entry here.
 */

export type Rect = { x: number; y: number; w: number; h: number };

export type EntryLink = {
  label: string;
  value: string;
  href: string;
  /** picks the icon on the terminal surface: mail, github, linkedin, x, web */
  icon?: string;
};

/** A labelled cluster of chips — "FRONT-END", "CREATIVE / 3D"... */
export type ChipGroup = {
  title: string;
  items: string[];
};

/** One dated row in a timeline: experience, education, certifications. */
export type TimelineItem = {
  /** left column — years, issuer, grade */
  meta: string;
  title: string;
  /** organisation, board, issuing body */
  org?: string;
  detail?: string;
  href?: string;
};

export type Entry = {
  /** matches the Hotspot id */
  id: string;
  /** small eyebrow above the title: "Project", "About", "Contact"... */
  kind: string;
  title: string;
  /** line under the title — year, domain, status */
  meta: string;
  /**
   * Where this entry opens. 'sheet' is the right-hand drawer and is the
   * default; 'terminal' is the centred window over the monitor; 'book' is
   * the two-page spread the shelf books open into.
   */
  surface?: 'sheet' | 'terminal' | 'book';
  /** shown on the right page of the book spread */
  role?: string;
  /** square image shown beside the title on the sheet */
  avatar?: { src: string; alt: string };
  /** paragraphs, separated by a blank line */
  text?: string;
  /** monospace terminal block, rendered before the text */
  term?: string[];
  /** dated rows, rendered as a timeline under the text */
  timeline?: TimelineItem[];
  /** heading above the chip groups, e.g. "What I work with" */
  groupsTitle?: string;
  groups?: ChipGroup[];
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
