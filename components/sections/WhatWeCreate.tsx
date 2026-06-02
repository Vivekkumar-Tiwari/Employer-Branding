'use client'

import { motion } from 'framer-motion'
import { Film, Users, Lightbulb, Briefcase, Heart, Zap } from 'lucide-react'

export default function WhatWeCreate() {
  const services = [
    {
      icon: Film,
      title: 'Day in the Life',
      description: 'Authentic day-to-day moments that showcase company culture and employee experiences.',
      color: 'from-blue-500/20 to-blue-500/5',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: Users,
      title: 'Employee Stories',
      description: 'Deep, personal narratives that highlight career growth and impact within your organization.',
      color: 'from-purple-500/20 to-purple-500/5',
      borderColor: 'border-purple-500/30',
    },
    {
      icon: Briefcase,
      title: 'Workplace Culture',
      description: 'Cinematic content showcasing team collaboration, values, and unique office environments.',
      color: 'from-pink-500/20 to-pink-500/5',
      borderColor: 'border-pink-500/30',
    },
    {
      icon: Lightbulb,
      title: 'Founder Content',
      description: 'Personal branding content that positions your founder as an industry thought leader.',
      color: 'from-green-500/20 to-green-500/5',
      borderColor: 'border-green-500/30',
    },
    {
      icon: Heart,
      title: 'Team Moments',
      description: 'Organic team interactions, celebrations, and milestone moments that build community.',
      color: 'from-red-500/20 to-red-500/5',
      borderColor: 'border-red-500/30',
    },
    {
      icon: Zap,
      title: 'Recruitment Campaigns',
      description: 'Targeted hiring campaigns that showcase specific roles and help attract top talent.',
      color: 'from-orange-500/20 to-orange-500/5',
      borderColor: 'border-orange-500/30',
    },
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
            What We <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Create</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From cinematic day-in-the-life content to deep employee narratives, we create stories that resonate with top talent and build your employer brand.
          </p>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                className={`group p-8 rounded-2xl bg-gradient-to-br ${service.color} border ${service.borderColor} hover:border-primary/50 transition-all duration-300 cursor-pointer`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0, 87, 255, 0.1)',
                }}
              >
                <motion.div
                  className="p-4 rounded-xl bg-background/50 w-fit mb-4 group-hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
