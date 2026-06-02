'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer:
        'Most clients see significant improvements in engagement and application quality within 60-90 days. However, we focus on sustainable growth that compounds over time.',
    },
    {
      question: 'What platforms do you manage?',
      answer:
        'We handle LinkedIn, Instagram, TikTok, YouTube, and other relevant platforms. Our strategy is customized based on where your target talent spends time.',
    },
    {
      question: 'Do you handle all content creation?',
      answer:
        'Yes, we handle everything from strategy and shooting to editing and publishing. Our on-ground team works with your employees to capture authentic moments.',
    },
    {
      question: 'What if we&apos;re a smaller company?',
      answer:
        'We work with companies of all sizes. Our packages are flexible and scalable, whether you have 20 or 2,000 employees.',
    },
    {
      question: 'How do you measure success?',
      answer:
        'We track metrics like engagement rates, reach, application volume, quality of applications, and ultimately, cost-per-hire. All data is provided monthly.',
    },
    {
      question: 'Can we adjust our strategy mid-contract?',
      answer:
        'Absolutely. We believe in continuous optimization. We conduct monthly reviews and adjust our approach based on performance data and your feedback.',
    },
    {
      question: 'What about content quality and authenticity?',
      answer:
        'Authenticity is at the core of everything we do. We avoid overly polished corporate content and focus on real, relatable moments that showcase your culture.',
    },
    {
      question: 'Do you provide training for internal teams?',
      answer:
        'Yes, we can train your HR or marketing team to maintain content quality and consistency after our initial engagement period.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="mb-16 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-border rounded-lg overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.button
                className={`w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors ${
                  openIndex === i ? 'bg-primary/5' : ''
                }`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <span className="text-lg font-semibold text-foreground pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={24} className="text-primary" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 pt-0 text-muted-foreground bg-white/2 border-t border-border">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Didn&apos;t find what you&apos;re looking for?
          </p>
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
