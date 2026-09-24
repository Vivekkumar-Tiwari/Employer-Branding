'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, BarChart3, Share2, ShieldCheck, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'AI Content Generation',
      description: 'Turn raw employee videos into studio-quality brand content automatically.',
      icon: <Sparkles className="w-6 h-6 text-blue-600" />,
      className: 'md:col-span-2 md:row-span-2 bg-blue-50/50',
      visual: (
        <div className="mt-8 flex flex-col gap-4">
          <div className="h-12 w-full bg-white rounded-xl border border-blue-100 shadow-sm flex items-center px-4 gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100" />
            <div className="h-2 flex-grow bg-gray-100 rounded" />
          </div>
          <div className="h-12 w-4/5 bg-white rounded-xl border border-blue-100 shadow-sm flex items-center px-4 gap-3 ml-auto">
            <div className="w-6 h-6 rounded-full bg-purple-100" />
            <div className="h-2 flex-grow bg-gray-100 rounded" />
          </div>
          <div className="h-32 w-full bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl border border-blue-200/50 flex items-center justify-center">
            <Zap className="w-12 h-12 text-blue-500 animate-pulse" />
          </div>
        </div>
      )
    },
    {
      title: 'Employee Hub',
      description: 'A dedicated space for your team to create and share.',
      icon: <Users className="w-6 h-6 text-purple-600" />,
      className: 'bg-purple-50/50',
      visual: (
        <div className="mt-4 flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-600">
            +12
          </div>
        </div>
      )
    },
    {
      title: 'Advanced Analytics',
      description: 'Track reach, engagement, and ROI in real-time.',
      icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
      className: 'bg-orange-50/50',
      visual: (
        <div className="mt-6 h-24 w-full flex items-end gap-1 px-4">
          {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
            <div key={i} style={{ height: `${h}%` }} className="flex-grow bg-orange-400/50 rounded-t-sm" />
          ))}
        </div>
      )
    },
    {
      title: 'Smart Distribution',
      description: 'Push content to LinkedIn, Twitter, and more with one click.',
      icon: <Share2 className="w-6 h-6 text-green-600" />,
      className: 'md:col-span-2 bg-green-50/50',
      visual: (
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="h-16 rounded-xl bg-white border border-green-100 shadow-sm flex items-center justify-center font-semibold text-green-600">IN</div>
          <div className="h-16 rounded-xl bg-white border border-green-100 shadow-sm flex items-center justify-center font-semibold text-blue-400">X</div>
          <div className="h-16 rounded-xl bg-white border border-green-100 shadow-sm flex items-center justify-center font-semibold text-pink-500">IG</div>
        </div>
      )
    },
    {
      title: 'Brand Safety',
      description: 'Automated compliance and approval workflows.',
      icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
      className: 'bg-teal-50/50',
      visual: (
        <div className="mt-6 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-teal-500" />
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="w-full py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-6"
          >
            Built for high-performance <br />
            <span className="text-gradient">marketing teams.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-light"
          >
            Everything you need to scale your employee branding efforts without the manual overhead.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[2rem] border border-black/[0.03] overflow-hidden flex flex-col relative group transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 ${feature.className}`}
            >
              <div className="relative z-10">
                <div className="mb-4 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-black/[0.03]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="flex-grow flex items-center justify-center relative">
                {feature.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
