import { cn } from '@utils/helpers'

const variantStyles = {
  default: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300',
  brand:   'bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-300',
  success: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300',
  warning: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300',
  error:   'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300',
  teal:    'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300',
  purple:  'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300',
}

export default function Badge({ children, variant = 'default', className, dot = false }) {
  return (
    <span className={cn('tag font-medium', variantStyles[variant], className)}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      )}
      {children}
    </span>
  )
}
