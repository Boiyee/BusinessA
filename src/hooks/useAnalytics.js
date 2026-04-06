import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

// ── Script injection (runs once on app init) ─────────────────────
let injected = false
function injectGAScript() {
  if (injected || !GA_ID) return
  injected = true

  const script1 = document.createElement('script')
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script1)

  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false })
}

// ── Track a pageview ─────────────────────────────────────────────
export function trackPageView(path) {
  if (!GA_ID || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_path:  path,
    page_title: document.title,
  })
}

// ── Track a custom event ─────────────────────────────────────────
export function trackEvent(eventName, params = {}) {
  if (!GA_ID || !window.gtag) return
  window.gtag('event', eventName, params)
}

/**
 * useAnalytics — inject GA4 script and track route changes automatically.
 * Place once in App.jsx or Layout.jsx.
 */
export function useAnalytics() {
  const location = useLocation()

  // Inject GA4 script on first render
  useEffect(() => {
    injectGAScript()
  }, [])

  // Track each route change as a pageview
  useEffect(() => {
    if (!GA_ID) return
    trackPageView(location.pathname + location.search)
  }, [location])
}
