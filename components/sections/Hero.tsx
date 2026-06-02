'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-20 pt-24">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Title - Exactly 2 lines, Semibold */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-8 leading-snug">
            <span className="text-[#003FBD]">Turn</span> Employees Into Your Most<br />Powerful Brand Channel
          </h1>

          {/* Service Cards */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border border-teal-200"
            >
              <p className="font-semibold text-teal-900 text-sm">Content Creation</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-4 bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl border border-rose-200"
            >
              <p className="font-semibold text-rose-900 text-sm">Engagement Boost</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200"
            >
              <p className="font-semibold text-amber-900 text-sm">Distribution</p>
            </motion.div>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
            Transform your workforce into authentic brand ambassadors. Create high-quality employee-generated content that drives recruitment and trust.
          </p>

          {/* Single CTA Button - Centered, Two Lines */}
          <motion.button
            whileHover={{ translateY: '-4px', boxShadow: '2px 5px 0 0 black' }}
            whileTap={{ translateY: '2px', boxShadow: '0 0 0 0 black' }}
            className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-semibold transition-all duration-300 hover:bg-black hover:text-white inline-block"
          >
            <div className="flex flex-col leading-tight">
              <span>Book a</span>
              <span>Discovery Call</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Right Visual - 3D Illustration Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden lg:flex items-center justify-center h-96"
        >
          <div className="relative w-full h-full">
            {/* Placeholder for 3D Ecosystem Illustration */}
            <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              {/* Background circle */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="#003FBD" strokeWidth="2" opacity="0.2" />
              
              {/* Center circle - Employee */}
              <motion.circle
                cx="200"
                cy="200"
                r="40"
                fill="#003FBD"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <text x="200" y="210" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                Team
              </text>

              {/* Orbiting elements */}
              <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
                {/* Content creation */}
                <circle cx="300" cy="200" r="30" fill="#FFB81C" opacity="0.8" />
                <text x="300" y="207" textAnchor="middle" fill="black" fontSize="10" fontWeight="bold">
                  Content
                </text>

                {/* Engagement */}
                <circle cx="200" cy="100" r="30" fill="#00D084" opacity="0.8" />
                <text x="200" y="107" textAnchor="middle" fill="black" fontSize="10" fontWeight="bold">
                  Engagement
                </text>

                {/* Distribution */}
                <circle cx="100" cy="200" r="30" fill="#FF6B6B" opacity="0.8" />
                <text x="100" y="207" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                  Distribution
                </text>

                {/* Analytics */}
                <circle cx="200" cy="300" r="30" fill="#6366F1" opacity="0.8" />
                <text x="200" y="307" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                  Analytics
                </text>
              </motion.g>

              {/* Connecting lines */}
              <line x1="200" y1="200" x2="300" y2="200" stroke="#003FBD" strokeWidth="2" opacity="0.3" />
              <line x1="200" y1="200" x2="200" y2="100" stroke="#003FBD" strokeWidth="2" opacity="0.3" />
              <line x1="200" y1="200" x2="100" y2="200" stroke="#003FBD" strokeWidth="2" opacity="0.3" />
              <line x1="200" y1="200" x2="200" y2="300" stroke="#003FBD" strokeWidth="2" opacity="0.3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
