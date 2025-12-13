import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname
  const pathname = request.nextUrl.pathname

  // Create response
  const response = NextResponse.next()

  // Content Security Policy - Updated to allow Google Analytics
  const cspHeader = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://ssl.google-analytics.com https://tagmanager.google.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob: https://www.google-analytics.com https://ssl.google-analytics.com https://www.googletagmanager.com",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://stats.g.doubleclick.net https://apis.bwork.sa https://*.vercel.app",
    "frame-src 'self' https://www.googletagmanager.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; ')

  // Set CSP header
  // Temporarily disabled for testing - uncomment after testing
  // response.headers.set('Content-Security-Policy', cspHeader)

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
