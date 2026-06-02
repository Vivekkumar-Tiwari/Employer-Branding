'use client'

import { motion } from 'framer-motion'

export default function Backing() {
  const team = [
    { name: 'Sarah Chen', role: 'CEO, TechStart', color: 'bg-yellow-100 border-yellow-300' },
    { name: 'James Miller', role: 'Founder, Growth Co', color: 'bg-purple-100 border-purple-300' },
    { name: 'Maria Santos', role: 'COO, BuildNow', color: 'bg-orange-100 border-orange-300' },
    { name: 'Alex Kim', role: 'CTO, CloudPlatform', color: 'bg-blue-100 border-blue-300' },
  ]

  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            <span className="text-[#003FBD]">Trusted</span> by Industry Leaders
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Leading companies use our platform to build their employer brand
          </p>
        </motion.div>

        {/* Company Logos */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {['TechVentures', 'InnovateCorp', 'FutureScale', 'GrowthPro', 'BuildTech', 'CloudFirst'].map((company) => (
              <motion.div
                key={company}
                className="text-gray-400 font-semibold text-sm uppercase"
                whileHover={{ scale: 1.1, color: '#000000' }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${member.color} border-2 p-6 rounded-2xl text-center`}
            >
              <div className="w-16 h-16 bg-white/40 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-black">{member.name}</h3>
              <p className="text-sm text-gray-700">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
