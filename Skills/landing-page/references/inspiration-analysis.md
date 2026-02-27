# Inspiration Analysis Framework

Framework for analyzing reference materials in the `inspirations/` folder and extracting actionable patterns.

## File Type Handling

- **Screenshots/Images (PNG, JPG, WebP)**: Analyze visually — layout, colors, typography, sections, CTAs
- **PDFs**: Read content, analyze layout if visual
- **Text files/URLs**: Read notes, visit URLs if accessible
- **Folders**: Treat as grouped inspirations from the same source

## Analysis Checklist

For each inspiration, evaluate:

### Structure
- [ ] How many sections does the page have?
- [ ] What is the section order?
- [ ] What is the hero approach? (image, video, split, minimal)
- [ ] Where are the CTAs placed?
- [ ] How is navigation handled? (sticky, hamburger, minimal)

### Content
- [ ] What is the headline style? (short/long, emotional/rational, question/statement)
- [ ] How are services presented? (cards, list, tabs, images)
- [ ] What social proof is used? (reviews, numbers, logos, badges)
- [ ] How is the story/about section handled?
- [ ] What is the CTA language?

### Visual
- [ ] Light or dark theme?
- [ ] Color palette (primary, accent, neutral)
- [ ] Typography style (serif, sans-serif, display)
- [ ] Photography style (professional, candid, lifestyle, product)
- [ ] Whitespace usage (generous, compact, mixed)
- [ ] Decorative elements (patterns, textures, illustrations, icons)

### Technical
- [ ] Is it mobile-responsive?
- [ ] How are images handled? (grid, carousel, lightbox)
- [ ] Any animations or interactions?
- [ ] What is the page load feel? (fast, heavy)

## Synthesis Process

After analyzing all inspirations:

1. **Find common patterns** — What appears in multiple inspirations? These likely reflect the user's preferences.
2. **Identify standout elements** — What unique element made each inspiration worth saving?
3. **Separate structure from style** — Extract structural patterns (section order, CTA placement) for this skill; note aesthetic patterns (colors, fonts, animations) for the frontend-design skill.
4. **Present findings** — Summarize to the user before building:
   - "Based on your inspirations, I noticed you prefer [pattern]. I'll use [approach] for the structure."
   - Ask if the interpretation is correct before proceeding.

## Output Template

After analysis, summarize as:

```
### Inspiration Analysis Summary

**Structural patterns observed:**
- [Pattern 1]
- [Pattern 2]

**Content patterns observed:**
- [Pattern 1]
- [Pattern 2]

**Aesthetic notes (for frontend-design skill):**
- [Note 1]
- [Note 2]

**Recommended approach:**
- [Decision based on patterns]
```
