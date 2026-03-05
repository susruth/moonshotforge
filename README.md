# Moonshot Forge — Web3 Venture Studio

A production-ready Astro + Tailwind CSS website for Moonshot Forge.

## Stack

- **Framework**: [Astro 4](https://astro.build) — island architecture, zero JS by default
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com) + custom `global.css` for animations & design tokens
- **TypeScript**: Strict mode, used in all components and scripts
- **Fonts**: Syne (display) + DM Mono (body) via Google Fonts

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro          # Base HTML shell, fonts, cursor
├── pages/
│   └── index.astro           # Page composition
├── components/
│   ├── Nav.astro             # Fixed nav + mobile drawer
│   ├── Hero.astro            # Full-height hero section
│   ├── Ticker.astro          # Scrolling marquee
│   ├── About.astro           # About + stats + values
│   ├── Portfolio.astro       # 6-card project grid
│   ├── Process.astro         # 4-step model
│   ├── Thesis.astro          # Investment thesis cards
│   ├── Team.astro            # Founders + advisors
│   ├── Blog.astro            # 3 blog post cards
│   ├── Careers.astro         # 6 open roles
│   ├── Apply.astro           # 4 apply program cards
│   ├── CtaBanner.astro       # Full-width CTA
│   ├── Footer.astro          # Footer + bottom bar
│   └── Modals.astro          # All modals + JS interactivity
├── styles/
│   └── global.css            # Tailwind directives + custom CSS
└── data.ts                   # All site data (projects, blogs, roles, programs)
```

## Responsive Breakpoints

| Breakpoint | Width     | Layout changes                                      |
|------------|-----------|-----------------------------------------------------|
| `sm`       | 640px+    | Hero sub row goes horizontal; 2-col grids activate  |
| `lg`       | 1024px+   | Full desktop nav; 3/4-col grids; full padding       |
| `xl`       | 1280px+   | Max font sizes for headings                         |

Mobile-first: base styles target 320px+, hamburger menu below `lg`.

## Customization

All site content lives in `src/data.ts` — edit `projects`, `blogs`, `roles`, and `applyPrograms` to update the site content without touching component markup.

Colors are defined in `tailwind.config.mjs` under `theme.extend.colors.forge`:

```js
forge: {
  black:  '#080808',
  white:  '#f0ede6',
  cream:  '#c8c3b8',
  accent: '#e8d5a3',   // gold
  orange: '#c4601a',
  dim:    '#111110',
  dim2:   '#1a1a18',
}
```
