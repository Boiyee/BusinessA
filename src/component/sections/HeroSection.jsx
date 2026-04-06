import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Button from '@components/common/Button'
import AnimatedCounter from '@components/common/AnimatedCounter'
import { stats } from '@data/content'
import { ease, staggerContainer, staggerItem, fadeUp } from '@utils/motion'

const heroContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
}
const heroChild = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: ease.outExpo } },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-transparent via-brand-500/40 to-transparent ml-[15%]" />
      <div className="absolute top-0 right-0 w-px h-56 bg-gradient-to-b from-transparent via-brand-500/20 to-transparent mr-[25%]" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Eyebrow pill */}
          <motion.div variants={heroChild} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">Award-winning agency</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={heroChild} className="text-white text-balance leading-tight mb-6">
            We build brands that{' '}
            <span className="text-gradient font-display italic">move markets</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p variants={heroChild} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Nexus is a full-service digital agency combining strategy, design, and engineering to create products that perform and experiences that last.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={heroChild} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" rightIcon={<ArrowRight size={18} />} className="shadow-brand-lg">
                  Start a project
                </Button>
              </motion.div>
            </Link>
            <Link to="/portfolio">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="outline-white" leftIcon={<Play size={16} />}>
                  View our work
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={heroChild} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-800">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ backgroundColor: 'rgba(99,102,241,0.06)' }}
                className="bg-slate-900/80 px-6 py-8 text-center transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent" />
    </section>
  )
}
