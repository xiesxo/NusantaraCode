/**
 * Reusable section wrapper with consistent padding, max-width, and optional background.
 *
 * @param {Object} props
 * @param {string} props.id - Section ID for anchor navigation
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {React.ReactNode} props.children
 * @param {string} props.className - Additional CSS classes for the section
 * @param {boolean} props.dark - Whether to use dark background
 */
export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${
        dark ? 'bg-surface-950 text-white' : 'bg-surface-950 text-white'
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <h2
                className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
                  dark ? 'text-white' : 'text-white'
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mx-auto mt-4 max-w-2xl text-lg ${
                  dark ? 'text-surface-200/80' : 'text-surface-200/70'
                }`}
              >
                {subtitle}
              </p>
            )}
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-400" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
