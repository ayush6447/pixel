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

/** Viewport-pixel point the camera pushes into when a panel opens. */
export type Focus = { x: number; y: number };

type RoomState = {
  openId: string | null;
  /** `at` is the object's screen centre — the camera zooms toward it */
  open: (id: string, at?: Focus) => void;
  close: () => void;

  /** survives the close transition so the camera can pull back smoothly */
  focus: Focus | null;

  night: boolean;
  toggleNight: () => void;

  /** ambient loop; starts off because browsers block autoplay */
  music: boolean;
  toggleMusic: () => void;

  /** true until the visitor interacts — drives the idle pips */
  fresh: boolean;
};

const Ctx = createContext<RoomState | null>(null);

/** Jamshedpur is UTC+5:30. After 19:00 local the room loads dark. */
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
  const [focus, setFocus] = useState<Focus | null>(null);
  const [night, setNight] = useState(false);
  const [music, setMusic] = useState(false);
  const [fresh, setFresh] = useState(true);

  // Decided on the client so the server render stays deterministic.
  useEffect(() => {
    if (isDarkOutside()) setNight(true);
  }, []);

  const open = useCallback((id: string, at?: Focus) => {
    setFresh(false);
    if (at) setFocus(at);
    setOpenId(id);
  }, []);

  // Keep `focus` on close: the zoom-out has to run from where it zoomed in.
  const close = useCallback(() => setOpenId(null), []);

  const toggleNight = useCallback(() => {
    setFresh(false);
    setNight((n) => !n);
  }, []);

  const toggleMusic = useCallback(() => {
    setFresh(false);
    setMusic((m) => !m);
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
    () => ({
      openId,
      open,
      close,
      focus,
      night,
      toggleNight,
      music,
      toggleMusic,
      fresh,
    }),
    [openId, open, close, focus, night, toggleNight, music, toggleMusic, fresh],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useRoom(): RoomState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useRoom must be used inside <RoomProvider>');
  return ctx;
}
