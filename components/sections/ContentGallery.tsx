'use client'

import { motion } from 'framer-motion'

export default function ContentGallery() {
  const galleryItems = [
    { id: 1, height: 'h-64', width: 'md:col-span-1 md:row-span-1' },
    { id: 2, height: 'h-64', width: 'md:col-span-1 md:row-span-2' },
    { id: 3, height: 'h-64', width: 'md:col-span-1 md:row-span-1' },
    { id: 4, height: 'h-64', width: 'md:col-span-1 md:row-span-1' },
    { id: 5, height: 'h-64', width: 'md:col-span-1 md:row-span-1' },
    { id: 6, height: 'h-64', width: 'md:col-span-2 md:row-span-1' },
    { id: 7, height: 'h-64', width: 'md:col-span-1 md:row-span-1' },
    { id: 8, height: 'h-64', width: 'md:col-span-1 md:row-span-1' },
  ]

  const colors = [
    'from-blue-500/30 to-blue-600/30',
    'from-purple-500/30 to-purple-600/30',
    'from-pink-500/30 to-pink-600/30',
    'from-green-500/30 to-green-600/30',
    'from-orange-500/30 to-orange-600/30',
    'from-red-500/30 to-red-600/30',
    'from-cyan-500/30 to-cyan-600/30',
    'from-indigo-500/30 to-indigo-600/30',
  ]

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
            Employee Content <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of cinematic, human, and social-first content we&apos;ve created for leading brands.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`${item.width} ${item.height} rounded-2xl overflow-hidden border border-border group cursor-pointer relative`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[i % colors.length]}`} />

              {/* Animated overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6"
              >
                <div className="space-y-2">
                  <p className="text-white font-semibold">Content {item.id}</p>
                  <p className="text-white/80 text-sm">Professional employee-generated content</p>
                </div>
              </motion.div>

              {/* Play button on hover */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 bg-background border border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
