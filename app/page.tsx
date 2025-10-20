import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import About from '@/components/About'
import Process from '@/components/Process'
import Benefits from '@/components/Benefits'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BWORK - Enterprise IT Integration & Technology Solutions | Cloud, Security & Software',
  description: 'BWORK delivers enterprise-grade IT integration, cloud infrastructure, cybersecurity, and custom software solutions. Transform your business with cutting-edge technology and expert implementation.',
  keywords: ['enterprise IT solutions', 'IT integration', 'cloud infrastructure', 'data center solutions', 'network infrastructure', 'cybersecurity services', 'software development', 'managed IT services', 'digital transformation', 'technology consulting'],
  alternates: {
    canonical: 'https://bwork.tech',
  },
  openGraph: {
    title: 'BWORK - Enterprise IT Integration & Technology Solutions',
    description: 'Transform your business with enterprise-grade IT integration, cloud infrastructure, and cybersecurity solutions from BWORK.',
    url: 'https://bwork.tech',
    siteName: 'BWORK',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BWORK Enterprise IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BWORK - Enterprise IT Integration & Technology Solutions',
    description: 'Transform your business with enterprise-grade IT solutions from BWORK.',
    images: ['/images/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
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
