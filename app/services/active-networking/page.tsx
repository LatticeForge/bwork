import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Enterprise Network & Wireless Solutions | BWORK',
  description: 'Professional enterprise networking solutions including LAN/WAN, fiber optics, wireless access, and VPN infrastructure.',
  keywords: ['enterprise networking', 'LAN', 'WAN', 'wireless networking', 'WiFi solutions', 'network infrastructure'],
  alternates: {
    canonical: 'https://bwork.tech/services/active-networking',
  },
  openGraph: {
    title: 'Enterprise Network & Wireless Solutions | BWORK',
    description: 'Professional enterprise networking solutions including LAN/WAN, fiber optics, wireless access, and VPN infrastructure.',
    url: 'https://bwork.tech/services/active-networking',
    siteName: 'BWORK',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BWORK Enterprise Network Solutions',
      },
    ],
    type: 'website',
  },
}

export default function ActiveNetworkingPage() {
  const features = [
    {
      title: 'LAN & WAN Connectivity',
      description: 'High-performance local and wide area networking solutions connecting all your sites with reliable, secure communications.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Fiber Optic Networks',
      description: 'Ultra-high-speed fiber optic networking delivering bandwidth-intensive applications with minimal latency.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'WiFi Solutions',
      description: 'Expert WiFi planning, design, and installation using innovative antenna technology to maximize signal and minimize interference.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
    },
    {
      title: 'Wireless Access & Optical Access',
      description: 'Comprehensive wireless infrastructure and optical access solutions for seamless connectivity across your organization.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: 'VPN & Secure Remote Access',
      description: 'Secure VPN solutions enabling safe remote access to corporate resources from anywhere in the world.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Network Power Solutions',
      description: 'Reliable power infrastructure including UPS systems ensuring continuous network operation during power events.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  const technicalSpecs = [
    'LAN and WAN Connection infrastructure',
    'Fiber Optic networking and backbone',
    'Optical Access and Wireless Access solutions',
    'UTP (Unshielded Twisted Pair) cabling',
    'VPN configuration and management',
    'WiFi planning, design, and installation',
    'Wireless Networking Services',
    'Network switches, routers, and firewalls',
    'Redundant network paths for high availability',
    'Quality of Service (QoS) optimization',
    'Network monitoring and management tools',
    'Load balancing and failover solutions',
  ]

  const benefits = [
    'Maximize network uptime and reliability',
    'Optimize bandwidth utilization',
    'Minimize signal interference for better performance',
    'Secure your network perimeter from threats',
    'Scale network capacity as demand grows',
    'Reduce latency for time-sensitive applications',
  ]

  return (
    <ServicePageTemplate
      title="Enterprise Network & Wireless Solutions"
      subtitle="High-performance networks that power modern business"
      description="BWORK designs and deploys robust enterprise networks that deliver the performance, security, and reliability your business demands. From LAN/WAN infrastructure to cutting-edge wireless solutions, we build networks that scale with your growth."
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
    />
  )
}
