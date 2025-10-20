'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Only load in production or when explicitly enabled
  const isEnabled = process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_GA_ENABLED === 'true'

  if (!measurementId || !isEnabled) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

// Custom event tracking functions (optional - use for conversion tracking)
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams)
  }
}

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
  })
}

// Track service page views
export const trackServiceView = (serviceName: string) => {
  trackEvent('view_service', {
    service_name: serviceName,
  })
}

// Track contact button clicks
export const trackContactClick = (location: string) => {
  trackEvent('contact_click', {
    click_location: location,
  })
}
