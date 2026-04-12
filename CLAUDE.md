# Darren Chia — Portfolio Claude Context

## Project Instructions

This is a clean rebuild of my portfolio as hand-coded HTML/CSS. No frameworks. No Tailwind. No JavaScript libraries unless absolutely necessary.

**Stack:**
- Plain HTML + CSS
- Fonts via Google Fonts
- Hosted on Netlify, connected to GitHub repo
- Max content width: 960px, centered
- Background: #FAF7F2 on all pages

**How to work:**
- The Framer export file in this repo is the layout and content reference. Read it for structure, spacing, content, and copy. Do not use any of its Framer-specific classes, JavaScript, or CSS.
- This file (CLAUDE.md) is the design system. Follow it exactly.
- Build semantic HTML. Use CSS custom properties for all tokens.
- Mobile-first. Breakpoints: 810px (tablet), 390px (mobile).

**Current status:**
- [ ] index.html — homepage rebuild
- [ ] greenthumb.html
- [ ] edily.html
- [ ] cooking.html

**Standing rules:**
- No animations until structure is confirmed solid
- Case study links point temporarily to Framer URLs (see links below)
- One file per page
- Never touch CLAUDE.md unless asked

---

## Case Study Links (temporary)

- GreenThumb: https://darrenchia.framer.website/greenthumb
- Edily: https://darrenchia.framer.website/edily-gamification-2
- Cooking Reframe: https://darrenchia.framer.website/cooking

---

## Design Intent

**The through-line:** Bridging the gap between how systems work and how people actually experience them.

**The aesthetic:** Warm-smart, workshopy, quiet passion. "Studio Wall" — a designer's working space frozen in time. Warm paper tones, structured but human.

**The feeling:** "Oh wow, this is actually pretty interesting." Invited into the thinking, not impressed from a distance. Human, not intimidating.

**The audience:** The hiring manager who leans forward when something unexpected catches them. Someone a little tired of portfolios designed to offend nobody.

---

## CSS Custom Properties (always define these in :root)

```css
:root {
  /* Base */
  --paper: #FAF7F2;
  --ink: #1A1A18;
  --orange: #e33e19;
  --amber: #BA7517;
  --muted: #71717B;
  --muted-2: #666666;

  /* Pills */
  --pill-bg: #E6F1FB;
  --pill-txt: #0C447C;

  /* Case study accents */
  --forest: #2d6a4f;
  --edily: #1145C0;
  --cooking: #009018;

  /* Card */
  --card-bg: #F7F4EF;
  --card-border: rgba(0,0,0,0.13);
}
```

---

## Typography

Every text role has one answer. No hedging.

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|
| Hero name | Caprasimo | 88px | 400 | 1em | -0.03em | `#2d6a4f` (forest green) |
| Section header | Newsreader | 32px | 700 | 1.3em | 0em | `#1a1a18` |
| Subsection heading | Space Grotesk | 24px | 700 | 1.3em | -0.04em | case study accent |
| Mini header / step label | Space Grotesk | 17px | 500 | 1.5em | 0.02em | `#71717B` |
| Case study card title (homepage) | Newsreader | 29px | 800 | 44px | 0em | case study accent |
| Homepage card body | Space Grotesk | 15px | 500 | 1.5em | 0em | `#1a1a18` |
| Case study body | Space Grotesk | 18px | 500 | 1.6em | 0em | `#1a1a18` |
| Card text | Space Grotesk | 14px | 500 | 1.5em | 0em | `#1a1a18` |
| Card quotes | Space Grotesk | 13px | 500 | 1.5em | 0em | `#666666` |
| Pull quotes (case studies) | Newsreader | — | 600 | — | — | — |
| Pull quotes (homepage) | Newsreader | — | 700 | — | — | — |
| Sub-info / metadata | IBM Plex Sans | 14px | 500 | — | 0.02em | — |

**Font roles:**
- **Newsreader** — headers, case study titles, pull quotes. Editorial voice.
- **Space Grotesk** — body, subheads, cards, mini headers. The workhorse.
- **Caprasimo** — hero name only. One loud thing.
- **IBM Plex Sans** — metadata, sub-info. Quiet utility.

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Newsreader:wght@600;700;800&family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet">
```

**Never use:** DM Serif Display, Plus Jakarta Sans, Fraunces, type below 11px.

---

## Colors

| Name | Hex | Use |
|---|---|---|
| Page background | `#FAF7F2` | All pages |
| Body text | `#1a1a18` | Primary text everywhere |
| Orange accent | `#e33e19` | "Interaction designer" hero highlight — ONE per screen max |
| Muted gray | `#71717B` | Mini headers, step labels |
| Card quote text | `#666666` | Quote text inside cards |
| Homepage section headers | `#707070` | Section headers on homepage only |
| GreenThumb | `#2d6a4f` | Subsection headings, borders, card titles |
| Edily | `#1145C0` | Subsection headings, borders, card titles |
| Cooking Reframe | `#009018` | Subsection headings, borders, card titles |

**Rules:**
- Main section headers → `#1a1a18`
- Subsection headings → case study accent color
- One orange element per screen maximum
- Accent colors on subheaders and key moments only — not decorative

---

## Spacing Scale

| Token | Value | Use |
|---|---|---|
| xs | 4px | Micro-gaps between inline elements |
| sm | 8px | Internal padding in compact components |
| md | 12–14px | Component-level gaps |
| lg | 16–20px | Card internal padding top/bottom |
| xl | 24px | Card internal padding left/right, gap between cards |
| 2xl | 32px | Between components within a section |
| 3xl | 48px | Between major sub-sections |
| section | 36px | Section divider margin |
| page | 80–100px | Between full page sections |

---

## Components

### Card system

Two states. Same background. Border weight is the only signal.

**Default card:**
```css
background: #F7F4EF;
border-top: 1px solid rgba(0,0,0,0.13);
border-radius: 6px;
padding: 16px 18px;
```

**High impact card:**
```css
background: #F7F4EF;
border-top: 3px solid [case study accent];
border-radius: 6px;
```
Rule: never more than 2 high impact cards per section.

**Card tag (above title):**
- IBM Plex Sans, 10px, weight 500, uppercase, 0.06em tracking
- Default: `#71717B`
- High impact: case study accent color

**Card title:** Newsreader Bold 15px, line-height 1.3

**Card body:** Space Grotesk Medium 12px, `#666666`, line-height 1.5

**Card quote (optional):** Newsreader Semi-bold italic 12px, `#666666`, separated by `0.5px solid rgba(0,0,0,0.07)` top border

### Insight / left-border block
```css
border-left: 3px solid [case study accent];
border-radius: 0; /* never round the left side */
padding-left: 13px;
```

### Pills / tags
```css
/* Active */
background: #E6F1FB;
color: #0C447C;
border-radius: 20px;
font: Space Grotesk 10px 500 uppercase 0.02em;
padding: 2px 9px;

/* Inactive */
border: 0.5px solid #71717B;
opacity: 0.45;
text-decoration: line-through;
```

### Pull quote
- No card, no background, no quotation mark graphic
- Newsreader semi-bold (case studies) or bold (homepage)
- No border
- Surrounded by generous whitespace — breathing room only

### Mini header / step label
```css
font-family: 'Space Grotesk';
font-size: 17px;
font-weight: 500;
letter-spacing: 0.02em;
color: #71717B;
line-height: 1.5;
```

---

## Hero Copy (locked — do not change)

```
Darren
Chia
```
Font: Caprasimo 88px, color: #2d6a4f, letter-spacing: -0.03em

**Elevator pitch:**
`[Interaction designer]` who leads with story and builds with systems that make experiences feel human.
- "Interaction designer" → color: #e33e19 (orange)
- Rest → color: #1a1a18

**Sub-line:** Pursuing MFA `[@ SVA]`
- "@ SVA" → color: #e33e19

**Metadata line:** Interaction Designer · SVA MFA Candidate · NYC
Font: IBM Plex Sans 14px, color: #71717B

---

## Never Do This

- Drop shadows on cards or components
- Rounded corners on left-border-only elements
- Multiple orange elements on the same screen
- Bullet points in case study prose
- Centered text in case study body (pull quotes and hero only)
- Research report language
- Three different card styles in the same section
- Explanation before the artifact
- Defensive section headers ("Why a Pamphlet?")
- More than one visual focal point at the same hierarchy level
- Type below 11px
- Decorative dividers
- Pure white card backgrounds
- Drop shadows anywhere

---

## About Section Copy (from Framer export)

Hi, I'm Darren — an Interaction Designer centered around systems-focused, research driven designs. Currently pursuing my MFA at SVA.

I keep finding myself drawn to the gap between how systems are designed and how people actually experience them. The solution is already there: in the data, in implicit behaviors, in the cracks of cultures and social norms. My job is to find them, connect the dots, and translate them for the people who need them most.

---

## Experience

| Role | Company | Year |
|---|---|---|
| UX/UI Design Intern | The Care Hack | 2025 |
| UX/UI Design Intern | Immer | 2024 |
| UX/UI Intern | Edily Learning | 2023–2024 |

---

## Contact

- Email: dc45008@gmail.com
- Phone: 973 873 4508
- Location: New York City, NYC

---

## Shared Stylesheet

All case studies link to `./styles.css` for shared styles. Do not add styles to `styles.css` that are specific to one case study. Do not duplicate styles that already exist in `styles.css`.

Each case study HTML file should only contain:
- A `<link rel="stylesheet" href="./styles.css">` in the `<head>`
- Page-specific component styles inline (e.g. `.gt-` pamphlet component)
- Accent color overrides using CSS variables

## Case Study Accent Colors

Accent color variables default to `var(--ink)` in `styles.css`. Override per case study in an inline `<style>` block:

| Case Study | Variable | Value |
|---|---|---|
| GreenThumb | `--forest` | `#2d6a4f` |
| Edily | `--edily` | `#1145C0` |
| Cooking Reframe | `--cooking` | `#c1622f` |

## Section Structure (all case studies)

Every case study follows this section order:
1. Nav (sticky top + fixed sidebar)
2. Hero (title, subtitle, meta)
3. Hero image
4. Overview block (max-width 680px centered)
5. Pull quote band (full-width `#f0ebd6`)
6. Context `id="context"`
7. Problem band (full-width `var(--forest)`) `id="problem"`
8. Methodology `id="method"`
9. Findings `id="findings"`
10. Synthesis `id="synthesis"`
11. Solution `id="solutions"`
12. Next Steps `id="conclusion"`
13. Footer

## Spacing System (locked)

| Rule | Value |
|---|---|
| Section label → heading | `gap: 8px` |
| Heading → first content | `32px` via section gap |
| Between content blocks | `48px` |
| Between subsections | `80px` via `margin-top` |
| Section to section | `200–210px` via `margin-bottom` |

## Content Safety Rule

When building or editing case study HTML, never write, rewrite, or paraphrase any body copy. Only use text that exists verbatim in the reference file. If exact text cannot be found, leave a `<!-- PLACEHOLDER -->` comment instead.

## JavaScript

A vanilla JS component system lives in /components.

File structure:
- /components/nav.html — nav snippet
- /components/footer.html — footer snippet  
- /components/components.js — fetches nav/footer, defines section template functions

Rules:
- No frameworks, no libraries
- Fetched components (nav, footer): injected via fetch() into placeholder divs
- Section templates (hero, hero image, overview, pull quote band): defined as template literal functions in components.js, each accepts a data object and returns an HTML string
- Template functions must match existing class names in styles.css exactly
- Never modify components.js structure without asking first
- Never inline component logic directly into HTML files

---

## New Case Study Checklist

1. Copy `edily.html` as a starting template
2. Update `<title>` and all hero content
3. Replace all body copy with exact text from the reference file
4. Update hero image src
5. Update section images and content
6. Add accent color override in inline `<style>` block
7. Keep `styles.css` link intact — do not copy styles into the file
8. Do not modify `styles.css` unless the change applies to all case studies
