import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Physical Infrastructure Services | BWORK',
  description: 'Comprehensive physical infrastructure solutions including power distribution, environmental control, raised floors, cable management, and equipment installation for enterprise IT environments.',
  keywords: ['physical infrastructure', 'power distribution', 'environmental control', 'raised floors', 'cable management', 'equipment racks', 'IT infrastructure'],
  alternates: {
    canonical: 'https://bwork.tech/services/physical-infrastructure',
  },
  openGraph: {
    title: 'Physical Infrastructure Services | BWORK',
    description: 'Comprehensive physical infrastructure solutions including power distribution, environmental control, raised floors, and cable management.',
    url: 'https://bwork.tech/services/physical-infrastructure',
    siteName: 'BWORK',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BWORK Physical Infrastructure Services',
      },
    ],
    type: 'website',
  },
}

export default function PhysicalInfrastructurePage() {
  const features = [
    {
      title: 'Power Distribution Systems',
      description: 'Design and installation of redundant power distribution, UPS systems, PDUs, and backup power solutions ensuring continuous operation.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Environmental Control Systems',
      description: 'HVAC, precision cooling, temperature and humidity monitoring to maintain optimal conditions for sensitive IT equipment.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: 'Raised Floor Systems',
      description: 'Professional raised flooring installation providing efficient cable management, airflow distribution, and flexible infrastructure layout.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'Physical Security Integration',
      description: 'Access control systems, surveillance integration, secure equipment cabinets, and environmental sensors for complete facility protection.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Cable Pathways & Management',
      description: 'Installation of cable trays, conduits, raceways, and overhead ladder racks to organize and protect network infrastructure.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Equipment Racks & Mounting',
      description: 'Server racks, wall-mount cabinets, equipment mounting, and proper weight distribution for safe and organized installations.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
  ]

  const technicalSpecs = [
    'Redundant power distribution and UPS systems',
    'Power Distribution Units (PDUs) and power strips',
    'Backup generators and transfer switches',
    'Precision cooling and HVAC systems',
    'Temperature and humidity monitoring',
    'Raised floor installation (various heights)',
    'Cable trays, conduits, and overhead raceways',
    'Grounding and bonding infrastructure',
    'Server racks and telecommunications cabinets',
    'Wall-mount and floor-standing equipment racks',
    'Cable management panels and organizers',
    'Environmental sensors and monitoring systems',
  ]

  const benefits = [
    'Ensure uptime with reliable power infrastructure',
    'Protect equipment with environmental control',
    'Organize systems with professional cable management',
    'Scale infrastructure as business grows',
    'Meet compliance and safety standards',
    'Reduce maintenance with organized installations',
  ]

  return (
    <ServicePageTemplate
      title="Physical Infrastructure Services"
      subtitle="Complete infrastructure solutions for enterprise IT environments"
      description="BWORK delivers comprehensive physical infrastructure services that provide the foundation for reliable IT operations. From power distribution and environmental control to cable management and equipment installation, we build robust infrastructure that supports your technology needs."
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
    />
  )
}
