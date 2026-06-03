'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.03]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/logo.png"
              alt="Ample Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['Platform', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
                whileHover={{ y: -1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-black border border-black/10 hover:border-black px-5 py-2 rounded-full transition-all">
              Log in
            </button>
            <button className="px-6 py-2.5 bg-black text-white rounded-full text-sm font-semibold transition-all border border-transparent hover:bg-white hover:text-black hover:border-black active:scale-[0.98]">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-8 space-y-4 px-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {['Platform', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-medium text-gray-700 hover:text-black"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <button className="w-full px-6 py-3 rounded-xl bg-gray-50 text-black font-semibold border border-black/10">
                Log in
              </button>
              <button className="w-full px-6 py-3 rounded-xl bg-black text-white font-semibold border border-transparent hover:border-white">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
