'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="w-full py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] bg-black p-12 md:p-24 overflow-hidden text-center"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tight leading-tight">
              Ready to turn your team into a growth engine?
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light">
              Join 500+ forward-thinking companies already using our platform to scale their employer brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-[1.05] transition-all">
                Get started for free
              </button>
              <button className="px-10 py-4 bg-transparent text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
                Talk to sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
