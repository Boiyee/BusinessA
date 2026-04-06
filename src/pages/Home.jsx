import PageTransition from '@components/common/PageTransition'
import { useSEO } from '@hooks/useSEO'
import HeroSection         from '@components/sections/HeroSection'
import ServicesSection     from '@components/sections/ServicesSection'
import PortfolioSection    from '@components/sections/PortfolioSection'
import TestimonialsSection from '@components/sections/TestimonialsSection'
import TeamSection         from '@components/sections/TeamSection'
import CTABandSection      from '@components/sections/CTABandSection'

export default function Home() {
  useSEO({
    title: 'Strategy, Design & Technology',
    description: 'Nexus Agency — We build brands that move markets. Full-service digital agency combining strategy, design, and engineering.',
    keywords: ['digital agency', 'brand strategy', 'web design', 'product design'],
  })
  return (
    <PageTransition>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TeamSection />
      <CTABandSection />
    </PageTransition>
  )
}
