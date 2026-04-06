import PageTransition from '@components/common/PageTransition'
import { useSEO } from '@hooks/useSEO'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, Briefcase } from 'lucide-react'
import PageHero from '@components/common/PageHero'
import Button from '@components/common/Button'
import Badge from '@components/common/Badge'
import { useInView } from '@hooks/useInView'
import { SITE_EMAIL, SITE_PHONE, SITE_ADDRESS, cn, staggerDelay } from '@utils/helpers'

const enquiryTypes = [
  { id: 'project',  label: 'New project',     icon: Briefcase },
  { id: 'retainer', label: 'Retainer',         icon: Clock },
  { id: 'consult',  label: 'Consultation',     icon: MessageSquare },
  { id: 'other',    label: 'Something else',   icon: Mail },
]

const budgets = ['Under $10k', '$10k – $30k', '$30k – $75k', '$75k – $150k', '$150k+']

const contactInfo = [
  { icon: Mail,    label: 'Email us',    value: SITE_EMAIL,   href: `mailto:${SITE_EMAIL}` },
  { icon: Phone,   label: 'Call us',     value: SITE_PHONE,   href: `tel:${SITE_PHONE}` },
  { icon: MapPin,  label: 'Visit us',    value: SITE_ADDRESS, href: '#' },
]

const faqs = [
  { q: 'How quickly do you respond?',         a: 'We respond to all enquiries within one business day. For urgent matters, call us directly.' },
  { q: 'Do you work with startups?',           a: 'Absolutely. We love early-stage work. We have flexible models to suit smaller budgets.' },
  { q: 'Where are your clients based?',        a: 'We work with clients globally. Our team is distributed across San Francisco, London, and Singapore.' },
  { q: 'Do you offer fixed-price projects?',   a: 'Yes — for clearly scoped work. We will always agree on pricing before any work begins.' },
]

// ── Contact Form ──────────────────────────────────────────────────
function ContactForm() {
  const [type, setType] = useState('project')
  const [budget, setBudget] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-brand-500" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Message received!</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-xs">
          We will be in touch within one business day. In the meantime feel free to browse our work.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Enquiry type */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          What can we help with?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {enquiryTypes.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setType(id)}
              className={cn(
                'flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold border transition-all duration-200',
                type === id
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
              )}
            >
              <Icon size={15} className="shrink-0" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { name: 'name',    label: 'Your name',    placeholder: 'Alex Johnson',       type: 'text' },
          { name: 'email',   label: 'Work email',   placeholder: 'alex@company.com',   type: 'email' },
        ].map(field => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
          </div>
        ))}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          Company <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Inc."
          value={form.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Approximate budget <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {budgets.map(b => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b === budget ? '' : b)}
              className={cn(
                'px-3 py-1.5 rounded-full text-xs font-semibold border transition-all',
                budget === b
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300'
              )}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe what you are building, your timeline, and any specific challenges you are facing..."
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
        />
      </div>

      <Button type="submit" fullWidth size="lg" loading={loading} rightIcon={<Send size={16} />}>
        Send message
      </Button>

      <p className="text-xs text-center text-slate-400">
        We typically respond within 1 business day. Your information is never shared.
      </p>
    </form>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div ref={ref} className={cn('max-w-2xl mx-auto opacity-0 translate-y-4 transition-all duration-700', inView && 'opacity-100 translate-y-0')}>
          <div className="text-center mb-10">
            <Badge variant="brand" className="mb-4">Before you write</Badge>
            <h2 className="text-slate-900 dark:text-white">Quick answers</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{faq.q}</h4>
                  <span className={cn('text-brand-500 text-xl font-light shrink-0 transition-transform duration-200', open === i && 'rotate-45')}>+</span>
                </div>
                {open === i && (
                  <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  useSEO({
    title: 'Contact Us',
    description: 'Start a project with Nexus Agency. We respond within one business day. Tell us about your goals and we will find the right path forward.',
    keywords: ['contact agency', 'hire digital agency', 'start a project'],
  })
  const [formRef, formInView] = useInView()
  const [infoRef, infoInView] = useInView()

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's start a <span className="font-display italic text-brand-300">conversation</span></>}
        subtitle="Tell us about your project and we will be back within one business day with ideas and next steps."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Form — wider column */}
            <div
              ref={formRef}
              className={cn('lg:col-span-3 card shadow-soft-lg opacity-0 translate-y-5 transition-all duration-700', formInView && 'opacity-100 translate-y-0')}
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Send us a message</h3>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div
              ref={infoRef}
              className={cn('lg:col-span-2 space-y-6 opacity-0 translate-y-5 transition-all duration-700 animation-delay-200', infoInView && 'opacity-100 translate-y-0')}
            >
              {/* Contact details */}
              <div className="card">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-5 uppercase tracking-widest">Contact details</h4>
                <ul className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <li key={label}>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">{label}</span>
                      <a href={href} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-colors group">
                        <Icon size={15} className="shrink-0 mt-0.5 text-brand-500" />
                        {value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response promise */}
              <div className="card bg-brand-50 dark:bg-brand-950/40 border-brand-200 dark:border-brand-800">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-brand-700 dark:text-brand-300 mb-1">Fast response guaranteed</h4>
                    <p className="text-xs text-brand-600 dark:text-brand-400 leading-relaxed">
                      All enquiries are answered within one business day. No auto-responders, no offshore triage — a real person from our team will reply.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office hours */}
              <div className="card">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-widest">Office hours</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM PST' },
                    { day: 'Saturday',        hours: 'By appointment' },
                    { day: 'Sunday',          hours: 'Closed' },
                  ].map(({ day, hours }) => (
                    <li key={day} className="flex justify-between gap-4">
                      <span className="text-slate-500 dark:text-slate-400">{day}</span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-right">{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
