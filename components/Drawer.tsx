'use client';

import { useEffect, useRef } from 'react';
import { useRoom } from '@/lib/room-context';
import { getEntry } from '@/data/registry';

/** Sliding panel that shows whichever Entry is open. */
export default function Drawer() {
  const { openId, close } = useRoom();
  const entry = getEntry(openId);
  const closeRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openId) {
      closeRef.current?.focus();
      if (bodyRef.current) bodyRef.current.scrollTop = 0;
    }
  }, [openId]);

  const isOpen = Boolean(entry);

  return (
    <>
      <div
        className={`scrim${isOpen ? ' is-on' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
      <aside
        className={`drawer${isOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="false"
        aria-labelledby="drawer-title"
        aria-hidden={!isOpen}
      >
        <div className="drawer__top">
          <span className="drawer__kind">{entry?.kind ?? ''}</span>
          <button
            ref={closeRef}
            className="drawer__close"
            onClick={close}
            aria-label="Close panel"
            tabIndex={isOpen ? 0 : -1}
          >
            CLOSE ✕
          </button>
        </div>

        <div className="drawer__body" ref={bodyRef}>
          {entry && (
            <>
              <span className="year">{entry.meta}</span>
              <h2 id="drawer-title">{entry.title}</h2>

              {entry.term && (
                <pre className="term">
                  {entry.term.map((line, i) => (
                    <span key={i}>
                      {line.startsWith('$') ? (
                        <>
                          <span className="c">$</span>
                          {line.slice(1)}
                        </>
                      ) : (
                        line
                      )}
                      {'\n'}
                    </span>
                  ))}
                </pre>
              )}

              {entry.text
                ?.split('\n\n')
                .map((para, i) => <p key={i}>{para}</p>)}

              {entry.links && (
                <ul className="linklist">
                  {entry.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                        <span>{l.value}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {entry.chips && entry.chips.length > 0 && (
                <div className="chips">
                  {entry.chips.map((c) => (
                    <span className="chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {entry.cta && (
                <a className="out" href={entry.cta.href}>
                  {entry.cta.label} →
                </a>
              )}
            </>
          )}
        </div>
      </aside>
    </>
  );
}
