'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'We analyze your current infrastructure, identify pain points, and understand your business objectives to create a tailored IT strategy.',
  },
  {
    number: '02',
    title: 'Architecture & Planning',
    description: 'Our experts design a comprehensive solution architecture with detailed implementation roadmaps and risk mitigation strategies.',
  },
  {
    number: '03',
    title: 'Implementation & Integration',
    description: 'We execute the solution with minimal disruption, ensuring seamless integration with your existing systems and workflows.',
  },
  {
    number: '04',
    title: 'Support & Optimization',
    description: '24/7 monitoring, continuous improvement, and ongoing support ensure your systems run at peak performance.',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 inline-block border border-accent/20">
            Our Process
          </span>
          <h2 className="heading-lg mb-4">
            IT Implementation Methodology
          </h2>
          <p className="text-lg text-secondary-600">
            A proven, systematic approach to delivering enterprise IT solutions with minimal risk and maximum value.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-accent to-primary-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent/20 to-primary-100 rounded-full flex items-center justify-center relative z-10 border-4 border-white shadow-tech">
                    <span className="text-3xl font-bold gradient-text">{step.number}</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
                </div>
                <h3 className="heading-sm mb-3 text-secondary-900">{step.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
