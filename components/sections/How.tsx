'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const blackGradient = {
  background: 'linear-gradient(180deg, #383838 0%, #111111 100%)',
  boxShadow: '0 10px 20px -5px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(0,0,0,0.5)',
  border: '1px solid rgba(0,0,0,0.8)',
  color: 'white'
}

const blueGradient = {
  background: 'linear-gradient(135deg, #1F6CFF 0%, #00B4DB 50%, #4A3AFF 100%)',
  boxShadow: '0 10px 20px -5px rgba(31,108,255,0.4), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.2)',
  border: '1px solid rgba(31,108,255,0.8)',
  color: 'white'
}

const steps = [
  {
    title: 'Invite Your Team',
    description: 'Easily onboard your employees with a simple link. Our platform integrates with Slack and Microsoft Teams to make it seamless.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200',
    buttonText: 'Send Invites',
    buttonStyle: blackGradient
  },
  {
    title: 'Capture Content',
    description: 'Employees get weekly prompts to record short, authentic videos or share stories directly from their mobile devices.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200',
    buttonText: 'Start Recording',
    buttonStyle: blueGradient
  },
  {
    title: 'AI Magic & Review',
    description: 'Our AI automatically adds captions, branding, and optimizes the content for every social platform. Review and approve in seconds.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200',
    buttonText: 'Approve Content',
    buttonStyle: blackGradient
  },
  {
    title: 'Deploy & Track',
    description: 'Distribute content across your company channels and track engagement metrics through our comprehensive dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
    buttonText: 'Publish Now',
    buttonStyle: blueGradient
  }
]

export default function How() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <section className="w-full bg-gray-50/50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-black leading-[1.05]">
            Four steps to <br className="hidden md:block"/> brand dominance.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Sticky Text */}
          <div className="space-y-32 py-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ margin: "-40% 0px -40% 0px" }}
                onViewportEnter={() => setActiveIndex(i)}
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
            <div className="sticky top-32 h-[540px] w-full bg-[#F5F5F5] rounded-[24px] p-6 flex items-center justify-center overflow-hidden border border-black/[0.04]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full h-full flex flex-col gap-5 relative"
                >
                   <div className="relative z-10 flex flex-col gap-5 h-full w-full">
                      
                      {/* Main Visual Box (Full Image) */}
                      <div className="flex-grow w-full rounded-[20px] overflow-hidden relative shadow-sm">
                         <motion.img 
                          src={steps[activeIndex].image}
                          alt={steps[activeIndex].title}
                          className="w-full h-full object-cover"
                          animate={{ 
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                         />
                      </div>
                      
                      {/* Dynamic Button */}
                      <div 
                        className="group h-[60px] w-full rounded-2xl flex items-center justify-center gap-2 font-semibold text-[16px] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                        style={steps[activeIndex].buttonStyle}
                      >
                         {steps[activeIndex].buttonText}
                         <div className="relative flex items-center justify-center overflow-hidden w-5 h-5 ml-1 mt-[1px]">
                           <ArrowRight size={18} className="absolute transition-transform duration-300 group-hover:translate-x-6" />
                           <ArrowRight size={18} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
                         </div>
                      </div>
                   </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
