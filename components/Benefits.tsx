'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fetchBenefits, type Benefit } from '@/lib/api'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

// Icon mapping based on category name
const iconMap: Record<string, JSX.Element> = {
  'Reliability & Performance': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  'Security & Compliance': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  'Expert Support': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  'Scalability & Innovation': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
}

const benefitGradients = [
  'from-white via-accent/5 to-primary-50',
  'from-white via-primary-50 to-accent/10',
  'from-accent/5 via-white to-primary-50',
  'from-primary-50 via-accent/5 to-white',
]

export default function Benefits() {
  const [benefits, setBenefits] = useState<Benefit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadBenefits = async () => {
    setLoading(true)
    setError(null)

    const response = await fetchBenefits()

    if (response.success && response.data) {
      setBenefits(response.data.benefits)
    } else {
      setError(response.error || 'Failed to load benefits')
    }

    setLoading(false)
  }

  useEffect(() => {
    loadBenefits()
  }, [])

  if (loading) {
    return (
      <section className="py-20 md:py-28 bg-white">
        <Loading message="Loading benefits..." />
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 md:py-28 bg-white">
        <ErrorMessage message={error} onRetry={loadBenefits} />
      </section>
    )
  }

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="px-5 py-2 bg-accent/10 text-accent rounded-full text-base font-semibold mb-6 inline-block border border-accent/20">
            Why Choose BWORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            The BWORK Advantage
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed">
            Enterprise IT solutions that deliver reliability, security, and innovation for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const icon = iconMap[benefit.category] || iconMap['Reliability & Performance']

            return (
              <motion.div
                key={benefit.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(30, 64, 175, 0.15)' }}
                className="group"
              >
                {/* Simple Professional Block */}
                <div className={`bg-gradient-to-br ${benefitGradients[index % benefitGradients.length]} border-2 border-accent/10 rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 h-full flex flex-col relative overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl hover:border-accent/20`}>
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-5 sm:mb-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-accent/20 to-primary-100 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-all duration-300 shadow-sm">
                        {icon}
                      </div>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-900 mb-5 sm:mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                      {benefit.category}
                    </h3>

                    {/* Features List */}
                    <ul className="space-y-2.5 sm:space-y-3 flex-grow">
                      {benefit.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-secondary-700">
                          <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 sm:mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
