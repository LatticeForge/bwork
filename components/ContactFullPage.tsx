'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

export default function ContactFullPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setFieldErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you! We will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Check if there are field-specific validation errors
        if (data.details && data.details.length > 0) {
          const errors: Record<string, string> = {}
          data.details.forEach((detail: { field: string; message: string }) => {
            errors[detail.field] = detail.message
          })
          setFieldErrors(errors)
          // Don't set a general message, only show field-specific errors
        } else {
          setSubmitMessage(data.error || 'Something went wrong. Please try again.')
        }
      }
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 5000)
    }
  }

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
              <h1 className="heading-xl mb-6">Get in Touch</h1>
              <p className="text-xl text-secondary-200 leading-relaxed">
                Ready to transform your IT infrastructure? Let's discuss your project and how BWORK can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-lg mb-6">Let's Talk About Your Project</h2>
                <p className="text-lg text-secondary-600 mb-8">
                  Whether you need structured cabling, data center infrastructure, or complete IT integration,
                  our team is ready to provide expert consultation and customized solutions.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      ),
                      title: 'Email',
                      content: 'contact@bwork.tech',
                      link: 'mailto:contact@bwork.tech',
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      ),
                      title: 'Phone',
                      content: '+1 (800) IT-BWORK',
                      link: 'tel:+18004829675',
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ),
                      title: 'Office',
                      content: '100 Tech Center, Silicon Valley, CA 94025',
                      link: null,
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      ),
                      title: 'Business Hours',
                      content: 'Mon-Fri: 8:00 AM - 6:00 PM PST',
                      link: null,
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
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-secondary-600 hover:text-accent transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-secondary-600">{item.content}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Service Areas */}
                <div className="bg-secondary-50 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 mb-3">Our Service Areas</h3>
                  <p className="text-secondary-600">
                    We serve enterprise clients nationwide with on-site services available across all major metro areas.
                    Remote consultation and support available globally.
                  </p>
                </div>
              </motion.div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary-50 rounded-2xl p-8 shadow-xl"
              >
                <h3 className="heading-md mb-6">Request a Consultation</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
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
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white ${
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

                  {/* Email */}
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
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white ${
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

                  {/* Subject */}
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
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white ${
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

                  {/* Message */}
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
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none bg-white ${
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Submit Message */}
                  {submitMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center font-medium ${
                        submitMessage.includes('Thank you') || submitMessage.toLowerCase().includes('success') ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {submitMessage}
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
