'use client';

import { useEffect, useState } from 'react';

/** Wall clock in Ranchi. Empty string on the server so hydration matches. */
export function useIstClock(): string {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      try {
        const t = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date());
        setTime(`${t} IST`);
      } catch {
        setTime('');
      }
    };
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
