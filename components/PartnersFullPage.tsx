'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'

const partners = [
  { name: 'CISCO', category: 'Networking & Security', logo: '/logos/cisco.svg' },
  { name: 'HPE', category: 'Servers & Storage', logo: '/logos/hpe.svg' },
  { name: 'DELL', category: 'Infrastructure', logo: '/logos/dell.svg' },
  { name: 'LENOVO', category: 'Hardware', logo: '/logos/lenovo.svg' },
  { name: 'MICROSOFT', category: 'Cloud & Software', logo: '/logos/microsoft.svg' },
  { name: 'GOOGLE', category: 'Cloud Services', logo: '/logos/google.svg' },
  { name: 'LINKSYS', category: 'Networking', logo: '/logos/linksys.svg' },
  { name: 'D-LINK', category: 'Network Equipment', logo: '/logos/dlink.svg' },
  { name: 'LINNET', category: 'Telecommunications', logo: '/logos/linnet.svg' },
  { name: 'CORNING', category: 'Fiber Optics', logo: '/logos/corning.svg' },
  { name: 'TRENDNET', category: 'Networking Solutions', logo: '/logos/trendnet.svg' },
  { name: 'BELDEN', category: 'Cabling & Connectivity', logo: '/logos/belden.svg' },
  { name: 'COMMSCOPE', category: 'Network Infrastructure', logo: '/logos/commscope.svg' },
  { name: 'APC', category: 'Power & Cooling', logo: '/logos/apc.svg' },
  { name: 'KASPERSKY', category: 'Cybersecurity', logo: '/logos/kaspersky.svg' },
  { name: 'VMWARE', category: 'Virtualization', logo: '/logos/vmware.svg' },
  { name: 'BROADCOM', category: 'Enterprise Software', logo: '/logos/broadcom.svg' },
  { name: 'VEEAM', category: 'Backup & Recovery', logo: '/logos/veeam.svg' },
  { name: 'EPSON', category: 'Displays & Printers', logo: '/logos/epson.svg' },
]

const categories = Array.from(new Set(partners.map(p => p.category)))

export default function PartnersFullPage() {
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
              <h1 className="heading-xl mb-6">Technology Partners & Vendors</h1>
              <p className="text-xl text-secondary-200 leading-relaxed">
                BWORK collaborates with industry-leading technology vendors to deliver best-in-class solutions.
                Our partnerships ensure you receive proven, enterprise-grade products backed by expert implementation and support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-4">Our Partner Ecosystem</h2>
              <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                We work with {partners.length} trusted technology leaders across networking, cloud, security,
                infrastructure, and software to build comprehensive IT solutions.
              </p>
            </motion.div>

            {/* All Partners Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mb-16">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="tech-card flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 group hover:scale-105 transition-transform"
                >
                  <div className="w-28 h-16 sm:w-32 sm:h-20 relative mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-1 text-sm sm:text-base">{partner.name}</h3>
                  <p className="text-xs sm:text-sm text-secondary-600 text-center">{partner.category}</p>
                </motion.div>
              ))}
            </div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary-50 rounded-2xl p-8 md:p-12"
            >
              <h3 className="heading-md text-center mb-8">Partner Categories</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="px-6 py-3 bg-white rounded-full border border-accent/30 text-secondary-700 font-medium"
                  >
                    {category}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-lg mb-4">Why Our Partnerships Matter</h2>
              <p className="text-lg text-secondary-200 max-w-3xl mx-auto">
                Our strategic vendor relationships translate directly into value for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Proven Technology',
                  description: 'Access enterprise-grade solutions from industry leaders with proven track records.',
                },
                {
                  title: 'Expert Implementation',
                  description: 'Certified engineers with deep product knowledge ensure optimal deployment.',
                },
                {
                  title: 'Vendor Support',
                  description: 'Direct escalation paths to vendors for faster issue resolution.',
                },
                {
                  title: 'Competitive Pricing',
                  description: 'Partner-level pricing and licensing benefits passed on to you.',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-dark p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-3 text-accent-light">{benefit.title}</h3>
                  <p className="text-secondary-200">{benefit.description}</p>
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
