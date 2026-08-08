'use client';

import Hotspot from '@/components/Hotspot';
import { useRoom } from '@/lib/room-context';

/** Pendant lamp. The cord toggles day/night instead of opening a drawer. */
export default function Lamp() {
  const { night, toggleNight } = useRoom();

  return (
    <Hotspot
      label={night ? 'Pull the cord — lights on' : 'Pull the cord — lights off'}
      onActivate={toggleNight}
      hit={{ x: 344, y: 0, w: 54, h: 96 }}
      ring={{ x: 344, y: 54, w: 52, h: 42 }}
      pip={{ x: 391, y: 72 }}
    >
      <rect x={369} y={0} width={2} height={58} className="s-dark" />
      <polygon points="348,86 392,86 382,58 358,58" className="s-amber" />
      <polygon points="358,58 382,58 380,64 360,64" className="s-hot" />
      <rect x={348} y={86} width={44} height={3} className="s-hot" />
      <rect x={362} y={89} width={16} height={5} className="s-hot" />
      {/* the cord */}
      <rect x={392} y={40} width={1} height={26} className="s-edge" />
      <rect x={391} y={66} width={3} height={4} className="s-amber" />
    </Hotspot>
  );
}
