export type Track = {
  src: string;
  title: string;
  artist: string;
};

/**
 * What the speaker might be playing. One is picked at random per visit, so
 * the room doesn't sound identical every time you come back.
 *
 * Files live in public/ and are served as-is — nothing plays until the
 * visitor clicks the speaker, so none of this is fetched on load.
 */
export const TRACKS: Track[] = [
  {
    src: '/she-and-him.mp3',
    title: 'I Thought I Saw Your Face Today',
    artist: 'She & Him',
  },
  {
    src: '/arctic-monkeys.mp3',
    title: 'I Wanna Be Yours',
    artist: 'Arctic Monkeys',
  },
  {
    src: '/vance-joy.mp3',
    title: 'Riptide',
    artist: 'Vance Joy',
  },
];

export function pickTrack(): Track {
  return TRACKS[Math.floor(Math.random() * TRACKS.length)];
}
