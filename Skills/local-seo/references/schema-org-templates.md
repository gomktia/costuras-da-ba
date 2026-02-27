# Schema.org JSON-LD Templates

Complete JSON-LD templates for local business structured data. Add to `<head>` inside a `<script type="application/ld+json">` tag.

## LocalBusiness (Complete Template)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "alternateName": "Nome Alternativo (se houver)",
  "description": "Descrição do negócio com keywords locais",
  "url": "https://www.example.com",
  "telephone": "+55-XX-XXXXX-XXXX",
  "email": "contato@example.com",
  "image": [
    "https://www.example.com/images/photo1.webp",
    "https://www.example.com/images/photo2.webp"
  ],
  "logo": "https://www.example.com/images/logo.png",
  "priceRange": "$$",
  "currenciesAccepted": "BRL",
  "paymentAccepted": "Dinheiro, Cartão de Crédito, Cartão de Débito, Pix",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Example, 123",
    "addressLocality": "Cidade",
    "addressRegion": "UF",
    "postalCode": "00000-000",
    "addressCountry": "BR",
    "neighborhood": "Bairro"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -00.000000,
    "longitude": -00.000000
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Cidade"
    },
    {
      "@type": "Place",
      "name": "Bairro 1"
    },
    {
      "@type": "Place",
      "name": "Bairro 2"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/business",
    "https://www.facebook.com/business"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ajustes e Reparos",
          "description": "Ajuste de roupas, barra, cintura, comprimento"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roupas Sob Medida",
          "description": "Confecção de peças exclusivas sob medida"
        }
      }
    ]
  }
}
```

## Costureira Example (Fully Populated)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/ProfessionalService",
  "name": "Coturas da Bá",
  "description": "Costureira profissional em [Bairro], [Cidade]. Ajustes, reparos e roupas sob medida com mais de X anos de experiência.",
  "url": "https://www.coturasdaba.com.br",
  "telephone": "+55-XX-XXXXX-XXXX",
  "image": "https://www.coturasdaba.com.br/images/atelie.webp",
  "priceRange": "$$",
  "currenciesAccepted": "BRL",
  "paymentAccepted": "Dinheiro, Cartão, Pix",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua [Street], [Number]",
    "addressLocality": "[Cidade]",
    "addressRegion": "[UF]",
    "postalCode": "[CEP]",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -00.000000,
    "longitude": -00.000000
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/coturasdaba"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Costura",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ajustes e Reparos",
          "description": "Barra, cintura, comprimento, troca de zíper, reparos diversos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roupas Sob Medida",
          "description": "Modelagem e confecção de peças exclusivas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vestidos de Noiva",
          "description": "Criação, ajuste e reforma de vestidos de noiva"
        }
      }
    ]
  }
}
```

## FAQPage Schema

Add alongside the LocalBusiness schema when the page has an FAQ section:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto custa um ajuste de roupa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O valor varia de acordo com o tipo de ajuste. Barras a partir de R$ XX, ajustes de cintura a partir de R$ XX. Entre em contato para um orçamento personalizado."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o prazo de entrega?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A maioria dos ajustes fica pronta em 3 a 5 dias úteis. Peças sob medida têm prazo de X a X semanas."
      }
    }
  ]
}
```

## AggregateRating Schema

Add when you have Google reviews or collected ratings:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "87"
  }
}
```

Note: Only use AggregateRating if you have real, verifiable reviews. Do not fabricate ratings.

## Validation

After implementing structured data:
1. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Check [Google Search Console](https://search.google.com/search-console) for structured data errors
3. Verify all required fields are populated with real data
4. Ensure geo coordinates match the actual business location
