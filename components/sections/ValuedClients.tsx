'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'Google Fonts', logo: 'GF' },
  { name: 'Amazon', logo: 'AMZ' },
  { name: 'Microsoft', logo: 'MS' },
  { name: 'Help Scout', logo: 'HS' },
  { name: 'Optimizely', logo: 'OPT' },
  { name: 'Miro', logo: 'MIR' },
  { name: 'Breezy', logo: 'BRZ' },
  { name: 'Attio', logo: 'ATT' },
  { name: 'PayPal', logo: 'PP' },
  { name: 'mparticle', logo: 'MPA' },
  { name: 'HubSpot', logo: 'HUB' },
  { name: 'Miro', logo: 'MIR2' },
]

export default function ValuedClients() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading with accent line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Blue accent line */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-[#003FBD] rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Some of our valuable clients
          </h2>
        </motion.div>

        {/* Single row of client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="h-16 flex items-center justify-center"
            >
              <div className="text-gray-400 font-semibold text-sm">{client.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
