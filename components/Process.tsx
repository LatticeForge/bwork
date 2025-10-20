'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fetchProcess, type ProcessStep } from '@/lib/api'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

// Icon mapping based on step numbers
const iconMap: Record<string, JSX.Element> = {
  '01': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  '02': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  '03': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  '04': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
}

export default function Process() {
  const [steps, setSteps] = useState<ProcessStep[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadProcess = async () => {
    setLoading(true)
    setError(null)

    const response = await fetchProcess()

    if (response.success && response.data) {
      setSteps(response.data.steps)
    } else {
      setError(response.error || 'Failed to load process steps')
    }

    setLoading(false)
  }

  useEffect(() => {
    loadProcess()
  }, [])

  if (loading) {
    return (
      <section className="py-20 md:py-28 bg-white">
        <Loading message="Loading process steps..." />
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 md:py-28 bg-white">
        <ErrorMessage message={error} onRetry={loadProcess} />
      </section>
    )
  }

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="px-5 py-2 bg-accent/10 text-accent rounded-full text-base font-semibold mb-6 inline-block border border-accent/20">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            IT Implementation Methodology
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed">
            A proven, systematic approach to delivering enterprise IT solutions with minimal risk and maximum value.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {steps.map((step, index) => {
              const icon = iconMap[step.number] || iconMap['01']

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -10, boxShadow: '0 25px 60px rgba(30, 64, 175, 0.25)' }}
                  className="relative group"
                >
                  {/* Professional Card */}
                  <div className="bg-white rounded-2xl border border-secondary-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 lg:p-10 h-full flex flex-col relative overflow-hidden min-h-[280px] sm:min-h-[320px]">
                    {/* Gradient Background Accent */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-primary-400" />

                    {/* Number Badge - Top Left */}
                    <div className="mb-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-accent/10 to-primary-100 rounded-xl flex items-center justify-center shadow-md inline-flex">
                        <span className="text-2xl md:text-3xl font-bold gradient-text">{step.number}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-secondary-900 mb-4 md:mb-5 leading-tight group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary-600 leading-relaxed text-sm md:text-base flex-grow">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
