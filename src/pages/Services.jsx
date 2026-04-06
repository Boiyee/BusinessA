import PageTransition from '@components/common/PageTransition'
import { useSEO } from '@hooks/useSEO'
import { Check, ArrowRight, Layers, Monitor, TrendingUp, Smartphone, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '@components/common/PageHero'
import SectionTitle from '@components/common/SectionTitle'
import CTABandSection from '@components/sections/CTABandSection'
import Badge from '@components/common/Badge'
import Button from '@components/common/Button'
import { useInView } from '@hooks/useInView'
import { services } from '@data/content'
import { cn, staggerDelay } from '@utils/helpers'

const iconMap = { Layers, Monitor, TrendingUp, Smartphone, Shield, Zap }

const colorAccent = {
  brand:  { bg: 'bg-brand-50 dark:bg-brand-950/40',   icon: 'text-brand-500',  border: 'border-brand-200 dark:border-brand-800' },
  teal:   { bg: 'bg-teal-50 dark:bg-teal-950/40',     icon: 'text-teal-500',   border: 'border-teal-200 dark:border-teal-800' },
  amber:  { bg: 'bg-amber-50 dark:bg-amber-950/40',   icon: 'text-amber-500',  border: 'border-amber-200 dark:border-amber-800' },
  rose:   { bg: 'bg-rose-50 dark:bg-rose-950/40',     icon: 'text-rose-500',   border: 'border-rose-200 dark:border-rose-800' },
  purple: { bg: 'bg-purple-50 dark:bg-purple-950/40', icon: 'text-purple-500', border: 'border-purple-200 dark:border-purple-800' },
  cyan:   { bg: 'bg-cyan-50 dark:bg-cyan-950/40',     icon: 'text-cyan-500',   border: 'border-cyan-200 dark:border-cyan-800' },
}

const process = [
  { step: '01', title: 'Discovery',   body: 'We listen deeply. Kick-off workshops uncover your goals, constraints, audience, and competitive landscape before we write a single line.' },
  { step: '02', title: 'Strategy',    body: 'We synthesise research into a clear strategic direction — positioning, architecture, or roadmap — that aligns your team before execution begins.' },
  { step: '03', title: 'Creation',    body: 'Designers and engineers work in lockstep, with weekly demos keeping you close to the work throughout the build.' },
  { step: '04', title: 'Launch',      body: 'We manage QA, performance testing, and go-live support so launch day feels like a celebration, not a crisis.' },
  { step: '05', title: 'Growth',      body: 'Post-launch we track metrics, run experiments, and iterate — because the best products are never finished, only improved.' },
]

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView()
  const Icon = iconMap[service.icon] ?? Zap
  const accent = colorAccent[service.color] ?? colorAccent.brand

  return (
    <div
      ref={ref}
      id={service.title.toLowerCase().replace(/\s+/g, '-')}
      style={staggerDelay(index, 80)}
      className={cn(
        'card border opacity-0 translate-y-5 transition-all duration-700',
        accent.border,
        inView && 'opacity-100 translate-y-0'
      )}
    >
      <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-5', accent.bg)}>
        <Icon size={22} className={accent.icon} />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{service.title}</h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
            <Check size={14} className={cn('shrink-0', accent.icon)} />
            {f}
          </li>
        ))}
      </ul>
      <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:gap-3 transition-all duration-200">
        Get started <ArrowRight size={14} />
      </Link>
    </div>
  )
}

function ProcessSection() {
  const [titleRef, titleInView] = useInView()
  return (
    <section className="section-padding bg-section-alt dark:bg-slate-900">
      <div className="container-custom">
        <div ref={titleRef} className={cn('mb-16 opacity-0 translate-y-4 transition-all duration-700', titleInView && 'opacity-100 translate-y-0')}>
          <SectionTitle eyebrow="How we work" title={<>A process built for <span className="text-gradient italic">clarity</span></>} subtitle="Five stages designed to minimise risk, maximise collaboration, and keep you in control from day one to launch day." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {process.map((p, i) => {
            const [ref, inView] = useInView()
            return (
              <div key={p.step} ref={ref} style={staggerDelay(i, 80)} className={cn('relative opacity-0 translate-y-5 transition-all duration-700', inView && 'opacity-100 translate-y-0')}>
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-slate-200 dark:bg-slate-700 z-0" style={{ width: 'calc(100% - 3rem)', left: '3rem' }} />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-brand-500 text-white text-sm font-bold flex items-center justify-center mb-4 shadow-brand">
                    {p.step}
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{p.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PricingNote() {
  const [ref, inView] = useInView()
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div ref={ref} className={cn('max-w-3xl mx-auto text-center opacity-0 translate-y-4 transition-all duration-700', inView && 'opacity-100 translate-y-0')}>
          <Badge variant="brand" className="mb-5">Flexible engagements</Badge>
          <h2 className="text-slate-900 dark:text-white mb-5">
            Pricing that fits your <span className="text-gradient italic">stage</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">
            We work on project, retainer, and embedded-team models. Every engagement starts with a free discovery call where we scope the work together and agree on a structure that makes sense for your budget and timeline.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Project', desc: 'Fixed scope, fixed price. Ideal for defined deliverables.' },
              { label: 'Retainer', desc: 'Ongoing partnership with a dedicated monthly allocation.' },
              { label: 'Embedded', desc: 'Our team works inside yours. Great for long-term builds.' },
            ].map(model => (
              <div key={model.label} className="card text-left">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{model.label}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{model.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/contact">
            <Button size="lg" rightIcon={<ArrowRight size={18} />}>Book a discovery call</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  useSEO({
    title: 'Our Services',
    description: 'Brand strategy, web design, mobile apps, growth marketing, AI integration and consulting — everything your business needs under one roof.',
    keywords: ['web design services', 'brand strategy', 'mobile app development', 'AI integration'],
  })
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Everything your brand needs to <span className="font-display italic text-brand-300">grow</span></>}
        subtitle="From brand strategy to AI integration — we cover every discipline your business needs under one roof."
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
      <PricingNote />
      <CTABandSection />
    </>
  )
}
