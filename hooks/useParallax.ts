'use client';

import { useEffect, type RefObject } from 'react';

/**
 * Publishes the pointer position on an element as --mx / --my, each a
 * unitless -1..1. The scene layers consume them in globals.css, which keeps
 * the drift entirely in CSS — no React render happens on pointer move.
 *
 * The room follows the cursor rather than opposing it: move left, the room
 * leans left. Layers use different multipliers, so the wall trails the
 * furniture and the flat drawing picks up a little depth.
 *
 * Does nothing under prefers-reduced-motion.
 */
export function useParallax(ref: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (calm.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      el.style.setProperty('--mx', x.toFixed(3));
      el.style.setProperty('--my', y.toFixed(3));
    };

    const onMove = (e: PointerEvent) => {
      x = (e.clientX / window.innerWidth - 0.5) * 2;
      y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    // Settle back to centre when the pointer leaves the window.
    const onLeave = () => {
      x = 0;
      y = 0;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [ref]);
}
