import { NextResponse } from 'next/server'

export async function GET() {
  const benefits = [
    {
      category: 'Reliability & Performance',
      features: [
        'Enterprise-grade infrastructure',
        '99.9% uptime SLA guarantee',
        '24/7 proactive monitoring',
        'Optimized performance tuning',
      ],
    },
    {
      category: 'Security & Compliance',
      features: [
        'Certified security professionals',
        'Multi-layer threat protection',
        'Compliance-ready solutions',
        'Regular security audits',
      ],
    },
    {
      category: 'Expert Support',
      features: [
        'Dedicated IT support team',
        'Rapid response times',
        'Expert technical guidance',
        'Knowledge transfer & training',
      ],
    },
    {
      category: 'Scalability & Innovation',
      features: [
        'Scalable cloud solutions',
        'Modern tech stack',
        'Continuous optimization',
        'Future-proof architecture',
      ],
    },
  ]

  return NextResponse.json({ benefits })
}
