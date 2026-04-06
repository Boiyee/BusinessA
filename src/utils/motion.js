/**
 * motion.js — Centralized Framer Motion variants
 *
 * Import from here to keep animations consistent across the entire site.
 * All durations are in seconds (Framer convention).
 */

// ── Easing presets ────────────────────────────────────────────────
export const ease = {
  outExpo:   [0.16, 1, 0.3, 1],
  outQuart:  [0.25, 1, 0.5, 1],
  inOutQuart:[0.76, 0, 0.24, 1],
  spring:    { type: 'spring', stiffness: 300, damping: 30 },
  springLight:{ type: 'spring', stiffness: 200, damping: 25 },
}

// ── Fade up (most common scroll reveal) ──────────────────────────
export const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: ease.outExpo },
  },
}

// ── Fade in (no movement) ─────────────────────────────────────────
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

// ── Fade in from left ────────────────────────────────────────────
export const fadeLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: ease.outExpo },
  },
}

// ── Fade in from right ───────────────────────────────────────────
export const fadeRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: ease.outExpo },
  },
}

// ── Scale up ─────────────────────────────────────────────────────
export const scaleUp = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: ease.outExpo },
  },
}

// ── Container: staggers children automatically ────────────────────
export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden:  {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

// ── Child item used inside staggerContainer ───────────────────────
export const staggerItem = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: ease.outExpo },
  },
}

// ── Page transition (wraps entire page) ──────────────────────────
export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: ease.outQuart },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: ease.inOutQuart },
  },
}

// ── Navbar link hover underline ───────────────────────────────────
export const navUnderline = {
  rest:  { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.25, ease: ease.outQuart },
  },
}

// ── Card hover lift ───────────────────────────────────────────────
export const cardHover = {
  rest:  { y: 0, boxShadow: '0 4px 24px 0 rgba(15,23,42,0.08)' },
  hover: {
    y: -4,
    boxShadow: '0 16px 48px 0 rgba(15,23,42,0.15)',
    transition: { duration: 0.3, ease: ease.outQuart },
  },
}

// ── Button tap feedback ───────────────────────────────────────────
export const buttonTap = { scale: 0.97 }

// ── Mobile menu slide-down ────────────────────────────────────────
export const mobileMenu = {
  hidden:  { opacity: 0, height: 0, overflow: 'hidden' },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.35, ease: ease.outExpo },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

// ── Lightbox backdrop ─────────────────────────────────────────────
export const backdrop = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
}

// ── Lightbox panel ────────────────────────────────────────────────
export const lightboxPanel = {
  hidden:  { opacity: 0, scale: 0.93, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: ease.outExpo },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 16,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

// ── FAQ accordion panel ───────────────────────────────────────────
export const accordion = {
  hidden:  { height: 0, opacity: 0, overflow: 'hidden' },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: ease.outQuart },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

// ── Counter number roll-up ────────────────────────────────────────
export const counterReveal = {
  hidden:  { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: ease.outExpo },
  },
}

// ── Hero headline word-by-word stagger ────────────────────────────
export const heroText = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
}
export const heroWord = {
  hidden:  { opacity: 0, y: 20, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: ease.outExpo },
  },
}
