'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function OurProcess() {
  const timeline = [
    { step: 'Discovery', description: 'Deep dive into your brand, culture, and hiring goals' },
    { step: 'Content Strategy', description: 'Create a comprehensive content roadmap and calendar' },
    { step: 'On-ground Production', description: 'Capture authentic moments and stories from your workplace' },
    { step: 'Editing & Storytelling', description: 'Transform footage into cinematic, social-first content' },
    { step: 'Distribution', description: 'Manage and scale across all relevant social platforms' },
    { step: 'Growth Optimization', description: 'Monitor analytics and continuously improve performance' },
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to building your employer brand from strategy through optimization.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Vertical line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Content */}
                <motion.div
                  className="flex-1 md:text-right md:pr-12 flex flex-col justify-center"
                  whileHover={{ x: i % 2 === 0 ? 4 : -4 }}
                >
                  <motion.div
                    className="inline-block md:ml-auto mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      Step {i + 1}
                    </span>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {item.step}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className="hidden md:flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary relative z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 0 0px rgba(0, 87, 255, 0.4)',
                      '0 0 0 8px rgba(0, 87, 255, 0.2)',
                      '0 0 0 0px rgba(0, 87, 255, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />

                {/* Mobile step indicator */}
                <motion.div
                  className="md:hidden flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {i + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA at bottom */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center justify-center gap-2 mx-auto hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
