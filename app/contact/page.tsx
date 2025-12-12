import type { Metadata} from 'next'
import ContactFullPage from '@/components/ContactFullPage'

export const metadata: Metadata = {
  title: 'Contact Us & Request a Quote | Beyond Work',
  description: 'Get in touch with Beyond Work for IT infrastructure solutions, structured cabling, data center services, and enterprise networking. Request a consultation today.',
  keywords: ['contact Beyond Work', 'request quote', 'IT consultation', 'get in touch', 'enterprise IT support'],
  alternates: {
    canonical: 'https://bwork.sa/contact',
  },
  openGraph: {
    title: 'Contact Us & Request a Quote | Beyond Work',
    description: 'Get in touch with Beyond Work for IT infrastructure solutions and enterprise networking services.',
    url: 'https://bwork.sa/contact',
    siteName: 'Beyond Work',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden max-w-full">
      <ContactFullPage />
    </div>
  )
}
