'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '@/components/sections/NavBar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import WhyEmployerBranding from '@/components/sections/WhyEmployerBranding'
import WhatWeCreate from '@/components/sections/WhatWeCreate'
import LifeAtPageManagement from '@/components/sections/LifeAtPageManagement'
import OurProcess from '@/components/sections/OurProcess'
import FeatureShowcase from '@/components/sections/FeatureShowcase'
import ContentGallery from '@/components/sections/ContentGallery'
import ResultsSection from '@/components/sections/ResultsSection'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel'
import FounderBranding from '@/components/sections/FounderBranding'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setScrollProgress(scrolled / windowHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="w-full bg-background overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollProgress }}
      />

      <NavBar />
      <Hero />
      <TrustBar />
      <WhyEmployerBranding />
      <WhatWeCreate />
      <LifeAtPageManagement />
      <OurProcess />
      <FeatureShowcase />
      <ContentGallery />
      <ResultsSection />
      <TestimonialCarousel />
      <FounderBranding />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
