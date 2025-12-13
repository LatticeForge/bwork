import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '../styles/globals.css'
import Chatbot from '@/components/Chatbot'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Beyond Work - IT Integration & Technology Solutions Saudi Arabia',
  description: 'Leading IT Integration and Technology Solutions provider in Saudi Arabia. We deliver cloud infrastructure, cybersecurity, software development, API integration, and IT consulting services to transform your business in KSA.',
  keywords: ['IT integration', 'technology solutions', 'cloud infrastructure', 'cybersecurity', 'software development', 'API integration', 'IT consulting', 'DevOps', 'enterprise IT', 'digital transformation', 'IT solutions Saudi Arabia', 'IT integration KSA', 'enterprise IT Riyadh', 'technology services Jeddah', 'cloud services Saudi Arabia'],
  authors: [{ name: 'Beyond Work' }],
  creator: 'Beyond Work',
  publisher: 'Beyond Work',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bwork.sa'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Beyond Work - IT Integration & Technology Solutions Saudi Arabia',
    description: 'Leading IT Integration and Technology Solutions provider in Saudi Arabia. Connecting businesses with smarter IT solutions.',
    url: 'https://bwork.sa',
    siteName: 'Beyond Work',
    images: [
      {
        url: '/images/bworkog.jpg',
        width: 1200,
        height: 630,
        alt: 'Beyond Work IT Integration & Technology Solutions Saudi Arabia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Work - IT Integration & Technology Solutions Saudi Arabia',
    description: 'Leading IT Integration and Technology Solutions provider in Saudi Arabia. Connecting businesses with smarter IT solutions.',
    images: ['/images/bworkog.jpg'],
    creator: '@bwork',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ZbjxzpLTvuubzBfLYJJ5CEfkDIe3I4oIoSvwIGd9Eu8',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD Structured Data for LocalBusiness
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Beyond Work',
    url: 'https://bwork.sa',
    logo: 'https://bwork.sa/images/logo.png',
    image: 'https://bwork.sa/images/bworkog.jpg',
    description: 'Leading IT Integration and Technology Solutions provider in Saudi Arabia specializing in cloud infrastructure, cybersecurity, software development, and digital transformation.',
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

  // JSON-LD Structured Data for WebSite with Search
  const websiteSchema = {
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

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
