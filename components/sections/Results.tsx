'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Image from 'next/image'

function Counter({ value, suffix = '' }: { value: number, suffix?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const spring = useSpring(0, { duration: 1700, bounce: 0 }) 
  const display = useTransform(spring, (current) => Math.floor(current) + suffix)

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, spring, value])

  return <motion.span ref={ref}>{display}</motion.span>
}

export default function Results() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#F4F4F4]">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Stats */}
          <div className="flex items-center gap-12 lg:gap-16">
            <div className="flex flex-col gap-4">
              <div className="text-[72px] lg:text-[88px] font-medium text-[#B8B8B8] leading-none tracking-tighter">
                <Counter value={20} suffix="%" />
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-black max-w-[140px] leading-snug font-mono">
                CLIENTS SATISFIED<br/>AND REPEATING
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-[72px] lg:text-[88px] font-medium text-[#B8B8B8] leading-none tracking-tighter">
                <Counter value={99} suffix="%" />
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-black max-w-[140px] leading-snug font-mono">
                FASTER PROJECT<br/>DELIVERY
              </div>
            </div>
          </div>

          {/* Center Video/Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[420px] h-[240px] rounded-2xl overflow-hidden group cursor-pointer shrink-0 shadow-lg"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Showreel Thumbnail"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-2 text-white font-bold tracking-widest text-sm uppercase">
                SHOWREEL 2026
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Stats */}
          <div className="flex items-center gap-12 lg:gap-16">
            <div className="flex flex-col gap-4">
              <div className="text-[72px] lg:text-[88px] font-medium text-[#B8B8B8] leading-none tracking-tighter">
                <Counter value={98} suffix="%" />
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-black max-w-[140px] leading-snug font-mono">
                CLIENTS SATISFIED<br/>AND REPEATING
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-[72px] lg:text-[88px] font-medium text-[#B8B8B8] leading-none tracking-tighter">
                <Counter value={4} suffix="K+" />
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-black max-w-[140px] leading-snug font-mono">
                PROJECTS COMPLETED<br/>IN 24 COUNTRIES
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
