'use client'

import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals'

// Send Web Vitals to Google Analytics
function sendToAnalytics(metric: Metric) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const { name, value, id } = metric

    // Send to Google Analytics 4
    ;(window as any).gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    })

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${name}:`, value)
    }
  }
}

// Initialize Web Vitals monitoring
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return

  try {
    onCLS(sendToAnalytics)
    onINP(sendToAnalytics) // Interaction to Next Paint (replaces FID)
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
  } catch (error) {
    console.error('Error initializing performance monitoring:', error)
  }
}

// Report custom performance metrics
export function reportPerformanceMetric(
  metricName: string,
  value: number,
  category: string = 'Performance'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', metricName, {
      event_category: category,
      value: Math.round(value),
      non_interaction: true,
    })
  }
}

// Get performance navigation timing
export function getNavigationTiming() {
  if (typeof window === 'undefined' || !window.performance) return null

  const perfData = window.performance.timing
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
  const connectTime = perfData.responseEnd - perfData.requestStart
  const renderTime = perfData.domComplete - perfData.domLoading

  return {
    pageLoadTime,
    connectTime,
    renderTime,
  }
}

// Report page load performance
export function reportPageLoadPerformance() {
  if (typeof window === 'undefined') return

  window.addEventListener('load', () => {
    setTimeout(() => {
      const timing = getNavigationTiming()
      if (timing) {
        reportPerformanceMetric('page_load_time', timing.pageLoadTime)
        reportPerformanceMetric('connect_time', timing.connectTime)
        reportPerformanceMetric('render_time', timing.renderTime)
      }
    }, 0)
  })
}
