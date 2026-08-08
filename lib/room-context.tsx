'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type RoomState = {
  openId: string | null;
  open: (id: string) => void;
  close: () => void;

  night: boolean;
  toggleNight: () => void;

  /** label shown in the caption bar at the bottom */
  caption: string | null;
  setCaption: (label: string | null) => void;

  /** true until the visitor interacts — drives the idle pips */
  fresh: boolean;
};

const Ctx = createContext<RoomState | null>(null);

/** Ranchi is UTC+5:30. After 19:00 local the room loads dark. */
function isDarkOutside(): boolean {
  try {
    const hour = Number(
      new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        hour12: false,
      }).format(new Date()),
    );
    return hour >= 19 || hour < 6;
  } catch {
    return false;
  }
}

export function RoomProvider({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [night, setNight] = useState(false);
  const [caption, setCaption] = useState<string | null>(null);
  const [fresh, setFresh] = useState(true);

  // Decided on the client so the server render stays deterministic.
  useEffect(() => {
    if (isDarkOutside()) setNight(true);
  }, []);

  const open = useCallback((id: string) => {
    setFresh(false);
    setOpenId(id);
  }, []);

  const close = useCallback(() => setOpenId(null), []);

  const toggleNight = useCallback(() => {
    setFresh(false);
    setNight((n) => !n);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('night', night);
  }, [night]);

  useEffect(() => {
    document.body.classList.toggle('fresh', fresh);
  }, [fresh]);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openId, close]);

  const value = useMemo(
    () => ({ openId, open, close, night, toggleNight, caption, setCaption, fresh }),
    [openId, open, close, night, toggleNight, caption, fresh],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useRoom(): RoomState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useRoom must be used inside <RoomProvider>');
  return ctx;
}
