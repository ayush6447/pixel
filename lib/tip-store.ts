'use client';

import { useSyncExternalStore } from 'react';

/**
 * What the tooltip needs to place itself: the label, and where the hotspot
 * is on screen right now. Viewport pixels, so the SVG scale is already
 * baked in.
 *
 * This deliberately lives outside RoomProvider. The parallax drifts the
 * scene under the pointer, so a hovered hotspot re-measures itself on every
 * frame of that drift — pushing that through context would re-render every
 * book and every scene component sixty times a second. Here, only the two
 * components that read it re-render.
 */
export type Tip = {
  label: string;
  /** horizontal centre of the object */
  x: number;
  top: number;
  bottom: number;
  /** 'pill' is the amber toggle callout; the speaker is the only one */
  variant: 'pill' | 'plain';
};

let current: Tip | null = null;
const listeners = new Set<() => void>();

function same(a: Tip | null, b: Tip | null): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  return (
    a.label === b.label &&
    a.variant === b.variant &&
    Math.abs(a.x - b.x) < 0.5 &&
    Math.abs(a.top - b.top) < 0.5 &&
    Math.abs(a.bottom - b.bottom) < 0.5
  );
}

export function setTip(next: Tip | null): void {
  // Re-measuring during a parallax drift lands on the same value constantly;
  // bailing here is what keeps the tooltip off the render path.
  if (same(current, next)) return;
  current = next;
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

const getSnapshot = () => current;
const getServerSnapshot = () => null;

export function useTip(): Tip | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
