import { render, screen } from '@testing-library/react'
import Header from '../Header'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

describe('Header Component', () => {
  it('renders the BWORK logo/brand', () => {
    render(<Header />)
    const brandElement = screen.getByText(/BWORK/i)
    expect(brandElement).toBeInTheDocument()
  })

  it('renders all navigation menu items', () => {
    render(<Header />)

    // Check for main navigation links
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Partners')).toBeInTheDocument()
    expect(screen.getByText('Case Studies')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the Get a Consultation CTA button', () => {
    render(<Header />)
    const ctaButton = screen.getByText(/Get a Consultation/i)
    expect(ctaButton).toBeInTheDocument()
  })

  it('has correct navigation link structure', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })
})
