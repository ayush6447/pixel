'use client';

import { useEffect, useState } from 'react';
import Hotspot from '@/components/Hotspot';
import { useRoom } from '@/lib/room-context';

/** how long the yank animation runs, in ms — keep in step with globals.css */
const PULL_MS = 420;

/** Pendant lamp. The cord toggles day/night instead of opening a drawer. */
export default function Lamp() {
  const { night, toggleNight } = useRoom();
  const [pulling, setPulling] = useState(false);

  // Retire the class once the yank finishes, so the next click replays it.
  useEffect(() => {
    if (!pulling) return;
    const id = window.setTimeout(() => setPulling(false), PULL_MS);
    return () => window.clearTimeout(id);
  }, [pulling]);

  return (
    <Hotspot
      label={night ? 'Pull the cord — lights on' : 'Pull the cord — lights off'}
      tone="none"
      onActivate={() => {
        setPulling(true);
        toggleNight();
      }}
      hit={{ x: 344, y: 0, w: 54, h: 96 }}
      ring={{ x: 344, y: 54, w: 52, h: 42 }}
      pip={{ x: 391, y: 72 }}
    >
      <rect x={369} y={0} width={2} height={58} className="s-dark" />
      <polygon points="348,86 392,86 382,58 358,58" className="s-amber" />
      <polygon points="358,58 382,58 380,64 360,64" className="s-hot" />
      <rect x={348} y={86} width={44} height={3} className="s-hot" />
      <rect x={362} y={89} width={16} height={5} className="s-hot" />

      {/* the cord — stretches on the way down, springs back past rest */}
      <g className={`cord${pulling ? ' is-pulling' : ''}`}>
        <rect x={392} y={40} width={1} height={26} className="s-edge" />
        <rect x={391} y={66} width={3} height={4} className="s-amber" />
      </g>
    </Hotspot>
  );
}
