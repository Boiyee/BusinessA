import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@components/common/Button'
import ScrollReveal from '@components/common/ScrollReveal'

export default function CTABandSection() {
  return (
    <section className="section-padding bg-brand-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      {/* Floating orbs for depth */}
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-[10%] w-40 h-40 rounded-full bg-brand-400/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 right-[10%] w-56 h-56 rounded-full bg-violet-400/15 blur-3xl pointer-events-none"
      />

      <ScrollReveal className="container-custom relative z-10 text-center">
        <span className="eyebrow text-brand-300 mb-4 justify-center">
          <span className="w-6 h-px bg-current" />
          Ready to get started?
        </span>
        <h2 className="text-white text-balance mt-4 mb-6">
          Let's build something{' '}
          <span className="font-display italic">remarkable</span> together
        </h2>
        <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10">
          Tell us about your project and we'll follow up within one business day with ideas and a clear path forward.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-slate-100 shadow-xl" rightIcon={<ArrowRight size={18} />}>
              Start a project
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline-white">Learn about us</Button>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
