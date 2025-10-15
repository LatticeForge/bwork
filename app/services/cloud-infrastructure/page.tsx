import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Cloud & Infrastructure Solutions | BWORK',
  description: 'Enterprise cloud infrastructure, data center design, server virtualization, and storage solutions. Scalable, secure infrastructure for modern businesses.',
  keywords: ['cloud infrastructure', 'data center', 'server virtualization', 'enterprise storage', 'backup solutions', 'disaster recovery'],
}

export default function CloudInfrastructurePage() {
  const features = [
    {
      title: 'Server & Virtualization',
      description: 'Enterprise-grade server infrastructure with advanced virtualization and VDI solutions for optimal resource utilization and flexibility.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Enterprise Storage Solutions',
      description: 'High-performance storage systems designed for mission-critical applications with scalability and reliability.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'Backup, Archive & Disaster Recovery',
      description: 'Comprehensive data protection strategies with automated backup, long-term archival, and tested disaster recovery solutions.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Cloud Services',
      description: 'Seamless migration to and management of leading cloud platforms including AWS, Azure, and Google Cloud.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: 'Data Center Design & Build',
      description: 'Complete data center infrastructure including power systems, precision cooling, raised floors, and monitoring systems.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Enterprise Security Solutions',
      description: 'Multi-layered security infrastructure protecting your data, applications, and networks from evolving threats.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ]

  const technicalSpecs = [
    'Server, Virtualization and VDI platforms',
    'Enterprise Storage Solutions (SAN, NAS, DAS)',
    'Backup, Archive and Disaster Recovery systems',
    'Enterprise Security Solutions (firewalls, IDS/IPS)',
    'Networking Power and UPS systems',
    'Power Systems (redundant power distribution)',
    'Precision Cooling Systems (HVAC)',
    'Raised Floors and environmental control',
    'Fire Detection and Suppression Systems',
    'Data Cabling Solutions (fiber and copper)',
    'Monitoring Systems (DCIM and environmental)',
    'Cloud platform migration (AWS, Azure, GCP)',
  ]

  const benefits = [
    'Reduce downtime with redundant infrastructure',
    'Scale resources on-demand as your business grows',
    'Lower operational costs through efficient resource utilization',
    'Secure your infrastructure with enterprise-grade protection',
    'Ensure business continuity with tested disaster recovery',
    'Optimize performance with virtualization technologies',
  ]

  return (
    <ServicePageTemplate
      title="Cloud & Infrastructure Solutions"
      subtitle="Enterprise-grade infrastructure that scales with your business"
      description="From on-premises data centers to hybrid cloud environments, BWORK delivers comprehensive infrastructure solutions that combine cutting-edge technology with proven reliability. We design, build, and manage infrastructure that powers modern enterprises."
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
    />
  )
}
