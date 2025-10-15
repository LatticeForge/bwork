import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import About from '@/components/About'
import Process from '@/components/Process'
import Benefits from '@/components/Benefits'
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
        <Process />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
