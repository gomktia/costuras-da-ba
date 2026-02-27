---
name: landing-page
description: Design and build conversion-focused landing pages for small businesses and service providers. Use this skill when the user asks to create, structure, or plan a landing page, one-page website, or service business website. Covers page architecture (section ordering, hero, services, testimonials, CTA, contact), conversion-oriented copywriting for service businesses, mobile-first responsive patterns, and how to analyze visual inspirations from the inspirations/ folder. Works alongside the frontend-design skill for visual aesthetics and the local-seo skill for search optimization.
---

# Landing Page Design

Guide the creation of conversion-focused landing pages for small businesses and service providers. This skill handles page structure and content strategy; delegate visual aesthetics to the frontend-design skill.

## Process

1. Analyze inspirations (if available in `inspirations/`)
2. Define page strategy (audience, goal, tone)
3. Plan section architecture
4. Write conversion-focused copy
5. Implement with mobile-first responsive patterns
6. Integrate SEO (delegate to local-seo skill)

## Step 1: Analyze Inspirations

Check the `inspirations/` folder for reference materials provided by the user. These may include screenshots, URLs, PDFs, or notes about websites the user admires.

For each inspiration:
- Identify what the user likely admires (layout? color? tone? photography style?)
- Extract structural patterns (section ordering, CTA placement, whitespace usage)
- Note content patterns (headline style, service presentation, social proof format)
- Do NOT copy aesthetics directly — use them to inform structural decisions

See [references/inspiration-analysis.md](references/inspiration-analysis.md) for the detailed analysis framework.

## Step 2: Define Page Strategy

Before choosing sections, establish:

- **Primary audience**: Who visits this page? (e.g., local customers seeking tailoring services)
- **Primary action**: What should visitors do? (e.g., WhatsApp message, phone call, form submission)
- **Trust signals needed**: What overcomes hesitation? (e.g., before/after photos, years of experience, customer reviews)
- **Tone**: Professional? Warm/personal? Luxurious? Approachable?

For a costureira/tailor business specifically:
- Visual proof of craftsmanship is the strongest converter
- Personal connection matters — this is handwork, not factory production
- Local proximity and convenience are key decision factors
- WhatsApp is the dominant contact channel in Brazil

## Step 3: Plan Section Architecture

See [references/section-patterns.md](references/section-patterns.md) for detailed patterns for each section type.

Default section order for service businesses (adapt based on strategy):

1. **Hero** — Headline + primary CTA + hero image
2. **Social Proof Bar** — Quick trust signals (years, clients served, rating)
3. **Services** — What you offer, with clear descriptions
4. **About/Story** — Personal connection, craftsmanship narrative
5. **Portfolio/Gallery** — Visual proof of work
6. **Testimonials** — Customer voices
7. **Process/How It Works** — Reduce uncertainty
8. **CTA Section** — Reinforce the primary action
9. **FAQ** — Address objections
10. **Contact/Location** — Map, hours, address, WhatsApp
11. **Footer** — Legal, social links, secondary navigation

Ordering principles:
- Lead with the strongest emotional hook
- Alternate between emotional (testimonials, story) and rational (services, process) sections
- Place CTA after every 2-3 content sections
- End with low-friction contact options

## Step 4: Write Conversion Copy

See [references/copywriting-patterns.md](references/copywriting-patterns.md) for headline formulas, CTA language, and service description patterns.

Core principles for service business copy:
- Lead with the outcome, not the service name
- Use the customer's language, not industry jargon
- Every section answers an implicit visitor question
- Headlines should be specific and benefit-driven
- CTAs should be low-commitment ("Fale conosco pelo WhatsApp")

## Step 5: Mobile-First Implementation

- Design for 320px viewport first, enhance upward
- Hero section: full-viewport height on mobile, headline visible without scrolling
- Services: single-column stack on mobile, grid on desktop
- Gallery: horizontal scroll or 2-column grid on mobile
- Navigation: hamburger menu on mobile, sticky on scroll
- CTA buttons: full-width on mobile, minimum 48px touch target
- Typography: minimum 16px body text to prevent iOS zoom
- Images: lazy-loaded, WebP with fallback, srcset for responsive sizes
- Contact: click-to-call phone numbers, click-to-WhatsApp links
- Use semantic HTML throughout (header, main, section, nav, footer)

## Step 6: SEO Integration

Delegate technical SEO to the local-seo skill. Ensure the landing page structure supports SEO by:
- Using semantic HTML with proper heading hierarchy (single H1 in hero)
- Using H2 for each major section
- Adding descriptive alt text to all images
- Keeping the page fast (optimize images, minimize JS)
- Referencing `TRACKING_SETUP.md` for Meta Pixel and UTMify integration

## Skill Composition

- **Visual design**: Delegate to frontend-design skill for typography, color palette, animations, and spatial composition
- **SEO optimization**: Delegate to local-seo skill for structured data, meta tags, local keywords, and Google Business Profile guidance
- **Brand application**: If brand-guidelines skill is available, use it for brand colors and fonts
- **Copywriting**: If copie skill is available, use it for advanced copywriting techniques
