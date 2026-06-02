'use client'

import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: 'Content Creation',
      description: 'Professional video and content production from your employees',
    },
    {
      title: 'Distribution Strategy',
      description: 'Multi-channel content distribution across social platforms',
    },
    {
      title: 'Employee Engagement',
      description: 'Built-in tools to empower employees as brand ambassadors',
    },
    {
      title: 'Analytics & Insights',
      description: 'Track performance and ROI on employee-generated content',
    },
    {
      title: 'Brand Consistency',
      description: 'Maintain brand voice while celebrating employee authenticity',
    },
    {
      title: 'Compliance & Approval',
      description: 'Streamlined approval workflows with legal compliance built-in',
    },
  ]

  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A complete platform for employee branding, from content creation to distribution and analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 group-hover:text-white">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
