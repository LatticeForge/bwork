import type { Metadata } from 'next'
import PartnersFullPage from '@/components/PartnersFullPage'

export const metadata: Metadata = {
  title: 'Technology Partners & Vendors | BWORK',
  description: 'BWORK partners with leading technology vendors including CISCO, HPE, DELL, LENOVO, MICROSOFT, GOOGLE, and more to deliver best-in-class IT solutions.',
  keywords: ['technology partners', 'IT vendors', 'CISCO', 'HPE', 'DELL', 'LENOVO', 'MICROSOFT', 'enterprise technology'],
  alternates: {
    canonical: 'https://bwork.tech/partners',
  },
  openGraph: {
    title: 'Technology Partners & Vendors | BWORK',
    description: 'BWORK partners with industry-leading technology vendors to deliver best-in-class IT solutions.',
    url: 'https://bwork.tech/partners',
    siteName: 'BWORK',
    type: 'website',
  },
}

export default function PartnersPage() {
  return <PartnersFullPage />
}
