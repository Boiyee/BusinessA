import { useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@components/common/SectionTitle'
import ScrollReveal from '@components/common/ScrollReveal'
import Badge from '@components/common/Badge'
import Button from '@components/common/Button'
import { portfolioItems, portfolioCategories } from '@data/content'
import { cn } from '@utils/helpers'
import { staggerContainer, staggerItem, ease } from '@utils/motion'

export default function PortfolioSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === active)

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <ScrollReveal className="mb-12">
          <SectionTitle
            eyebrow="Our work"
            title={<>Proof is in the <span className="text-gradient italic">portfolio</span></>}
            subtitle="A selection of projects we are proud of — shaped by collaboration, craft, and results."
          />
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {portfolioCategories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200',
                  active === cat
                    ? 'bg-brand-500 text-white shadow-brand'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                )}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerContainer(0.07, 0.05)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                whileHover="hover"
                className="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    variants={{ hover: { scale: 1.07 } }}
                    transition={{ duration: 0.5, ease: ease.outQuart }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <motion.div
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"
                />
                <motion.div
                  variants={{ hover: { y: 0, opacity: 1 } }}
                  initial={{ y: 12, opacity: 0 }}
                  transition={{ duration: 0.3, ease: ease.outQuart }}
                  className="absolute bottom-0 left-0 right-0 p-5"
                >
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tags.map(tag => (
                      <Badge key={tag} className="bg-white/10 text-white border-0 text-2xs">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-white font-semibold text-lg leading-snug">{item.title}</h3>
                  <p className="text-slate-300 text-sm mt-1 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <ExternalLink size={14} className="text-brand-400" />
                    <span className="text-brand-400 text-xs font-semibold">View case study</span>
                  </div>
                </motion.div>
                <div className="absolute top-4 left-4">
                  <Badge className="text-2xs font-semibold shadow-soft">{item.category}</Badge>
                </div>
                <span className="absolute top-4 right-4 text-xs text-white/70 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">{item.year}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="outline" size="lg" rightIcon={<ArrowRight size={18} />}>
              View all projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
