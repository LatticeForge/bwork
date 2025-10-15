import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Business Solutions & IT Support Services | BWORK',
  description: 'Professional business solutions including POS systems, time & attendance, help desk services, and technical support to streamline operations and boost productivity.',
  keywords: ['POS systems', 'point of sale', 'time attendance', 'help desk', 'IT support', 'technical support', 'business solutions'],
}

export default function BusinessSolutionsPage() {
  const features = [
    {
      title: 'POS Systems',
      description: 'Complete point-of-sale solutions with modern hardware, cloud-based software, payment processing integration, and inventory management.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Time & Attendance Solutions',
      description: 'Automated time tracking systems with biometric devices, cloud-based management, payroll integration, and real-time reporting.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Help Desk Services',
      description: 'Professional IT help desk support with ticketing systems, remote assistance, user support, and issue resolution to keep your team productive.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Technical Support & Maintenance',
      description: 'Ongoing technical support, equipment maintenance, troubleshooting, and proactive monitoring to ensure optimal system performance.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Business Process Automation',
      description: 'Streamline operations with automated workflows, digital forms, approval processes, and integration between business systems.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Equipment Installation & Setup',
      description: 'Professional installation, configuration, and setup of business hardware and software including training for your team.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const technicalSpecs = [
    'Cloud-based and on-premise POS solutions',
    'Payment processing integration (credit cards, mobile payments)',
    'Inventory management and real-time tracking',
    'Biometric time clocks (fingerprint, facial recognition)',
    'Web-based attendance management portals',
    'Payroll system integration and automated reporting',
    'Help desk ticketing and incident management systems',
    'Remote support tools and screen sharing',
    'Asset tracking and equipment management',
    'Service level agreement (SLA) monitoring',
    'Knowledge base and self-service portals',
    'User training and documentation',
  ]

  const benefits = [
    'Streamline business operations and reduce manual tasks',
    'Improve employee productivity and accountability',
    'Reduce IT downtime with proactive support',
    'Enhance customer experience with modern POS',
    'Accurate time tracking and payroll processing',
    'Scalable solutions that grow with your business',
  ]

  return (
    <ServicePageTemplate
      title="Business Solutions & Support"
      subtitle="Technology solutions that power your business operations"
      description="BWORK delivers practical business solutions that improve efficiency, reduce costs, and enhance customer experiences. From modern POS systems to comprehensive IT support, we provide the tools and services your business needs to thrive in today's digital landscape."
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
    />
  )
}
