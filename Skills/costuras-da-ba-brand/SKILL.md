---
name: costuras-da-ba-brand
description: Applies the official brand identity, colors, typography, and style guidelines for "Costuras da Ba", a sewing and tailoring business in Santa Maria, RS, Brazil. Use this skill when building any artifact, page, component, or material that should follow Costuras da Ba's visual identity and tone of voice.
---

# Costuras da Ba Brand Guidelines

## Brand Overview

- **Business Name**: Costuras da Ba
- **Owner**: Ba
- **Location**: Rua Pedro Santini, 3497, Casa 15, Quadra D -- Moradas, Santa Maria, RS, Brazil
- **Services**: Reparos de Roupas, Reparo de Fardas Militares
- **Target Audience**: Local residents of Santa Maria and surrounding areas, military personnel stationed in the region
- **WhatsApp**: (24) 99203-5263
- **Hours**: Seg a Sab: 9h-18h

**Keywords**: costura, costureira, reparo de roupas, fardas militares, santa maria, moradas, brand identity, visual identity, brand colors, typography, styling

## Visual Identity

### Colors

**Primary Palette:**

- **Rose** (primary): `oklch(0.62 0.12 350)` -- Warm, artisanal feel. The core brand color representing craft and care.
- **Gold** (secondary): `oklch(0.68 0.13 65)` -- Refinement and quality. Used for accents and highlights.
- **Charcoal** (text): `oklch(0.25 0.01 65)` -- Grounding and professional. Primary text color.
- **Cream** (background): `#FAFAF7` -- Clean, warm canvas. Default background across all surfaces.

**Functional Colors:**

- **WhatsApp Green**: `#25D366` -- Used exclusively for CTAs and WhatsApp integration elements.

**CSS Variables Reference:**

```css
:root {
  --color-rose: oklch(0.62 0.12 350);
  --color-gold: oklch(0.68 0.13 65);
  --color-charcoal: oklch(0.25 0.01 65);
  --color-cream: #FAFAF7;
  --color-whatsapp: #25D366;
}
```

### Typography

- **Headings**: DM Serif Display -- Elegant serif with personality, warmth, and artisanal character
- **Body Text**: DM Sans -- Clean, readable sans-serif companion that pairs naturally with DM Serif Display
- **Google Fonts Import**: `family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display`

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet">
```

```css
:root {
  --font-heading: 'DM Serif Display', Georgia, serif;
  --font-body: 'DM Sans', 'Helvetica Neue', sans-serif;
}
```

### Design Elements

- **Stitch lines**: Use dotted or dashed borders to evoke sewing and stitching (`border-style: dashed` or `border-style: dotted`)
- **Textile texture overlays**: Subtle crosshatch patterns or fabric-like textures as background accents
- **Rounded corners**: Use `border-radius: 16px` (2xl) for cards and containers
- **Soft shadows**: Use `box-shadow` equivalent to Tailwind's `shadow-sm` for cards (`0 1px 2px 0 rgb(0 0 0 / 0.05)`)
- **Craft-inspired borders**: Decorative borders that feel handmade -- stitched edges, embroidered accents
- **Icons**: Scissors, thread, needle, sewing machine motifs where appropriate

## Tone of Voice

- **Warm and personal**: Always refer to the owner as "a Ba", never "a empresa" or "nos". This is a personal craft, not a corporation.
- **Artisanal and dedicated**: Phrases like "cada ponto feito com carinho", "costurado a mao com dedicacao"
- **Professional but approachable**: Expertise communicated through warmth, not formality
- **Care, precision, attention to detail**: Emphasize the meticulous nature of the work
- **Local pride**: Reference Moradas, Santa Maria. This is a neighborhood business.
- **Language**: All customer-facing content in Brazilian Portuguese (pt-BR)

**Example phrases:**
- "A Ba cuida de cada detalhe com carinho"
- "Seu uniforme em boas maos"
- "Conserto de roupas feito com dedicacao"
- "Aqui no Moradas, a gente costura com amor"

## Photography Guidelines

- **Lighting**: Warm, natural lighting. Golden hour or soft indoor light. Avoid harsh flash.
- **Subjects**: Hands working on fabric, close-ups of stitching, thread and needle details, before/after transformations
- **Feel**: Authentic, real, lived-in. Never stock-photo sterile.
- **Close-ups**: Fabric textures, thread colors, needle precision, finished seams
- **Color grading**: Warm tones that complement the Rose and Gold brand palette
- **Avoid**: Generic stock imagery, clip art, overly polished or corporate photography

## Social Media

- **Primary Platform**: Instagram -- before/after repair photos, process shots, stories of work in progress
- **Primary Conversion Channel**: WhatsApp -- all CTAs should drive to WhatsApp contact
- **Content Pillars**: Transformations (before/after), Process (behind the scenes), Military uniforms (specialized service), Testimonials
- **Hashtags**: `#CosturasDaBa` `#CostureiraSantaMaria` `#ReparoDeRoupas` `#FardasMilitares`

## SEO Keywords

**Primary:**
- costureira santa maria
- reparo de roupas santa maria
- reparo de fardas militares

**Secondary:**
- ajuste de roupas
- conserto de farda
- costureira moradas
- costuras da ba

## Usage Rules

1. **Colors**: Always use the brand colors defined above. Never substitute with generic alternatives or default framework colors.
2. **Logo clear space**: The logo must have adequate clear space around it -- minimum padding equal to the height of the letter "B" in "Ba".
3. **Text on dark backgrounds**: Use `#FAFAF7` (cream) for text on dark backgrounds, never pure white (`#FFFFFF`).
4. **CTAs**: Call-to-action buttons should use WhatsApp Green (`#25D366`) for WhatsApp-related actions, or Rose for general actions. Never use generic blue or gray for CTAs.
5. **Imagery**: Never use clip art or generic stock imagery. All visual content should feel authentic and craft-oriented.
6. **Typography pairing**: Always pair DM Serif Display (headings) with DM Sans (body). Do not mix in other typefaces.
7. **Language**: All customer-facing content must be in Brazilian Portuguese (pt-BR).
8. **WhatsApp link format**: Always use `https://wa.me/5524992035263` for WhatsApp links.
