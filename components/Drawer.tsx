'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRoom } from '@/lib/room-context';
import { getEntry } from '@/data/registry';
import TerminalWindow from './TerminalWindow';

/**
 * The right-hand sheet. Renders whichever Entry is open, unless that Entry
 * asks for the terminal surface instead — the monitor gets its own window.
 */
export default function Drawer() {
  const { openId, close } = useRoom();
  const entry = getEntry(openId);
  const closeRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const onTerminal = entry?.surface === 'terminal';
  const isOpen = Boolean(entry) && !onTerminal;

  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
      if (bodyRef.current) bodyRef.current.scrollTop = 0;
    }
  }, [isOpen, openId]);

  return (
    <>
      <TerminalWindow />

      <div
        className={`scrim${entry ? ' is-on' : ''}`}
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
            className="backbtn"
            onClick={close}
            aria-label="Close panel"
            tabIndex={isOpen ? 0 : -1}
          >
            <span aria-hidden="true">✕</span> Back to the room
          </button>
        </div>

        <div className="drawer__body" ref={bodyRef}>
          {entry && !onTerminal && (
            <>
              <div className="drawer__head">
                {entry.avatar && (
                  <Image
                    className="drawer__avatar"
                    src={entry.avatar.src}
                    alt={entry.avatar.alt}
                    width={72}
                    height={72}
                    priority
                  />
                )}
                <div>
                  <span className="year">{entry.meta}</span>
                  <h2 id="drawer-title">{entry.title}</h2>
                </div>
              </div>

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

              {entry.text?.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}

              {entry.timeline && (
                <ol className="timeline">
                  {entry.timeline.map((row, i) => (
                    <li key={i}>
                      <span className="timeline__meta">{row.meta}</span>
                      <div className="timeline__body">
                        <h3>
                          {row.href ? (
                            <a href={row.href} target="_blank" rel="noopener noreferrer">
                              {row.title}
                            </a>
                          ) : (
                            row.title
                          )}
                        </h3>
                        {row.org && <span className="timeline__org">{row.org}</span>}
                        {row.detail && <p>{row.detail}</p>}
                      </div>
                    </li>
                  ))}
                </ol>
              )}

              {entry.groups && (
                <section className="groups">
                  {entry.groupsTitle && <h3 className="rule">{entry.groupsTitle}</h3>}
                  <div className="groups__grid">
                    {entry.groups.map((group) => (
                      <div key={group.title}>
                        <h4>{group.title}</h4>
                        <div className="chips">
                          {group.items.map((item) => (
                            <span className="chip chip--pill" key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

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
