'use client'

import { motion } from 'framer-motion'

export default function StartsUI() {
  const cards = [
    {
      title: 'Smart Assistance',
      desc: 'Get instant guidance and smart support at every step.',
      gradient: 'from-teal-500 to-teal-600',
      borderColor: 'border-teal-300',
    },
    {
      title: 'Go Live Faster',
      desc: 'Skip the usual delays and technical hurdles.',
      gradient: 'from-rose-500 to-rose-600',
      borderColor: 'border-rose-300',
    },
    {
      title: 'Grow Without Limits',
      desc: 'Our cloud infrastructure auto-scales as your user base grows.',
      gradient: 'from-amber-400 to-amber-500',
      borderColor: 'border-amber-300',
    },
    {
      title: 'No-Code Power',
      desc: 'Empower your team to create without engineering bottlenecks.',
      gradient: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-300',
    },
  ]

  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            <span className="text-[#003FBD]">Content</span> That Resonates
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Create engaging stories your audience actually wants to watch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`bg-gradient-to-b ${card.gradient} rounded-3xl p-8 text-white min-h-80 flex flex-col justify-between overflow-hidden relative`}
            >
              {/* Top section */}
              <div>
                <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                <p className="text-white/90 text-base leading-relaxed">{card.desc}</p>
              </div>

              {/* Mock dashboard area */}
              <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-2xl p-4 h-32 flex items-center justify-center border border-white/30">
                <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
