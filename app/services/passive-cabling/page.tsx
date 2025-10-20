import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Passive Cabling & Structured Cabling | BWORK',
  description: 'Professional structured cabling solutions including copper, fiber optic, patch panels, and complete cabling infrastructure for enterprise networks.',
  keywords: ['structured cabling', 'fiber optic', 'CAT6', 'CAT6a', 'CAT7', 'CAT8', 'patch panels', 'network cabling'],
  alternates: {
    canonical: 'https://bwork.tech/services/passive-cabling',
  },
  openGraph: {
    title: 'Passive Cabling & Structured Cabling | BWORK',
    description: 'Professional structured cabling solutions including copper, fiber optic, and complete cabling infrastructure for enterprise networks.',
    url: 'https://bwork.tech/services/passive-cabling',
    siteName: 'BWORK',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BWORK Structured Cabling Solutions',
      },
    ],
    type: 'website',
  },
}

export default function PassiveCablingPage() {
  const features = [
    {
      title: 'Copper Cabling Systems',
      description: 'Design, installation, termination, and testing of all copper cables carrying data, voice, and power (PoE) throughout your facility.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Fiber Optic Cabling',
      description: 'Design, pulling, fusion splicing, termination, and certification of high-speed fiber optic runs for backbone and long-distance connections.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Patch Panels & Cabinets',
      description: 'Installation and labeling of patch panels and secure telecommunication racks/cabinets to house both passive and active infrastructure.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
    },
    {
      title: 'Outlets & Connectors',
      description: 'Installation of network wall outlets (RJ-45) and connectors providing the final physical connection point for end-user devices.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Cable Management Infrastructure',
      description: 'Design and installation of cable trays, conduits, and raceways to physically support, organize, and protect network cabling.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'Grounding & Earthing Systems',
      description: 'Proper electrical grounding systems for all IT infrastructure ensuring safety and protecting sensitive equipment from surges.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ]

  const technicalSpecs = [
    'Copper Cabling: CAT-5e, CAT-6, CAT-6a, CAT-7, CAT-8',
    'Fiber Optic Cabling: Single-mode and Multi-mode',
    'Design, installation, termination, and testing services',
    'Fusion splicing and termination for fiber runs',
    'Patch Panels and telecommunication cabinets',
    'Network wall outlets (RJ-45) and connectors',
    'Cable Pathways: trays, conduits, and raceways',
    'Grounding and Earthing Systems installation',
    'Cable management and organization solutions',
    'Voice/Data cabling for communication infrastructure',
    'PoE (Power over Ethernet) capable installations',
    'Certification and compliance testing',
  ]

  const benefits = [
    'Optimize bandwidth and minimize signal interference',
    'Future-proof infrastructure for growing bandwidth needs',
    'Reliable communication backbone for voice and data',
    'Reduce network downtime with quality cabling',
    'Simplify troubleshooting with organized cable management',
    'Meet industry standards and compliance requirements',
  ]

  return (
    <ServicePageTemplate
      title="Structured Cabling Solutions"
      subtitle="Foundation for reliable, high-performance networks"
      description="BWORK delivers professional structured cabling solutions that form the critical physical backbone of your IT infrastructure. From copper to fiber optics, our expert installation ensures optimal performance, scalability, and reliability for years to come."
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
    />
  )
}
