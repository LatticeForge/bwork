'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { submitContact, fetchCompanyInfo, type CompanyInfo } from '@/lib/api'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

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

  const handleSubmit = async (e: React.FormEvent, isRetry = false) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitStatus('idle')
    setFieldErrors({})

    if (!isRetry) {
      setRetryCount(0)
    }

    try {
      const response = await submitContact(formData)

      if (response.success) {
        setSubmitStatus('success')
        setSubmitMessage(response.message || 'Thank you! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setRetryCount(0)

        // Clear success message after 8 seconds
        setTimeout(() => {
          setSubmitMessage('')
          setSubmitStatus('idle')
        }, 8000)
      } else {
        setSubmitStatus('error')

        // Check if there are field-specific validation errors
        if (response.details && response.details.length > 0) {
          const errors: Record<string, string> = {}
          response.details.forEach(detail => {
            errors[detail.field] = detail.message
          })
          setFieldErrors(errors)
          setSubmitMessage('Please correct the errors above and try again.')
        } else {
          // Handle specific error types
          const errorMessage = response.error || 'Something went wrong. Please try again.'

          if (errorMessage.includes('rate limit') || errorMessage.includes('Too many')) {
            setSubmitMessage('You\'ve submitted too many requests. Please wait a few minutes and try again.')
          } else if (errorMessage.includes('network') || errorMessage.includes('offline')) {
            setSubmitMessage('Network error. Please check your connection and try again.')
          } else if (errorMessage.includes('timeout')) {
            setSubmitMessage('Request timed out. Please try again.')
          } else {
            setSubmitMessage(errorMessage)
          }
        }

        // Clear error message after 10 seconds
        setTimeout(() => {
          setSubmitMessage('')
          setSubmitStatus('idle')
        }, 10000)
      }
    } catch (err) {
      setSubmitStatus('error')
      setSubmitMessage('An unexpected error occurred. Please try again or contact us directly.')
      console.error('Contact form error:', err)

      setTimeout(() => {
        setSubmitMessage('')
        setSubmitStatus('idle')
      }, 10000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRetry = (e: React.FormEvent) => {
    if (retryCount < 3) {
      setRetryCount(prev => prev + 1)
      handleSubmit(e, true)
    } else {
      setSubmitMessage('Maximum retry attempts reached. Please try again later or contact us directly.')
    }
  }

  if (loading) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <Loading message="Loading contact information..." />
      </section>
    )
  }

  if (error || !companyInfo) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <ErrorMessage message={error || 'Failed to load contact information'} onRetry={loadCompanyInfo} />
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 inline-block border border-accent/20">
              Get In Touch
            </span>
            <h2 className="heading-lg mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Let's discuss your IT integration needs and how BWORK can help you achieve digital transformation and business growth.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Email',
                  content: companyInfo.contact.email,
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: 'Phone',
                  content: companyInfo.contact.phoneFormatted,
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Office',
                  content: companyInfo.office.fullAddress,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900 mb-1">{item.title}</div>
                    <div className="text-secondary-600">{item.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-secondary-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all text-base ${
                    fieldErrors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-secondary-300 focus:ring-accent'
                  }`}
                  placeholder="John Doe"
                />
                {fieldErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-secondary-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all text-base ${
                    fieldErrors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-secondary-300 focus:ring-accent'
                  }`}
                  placeholder="john@example.com"
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-secondary-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all text-base ${
                    fieldErrors.subject
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-secondary-300 focus:ring-accent'
                  }`}
                  placeholder="How can we help?"
                />
                {fieldErrors.subject && (
                  <p className="mt-1 text-sm text-red-600">{fieldErrors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none text-base ${
                    fieldErrors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-secondary-300 focus:ring-accent'
                  }`}
                  placeholder="Tell us about your IT infrastructure needs..."
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    {submitStatus === 'success' ? (
                      <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Sent Successfully!</span>
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </>
                )}
              </button>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {submitStatus === 'success' ? (
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${
                        submitStatus === 'success' ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {submitMessage}
                      </p>
                      {submitStatus === 'error' && !submitMessage.includes('rate limit') && !submitMessage.includes('Maximum retry') && retryCount < 3 && (
                        <button
                          onClick={handleRetry}
                          className="mt-2 text-sm text-red-600 hover:text-red-700 font-medium underline"
                        >
                          Try Again
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
