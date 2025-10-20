# Image Assets for BWORK Website

This directory contains essential image assets for SEO, social media sharing, and branding.

## Required Images

### 1. Open Graph (OG) Image
**File:** `og-image.jpg`
- **Dimensions:** 1200 x 630 pixels
- **Format:** JPG or PNG
- **Purpose:** Social media sharing preview (Facebook, LinkedIn, Twitter, etc.)
- **Content Suggestions:**
  - BWORK logo
  - Tagline: "Enterprise IT Integration & Technology Solutions"
  - Professional tech-themed background
  - Consistent branding colors

### 2. Logo
**File:** `logo.png`
- **Dimensions:** 512 x 512 pixels (square) or appropriate aspect ratio
- **Format:** PNG with transparent background
- **Purpose:** Company logo for structured data and general use

### 3. Favicon and App Icons

#### Favicon
**File:** `/favicon.ico` (root directory)
- **Dimensions:** 16x16, 32x32, 48x48 (multi-size ICO)
- **Format:** ICO
- **Purpose:** Browser tab icon

#### Standard Icon
**File:** `/icon.png` (root directory)
- **Dimensions:** 32 x 32 pixels
- **Format:** PNG
- **Purpose:** Default favicon

#### Progressive Web App Icons
**Files:**
- `/icon-192.png` - 192 x 192 pixels
- `/icon-512.png` - 512 x 512 pixels
- **Format:** PNG
- **Purpose:** PWA installation and Android home screen

#### Apple Touch Icon
**File:** `/apple-icon.png` (root directory)
- **Dimensions:** 180 x 180 pixels
- **Format:** PNG
- **Purpose:** iOS home screen icon

## PWA Manifest

**File:** `/manifest.json` (root directory)

Create a manifest.json file with the following structure:

\`\`\`json
{
  "name": "BWORK - Enterprise IT Solutions",
  "short_name": "BWORK",
  "description": "Enterprise IT Integration & Technology Solutions",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0066CC",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
\`\`\`

## Design Guidelines

### Colors (from branding)
- Primary Blue: #0066CC
- Accent: #00A3E0
- Secondary: Various shades

### Brand Elements
- Include BWORK logo
- Use professional tech imagery
- Maintain consistent color scheme
- Ensure high contrast for readability

## Tools for Creating Images

### OG Image Generators
- [Canva](https://www.canva.com/) - Templates available
- [Figma](https://www.figma.com/) - Professional design
- [OG Image Playground](https://og-playground.vercel.app/) - Quick generation

### Favicon Generators
- [Favicon.io](https://favicon.io/) - Multiple formats
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Comprehensive

### Icon Optimization
- [TinyPNG](https://tinypng.com/) - Compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

## Current Status

- ✅ Metadata configured in `app/layout.tsx`
- ❌ OG image needs to be created
- ❌ Favicon needs to be created
- ❌ App icons need to be created
- ❌ Manifest.json needs to be created

## Next Steps

1. Design and create `og-image.jpg` (1200x630px)
2. Create company logo as `logo.png`
3. Generate favicon set (ICO + PNG variants)
4. Create PWA icons (192x192, 512x512)
5. Create Apple touch icon (180x180)
6. Create `manifest.json` file
7. Test all images across different platforms

## Testing

After adding images, test:
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- Google Rich Results Test: https://search.google.com/test/rich-results
