'use client';

import { useEffect, useRef } from 'react';
import { useRoom } from '@/lib/room-context';
import { getEntry } from '@/data/registry';
import type { EntryLink } from '@/lib/types';

/**
 * The centred window that opens over the monitor, for Entries marked
 * `surface: 'terminal'`. Everything else uses the right-hand sheet.
 *
 * Deliberately not the same chrome as the sheet: this one is a little
 * desktop window with traffic lights and a shell prompt, so opening the
 * monitor feels like sitting down at it rather than opening another panel.
 */
export default function TerminalWindow() {
  const { openId, close } = useRoom();
  const entry = getEntry(openId);
  const isOpen = entry?.surface === 'terminal';
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen, openId]);

  return (
    <div
      className={`win${isOpen ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="false"
      aria-labelledby="win-title"
      aria-hidden={!isOpen}
    >
      <div className="win__bar">
        <span className="win__lights" aria-hidden="true">
          <i /><i /><i />
        </span>
        <button
          ref={closeRef}
          className="backbtn"
          onClick={close}
          aria-label="Close terminal"
          tabIndex={isOpen ? 0 : -1}
        >
          <span aria-hidden="true">✕</span> Back to the room
        </button>
      </div>

      <div className="win__body">
        {isOpen && entry && (
          <>
            <h2 id="win-title" className="sr-only">
              {entry.title}
            </h2>

            {entry.term && (
              <pre className="win__term">
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

            {entry.text?.split('\n\n').map((para, i) => (
              <p key={i} className="win__lead">
                {para}
              </p>
            ))}

            {entry.links && (
              <>
                <p className="win__hint">pick a channel ↓</p>
                <div className="cards">
                  {entry.links.map((link) => (
                    <a
                      className="card"
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={isOpen ? 0 : -1}
                      title={link.value}
                    >
                      <ChannelIcon name={link.icon} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </>
            )}

            <p className="win__prompt">
              <span>ayush@akrverse:~$</span>
              <i className="caret" aria-hidden="true" />
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/** Line-art glyphs, sized to the card. Drawn rather than imported. */
function ChannelIcon({ name }: { name: EntryLink['icon'] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'mail':
      return (
        <svg {...common}>
          <rect x="2.5" y="5" width="19" height="14" rx="2" />
          <path d="m3 6.5 9 6.5 9-6.5" />
        </svg>
      );
    case 'github':
      return (
        <svg {...common}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common}>
          <rect x="2.5" y="2.5" width="19" height="19" rx="2" />
          <path d="M7 10.5V17M7 7v.01M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
        </svg>
      );
    case 'x':
      return (
        <svg {...common}>
          <path d="M4 4l16 16M20 4L4 20" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
        </svg>
      );
  }
}
