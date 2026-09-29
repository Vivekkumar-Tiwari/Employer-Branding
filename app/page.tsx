'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import NavBar from '@/components/sections/NavBar'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import How from '@/components/sections/How'
import Testimonials from '@/components/sections/Testimonials'
import Results from '@/components/sections/Results'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Page() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(container.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <>
      <NavBar />
      <main ref={container} className="w-full bg-background text-foreground antialiased">
        <Hero />
        <Features />
        <Results />
        <How />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
