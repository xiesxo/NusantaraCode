import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Wrapper component that reveals its children with animation when scrolled into view.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'fade-up'|'fade-in'|'slide-left'|'slide-right'} props.animation - Animation type
 * @param {number} props.delay - Animation delay in ms
 * @param {string} props.className - Additional CSS classes
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}) {
  const { ref, isVisible } = useScrollReveal();

  const animationClasses = {
    'fade-up': 'animate-fade-in-up',
    'fade-in': 'animate-fade-in',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
  };

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? animationClasses[animation] || animationClasses['fade-up'] : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      {children}
    </div>
  );
}
