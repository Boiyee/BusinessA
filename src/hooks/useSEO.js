import { useEffect } from 'react'

const SITE_NAME  = 'Nexus Agency'
const SITE_URL   = import.meta.env.VITE_SITE_URL || 'https://nexusagency.co'
const DEFAULT_OG = `${SITE_URL}/og-image.jpg`

/**
 * useSEO — sets document <title>, meta description, and Open Graph tags.
 *
 * @param {object} options
 * @param {string} options.title       — page title (appended with site name)
 * @param {string} options.description — meta description (150–160 chars ideal)
 * @param {string} [options.image]     — absolute URL for OG image
 * @param {string} [options.url]       — canonical URL (defaults to current href)
 * @param {string} [options.type]      — OG type: 'website' | 'article'
 * @param {string[]} [options.keywords]— meta keywords
 */
export function useSEO({
  title,
  description,
  image = DEFAULT_OG,
  url,
  type = 'website',
  keywords = [],
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
    const canonical = url || window.location.href

    // ── Title ──────────────────────────────────────────────────
    document.title = fullTitle

    // ── Helper ─────────────────────────────────────────────────
    const setMeta = (selector, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const attr = selector.includes('[property') ? 'property' : 'name'
        const key  = selector.match(/["']([^"']+)["']/)?.[1]
        if (key) el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // ── Standard meta ──────────────────────────────────────────
    if (description) setMeta('meta[name="description"]', description)
    if (keywords.length) setMeta('meta[name="keywords"]', keywords.join(', '))

    // ── Canonical ──────────────────────────────────────────────
    setLink('canonical', canonical)

    // ── Open Graph ─────────────────────────────────────────────
    setMeta('meta[property="og:title"]',       fullTitle)
    setMeta('meta[property="og:description"]', description || '')
    setMeta('meta[property="og:image"]',       image)
    setMeta('meta[property="og:url"]',         canonical)
    setMeta('meta[property="og:type"]',        type)
    setMeta('meta[property="og:site_name"]',   SITE_NAME)

    // ── Twitter Card ───────────────────────────────────────────
    setMeta('meta[name="twitter:card"]',        'summary_large_image')
    setMeta('meta[name="twitter:title"]',       fullTitle)
    setMeta('meta[name="twitter:description"]', description || '')
    setMeta('meta[name="twitter:image"]',       image)
  }, [title, description, image, url, type, keywords])
}
