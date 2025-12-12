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
  title: 'Beyond Work - IT Integration & Technology Solutions',
  description: 'Enterprise IT Integration and Technology Solutions provider. We deliver cloud infrastructure, cybersecurity, software development, API integration, and IT consulting services to transform your business.',
  keywords: ['IT integration', 'technology solutions', 'cloud infrastructure', 'cybersecurity', 'software development', 'API integration', 'IT consulting', 'DevOps', 'enterprise IT', 'digital transformation'],
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
    title: 'Beyond Work - IT Integration & Technology Solutions',
    description: 'Enterprise IT Integration and Technology Solutions provider. Connecting businesses with smarter IT solutions.',
    url: 'https://bwork.sa',
    siteName: 'Beyond Work',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beyond Work IT Integration & Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Work - IT Integration & Technology Solutions',
    description: 'Enterprise IT Integration and Technology Solutions provider. Connecting businesses with smarter IT solutions.',
    images: ['/images/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Beyond Work',
    url: 'https://bwork.sa',
    logo: 'https://bwork.sa/images/logo.png',
    description: 'Enterprise IT Integration and Technology Solutions provider specializing in cloud infrastructure, cybersecurity, and software development.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-482-9675',
      contactType: 'Customer Service',
      email: 'support@bwork.sa',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '100 Tech Center',
      addressLocality: 'Silicon Valley',
      addressRegion: 'CA',
      postalCode: '94025',
      addressCountry: 'US',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
