'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react'
import Image from 'next/image'

const FooterObject = ({ name, color, delay = 0, x = 0, y = 0 }: { name: string, color: string, delay?: number, x?: number, y?: number }) => (
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
    className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <div className={`w-2 h-2 rounded-full ${color}`} />
    <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">{name}</span>
  </motion.div>
)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    Platform: ['Features', 'Analytics', 'Integrations', 'Security'],
    Company: ['About Us', 'Careers', 'Blog', 'Contact'],
    Resources: ['Documentation', 'Guides', 'Templates', 'API'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy'],
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  const footerObjects = [
    { name: 'Content Reactor', color: 'bg-red-400', x: 10, y: 20, delay: 0 },
    { name: 'Narrative Engine', color: 'bg-blue-400', x: 80, y: 15, delay: 1 },
    { name: 'Story Stream', color: 'bg-green-400', x: 15, y: 70, delay: 2 },
    { name: 'Creator Orbit', color: 'bg-purple-400', x: 85, y: 65, delay: 0.5 },
    { name: 'Content Pulse', color: 'bg-orange-400', x: 50, y: 10, delay: 1.5 },
  ]

  return (
    <footer className="bg-black text-white py-24 px-6 overflow-hidden relative">
      {/* 3D-ish Objects */}
      {footerObjects.map((obj, i) => (
        <FooterObject key={i} {...obj} />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Ample Logo"
                width={140}
                height={40}
                className="h-8 w-auto invert"
              />
            </div>
            <p className="text-lg text-gray-500 max-w-sm font-light leading-relaxed">
              The new standard for employee advocacy. Turn your team into your most powerful brand channel.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-6">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-gray-600">
            © 2024 Ample Technologies Inc. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-semibold text-white"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
