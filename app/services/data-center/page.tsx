import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Data Center Infrastructure Services | BWORK',
  description: 'Complete data center design and build services including power systems, precision cooling, raised floors, fire suppression, and monitoring.',
  keywords: ['data center', 'server room', 'data center infrastructure', 'precision cooling', 'raised floors', 'power systems'],
}

export default function DataCenterPage() {
  const features = [
    {
      title: 'Power Systems',
      description: 'Redundant power distribution, UPS systems, and backup generators ensuring uninterrupted operation of critical infrastructure.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Precision Cooling Systems',
      description: 'Advanced HVAC and environmental control maintaining optimal temperature and humidity for sensitive equipment.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: 'Raised Floor Installation',
      description: 'Professional raised flooring systems providing efficient cable management and under-floor cooling distribution.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'Fire Detection & Suppression',
      description: 'Advanced fire detection and suppression systems designed specifically for data center environments.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      title: 'Data Cabling Solutions',
      description: 'Comprehensive copper and fiber cabling infrastructure tailored for high-density data center environments.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Monitoring Systems',
      description: 'DCIM (Data Center Infrastructure Management) and environmental monitoring for real-time visibility and control.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  const technicalSpecs = [
    'Power Systems (redundant distribution, UPS, generators)',
    'Precision Cooling Systems (HVAC and environmental control)',
    'Raised Floor installation and design',
    'Fire Detection and Suppression Systems',
    'Data Cabling Solutions (copper and fiber)',
    'Monitoring Systems (DCIM and environmental)',
    'Server racks and cabinet installation',
    'Cable management and organization',
    'Environmental sensors (temperature, humidity)',
    'Access control and security systems',
    'Grounding and bonding infrastructure',
    'Hot aisle / cold aisle containment',
  ]

  const benefits = [
    'Maximize uptime with redundant systems',
    'Protect equipment with environmental control',
    'Optimize energy efficiency and reduce costs',
    'Scale infrastructure as capacity grows',
    'Meet compliance and industry standards',
    'Gain real-time visibility with monitoring',
  ]

  return (
    <ServicePageTemplate
      title="Data Center Infrastructure Services"
      subtitle="Mission-critical infrastructure for modern data centers"
      description="BWORK designs and builds world-class data center infrastructure that delivers reliability, scalability, and efficiency. From power and cooling to raised floors and monitoring, we provide end-to-end solutions for server rooms and enterprise data centers."
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
    />
  )
}
