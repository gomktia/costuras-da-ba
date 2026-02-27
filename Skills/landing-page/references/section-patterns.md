# Section Patterns

Detailed patterns for each landing page section. Each section includes purpose, required elements, variants, and responsive considerations.

## Hero Section

**Purpose**: Capture attention, communicate core value proposition, drive primary action.

**Required elements**:
- Headline (H1) — benefit-driven, includes primary keyword
- Primary CTA button — links to WhatsApp, phone, or contact form
- Hero visual — high-quality image, video, or illustration

**Variants**:

1. **Image Background**: Full-width background image with text overlay. Use dark overlay (rgba) for text readability. Best when you have a stunning portfolio photo.
   ```html
   <section class="hero" style="background-image: url('hero.webp')">
     <div class="hero-overlay">
       <h1>Headline</h1>
       <p>Subheadline</p>
       <a href="#" class="cta-btn">CTA</a>
     </div>
   </section>
   ```

2. **Split Layout**: Image on one side, text on the other. Works well for portrait photos or process shots. On mobile, stack text above image.
   ```html
   <section class="hero hero-split">
     <div class="hero-content">
       <h1>Headline</h1>
       <p>Subheadline</p>
       <a href="#" class="cta-btn">CTA</a>
     </div>
     <div class="hero-image">
       <img src="hero.webp" alt="Description" loading="eager">
     </div>
   </section>
   ```

3. **Video Background**: Muted, looping short video showing craftsmanship. Fallback to poster image. Use sparingly — impacts load time.

**Responsive**: On mobile, hero should be 100vh or auto height. Headline must be visible without scrolling. CTA button full-width.

---

## Social Proof Bar

**Purpose**: Build instant credibility with quick-scan metrics.

**Required elements**: 3-4 key stats (years of experience, clients served, services completed, Google rating).

```html
<section class="social-proof-bar">
  <div class="proof-item">
    <span class="proof-number">15+</span>
    <span class="proof-label">Anos de experiência</span>
  </div>
  <div class="proof-item">
    <span class="proof-number">2.000+</span>
    <span class="proof-label">Clientes atendidos</span>
  </div>
  <div class="proof-item">
    <span class="proof-number">⭐ 4.9</span>
    <span class="proof-label">Avaliação Google</span>
  </div>
</section>
```

**Responsive**: Horizontal row on desktop, 2x2 grid or horizontal scroll on mobile.

---

## Services Section

**Purpose**: Show what you offer with clear, benefit-oriented descriptions.

**Variants**:

1. **Card Grid**: Each service as a card with icon/image, title, short description, and optional price range.
   ```html
   <section class="services">
     <h2>Nossos Serviços</h2>
     <div class="services-grid">
       <div class="service-card">
         <img src="icon.svg" alt="">
         <h3>Ajustes e Reparos</h3>
         <p>Barra, cintura, comprimento — deixamos sua roupa perfeita.</p>
       </div>
     </div>
   </section>
   ```

2. **Icon List**: Compact list with icons, best when you have many services.

3. **Tabs/Accordion**: Group related services into categories. Good when services are diverse (roupas femininas, masculinas, noivas, etc.).

**Responsive**: Cards stack in a single column on mobile. Tabs become an accordion on mobile.

---

## About/Story Section

**Purpose**: Create personal connection, humanize the business.

**Required elements**: Photo of the owner/team, narrative about origin/passion, what makes the work special.

```html
<section class="about">
  <div class="about-image">
    <img src="owner.webp" alt="[Name], costureira há [X] anos">
  </div>
  <div class="about-content">
    <h2>Sobre a [Name]</h2>
    <p>Story paragraph...</p>
  </div>
</section>
```

**Key for costureira**: Emphasize handwork, attention to detail, inherited craft, personal care with each piece.

**Responsive**: Stack image above text on mobile.

---

## Portfolio/Gallery

**Purpose**: Visual proof of craftsmanship and quality.

**Variants**:

1. **Masonry Grid**: Mixed-size images in a Pinterest-style layout.
2. **Before/After Slider**: Interactive comparison showing transformation.
3. **Lightbox Gallery**: Thumbnails that expand to full-size on click.
4. **Categorized Gallery**: Filter by service type (ajustes, noivas, sob medida).

**Required elements**: High-quality images with descriptive alt text.

**Responsive**: 2-column grid on mobile, 3-4 columns on desktop. Lightbox should be full-screen on mobile.

---

## Testimonials

**Purpose**: Social proof through customer voices.

**Variants**:

1. **Carousel/Slider**: One testimonial at a time, auto-rotate or swipeable.
2. **Card Grid**: 2-3 testimonials visible at once.
3. **Featured Single**: One powerful testimonial with large quote and customer photo.
4. **Google Reviews Embed**: Pull directly from Google Business Profile.

```html
<section class="testimonials">
  <h2>O que dizem nossos clientes</h2>
  <div class="testimonial-card">
    <blockquote>
      <p>"Quote text..."</p>
    </blockquote>
    <cite>
      <img src="avatar.webp" alt="Customer name">
      <span>Customer Name</span>
      <span class="stars">⭐⭐⭐⭐⭐</span>
    </cite>
  </div>
</section>
```

**Responsive**: Carousel with swipe gestures on mobile. Cards stack vertically.

---

## Process/How It Works

**Purpose**: Reduce uncertainty by showing what to expect.

**Structure**: 3-5 numbered steps showing the customer journey.

```html
<section class="process">
  <h2>Como Funciona</h2>
  <div class="process-steps">
    <div class="step">
      <span class="step-number">1</span>
      <h3>Entre em contato</h3>
      <p>Envie uma mensagem pelo WhatsApp com o que precisa.</p>
    </div>
    <div class="step">
      <span class="step-number">2</span>
      <h3>Avaliação</h3>
      <p>Traga sua peça para avaliação e orçamento sem compromisso.</p>
    </div>
    <div class="step">
      <span class="step-number">3</span>
      <h3>Entrega</h3>
      <p>Receba sua roupa pronta no prazo combinado.</p>
    </div>
  </div>
</section>
```

**Responsive**: Steps stack vertically on mobile with a connecting line.

---

## CTA Section

**Purpose**: Reinforce primary action between content sections.

**Required elements**: Short motivational headline + CTA button.

```html
<section class="cta-section">
  <h2>Pronta para transformar suas roupas?</h2>
  <p>Fale conosco e receba um orçamento sem compromisso.</p>
  <a href="https://wa.me/55XXXXXXXXXXX" class="cta-btn">
    Chamar no WhatsApp
  </a>
</section>
```

**Responsive**: Full-width button on mobile. Centered text.

---

## FAQ

**Purpose**: Address objections and common questions preemptively.

**Structure**: Accordion with question/answer pairs. Include 5-8 most common questions.

```html
<section class="faq">
  <h2>Perguntas Frequentes</h2>
  <details>
    <summary>Quanto tempo leva para fazer um ajuste?</summary>
    <p>A maioria dos ajustes fica pronta em 3 a 5 dias úteis...</p>
  </details>
</section>
```

**Key questions for costureira**: Pricing, turnaround time, what services are offered, location, how to bring pieces, payment methods.

**Responsive**: Full-width accordion works well on all screen sizes.

---

## Contact/Location

**Purpose**: Make it easy to reach the business and find the location.

**Required elements**: Address, phone (click-to-call), WhatsApp link, Google Maps embed, business hours.

```html
<section class="contact">
  <h2>Onde Estamos</h2>
  <div class="contact-grid">
    <div class="contact-info">
      <address>
        <p>Rua Example, 123 - Bairro</p>
        <p>Cidade - UF, CEP 00000-000</p>
      </address>
      <a href="tel:+55XXXXXXXXXXX">📞 (XX) XXXXX-XXXX</a>
      <a href="https://wa.me/55XXXXXXXXXXX">💬 WhatsApp</a>
      <div class="hours">
        <p>Seg a Sex: 8h às 18h</p>
        <p>Sáb: 8h às 12h</p>
      </div>
    </div>
    <div class="contact-map">
      <iframe src="google-maps-embed-url" loading="lazy"></iframe>
    </div>
  </div>
</section>
```

**Responsive**: Stack info above map on mobile. Map should be full-width.

---

## Footer

**Purpose**: Legal info, secondary navigation, social links.

**Required elements**: Copyright, social media links, secondary nav links.

**Responsive**: Stack columns vertically on mobile.
