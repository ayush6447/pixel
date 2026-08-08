/**
 * Shared helper for the pixel maps in the codebase — the spider mark, the
 * prancing horse on the racing poster, and the loader's LOADING type.
 *
 * A map is an array of equal-length strings where '#' is on and anything
 * else is off. Emitting one rect per pixel is wasteful (the spider alone
 * would be ~450), so each row is merged into horizontal runs first.
 */
export type Run = { x: number; y: number; w: number };

export function toRuns(map: string[]): Run[] {
  const out: Run[] = [];

  map.forEach((row, y) => {
    let run = 0;
    // One past the end, so a run touching the right edge still flushes.
    for (let x = 0; x <= row.length; x += 1) {
      if (row[x] === '#') {
        run += 1;
        continue;
      }
      if (run) {
        out.push({ x: x - run, y, w: run });
        run = 0;
      }
    }
  });

  return out;
}

/** 5x7 pixel font. Only the glyphs the loader needs. */
export const FONT: Record<string, string[]> = {
  L: ['#....', '#....', '#....', '#....', '#....', '#....', '#####'],
  O: ['.###.', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
  A: ['.###.', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  D: ['####.', '#...#', '#...#', '#...#', '#...#', '#...#', '####.'],
  I: ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '#####'],
  N: ['#...#', '##..#', '##..#', '#.#.#', '#..##', '#..##', '#...#'],
  G: ['.###.', '#...#', '#....', '#.###', '#...#', '#...#', '.###.'],
};

/** Lays glyphs out side by side with a one-column gap. */
export function textMap(text: string): string[] {
  const glyphs = [...text].map((ch) => FONT[ch]);
  if (glyphs.some((g) => !g)) throw new Error(`FONT is missing a glyph in "${text}"`);

  return Array.from({ length: 7 }, (_, row) =>
    glyphs.map((g) => g[row]).join('.'),
  );
}
