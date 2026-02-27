# Technical SEO Checklist

Priority-ordered checklist for landing page technical SEO. Focus on items marked [Critical] first.

## Page Speed & Core Web Vitals

### Images [Critical]
- [ ] Use WebP format with JPG/PNG fallback
- [ ] Implement responsive images with `srcset` and `sizes`
- [ ] Lazy load images below the fold (`loading="lazy"`)
- [ ] Hero image: `loading="eager"`, preload with `<link rel="preload">`
- [ ] Compress images: target < 100KB for thumbnails, < 300KB for hero
- [ ] Set explicit `width` and `height` attributes to prevent CLS

### Fonts [Critical]
- [ ] Preload critical fonts: `<link rel="preload" as="font" crossorigin>`
- [ ] Use `font-display: swap` to prevent invisible text
- [ ] Limit font weights/variants loaded (2-3 max)
- [ ] Consider system font fallbacks for body text

### CSS [Critical]
- [ ] Inline critical CSS in `<head>` for above-the-fold content
- [ ] Defer non-critical CSS: `<link rel="preload" as="style" onload="this.rel='stylesheet'">`
- [ ] Minimize CSS file size (remove unused styles)
- [ ] Use CSS containment for complex layouts

### JavaScript [Critical]
- [ ] Use `defer` or `async` on all script tags
- [ ] Third-party scripts (Meta Pixel, UTMify) loaded with `async defer`
- [ ] Minimize JavaScript — CSS-only solutions preferred for animations
- [ ] No render-blocking scripts in `<head>`

### Performance Targets
- [ ] LCP (Largest Contentful Paint) < 2.5 seconds
- [ ] INP (Interaction to Next Paint) < 200ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Total page weight < 1.5MB (ideally < 800KB)
- [ ] Time to Interactive < 3.5 seconds

### Tools for Testing
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Google Lighthouse (Chrome DevTools)
- WebPageTest: https://www.webpagetest.org/

## HTML & Semantics [Critical]

- [ ] Single `<h1>` per page (in hero section, with primary keyword)
- [ ] Logical heading hierarchy (H1 → H2 → H3, no skipping)
- [ ] Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] `<html lang="pt-BR">` attribute set
- [ ] Valid HTML (test with validator.w3.org)
- [ ] `<meta charset="UTF-8">`
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">`

## Meta Tags [Critical]

- [ ] `<title>` under 60 characters, includes primary keyword + city
- [ ] `<meta name="description">` under 160 characters, includes CTA
- [ ] `<link rel="canonical" href="https://...">` set
- [ ] Open Graph tags (og:title, og:description, og:image, og:url, og:locale)
- [ ] Twitter Card tags
- [ ] `<meta name="geo.region" content="BR-XX">`
- [ ] `<meta name="geo.placename" content="Cidade">`

## Mobile [Critical]

- [ ] Responsive design (no horizontal scrolling)
- [ ] Touch targets minimum 48x48px
- [ ] Body text minimum 16px
- [ ] No content wider than viewport
- [ ] Click-to-call phone links: `<a href="tel:+55...">`
- [ ] Click-to-WhatsApp links: `<a href="https://wa.me/55...">`
- [ ] Test on real devices (not just browser emulation)

## Structured Data [Critical]

- [ ] JSON-LD LocalBusiness schema in `<head>`
- [ ] FAQPage schema (if FAQ section exists)
- [ ] Validated with Google Rich Results Test
- [ ] No errors in Google Search Console

## Crawlability

- [ ] `robots.txt` allows all crawlers

```
User-agent: *
Allow: /
Sitemap: https://www.example.com/sitemap.xml
```

- [ ] `sitemap.xml` created (even for single-page sites)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.example.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] Sitemap submitted to Google Search Console
- [ ] No broken internal links (check with browser tools or Screaming Frog)

## Security

- [ ] HTTPS enabled (SSL certificate installed)
- [ ] HTTP redirects to HTTPS
- [ ] No mixed content warnings (all resources loaded via HTTPS)

## Accessibility (also helps SEO)

- [ ] All images have descriptive `alt` attributes
- [ ] Sufficient color contrast (WCAG AA minimum)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Form labels properly associated with inputs
- [ ] ARIA landmarks match semantic HTML
- [ ] Skip navigation link for keyboard users

## Third-Party Scripts Impact

Account for the performance impact of tracking scripts from `TRACKING_SETUP.md`:

- **Meta Pixel**: Loaded async but adds ~80-100KB. Place after critical CSS.
- **UTMify**: Loaded with `async defer`, minimal impact (~20KB).
- **Google Maps iframe**: Lazy load with `loading="lazy"`. Adds ~200KB when scrolled into view.
- **Google Fonts**: Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`.

Load order recommendation:
1. Critical CSS (inline)
2. Preloaded fonts
3. Main JavaScript (defer)
4. Meta Pixel (async, in head)
5. UTMify (async defer, in head)
6. Google Maps (lazy, in contact section)
