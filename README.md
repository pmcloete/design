# Arctix Design System

A [shadcn/ui](https://ui.shadcn.com) design system (New York v4 style, Tailwind CSS v4, Radix UI + Base UI primitives) with a custom brand theme, a self-hosted [Geist](https://vercel.com/font) typeface, and a distributable component registry so any future project can pull components straight from this repo.

## What's in here

- **`src/components/ui/`** — 50+ shadcn primitives (button, dialog, sidebar, chart, combobox, attachment, field, and more), each source-copied and customized rather than pulled from a package.
- **`src/components/`** — composed blocks built from those primitives, e.g. `app-sidebar.tsx` and its `nav-main` / `nav-projects` / `nav-user` / `team-switcher` pieces (the full `sidebar-07` block).
- **`src/pages/showcase.tsx`** — a single-page, alphabetically organized showcase of every component in the system, with a live light/dark toggle. Every color swatch on the Colors section reads its *actual* rendered value at runtime (via a canvas-based resolver) rather than a hardcoded hex, so it can't drift from the real theme.
- **`src/styles/showcase-theme.css`** — the brand theme override (primary teal, destructive/caution/success status colors, all derived via OKLCH so the ramp stays perceptually consistent) used by the showcase build.
- **`registry.json` + `r/`** — a custom shadcn registry under the `@arctix` namespace. Every `ui` component, the `utils` lib, the `sidebar-07` block, and three theme presets are packaged as installable registry items.
- **`design-system-colors.svg`** — every color token in the theme (light and dark mode, all 36 tokens across Surfaces / Brand / Status / Form & Interaction / Chart / Sidebar), each with its swatch, name, and hex value — meant for dropping straight into design software.

## Using the registry in another project

Once this repo (or its built `r/*.json` output) is hosted somewhere reachable, components can be pulled into any shadcn-compatible project the normal way:

```bash
npx shadcn add https://<host>/r/button.json
npx shadcn add https://<host>/r/sidebar-07.json
```

Each item declares its own `registryDependencies` (other `@arctix` items it needs) and `dependencies` (npm packages), so `shadcn add` resolves the full dependency tree automatically.

## Development

```bash
npm install
npm run dev       # multi-page component gallery (pages/*)
npm run build     # typecheck + build the full multi-page site
```

### Showcase

The showcase is a separate single-file build (everything — CSS, JS, the self-hosted Geist font — inlined into one `.html`):

```bash
npx vite build --config vite.showcase.config.ts
npx vite preview --config vite.showcase.config.ts
```

### Registry

After changing a shared component in `src/components/ui/`, keep the registry in sync:

```bash
npx shadcn build registry.json -o r
```

## Fonts

Geist (self-hosted, full 100–900 variable weight range) is the system's `--font-sans`; Geist Mono is declared for `--font-mono` but not yet bundled — see `src/assets/fonts/`.
