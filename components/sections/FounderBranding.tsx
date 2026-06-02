'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FounderBranding() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          <div className="relative z-10 p-12 sm:p-16 space-y-8">
            {/* Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                  Premium Service
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Personal Founder Branding
                </h2>
                <p className="text-lg text-muted-foreground">
                  Elevate your founder&apos;s personal brand and establish thought leadership in your industry. Build authentic connections with your audience and position yourself as an industry visionary.
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                className="space-y-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  'Personal brand positioning and strategy',
                  'LinkedIn content creation and growth',
                  'Thought leadership articles and insights',
                  'Speaking engagement opportunities',
                  'Media coverage coordination',
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <p className="text-foreground font-medium">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA */}
            <motion.button
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow w-full sm:w-auto justify-center sm:justify-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Apply For Founder Branding <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
