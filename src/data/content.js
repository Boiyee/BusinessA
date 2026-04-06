// ── Site Content Data ────────────────────────────────────────────
// All content is driven from here — swap text/images without
// touching component files.

// ── Stats ────────────────────────────────────────────────────────
export const stats = [
  { value: 150,  suffix: '+',  label: 'Projects Delivered' },
  { value: 98,   suffix: '%',  label: 'Client Satisfaction' },
  { value: 12,   suffix: 'yr', label: 'Years of Experience' },
  { value: 40,   suffix: '+',  label: 'Team Members' },
]

// ── Services ─────────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    icon: 'Layers',
    title: 'Brand Strategy',
    description:
      'We craft compelling brand identities that resonate with your audience and differentiate you in the market.',
    features: ['Brand audits', 'Visual identity', 'Messaging frameworks', 'Brand guidelines'],
    color: 'brand',
  },
  {
    id: 2,
    icon: 'Monitor',
    title: 'Web Design & Dev',
    description:
      'Pixel-perfect, performant websites and applications built with modern technologies that scale.',
    features: ['UX / UI design', 'React development', 'CMS integration', 'Performance optimisation'],
    color: 'teal',
  },
  {
    id: 3,
    icon: 'TrendingUp',
    title: 'Growth Marketing',
    description:
      'Data-driven marketing strategies that attract qualified leads and accelerate sustainable growth.',
    features: ['SEO & content', 'Paid media', 'Email campaigns', 'Analytics & CRO'],
    color: 'amber',
  },
  {
    id: 4,
    icon: 'Smartphone',
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile experiences that delight users and drive business outcomes.',
    features: ['iOS & Android', 'React Native', 'App Store optimisation', 'User testing'],
    color: 'rose',
  },
  {
    id: 5,
    icon: 'Shield',
    title: 'Consulting',
    description:
      'Strategic guidance from seasoned experts to help you navigate complex decisions with confidence.',
    features: ['Technology audits', 'Digital transformation', 'Team workshops', 'Roadmapping'],
    color: 'purple',
  },
  {
    id: 6,
    icon: 'Zap',
    title: 'AI Integration',
    description:
      'Harness the power of artificial intelligence to automate workflows and unlock new capabilities.',
    features: ['AI strategy', 'LLM integration', 'Automation', 'Custom model fine-tuning'],
    color: 'cyan',
  },
]

// ── Portfolio ────────────────────────────────────────────────────
export const portfolioItems = [
  {
    id: 1,
    title: 'Meridian Finance',
    category: 'Web Design',
    tags: ['Fintech', 'React', 'Dashboard'],
    description: 'A comprehensive wealth management platform with real-time analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    year: 2024,
    featured: true,
  },
  {
    id: 2,
    title: 'Bloom Health',
    category: 'Mobile App',
    tags: ['Healthcare', 'React Native', 'UX'],
    description: 'Patient-centred health tracking app with AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    year: 2024,
    featured: true,
  },
  {
    id: 3,
    title: 'Crest Retail',
    category: 'Brand Strategy',
    tags: ['E-commerce', 'Branding', 'Growth'],
    description: 'Complete brand overhaul that drove 240% increase in online revenue.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    year: 2023,
    featured: false,
  },
  {
    id: 4,
    title: 'Apex Logistics',
    category: 'Web Design',
    tags: ['SaaS', 'Dashboard', 'B2B'],
    description: 'Supply chain visualisation platform used by 500+ enterprises globally.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    year: 2023,
    featured: true,
  },
  {
    id: 5,
    title: 'Verdant Foods',
    category: 'Brand Strategy',
    tags: ['FMCG', 'Packaging', 'Campaign'],
    description: 'Sustainable food brand identity and national launch campaign.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
    year: 2023,
    featured: false,
  },
  {
    id: 6,
    title: 'Orbit EdTech',
    category: 'Mobile App',
    tags: ['Education', 'Gamification', 'iOS'],
    description: 'Interactive learning platform with 200K+ active student users.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    year: 2024,
    featured: false,
  },
]

export const portfolioCategories = ['All', 'Web Design', 'Mobile App', 'Brand Strategy']

// ── Testimonials ─────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO, Meridian Finance',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    quote:
      'Nexus transformed our product completely. The team's strategic thinking and technical execution are in a league of their own. We saw a 3× increase in user engagement within the first quarter.',
    rating: 5,
    company: 'Meridian Finance',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'CTO, Apex Logistics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote:
      'The platform they built handles over 10 million data points daily without breaking a sweat. Their attention to performance and scalability was exactly what we needed for our enterprise clients.',
    rating: 5,
    company: 'Apex Logistics',
  },
  {
    id: 3,
    name: 'Amara Osei',
    role: 'Founder, Bloom Health',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80',
    quote:
      'From the first discovery call to launch day, the communication was exceptional. They don't just execute briefs — they challenge your thinking and help you arrive at better solutions.',
    rating: 5,
    company: 'Bloom Health',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'VP Marketing, Crest Retail',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    quote:
      'Our new brand identity has been a complete game-changer. Customer recognition is up and our team finally feels proud to share our materials. Worth every penny of the investment.',
    rating: 5,
    company: 'Crest Retail',
  },
]

// ── Team ─────────────────────────────────────────────────────────
export const team = [
  {
    id: 1,
    name: 'Alexandra Moore',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: '15 years building digital products for Fortune 500s and fast-growing startups alike.',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'James Okafor',
    role: 'Head of Design',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Award-winning designer with a passion for human-centred experiences that convert.',
    social: { linkedin: '#', dribbble: '#' },
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Engineering Lead',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    bio: 'Full-stack architect specialising in React ecosystems and cloud-native infrastructure.',
    social: { linkedin: '#', github: '#' },
  },
  {
    id: 4,
    name: 'Leo Tanaka',
    role: 'Growth Director',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bio: 'Data-obsessed marketer who has scaled campaigns from zero to eight-figure budgets.',
    social: { linkedin: '#', twitter: '#' },
  },
]
