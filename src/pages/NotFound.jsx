import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import PageTransition from '@components/common/PageTransition'
import Button from '@components/common/Button'
import { ease } from '@utils/motion'

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.outExpo } },
}

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="container-custom relative z-10 text-center max-w-lg"
        >
          {/* Big 404 */}
          <motion.div variants={item} className="relative mb-6">
            <span className="text-[10rem] md:text-[14rem] font-display font-bold leading-none select-none"
              style={{ WebkitTextStroke: '2px rgba(99,102,241,0.3)', color: 'transparent' }}>
              404
            </span>
            <motion.span
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl"
              aria-hidden="true"
            >
              🔍
            </motion.span>
          </motion.div>

          <motion.h1 variants={item} className="text-white text-3xl md:text-4xl font-display font-semibold mb-4">
            Page not found
          </motion.h1>
          <motion.p variants={item} className="text-slate-400 text-lg mb-10">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button size="lg" leftIcon={<Home size={18} />}>Go home</Button>
            </Link>
            <button onClick={() => window.history.back()}>
              <Button size="lg" variant="outline-white" leftIcon={<ArrowLeft size={18} />}>Go back</Button>
            </button>
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  )
}
