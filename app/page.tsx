'use client'

import NavBar from '@/components/sections/NavBar'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import Results from '@/components/sections/Results'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Page() {
  return (
    <main className="w-full bg-background overflow-x-hidden">
      <NavBar />
      <Hero />
      <Features />
      <Testimonials />
      <Results />
      <CTA />
      <Footer />
    </main>
  )
}
