import { useState, useEffect } from 'react'

/**
 * Tracks window scroll position and direction.
 * @returns {{ scrollY: number, scrollDir: 'up'|'down', isScrolled: boolean }}
 */
export function useScrollPosition(threshold = 60) {
  const [state, setState] = useState({
    scrollY: 0,
    scrollDir: 'up',
    isScrolled: false,
  })

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      setState({
        scrollY: currentY,
        scrollDir: currentY > lastY ? 'down' : 'up',
        isScrolled: currentY > threshold,
      })
      lastY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return state
}
