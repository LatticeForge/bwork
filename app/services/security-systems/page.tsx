import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Security Systems & Surveillance Solutions | BWORK',
  description: 'Professional security system installation including CCTV, IP cameras, access control, physical security integration, and surveillance infrastructure for enterprise protection.',
  keywords: ['security systems', 'CCTV', 'IP cameras', 'access control', 'surveillance', 'physical security', 'video surveillance'],
}

export default function SecuritySystemsPage() {
  const features = [
    {
      title: 'CCTV & IP Camera Installation',
      description: 'Professional installation and configuration of CCTV and IP camera systems with high-resolution recording, remote viewing, and intelligent monitoring capabilities.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Access Control Systems',
      description: 'Enterprise-grade access control solutions with card readers, biometric systems, and centralized management for secure facility access.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: 'Physical Security Integration',
      description: 'Complete physical security infrastructure including cabling, mounting, door hardware, and integration with building management systems.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Surveillance Infrastructure',
      description: 'Design and deployment of complete surveillance networks including cabling, power (PoE), network infrastructure, and recording systems.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Intelligent Video Analytics',
      description: 'Advanced video surveillance with motion detection, facial recognition, license plate reading, and AI-powered threat detection.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Remote Monitoring & Management',
      description: 'Cloud-based monitoring platforms for remote access, alerts, and centralized management of all security systems from anywhere.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const technicalSpecs = [
    'IP Camera Systems with HD/4K resolution',
    'Network Video Recorders (NVR) with storage solutions',
    'Access Control Panels and Card Readers',
    'Biometric Access Systems (fingerprint, facial recognition)',
    'Door Hardware: Magnetic locks, electric strikes, exit buttons',
    'PoE (Power over Ethernet) camera installations',
    'Structured cabling for security devices',
    'Integration with existing network infrastructure',
    'Cloud-based and on-premise recording options',
    'Mobile apps for remote monitoring and alerts',
    'Motion detection and intelligent video analytics',
    'Redundant power and backup systems',
  ]

  const benefits = [
    'Enhanced facility security and asset protection',
    'Real-time monitoring and instant alerts',
    'Centralized access control management',
    'Reduced security incidents and liability',
    'Remote access from any device, anywhere',
    'Compliance with security regulations and standards',
  ]

  return (
    <ServicePageTemplate
      title="Security Systems & Surveillance"
      subtitle="Enterprise protection through intelligent security infrastructure"
      description="BWORK delivers comprehensive security solutions that protect your facilities, assets, and people. From IP cameras and access control to intelligent surveillance systems, we design and deploy enterprise-grade security infrastructure that integrates seamlessly with your IT environment."
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
    />
  )
}
