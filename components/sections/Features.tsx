'use client'

import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const features = [
  {
    title: 'AI CONTENT GENERATION',
    description: 'Turn raw employee videos into studio-quality brand content automatically.',
    tag3: 'AUTOMATION',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000',
    color: 'bg-zinc-900'
  },
  {
    title: 'EMPLOYEE HUB',
    description: 'A dedicated space for your team to create and share.',
    tag3: 'COLLABORATION',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000',
    color: 'bg-blue-900'
  },
  {
    title: 'ADVANCED ANALYTICS',
    description: 'Track reach, engagement, and ROI in real time.',
    tag3: 'DATA',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000',
    color: 'bg-orange-900'
  },
  {
    title: 'SMART DISTRIBUTION',
    description: 'Push content to LinkedIn, Twitter, and more with one click.',
    tag3: 'IN X IG',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000',
    color: 'bg-emerald-900'
  },
  {
    title: 'BRAND SAFETY',
    description: 'Automated compliance and approval workflows.',
    tag3: 'SECURITY',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000',
    color: 'bg-rose-900'
  }
]

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // The container is 350vh for an easier scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Apply spring physics for buttery smooth scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [active, setActive] = useState(1)

  // Track the active card strictly based on evenly divided scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.15) setActive(1)
    else if (latest < 0.40) setActive(2)
    else if (latest < 0.65) setActive(3)
    else if (latest < 0.90) setActive(4)
    else setActive(5)
  })

  return (
    <section ref={containerRef} className="w-full h-[350vh] bg-[#F7F7F7] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Left Indicator - Aligned to Baseline */}
        <div className="absolute left-8 lg:left-24 top-1/2 -translate-y-1/2 hidden md:flex items-baseline z-50">
          <div className="h-[90px] overflow-hidden">
            <motion.div
              animate={{ y: -(active - 1) * 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col"
            >
              {[1, 2, 3, 4, 5].map(n => (
                <div key={n} className="h-[90px] flex items-center text-[80px] lg:text-[100px] font-medium leading-none tracking-tighter text-black">
                  0{n}
                </div>
              ))}
            </motion.div>
          </div>
          <div className="text-gray-400 text-xl lg:text-2xl font-light ml-2">/05</div>
        </div>

        {/* Right CTA Button */}
        <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3 bg-black text-white px-2 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform z-50 shadow-2xl">
          <div className="w-8 h-8 rounded-full overflow-hidden relative bg-[#044BD9] flex items-center justify-center">
            <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200" alt="View Works Media" fill className="object-cover" unoptimized />
          </div>
          <span className="text-sm font-semibold pr-4">View Works</span>
        </div>

        {/* Cards Stack */}
        <div className="relative w-full max-w-[800px] aspect-[4/3] md:aspect-[16/10] px-4 md:px-0 mt-32 lg:mt-48">
          {features.map((feature, i) => {
            // p_i is the exact point where this card is 100% active (front)
            const p_i = i * 0.25;

            // Use function-based transforms to avoid WAAPI monotonic offset errors
            const scale = useTransform(smoothProgress, (p) => {
              const d = (p_i - p) / 0.25;
              if (d <= 0) return 1;
              return 1 - d * 0.04;
            });

            const y = useTransform(smoothProgress, (p) => {
              const d = (p_i - p) / 0.25;
              if (d <= 0) return -d * 1500; // slides down
              return -d * 35; // peeks from top
            });

            const opacity = useTransform(smoothProgress, (p) => {
              const d = (p_i - p) / 0.25;
              if (d >= 0) return 1;
              return Math.max(0, 1 + d); // fades out as it slides down
            });

            return (
              <motion.div
                key={i}
                style={{ scale, y, opacity, zIndex: 10 - i }}
                className={`absolute inset-0 w-full h-full rounded-[32px] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.1)] ${feature.color} flex flex-col justify-end transform-gpu`}
              >
                {/* Background Image with colored mix blend for premium feel */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill 
                    className="object-cover opacity-60 mix-blend-overlay"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 md:px-16 pt-20">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/95 max-w-2xl leading-relaxed mb-10 tracking-wide drop-shadow-sm">
                    {feature.description}
                  </p>
                  
                  {/* Pills */}
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#044BD9] animate-pulse" />
                      <span className="text-[10px] text-gray-200 font-mono uppercase tracking-widest">{feature.title}</span>
                    </div>
                    
                    <div className="flex items-center bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-lg">
                      <span className="text-[10px] text-white font-mono uppercase tracking-widest font-semibold">{feature.tag3}</span>
                    </div>
                  </div>
                </div>

                {/* Keep Scrolling - Bottom of Card */}
                {i !== 4 && (
                  <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
                    <span className="text-[10px] text-white/50 font-mono uppercase tracking-widest font-semibold animate-pulse">Keep Scrolling</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
