# Wet-Lab Sections & Polish — Design

Date: 2026-07-18
Branch: `feature/wetlab-sections-and-polish`

## Goal

Extend the Khurshid Lab single-page site with two wet-lab-oriented sections
(Techniques & Equipment, Protocols & Resources) and a set of low-risk polish
improvements. The site is a Next.js 16 / React 19 / Tailwind 4 / Framer Motion
SPA with a fixed accent system (indigo `#6366f1` → teal `#14b8a6`), `rounded-3xl`
glass/white cards, `AnimateIn` scroll reveals, and section-anchored navigation.

No lab facts are fabricated. Content that can be derived from existing site copy
and publications is written directly; anything requiring lab-specific detail
(instrument models, real protocol/dataset/code links) is inserted as a clearly
marked `TODO` placeholder for the user to confirm.

## Scope

In scope:
1. New section: **Techniques & Equipment**
2. New section: **Protocols & Resources**
3. Polish: scroll-spy active-link highlighting in the navbar
4. Polish: navbar information architecture for 10 sections
5. Polish: scholarly identity links (ORCID / Google Scholar) in Publications header
6. Polish: small content fixes (hero stat count, News chronological order)

Out of scope: dark mode, CMS/data backend, redesign of existing sections,
new imagery generation.

## Design language (must match existing)

- Section wrapper: `<section id="…" className="relative py-16 bg-white|bg-surface overflow-hidden">`
  alternating white/`surface` backgrounds against neighbors. Current order ends
  `Research (surface) → Publications (white)`; new sections slot in without two
  same-colored sections touching.
- Eyebrow label: pill with `bg-accent/5 … uppercase tracking-widest text-accent`
  and a lucide icon, matching every other section header.
- Cards: `rounded-3xl border border-border bg-white shadow-sm` with `card-hover`.
- Gradient icon chips: `bg-gradient-to-br from-… text-white` in `rounded-xl`.
- Reveals: wrap blocks in `AnimateIn` (and `delay` steps of ~0.15 for grids).
- Decorative background: one or two blurred accent/teal orbs + optional
  `grid-pattern`, consistent with siblings.

## Section 1 — Techniques & Equipment

**Component:** `src/components/Techniques.tsx`
**Placement:** immediately after `Research`, before `Publications`.
**Background:** `bg-white` (Research is `bg-surface`, Publications is `bg-white`
→ Techniques becomes `bg-white` and Publications flips to `bg-surface`; see
"Background rebalance" below).

**Content model** — a static typed array, grouped into three capability clusters,
each cluster a card containing a titled list of techniques:

```
interface TechniqueCluster {
  icon: LucideIcon;
  title: string;
  gradient: string;      // e.g. "from-violet-500 to-purple-600"
  blurb: string;
  items: string[];
}
```

Clusters and items (derived from Research + Publications; safe to state):

1. **Sequencing & Transcriptomics** (`Dna`, violet→purple)
   - Short-read RNA sequencing (Illumina)
   - Long-read sequencing (Oxford Nanopore / PacBio) `TODO: confirm platform(s)`
   - Splicing-aware bioinformatics & isoform quantification
   - RNA-binding protein expression profiling

2. **RNA & Splicing Biology** (`FlaskConical`, accent→blue)
   - Splice-Switching Oligonucleotide (SSO) design
   - AAVrh74.U7 snRNA splice-modulation delivery
   - RBP–pre-mRNA binding-site mapping (CLIP-based) `TODO: confirm CLIP variant`
   - RT-PCR / minigene splicing assays

3. **Cell & Disease Models** (`Microscope`, teal→emerald)
   - Cancer cell culture (sarcoma / pediatric tumor lines)
   - Metabolic-starvation & hypoxia stress models
   - Patient-derived tumor samples
   - `TODO: confirm in-vivo / xenograft models if applicable`

**Layout:** three-column grid on `lg` (`grid gap-6 lg:grid-cols-3`), stacked on
mobile, each cluster card = icon chip + title + blurb + `<ul>` of items with a
small accent bullet. Cards `card-hover`, `flex flex-col`, `items-stretch` row so
heights match. A short intro paragraph above the grid frames it ("Methods we use
at the bench…").

`TODO` placeholders render as normal list text with a muted `TODO:` prefix in the
data only — they are comments/markers in the source array for the user to resolve,
not shown verbatim to visitors. Concretely: items that are confirmed render; any
line the user still needs to verify is left in the array with an inline
`// TODO: confirm` code comment rather than shipped as visible "TODO" text.

## Section 2 — Protocols & Resources

**Component:** `src/components/Resources.tsx`
**Placement:** immediately after `Publications`, before `News`.
**Background:** `bg-white` or `bg-surface` per rebalance below.

**Content model:**

```
interface Resource {
  icon: LucideIcon;
  category: "Protocol" | "Code" | "Dataset";
  title: string;
  description: string;
  href: string;          // "#" placeholder until real link supplied
  linkText: string;
  external: boolean;
}
```

Because none of these assets exist yet, the section ships with a small set of
**scaffolded placeholder entries** whose `href` is `"#"` and whose description
notes the intended destination, plus a visible "Resources are being prepared —
request one directly" note so the section never looks broken. Proposed
placeholder cards (all links `TODO`):

- **Protocol** — "SSO design workflow for splice modulation" → `protocols.io` `TODO`
- **Code** — "Splicing-analysis pipeline" → GitHub `TODO`
- **Dataset** — "Pediatric cancer splicing datasets" → GEO/SRA `TODO`

**Layout:** responsive card grid (`sm:grid-cols-2 lg:grid-cols-3`). Each card:
category badge (color-coded like News categories), icon, title, description, and
a bottom link/CTA. A closing line links to the existing contact email for
protocol requests. When real links are added, `external` flips to open in a new
tab with `rel="noopener noreferrer"`.

## Background rebalance

Note: the current site is not strictly alternating — Publications→News are both
`bg-white` and Team→Positions are both `bg-surface` today. Inserting the two new
sections is a chance to fix that. Target order and backgrounds (strict
white/surface alternation, no two touching the same):

```
Hero            (dark)
About           white
Research        surface
Techniques      white      ← new
Publications    surface    ← flipped from white
Resources       white      ← new
News            surface    ← flipped from white
Team            surface → white   ← flip to keep alternation
Positions       surface
Contact         white
Footer          dark
```

Final check to apply during implementation: walk the rendered order top-to-bottom
and ensure strict white/surface alternation; adjust the two new sections and any
displaced neighbor's `bg-*` class accordingly. This is the only edit to existing
section internals.

## Polish items

### P1 — Scroll-spy active nav link
`Navbar.tsx` already tracks scroll for its background. Add an
`IntersectionObserver` (or scroll-position check) over the section ids to compute
the active section, and apply an accent style to the matching nav link (e.g.
`text-accent` / subtle pill background). Must work in both the transparent (hero)
and scrolled (white) navbar states. Respects reduced-motion (no animation added,
just a color state).

### P2 — Navbar IA for 10 sections
`navLinks` grows from 8 to 10 (`Techniques`, `Resources`). On `lg` this risks
wrapping. Approach: keep a single flat row but (a) tighten padding
(`px-3`) and (b) shorten labels — "Publications" → "Papers" is too informal;
instead reduce gaps and rely on the existing `hidden md:flex`. If it still wraps
at `md`, gate the full set to `lg:flex` and show a condensed set at `md`. Decision
at implementation time based on measured width; default is tighten-and-keep-flat.
Mobile menu already handles any count.

### P3 — Scholarly links in Publications
Add an ORCID and Google Scholar link row under the Publications heading (small
pill buttons with lucide icons / text). URLs are `TODO` placeholders
(`https://orcid.org/TODO`, Scholar profile `TODO`) until the user confirms the
real profile IDs; render only the ones with confirmed URLs to avoid dead links.

### P4 — Content fixes
- Hero stats: `"10+"` publications → exact `"10"` (current array length), or keep
  "10+" if the user prefers aspirational; default to exact count derived logic is
  overkill for a static site, so hardcode `"10"`.
- News: reorder the `news` array so items are reverse-chronological
  (currently January 2026 precedes March 2026). Order: March 2026 (two items),
  then January 2026.

## Files touched

New:
- `src/components/Techniques.tsx`
- `src/components/Resources.tsx`

Modified:
- `src/app/page.tsx` — import + place two sections in the new order
- `src/components/Navbar.tsx` — two nav links, scroll-spy, IA tightening
- `src/components/Publications.tsx` — scholarly links, `bg-*` rebalance
- `src/components/News.tsx` — `bg-*` rebalance, array reorder
- `src/components/Team.tsx` — `bg-*` rebalance if needed
- `src/components/Research.tsx` — no change unless rebalance requires
- `src/components/Hero.tsx` — stat count fix

## Testing / verification

No test framework configured. Verification is manual + static:
- `npx tsc --noEmit` — clean
- `npm run lint` — clean
- `npm run build` — succeeds
- Manual: run `npm run dev`, confirm both new sections render, nav scroll-spy
  highlights correctly through all 10 sections, backgrounds alternate with no two
  same-colored sections touching, mobile menu lists new sections, no console
  errors, and placeholder links are inert (`#`) rather than broken.

## Non-goals / guardrails

- Do not invent instrument models, real protocol URLs, dataset accessions, or
  ORCID/Scholar IDs. Leave `TODO` markers.
- Do not restyle existing sections beyond the background-class rebalance.
- Keep all new copy consistent with the lab's existing voice.
