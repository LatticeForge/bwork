'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud & Infrastructure',
    description: 'Scalable cloud solutions with AWS, Azure, and GCP. From migration to management, we optimize your infrastructure for performance and cost.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'IT Consulting & Automation',
    description: 'Strategic IT planning and process automation to drive digital transformation. We help businesses modernize operations and maximize efficiency.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions including vulnerability assessments, penetration testing, compliance, and 24/7 threat monitoring.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Software Development',
    description: 'Custom enterprise applications, web platforms, and mobile solutions built with modern technologies and agile methodologies.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'API Integration & Data',
    description: 'Seamless system integration, RESTful APIs, microservices architecture, and data pipeline solutions for unified business operations.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'DevOps & System Integration',
    description: 'CI/CD pipelines, containerization with Docker/Kubernetes, infrastructure as code, and continuous deployment strategies.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-secondary-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 inline-block border border-accent/20">
            Our Services
          </span>
          <h2 className="heading-lg mb-4">
            Comprehensive IT Integration Solutions
          </h2>
          <p className="text-lg text-secondary-600">
            From cloud infrastructure to cybersecurity, we deliver enterprise-grade technology solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: '0 10px 40px rgba(30, 64, 175, 0.3)' }}
              className="tech-card group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary-100 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:shadow-glow transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="heading-sm mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-secondary-600 leading-relaxed mb-6">{service.description}</p>
              <button className="text-accent font-semibold flex items-center gap-2 group">
                Learn More
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
