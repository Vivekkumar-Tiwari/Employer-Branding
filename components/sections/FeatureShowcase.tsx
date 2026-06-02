'use client'

import { motion } from 'framer-motion'
import {
  Video,
  Zap,
  Briefcase,
  BarChart3,
  Users,
  Lightbulb,
} from 'lucide-react'

export default function FeatureShowcase() {
  const features = [
    {
      icon: Video,
      title: 'Content Production',
      description: 'End-to-end cinematic content creation tailored for social media platforms.',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Zap,
      title: 'Employer Branding Strategy',
      description: 'Strategic guidance to position your company as an employer of choice.',
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: Briefcase,
      title: 'Social Media Management',
      description: 'Expert handling of LinkedIn, Instagram, TikTok, and other platforms.',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive reporting on engagement, reach, and recruitment impact.',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Users,
      title: 'Recruitment Marketing',
      description: 'Targeted campaigns designed to attract top talent for specific roles.',
      gradient: 'from-red-500/20 to-rose-500/20',
    },
    {
      icon: Lightbulb,
      title: 'Personal Branding',
      description: 'Build thought leadership and personal brands for founders and executives.',
      gradient: 'from-indigo-500/20 to-blue-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Features That Drive <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive suite of services designed to transform your workforce into brand ambassadors.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                className={`group p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-border hover:border-primary/50 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0, 87, 255, 0.1)',
                }}
              >
                <motion.div
                  className="p-3 rounded-lg bg-background/50 w-fit mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to see how these features can transform your employer brand?
          </p>
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
