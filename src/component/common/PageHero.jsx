import { motion } from 'framer-motion'
import { cn } from '@utils/helpers'
import { ease } from '@utils/motion'

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}
const child = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: ease.outExpo } },
}

export default function PageHero({ eyebrow, title, subtitle, align = 'center', children }) {
  const isCenter = align === 'center'

  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(99,102,241,0.22) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-500/60 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={cn('container-custom relative z-10', isCenter && 'text-center')}
      >
        {eyebrow && (
          <motion.div variants={child} className={cn('flex items-center gap-2 mb-5', isCenter && 'justify-center')}>
            <span className="w-6 h-px bg-brand-400" />
            <span className="eyebrow text-brand-300">{eyebrow}</span>
          </motion.div>
        )}
        {title && (
          <motion.h1 variants={child} className="text-white text-balance mb-5">{title}</motion.h1>
        )}
        {subtitle && (
          <motion.p variants={child} className={cn('text-lg text-slate-400', isCenter && 'max-w-2xl mx-auto')}>
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div variants={child} className="mt-8">{children}</motion.div>
        )}
      </motion.div>
    </section>
  )
}
