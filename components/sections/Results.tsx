'use client'

import { motion } from 'framer-motion'

export default function Results() {
  const stats = [
    {
      label: 'Videos Produced',
      value: '500+',
      description: 'High-quality employee content pieces'
    },
    {
      label: 'Brands Served',
      value: '50+',
      description: 'Companies trusting our platform'
    },
    {
      label: 'Content Views',
      value: '300M+',
      description: 'Reach across all platforms'
    },
    {
      label: 'Avg Engagement',
      value: '12.5%',
      description: 'Above industry standard'
    },
    {
      label: 'Employee Retention',
      value: '95%',
      description: 'High satisfaction rate'
    },
    {
      label: 'Time to Value',
      value: '2 weeks',
      description: 'From setup to first content'
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
            <span className="text-[#003FBD]">Backed</span> by Results That Matter
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Here&apos;s what our clients achieve with the platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, i) => {
            const colors = ['bg-yellow-300', 'bg-green-400', 'bg-blue-400', 'bg-orange-400', 'bg-purple-400', 'bg-cyan-400']
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${colors[i % colors.length]} rounded-3xl p-8 text-center font-bold`}
              >
                <p className="text-5xl md:text-6xl text-black mb-2">
                  {stat.value}
                </p>
                <p className="text-lg text-black mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-black/70 font-normal">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
