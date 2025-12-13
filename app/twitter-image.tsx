import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Beyond Work - IT Integration & Technology Solutions Saudi Arabia'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Reuse the same design as opengraph-image
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 24,
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          >
            Beyond Work
          </div>

          <div
            style={{
              fontSize: 40,
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: 32,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            IT Integration & Technology Solutions
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              padding: '16px 32px',
              borderRadius: 50,
              fontSize: 28,
              color: 'white',
              fontWeight: '600',
            }}
          >
            🇸🇦 Saudi Arabia
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 60,
            display: 'flex',
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          bwork.sa
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
