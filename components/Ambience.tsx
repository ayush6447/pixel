'use client';

import { useEffect, useRef } from 'react';
import { useRoom } from '@/lib/room-context';

/** Drop your loop here. Nothing plays until this file exists. */
const SRC = '/ambient.mp3';

/**
 * The audio behind the speaker hotspot. Deliberately headless — the
 * speaker in the room is the only control.
 *
 * Starts paused: browsers refuse autoplay without a gesture, so the
 * first click is what actually starts it. If the file is missing the
 * play() promise rejects and we swallow it — the speaker still toggles
 * its notes, the room just stays quiet.
 */
export default function Ambience() {
  const { music } = useRoom();
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (music) {
      el.volume = 0.35;
      void el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [music]);

  return <audio ref={ref} src={SRC} loop preload="none" aria-hidden="true" />;
}
