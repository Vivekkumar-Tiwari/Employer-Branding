'use client'

import { motion } from 'framer-motion'

const clients = [
  'Google', 'Airbnb', 'Notion', 'Coinbase', 'Stripe', 'Figma', 'Slack', 'Linear'
]

export default function ValuedClients() {
  return (
    <section className="w-full py-20 bg-white border-y border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-[0.2em] mb-12">
          Trusted by world class innovative teams
        </p>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 items-center opacity-40 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {clients.map((client, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-black tracking-tight cursor-default"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
