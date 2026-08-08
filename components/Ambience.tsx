'use client';

import { useEffect, useRef } from 'react';
import { useRoom } from '@/lib/room-context';

/**
 * The audio behind the speaker hotspot. Deliberately headless — the
 * speaker in the room is the only control.
 *
 * Which of the three tracks plays is chosen per visit by RoomProvider, so
 * this just follows whatever it was handed.
 *
 * Starts paused: browsers refuse autoplay without a gesture, so the first
 * click is what actually starts it. If a file is missing the play() promise
 * rejects and we swallow it — the speaker still toggles its notes, the room
 * just stays quiet.
 */
export default function Ambience() {
  const { music, track } = useRoom();
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !track) return;

    if (music) {
      el.volume = 0.35;
      void el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [music, track]);

  if (!track) return null;

  return (
    <audio ref={ref} src={track.src} loop preload="none" aria-hidden="true" />
  );
}
