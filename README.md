# pixel

An interactive pixel-art room, built as a portfolio. Every object in the room
opens something — the book spines are projects, the monitor is a terminal, the
portrait is an about page, and pulling the lamp cord turns the lights off.

Next.js 15 · React 19 · TypeScript · hand-drawn SVG. No canvas, no sprite
sheets, no image assets — the room is vector rectangles on a 480 × 270 grid, so
it stays crisp at any size and every object is a real focusable button.

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
  page.tsx          Hud + Room + Drawer
  globals.css       design tokens, SVG palette, all component styles
components/
  Room.tsx          assembles the scene, holds <defs> (patterns, gradients)
  Hotspot.tsx       turns any SVG group into an accessible button
  Drawer.tsx        the sliding panel; renders whichever Entry is open
  Hud.tsx           wordmark, clock, caption bar, credit
  scene/            one file per object in the room
data/
  projects.ts       the book spines
  objects.ts        everything that isn't a book
  registry.ts       merges both into one id → Entry lookup
lib/
  room-context.tsx  open panel, night mode, caption, first-visit state
  types.ts          Entry, Book, Rect
```

Two ideas hold it together:

**One grid.** Everything is positioned on a 480 × 270 viewBox. Keep coordinates
integers and edges stay pixel-sharp when the SVG scales up.

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
      label="Poster"                       // caption text + screen reader label
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
`onActivate` instead of `id` — that's how the lamp toggles night mode.

## Room coordinates

| Region        | x range   | y range   |
| ------------- | --------- | --------- |
| Wall          | 0–480     | 0–232     |
| Floor         | 0–480     | 232–270   |
| Bookshelf     | 28–208    | 42–228    |
| Portrait      | 228–280   | 96–158    |
| Chess table   | 216–270   | 186–228   |
| Desk          | 286–454   | 196–228   |
| Monitor       | 322–418   | 140–196   |
| Lamp          | 344–398   | 0–96      |

Free wall space for new pieces: above the shelf (y < 42), and the right wall
beyond x = 455.

## Accessibility

Every hotspot is `role="button"` with `tabIndex={0}` and an `aria-label`, so the
room is fully keyboard navigable — Tab between objects, Enter or Space to open,
Escape to close. The caption bar is an `aria-live` region. Motion is disabled
under `prefers-reduced-motion`.

## Deploying

Push to GitHub and import the repo on Vercel — no configuration needed. Or:

```bash
npm run build && npm start
```

## Still to do

- [ ] Replace the placeholder email in `data/objects.ts`
- [ ] Point the `cta` links at real repositories
- [ ] Redraw the portrait silhouette as an actual self-portrait
- [ ] EN / HI language toggle
- [ ] Wider room that pans horizontally, with a window and a workbench
