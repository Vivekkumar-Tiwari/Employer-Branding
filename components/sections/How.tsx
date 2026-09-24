'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    title: 'Invite Your Team',
    description: 'Easily onboard your employees with a simple link. Our platform integrates with Slack and Microsoft Teams to make it seamless.',
    visual: 'Invite'
  },
  {
    title: 'Capture Content',
    description: 'Employees get weekly prompts to record short, authentic videos or share stories directly from their mobile devices.',
    visual: 'Capture'
  },
  {
    title: 'AI Magic & Review',
    description: 'Our AI automatically adds captions, branding, and optimizes the content for every social platform. Review and approve in seconds.',
    visual: 'Magic'
  },
  {
    title: 'Deploy & Track',
    description: 'Distribute content across your company channels and track engagement metrics through our comprehensive dashboard.',
    visual: 'Deploy'
  }
]

export default function How() {
  const containerRef = useRef(null)
  
  return (
    <section ref={containerRef} className="w-full bg-gray-50/50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-6">
            Four steps to <span className="text-gradient">brand dominance.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Sticky Text */}
          <div className="space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ margin: "-20% 0px -60% 0px" }}
                className="py-10"
              >
                <div className="text-blue-600 font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full border border-blue-200 flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  Step {i + 1}
                </div>
                <h3 className="text-3xl font-semibold text-black mb-6 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Sticky Visual Container */}
          <div className="hidden lg:block">
            <div className="sticky top-32 h-[600px] w-full glass-card rounded-[3rem] p-8 flex items-center justify-center overflow-hidden premium-shadow border-white/80">
              <div className="w-full h-full bg-white rounded-[2rem] border border-black/[0.03] p-10 flex flex-col gap-6 relative">
                 {/* This would be replaced with more complex step-specific visuals in a real app */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20" />
                 
                 <div className="relative z-10 flex flex-col gap-6 h-full">
                    <div className="h-10 w-48 bg-gray-50 rounded-lg" />
                    <div className="flex-grow bg-gray-50/50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center">
                       <motion.div 
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, -2, 0]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="text-8xl opacity-20"
                       >
                         ✨
                       </motion.div>
                    </div>
                    <div className="h-12 w-full bg-black text-white rounded-xl flex items-center justify-center font-semibold">
                       Next Step
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
