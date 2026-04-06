import { Quote, Star } from 'lucide-react'
import { motion } from 'framer-motion'
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

export default function TestimonialsSection() {
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
              className="card flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <StarRating count={item.rating} />
                <Quote size={28} className="text-brand-100 dark:text-brand-900 rotate-180" />
              </div>
              <blockquote className="flex-1 text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic">
                "{item.quote}"
              </blockquote>
              <div className="divider" />
              <div className="flex items-center gap-3">
                <img src={item.avatar} alt={item.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-100 dark:ring-brand-900" loading="lazy" />
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{item.role}</div>
                </div>
              </div>
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
      </div>
    </section>
  )
}
