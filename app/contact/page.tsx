import type { Metadata} from 'next'
import ContactFullPage from '@/components/ContactFullPage'

export const metadata: Metadata = {
  title: 'Contact Us & Request a Quote | BWORK',
  description: 'Get in touch with BWORK for IT infrastructure solutions, structured cabling, data center services, and enterprise networking. Request a consultation today.',
  keywords: ['contact BWORK', 'request quote', 'IT consultation', 'get in touch', 'enterprise IT support'],
}

export default function ContactPage() {
  return <ContactFullPage />
}
