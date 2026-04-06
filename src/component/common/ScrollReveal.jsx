import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, fadeIn, scaleUp } from '@utils/motion'

const variantMap = {
  'fade-up':    fadeUp,
  'fade-in':    fadeIn,
  'fade-left':  fadeLeft,
  'fade-right': fadeRight,
  'scale-up':   scaleUp,
}

/**
 * ScrollReveal — declarative scroll-triggered animation wrapper.
 *
 * Props:
 *   variant   — 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-up'
 *   delay     — seconds (e.g. 0.1)
 *   threshold — 0–1, how much of the element must be in view
 *   className — forwarded to the motion.div
 *   as        — element type (default 'div')
 *   once      — animate only first time in view (default true)
 */
export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.12,
  className,
  as: Tag = 'div',
  once = true,
}) {
  const chosen = variantMap[variant] ?? fadeUp
  const withDelay = {
    ...chosen,
    visible: {
      ...chosen.visible,
      transition: {
        ...chosen.visible.transition,
        delay,
      },
    },
  }

  return (
    <motion.div
      variants={withDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
