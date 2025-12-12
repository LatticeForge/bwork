import type { Metadata } from 'next'
import ResourcesFullPage from '@/components/ResourcesFullPage'

export const metadata: Metadata = {
  title: 'Resources & Downloads | Beyond Work',
  description: 'Download Beyond Work service guides, brochures, and technical documentation for structured cabling, data center infrastructure, and IT integration solutions.',
  keywords: ['IT resources', 'service guides', 'brochures', 'technical documentation', 'downloads'],
  alternates: {
    canonical: 'https://bwork.sa/resources',
  },
  openGraph: {
    title: 'Resources & Downloads | Beyond Work',
    description: 'Download Beyond Work service guides, brochures, and technical documentation.',
    url: 'https://bwork.sa/resources',
    siteName: 'Beyond Work',
    type: 'website',
  },
}

export default function ResourcesPage() {
  return (
    <div className="overflow-x-hidden max-w-full">
      <ResourcesFullPage />
    </div>
  )
}
