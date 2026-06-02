'use client'

import { motion } from 'framer-motion'

export default function StartsUI() {
  const uses = [
    {
      title: 'Employee Stories',
      desc: 'Authentic narratives from your team members',
      color: 'bg-pink-100 border-pink-300',
    },
    {
      title: 'Behind the Scenes',
      desc: 'Day-to-day culture and company activities',
      color: 'bg-yellow-50 border-yellow-300',
    },
    {
      title: 'Success Moments',
      desc: 'Wins, milestones, and team celebrations',
      color: 'bg-green-100 border-green-300',
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            <span className="text-[#003FBD]">Content</span> That Resonates
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Create engaging stories your audience actually wants to watch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {uses.map((use, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`${use.color} border-2 p-12 rounded-3xl min-h-72 flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-black mb-4">{use.title}</h3>
                <p className="text-gray-800 text-lg">{use.desc}</p>
              </div>
              <div className="mt-8 w-16 h-16 bg-white/50 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
