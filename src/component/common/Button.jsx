import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@utils/helpers'

const variants = {
  primary:       'bg-brand-500 text-white shadow-brand hover:bg-brand-600',
  secondary:     'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700',
  ghost:         'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
  outline:       'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:text-brand-500 bg-transparent',
  danger:        'bg-red-500 text-white hover:bg-red-600',
  'outline-white':'border border-white/30 text-white hover:bg-white/10 bg-transparent',
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5 rounded-full',
  md: 'px-6 py-2.5 text-sm gap-2 rounded-full',
  lg: 'px-8 py-3.5 text-base gap-2.5 rounded-full',
}

const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', className, children, leftIcon, rightIcon, loading = false, disabled = false, fullWidth = false, type = 'button', ...props },
  ref
) {
  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
      transition={{ duration: 0.15 }}
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
      ) : leftIcon ? (
        <span className="shrink-0">{leftIcon}</span>
      ) : null}
      {children}
      {rightIcon && !loading && <span className="shrink-0">{rightIcon}</span>}
    </motion.button>
  )
})

export default Button
