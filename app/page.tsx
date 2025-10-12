import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import About from '@/components/About'
import CaseStudies from '@/components/CaseStudies'
import Process from '@/components/Process'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Services />
        <About />
        <CaseStudies />
        <Process />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
