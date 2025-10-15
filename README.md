# BWORK - IT Integration & Technology Solutions

A professional, enterprise-grade website for BWORK, a leading IT infrastructure and system integration provider. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

BWORK delivers comprehensive IT integration solutions including structured cabling, data center infrastructure, enterprise networking, unified communications, cloud services, and managed IT support. This website showcases our technical expertise and connects potential clients with our services.

## Features

- **Modern Tech Stack**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Professional Branding**: Navy/indigo gradient design with Inter (UI) and Poppins (headings) typography
- **Multi-Page Architecture**: Dedicated pages for services, partners, resources, and contact
- **7 Detailed Service Pages** with technical specifications:
  - Cloud & Infrastructure
  - Structured Cabling (Passive Cabling)
  - Enterprise Networking (Active Networking)
  - Data Center Infrastructure
  - Unified Communications
  - System Integration & APIs
  - Managed IT Services
- **19 Technology Partners**: CISCO, HPE, DELL, LENOVO, MICROSOFT, GOOGLE, LINKSYS, D-LINK, LINNET, CORNING, TRENDNET, BELDEN, COMMSCOPE, APC, KASPERSKY, VMWARE, BROADCOM, VEEAM, EPSON
- **Enhanced Contact Form** with company, phone, project type dropdown, and optional file upload
- **Mock API Routes**: `/api/contact`, `/api/newsletter`, `/api/inquiry`
- **Resources Page** with downloadable service guides and brochures
- **SEO Optimized**: Unique meta tags, Open Graph, sitemap.xml, robots.txt
- **Smooth Animations**: Framer Motion for professional UX
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Accessibility**: Keyboard navigation, ARIA labels, focus states, prefers-reduced-motion support
- **Performance**: Next.js Image optimization, lazy loading, code splitting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd bwork

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

### Run Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch
```

## Project Structure

```
bwork/
├── app/                          # Next.js 14 App Router
│   ├── api/                      # API Routes
│   │   ├── contact/route.ts
│   │   ├── newsletter/route.ts
│   │   └── inquiry/route.ts      # Enhanced inquiry form with file upload
│   ├── services/                 # Service Pages
│   │   ├── cloud-infrastructure/
│   │   ├── passive-cabling/
│   │   ├── active-networking/
│   │   ├── data-center/
│   │   ├── unified-communications/
│   │   ├── integration-apis/
│   │   └── managed-services/
│   ├── partners/page.tsx         # Partners page
│   ├── resources/page.tsx        # Resources & downloads
│   ├── contact/page.tsx          # Contact & quote form
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page
├── components/                   # React Components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Partners.tsx
│   ├── ServicePageTemplate.tsx
│   ├── PartnersFullPage.tsx
│   ├── ResourcesFullPage.tsx
│   ├── ContactFullPage.tsx
│   ├── About.tsx
│   ├── Process.tsx
│   ├── Benefits.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── __tests__/
│       └── Header.test.tsx
├── public/                       # Static Assets
│   ├── logos/                    # Partner logo placeholders (19 SVGs)
│   │   └── README.md             # Instructions for replacing logos
│   ├── resources/                # Downloadable PDFs (placeholders)
│   │   └── README.md             # Instructions for adding real PDFs
│   ├── sitemap.xml
│   └── robots.txt
├── styles/
│   └── globals.css               # Global styles and Tailwind
├── jest.config.js
├── jest.setup.js
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Services Offered

BWORK provides the following IT infrastructure services:

1. **Cloud & Infrastructure** - Server virtualization, VDI, enterprise storage, backup, disaster recovery, cloud migration
2. **Structured Cabling** - CAT-6/6a/7/8 copper cabling, fiber optics, patch panels, cable management, voice/data infrastructure
3. **Enterprise Networking** - LAN/WAN, fiber optics, enterprise WiFi, wireless access, VPN, network design
4. **Data Center Infrastructure** - Power systems, precision cooling, raised floors, fire suppression, DCIM monitoring
5. **Unified Communications** - IP telephony, VoIP, telepresence, videoconferencing, video surveillance, AV integration
6. **System Integration & APIs** - Custom API development, ETL, data pipelines, DevOps, CI/CD, system integration
7. **Managed IT Services** - 24/7 monitoring, help desk, security management, disaster recovery, cloud management

## Technology Partners

BWORK partners with 19 leading technology vendors:

CISCO • HPE • DELL • LENOVO • MICROSOFT • GOOGLE • LINKSYS • D-LINK • LINNET • CORNING • TRENDNET • BELDEN • COMMSCOPE • APC • KASPERSKY • VMWARE • BROADCOM • VEEAM • EPSON

## Customization

### Branding & Colors

Edit `tailwind.config.js` to adjust the color palette:

```javascript
colors: {
  primary: { ... },  // Navy/indigo shades
  secondary: { ... }, // Slate grays
  accent: { ... },    // Blue accents
}
```

### Typography

The site uses:
- **Inter** for body text and UI elements
- **Poppins** for headings

To change fonts, edit `app/layout.tsx` and `tailwind.config.js`.

### Content

- **Service Pages**: Edit files in `app/services/[service-name]/page.tsx`
- **Partners**: Modify `components/Partners.tsx` and `components/PartnersFullPage.tsx`

### Images & Logos

#### Partner Logos

**IMPORTANT**: 19 placeholder logos in `/public/logos/` must be replaced with official partner logos before production.

See `/public/logos/README.md` for detailed replacement instructions.

#### Resource PDFs

**IMPORTANT**: 11 placeholder PDF files in `/public/resources/` must be replaced with actual documents.

See `/public/resources/README.md` for details.

### API Integration

The contact and inquiry forms use mock API routes. To integrate with a real backend:

1. Update `/app/api/contact/route.ts`
2. Update `/app/api/inquiry/route.ts`
3. Update `/app/api/newsletter/route.ts`
4. Add your email service (SendGrid, Resend, AWS SES, etc.)
5. For file uploads, implement server-side file handling

Example integration:

```typescript
// app/api/inquiry/route.ts
import { sendEmail } from '@/lib/email-service'

export async function POST(request: Request) {
  const body = await request.json()

  // Send email notification
  await sendEmail({
    to: 'info@bwork.tech',
    subject: `New inquiry from ${body.company}`,
    body: formatInquiryEmail(body)
  })

  // Save to database
  await saveInquiry(body)

  return NextResponse.json({ success: true })
}
```

## Deployment

### Netlify (Current Configuration)

The project is configured for Netlify deployment with `netlify.toml`.

```bash
# Deploy to Netlify
npm run build
# Connect repository to Netlify dashboard
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the static site and deploy to any Node.js hosting:

```bash
npm run build
npm start
```

## SEO Configuration

### Sitemap

Edit `public/sitemap.xml` with your actual domain and update dates.

### Meta Tags

Each page has unique meta tags defined in its `page.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Page Title | BWORK',
  description: '...',
  keywords: ['keyword1', 'keyword2'],
}
```

### Open Graph

Update Open Graph images in `app/layout.tsx` with actual hero/og-image.

## Performance

- **Lighthouse Score Target**: Performance >= 80, Accessibility >= 90
- **Image Optimization**: All images use `next/image` component
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Non-critical images lazy-loaded

Run Lighthouse audit:

```bash
npm run build
npm start
# Then run Lighthouse in Chrome DevTools
```

## Testing

The project includes Jest and React Testing Library:

```bash
# Run tests
npm test

# Watch mode for development
npm run test:watch

# Add more tests in components/__tests__/
```

Sample test included for Header component navigation.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus visible states
- Respects `prefers-reduced-motion`
- Color contrast meets WCAG AA standards

## Technologies Used

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| React 18 | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Inter & Poppins | Google Fonts |
| Jest | Testing framework |
| React Testing Library | Component testing |

## QA Checklist

Before production deployment:

- [ ] Replace 19 partner logos in `/public/logos/` with official SVGs
- [ ] Replace 11 PDF placeholders in `/public/resources/` with actual documents
- [ ] Configure real email service for form submissions
- [ ] Update sitemap.xml with actual domain
- [ ] Update Open Graph images
- [ ] Run Lighthouse audit (Performance >= 80, Accessibility >= 90)
- [ ] Test all forms (contact, inquiry, newsletter)
- [ ] Verify all internal links work
- [ ] Test on mobile, tablet, desktop
- [ ] Verify all PDF downloads work
- [ ] Run `npm test` and ensure all tests pass
- [ ] Review and update contact information (phone, email, address)

## Known Limitations

1. **Partner Logos**: Using placeholder SVGs - must replace with official logos
2. **PDF Resources**: Using text placeholders - must replace with actual PDFs
3. **API Routes**: Mock implementations - integrate with real backend for production
4. **File Upload**: Contact form file upload is mocked - implement server-side handling

## Support

For technical support or questions:
- **Website**: [https://bwork.tech](https://bwork.tech)
- **Email**: info@bwork.tech
- **Phone**: +1 (800) IT-BWORK

## License

Proprietary - © 2025 BWORK Technologies. All rights reserved.

---

**Built with Next.js 14, TypeScript, and Tailwind CSS**

*Last Updated: October 2025*
