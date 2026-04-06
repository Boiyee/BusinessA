import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SkipNav from '@components/common/SkipNav'
import { useAnalytics } from '@hooks/useAnalytics'
import ScrollToTop from '@components/common/ScrollToTop'

export default function Layout() {
  const { pathname } = useLocation()
  useAnalytics()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen theme-transition">
      {/* Accessibility: skip to main content for keyboard users */}
      <SkipNav targetId="main-content" />

      <Navbar />

      {/* main landmark with id for SkipNav target */}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </div>
  )
}
