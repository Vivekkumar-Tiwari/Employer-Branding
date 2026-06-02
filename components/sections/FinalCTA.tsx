'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Main Heading */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
            Build A Workplace{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              People Want To Join
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your employer brand is your competitive advantage in the race for top talent. Let us help you tell your company&apos;s story in a way that resonates with the people who matter most.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl transition-shadow"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 60px rgba(0, 87, 255, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Discovery Call <ArrowRight size={20} />
          </motion.button>
          <motion.button
            className="px-10 py-5 bg-white/5 text-foreground rounded-full font-semibold border border-border hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Our Team
          </motion.button>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="text-center sm:text-left">
            <p className="font-semibold text-foreground">Trusted by 50+ Brands</p>
            <p className="text-sm text-muted-foreground">Including Fortune 500 companies</p>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center sm:text-left">
            <p className="font-semibold text-foreground">95% Client Retention</p>
            <p className="text-sm text-muted-foreground">Industry-leading satisfaction</p>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center sm:text-left">
            <p className="font-semibold text-foreground">300M+ Views</p>
            <p className="text-sm text-muted-foreground">Generated for our clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
