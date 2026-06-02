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
            Ready to Transform Your Employer Brand?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join 50+ companies turning their employees into powerful brand ambassadors. Start your free trial today.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black border-2 border-white rounded-lg font-semibold text-lg hover:bg-black hover:text-white hover:border-white transition-all duration-300"
          >
            Start Your Free Trial →
          </motion.button>

          <p className="text-gray-400 text-sm mt-8">
            No credit card required. Setup takes less than 5 minutes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
