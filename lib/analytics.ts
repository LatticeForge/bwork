'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/components/GoogleAnalytics'

// Hook to track scroll depth
export function useScrollDepth() {
  useEffect(() => {
    const thresholds = [25, 50, 75, 100]
    const trackedThresholds = new Set<number>()

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100

      thresholds.forEach((threshold) => {
        if (
          scrollPercentage >= threshold &&
          !trackedThresholds.has(threshold)
        ) {
          trackedThresholds.add(threshold)
          trackEvent('scroll_depth', {
            percentage: threshold,
            page_path: window.location.pathname,
          })
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

// Hook to track page engagement time
export function usePageEngagement() {
  useEffect(() => {
    const startTime = Date.now()

    const reportEngagement = () => {
      const timeSpent = Date.now() - startTime
      if (timeSpent > 1000) {
        // Only track if more than 1 second
        trackEvent('page_engagement', {
          engagement_time_msec: timeSpent,
          page_path: window.location.pathname,
        })
      }
    }

    // Track on page unload
    window.addEventListener('beforeunload', reportEngagement)

    // Also track every 30 seconds for long sessions
    const interval = setInterval(() => {
      reportEngagement()
    }, 30000)

    return () => {
      window.removeEventListener('beforeunload', reportEngagement)
      clearInterval(interval)
      reportEngagement()
    }
  }, [])
}

// Get user type based on visit history
export function getUserType(): 'first_time' | 'returning' | 'engaged' {
  if (typeof window === 'undefined') return 'first_time'

  try {
    const visits = parseInt(localStorage.getItem('visit_count') || '0')
    const lastVisit = localStorage.getItem('last_visit')

    // Increment visit count
    localStorage.setItem('visit_count', String(visits + 1))
    localStorage.setItem('last_visit', new Date().toISOString())

    if (visits === 0) return 'first_time'
    if (visits > 5) return 'engaged'
    return 'returning'
  } catch (error) {
    return 'first_time'
  }
}

// Track user type on page load
export function trackUserType() {
  if (typeof window === 'undefined') return

  const userType = getUserType()
  trackEvent('user_type', {
    type: userType,
  })
}

// Track CTA click with context
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent('cta_click', {
    cta_name: ctaName,
    click_location: location,
    page_path: window.location.pathname,
  })
}

// Track outbound link clicks
export function trackOutboundLink(url: string, linkText?: string) {
  trackEvent('outbound_link_click', {
    link_url: url,
    link_text: linkText || url,
    page_path: window.location.pathname,
  })
}

// Track file downloads
export function trackDownload(fileName: string, fileType?: string) {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType || fileName.split('.').pop() || 'unknown',
    page_path: window.location.pathname,
  })
}

// Track search queries (if search feature added)
export function trackSearch(query: string, resultsCount?: number) {
  trackEvent('search', {
    search_term: query,
    results_count: resultsCount,
  })
}

// Track form interactions
export function trackFormInteraction(
  formName: string,
  action: 'start' | 'complete' | 'error',
  details?: Record<string, any>
) {
  trackEvent(`form_${action}`, {
    form_name: formName,
    page_path: window.location.pathname,
    ...details,
  })
}

// Track service interest
export function trackServiceInterest(serviceName: string, action: string) {
  trackEvent('service_interest', {
    service_name: serviceName,
    action,
    page_path: window.location.pathname,
  })
}
