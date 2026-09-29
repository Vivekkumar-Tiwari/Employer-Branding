'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  'google', 'airbnb', 'notion', 'coinbase', 'stripe', 'figma', 'slack', 'linear'
]

export default function ValuedClients() {
  return (
    <section className="w-full py-16 bg-[#F7F7F7] border-y border-black/[0.03] overflow-hidden">
      <div className="w-full flex relative overflow-hidden group">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap gap-24 items-center pl-24"
        >
          {/* Double array for seamless loop */}
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="relative w-28 h-8 flex-shrink-0">
              <Image 
                src={`https://cdn.simpleicons.org/${client}`} 
                alt={client}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
