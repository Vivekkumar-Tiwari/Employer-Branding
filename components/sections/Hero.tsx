'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-20 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        {/* Title - Semibold */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-8 leading-tight">
          Turn Employees Into Your Most Powerful Brand Channel
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
          Transform your workforce into authentic brand ambassadors. Create high-quality, employee-generated content that drives recruitment, engagement, and trust.
        </p>

        {/* Single CTA Button with Black Stroke */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
        >
          Get Started Free →
        </motion.button>
      </motion.div>
    </section>
  )
}
