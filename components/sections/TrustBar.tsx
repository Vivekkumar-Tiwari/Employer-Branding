'use client'

import { motion } from 'framer-motion'

export default function TrustBar() {
  const brands = [
    'Thinking Spree',
    'Baba Hotels',
    'Persianlily',
    'Zante',
    'Thinking Spree',
    'Baba Hotels',
  ]

  return (
    <section className="py-16 sm:py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-muted-foreground text-sm font-medium mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          TRUSTED BY LEADING BRANDS
        </motion.p>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-8 min-w-max px-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-xs font-bold text-primary">
                    {brand.substring(0, 2).toUpperCase()}
                  </div>
                </div>
                <span className="text-foreground/70 font-medium whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Gradient Fade */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
