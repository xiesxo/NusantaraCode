import { Target, Eye, Clock } from 'lucide-react';
import { ABOUT_DATA } from '../data/siteData';
import SectionWrapper from './SectionWrapper';
import ScrollReveal from './ScrollReveal';

/**
 * About section featuring vision, mission, timeline history, and key stats.
 */
export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="Tentang Kami"
      subtitle="Mengenal lebih dekat organisasi yang berdedikasi untuk memajukan ekosistem teknologi Indonesia."
      className="gradient-bg-subtle"
    >
      {/* Vision & Mission Cards */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Vision */}
        <ScrollReveal animation="slide-left">
          <div className="group relative overflow-hidden rounded-2xl border border-surface-200/10 bg-surface-900/80 p-8 shadow-xl shadow-black/20 transition-all hover:shadow-2xl hover:shadow-primary-500/10 lg:p-10">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary-600/20 blur-2xl transition-all group-hover:bg-primary-500/30" />
            <div className="relative">
              <div className="mb-6 inline-flex rounded-2xl bg-primary-500/20 p-4 text-primary-400">
                <Eye size={28} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Visi</h3>
              <p className="leading-relaxed text-surface-200/70">
                {ABOUT_DATA.vision}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission */}
        <ScrollReveal animation="slide-right">
          <div className="group relative overflow-hidden rounded-2xl border border-surface-200/10 bg-surface-900/80 p-8 shadow-xl shadow-black/20 transition-all hover:shadow-2xl hover:shadow-primary-500/10 lg:p-10">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent-500/15 blur-2xl transition-all group-hover:bg-accent-400/25" />
            <div className="relative">
              <div className="mb-6 inline-flex rounded-2xl bg-accent-500/20 p-4 text-accent-400">
                <Target size={28} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Misi</h3>
              <ul className="space-y-3">
                {ABOUT_DATA.missions.map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-surface-200/70">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-400 text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Stats */}
      <ScrollReveal animation="fade-up" delay={200}>
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {ABOUT_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-surface-200/10 bg-surface-900/80 p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10"
            >
              <p className="gradient-text text-3xl font-extrabold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-surface-200/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <div className="mt-20">
        <ScrollReveal animation="fade-in">
          <div className="mb-12 flex items-center justify-center gap-3">
            <Clock size={24} className="text-primary-500" />
            <h3 className="text-2xl font-bold text-white">
              Perjalanan Kami
            </h3>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-400 md:left-1/2 md:block" />

          <div className="space-y-8 md:space-y-12">
            {ABOUT_DATA.history.map((item, idx) => (
              <ScrollReveal
                key={item.year}
                animation={idx % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={idx * 100}
              >
                <div
                  className={`relative flex flex-col gap-4 pl-12 md:flex-row md:gap-8 md:pl-0 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year badge (mobile) */}
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-400 text-xs font-bold text-white md:hidden">
                    {idx + 1}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="rounded-2xl border border-surface-200/10 bg-surface-900/80 p-6 shadow-lg transition-all hover:shadow-xl hover:shadow-primary-500/10">
                      <span className="gradient-text text-sm font-bold">{item.year}</span>
                      <h4 className="mt-1 text-lg font-bold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-surface-200/60">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden flex-shrink-0 items-center justify-center md:flex">
                    <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-surface-950 bg-gradient-to-r from-primary-500 to-accent-400 text-xs font-bold text-white shadow-lg">
                      {item.year.toString().slice(-2)}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
