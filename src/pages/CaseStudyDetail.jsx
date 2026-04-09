import PageTransition from '@components/common/PageTransition'
import { useSEO } from '@hooks/useSEO'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Globe, Users, TrendingUp } from 'lucide-react'
import PageHero from '@components/common/PageHero'
import CTABandSection from '@components/sections/CTABandSection'
import Badge from '@components/common/Badge'
import Button from '@components/common/Button'
import ScrollReveal from '@components/common/ScrollReveal'
import { portfolioItems } from '@data/content'
import { motion } from 'framer-motion'

export default function CaseStudyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const caseStudy = portfolioItems.find((item) => item.id === parseInt(id))
  
  if (!caseStudy) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Link to="/portfolio">
            <Button leftIcon={<ArrowLeft size={16} />}>Back to Portfolio</Button>
          </Link>
        </div>
      </PageTransition>
    )
  }

  useSEO({
    title: `${caseStudy.title} — Case Study | Nexus Agency`,
    description: caseStudy.challenge,
    keywords: [...caseStudy.tags, 'case study', 'web design', 'branding'],
  })

  const relatedProjects = portfolioItems
    .filter((item) => item.id !== caseStudy.id)
    .slice(0, 2)

  return (
    <PageTransition>
      {/* Hero with image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-6 left-6">
          <button
            onClick={() => navigate('/portfolio')}
            className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-white"
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>
        </div>
      </div>

      {/* Header */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>{caseStudy.category}</Badge>
                {caseStudy.tags.map((tag) => (
                  <Badge key={tag} variant="brand">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                {caseStudy.title}
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {caseStudy.description}
              </p>

              <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div>
                  <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Project Year
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {caseStudy.year}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Duration
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {caseStudy.challenge?.includes('4-6') ? '4-6 weeks' : '8-12 weeks'}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                <span className="text-brand-500">The Challenge</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                <span className="text-brand-500">Our Solution</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              The Results
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Measurable impact and tangible outcomes that matter.
            </p>
          </ScrollReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {caseStudy.results?.map((result, idx) => (
              <div key={idx} className="card text-center p-8">
                <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                  {result.metric}
                </div>
                <p className="text-slate-600 dark:text-slate-400">{result.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
              {caseStudy.technologies?.map((tech) => (
                <Badge key={tech} variant="outline" className="px-4 py-2 text-base">
                  {tech}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonialQuote && (
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-50 to-slate-50 dark:from-brand-900/20 dark:to-slate-800 rounded-3xl p-12 border border-brand-200 dark:border-brand-800">
                <blockquote className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 italic">
                  "{caseStudy.testimonialQuote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {caseStudy.testimonialAuthor}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {caseStudy.testimonialRole}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <ScrollReveal className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              More Case Studies
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedProjects.map((project) => (
              <Link key={project.id} to={`/portfolio/${project.id}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <Badge className="mb-3 w-fit">{project.category}</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-brand-400 text-sm font-semibold">
                      View Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABandSection />
    </PageTransition>
  )
}
