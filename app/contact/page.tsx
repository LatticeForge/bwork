import type { Metadata} from 'next'
import ContactFullPage from '@/components/ContactFullPage'

export const metadata: Metadata = {
  title: 'Contact Us & Request a Quote | Beyond Work - IT Solutions Saudi Arabia',
  description: 'Get in touch with Beyond Work for IT infrastructure solutions, structured cabling, data center services, and enterprise networking. Request a free consultation today in Saudi Arabia.',
  keywords: ['contact Beyond Work', 'request quote', 'IT consultation', 'get in touch', 'enterprise IT support', 'IT consultation Saudi Arabia', 'IT support Riyadh', 'technology consultation KSA'],
  alternates: {
    canonical: 'https://bwork.sa/contact',
  },
  openGraph: {
    title: 'Contact Us & Request a Quote | Beyond Work',
    description: 'Get in touch with Beyond Work for expert IT infrastructure solutions and enterprise networking services in Saudi Arabia.',
    url: 'https://bwork.sa/contact',
    siteName: 'Beyond Work',
    images: [
      {
        url: '/images/bworkog.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Beyond Work - IT Integration & Technology Solutions Saudi Arabia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Request a Quote | Beyond Work',
    description: 'Get in touch with Beyond Work for expert IT infrastructure solutions and enterprise networking services.',
    images: ['/images/bworkog.jpg'],
    creator: '@bwork',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden max-w-full">
      <ContactFullPage />
    </div>
  )
}
