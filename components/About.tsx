'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fetchCompanyInfo, type CompanyInfo } from '@/lib/api'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

export default function About() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadCompanyInfo = async () => {
    setLoading(true)
    setError(null)

    const response = await fetchCompanyInfo()

    if (response.success && response.data) {
      setCompanyInfo(response.data)
    } else {
      setError(response.error || 'Failed to load company information')
    }

    setLoading(false)
  }

  useEffect(() => {
    loadCompanyInfo()
  }, [])

  if (loading) {
    return (
      <section id="about" className="section-padding bg-white">
        <Loading message="Loading company information..." />
      </section>
    )
  }

  if (error || !companyInfo) {
    return (
      <section id="about" className="section-padding bg-white">
        <ErrorMessage message={error || 'Failed to load company information'} onRetry={loadCompanyInfo} />
      </section>
    )
  }

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-tech max-w-full">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=500&fit=crop"
                alt={`${companyInfo.name} IT team collaboration`}
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 inline-block border border-accent/20">
              About {companyInfo.name}
            </span>
            <h2 className="heading-lg mb-6">
              {companyInfo.tagline}
            </h2>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              BWORK is a leading IT Integration and Technology Solutions provider specializing in enterprise-grade infrastructure, security, and software development. We empower businesses to achieve their digital transformation goals through innovative technology solutions.
            </p>
            <p className="text-secondary-600 mb-8 leading-relaxed">
              With over a decade of experience serving Fortune 500 companies and startups alike, our team of certified experts delivers scalable, secure, and future-ready solutions that drive measurable business value.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Certified IT Professionals',
                'Enterprise-Grade Solutions',
                'Proven Track Record',
                '24/7 Technical Support',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-accent/20 to-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-secondary-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
