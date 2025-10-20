import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'System Integration & API Development | BWORK',
  description: 'Custom API development, system integration, ETL data pipelines, and DevOps solutions connecting disparate business systems.',
  keywords: ['system integration', 'API development', 'data integration', 'ETL', 'DevOps', 'CI/CD'],
  alternates: {
    canonical: 'https://bwork.tech/services/integration-apis',
  },
  openGraph: {
    title: 'System Integration & API Development | BWORK',
    description: 'Custom API development, system integration, ETL data pipelines, and DevOps solutions connecting disparate business systems.',
    url: 'https://bwork.tech/services/integration-apis',
    siteName: 'BWORK',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BWORK System Integration & API Development',
      },
    ],
    type: 'website',
  },
}

export default function IntegrationAPIsPage() {
  const features = [
    {
      title: 'System Integration',
      description: 'Connecting different IT systems, applications, and platforms to work together seamlessly and exchange data reliably.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Custom API Development',
      description: 'Building specialized APIs and connectors to enable communication between legacy systems and modern applications.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Data Migration & ETL',
      description: 'Extract, Transform, Load (ETL) processes to move and harmonize large volumes of data across platforms.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'DevOps & CI/CD Pipelines',
      description: 'Automated software development, testing, and deployment processes for rapid and reliable delivery of updates.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Custom Software Development',
      description: 'Bespoke applications and modules filling functional gaps in commercial software to meet specific business needs.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: 'Business Process Integration',
      description: 'Analyzing and redesigning workflows to maximize efficiency following system integration and automation.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ]

  const technicalSpecs = [
    'System Integration (connecting applications and platforms)',
    'Custom API Development (RESTful, GraphQL, SOAP)',
    'Data Migration and ETL processes',
    'DevOps and CI/CD Pipeline Implementation',
    'Custom Software Development',
    'Business Process Integration Consulting',
    'Microservices architecture design',
    'API gateway and management',
    'Data pipeline orchestration',
    'Infrastructure as Code (IaC)',
    'Containerization (Docker, Kubernetes)',
    'Automated testing frameworks',
  ]

  const benefits = [
    'Accelerate integrations and eliminate manual processes',
    'Unify disparate systems for seamless data flow',
    'Reduce errors with automated ETL pipelines',
    'Deliver updates faster with CI/CD automation',
    'Scale integrations as your ecosystem grows',
    'Improve efficiency by streamlining business processes',
  ]

  return (
    <ServicePageTemplate
      title="System Integration & API Development"
      subtitle="Connect your business systems for unified operations"
      description="BWORK specializes in bridging the gaps between your critical business systems. Our integration experts design and build custom APIs, data pipelines, and automated workflows that connect disparate platforms, enabling seamless information exchange and operational efficiency."
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
    />
  )
}
