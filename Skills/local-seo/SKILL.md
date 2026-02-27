---
name: local-seo
description: Optimize websites for local search visibility, especially for small businesses and service providers in Brazil. Use this skill when the user asks about SEO, local search optimization, Google Business Profile, structured data (Schema.org), meta tags, Open Graph tags, local keywords, NAP consistency, Google Maps integration, or improving search rankings for a local business. Covers Schema.org LocalBusiness markup, Portuguese-language keyword strategy, technical SEO (Core Web Vitals, page speed, mobile-friendliness), and local content strategy. Works alongside the landing-page skill for page structure and the frontend-design skill for performance-conscious implementation.
---

# Local SEO Optimization

Guide the implementation of local SEO for small businesses and service providers, with specific depth for Brazilian Portuguese websites.

## Process

1. Implement Schema.org structured data
2. Configure meta tags and Open Graph
3. Optimize for local keywords
4. Ensure NAP consistency
5. Set up Google Maps integration
6. Address technical SEO fundamentals
7. Plan local content strategy

## Step 1: Schema.org Structured Data

Add JSON-LD structured data to the page `<head>`. For service businesses, use the LocalBusiness schema (or a more specific subtype).

See [references/schema-org-templates.md](references/schema-org-templates.md) for complete JSON-LD templates.

Key requirements:
- Use `@type: "LocalBusiness"` (or subtypes like `"Tailor"` if applicable; otherwise use `"LocalBusiness"` with `additionalType`)
- Include: name, address, telephone, openingHours, geo coordinates, image, priceRange, areaServed
- For Brazilian addresses: `addressCountry: "BR"`, `addressRegion` with state abbreviation ("SP", "RJ")
- Add `sameAs` array pointing to social media profiles
- Add `hasOfferCatalog` for services offered
- Validate with Google's Rich Results Test after implementation

## Step 2: Meta Tags and Open Graph

Essential meta tags:
- `<title>`: Primary keyword + business name + city (under 60 characters)
- `<meta name="description">`: Compelling description with city/neighborhood + primary service + CTA (under 160 characters)
- `<meta name="geo.region">` and `<meta name="geo.placename">`
- `<link rel="canonical">` to prevent duplicate content

Open Graph tags (critical for WhatsApp/social sharing in Brazil):
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- `og:locale` set to `pt_BR`
- Image should be 1200x630px minimum for WhatsApp previews

Twitter Card tags:
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

## Step 3: Local Keyword Strategy

For Brazilian Portuguese local businesses:
- Primary keyword pattern: "[serviço] em [cidade/bairro]" (e.g., "costureira em Copacabana", "ajuste de roupas em Botafogo")
- Include neighborhood-level keywords, not just city-level
- Use natural Portuguese — avoid keyword stuffing
- Target long-tail: "onde fazer bainha de calça em [bairro]"
- Include colloquial terms alongside formal ones (e.g., "costureira" AND "modista" AND "ajuste de roupas")

Keyword placement:
- H1: Primary service + location
- H2s: Service variations + location variations
- Image alt text: Descriptive with natural keyword inclusion
- URL slug: Keep short, include primary keyword
- Internal anchor text: Descriptive, keyword-aware

## Step 4: NAP Consistency

NAP (Name, Address, Phone) must be identical across:
- Website (footer, contact section, structured data)
- Google Business Profile
- Social media profiles
- Local directories (Apontador, TeleListas, Guia Local)
- WhatsApp Business profile

Format standardization for Brazilian addresses:
- Use full street type ("Rua", "Avenida", not abbreviations)
- Include CEP (postal code)
- Include neighborhood (bairro)
- Phone with country code: +55 (XX) XXXXX-XXXX

## Step 5: Google Maps Integration

- Embed Google Maps iframe in contact section with the business location
- Use Google Maps Embed API for a cleaner integration if API key is available
- Add a "Como chegar" link that opens Google Maps directions
- Ensure the map pin matches the NAP address exactly
- Consider adding nearby landmarks or public transit references

See [references/google-business-profile.md](references/google-business-profile.md) for Google Business Profile optimization guidance.

## Step 6: Technical SEO

See [references/technical-seo-checklist.md](references/technical-seo-checklist.md) for the complete checklist.

Priority items:
- **Page speed**: Target < 2.5s LCP. Optimize images (WebP, srcset, lazy loading). Minimize render-blocking JS/CSS.
- **Mobile-friendliness**: Responsive design, 48px touch targets, no horizontal scroll, readable text without zooming
- **Core Web Vitals**: LCP < 2.5s, INP < 200ms, CLS < 0.1
- **HTTPS**: Required for all pages
- **Semantic HTML**: Proper heading hierarchy (single H1), landmark elements
- **Sitemap**: Generate sitemap.xml even for single-page sites
- **Robots.txt**: Allow all crawlers, reference sitemap

Note: See `TRACKING_SETUP.md` for Meta Pixel and UTMify scripts. Account for their impact on page load performance — load them async/defer to minimize Core Web Vitals impact.

## Step 7: Local Content Strategy

Content that supports local SEO:
- Service descriptions with local context and neighborhood mentions
- "About" section mentioning neighborhood, history, community ties
- FAQ addressing local search queries ("costureira perto de [bairro]")
- Customer testimonials mentioning specific services and location
- Blog posts about local topics (if multi-page site)

## Skill Composition

- **Page structure**: The landing-page skill handles section ordering and content strategy. This skill adds SEO layers on top.
- **Visual implementation**: The frontend-design skill handles aesthetics. Coordinate to ensure images are optimized and animations do not harm Core Web Vitals.
- **Tracking**: See `TRACKING_SETUP.md` for Meta Pixel and UTMify integration, which complements SEO with paid traffic tracking.
