import { NextResponse } from 'next/server'

export async function GET() {
  const companyInfo = {
    name: 'BWORK Technologies',
    tagline: 'Enterprise IT Integration & Technology Solutions',
    contact: {
      email: 'contact@bwork.tech',
      phone: '+1 (800) IT-BWORK',
      phoneFormatted: '+1 (800) 482-9675',
      phoneLink: 'tel:+18004829675',
    },
    office: {
      address: '100 Tech Center',
      city: 'Silicon Valley',
      state: 'CA',
      zip: '94025',
      country: 'United States',
      fullAddress: '100 Tech Center, Silicon Valley, CA 94025',
    },
    businessHours: {
      weekdays: 'Mon-Fri: 8:00 AM - 6:00 PM PST',
      weekend: 'Closed',
      timezone: 'PST',
    },
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  }

  return NextResponse.json(companyInfo)
}
