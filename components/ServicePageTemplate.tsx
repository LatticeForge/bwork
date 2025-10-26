'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs'

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

interface ServicePageTemplateProps {
  title: string
  subtitle: string
  description: string
  features: Feature[]
  technicalSpecs?: string[]
  benefits: string[]
  cta?: {
    text: string
    href: string
  }
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  features,
  technicalSpecs,
  benefits,
  cta = { text: 'Request Consultation', href: '/contact' }
}: ServicePageTemplateProps) {
  // JSON-LD Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'BWORK Technologies',
      url: 'https://bwork.tech',
    },
    serviceType: title,
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${title} Features`,
      itemListElement: features.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature.title,
          description: feature.description,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-navy-indigo text-white relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="text-white/70">
                <Breadcrumbs
                  items={[
                    { label: 'Services', href: '/#services' },
                    { label: title, href: `#` },
                  ]}
                />
              </div>

              <h1 className="heading-xl mb-12 text-white">{title}</h1>
              <p className="text-xl text-white/90">{subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-16">Key Features & Capabilities</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="tech-card"
                >
                  {feature.icon && (
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="heading-sm mb-3">{feature.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        {technicalSpecs && technicalSpecs.length > 0 && (
          <section className="section-padding bg-secondary-50">
            <div className="container-custom">
              <h2 className="heading-lg text-center mb-12">Technical Specifications</h2>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {technicalSpecs.map((spec, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-secondary-700">{spec}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Outcomes & Benefits</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="glass-dark p-6 rounded-xl"
                >
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-light flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-secondary-100">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
