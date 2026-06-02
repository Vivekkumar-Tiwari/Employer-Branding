'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="w-full py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 leading-tight">
            <span className="text-[#003FBD]">Ready</span> to Transform Your Employer Brand?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join 50+ companies turning their employees into powerful brand ambassadors. Start your free trial today.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="brutalist-button bg-white hover:bg-white text-black"
          >
            <div className="button-text">
              <span>Start Free</span>
              <span>Trial Now</span>
            </div>
          </motion.button>

          <p className="text-gray-400 text-sm mt-8">
            No credit card required. Setup takes less than 5 minutes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
