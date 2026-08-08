'use client';

import { useEffect, useState } from 'react';
import { textMap, toRuns } from '@/lib/pixel';

/** how long the bar takes to fill */
const LOAD_MS = 2500;
/** fade-out after the bar completes */
const FADE_MS = 400;
/** cells in the progress bar; each lights LOAD_MS / CELLS apart */
const CELLS = 10;

const WORD = textMap('LOADING');
const WORD_RUNS = toRuns(WORD);
const WORD_COLS = WORD[0].length;
const WORD_ROWS = WORD.length;

/**
 * Boot screen: a pixel window that fills a segmented bar and gets out of
 * the way.
 *
 * LOADING is drawn from a 5x7 bitmap font rather than set in a typeface —
 * at this size a real font antialiases into grey mush against the dark
 * panel, and the whole point is that it reads as pixels.
 *
 * It renders on the server too, so the very first paint is the loader
 * rather than a flash of the room. The backdrop is a fixed dark colour
 * rather than a theme token on purpose: night mode is decided in an effect
 * after mount, and a themed backdrop would visibly flip colour mid-load.
 */
export default function Loader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const a = window.setTimeout(() => setDone(true), LOAD_MS);
    const b = window.setTimeout(() => setGone(true), LOAD_MS + FADE_MS);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`loader${done ? ' is-done' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading the room"
    >
      <div className="loader__win">
        <div className="loader__bar">
          <span className="loader__title">akrverse.exe</span>
          <span className="loader__controls" aria-hidden="true">
            <i className="ctl ctl--min" />
            <i className="ctl ctl--max" />
            <i className="ctl ctl--close" />
          </span>
        </div>

        <div className="loader__body">
          <div className="loader__word">
            <svg
              viewBox={`0 0 ${WORD_COLS} ${WORD_ROWS}`}
              shapeRendering="crispEdges"
              aria-hidden="true"
              focusable="false"
            >
              {WORD_RUNS.map((r) => (
                <rect
                  key={`${r.y}-${r.x}`}
                  x={r.x}
                  y={r.y}
                  width={r.w}
                  height={1}
                />
              ))}
            </svg>
            <span className="loader__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>

          {/* One element per cell rather than a gradient: the cells then
              divide the track exactly at any width, instead of the last one
              being sliced in half on a size the pitch doesn't divide. */}
          <div className="loader__track">
            {Array.from({ length: CELLS }, (_, i) => (
              <i
                key={i}
                className="loader__cell"
                style={{ animationDelay: `${(i * LOAD_MS) / CELLS}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
