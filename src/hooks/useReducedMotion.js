import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'

/**
 * Returns true if the user has enabled "prefers-reduced-motion" in their OS.
 * Use this to conditionally disable or simplify animations.
 *
 * @returns {boolean}
 *
 * @example
 * const reduced = useReducedMotion()
 * <motion.div animate={reduced ? {} : { y: [-10, 0] }} />
 */
export function useReducedMotion() {
  return useFramerReducedMotion() ?? false
}
