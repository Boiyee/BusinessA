import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from '@components/layout/Layout'
import ErrorBoundary from '@components/common/ErrorBoundary'

// Lazy-load pages for code splitting
const Home              = lazy(() => import('@pages/Home'))
const About             = lazy(() => import('@pages/About'))
const Services          = lazy(() => import('@pages/Services'))
const Portfolio         = lazy(() => import('@pages/Portfolio'))
const Pricing           = lazy(() => import('@pages/Pricing'))
const CaseStudyDetail   = lazy(() => import('@pages/CaseStudyDetail'))
const Contact           = lazy(() => import('@pages/Contact'))
const NotFound          = lazy(() => import('@pages/NotFound'))

// Simple full-screen spinner shown during page chunk load
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
    </div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route element={<Layout />}>
              <Route path="/"              element={<Home />} />
              <Route path="/about"         element={<About />} />
              <Route path="/services"      element={<Services />} />
              <Route path="/portfolio"     element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<CaseStudyDetail />} />
              <Route path="/pricing"       element={<Pricing />} />
              <Route path="/contact"       element={<Contact />} />
              <Route path="*"              element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </ErrorBoundary>
  )
}
