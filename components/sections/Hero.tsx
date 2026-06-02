'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="px-4 py-2 rounded-full bg-blue-500/10 text-primary text-sm font-medium border border-primary/20">
                  Transform Your Workforce
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Turn Employees Into Your Most Powerful{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Brand Channel
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We help companies transform employees into authentic brand storytellers through high-quality, cinematic employee-generated content that people genuinely want to watch.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 87, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Discovery Call <ArrowRight size={20} />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/5 text-foreground rounded-full font-semibold border border-border hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Our Work
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="pt-8 border-t border-border grid grid-cols-3 gap-8"
              variants={itemVariants}
            >
              {[
                { value: '500+', label: 'Videos Produced' },
                { value: '50+', label: 'Brands Managed' },
                { value: '300M+', label: 'Views Generated' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual - Floating Cards */}
          <motion.div
            className="relative h-96 lg:h-full min-h-[500px] hidden lg:block"
            variants={itemVariants}
          >
            {[
              { label: 'Day in the Life', color: 'from-blue-500', delay: 0 },
              { label: 'Team Culture', color: 'from-purple-500', delay: 0.2 },
              { label: 'Employee Story', color: 'from-pink-500', delay: 0.4 },
              { label: 'Founder Interaction', color: 'from-green-500', delay: 0.6 },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={`absolute w-48 h-32 bg-gradient-to-br ${card.color} to-transparent rounded-2xl p-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl`}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  delay: card.delay,
                  repeat: Infinity,
                }}
                style={{
                  top: `${i * 100}px`,
                  left: `${i * 60}px`,
                }}
              >
                <p className="text-white font-semibold text-sm">{card.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
