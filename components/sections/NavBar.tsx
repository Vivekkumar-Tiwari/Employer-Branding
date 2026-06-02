'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-black/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
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
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Work', 'Process', 'About'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-black transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-2">
            <motion.button
              whileHover={{ translateY: '-2px', boxShadow: '2px 3px 0 0 black' }}
              whileTap={{ translateY: '1px', boxShadow: '0 0 0 0 black' }}
              className="px-6 py-2 bg-white text-black border-2 border-black rounded-full font-semibold transition-all duration-300 hover:bg-black hover:text-white text-sm"
            >
              Contact
            </motion.button>
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
            className="md:hidden pb-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {['Services', 'Work', 'Process', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-black"
              >
                {item}
              </a>
            ))}
            <motion.button
              className="w-full px-6 py-2 rounded-lg bg-black text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Discovery
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
