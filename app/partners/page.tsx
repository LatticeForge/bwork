import type { Metadata } from 'next'
import PartnersFullPage from '@/components/PartnersFullPage'

export const metadata: Metadata = {
  title: 'Technology Partners & Vendors | BWORK',
  description: 'BWORK partners with leading technology vendors including CISCO, HPE, DELL, LENOVO, MICROSOFT, GOOGLE, and more to deliver best-in-class IT solutions.',
  keywords: ['technology partners', 'IT vendors', 'CISCO', 'HPE', 'DELL', 'LENOVO', 'MICROSOFT', 'enterprise technology'],
}

export default function PartnersPage() {
  return <PartnersFullPage />
}
