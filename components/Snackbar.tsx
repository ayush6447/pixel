'use client';

import { useEffect, useRef, useState } from 'react';
import { useRoom } from '@/lib/room-context';

/** how long it stays up before fading */
const SHOW_MS = 3500;
/** matches the fade in globals.css */
const FADE_MS = 300;

/**
 * Announces the track when the speaker starts playing, then gets out of the
 * way. Long enough to actually read a title and an artist, which two seconds
 * was not.
 *
 * Only fires on the off→on transition. Muting says nothing — you already
 * know what you just did, and a toast for it would be noise.
 */
export default function Snackbar() {
  const { music, track } = useRoom();
  const [shown, setShown] = useState(false);
  const wasPlaying = useRef(false);

  useEffect(() => {
    const started = music && !wasPlaying.current;
    wasPlaying.current = music;
    if (!started || !track) return;

    setShown(true);
    const id = window.setTimeout(() => setShown(false), SHOW_MS);
    return () => window.clearTimeout(id);
  }, [music, track]);

  // Keep the text through the fade-out so it doesn't collapse on the way out.
  const last = useRef<{ title: string; artist: string } | null>(null);
  if (track && shown) last.current = { title: track.title, artist: track.artist };
  const showing = last.current;

  return (
    <div
      className={`snack${shown ? ' is-on' : ''}`}
      role="status"
      aria-live="polite"
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      {showing && (
        <>
          <span className="snack__eq" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="snack__text">
            <b>Now playing</b>
            {showing.title} — {showing.artist}
          </span>
        </>
      )}
    </div>
  );
}
