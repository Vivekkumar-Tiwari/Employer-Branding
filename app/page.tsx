'use client'

import NavBar from '@/components/sections/NavBar'
import Hero from '@/components/sections/Hero'
import ValuedClients from '@/components/sections/ValuedClients'
import Features from '@/components/sections/Features'
import How from '@/components/sections/How'
import Testimonials from '@/components/sections/Testimonials'
import Results from '@/components/sections/Results'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Page() {
  return (
    <main className="w-full bg-white overflow-x-hidden antialiased">
      <NavBar />
      <Hero />
      <ValuedClients />
      <Features />
      <Results />
      <How />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
