import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Beyond Work',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center py-20">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-primary-600 to-accent bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Error Message */}
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12">
            <p className="text-sm text-secondary-500 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#services"
                className="text-primary-600 hover:text-primary-700 font-medium hover:underline"
              >
                Our Services
              </Link>
              <Link
                href="/partners"
                className="text-primary-600 hover:text-primary-700 font-medium hover:underline"
              >
                Technology Partners
              </Link>
              <Link
                href="/resources"
                className="text-primary-600 hover:text-primary-700 font-medium hover:underline"
              >
                Resources
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
