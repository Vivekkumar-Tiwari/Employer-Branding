'use client'

import NavBar from '@/components/sections/NavBar'
import Hero from '@/components/sections/Hero'
import ValuedClients from '@/components/sections/ValuedClients'
import Features from '@/components/sections/Features'
import How from '@/components/sections/How'
import StartsUI from '@/components/sections/StartsUI'
import Testimonials from '@/components/sections/Testimonials'
import Results from '@/components/sections/Results'
import Backing from '@/components/sections/Backing'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Page() {
  return (
    <main className="w-full bg-background overflow-x-hidden">
      <NavBar />
      <Hero />
      <ValuedClients />
      <Features />
      <How />
      <StartsUI />
      <Testimonials />
      <Results />
      <Backing />
      <CTA />
      <Footer />
    </main>
  )
}
