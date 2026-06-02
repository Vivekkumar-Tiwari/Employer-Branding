'use client'

import { motion } from 'framer-motion'

const brandIcons = [
  { id: 1, pos: 'top-20 left-10', color: 'text-pink-500', icon: '⭐' },
  { id: 2, pos: 'top-40 left-20', color: 'text-blue-500', icon: '◆' },
  { id: 3, pos: 'top-1/2 left-32 transform -translate-y-1/2', color: 'text-orange-500', icon: '✦' },
  { id: 4, pos: 'bottom-32 left-16', color: 'text-teal-500', icon: '⬢' },
  { id: 5, pos: 'top-1/3 right-24', color: 'text-green-500', icon: '⚡' },
  { id: 6, pos: 'top-1/2 right-16 transform -translate-y-1/2', color: 'text-purple-500', icon: '◇' },
  { id: 7, pos: 'bottom-40 right-20', color: 'text-red-500', icon: '⬢' },
]

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Scattered Brand Icons Background */}
      {brandIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className={`absolute text-6xl ${icon.color} ${icon.pos} opacity-20`}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4 + icon.id * 0.5, repeat: Infinity }}
        >
          {icon.icon}
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Ratings Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 items-center mb-8 text-sm"
        >
          <span className="text-gray-600">⭐ 4.6 Google</span>
          <span className="text-gray-600">⭐ 4.9 Trustpilot</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-8 leading-tight"
        >
          <span className="text-[#003FBD]">Turn</span> Employees Into Your<br />Most Powerful Brand Channel
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
        >
          Transform your workforce into authentic brand ambassadors. Create high-quality employee-generated content that drives recruitment and trust.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all">
            Get started free
          </button>
          <button className="px-8 py-3 bg-white text-black border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all">
            Talk to sales team
          </button>
        </motion.div>

        {/* Social Proof Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 mb-12 max-w-sm mx-auto border border-blue-100"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-300 rounded-full flex-shrink-0"></div>
              <div className="text-left">
                <p className="font-semibold text-sm text-black">Wel Chen joined Final Presentation</p>
                <p className="text-xs text-gray-500">8 min ago • @creative</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-400 rounded-full flex-shrink-0"></div>
              <div className="text-left">
                <p className="font-semibold text-sm text-black">Matthew Johnson</p>
                <p className="text-xs text-gray-500">Content Writer • @creative</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-300 rounded-full flex-shrink-0"></div>
              <div className="text-left">
                <p className="font-semibold text-sm text-black">Terry Lipshitz</p>
                <p className="text-xs text-gray-500">Approved the design of the iOS app</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm mb-12"
        >
          Trusted by 200,000+ users worldwide
        </motion.p>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 items-center pt-8 border-t border-gray-200"
        >
          <span className="text-gray-400 font-semibold">Google</span>
          <span className="text-gray-400 font-semibold">Airbnb</span>
          <span className="text-gray-400 font-semibold">Coinbase</span>
          <span className="text-gray-400 font-semibold">Notion</span>
          <span className="text-gray-400 font-semibold">Gumroad</span>
          <span className="text-gray-400 font-semibold">PayPal</span>
          <span className="text-gray-400 font-semibold">Upwork</span>
          <span className="text-gray-400 font-semibold">Shopify</span>
          <span className="text-gray-400 font-semibold">Stripe</span>
          <span className="text-gray-400 font-semibold">Zoom</span>
        </motion.div>
      </div>
    </section>
  )
}
