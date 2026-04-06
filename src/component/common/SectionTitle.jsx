import { cn } from '@utils/helpers'

/**
 * Reusable section heading block.
 *
 * Props:
 *   eyebrow  — small label above the heading (optional)
 *   title    — main heading (supports JSX for gradient spans)
 *   subtitle — body copy below heading (optional)
 *   align    — 'left' | 'center' | 'right' (default 'center')
 *   light    — true for use on dark backgrounds
 *   className
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  return (
    <div className={cn('flex flex-col gap-4 max-w-3xl', align === 'center' && 'mx-auto', alignClass, className)}>
      {eyebrow && (
        <span className={cn('eyebrow', light && 'text-brand-300')}>
          <span className="w-6 h-px bg-current" />
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          className={cn(
            'text-balance',
            light ? 'text-white' : 'text-slate-900 dark:text-white'
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
