import PageTransition from '@components/common/PageTransition'
import { useSEO } from '@hooks/useSEO'
import PageHero from '@components/common/PageHero'
import CTABandSection from '@components/sections/CTABandSection'
import ScrollReveal from '@components/common/ScrollReveal'
import Button from '@components/common/Button'
import { pricingPlans } from '@data/content'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { staggerContainer, staggerItem } from '@utils/motion'
import { Link } from 'react-router-dom'

export default function Pricing() {
  useSEO({
    title: 'Pricing Plans — Nexus Agency',
    description: 'Transparent, scalable pricing for web design, branding, and digital solutions. From startups to enterprises.',
    keywords: ['pricing', 'web design pricing', 'service packages', 'digital agency pricing'],
  })

  return (
    <PageTransition>
      <PageHero
        eyebrow="Transparent Pricing"
        title="Plans Built for Every Stage"
        subtitle="From ambitious startups to established enterprises, we have a solution tailored to your needs and budget."
      />

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal className="mb-16 text-center">
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-4">
              All plans include dedicated support, modern best practices, and transparent communication. Need something custom?
            </p>
            <Link to="/contact">
              <Button>Get a Custom Quote</Button>
            </Link>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer(0.05, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={staggerItem}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900/30 dark:to-brand-800/20 border-2 border-brand-500 shadow-2xl scale-105'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-500 text-white text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 py-6 border-y border-slate-200 dark:border-slate-700">
                  <div className="flex items-baseline gap-2">
                    {plan.price ? (
                      <>
                        <span className="text-4xl font-bold text-slate-900 dark:text-white">
                          ${plan.price.toLocaleString()}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400">
                          {plan.period === 'project' ? 'per project' : 'custom pricing'}
                        </span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-slate-900 dark:text-white">
                        Custom Quote
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-brand-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="w-full">
                  <Button
                    variant={plan.featured ? 'primary' : 'outline'}
                    rightIcon={<ArrowRight size={16} />}
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal className="mt-20 text-center">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                What&apos;s Included in Every Plan?
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-brand-500 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Strategic consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-brand-500 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Performance optimisation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-brand-500 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Mobile-first design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-brand-500 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">SEO implementation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-brand-500 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Security best practices</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-brand-500 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Analytics setup</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABandSection />
    </PageTransition>
  )
}
