# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npx tsc --noEmit # typecheck (strict mode is on)
```

There is no test suite and no ESLint config — `npm run lint` will trigger Next's
interactive setup prompt, so prefer `npx tsc --noEmit` as the check before
calling work done. Build errors are the only other gate.

## Architecture

A single-page Next.js App Router site: one route (`app/page.tsx`) renders
`Hud + Room + Tooltip + Drawer + Ambience`. There is no routing, no data
fetching, and no backend. The only binary assets are `public/ambient.mp3` and
`public/pfp.jpg`; everything else visible is an SVG rectangle or a styled div.

Six ideas carry the whole codebase:

**One SVG grid.** The room is a single `<svg viewBox="0 0 620 270">` with
`shapeRendering="crispEdges"`. No sprite sheets, no canvas. Every coordinate
must be an integer (or a clean half) or edges shimmer when the SVG scales.
`components/Room.tsx` owns the `<defs>` (dot pattern, lamp/screen gradients)
and composes the scene in explicit back-to-front draw order — that order *is*
the z-index, so placement in that JSX matters.

**Two parallax planes.** `Room.tsx` wraps the scene in `.layer--back` (shell,
lamp glow) and `.layer--front` (furniture). `hooks/useParallax.ts` writes the
pointer position onto `.stage` as unitless `--mx` / `--my`, and the layers
consume them at different multipliers in CSS. Keep it that way: the whole point
is that pointer movement causes zero React renders. It no-ops under
`prefers-reduced-motion`.

**The background bleeds past the viewBox.** `preserveAspectRatio="meet"`
letterboxes the room on any window that isn't 16:9. `scene/Shell.tsx` therefore
draws wall and floor 600 units outside the viewBox and `.stage svg` is
`overflow: visible`, so the bleed paints into the letterbox instead of leaving
flat `body` colour. Two consequences: don't reach for a CSS background behind
the stage (the floor line would drift out of alignment with the SVG), and any
gradient painted on a bleed rect needs `gradientUnits="userSpaceOnUse"` or it
stretches over the bleed — `#dayG` is bounded to y 0–120 for exactly this.

**One palette, driven by CSS variables.** Scene components never write hex
values; they use fill classes (`s-amber`, `s-mid`, `s-bone`, `s-dark`, `s-hot`,
`s-edge`, …) defined in `app/globals.css`, which read from `--amber`, `--mid`
etc. Night mode is a single `night` class on `<body>` that redefines those
variables, so every object dims for free. A hardcoded colour is a bug: it won't
respond to the lamp. The `--glow` variable (0 by day, 1 at night) drives
`#lampGlow`, `#screenGlow` and `#dayLight` opacity via `calc()`.

Note `SwatchClass` in `lib/types.ts` only lists the subset legal for *book
spines* — the CSS defines more fill classes than that union.

**Hotspot is the only interaction primitive.** `components/Hotspot.tsx` turns
any SVG group into a `role="button"` with `tabIndex`, `aria-label`, Enter/Space
handling, a hover/focus ring, and a tooltip hookup. Pass `id` to open the
drawer for that Entry, or `onActivate` to do something else instead (the lamp
toggles night, the speaker toggles music). Any new interactive object goes
through Hotspot — never add raw click handlers to scenery.

On hover/focus it measures its hit rect with `getBoundingClientRect()` and
publishes the result to `lib/tip-store.ts`; `components/Tooltip.tsx` measures
itself in a layout effect, flips to the other side when its preferred one has
no room, clamps to the viewport, and points its notch back at the anchor via a
`--notch` custom property.

**The tip store is not context, on purpose.** A hovered hotspot re-measures on
every `pointermove` so the tooltip stays glued while the parallax drifts the
scene underneath it. Routing that through `RoomProvider` would re-render every
book and scene component at 60fps, so it lives in a `useSyncExternalStore`
module that only Tooltip and Hud subscribe to, and `setTip` drops no-op updates.
Don't move it back into context.

The measuring effect also depends on `label`, which is what lets a hotspot that
renames itself mid-hover (lamp, speaker) update its own tooltip without the
pointer leaving.

`tone` decides how a hotspot announces itself, and the split is deliberate:
`'plain'` for objects **on the shelf**, `'pill'` for the speaker **alone** (it
means "toggle", not "panel"), `'none'` for everything away from the shelf —
those show no label and lift on hover instead. Adding a label to an off-shelf
object undoes the decluttering; adding a second `'pill'` empties out what the
pill means.

Note `prefers-reduced-motion`: zeroing the duration would leave the zoom, the
lift and the page-turn *snapped to their end state*, which is worse than not
running them. The media query explicitly sets `transform: none` on those rather
than relying on the blanket duration override.

**Three surfaces, one registry.** `Entry.surface` routes where an entry opens:
`'sheet'` (default, `Drawer.tsx`), `'terminal'` (`TerminalWindow.tsx`, monitor
only), `'book'` (`BookSpread.tsx`, all six projects, pages through `PROJECTS`).
`Drawer` is the fallback and must keep excluding the other two, or you get two
panels at once. Clicking also pushes the camera: `Hotspot.activate` passes its
screen centre to `open()`, and `.stage` scales/blurs toward `--zx`/`--zy`.

**One id → Entry registry.** `data/projects.ts` (book spines, `Book extends
Entry` with `x`/`shelf`/`w` layout fields) and `data/objects.ts` (everything
else) are merged by `data/registry.ts` into a flat `ENTRIES` map. `Drawer.tsx`
looks up `openId` there and renders whatever optional fields the Entry has
(`term`, `text`, `links`, `chips`, `cta`). So a Hotspot `id` and an Entry `id`
must match by string — nothing enforces this at compile time.

`lib/room-context.tsx` is the only state: `openId`, `night`, `music`, `tip`,
and `fresh` (true until first interaction; drives the idle pips). It also owns
the Escape-to-close listener and the body class toggles.

**Sound is headless.** `components/Ambience.tsx` is an `<audio loop
preload="none">` pointing at `public/ambient.mp3` with no UI of its own — the
speaker hotspot is the only control. `music` starts `false` because browsers
refuse autoplay without a gesture, and the `play()` rejection is swallowed so a
missing file degrades to a silent room rather than an error.

### Adding an object

1. Draw it in `components/scene/`, wrapped in `<Hotspot id="…" label="…" hit={…}>`.
2. Add a matching `Entry` to `data/objects.ts`.
3. Place it in `Room.tsx` at the right point in draw order.

A new book is shorter: add to `PROJECTS` in `data/projects.ts` with `x`, `shelf`
and `w`, and `Bookshelf` draws and wires it automatically. Shelf boards sit at
y = 90, 130, 170, 206; keep spines between x = 44 and x = 170. `README.md` has
the full coordinate map of occupied regions.

### Hydration

Anything time- or client-dependent must not affect the server render:
`useIstClock` returns `''` on the server, and night mode starts `false` and is
switched on in an effect. Keep that pattern — `reactStrictMode` is on and IST
(Asia/Kolkata) is hardcoded as the room's timezone.

## Gotchas

- **`next dev` and `next build` write incompatible `.next` directories.** Two
  distinct failures come from mixing them:
  - Building *while* dev is running replaces the chunks dev is serving; the
    page 404s its JS and silently stops hydrating, so every hotspot looks
    broken while the console looks nearly clean.
  - Starting dev *on top of* a finished production build fails with
    `Invariant: missing bootstrap script. This is a bug in Next.js` and a wall
    of 500s on `/_next/static/chunks/fallback/*`. It is not a Next bug.

  `predev` runs `scripts/clean-stale-build.mjs`, which deletes `.next` when it
  finds a `BUILD_ID` (only a production build leaves one), so the second case
  now self-heals. The first still requires stopping dev before you build.
- CSS `transform` lengths on SVG elements resolve in *user units*, not screen
  pixels — that is why the music-note keyframes translate by room coordinates.
- `assets/` holds the user's source media (the full-length mp3, a profile
  photo). Only `public/` is served; `public/ambient.mp3` is a copy.
