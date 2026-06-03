'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Content Views', value: '300M+', detail: 'Generated across all social platforms' },
  { label: 'Engagement Rate', value: '12.5%', detail: '4x higher than industry average' },
  { label: 'Employee Advocacy', value: '95%', detail: 'Participation rate in active programs' }
]

export default function Results() {
  return (
    <section className="w-full py-32 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-sm font-medium text-blue-600 uppercase tracking-widest">{stat.label}</h3>
              <p className="text-6xl font-semibold text-black tracking-tighter">{stat.value}</p>
              <p className="text-lg text-gray-500 font-light leading-relaxed">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
