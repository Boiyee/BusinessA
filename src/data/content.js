// ── Site Content Data ────────────────────────────────────────────
// All content is driven from here — swap text/images without
// touching component files.

// ── Stats ────────────────────────────────────────────────────────
export const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 12, suffix: 'yr', label: 'Years of Experience' },
  { value: 40, suffix: '+', label: 'Team Members' },
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
    features: [
      'UX / UI design',
      'React development',
      'CMS integration',
      'Performance optimisation',
    ],
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
    // Case study details
    challenge:
      'Meridian Finance needed a modern platform to compete with legacy fintech providers while handling complex real-time transactions and portfolio management.',
    solution:
      'We designed and built a React-based dashboard with real-time data synchronization, advanced charting, and a frictionless UX built with accessibility as a priority.',
    results: [
      { metric: '3.2M', description: 'Daily active transactions' },
      { metric: '98.7%', description: 'Uptime achieved' },
      { metric: '340%', description: 'Increase in engagement' },
    ],
    testimonialQuote:
      "Nexus transformed our product completely. The team's strategic thinking and technical execution are in a league of their own.",
    testimonialAuthor: 'Sarah Chen',
    testimonialRole: 'CEO, Meridian Finance',
    technologies: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis'],
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
    challenge:
      'Healthcare apps face adoption challenges due to complex UX. Bloom needed an app that felt intuitive while securely handling sensitive health data.',
    solution:
      'We created a delightful React Native app with HIPAA compliance, biometric authentication, and an AI-powered insights engine that turns raw health data into actionable recommendations.',
    results: [
      { metric: '200K+', description: 'Active users' },
      { metric: '4.8★', description: 'App Store rating' },
      { metric: '68%', description: 'Daily active users' },
    ],
    testimonialQuote:
      "From the first discovery call to launch day, the communication was exceptional. They don't just execute briefs — they challenge your thinking and help you arrive at better solutions.",
    testimonialAuthor: 'Amara Osei',
    testimonialRole: 'Founder, Bloom Health',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'TensorFlow Lite', 'Swift'],
  },
  {
    id: 3,
    title: 'Crest Retail',
    category: 'Brand Strategy',
    tags: ['E-commerce', 'Branding', 'Growth'],
    description: 'Complete brand overhaul that drove 240% increase in online revenue.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    year: 2023,
    challenge:
      'Crest Retail was losing market share to newer D2C competitors with stronger brand positioning. Their identity felt dated and disconnected from customers.',
    solution:
      'We conducted comprehensive brand research, redefined their positioning, created a modern visual identity, and supported launch with integrated marketing campaigns across all touchpoints.',
    results: [
      { metric: '240%', description: 'Revenue increase (first year)' },
      { metric: '89%', description: 'Brand recall improvement' },
      { metric: '156K', description: 'New customers acquired' },
    ],
    testimonialQuote:
      'Our new brand identity has been a game-changer. Customer recognition is up and our team finally feels proud to share our materials.',
    testimonialAuthor: 'David Park',
    testimonialRole: 'VP Marketing, Crest Retail',
    technologies: ['Figma', 'Webflow', 'Klaviyo', 'Shopify Plus'],
  },
  {
    id: 4,
    title: 'Apex Logistics',
    category: 'Web Design',
    tags: ['SaaS', 'Dashboard', 'B2B'],
    description: 'Supply chain visualisation platform used by 500+ enterprises globally.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    year: 2023,
    challenge:
      'Logistics operators needed real-time visibility into complex multierror supply chains, but existing tools were clunky and required extensive training.',
    solution:
      'We built an elegant, intuitive SaaS platform with real-time tracking, intelligent alerting, and predictive analytics powered by machine learning algorithms.',
    results: [
      { metric: '500+', description: 'Enterprise customers' },
      { metric: '10M+', description: 'Data points processed daily' },
      { metric: '35%', description: 'Operational cost reduction (avg)' },
    ],
    testimonialQuote:
      'The platform handles over 10 million data points daily without breaking a sweat. Their attention to performance and scalability was exactly what we needed.',
    testimonialAuthor: 'Marcus Johnson',
    testimonialRole: 'CTO, Apex Logistics',
    technologies: ['React', 'Python', 'Kubernetes', 'Apache Kafka', 'TimescaleDB'],
  },
  {
    id: 5,
    title: 'Verdant Foods',
    category: 'Brand Strategy',
    tags: ['FMCG', 'Packaging', 'Campaign'],
    description: 'Sustainable food brand identity and national launch campaign.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
    year: 2023,
    challenge:
      'New sustainable food brand needed to differentiate in a crowded market while balancing premium positioning with mass-market appeal.',
    solution:
      'Strategy-first approach: defined core values, created distinctive visual identity, designed packaging system, and orchestrated integrated launch across retail, digital, and content channels.',
    results: [
      { metric: '2,400+', description: 'Retail locations (6 months)' },
      { metric: '78%', description: 'Brand awareness (target demographic)' },
      { metric: '12M', description: 'Impressions (campaign)' },
    ],
    testimonialQuote:
      'Worth every penny of the investment. Verdant is now our flagship sustainable brand.',
    testimonialAuthor: 'Lisa Rodriguez',
    testimonialRole: 'CMO, Verdant Foods',
    technologies: ['Figma', 'Adobe Suite', 'Mailchimp', 'Shopify'],
  },
  {
    id: 6,
    title: 'Orbit EdTech',
    category: 'Mobile App',
    tags: ['Education', 'Gamification', 'iOS'],
    description: 'Interactive learning platform with 200K+ active student users.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    year: 2024,
    challenge:
      'EdTech platforms struggle with low engagement and retention. Orbit needed to make learning addictive without compromising educational integrity.',
    solution:
      'We designed and built an iOS-first app with sophisticated gamification mechanics, adaptive learning paths powered by AI, and peer social features that drive organic growth.',
    results: [
      { metric: '200K+', description: 'Active student users' },
      { metric: '4.9★', description: 'App Store rating' },
      { metric: '47min', description: 'Avg daily session time' },
    ],
    testimonialQuote:
      'The engagement metrics have exceeded all our projections. Students are learning faster than ever.',
    testimonialAuthor: 'Dr. Elena Volkov',
    testimonialRole: 'CEO, Orbit EdTech',
    technologies: ['React Native', 'Python', 'GraphQL', 'Firebase ML Kit'],
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
      "Nexus transformed our product completely. The team's strategic thinking and technical execution are in a league of their own. We saw a 3× increase in user engagement within the first quarter.",
    rating: 5,
    company: 'Meridian Finance',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    hasVideo: true,
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
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    hasVideo: true,
  },
  {
    id: 3,
    name: 'Amara Osei',
    role: 'Founder, Bloom Health',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80',
    quote:
      "From the first discovery call to launch day, the communication was exceptional. They don't just execute briefs — they challenge your thinking and help you arrive at better solutions.",
    rating: 5,
    company: 'Bloom Health',
    hasVideo: false,
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
    hasVideo: false,
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

// ── Pricing Plans ────────────────────────────────────────────────
export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    description: 'Perfect for small projects and MVPs.',
    price: 5000,
    period: 'project',
    featured: false,
    features: [
      'Up to 3 pages',
      'Responsive design',
      'Basic SEO optimisation',
      'Mobile-first approach',
      '2 weeks development',
      'Email support',
    ],
    cta: 'Get Started',
    icon: 'Rocket',
  },
  {
    id: 2,
    name: 'Professional',
    description: 'For established businesses scaling online.',
    price: 12500,
    period: 'project',
    featured: true,
    features: [
      'Up to 10 pages',
      'E-commerce integration',
      'Advanced SEO & analytics',
      'CMS integration',
      'API integrations',
      '4-6 weeks development',
      'Priority phone & email support',
      '3 months free support',
    ],
    cta: 'Start Project',
    icon: 'Star',
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'Custom solutions for complex needs.',
    price: null,
    period: 'custom',
    featured: false,
    features: [
      'Unlimited pages & features',
      'Custom integrations',
      'Real-time analytics dashboard',
      'Dedicated project manager',
      'Advanced security features',
      'Performance optimisation',
      '24/7 priority support',
      'Ongoing maintenance & updates',
    ],
    cta: 'Get Quote',
    icon: 'Zap',
  },
]
