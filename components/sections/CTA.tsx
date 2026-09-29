'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, BarChart3, Briefcase, Link } from 'lucide-react'

// Static Squircles with soft deep shadows (No animation)
const StaticIcon = ({ icon: Icon, x, y }: { icon: any, x: string, y: string }) => (
  <div
    className="absolute hidden md:flex items-center justify-center w-[72px] h-[72px] bg-white rounded-[22px] z-20"
    style={{ 
      left: x, top: y, 
      boxShadow: '0 24px 48px -12px rgba(0, 30, 100, 0.4), inset 0 -4px 8px rgba(0,0,0,0.03), inset 0 2px 4px rgba(255,255,255,1)' 
    }}
  >
    <Icon className="text-[#007AFF] w-8 h-8" strokeWidth={2.5} />
  </div>
)

export default function CTA() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] p-12 md:p-24 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1F6CFF 0%, #00B4DB 50%, #4A3AFF 100%)',
            boxShadow: '0 30px 60px -15px rgba(31, 108, 255, 0.3)'
          }}
        >
          {/* Detailed Background Curves */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem] z-0">
             <div className="absolute top-[-30%] left-[-15%] w-[80%] pt-[80%] rounded-[100px] rotate-45 border-[60px] border-white/10 opacity-60 mix-blend-overlay" />
             <div className="absolute bottom-[-30%] right-[-15%] w-[80%] pt-[80%] rounded-[100px] -rotate-12 border-[80px] border-white/10 opacity-60 mix-blend-overlay" />
             <div className="absolute top-[20%] left-[30%] w-[100%] pt-[100%] rounded-[150px] -rotate-45 border-[100px] border-white/10 opacity-40 mix-blend-overlay" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#60A5FA] rounded-full mix-blend-screen filter blur-[120px] opacity-70" />
             <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#818CF8] rounded-full mix-blend-screen filter blur-[120px] opacity-50" />
          </div>

          {/* Top Pill Badge */}
          <div className="relative z-20 flex justify-center mb-8">
             <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                <Sparkles className="w-4 h-4 text-white fill-white" />
                <span className="text-white text-[13px] font-semibold tracking-wide">Employer Branding</span>
             </div>
          </div>

          {/* Static UI Elements */}
          <StaticIcon icon={Sparkles} x="10%" y="15%" />
          <StaticIcon icon={Briefcase} x="82%" y="18%" />
          <StaticIcon icon={BarChart3} x="14%" y="72%" />
          <StaticIcon icon={Users} x="82%" y="70%" />

          <div className="relative z-20 max-w-4xl mx-auto">
            {/* Heading with inline icon exactly like reference */}
            <h2 className="text-4xl md:text-[56px] font-bold text-white mb-6 tracking-tight leading-[1.15] drop-shadow-sm flex flex-col md:inline-block items-center justify-center">
              Ready to turn your team 
              <br className="hidden md:block"/>
              into a 
              <span className="inline-flex items-center justify-center w-[52px] h-[52px] bg-white/20 backdrop-blur-md rounded-2xl mx-3 border border-white/30 align-middle shadow-lg transform -translate-y-1">
                 <Link className="w-7 h-7 text-white" strokeWidth={2.5} />
              </span> 
              growth engine?
            </h2>
            
            <p className="text-[17px] md:text-[19px] text-white/90 mb-12 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Join 500+ forward-thinking companies already using our platform to scale their employer brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              {/* Primary Button - Styled exactly like the Header button */}
              <button className="w-full sm:w-auto flex items-center justify-center px-8 h-[56px] bg-[#18181B] text-white rounded-[14px] font-semibold text-[17px] transition-colors hover:bg-[#27272A] shadow-lg active:scale-[0.98]">
                Get started for free
              </button>
              
              {/* Secondary Button - Glassmorphism subtle stroke */}
              <button className="w-full sm:w-auto flex items-center justify-center px-8 h-[56px] bg-white/10 text-white backdrop-blur-md border border-white/30 rounded-[14px] font-semibold text-[17px] hover:bg-white/20 transition-colors shadow-lg active:scale-[0.98]">
                Talk to sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
