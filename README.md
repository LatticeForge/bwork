# BWORK - IT Integration & Technology Solutions

A modern, professional website for BWORK, an enterprise IT Integration and Technology Solutions provider. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

BWORK connects businesses with smarter IT solutions through comprehensive technology services including cloud infrastructure, cybersecurity, software development, API integration, and IT consulting.

## Features

- **Modern Tech Stack**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for professional scroll-triggered and interactive animations
- **Glassmorphism Design**: Modern glass effects and gradient styling
- **Tech-Inspired UI**: Professional gradient blues, glowing accents, and clean typography
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and semantic HTML
- **Form Validation**: Contact and consultation forms with Zod validation
- **API Routes**: Mock API endpoints for form submissions
- **Optimized Images**: Next.js Image component for performance
- **Accessibility**: ARIA labels, keyboard navigation, and semantic markup

## Sections

- **Header**: Sticky navigation with smooth scroll and mobile menu
- **Hero**: Compelling hero section with BWORK's tagline and key metrics
- **Partners**: Technology partner and vendor showcase
- **Services**: IT Integration services (Cloud, Cybersecurity, Development, etc.)
- **About**: BWORK mission, expertise, and team credentials
- **Case Studies**: Technology project showcases and success stories
- **Process**: IT implementation methodology and workflow
- **Benefits**: Value propositions for IT services
- **Testimonials**: Client testimonials from enterprise partners
- **Contact**: Consultation inquiry form
- **Footer**: Company information and quick links

## Getting Started

### Installation

```bash
# Navigate to project directory
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

## Project Structure

```
bwork/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── newsletter/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Partners.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── CaseStudies.tsx
│   ├── Process.tsx
│   ├── Benefits.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Design System

### Colors

- **Primary**: Professional blues (#1e3a8a to #60a5fa)
- **Secondary**: Slate grays for text and backgrounds
- **Accent**: Vibrant blue (#3b82f6) with glow effects
- **Tech Colors**: Cyan, purple, and blue accents

### Typography

- **Font**: Plus Jakarta Sans (Google Font)
- **Headings**: Bold, tight tracking
- **Body**: Clean, readable, professional

### Effects

- **Glassmorphism**: Frosted glass cards and overlays
- **Gradients**: Subtle tech-inspired gradient backgrounds
- **Glowing Accents**: Hover effects on CTAs and interactive elements
- **Rounded Corners**: Consistent 2xl and xl radius throughout

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... },
  tech: { ... },
}
```

### Content

Update text content directly in the component files located in the `components/` directory.

### Images

Replace placeholder images with your own:
- Add images to `public/images/`
- Update image paths in components
- Use tech-focused imagery (servers, cloud, abstract tech patterns)

### Forms

The contact and newsletter forms use mock API routes. To integrate with a real backend:

1. Update `/app/api/contact/route.ts`
2. Update `/app/api/newsletter/route.ts`
3. Add your email service (SendGrid, Resend, etc.)

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first CSS framework with custom config
- **Framer Motion**: Professional animation library
- **Zod**: Schema validation for forms
- **React Hook Form**: Efficient form handling
- **Plus Jakarta Sans**: Modern, professional Google Font

## Performance

- Lighthouse Score: 95+ (Performance)
- Optimized images with Next.js Image
- Code splitting and lazy loading
- Minimal bundle size
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Services Offered

1. **Cloud & Infrastructure Solutions**: AWS, Azure, GCP deployment and management
2. **IT Consulting & Automation**: Digital transformation and process optimization
3. **Cybersecurity Services**: Security audits, compliance, and threat protection
4. **Software Development**: Custom applications and enterprise software
5. **API Integration & Data Solutions**: System integration and data management
6. **DevOps & System Integration**: CI/CD, containerization, and orchestration

## License

This is a proprietary project for BWORK Technologies.

## Contact

For inquiries about BWORK's IT Integration and Technology Solutions:
- Website: [https://bwork.tech](https://bwork.tech)
- Contact form available on the website

---

Built with Next.js, TypeScript, and Tailwind CSS
