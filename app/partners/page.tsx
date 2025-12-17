import type { Metadata } from 'next'
import PartnersFullPage from '@/components/PartnersFullPage'

export const metadata: Metadata = {
  title: 'Technology Partners & Vendors | Beyond Work - IT Solutions Saudi Arabia',
  description: 'Beyond Work partners with leading technology vendors including CISCO, HPE, DELL, LENOVO, MICROSOFT, GOOGLE, and more to deliver best-in-class IT solutions across Saudi Arabia.',
  keywords: ['technology partners', 'IT vendors', 'CISCO', 'HPE', 'DELL', 'LENOVO', 'MICROSOFT', 'enterprise technology', 'technology partners Saudi Arabia', 'IT vendors KSA', 'authorized partner Riyadh'],
  alternates: {
    canonical: 'https://bwork.sa/partners',
  },
  openGraph: {
    title: 'Technology Partners & Vendors | Beyond Work',
    description: 'Beyond Work partners with industry-leading technology vendors including CISCO, HPE, DELL, LENOVO, and MICROSOFT to deliver best-in-class IT solutions.',
    url: 'https://bwork.sa/partners',
    siteName: 'Beyond Work',
    images: [
      {
        url: '/images/bworkog.jpg',
        width: 1200,
        height: 630,
        alt: 'Beyond Work Technology Partners - CISCO, HPE, DELL, LENOVO, MICROSOFT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Partners & Vendors | Beyond Work',
    description: 'Beyond Work partners with industry-leading technology vendors to deliver best-in-class IT solutions.',
    images: ['/images/bworkog.jpg'],
    creator: '@bwork',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PartnersPage() {
  return (
    <div className="overflow-x-hidden max-w-full">
      <PartnersFullPage />
    </div>
  )
}
