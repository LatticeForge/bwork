import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

// Service type matching your backend
interface Service {
  _id?: string;
  id: number;
  title: string;
  slug: string;
  description: string;
  subServices: string[];
  link: string;
  subtitle?: string;
  image?: string;
  features?: string[];
  technicalSpecs?: string[];
  ctaText?: string;
  subServicesPrefix?: string;
  subServicesSuffix?: string;
}

// Fetch service from API by slug
async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://apis.bwork.sa/api';
    console.log('🔍 Fetching services from:', `${apiUrl}/services`);
    console.log('🔍 Looking for slug:', slug);

    const res = await fetch(`${apiUrl}/services`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!res.ok) {
      console.error('❌ API request failed:', res.status, res.statusText);
      return null;
    }

    const data = await res.json();
    console.log('📦 API Response:', data);

    if (data.success && data.data?.services) {
      console.log('✅ Found', data.data.services.length, 'services');
      console.log('📋 All slugs:', data.data.services.map((s: Service) => s.slug));

      const service = data.data.services.find((s: Service) => s.slug === slug);

      if (service) {
        console.log('✅ Found matching service:', service);
      } else {
        console.log('❌ No service found with slug:', slug);
      }

      return service || null;
    }

    console.log('❌ Invalid API response structure');
    return null;
  } catch (error) {
    console.error('❌ Error fetching service:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | Beyond Work',
    };
  }

  // Generate keywords from service title and sub-services
  const keywords = [
    service.title,
    ...service.subServices.slice(0, 5), // First 5 sub-services
    'Saudi Arabia',
    'KSA',
    'Riyadh',
  ];

  return {
    title: `${service.title} | Beyond Work - IT Solutions Saudi Arabia`,
    description: `${service.description} ${service.subServices.slice(0, 3).join(', ')}. Professional IT services in Saudi Arabia.`,
    keywords,
    alternates: {
      canonical: `https://bwork.sa/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Beyond Work`,
      description: service.description,
      url: `https://bwork.sa/services/${service.slug}`,
      siteName: 'Beyond Work',
      images: [
        {
          url: '/images/bworkog.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} - Beyond Work IT Solutions`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Beyond Work`,
      description: service.description,
      images: ['/images/bworkog.jpg'],
      creator: '@bwork',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Default icon for features (since API doesn't have icons)
const defaultIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

// Icon library for variety
const iconLibrary = [
  // Icon 1: Lightning bolt
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Icon 2: Check circle
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Icon 3: Server
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>,
  // Icon 4: Code
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  // Icon 5: Shield check
  <svg key="5" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Icon 6: Cube
  <svg key="6" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>,
];

// Main page component
export default async function DynamicServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Transform subServices to features array with icons
  const features = service.subServices.map((subService, index) => ({
    title: subService,
    description: `Professional ${subService.toLowerCase()} services tailored to your business needs.`,
    icon: iconLibrary[index % iconLibrary.length],
  }));

  // Use API features as benefits, or create default benefits
  const benefits = service.features && service.features.length > 0
    ? service.features
    : [
        `Industry-leading ${service.title.toLowerCase()} solutions`,
        'Expert team with proven track record',
        '24/7 support and maintenance',
        'Scalable and future-proof technology',
        'Cost-effective implementation',
        'Compliance with industry standards',
      ];

  // Use API technicalSpecs if available, otherwise auto-generate from subServices
  const technicalSpecs = service.technicalSpecs && service.technicalSpecs.length > 0
    ? service.technicalSpecs
    : service.subServices.map(subService => `${service?.subServicesPrefix || 'Professional'} ${subService} ${service?.subServicesSuffix || 'services'}`);

  // Build subtitle from API or fallback to full description
  const subtitle = service.subtitle || service.description;

  // CTA button
  const cta = {
    text: service.ctaText || 'Request Consultation',
    href: '/contact',
  };

  return (
    <ServicePageTemplate
      title={service.title}
      subtitle={subtitle}
      description={service.description}
      features={features}
      technicalSpecs={technicalSpecs}
      benefits={benefits}
      cta={cta}
    />
  );
}
