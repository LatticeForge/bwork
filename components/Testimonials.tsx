'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'David Thompson',
    role: 'CTO, FinanceCore Systems',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    content: 'BWORK migrated our entire infrastructure to AWS with zero downtime. Their expertise in cloud architecture and security is unmatched. We\'ve seen a 40% reduction in operational costs.',
    rating: 5,
    company: 'Fortune 500 Financial Services',
  },
  {
    name: 'Jennifer Martinez',
    role: 'VP of Engineering, HealthTech Inc.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'The cybersecurity audit and implementation by BWORK was exceptional. They helped us achieve HIPAA compliance and implement robust security measures. Our systems have been incident-free for 2+ years.',
    rating: 5,
    company: 'Healthcare Technology Provider',
  },
  {
    name: 'Robert Chen',
    role: 'CEO, RetailNow',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'BWORK built our entire e-commerce platform from scratch. Their software development team delivered a scalable, high-performance solution that handles millions of transactions seamlessly. Outstanding work!',
    rating: 5,
    company: 'E-Commerce Platform',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 inline-block border border-accent/20">
            Testimonials
          </span>
          <h2 className="heading-lg mb-4">
            Trusted by Enterprise Leaders
          </h2>
          <p className="text-lg text-secondary-600">
            See what our clients say about our IT integration and technology solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12"
            >
              {/* Quote Icon */}
              <svg
                className="w-12 h-12 text-accent mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Content */}
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-secondary-900 text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-accent font-medium">
                    {testimonials[activeIndex].role}
                  </div>
                  <div className="text-secondary-500 text-sm">
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border-2 border-accent/30 flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-sm hover:shadow-glow"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-accent w-8' : 'bg-secondary-300 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border-2 border-accent/30 flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-sm hover:shadow-glow"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
