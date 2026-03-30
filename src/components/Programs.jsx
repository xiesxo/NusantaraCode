import {
  Code2,
  Lightbulb,
  Trophy,
  Users,
  GitBranch,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { PROGRAMS_DATA } from '../data/siteData';
import SectionWrapper from './SectionWrapper';
import ScrollReveal from './ScrollReveal';

/** Map icon name strings from data to actual Lucide components. */
const ICON_MAP = {
  Code2,
  Lightbulb,
  Trophy,
  Users,
  GitBranch,
  MessageCircle,
};

/**
 * Programs section displaying organization activities in card layout.
 */
export default function Programs() {
  return (
    <SectionWrapper
      id="programs"
      title="Program Kami"
      subtitle="Berbagai program unggulan yang dirancang untuk mengembangkan skill dan membangun koneksi di dunia teknologi."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS_DATA.map((program, idx) => {
          const IconComponent = ICON_MAP[program.icon] || Code2;

          return (
            <ScrollReveal key={program.id} animation="fade-up" delay={idx * 100}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-200/60 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10">
                {/* Gradient accent top */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${program.color}`}
                />

                {/* Hover gradient glow */}
                <div
                  className={`pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r ${program.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative flex flex-1 flex-col p-6 lg:p-8">
                  {/* Icon */}
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${program.color} text-white shadow-lg`}
                  >
                    <IconComponent size={26} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-3 text-xl font-bold text-surface-900">
                    {program.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-surface-800/60">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {program.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-surface-100 px-3 py-1 text-xs font-medium text-surface-800/70"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                  >
                    Pelajari Selengkapnya
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
