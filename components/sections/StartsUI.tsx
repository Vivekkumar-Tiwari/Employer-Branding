'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function StartsUI() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: 'Dazzle has been a game-changer. The process is so simple and quick that I can send money anytime, anywhere, and it\'s immediately available to the recipient.',
      author: 'Sarah Wilson',
      role: 'CEO of Hummingbird',
      accentColor: 'from-green-400 to-green-500',
      bgColor: 'bg-black',
    },
    {
      quote: 'We\'ve transformed our entire workflow with this tool. The automation has saved us countless hours.',
      author: 'John Smith',
      role: 'Product Lead',
      accentColor: 'from-blue-400 to-blue-500',
      bgColor: 'bg-black',
    },
    {
      quote: 'Best investment we\'ve made for our business. Highly recommend to any growing team.',
      author: 'Emma Johnson',
      role: 'COO of Tech Corp',
      accentColor: 'from-purple-400 to-purple-500',
      bgColor: 'bg-black',
    },
  ]

  const currentTestimonial = testimonials[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Trust is built with consistency
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Colored accent bars - stacked at top */}
          <div className="absolute -top-8 left-0 right-0 flex gap-2 justify-center h-6">
            <div className={`w-16 h-full bg-gradient-to-r ${currentTestimonial.accentColor} rounded-full`}></div>
            <div className="w-16 h-full bg-yellow-400 rounded-full opacity-60"></div>
            <div className="w-16 h-full bg-green-600 rounded-full opacity-60"></div>
          </div>

          {/* Main Card */}
          <div className={`${currentTestimonial.bgColor} rounded-3xl p-12 md:p-16 text-white flex flex-col md:flex-row gap-12 items-center`}>
            {/* Left: Quote & Author */}
            <div className="flex-1">
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-10">
                {currentTestimonial.quote}
              </p>
              <div>
                <p className="font-semibold text-lg">{currentTestimonial.author}</p>
                <p className="text-white/70">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* Right: Profile Image Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-12"
        >
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors flex items-center justify-center text-2xl text-black"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors flex items-center justify-center text-2xl text-black"
          >
            →
          </button>
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-black w-8' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
