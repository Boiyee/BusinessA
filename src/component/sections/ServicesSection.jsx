import { ArrowRight, Layers, Monitor, TrendingUp, Smartphone, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '@components/common/SectionTitle'
import ScrollReveal from '@components/common/ScrollReveal'
import { services } from '@data/content'
import { cn, staggerDelay } from '@utils/helpers'
import { staggerContainer, staggerItem, ease } from '@utils/motion'

const iconMap = { Layers, Monitor, TrendingUp, Smartphone, Shield, Zap }

const colorMap = {
  brand:  'bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 group-hover:bg-brand-500 group-hover:text-white',
  teal:   'bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white',
  amber:  'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white',
  rose:   'bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 group-hover:bg-rose-500 group-hover:text-white',
  purple: 'bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white',
  cyan:   'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white',
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-section-alt dark:bg-slate-900">
      <div className="container-custom">
        <ScrollReveal className="mb-16">
          <SectionTitle
            eyebrow="What we do"
            title={<>Everything you need to <span className="text-gradient italic">grow</span></>}
            subtitle="End-to-end digital services covering every stage of your brand's journey — from idea to execution to growth."
          />
        </ScrollReveal>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Zap
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                whileHover={{ y: -4, boxShadow: '0 16px 48px 0 rgba(15,23,42,0.13)' }}
                transition={{ duration: 0.25, ease: ease.outQuart }}
                className="group card cursor-pointer"
              >
                <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300', colorMap[service.color])}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:gap-3 transition-all duration-200">
                  Learn more <ArrowRight size={13} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
