'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

const resources = [
  {
    id: 1,
    title: 'Structured Cabling Services Guide',
    description: 'Comprehensive guide to our structured cabling solutions including copper (CAT-6/6a/7/8), fiber optics, patch panels, and cable management. Learn about our installation process, testing standards, and certification procedures.',
    category: 'Service Guide',
    fileSize: '2.4 MB',
    pages: '16 pages',
    downloadUrl: '/resources/bwork-structured-cabling-guide.pdf',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Data Center Infrastructure Overview',
    description: 'Detailed overview of our data center services including power systems, precision cooling, raised floors, fire suppression, monitoring, and environmental control. Includes design best practices and capacity planning guidelines.',
    category: 'Service Guide',
    fileSize: '3.1 MB',
    pages: '24 pages',
    downloadUrl: '/resources/bwork-data-center-services.pdf',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Enterprise Networking Solutions Brochure',
    description: 'Overview of our enterprise networking capabilities including LAN/WAN infrastructure, wireless solutions, fiber optics, SD-WAN, and VPN. Features case studies and technology partner information.',
    category: 'Brochure',
    fileSize: '1.8 MB',
    pages: '12 pages',
    downloadUrl: '/resources/bwork-enterprise-networking-brochure.pdf',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Unified Communications & Collaboration',
    description: 'Guide to modern unified communications including IP telephony, VoIP, telepresence, videoconferencing, and collaboration tools. Includes ROI calculators and implementation timelines.',
    category: 'Service Guide',
    fileSize: '2.2 MB',
    pages: '18 pages',
    downloadUrl: '/resources/bwork-unified-communications.pdf',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Managed IT Services Portfolio',
    description: 'Complete overview of our managed services offerings including 24/7 monitoring, help desk support, security management, disaster recovery, and cloud services management. Includes SLA information and pricing models.',
    category: 'Service Guide',
    fileSize: '2.0 MB',
    pages: '14 pages',
    downloadUrl: '/resources/bwork-managed-services-portfolio.pdf',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'BWORK Company Brochure',
    description: 'Comprehensive corporate brochure featuring all BWORK services, technology partnerships, case studies, and company credentials. Perfect for sharing with stakeholders and decision-makers.',
    category: 'Brochure',
    fileSize: '4.5 MB',
    pages: '28 pages',
    downloadUrl: '/resources/bwork-company-brochure.pdf',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const categories = Array.from(new Set(resources.map(r => r.category)))

export default function ResourcesFullPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-navy-indigo text-white relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="heading-xl mb-6">Resources & Downloads</h1>
              <p className="text-xl text-secondary-200 leading-relaxed">
                Access our comprehensive library of service guides, brochures, and technical documentation.
                Everything you need to understand BWORK's IT infrastructure solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="tech-card group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:shadow-glow transition-all duration-300">
                    {resource.icon}
                  </div>

                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-3">
                    {resource.category}
                  </span>

                  {/* Title */}
                  <h3 className="heading-sm mb-3 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-600 leading-relaxed mb-4">
                    {resource.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-secondary-500 mb-6">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      {resource.fileSize}
                    </span>
                    <span>•</span>
                    <span>{resource.pages}</span>
                  </div>

                  {/* Download Button */}
                  <a
                    href={resource.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="heading-lg mb-6">Need More Information?</h2>
              <p className="text-lg text-secondary-600 mb-8">
                Can't find what you're looking for? Contact us for custom documentation, detailed proposals, or technical specifications.
              </p>
              <Link href="/contact" className="btn-primary group inline-flex items-center">
                Contact Us
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
