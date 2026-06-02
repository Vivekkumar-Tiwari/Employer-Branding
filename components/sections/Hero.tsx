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
        {/* Title - Two lines, Semibold */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-8 leading-tight">
          <span className="text-[#003FBD]">Turn</span> Employees Into Your Most<br />Powerful Brand Channel
        </h1>

        {/* Subtitle - Two lines */}
        <p className="text-base md:text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
          Transform your workforce into authentic brand ambassadors.<br />Create high-quality employee content that drives results.
        </p>

        {/* CTA Button - Brutalist Style */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="brutalist-button"
        >
          <div className="button-text">
            <span>Start Now</span>
            <span>Get Access</span>
          </div>
        </motion.button>
      </motion.div>
    </section>
  )
}
