import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Lazy load below-the-fold components for better performance
const Partners = dynamic(() => import('@/components/Partners'), {
  loading: () => <div className="h-32 bg-secondary-50" />,
})
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-96 bg-secondary-50" />,
})
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-96 bg-secondary-50" />,
})
const Process = dynamic(() => import('@/components/Process'), {
  loading: () => <div className="h-96 bg-secondary-50" />,
})
const Benefits = dynamic(() => import('@/components/Benefits'), {
  loading: () => <div className="h-96 bg-secondary-50" />,
})

export const metadata: Metadata = {
  title: 'Beyond Work - IT Integration & Technology Solutions Saudi Arabia | Riyadh, KSA',
  description: 'Leading IT Integration and Technology Solutions provider in Saudi Arabia. Enterprise cloud infrastructure, cybersecurity, network solutions, and digital transformation services in Riyadh, KSA. Contact us for professional IT consulting.',
  keywords: [
    'IT solutions Saudi Arabia',
    'IT integration KSA',
    'enterprise IT Riyadh',
    'technology solutions Saudi Arabia',
    'cloud infrastructure Riyadh',
    'cybersecurity Saudi Arabia',
    'network solutions KSA',
    'data center Saudi Arabia',
    'managed IT services Riyadh',
    'digital transformation KSA',
    'IT consulting Saudi Arabia',
    'enterprise technology Riyadh',
  ],
  alternates: {
    canonical: 'https://bwork.sa',
  },
  openGraph: {
    title: 'Beyond Work - IT Integration & Technology Solutions Saudi Arabia',
    description: 'Leading IT Integration and Technology Solutions provider in Saudi Arabia. Transform your business with enterprise-grade cloud, security, and network solutions.',
    url: 'https://bwork.sa',
    siteName: 'Beyond Work',
    images: [
      {
        url: '/images/bworkog.jpg',
        width: 1200,
        height: 630,
        alt: 'Beyond Work - IT Integration & Technology Solutions Saudi Arabia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Work - IT Solutions Saudi Arabia',
    description: 'Leading IT Integration provider in Saudi Arabia. Enterprise technology solutions in Riyadh, KSA.',
    images: ['/images/bworkog.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="overflow-x-hidden max-w-full">
        <Hero />
        <Partners />
        <Services />
        <About />
        <Process />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
