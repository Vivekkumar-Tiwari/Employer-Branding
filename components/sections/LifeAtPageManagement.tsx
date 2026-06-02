'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function LifeAtPageManagement() {
  const steps = [
    {
      number: '01',
      title: 'Strategy',
      description: 'We audit your brand, identify audience pain points, and create a content roadmap aligned with your hiring goals.',
    },
    {
      number: '02',
      title: 'Production',
      description: 'Our on-ground production team captures authentic moments and stories across your workplace.',
    },
    {
      number: '03',
      title: 'Editing & Storytelling',
      description: 'We transform raw footage into cinematic, social-first content that people genuinely want to watch.',
    },
    {
      number: '04',
      title: 'Publishing',
      description: 'We manage and scale your Life-at pages across LinkedIn, Instagram, TikTok, and other platforms.',
    },
    {
      number: '05',
      title: 'Analytics',
      description: 'We track engagement, measure ROI, and continuously optimize for recruitment outcomes.',
    },
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Life-at Page <span className="text-gradient">Management</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We handle everything from strategy to analytics, building and scaling your employer brand across all social platforms.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Process Steps */}
          <motion.div
            className="space-y-6"
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
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-6 pb-6 border-b border-border last:border-b-0"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Visual Dashboard */}
          <motion.div
            className="relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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

            {/* Dashboard Elements */}
            <div className="relative z-10 space-y-4">
              {/* Header */}
              <div className="h-10 bg-white/10 rounded-lg backdrop-blur-sm" />

              {/* Content Boxes */}
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="h-20 bg-white/10 rounded-lg backdrop-blur-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Footer */}
              <div className="h-10 bg-white/10 rounded-lg backdrop-blur-sm mt-6" />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-8 right-8 px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border border-border text-sm font-medium flex items-center gap-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle2 size={16} className="text-green-500" />
              Analytics Ready
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
