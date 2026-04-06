# Nexus Agency — Business Website Template

A production-ready, fully animated business/agency website template built with **React 18**, **Tailwind CSS**, **Framer Motion**, and **Vite**. Modern corporate aesthetic, dark/light mode, full accessibility, SEO-ready, and deployable to Vercel or Netlify in minutes.

---

## Live Preview

```
npm install && npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Tech Stack

| Layer        | Technology                          |
|--------------|--------------------------------------|
| Framework    | React 18 + Vite 5                    |
| Styling      | Tailwind CSS 3 + CSS custom properties |
| Animation    | Framer Motion 11                     |
| Routing      | React Router v6 (lazy + code-split)  |
| Icons        | Lucide React                         |
| Forms        | React Hook Form                      |
| Linting      | ESLint + jsx-a11y plugin             |
| Formatting   | Prettier                             |
| Deployment   | Vercel / Netlify (config included)   |

---

## Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### 1. Clone and install

```bash
git clone https://github.com/yourname/nexus-agency-template.git
cd nexus-agency-template
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your values:

```env
VITE_SITE_URL=http://localhost:5173
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_ID
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # optional
```

### 3. Start development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Project Structure

```
nexus-agency-template/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
│
├── src/
│   ├── App.jsx                    # Routes + AnimatePresence
│   ├── main.jsx                   # React entry point
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedCounter.jsx   # Count-up on scroll
│   │   │   ├── Badge.jsx             # Tag/label variants
│   │   │   ├── Button.jsx            # 5 variants, Framer tap feedback
│   │   │   ├── PageHero.jsx          # Inner-page dark hero banner
│   │   │   ├── PageTransition.jsx    # Fade-up page enter/exit
│   │   │   ├── ScrollReveal.jsx      # Declarative scroll animation
│   │   │   ├── ScrollToTop.jsx       # Floating scroll-to-top button
│   │   │   ├── SectionTitle.jsx      # Eyebrow + heading + subtitle
│   │   │   └── SkipNav.jsx           # Keyboard accessibility skip link
│   │   │
│   │   ├── layout/
│   │   │   ├── Layout.jsx            # Shell: Navbar + Outlet + Footer
│   │   │   ├── Navbar.jsx            # Animated sticky nav, mobile menu
│   │   │   └── Footer.jsx            # 4-column dark footer
│   │   │
│   │   └── sections/
│   │       ├── CTABandSection.jsx    # Full-width brand gradient CTA
│   │       ├── HeroSection.jsx       # Hero with stats grid
│   │       ├── PortfolioSection.jsx  # Filterable card grid
│   │       ├── ServicesSection.jsx   # 6-card services grid
│   │       ├── TeamSection.jsx       # Team member cards
│   │       └── TestimonialsSection.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx          # Dark/light mode, localStorage
│   │
│   ├── data/
│   │   └── content.js               # All site copy — edit here
│   │
│   ├── hooks/
│   │   ├── useAnalytics.js          # GA4 pageview tracking
│   │   ├── useInView.js             # IntersectionObserver hook
│   │   ├── useMediaQuery.js         # Responsive breakpoint hooks
│   │   ├── useReducedMotion.js      # Respects prefers-reduced-motion
│   │   ├── useSEO.js                # Per-page meta + OG tags
│   │   └── useScrollPosition.js    # Scroll Y + direction
│   │
│   ├── pages/
│   │   ├── About.jsx                # Mission, values, timeline, team
│   │   ├── Contact.jsx              # Form, FAQ, sidebar
│   │   ├── Home.jsx                 # Composed from all sections
│   │   ├── NotFound.jsx             # Animated 404
│   │   ├── Portfolio.jsx            # Featured + grid + lightbox
│   │   └── Services.jsx             # Cards, process, pricing
│   │
│   ├── styles/
│   │   └── global.css               # Tokens, base styles, utilities
│   │
│   └── utils/
│       ├── helpers.js               # cn(), constants, formatters
│       └── motion.js                # All Framer Motion variants
│
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---

## Customization Guide

### Brand Colors

Open `tailwind.config.js` and change the `brand` color ramp:

```js
colors: {
  brand: {
    500: '#6366f1',  // ← change this to your primary brand color
    600: '#4f46e5',  // ← hover state (slightly darker)
    // ...rest of the ramp
  }
}
```

Then update the matching CSS variable in `src/styles/global.css`:

```css
:root {
  --color-brand: #6366f1;  /* ← match your new 500 value */
}
```

### Typography

The template uses **Playfair Display** (headings) and **DM Sans** (body). To change fonts:

1. Update the Google Fonts import at the top of `src/styles/global.css`
2. Change the font family tokens in `tailwind.config.js`:

```js
fontFamily: {
  display: ['"Your Heading Font"', 'serif'],
  sans:    ['"Your Body Font"', 'sans-serif'],
}
```

### Site Name, Contact & Navigation

All site-wide constants live in `src/utils/helpers.js`:

```js
export const SITE_NAME    = 'Nexus Agency'
export const SITE_EMAIL   = 'hello@nexusagency.co'
export const SITE_PHONE   = '+1 (555) 000-0000'
export const SITE_ADDRESS = '123 Innovation Drive, San Francisco, CA'

export const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  // add or remove as needed
]
```

### Page Content

All copy, images, stats, team members, services, and portfolio items are driven from a single file: **`src/data/content.js`**. Edit entries there — no component changes needed.

```js
// Change stats
export const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  // ...
]

// Change services
export const services = [
  {
    id: 1,
    icon: 'Layers',          // lucide-react icon name
    title: 'Brand Strategy',
    description: '...',
    features: ['Feature 1', 'Feature 2'],
    color: 'brand',           // brand | teal | amber | rose | purple | cyan
  },
  // ...
]
```

### Adding a New Page

1. Create `src/pages/YourPage.jsx`:

```jsx
import PageTransition from '@components/common/PageTransition'
import PageHero from '@components/common/PageHero'
import { useSEO } from '@hooks/useSEO'

export default function YourPage() {
  useSEO({ title: 'Your Page', description: '...' })

  return (
    <PageTransition>
      <PageHero eyebrow="Label" title="Your heading" subtitle="Sub copy" />
      {/* your sections here */}
    </PageTransition>
  )
}
```

2. Register it in `src/App.jsx`:

```jsx
const YourPage = lazy(() => import('@pages/YourPage'))
// inside <Routes>:
<Route path="/your-page" element={<YourPage />} />
```

3. Add to `NAV_LINKS` in `src/utils/helpers.js` if it needs a nav entry.

### Adding a New Section

Sections are self-contained components in `src/components/sections/`. Use `ScrollReveal` and `SectionTitle` for consistency:

```jsx
import ScrollReveal from '@components/common/ScrollReveal'
import SectionTitle from '@components/common/SectionTitle'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@utils/motion'

export default function MySection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal className="mb-16">
          <SectionTitle
            eyebrow="Label"
            title="Section heading"
            subtitle="Supporting copy."
          />
        </ScrollReveal>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {items.map(item => (
            <motion.div key={item.id} variants={staggerItem} className="card">
              {/* card content */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

### Dark / Light Mode

Theme is controlled by `src/context/ThemeContext.jsx`. Toggle is in the Navbar. Access anywhere:

```jsx
import { useTheme } from '@context/ThemeContext'

function MyComponent() {
  const { isDark, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>{isDark ? 'Light' : 'Dark'}</button>
}
```

### Contact Form

The form in `src/pages/Contact.jsx` submits to `VITE_CONTACT_FORM_ENDPOINT`. Recommended services:

- **[Formspree](https://formspree.io)** — free tier, no backend needed
- **[Resend](https://resend.com)** — for custom API routes
- **[EmailJS](https://emailjs.com)** — client-side only

Set your endpoint in `.env.local`:

```env
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

---

## Animation System

All Framer Motion variants are centralized in `src/utils/motion.js`. Import and reuse:

```js
import { fadeUp, staggerContainer, staggerItem, ease } from '@utils/motion'
```

| Export              | Use case                                      |
|---------------------|-----------------------------------------------|
| `fadeUp`            | Individual element reveal on scroll           |
| `fadeIn`            | Simple opacity fade                           |
| `fadeLeft/Right`    | Slide in from a side                          |
| `scaleUp`           | Scale + fade in                               |
| `staggerContainer`  | Parent that staggers its children             |
| `staggerItem`       | Child item inside a stagger container         |
| `pageVariants`      | Full-page enter/exit transition               |
| `cardHover`         | Lift + shadow on card hover                   |
| `ease`              | Easing curve presets (`outExpo`, `spring` …)  |

The `<ScrollReveal>` component wraps any element with a `whileInView` animation:

```jsx
<ScrollReveal variant="fade-up" delay={0.2}>
  <p>This fades up when it enters the viewport.</p>
</ScrollReveal>
```

**Reducing motion:** The template automatically respects `prefers-reduced-motion` via CSS and the `useReducedMotion` hook. No extra config needed.

---

## SEO

Each page calls `useSEO` to set `<title>`, `<meta description>`, Open Graph, and Twitter Card tags dynamically:

```jsx
useSEO({
  title:       'About Us',
  description: '150-character description for search engines.',
  image:       'https://yourdomain.com/og-about.jpg', // optional
  keywords:    ['agency', 'design', 'strategy'],       // optional
})
```

The base structured data (Organization schema) lives in `index.html`. Update it with your real details before going live.

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com — auto-deploys on push
```

`vercel.json` is already configured with:
- SPA fallback rewrites
- Security headers (CSP, X-Frame-Options, etc.)
- Immutable cache headers for hashed assets
- Multi-region deployment (US, EU, APAC)

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --build --prod
```

`netlify.toml` is already configured with:
- SPA `/* → /index.html` redirect
- Security headers
- Cache rules matching Vercel config
- Branch deploy + preview support

### Environment Variables in Production

Set these in your platform's dashboard (not committed to git):

| Variable                      | Required | Description                   |
|-------------------------------|----------|-------------------------------|
| `VITE_SITE_URL`               | Yes      | Your live domain              |
| `VITE_CONTACT_FORM_ENDPOINT`  | Yes      | Form submission endpoint      |
| `VITE_GA_MEASUREMENT_ID`      | No       | Google Analytics 4 ID         |
| `VITE_API_URL`                | No       | Backend API base URL          |
| `VITE_SENTRY_DSN`             | No       | Sentry error tracking         |

---

## Performance

The build is optimized for Core Web Vitals:

- **Code splitting** — React, Framer Motion, and Lucide in separate chunks; pages lazy-loaded
- **Font preconnect** — `dns-prefetch` and `preconnect` in `<head>`
- **Image lazy loading** — all `<img>` tags use `loading="lazy"`
- **Immutable asset caching** — hashed filenames + `Cache-Control: immutable`
- **Tree-shaking** — Lucide icons and clsx are fully tree-shaken by Vite/Rollup
- **Reduced motion** — animations skipped entirely when OS setting is on

Run a Lighthouse audit after deploying:

```bash
npm run build && npm run preview
# Open Chrome DevTools → Lighthouse → Generate report
```

---

## Accessibility

- **Skip navigation** link (`SkipNav`) for keyboard users — first focusable element on every page
- **ARIA labels** on all icon buttons (theme toggle, hamburger, scroll-to-top)
- **`aria-expanded`** on the mobile menu toggle
- **`role="list"`** on navigation `<ul>` elements
- **`<main id="main-content">`** landmark for screen readers
- **Focus-visible** ring on all interactive elements (2px brand-colored outline)
- **44×44px** minimum touch targets on mobile
- **`prefers-reduced-motion`** CSS + hook — all animations disabled when the OS setting is on
- **`forced-colors`** media query for Windows High Contrast mode
- **`alt` text** on all images (enforced by ESLint jsx-a11y plugin)
- **Semantic HTML** throughout — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`

---

## Available Scripts

| Script             | Description                                |
|--------------------|--------------------------------------------|
| `npm run dev`      | Start development server on port 5173      |
| `npm run build`    | Production build to `dist/`                |
| `npm run preview`  | Serve the production build locally         |
| `npm run lint`     | Run ESLint across all JS/JSX files         |
| `npm run lint:fix` | Auto-fix ESLint issues                     |
| `npm run format`   | Format all files with Prettier             |
| `npm run clean`    | Remove `dist/` and Vite cache              |

---

## Browser Support

| Browser          | Version  |
|------------------|----------|
| Chrome / Edge    | Last 2   |
| Firefox          | Last 2   |
| Safari           | Last 2   |
| iOS Safari       | 15+      |
| Samsung Internet | Last 1   |

IE11 is not supported.

---

## Customization Checklist

Before going live, work through this list:

- [ ] Update `SITE_NAME`, `SITE_EMAIL`, `SITE_PHONE`, `SITE_ADDRESS` in `src/utils/helpers.js`
- [ ] Replace all content in `src/data/content.js` (services, portfolio, team, testimonials)
- [ ] Update brand colors in `tailwind.config.js` and `global.css`
- [ ] Replace fonts in `global.css` and `tailwind.config.js`
- [ ] Set real domain in `index.html` (canonical, OG, structured data)
- [ ] Add real OG image at `public/og-image.jpg` (1200×630px)
- [ ] Add real favicon set (replace SVG placeholder in `public/`)
- [ ] Update `site.webmanifest` with real app name and icon paths
- [ ] Set `robots.txt` sitemap URL to your real domain
- [ ] Configure contact form endpoint in `.env.local`
- [ ] Add GA4 Measurement ID in `.env.local` if using analytics
- [ ] Update CSP in `vercel.json` / `netlify.toml` with your real domains
- [ ] Update structured data in `index.html` with real company info
- [ ] Remove or replace placeholder Unsplash images with real photos
- [ ] Run `npm run lint` — fix all warnings before deploying
- [ ] Run Lighthouse audit — target 90+ on all four scores
- [ ] Test keyboard navigation (Tab through every page)
- [ ] Test on iOS Safari and Android Chrome

---

## License

MIT — free to use for personal and commercial projects. Attribution appreciated but not required.

---

## Contributing

Pull requests welcome. For major changes, open an issue first to discuss.

```bash
# Fork, clone, and create a feature branch
git checkout -b feature/your-improvement

# Make your changes, then
npm run lint && npm run build   # must pass both

git push origin feature/your-improvement
# Open a PR on GitHub
```

---

Built with care. Ship something great.

## AUTHOR
- Whatsapp: wa.me/7052006201
- X: x.com/OduwaleJubreel
- LinkedIn: 
