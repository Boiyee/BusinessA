import { useState } from 'react'
import { Mail, Check, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@components/common/ScrollReveal'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubscribe = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Invalid email address')
      return
    }

    setStatus('loading')

    try {
      // Replace with your actual email service endpoint
      // Example: Mailchimp, Resend, Formspree, etc.
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Welcome! Check your email for confirmation.')
        setEmail('')
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-700 dark:from-brand-900 dark:to-slate-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
                <Mail size={32} className="text-white" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Get insights on digital strategy, design trends, and the latest in web technology delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === 'error') setStatus('idle')
                  }}
                  disabled={status === 'loading' || status === 'success'}
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Email for newsletter"
                />
                <motion.button
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="px-8 py-4 bg-white text-brand-600 font-semibold rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                >
                  {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
                </motion.button>
              </div>

              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 text-sm ${
                    status === 'success' ? 'text-green-200' : 'text-red-200'
                  }`}
                >
                  {status === 'success' ? (
                    <Check size={16} />
                  ) : (
                    <AlertCircle size={16} />
                  )}
                  {message}
                </motion.div>
              )}
            </form>

            <p className="text-sm text-white/60 mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
