'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      company: 'TechCorp',
      quote: 'The transformation in our employer brand has been remarkable. Employees are now our strongest recruitment channel.',
      author: 'Sarah Chen',
      role: 'Head of Talent',
      bgColor: 'bg-yellow-300',
    },
    {
      company: 'DesignStudio',
      quote: 'Our content engagement increased 300% after implementing their employee advocacy program.',
      author: 'Marcus Johnson',
      role: 'Marketing Director',
      bgColor: 'bg-orange-400',
    },
    {
      company: 'FinanceHub',
      quote: 'Best investment we made for our recruitment and brand presence. Highly recommend.',
      author: 'Elena Rodriguez',
      role: 'CEO',
      bgColor: 'bg-blue-400',
    },
    {
      company: 'CreativeAgency',
      quote: 'Our employee advocacy program became our most effective marketing channel.',
      author: 'David Park',
      role: 'Founder',
      bgColor: 'bg-cyan-400',
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
            <span className="text-[#003FBD]">What</span> Our Customers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${testimonial.bgColor} rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-96`}
            >
              <div>
                <p className="text-lg md:text-xl font-semibold text-black mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="pt-8 border-t-2 border-black/20">
                <p className="font-semibold text-black">{testimonial.author}</p>
                <p className="text-black/70">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
