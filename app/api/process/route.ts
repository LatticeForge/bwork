import { NextResponse } from 'next/server'

export async function GET() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current infrastructure, identify pain points, and understand your business objectives to create a tailored IT strategy.',
    },
    {
      number: '02',
      title: 'Architecture & Planning',
      description: 'Our experts design a comprehensive solution architecture with detailed implementation roadmaps and risk mitigation strategies.',
    },
    {
      number: '03',
      title: 'Implementation & Integration',
      description: 'We execute the solution with minimal disruption, ensuring seamless integration with your existing systems and workflows.',
    },
    {
      number: '04',
      title: 'Support & Optimization',
      description: '24/7 monitoring, continuous improvement, and ongoing support ensure your systems run at peak performance.',
    },
  ]

  return NextResponse.json({ steps })
}
