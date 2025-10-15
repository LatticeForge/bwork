import { NextResponse } from 'next/server'

export async function GET() {
  const services = [
    {
      id: 1,
      title: 'Structured Cabling',
      slug: 'passive-cabling',
      description: 'Professional structured cabling solutions including copper, fiber optic, patch panels, and complete cabling infrastructure for enterprise networks.',
      subServices: [
        'Copper Cabling (CAT-6, 6a, 7, 8)',
        'Fiber Optic Cabling & Splicing',
        'Patch Panels & Cabinets',
        'Outlets & Connectors (RJ-45)',
      ],
      link: '/services/passive-cabling',
    },
    {
      id: 2,
      title: 'Physical Infrastructure',
      slug: 'physical-infrastructure',
      description: 'Comprehensive physical infrastructure solutions including power distribution, environmental control, raised floors, and cable management.',
      subServices: [
        'Cable Trays & Raceways',
        'Grounding & Earthing Systems',
        'Conduit Installation',
        'Server Room Preparation',
      ],
      link: '/services/physical-infrastructure',
    },
    {
      id: 3,
      title: 'Data Center Infrastructure',
      slug: 'data-center',
      description: 'Complete data center design and build services including power systems, precision cooling, raised floors, and fire suppression.',
      subServices: [
        'Power Systems & UPS',
        'Precision Cooling (HVAC)',
        'Raised Floor Installation',
        'Fire Detection & Suppression',
        'Environmental Monitoring',
      ],
      link: '/services/data-center',
    },
    {
      id: 4,
      title: 'Enterprise Networking',
      slug: 'active-networking',
      description: 'Enterprise-grade networking solutions including WiFi design, LAN/WAN infrastructure, and fiber optic backbone.',
      subServices: [
        'WiFi Planning & Design',
        'LAN/WAN Infrastructure',
        'Wireless Access Points',
        'Fiber Optic Backbone',
      ],
      link: '/services/active-networking',
    },
    {
      id: 5,
      title: 'Unified Communications',
      slug: 'unified-communications',
      description: 'Modern unified communications including IP telephony, videoconferencing, and audio-visual integration.',
      subServices: [
        'IP Telephony & VoIP',
        'Videoconferencing Solutions',
        'Video Door Phone Systems',
        'Audio-Visual Integration',
      ],
      link: '/services/unified-communications',
    },
    {
      id: 6,
      title: 'Cloud & Virtualization',
      slug: 'cloud-infrastructure',
      description: 'Cloud migration, server virtualization, enterprise storage solutions, and disaster recovery services.',
      subServices: [
        'Cloud Migration & Management',
        'Server Virtualization & VDI',
        'Enterprise Storage Solutions',
        'Backup & Disaster Recovery',
      ],
      link: '/services/cloud-infrastructure',
    },
    {
      id: 7,
      title: 'Security Systems',
      slug: 'security-systems',
      description: 'Professional security system installation including CCTV, IP cameras, access control, and surveillance infrastructure.',
      subServices: [
        'CCTV & IP Camera Installation',
        'Access Control Systems',
        'Physical Security Integration',
        'Surveillance Infrastructure',
      ],
      link: '/services/security-systems',
    },
    {
      id: 8,
      title: 'Business Solutions',
      slug: 'business-solutions',
      description: 'Technology solutions including POS systems, time & attendance, help desk services, and technical support.',
      subServices: [
        'POS Systems',
        'Time & Attendance Solutions',
        'Help Desk Services',
        'Technical Support & Maintenance',
      ],
      link: '/services/business-solutions',
    },
  ]

  return NextResponse.json({ services })
}
