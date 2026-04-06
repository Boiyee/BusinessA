import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isInView] — attach ref to the element you want to observe.
 * @param {{ threshold?: number, rootMargin?: string, once?: boolean }} options
 */
export function useInView(options = {}) {
  const { threshold = 0.15, rootMargin = '0px', once = true } = options
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, isInView]
}
