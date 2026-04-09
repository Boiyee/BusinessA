import { clsx } from 'clsx'

/**
 * Merge class names conditionally (like shadcn/ui's cn utility).
 * @param {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return clsx(inputs)
}

/**
 * Stagger animation delay for lists.
 * @param {number} index
 * @param {number} [base=100] — ms per step
 * @returns {{ animationDelay: string }}
 */
export function staggerDelay(index, base = 100) {
  return { animationDelay: `${index * base}ms` }
}

/**
 * Format a number with comma separators.
 * @param {number} n
 * @returns {string}
 */
export function formatNumber(n) {
  return new Intl.NumberFormat('en-US').format(n)
}

/**
 * Truncate text to a max length.
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(text, maxLength = 120) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '…'
}

/**
 * Scroll smoothly to an element by id.
 * @param {string} id
 * @param {number} [offset=80] — navbar height offset
 */
export function scrollToSection(id, offset = 80) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

// ── Site-wide constants ──────────────────────────────────────────
export const SITE_NAME    = 'Nexus Agency'
export const SITE_TAGLINE = 'Building what comes next.'
export const SITE_EMAIL   = 'hello@nexusagency.co'
export const SITE_PHONE   = '+1 (555) 000-0000'
export const SITE_ADDRESS = '123 Innovation Drive, San Francisco, CA 94105'

export const SOCIAL_LINKS = {
  twitter:   'https://twitter.com',
  linkedin:  'https://linkedin.com',
  github:    'https://github.com',
  dribbble:  'https://dribbble.com',
}

export const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Services',  href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing',   href: '/pricing' },
  { label: 'Contact',   href: '/contact' },
]
