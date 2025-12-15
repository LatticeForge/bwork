import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname
  const pathname = request.nextUrl.pathname

  // Create response
  const response = NextResponse.next()

  // Content Security Policy - Comprehensive policy for Next.js + Google Analytics
  const cspHeader = [
    "default-src 'self'",
    // Allow scripts from self, Google Analytics, Tag Manager, and inline (required for Next.js)
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://ssl.google-analytics.com https://tagmanager.google.com https://*.vercel.app",
    // Allow styles from self, inline (required for Tailwind/Next.js), Google Fonts, and Vercel
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com https://*.vercel.app",
    // Allow fonts from self, Google Fonts, Vercel, and data URIs
    "font-src 'self' https://fonts.gstatic.com data: https://*.vercel.app",
    // Allow images from anywhere (flexible for CDNs and external sources)
    "img-src 'self' data: https: blob: http: https://www.google-analytics.com https://ssl.google-analytics.com https://www.googletagmanager.com https://images.unsplash.com https://via.placeholder.com",
    // Allow connections to APIs, Google Analytics, and Vercel
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://stats.g.doubleclick.net https://apis.bwork.sa https://*.vercel.app wss://*.vercel.app",
    // Allow frames from Google Tag Manager
    "frame-src 'self' https://www.googletagmanager.com",
    // Block object/embed tags
    "object-src 'none'",
    // Restrict base tag
    "base-uri 'self'",
    // Allow form submissions to self
    "form-action 'self' https://apis.bwork.sa",
    // Prevent site from being framed
    "frame-ancestors 'none'",
    // Allow service workers and web workers
    "worker-src 'self' blob:",
    // Allow PWA manifest
    "manifest-src 'self'",
  ].join('; ')

  // Set CSP header - Now enabled with comprehensive policy
  response.headers.set('Content-Security-Policy', cspHeader)

  // Add custom header with pathname for debugging
  response.headers.set('x-pathname', pathname)

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
