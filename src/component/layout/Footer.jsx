import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github, Dribbble, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_NAME, SITE_EMAIL, SITE_PHONE, SITE_ADDRESS, SOCIAL_LINKS, NAV_LINKS } from '@utils/helpers'

const footerServices = [
  'Brand Strategy', 'Web Design & Dev', 'Growth Marketing',
  'Mobile Apps', 'Consulting', 'AI Integration',
]

const socialIcons = {
  twitter:  Twitter,
  linkedin: Linkedin,
  github:   Github,
  dribbble: Dribbble,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Main footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display font-bold text-2xl text-white">
              {SITE_NAME}
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Building what comes next — strategy, design, and technology for ambitious brands.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {Object.entries(SOCIAL_LINKS).map(([platform, href]) => {
                const Icon = socialIcons[platform]
                return Icon ? (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ) : null
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-white transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {footerServices.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-white transition-colors link-underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="flex items-start gap-3 text-sm hover:text-white transition-colors group">
                  <Mail size={15} className="mt-0.5 shrink-0 group-hover:text-brand-400 transition-colors" />
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_PHONE}`} className="flex items-start gap-3 text-sm hover:text-white transition-colors group">
                  <Phone size={15} className="mt-0.5 shrink-0 group-hover:text-brand-400 transition-colors" />
                  {SITE_PHONE}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-slate-600" />
                  {SITE_ADDRESS}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <Link key={item} to="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
