'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Send, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const footerLinks = {
    Features: ['Subscription Management', 'Custom checkout', 'Campaign strategy'],
    Explore: ['Features', 'Pricing', 'Calculator'],
    Help: ['FAQs', 'Email', 'Help centre'],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'X' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-white text-gray-900 pt-16 pb-8 overflow-hidden relative">
      <div className="w-full max-w-[1300px] mx-auto relative z-10 flex flex-col min-h-[500px]">
        
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-100 px-6 lg:px-8">
          <div 
            className="bg-black h-9 w-[140px]"
            style={{
              maskImage: 'url(/logo.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'left center',
              WebkitMaskImage: 'url(/logo.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'left center',
            }}
          />
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <span className="text-[14px] font-medium text-black mr-2">Social Media</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-800 hover:text-black hover:border-gray-300 transition-colors shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Middle Section: Links and Contact */}
        <div className="flex flex-col lg:flex-row justify-between mt-16 px-6 lg:px-8 mb-auto">
          
          <div className="lg:w-[35%] flex flex-col space-y-4">
            <h4 className="text-[14px] font-semibold text-black tracking-tight">Reach out to us</h4>
            <div className="bg-[#F0F8FF] border border-[#E5F3FF] rounded-[18px] p-4 flex items-center gap-4 w-full max-w-[320px] cursor-pointer hover:shadow-sm transition-all group">
              <div className="w-[46px] h-[46px] bg-[#31A8FF] rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Send className="text-white ml-[-2px] mt-[2px]" size={18} fill="white" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-[14px] font-medium text-black">Contact us on telegram</p>
                <p className="text-[12px] text-gray-500 font-normal">Our associate will reply within 24h</p>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] grid grid-cols-2 md:grid-cols-3 gap-8 pt-1">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-6">
                <h4 className="text-[14px] font-semibold text-black tracking-tight">{category}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[14px] text-gray-500 font-normal hover:text-black transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Watermark */}
      <div className="absolute bottom-[50px] left-0 right-0 w-full max-w-[1300px] mx-auto px-6 lg:px-8 pointer-events-none z-0 flex justify-center overflow-hidden">
        <svg 
          viewBox="0 0 1500 350" 
          className="w-full h-auto"
          style={{ 
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 85%)'
          }}
        >
          <text 
            x="50%" 
            y="85%" 
            textAnchor="middle" 
            className="font-bold tracking-tighter fill-[#F2F2F2]" 
            fontSize="320"
            letterSpacing="-0.04em"
          >
            employer
          </text>
        </svg>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10 pt-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[13px] text-gray-500 font-normal">
          © 2025 Employer. All rights reserved.
        </p>
        <div className="flex items-center gap-6 md:gap-8 text-[13px] text-gray-500 font-normal">
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}
