'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ResultsSection() {
  const metrics = [
    { value: '300M+', label: 'Views Generated', delay: 0 },
    { value: '500+', label: 'Videos Produced', delay: 0.2 },
    { value: '50+', label: 'Brands Managed', delay: 0.4 },
    { value: '95%', label: 'Client Retention', delay: 0.6 },
  ]

  const [counts, setCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    metrics.forEach((metric) => {
      setCounts((prev) => ({
        ...prev,
        [metric.label]: 0,
      }))
    })
  }, [])

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Proven Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real impact delivered to our partners across industries, geographies, and company sizes.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: metric.delay, duration: 0.6 }}
            >
              {/* Background card */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />

              {/* Content */}
              <div className="relative p-8 sm:p-12 text-center">
                <motion.div
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4"
                  whileInView={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Counter targetValue={metric.value} />
                </motion.div>
                <p className="text-lg font-semibold text-foreground">
                  {metric.label}
                </p>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-primary via-secondary to-accent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These results come from our strategic approach, creative excellence, and deep understanding of what resonates with top talent.
          </p>
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function Counter({ targetValue }: { targetValue: string }) {
  const [displayValue, setDisplayValue] = useState(targetValue)

  useEffect(() => {
    const numericValue = parseInt(targetValue.replace(/[^0-9]/g, ''))
    const suffix = targetValue.replace(/[0-9]/g, '')
    let current = 0
    const increment = Math.ceil(numericValue / 100)

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setDisplayValue(numericValue + suffix)
        clearInterval(timer)
      } else {
        setDisplayValue(current + suffix)
      }
    }, 20)

    return () => clearInterval(timer)
  }, [targetValue])

  return <>{displayValue}</>
}
