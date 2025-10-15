import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Unified Communications & AV Solutions | BWORK',
  description: 'Enterprise unified communications including IP telephony, VoIP, videoconferencing, telepresence, and intelligent video surveillance systems.',
  keywords: ['unified communications', 'IP telephony', 'VoIP', 'videoconferencing', 'telepresence', 'video surveillance'],
}

export default function UnifiedCommunicationsPage() {
  const features = [
    {
      title: 'IP Telephony & VoIP',
      description: 'Modern IP-based phone systems delivering crystal-clear voice communication with advanced call management features.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Telepresence Solutions',
      description: 'High-definition telepresence systems that bring remote teams together with lifelike clarity and seamless collaboration.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Videoconferencing',
      description: 'Enterprise-grade videoconferencing platforms enabling productive meetings across multiple locations and devices.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Intelligent Video Surveillance',
      description: 'Advanced IP-based video surveillance systems with analytics, motion detection, and centralized management.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Video Door Phone Systems',
      description: 'Secure video intercom systems for access control and visitor management at building entrances.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Audio-Visual Integration',
      description: 'Complete AV system design and installation for conference rooms, auditoriums, and collaborative spaces.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
  ]

  const technicalSpecs = [
    'IP Telephone and VoIP systems',
    'Telepresence solutions for immersive meetings',
    'Videoconferencing platforms (multi-location support)',
    'Intelligent Video Surveillance (IVS) with analytics',
    'Video Door Phone systems',
    'Audio-Visual cabling and infrastructure',
    'Conference room AV integration',
    'Digital signage and display systems',
    'Wireless presentation systems',
    'Voice and video recording solutions',
    'SIP trunking and PBX integration',
    'Unified messaging platforms',
  ]

  const benefits = [
    'Reduce travel costs with high-quality video collaboration',
    'Improve team productivity across distributed locations',
    'Enhance security with intelligent surveillance',
    'Streamline communication with unified platforms',
    'Scale communication infrastructure as you grow',
    'Integrate with existing business applications',
  ]

  return (
    <ServicePageTemplate
      title="Unified Communications & AV Solutions"
      subtitle="Connect your workforce with seamless communication tools"
      description="BWORK delivers comprehensive unified communications solutions that bring your teams together. From IP telephony to immersive telepresence, our integrated systems enable productive collaboration regardless of location."
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
    />
  )
}
