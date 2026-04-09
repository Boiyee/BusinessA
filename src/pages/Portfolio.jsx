import PageTransition from '@components/common/PageTransition'
import { useSEO } from '@hooks/useSEO'
import { useState } from 'react'
import { ExternalLink, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHero from '@components/common/PageHero'
import CTABandSection from '@components/sections/CTABandSection'
import Badge from '@components/common/Badge'
import Button from '@components/common/Button'
import SectionTitle from '@components/common/SectionTitle'
import { useInView } from '@hooks/useInView'
import { portfolioItems, portfolioCategories, testimonials } from '@data/content'
import { cn, staggerDelay } from '@utils/helpers'
import { Link } from 'react-router-dom'

// ── Lightbox modal ───────────────────────────────────────────────
function Lightbox({ item, onClose, onPrev, onNext }) {
  if (!item) return null
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden max-w-4xl w-full shadow-soft-xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="md:w-3/5 h-60 md:h-auto relative overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
          <Badge className="absolute top-4 left-4">{item.category}</Badge>
        </div>
        {/* Info */}
        <div className="flex-1 p-8 overflow-y-auto flex flex-col">
          <button onClick={onClose} className="self-end mb-6 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <X size={16} />
          </button>
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map(t => <Badge key={t} variant="brand">{t}</Badge>)}
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl font-semibold mb-3">{item.title}</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{item.description}</p>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">{item.year}</span>
            <Link to={`/portfolio/${item.id}`} onClick={onClose}>
              <Button size="sm" rightIcon={<ArrowRight size={14} />}>View Full Case Study</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Prev / Next */}
      <button onClick={(e) => { e.stopPropagation(); onPrev() }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext() }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

// ── Portfolio card ────────────────────────────────────────────────
function PortfolioCard({ item, index, onClick }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={staggerDelay(index, 70)}
      onClick={() => onClick(item)}
      className={cn(
        'group relative overflow-hidden rounded-2xl cursor-pointer bg-slate-100 dark:bg-slate-800 opacity-0 translate-y-5 transition-all duration-700',
        inView && 'opacity-100 translate-y-0'
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {item.tags.map(t => <span key={t} className="text-2xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white">{t}</span>)}
        </div>
        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
        <p className="text-slate-300 text-sm mt-1 line-clamp-2">{item.description}</p>
        <span className="inline-flex items-center gap-1.5 mt-3 text-brand-400 text-xs font-semibold">
          <ExternalLink size={13} /> View details
        </span>
      </div>
      <div className="absolute top-4 left-4">
        <Badge className="text-2xs shadow-soft">{item.category}</Badge>
      </div>
      <span className="absolute top-4 right-4 text-xs text-white/70 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">{item.year}</span>
    </div>
  )
}

// ── Featured projects (large cards) ──────────────────────────────
function FeaturedCard({ item, index, onClick, reverse }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={staggerDelay(index, 100)}
      onClick={() => onClick(item)}
      className={cn(
        'group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800 shadow-soft hover:shadow-soft-xl transition-all duration-500 opacity-0 translate-y-5',
        inView && 'opacity-100 translate-y-0',
        reverse && 'md:[&>*:first-child]:order-2'
      )}
    >
      <div className="h-64 md:h-auto overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>{item.category}</Badge>
          {item.tags.slice(0, 2).map(t => <Badge key={t} variant="brand">{t}</Badge>)}
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">{item.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{item.description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 group-hover:gap-4 transition-all duration-200">
          View case study <ArrowRight size={16} />
        </span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  useSEO({
    title: 'Portfolio',
    description: '150+ projects delivered — browse our case studies in web design, mobile apps, brand strategy, and more.',
    keywords: ['agency portfolio', 'case studies', 'web design portfolio'],
  })
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const featured = portfolioItems.filter(i => i.featured)
  const filtered = active === 'All' ? portfolioItems : portfolioItems.filter(i => i.category === active)
  const selectedIndex = selected ? portfolioItems.findIndex(i => i.id === selected.id) : -1

  const openItem = (item) => setSelected(item)
  const closeItem = () => setSelected(null)
  const prevItem = () => {
    const newIdx = (selectedIndex - 1 + portfolioItems.length) % portfolioItems.length
    setSelected(portfolioItems[newIdx])
  }
  const nextItem = () => {
    const newIdx = (selectedIndex + 1) % portfolioItems.length
    setSelected(portfolioItems[newIdx])
  }

  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title={<>Work we're <span className="font-display italic text-brand-300">proud</span> to show</>}
        subtitle="150+ projects delivered across fintech, health, retail, logistics, education, and more."
      />

      {/* Featured projects */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle eyebrow="Featured work" title={<>Highlighted <span className="text-gradient italic">case studies</span></>} className="mb-12" />
          <div className="space-y-6">
            {featured.slice(0, 2).map((item, i) => (
              <FeaturedCard key={item.id} item={item} index={i} onClick={openItem} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* All projects grid with filter */}
      <section className="section-padding bg-section-alt dark:bg-slate-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <SectionTitle eyebrow="All projects" title="Full collection" align="left" className="mb-0" />
            <div className="flex flex-wrap gap-2">
              {portfolioCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                    active === cat
                      ? 'bg-brand-500 text-white shadow-brand'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} onClick={openItem} />
            ))}
          </div>
        </div>
      </section>

      <CTABandSection />

      {/* Lightbox */}
      {selected && (
        <Lightbox item={selected} onClose={closeItem} onPrev={prevItem} onNext={nextItem} />
      )}
    </>
  )
}
