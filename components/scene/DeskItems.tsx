'use client';

import Hotspot from '@/components/Hotspot';

/** Phone and the Nano sensor — the two small things on the desk. */
export default function DeskItems() {
  return (
    <>
      <Hotspot
        id="contact"
        label="Contact"
        tone="none"
        hit={{ x: 296, y: 178, w: 20, h: 20 }}
        ring={{ x: 297, y: 180, w: 18, h: 17 }}
        pip={{ x: 316, y: 179 }}
      >
        <rect x={300} y={182} width={12} height={14} className="s-dark" />
        <rect x={301} y={184} width={10} height={10} className="s-indigo" />
        <rect x={304} y={187} width={4} height={4} className="s-hot" />
      </Hotspot>

      <Hotspot
        id="sensor"
        label="Vayumaan Nano air sensor"
        tone="none"
        hit={{ x: 418, y: 180, w: 28, h: 18 }}
        ring={{ x: 419, y: 182, w: 26, h: 16 }}
        pip={{ x: 444, y: 181 }}
      >
        <rect x={424} y={184} width={18} height={12} className="s-light" />
        <rect x={426} y={186} width={14} height={8} className="s-dark" />
        <rect x={428} y={188} width={3} height={4} className="s-leaf" />
        <rect x={433} y={188} width={3} height={4} className="s-amber" />
        <rect x={420} y={188} width={4} height={3} className="s-edge" />
      </Hotspot>
    </>
  );
}
