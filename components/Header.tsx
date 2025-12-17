'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 max-w-full ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-custom" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group" aria-label="Beyond Work Home">
            <span className={`text-2xl font-bold group-hover:text-accent transition-colors duration-300 ${
              (pathname === '/' || isScrolled) ? 'text-secondary-900' : 'text-white'
            }`}>Beyond Work</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8" role="menubar">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                role="menuitem"
                className={`hover:text-accent font-medium transition-colors duration-200 ${
                  (pathname === '/' || isScrolled) ? 'text-secondary-700' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Only show on home page */}
          {pathname === '/' && (
            <div className="hidden lg:block">
              <Link href="/#contact" className="btn-primary">
                Get a Consultation
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            ref={hamburgerButtonRef}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className={`w-6 h-6 ${
                (pathname === '/' || isScrolled) ? 'text-secondary-900' : 'text-white'
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg"
              role="menu"
              aria-label="Mobile menu"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    role="menuitem"
                    className="text-secondary-700 hover:text-accent font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-secondary-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
