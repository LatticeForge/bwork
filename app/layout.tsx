import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '../styles/globals.css'
import Chatbot from '@/components/Chatbot'

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
  title: 'BWORK - IT Integration & Technology Solutions',
  description: 'Enterprise IT Integration and Technology Solutions provider. We deliver cloud infrastructure, cybersecurity, software development, API integration, and IT consulting services to transform your business.',
  keywords: ['IT integration', 'technology solutions', 'cloud infrastructure', 'cybersecurity', 'software development', 'API integration', 'IT consulting', 'DevOps', 'enterprise IT', 'digital transformation'],
  authors: [{ name: 'BWORK Technologies' }],
  creator: 'BWORK',
  publisher: 'BWORK',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bwork.tech'),
  openGraph: {
    title: 'BWORK - IT Integration & Technology Solutions',
    description: 'Enterprise IT Integration and Technology Solutions provider. Connecting businesses with smarter IT solutions.',
    url: 'https://bwork.tech',
    siteName: 'BWORK',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BWORK IT Integration & Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BWORK - IT Integration & Technology Solutions',
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
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
