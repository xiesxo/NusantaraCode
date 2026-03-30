import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, ORG_INFO } from '../data/siteData';

/**
 * Sticky navigation bar with transparent-to-glass scroll effect,
 * smooth scroll links, and a responsive mobile drawer menu.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Track scroll position for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = NAV_LINKS.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark border-b border-surface-200/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 font-bold text-white shadow-lg shadow-primary-500/30 transition-transform group-hover:scale-105">
            NC
          </div>
          <span className="text-xl font-bold text-white">
            {ORG_INFO.name}
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'text-primary-400'
                    : 'text-surface-200/70 hover:text-primary-400'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-accent-400" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button (desktop) */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/30 hover:brightness-110 md:inline-flex"
        >
          Hubungi Kami
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-surface-800 md:hidden"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-[72px] z-40 transition-all duration-300 md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-surface-900/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute right-0 top-0 h-auto w-full max-w-sm transform rounded-b-2xl bg-surface-900 border border-surface-200/10 p-6 shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    activeSection === link.href
                      ? 'bg-primary-500/10 text-primary-400'
                      : 'text-surface-200/70 hover:bg-surface-800 hover:text-primary-400'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-4 block rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  );
}
