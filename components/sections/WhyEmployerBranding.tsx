'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Shield, Zap } from 'lucide-react'

export default function WhyEmployerBranding() {
  const stats = [
    {
      icon: TrendingUp,
      value: '80%',
      label: 'Higher Application Rates',
      description: 'Companies with strong employer brands receive 2x more applications',
    },
    {
      icon: Users,
      value: '65%',
      label: 'Better Talent Quality',
      description: 'Candidates are more qualified and aligned with company culture',
    },
    {
      icon: Shield,
      value: '73%',
      label: 'Increased Trust',
      description: 'Employee stories build authentic trust with potential hires',
    },
    {
      icon: Zap,
      value: '50%',
      label: 'Higher Retention',
      description: 'Employees feel valued when their stories are shared globally',
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
            Why Employer Branding <span className="text-gradient">Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            In today's competitive talent market, your employer brand is your most powerful recruiting asset. Here&apos;s why companies choose to invest in it.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm font-semibold text-foreground mt-1">{stat.label}</p>
                      <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Visual - Dashboard Mockup */}
          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
            <div className="relative z-10 space-y-4 h-full flex flex-col justify-between">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="h-12 bg-white/10 rounded-lg backdrop-blur-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
