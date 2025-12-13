// Centralized Schema Generation Utilities for SEO

interface LocalBusinessSchemaOptions {
  name?: string
  url?: string
  description?: string
}

export function generateLocalBusinessSchema(options?: LocalBusinessSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: options?.name || 'Beyond Work',
    url: options?.url || 'https://bwork.sa',
    logo: 'https://bwork.sa/images/logo.png',
    image: 'https://bwork.sa/images/bworkog.jpg',
    description:
      options?.description ||
      'Leading IT Integration and Technology Solutions provider in Saudi Arabia specializing in cloud infrastructure, cybersecurity, software development, and digital transformation.',
    telephone: '+966535083449',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Khalid Bin Waleed Street, Malaz',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh Province',
      postalCode: '12836',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.7136,
      longitude: 46.6753,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966535083449',
      contactType: 'Customer Service',
      email: 'support@bwork.sa',
      areaServed: 'SA',
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: [
      'https://www.linkedin.com/company/bwork',
      'https://twitter.com/bwork',
      'https://www.facebook.com/bwork',
    ],
  }
}

interface Service {
  title: string
  description: string
  slug?: string
}

export function generateServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Beyond Work',
      url: 'https://bwork.sa',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://bwork.sa/services/${service.slug || ''}`,
      servicePhone: '+966535083449',
      serviceSmsNumber: '+966535083449',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'SAR',
    },
  }
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

interface FAQ {
  question: string
  answer: string
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

interface WebPage {
  name: string
  description: string
  url: string
}

export function generateWebPageSchema(page: WebPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url,
    publisher: {
      '@type': 'LocalBusiness',
      name: 'Beyond Work',
      url: 'https://bwork.sa',
    },
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      url: 'https://bwork.sa',
    },
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Beyond Work',
    url: 'https://bwork.sa',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://bwork.sa/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
