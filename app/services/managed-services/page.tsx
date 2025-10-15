import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Managed IT Services | BWORK',
  description: '24/7 managed IT services including monitoring, maintenance, help desk, security management, and ongoing operations support.',
  keywords: ['managed IT services', 'help desk', 'IT support', 'monitoring', 'maintenance', 'MSP'],
}

export default function ManagedServicesPage() {
  const features = [
    {
      title: 'Managed IT Services',
      description: 'Continuous, proactive monitoring, maintenance, and support of your entire IT environment ensuring 24/7 stability and performance.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Integration Operations (IntegrationOps)',
      description: 'Continuous monitoring and maintenance of integration points, APIs, and data pipelines to prevent failures and ensure reliable data flow.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Security Monitoring & Management',
      description: 'Deployment and management of security tools (SIEM, firewalls, IDS), with continuous threat monitoring and incident response.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Help Desk Services',
      description: 'Responsive technical support, equipment setup, installation, and troubleshooting to keep your users productive.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Disaster Recovery & Backup',
      description: 'Designing, implementing, and regularly testing disaster recovery solutions ensuring all data backups are functional and compliant.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Cloud Services Management',
      description: 'Ongoing management and optimization of cloud platforms (AWS, Azure, GCP) ensuring cost efficiency and performance.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
  ]

  const technicalSpecs = [
    'Ongoing management and monitoring of IT systems',
    'Security updates and patch management',
    'Software updates and license management',
    'Troubleshooting and issue resolution',
    'Continuous monitoring of servers, networks, and cloud',
    'Integration operations and API monitoring',
    'Security monitoring (SIEM, firewalls, IDS/IPS)',
    'Threat management and incident response',
    'Disaster recovery planning and testing',
    'Data backup and restore services',
    'Help desk and technical support (tiered)',
    'Cloud platform management',
  ]

  const benefits = [
    'Ensure 24/7 stability and reduced downtime',
    'Predictable monthly IT expenses',
    'Proactively protect against cyber threats',
    'Accelerate issue resolution across systems',
    'Guarantee business continuity with tested DR',
    'Free internal teams to focus on strategic initiatives',
  ]

  return (
    <ServicePageTemplate
      title="Managed IT Services"
      subtitle="Continuous support and operations for your IT environment"
      description="BWORK's managed services keep your IT infrastructure running smoothly 24/7. From proactive monitoring to responsive support, we handle the day-to-day operations so you can focus on growing your business. Predictable costs, reduced downtime, and peace of mind."
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
    />
  )
}
