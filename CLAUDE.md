# Khurshid Lab Website

Cancer research lab website built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run lint      # eslint
npx tsc --noEmit  # type check
```

## Structure

- `src/app/` — Next.js app router (layout, page)
- `src/components/` — React components (Hero, About, Research, Team, Publications, Contact, Navbar, Footer)
- `public/images/` — static assets

## Notes

- Single-page site with section-based navigation
- Uses Framer Motion for animations (AnimateIn, DNAHelix, MoleculeAnimation)
- Tailwind CSS 4 with PostCSS plugin (no tailwind.config)
- No tests configured
