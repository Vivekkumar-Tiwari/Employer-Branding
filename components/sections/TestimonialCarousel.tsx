'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialCarousel() {
  const testimonials = [
    {
      company: 'Thinking Spree',
      quote:
        'The content quality and cultural authenticity transformed how we attract talent. Their approach to storytelling is unmatched.',
      author: 'Sarah Chen',
      role: 'Head of People',
      image: 'TS',
    },
    {
      company: 'Baba Hotels',
      quote:
        'We saw a 3x increase in qualified applications within the first quarter. The ROI on content is incredible.',
      author: 'Marcus Rodriguez',
      role: 'Talent Director',
      image: 'BH',
    },
    {
      company: 'Persianlily',
      quote:
        'More than just videos—this is employer branding done right. Our team feels valued and represented.',
      author: 'Aisha Patel',
      role: 'CEO',
      image: 'PL',
    },
    {
      company: 'Zante',
      quote:
        'Working with this team has been seamless. They understand our culture and translate it beautifully for recruiting.',
      author: 'James O&apos;Brien',
      role: 'VP Operations',
      image: 'ZA',
    },
  ]

  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            What Our Partners <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real testimonials from companies that transformed their employer brand with us.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Testimonial Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main testimonial */}
            <motion.div
              className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border p-8 flex flex-col justify-between"
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              {/* Video placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xl font-medium text-foreground mb-6 line-clamp-3">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {testimonials[current].image}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[current].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial list */}
            <div className="space-y-4">
              {testimonials.map((testimonial, i) => (
                <motion.button
                  key={i}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    current === i
                      ? 'bg-primary/10 border-primary shadow-lg'
                      : 'bg-background border-border hover:border-primary/30'
                  }`}
                  onClick={() => setCurrent(i)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="font-semibold text-foreground mb-2">
                    {testimonial.company}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {testimonial.quote}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-center gap-4">
            <motion.button
              onClick={handlePrev}
              className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} className="text-primary" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} className="text-primary" />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                className={`h-2 rounded-full transition-all ${
                  current === i ? 'bg-primary w-8' : 'bg-border w-2'
                }`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
