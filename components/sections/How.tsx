'use client'

import { motion } from 'framer-motion'

export default function How() {
  const steps = [
    { title: 'Employee Enrollment', desc: 'Invite your team to participate in content creation' },
    { title: 'Content Creation', desc: 'Professional guidance on storytelling and filming' },
    { title: 'Production Quality', desc: 'Professional editing and polishing of content' },
    { title: 'Distribution', desc: 'Strategic sharing across all major platforms' },
    { title: 'Analytics', desc: 'Track engagement and measure impact' },
    { title: 'Optimization', desc: 'Continuous improvement based on performance' },
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            <span className="text-[#003FBD]">How</span> Our Process Works
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            A streamlined approach to transforming employees into content creators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black p-8 rounded-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-bold text-[#003FBD] mb-4">{i + 1}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
