/**
 * SkipNav — renders a visually hidden "Skip to main content" link
 * that becomes visible on keyboard focus. Critical for accessibility.
 *
 * Place this as the VERY FIRST element inside <body> / root.
 * The target element (e.g. <main id="main-content">) must exist.
 */
export default function SkipNav({ targetId = 'main-content' }) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-5 focus:py-3 focus:rounded-xl focus:bg-brand-500 focus:text-white focus:font-semibold focus:shadow-brand-lg focus:outline-none"
    >
      Skip to main content
    </a>
  )
}
