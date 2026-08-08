'use client';

import { useEffect, useRef, useState } from 'react';
import { useRoom } from '@/lib/room-context';
import { getEntry } from '@/data/registry';
import { PROJECTS } from '@/data/projects';

/**
 * The surface a shelf book opens into: an actual two-page spread, paged
 * through the other projects rather than closing and picking another spine.
 *
 * The right page swings open from the gutter on entry (rotateY with the
 * origin on its left edge), which is the bit that sells it as a book rather
 * than another modal.
 */
export default function BookSpread() {
  const { openId, close } = useRoom();
  const openEntry = getEntry(openId);
  const isOpen = openEntry?.surface === 'book';

  // Which spread is showing. Follows openId, then the pager takes over.
  const [index, setIndex] = useState(0);
  const [turning, setTurning] = useState<'next' | 'prev' | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen || !openId) return;
    const i = PROJECTS.findIndex((p) => p.id === openId);
    if (i >= 0) setIndex(i);
    closeRef.current?.focus();
  }, [isOpen, openId]);

  const book = PROJECTS[index];

  const go = (delta: number) => {
    const next = (index + delta + PROJECTS.length) % PROJECTS.length;
    setTurning(delta > 0 ? 'next' : 'prev');
    setIndex(next);
    window.setTimeout(() => setTurning(null), 380);
  };

  // Arrow keys page the book while it is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, index]);

  return (
    <div
      className={`spread${isOpen ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="false"
      aria-labelledby="spread-title"
      aria-hidden={!isOpen}
    >
      <button
        ref={closeRef}
        className="backbtn spread__close"
        onClick={close}
        aria-label="Close book"
        tabIndex={isOpen ? 0 : -1}
      >
        <span aria-hidden="true">✕</span> Back to the room
      </button>

      <div className={`spread__book${turning ? ` is-turning-${turning}` : ''}`}>
        <div className="page page--left">
          <h2 id="spread-title">{book.title}</h2>
          <p className="page__kicker">{book.meta}</p>
          {book.text?.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
        </div>

        <div className="page page--right">
          <div className="page__plate" aria-hidden="true">
            {/* stand-in for a screenshot: the spine, blown up */}
            <span className={`plate__spine ${book.fill}`} style={{ color: book.ink }}>
              {book.spine}
            </span>
          </div>

          <dl className="page__facts">
            {book.role && (
              <div>
                <dt>Role</dt>
                <dd>{book.role}</dd>
              </div>
            )}
            <div>
              <dt>Year</dt>
              <dd>{book.meta.split('·')[0]?.trim()}</dd>
            </div>
          </dl>

          {book.chips && (
            <div className="chips">
              {book.chips.map((c) => (
                <span className="chip chip--pill" key={c}>
                  {c}
                </span>
              ))}
            </div>
          )}

          {book.cta && (
            <a className="out" href={book.cta.href} tabIndex={isOpen ? 0 : -1}>
              {book.cta.label} →
            </a>
          )}
        </div>
      </div>

      <div className="pager">
        <button
          onClick={() => go(-1)}
          aria-label="Previous project"
          tabIndex={isOpen ? 0 : -1}
        >
          ←
        </button>
        <span aria-live="polite">
          {index + 1} of {PROJECTS.length}
        </span>
        <button
          onClick={() => go(1)}
          aria-label="Next project"
          tabIndex={isOpen ? 0 : -1}
        >
          →
        </button>
      </div>
    </div>
  );
}
