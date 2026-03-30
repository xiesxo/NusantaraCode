import { ArrowDown, Sparkles } from 'lucide-react';
import { ORG_INFO } from '../data/siteData';
import ScrollReveal from './ScrollReveal';

/**
 * Hero section with large heading, description, CTA buttons,
 * and decorative gradient orbs.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large gradient orb */}
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-500/15 blur-[120px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <ScrollReveal animation="fade-in">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm text-primary-300">
              <Sparkles size={16} />
              <span>Membangun Masa Depan Digital Indonesia</span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal animation="fade-up" delay={150}>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {ORG_INFO.name.split('').map((char, i) =>
                i < 9 ? (
                  <span key={i} className="gradient-text">
                    {char}
                  </span>
                ) : (
                  <span key={i}>{char}</span>
                ),
              ).reduce((prev, curr, i) => {
                // Split into two words: "Nusantara" and "Code"
                if (i === 9) return [...prev, <br key="br" className="hidden sm:block" />, curr];
                return [...prev, curr];
              }, [])}
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-200/70 sm:text-xl">
              {ORG_INFO.description}
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal animation="fade-up" delay={450}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#programs"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-primary-500/30 transition-all hover:shadow-primary-500/50 hover:brightness-110"
              >
                Lihat Program Kami
                <ArrowDown
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-surface-200/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-surface-200/40 hover:bg-white/5"
              >
                Tentang Kami
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-surface-200/40" />
      </div>
    </section>
  );
}
