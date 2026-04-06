import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useScrollPosition } from '@hooks/useScrollPosition'
import { useTheme } from '@context/ThemeContext'
import { NAV_LINKS, SITE_NAME } from '@utils/helpers'
import { ease } from '@utils/motion'

const navbarVariants = {
  hidden:  { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: ease.outExpo, delay: 0.1 } },
}
const linkStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
}
const linkItem = {
  hidden:  { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: ease.outExpo } },
}
const mobileMenuVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.35, ease: ease.outExpo } },
  exit:    { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } },
}
const mobileLinkStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}
const mobileLinkItem = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: ease.outExpo } },
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition(60)
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-soft border-b border-slate-200/60 dark:border-slate-800/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-xl text-white hover:text-brand-300 transition-colors" aria-label="Home">
          {SITE_NAME}
        </Link>

        <motion.ul variants={linkStagger} initial="hidden" animate="visible" className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(link => (
            <motion.li key={link.href} variants={linkItem}>
              <NavLink
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) => `relative text-sm font-medium transition-colors duration-200 ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex items-center gap-3">
          <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} onClick={toggleTheme}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={18} />
                </motion.span>
              ) : (
                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="hidden md:block">
            <Link to="/contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition-colors shadow-brand">
              Get in touch
            </Link>
          </motion.div>

          <motion.button whileTap={{ scale: 0.9 }} className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(o => !o)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div key="mobile-menu" variants={mobileMenuVariants} initial="hidden" animate="visible" exit="exit"
            className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800">
            <motion.div variants={mobileLinkStagger} initial="hidden" animate="visible" className="px-6 py-5 space-y-1">
              {NAV_LINKS.map(link => (
                <motion.div key={link.href} variants={mobileLinkItem}>
                  <NavLink to={link.href} end={link.href === '/'} onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => `flex items-center gap-2 py-3 px-3 rounded-xl text-base font-medium transition-colors ${isActive ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                    {({ isActive }) => (<>{isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />}{link.label}</>)}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={mobileLinkItem} className="pt-2">
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-center px-5 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors">
                  Get in touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
