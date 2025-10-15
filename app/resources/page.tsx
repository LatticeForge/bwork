import type { Metadata } from 'next'
import ResourcesFullPage from '@/components/ResourcesFullPage'

export const metadata: Metadata = {
  title: 'Resources & Downloads | BWORK',
  description: 'Download BWORK service guides, brochures, and technical documentation for structured cabling, data center infrastructure, and IT integration solutions.',
  keywords: ['IT resources', 'service guides', 'brochures', 'technical documentation', 'downloads'],
}

export default function ResourcesPage() {
  return <ResourcesFullPage />
}
