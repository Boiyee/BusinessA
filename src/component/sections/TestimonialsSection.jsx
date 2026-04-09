import { Quote, Star, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import SectionTitle from '@components/common/SectionTitle'
import ScrollReveal from '@components/common/ScrollReveal'
import { testimonials } from '@data/content'
import { staggerContainer, staggerItem } from '@utils/motion'

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

function VideoTestimonial({ item, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl"
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-slate-300 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="relative pb-[56.25%] bg-slate-900 rounded-2xl overflow-hidden">
            <iframe
              src={`${item.videoUrl}?autoplay=1`}
              title={`${item.name} testimonial`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function TestimonialsSection() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <section id="testimonials" className="section-padding bg-section-alt dark:bg-slate-900">
      <div className="container-custom">
        <ScrollReveal className="mb-16">
          <SectionTitle
            eyebrow="Client stories"
            title={<>Trusted by teams <span className="text-gradient italic">worldwide</span></>}
            subtitle="Hear directly from the people we have had the privilege of working with."
          />
        </ScrollReveal>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: '0 16px 48px 0 rgba(15,23,42,0.12)' }}
              transition={{ duration: 0.25 }}
              className={`card flex flex-col gap-5 relative group ${item.hasVideo ? 'cursor-pointer' : ''}`}
              onClick={() => item.hasVideo && setSelectedVideo(item)}
            >
              {item.hasVideo && (
                <>
                  <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/10 rounded-2xl transition-colors" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-brand-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Play size={20} fill="currentColor" />
                  </div>
                </>
              )}

              <div className="flex items-start justify-between relative z-20">
                <StarRating count={item.rating} />
                <Quote size={28} className="text-brand-100 dark:text-brand-900 rotate-180" />
              </div>
              <blockquote className="flex-1 text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic relative z-20">
                "{item.quote}"
              </blockquote>
              <div className="divider relative z-20" />
              <div className="flex items-center gap-3 relative z-20">
                <img src={item.avatar} alt={item.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-100 dark:ring-brand-900" loading="lazy" />
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{item.role}</div>
                </div>
              </div>
              {item.hasVideo && (
                <div className="text-xs text-brand-500 font-semibold relative z-20">
                  ▶ Watch testimonial
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 flex flex-wrap justify-center items-center gap-6 opacity-30 dark:opacity-20"
        >
          {['Forbes', 'Wired', 'TechCrunch', 'FastCompany', 'Inc.'].map(brand => (
            <span key={brand} className="text-lg font-display font-semibold text-slate-400 tracking-tight">{brand}</span>
          ))}
        </motion.div>

        {selectedVideo && (
          <VideoTestimonial item={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </div>
    </section>
  )
}
