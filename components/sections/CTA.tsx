'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="w-full py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-12 leading-tight">
            <span className="text-[#003FBD]">Ready</span> to Transform<br />Your Employer Brand?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            Join 50+ companies turning their employees into powerful brand ambassadors. Start your free trial today.
          </p>

          {/* CONTACT style button - Black with white text and blue border */}
          <motion.button
            whileHover={{ translateY: '-4px', boxShadow: '2px 5px 0 0 #003FBD' }}
            whileTap={{ translateY: '2px', boxShadow: '0 0 0 0 #003FBD' }}
            className="px-12 py-5 bg-black text-white border-4 border-[#003FBD] rounded-lg font-bold text-xl transition-all duration-300 inline-block"
          >
            CONTACT
          </motion.button>

          <p className="text-gray-500 text-sm mt-12">
            No credit card required. Setup takes less than 5 minutes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
