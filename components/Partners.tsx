'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'AWS', logo: 'https://via.placeholder.com/150x60/3B82F6/FFFFFF?text=AWS' },
  { name: 'Microsoft Azure', logo: 'https://via.placeholder.com/150x60/3B82F6/FFFFFF?text=Azure' },
  { name: 'Google Cloud', logo: 'https://via.placeholder.com/150x60/3B82F6/FFFFFF?text=GCP' },
  { name: 'Docker', logo: 'https://via.placeholder.com/150x60/3B82F6/FFFFFF?text=Docker' },
  { name: 'Kubernetes', logo: 'https://via.placeholder.com/150x60/3B82F6/FFFFFF?text=K8s' },
  { name: 'Cisco', logo: 'https://via.placeholder.com/150x60/3B82F6/FFFFFF?text=Cisco' },
]

export default function Partners() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-secondary-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-secondary-600 font-medium">Technology Partners & Certifications</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
