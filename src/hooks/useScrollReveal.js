import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that observes elements entering the viewport
 * and triggers a CSS transition for scroll-based reveal animations.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility ratio to trigger (default 0.1)
 * @param {string} options.rootMargin - Margin around root (default '0px')
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollReveal({ threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
