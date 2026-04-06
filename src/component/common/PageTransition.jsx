import { motion } from 'framer-motion'
import { pageVariants } from '@utils/motion'

/**
 * Wraps every page with a smooth enter/exit animation.
 * Usage: wrap the returned JSX of any page component with <PageTransition>.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
