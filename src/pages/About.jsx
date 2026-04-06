import PageTransition from '@components/common/PageTransition'
import { useSEO } from '@hooks/useSEO'
import { ArrowRight, Heart, Lightbulb, Users, Target, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '@components/common/PageHero'
import SectionTitle from '@components/common/SectionTitle'
import TeamSection from '@components/sections/TeamSection'
import CTABandSection from '@components/sections/CTABandSection'
import AnimatedCounter from '@components/common/AnimatedCounter'
import Button from '@components/common/Button'
import { useInView } from '@hooks/useInView'
import { stats } from '@data/content'
import { cn, staggerDelay } from '@utils/helpers'

const values = [
  { icon: Heart,      title: 'Client obsession',     description: 'We measure success by your results, not our deliverables. Every decision runs through the lens of what\'s best for your business.' },
  { icon: Lightbulb,  title: 'Relentless curiosity',  description: 'We stay uncomfortable on purpose — constantly learning new tools, methods, and perspectives to bring fresh thinking to every brief.' },
  { icon: Users,      title: 'Radical transparency',  description: 'No surprises, no spin. We communicate openly about timelines, costs, and challenges because great partnerships are built on trust.' },
  { icon: Target,     title: 'Craft over shortcuts',  description: 'We sweat the details others skip. From pixel alignment to performance budgets, quality is not negotiable at any stage.' },
]

const milestones = [
  { year: '2012', title: 'Founded',           body: 'Started as a two-person design studio in San Francisco with a single client and a big vision.' },
  { year: '2015', title: 'First scale-up',    body: 'Grew to 15 people and launched our first enterprise product, serving clients across North America.' },
  { year: '2018', title: 'Global expansion',  body: 'Opened offices in London and Singapore, extending our reach to Fortune 500 clients worldwide.' },
  { year: '2021', title: 'Agency of the Year', body: 'Named Webby Agency of the Year — recognition of the team\'s dedication to craft and client outcomes.' },
  { year: '2024', title: 'AI practice launch', body: 'Launched a dedicated AI integration practice to help clients harness LLMs and automation at scale.' },
]

function MissionSection() {
  const [ref, inView] = useInView()
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div ref={ref} className={cn('grid grid-cols-1 lg:grid-cols-2 gap-16 items-center opacity-0 translate-y-5 transition-all duration-700', inView && 'opacity-100 translate-y-0')}>
          <div>
            <span className="eyebrow mb-4 flex items-center gap-2"><span className="w-6 h-px bg-brand-500" /> Our mission</span>
            <h2 className="text-slate-900 dark:text-white text-balance mb-6">
              We exist to make <span className="text-gradient italic">ambitious ideas</span> real
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-6">
              Nexus was built on the belief that great strategy, honest craft, and genuine collaboration produce work that actually moves businesses forward. We are not in the business of beautiful deliverables for their own sake — we are in the business of outcomes.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Whether you are a venture-backed startup launching your first product or an established brand re-imagining what you stand for, we bring the same level of care, rigour, and creative ambition to every engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Human-centred', 'Data-informed', 'Results-driven'].map(tag => (
                <span key={tag} className="flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                  <CheckCircle size={15} /> {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-[420px]">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80" alt="Team collaborating" className="absolute top-0 right-0 w-3/4 h-64 object-cover rounded-2xl shadow-soft-xl" />
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80" alt="Office environment" className="absolute bottom-0 left-0 w-2/3 h-52 object-cover rounded-2xl shadow-soft-xl ring-4 ring-white dark:ring-slate-900" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white rounded-2xl px-5 py-4 text-center shadow-brand-lg z-10">
              <div className="text-3xl font-display font-bold"><AnimatedCounter target={12} suffix="yr" /></div>
              <div className="text-xs font-medium opacity-80 mt-1">of excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const [ref, inView] = useInView()
  return (
    <section className="py-16 bg-brand-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div ref={ref} className={cn('container-custom relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 translate-y-4 transition-all duration-700', inView && 'opacity-100 translate-y-0')}>
        {stats.map((stat, i) => (
          <div key={stat.label} style={staggerDelay(i, 100)} className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-brand-200 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ValuesSection() {
  const [titleRef, titleInView] = useInView()
  return (
    <section className="section-padding bg-section-alt dark:bg-slate-900">
      <div className="container-custom">
        <div ref={titleRef} className={cn('mb-14 opacity-0 translate-y-4 transition-all duration-700', titleInView && 'opacity-100 translate-y-0')}>
          <SectionTitle eyebrow="What we believe" title={<>The principles that <span className="text-gradient italic">guide us</span></>} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, i) => {
            const [ref, inView] = useInView()
            const Icon = val.icon
            return (
              <div key={val.title} ref={ref} style={staggerDelay(i, 100)} className={cn('card flex gap-5 items-start opacity-0 translate-y-5 transition-all duration-700', inView && 'opacity-100 translate-y-0')}>
                <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-brand-500" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{val.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  const [titleRef, titleInView] = useInView()
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div ref={titleRef} className={cn('mb-14 opacity-0 translate-y-4 transition-all duration-700', titleInView && 'opacity-100 translate-y-0')}>
          <SectionTitle eyebrow="Our story" title={<>Built over a <span className="text-gradient italic">decade</span> of work</>} />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2" />
          <div className="space-y-10">
            {milestones.map((m, i) => {
              const [ref, inView] = useInView()
              const isLeft = i % 2 === 0
              return (
                <div key={m.year} ref={ref} style={staggerDelay(i, 80)} className={cn('relative flex gap-6 md:gap-0 opacity-0 translate-y-4 transition-all duration-700 md:items-center', inView && 'opacity-100 translate-y-0')}>
                  <div className={cn('hidden md:flex w-1/2 pr-10', isLeft ? 'justify-end' : 'invisible')}>
                    {isLeft && (<div className="text-right"><span className="text-xs font-bold uppercase tracking-widest text-brand-500">{m.year}</span><h4 className="text-slate-900 dark:text-white font-semibold mt-1">{m.title}</h4><p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xs">{m.body}</p></div>)}
                  </div>
                  <div className="relative z-10 shrink-0 w-9 h-9 rounded-full bg-brand-500 border-4 border-white dark:border-slate-950 flex items-center justify-center shadow-brand md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 md:w-1/2 md:pl-10">
                    <div className="md:hidden"><span className="text-xs font-bold uppercase tracking-widest text-brand-500">{m.year}</span><h4 className="text-slate-900 dark:text-white font-semibold mt-1">{m.title}</h4><p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{m.body}</p></div>
                    {!isLeft && (<div className="hidden md:block"><span className="text-xs font-bold uppercase tracking-widest text-brand-500">{m.year}</span><h4 className="text-slate-900 dark:text-white font-semibold mt-1">{m.title}</h4><p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xs">{m.body}</p></div>)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  useSEO({
    title: 'About Us',
    description: 'Meet the 40-person team behind Nexus Agency — 12 years of building exceptional digital products for ambitious brands worldwide.',
    keywords: ['about nexus agency', 'digital agency team', 'brand agency'],
  })
  return (
    <>
      <PageHero
        eyebrow="About Nexus"
        title={<>We are builders, <span className="font-display italic text-brand-300">not just makers</span></>}
        subtitle="A 40-person team of strategists, designers, engineers, and marketers united by one belief: exceptional work changes everything."
      />
      <MissionSection />
      <StatsBar />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <CTABandSection />
    </>
  )
}
