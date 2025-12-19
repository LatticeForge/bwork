import { NextResponse } from 'next/server'

export async function GET() {
  const companyInfo = {
    name: 'Beyond Work',
    tagline: 'Enterprise IT Integration & Technology Solutions',
    contact: {
      email: 'contact@bwork.tech',
      phone: '+1 (800) IT-BWORK',
      phoneFormatted: '+1 (800) 482-9675',
      phoneLink: 'tel:+18004829675',
    },
    office: {
      address: 'Khalid Bin Waleed Street',
      city: 'Jeddah',
      state: 'Malaz',
      zip: '',
      country: 'Saudi Arabia',
      fullAddress: 'Malaz, Riyadh Khalid Bin Waleed Street, Jeddah',
      addressLine1: 'Malaz, Riyadh',
      addressLine2: 'Khalid Bin Waleed Street, Jeddah',
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
