'use client'

import { motion } from 'framer-motion'

export default function How() {
  const steps = [
    { 
      number: '01',
      title: 'Share Details', 
      desc: 'Fill out a quick form with details about your space, schedule, and preferences.',
      bgColor: 'from-amber-900 to-amber-700'
    },
    { 
      number: '02',
      title: 'Get Quote', 
      desc: 'We&apos;ll send you a personalized estimate, no hidden fees, no upselling.',
      bgColor: 'from-rose-900 to-rose-700'
    },
    { 
      number: '03',
      title: 'We Clean', 
      desc: 'Our team arrives on time, equipped, and ready to clean thoroughly.',
      bgColor: 'from-green-900 to-green-700'
    },
    { 
      number: '04',
      title: 'You Relax', 
      desc: 'Enjoy a spotless home or workspace that looks, feels, and smells truly clean.',
      bgColor: 'from-blue-900 to-blue-700'
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
          className="mb-16"
        >
          <p className="text-[#003FBD] text-sm font-semibold uppercase tracking-wider mb-4">
            How it works
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 md:mb-0">
              Get Cleaner Space<br />in Four Steps
            </h2>
            <p className="text-gray-600 text-lg max-w-xs">
              And sometimes, in as little as 24 hours.
            </p>
          </div>
        </motion.div>

        {/* 2x2 Grid of Overlay Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative h-64 bg-gradient-to-br ${step.bgColor} rounded-3xl overflow-hidden group cursor-pointer`}
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

              {/* Large step number */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-9xl font-bold text-white">{step.number}</span>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 text-white">
                <div>
                  <div className="text-5xl font-bold opacity-50 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{step.desc}</p>
                </div>

                {/* Hover indicator */}
                <div className="w-12 h-1 bg-white/30 group-hover:bg-white transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
