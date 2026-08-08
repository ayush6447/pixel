import { PROJECTS } from './projects';
import { OBJECTS } from './objects';
import type { Entry } from '@/lib/types';

/** Single lookup for the drawer. Books and objects live in one map. */
export const ENTRIES: Record<string, Entry> = Object.fromEntries(
  [...PROJECTS, ...OBJECTS].map((e) => [e.id, e]),
);

export function getEntry(id: string | null): Entry | null {
  return id ? ENTRIES[id] ?? null : null;
}
