'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const partners = [
  { name: 'CISCO', logo: '/logos/cisco.svg' },
  { name: 'HPE', logo: '/logos/hpe.svg' },
  { name: 'DELL', logo: '/logos/dell.svg' },
  { name: 'LENOVO', logo: '/logos/lenovo.svg' },
  { name: 'MICROSOFT', logo: '/logos/microsoft.svg' },
  { name: 'GOOGLE', logo: '/logos/google.svg' },
  { name: 'LINKSYS', logo: '/logos/linksys.svg' },
  { name: 'D-LINK', logo: '/logos/dlink.svg' },
  { name: 'LINNET', logo: '/logos/linnet.svg' },
  { name: 'CORNING', logo: '/logos/corning.svg' },
  { name: 'TRENDNET', logo: '/logos/trendnet.svg' },
  { name: 'BELDEN', logo: '/logos/belden.svg' },
  { name: 'COMMSCOPE', logo: '/logos/commscope.svg' },
  { name: 'APC', logo: '/logos/apc.svg' },
  { name: 'KASPERSKY', logo: '/logos/kaspersky.svg' },
  { name: 'VMWARE', logo: '/logos/vmware.svg' },
  { name: 'BROADCOM', logo: '/logos/broadcom.svg' },
  { name: 'VEEAM', logo: '/logos/veeam.svg' },
  { name: 'EPSON', logo: '/logos/epson.svg' },
]

export default function Partners() {
  // Triple partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners]
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Handle horizontal scroll with mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      e.preventDefault()
      scrollContainerRef.current.scrollLeft += e.deltaY
    }
  }

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

        <div
          className="relative overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
          ref={scrollContainerRef}
          onWheel={handleWheel}
        >
          {/* Auto-scrolling container */}
          <div className="flex animate-scroll hover:pause-animation">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-40 mx-6"
              >
                <div className="relative w-32 h-16 mx-auto transition-all duration-300 hover:scale-110">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edge fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
