import { existsSync, rmSync } from 'node:fs';

/**
 * `next dev` and `next build` both write .next, but the artifacts are not
 * interchangeable. Starting dev on top of a production build fails with
 *
 *   Invariant: missing bootstrap script. This is a bug in Next.js
 *
 * and a wall of 500s on /_next/static/chunks/fallback/*, which reads like a
 * framework bug rather than a stale directory.
 *
 * A production build leaves BUILD_ID behind; a dev server never does. So if
 * BUILD_ID is there as dev starts up, the directory is the wrong shape and
 * the only fix is to throw it away. Runs from the `predev` script.
 */
const DIR = '.next';

if (existsSync(`${DIR}/BUILD_ID`)) {
  rmSync(DIR, { recursive: true, force: true });
  console.log('[clean] removed a production .next so dev can rebuild it');
}
