'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'Enterprise Cloud Migration',
    category: 'Cloud Infrastructure',
    description: 'Migrated legacy infrastructure to AWS for a Fortune 500 company, reducing costs by 40% and improving system reliability.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    results: '40% Cost Savings',
  },
  {
    title: 'Healthcare Security Overhaul',
    category: 'Cybersecurity',
    description: 'Implemented comprehensive security framework achieving HIPAA compliance and zero security incidents in 24 months.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop',
    results: '100% Compliant',
  },
  {
    title: 'FinTech Platform Development',
    category: 'Software Development',
    description: 'Built scalable payment processing platform handling 1M+ transactions daily with 99.99% uptime.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    results: '1M+ Daily TXN',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-gradient-to-b from-secondary-900 to-secondary-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4 inline-block border border-accent/30">
            Case Studies
          </span>
          <h2 className="heading-lg mb-4">
            Technology Solutions That Deliver Results
          </h2>
          <p className="text-lg text-secondary-300">
            Explore how we've helped enterprises achieve digital transformation and measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 h-64 border border-white/10">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-accent to-primary-600 px-4 py-2 rounded-full text-sm font-semibold shadow-glow">
                  {study.results}
                </div>
              </div>
              <span className="text-accent text-sm font-semibold mb-2 block">{study.category}</span>
              <h3 className="heading-sm mb-3 group-hover:text-accent transition-colors">
                {study.title}
              </h3>
              <p className="text-secondary-300 mb-4 leading-relaxed">{study.description}</p>
              <button className="text-white font-semibold flex items-center gap-2 group">
                <span className="group-hover:text-accent transition-colors">View Case Study</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
