'use client'

import { motion } from 'framer-motion'

const withUs = [
  'Enterprise-grade infrastructure',
  '99.9% uptime SLA guarantee',
  'Dedicated IT support team',
  '24/7 monitoring & maintenance',
  'Scalable cloud solutions',
  'Certified security professionals',
  'Proven implementation methodology',
  'Continuous optimization',
]

const withoutUs = [
  'Unreliable systems & downtime',
  'Security vulnerabilities',
  'Inconsistent IT support',
  'High operational costs',
  'Limited scalability',
  'Compliance risks',
  'No disaster recovery plan',
  'Technical debt accumulation',
]

export default function Benefits() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 inline-block border border-accent/20">
            Why Choose BWORK
          </span>
          <h2 className="heading-lg mb-4">
            The BWORK Advantage
          </h2>
          <p className="text-lg text-secondary-600">
            See how enterprise IT solutions from BWORK transform your technology infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* With Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-tech border-2 border-accent/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary-600 rounded-full flex items-center justify-center shadow-glow">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="heading-md gradient-text">With BWORK</h3>
            </div>
            <ul className="space-y-4">
              {withUs.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-secondary-700 font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Without Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm border-2 border-secondary-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary-200 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="heading-md text-secondary-600">Without BWORK</h3>
            </div>
            <ul className="space-y-4">
              {withoutUs.map((drawback, index) => (
                <motion.li
                  key={drawback}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <svg className="w-6 h-6 text-secondary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-secondary-500">{drawback}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
