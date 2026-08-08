# pixel

An interactive pixel-art room, built as a portfolio. Every object in the room
opens something — the book spines are projects, the monitor is a terminal, the
portrait is an about page, and pulling the lamp cord turns the lights off.

Next.js 15 · React 19 · TypeScript · hand-drawn SVG. No canvas, no sprite
sheets — the room is vector rectangles on a 620 × 270 grid, so it stays crisp
at any size and every object is a real focusable button. It leans as you move
the pointer, and the only bitmaps in the whole thing are the portrait photo and
the audio loop.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## How it fits together

```
app/
  layout.tsx        fonts, metadata, <RoomProvider>
  page.tsx          Hud + Room + Tooltip + Drawer + Ambience
  globals.css       design tokens, SVG palette, all component styles
components/
  Room.tsx          assembles the scene, holds <defs> and the parallax layers
  Hotspot.tsx       turns any SVG group into an accessible button
  Tooltip.tsx       the label that floats over the hovered object
  Drawer.tsx        the right-hand sheet; renders whichever Entry is open
  TerminalWindow.tsx the centred window the monitor opens
  Hud.tsx           wordmark, clock, hint, credit
  Ambience.tsx      headless <audio>; the speaker is its only control
  scene/            one file per object in the room
data/
  projects.ts       the book spines
  objects.ts        everything that isn't a book
  registry.ts       merges both into one id → Entry lookup
hooks/
  useParallax.ts    writes --mx / --my onto the stage
lib/
  room-context.tsx  open panel, night mode, music, first-visit
  tip-store.ts      tooltip position, deliberately outside React context
  types.ts          Entry, Book, Rect, ChipGroup, TimelineItem
public/
  ambient.mp3       the loop the speaker plays
  pfp.jpg           the portrait on the About sheet
```

Four ideas hold it together:

**One grid.** Everything is positioned on a 620 × 270 viewBox. Keep coordinates
integers and edges stay pixel-sharp when the SVG scales up.

**Two depth planes.** `Room.tsx` splits the scene into `.layer--back` (walls,
lamp glow) and `.layer--front` (everything else). `useParallax` writes the
pointer position onto the stage as `--mx` / `--my`, and the two layers consume
it with different multipliers, so the room leans with the cursor and the wall
trails the furniture. It's pure CSS from there — no React render happens on
pointer move — and it switches itself off under `prefers-reduced-motion`.

**The background bleeds.** The room is letterboxed on any window that isn't
16:9, so `Shell.tsx` draws the wall and floor 600 units past the viewBox and
the `<svg>` is `overflow: visible`. The bleed paints into the letterbox, which
is why the background reaches the edge on an ultrawide monitor and on a phone
held in portrait. If you add anything that should extend to the edge, extend it
the same way rather than adding a CSS background behind the stage — the floor
line has to stay lined up with the SVG.

**One palette.** No scene component ever writes a hex value — they use classes
like `s-amber` and `s-mid`, which read from CSS variables in `globals.css`.
Night mode is a single class on `<body>` that swaps the variable values, so
every object dims for free. If you hardcode a colour, it won't respond to the
lamp.

## Adding a new object

Three steps. Say you want a poster on the wall:

**1 — Draw it** in `components/scene/Poster.tsx`, wrapped in a `Hotspot`:

```tsx
'use client';
import Hotspot from '@/components/Hotspot';

export default function Poster() {
  return (
    <Hotspot
      id="poster"                          // matches the Entry id below
      label="Poster"                       // tooltip text + screen reader label
      hit={{ x: 60, y: 8, w: 70, h: 32 }}  // click target — be generous
      pip={{ x: 132, y: 8 }}               // optional idle dot
    >
      <rect x={60} y={8} width={70} height={32} className="s-indigo" />
      <rect x={64} y={12} width={62} height={24} className="s-bone" />
    </Hotspot>
  );
}
```

**2 — Write the panel** in `data/objects.ts`:

```ts
{
  id: 'poster',
  kind: 'Print',
  title: 'Poster',
  meta: '2026 · Screen print',
  text: `What the poster is about.`,
  chips: ['Risograph', 'A2'],
}
```

**3 — Place it** in `components/Room.tsx`, in back-to-front draw order.

That's the whole loop. A new project on the shelf is even shorter — add an entry
to `PROJECTS` in `data/projects.ts` with `x`, `shelf` and `w`, and the spine
draws and wires itself. Shelf boards sit at y = 90, 130, 170 and 206; keep
spines between x = 44 and x = 170.

If your object needs to *do* something rather than open a panel, pass
`onActivate` instead of `id` — that's how the lamp toggles night mode and the
speaker toggles the music.

## Two panels, two tooltips

An Entry opens in the **right-hand sheet** by default. Set `surface: 'terminal'`
and it opens in the **centred window** instead — traffic lights, shell prompt,
contact channels as cards. Only the monitor uses it, and that's the point: the
window is what sitting down at the machine looks like.

The sheet grows to fit whatever the Entry carries — `avatar`, `text`,
`timeline` (dated rows, used by experience / education / certifications),
`groups` (labelled chip clusters, used by About), `links`, `chips`, `cta`.

Tooltips split the same way. Every object gets the quiet outlined label, which
prefers to sit below it. The amber pill with the pixel notch is reserved for the
speaker via `tone="pill"`, so the loud style always means *this toggles
something* rather than *this opens a panel*. Keep it that way — the moment a
second object uses the pill, it stops meaning anything.

## Sound

The speaker on top of the bookshelf plays `public/ambient.mp3` on a loop and
puffs music notes while it runs. Swap the track by replacing that file.

It starts muted, and it has to: browsers refuse to autoplay audio without a
gesture, so the first click is what actually starts it. If the file is missing
the play promise is swallowed — the notes still drift, the room just stays
quiet.

## Room coordinates

| Region        | x range   | y range   |
| ------------- | --------- | --------- |
| Wall          | 0–620     | 0–232     |
| Floor         | 0–620     | 232–270   |
| Bookshelf     | 28–208    | 42–228    |
| — mortarboard | 146–186   | 66–92     |
| — certificate | 148–188   | 102–132   |
| — trophy      | 100–126   | 140–172   |
| — speaker     | 170–202   | 142–172   |
| — briefcase   | 80–110    | 184–208   |
| Portrait      | 228–280   | 96–158    |
| Chess table   | 216–270   | 186–228   |
| Desk          | 286–454   | 196–228   |
| Monitor       | 322–418   | 140–196   |
| Lamp          | 344–398   | 0–96      |
| 3D printer    | 470–610   | 118–234   |

Free wall space for new pieces: above the shelf (y < 42), the strip between the
shelf and the portrait (x 208–228), and above the printer (y < 118).

## Accessibility

Every hotspot is `role="button"` with `tabIndex={0}` and an `aria-label`, so the
room is fully keyboard navigable — Tab between objects, Enter or Space to open,
Escape to close. The tooltip follows focus as well as the pointer and is an
`aria-live` region. Motion is disabled under `prefers-reduced-motion`, which
also parks the music notes.

## Deploying

Push to GitHub and import the repo on Vercel — no configuration needed. Or:

```bash
npm run build && npm start
```

## Still to do

- [ ] **Fill the TODO rows** in `data/objects.ts` — the experience, education,
      certifications and achievements entries ship as placeholder scaffolding
- [ ] Replace the placeholder email in `data/objects.ts`
- [ ] Point the `cta` links at real repositories
- [ ] Downscale `public/pfp.jpg` — it's a 2904 px source doing a 72 px job
- [ ] Redraw the portrait silhouette as an actual self-portrait
- [ ] EN / HI language toggle
