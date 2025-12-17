import type { Metadata } from 'next'
import ResourcesFullPage from '@/components/ResourcesFullPage'

export const metadata: Metadata = {
  title: 'Resources & Downloads | Beyond Work - IT Solutions Saudi Arabia',
  description: 'Download Beyond Work service guides, brochures, and technical documentation for structured cabling, data center infrastructure, and IT integration solutions in Saudi Arabia.',
  keywords: ['IT resources', 'service guides', 'brochures', 'technical documentation', 'downloads', 'IT resources Saudi Arabia', 'technology guides KSA', 'IT documentation Riyadh'],
  alternates: {
    canonical: 'https://bwork.sa/resources',
  },
  openGraph: {
    title: 'Resources & Downloads | Beyond Work',
    description: 'Download Beyond Work service guides, brochures, and technical documentation for IT infrastructure and integration solutions.',
    url: 'https://bwork.sa/resources',
    siteName: 'Beyond Work',
    images: [
      {
        url: '/images/bworkog.jpg',
        width: 1200,
        height: 630,
        alt: 'Beyond Work Resources & Downloads - IT Solutions Documentation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources & Downloads | Beyond Work',
    description: 'Download Beyond Work service guides, brochures, and technical documentation for IT infrastructure solutions.',
    images: ['/images/bworkog.jpg'],
    creator: '@bwork',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ResourcesPage() {
  return (
    <div className="overflow-x-hidden max-w-full">
      <ResourcesFullPage />
    </div>
  )
}
