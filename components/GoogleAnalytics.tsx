'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { initPerformanceMonitoring } from '@/lib/performance'
import { shouldLoadGA4, hasSetPreferences } from '@/lib/cookieConsent'

interface GoogleAnalyticsProps {
  measurementId: string
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const [hasConsent, setHasConsent] = useState(false)
  const [isReady, setIsReady] = useState(false)

  // Only load in production or when explicitly enabled
  const isEnabled = process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_GA_ENABLED === 'true'

  useEffect(() => {
    // Check initial consent status
    const checkConsent = () => {
      const consentGiven = shouldLoadGA4()
      setHasConsent(consentGiven)
      setIsReady(true)
    }

    // Check consent on mount
    checkConsent()

    // Listen for consent changes
    const handleConsentUpdate = () => {
      checkConsent()
    }

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate)
    window.addEventListener('cookieConsentReset', handleConsentUpdate)

    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate)
      window.removeEventListener('cookieConsentReset', handleConsentUpdate)
    }
  }, [])

  useEffect(() => {
    // Initialize performance monitoring after GA loads
    if (isEnabled && measurementId && hasConsent) {
      const timer = setTimeout(() => {
        initPerformanceMonitoring()
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isEnabled, measurementId, hasConsent])

  // Don't render until we've checked consent status
  if (!isReady || !measurementId || !isEnabled || !hasConsent) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            send_page_view: true,
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  )
}

// Custom event tracking functions
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams)
  }
}

// Track form submissions
export const trackFormSubmit = (formName: string, additionalParams?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...additionalParams,
  })
}

// Track service page views
export const trackServiceView = (serviceName: string, serviceSlug?: string) => {
  trackEvent('view_service', {
    service_name: serviceName,
    service_slug: serviceSlug,
  })
}

// Track contact button clicks
export const trackContactClick = (location: string) => {
  trackEvent('contact_click', {
    click_location: location,
  })
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    percentage,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  })
}

// Track page engagement
export const trackEngagement = (timeSpent: number) => {
  trackEvent('page_engagement', {
    engagement_time_msec: timeSpent,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  })
}

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    click_location: location,
  })
}

// Track outbound link clicks
export const trackOutboundLink = (url: string, linkText?: string) => {
  trackEvent('outbound_link_click', {
    link_url: url,
    link_text: linkText,
  })
}

// Track file downloads
export const trackDownload = (fileName: string, fileType?: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  })
}

// Track conversion (lead generation)
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value || 1,
  })
}

// Track errors
export const trackError = (errorName: string, errorMessage?: string) => {
  trackEvent('exception', {
    description: errorMessage || errorName,
    fatal: false,
  })
}
