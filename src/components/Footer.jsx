import { Heart, ArrowUp } from 'lucide-react';
import { NAV_LINKS, ORG_INFO } from '../data/siteData';

/**
 * Footer with navigation links, organization info, and back-to-top button.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface-950 text-surface-200">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 font-bold text-white shadow-lg">
                NC
              </div>
              <span className="text-xl font-bold text-white">
                {ORG_INFO.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-surface-200/60">
              {ORG_INFO.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-surface-200/50">
              <p>{ORG_INFO.email}</p>
              <p>{ORG_INFO.phone}</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-surface-200/60 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Tautan
            </h4>
            <ul className="space-y-3">
              {['Blog', 'Dokumentasi', 'Karir', 'FAQ', 'Kebijakan Privasi'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-surface-200/60 transition-colors hover:text-primary-400"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-200/10 pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-surface-200/40">
            &copy; {currentYear} {ORG_INFO.name}. Dibuat dengan{' '}
            <Heart size={14} className="text-red-400" fill="currentColor" /> di
            Indonesia.
          </p>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-surface-200/10 px-4 py-2 text-sm text-surface-200/50 transition-all hover:border-primary-500/30 hover:text-primary-400"
            aria-label="Kembali ke atas"
          >
            Kembali ke atas
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
