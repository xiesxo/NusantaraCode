import { ExternalLink, Globe, AtSign } from 'lucide-react';
import { TEAM_DATA } from '../data/siteData';
import SectionWrapper from './SectionWrapper';
import ScrollReveal from './ScrollReveal';

/** Map social platform keys to Lucide icon components. */
const SOCIAL_ICONS = {
  linkedin: Globe,
  github: ExternalLink,
  twitter: AtSign,
};

/** Gradient combinations for avatar backgrounds. */
const AVATAR_GRADIENTS = [
  'from-indigo-500 to-purple-500',
  'from-cyan-500 to-blue-500',
  'from-emerald-500 to-teal-500',
  'from-amber-500 to-orange-500',
  'from-rose-500 to-pink-500',
  'from-violet-500 to-fuchsia-500',
];

/** Social platform display labels. */
const SOCIAL_LABELS = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  twitter: 'Twitter',
};

/**
 * Team section showcasing organization members in a card grid.
 */
export default function Team() {
  return (
    <SectionWrapper
      id="team"
      title="Tim Kami"
      subtitle="Orang-orang luar biasa di balik NusantaraCode yang berdedikasi untuk membangun komunitas tech terbaik."
      dark
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_DATA.map((member, idx) => (
          <ScrollReveal key={member.id} animation="fade-up" delay={idx * 100}>
            <div className="group relative overflow-hidden rounded-2xl border border-surface-200/10 bg-surface-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:bg-surface-800/70 lg:p-8">
              {/* Hover glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

              <div className="relative text-center">
                {/* Avatar */}
                <div
                  className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${
                    AVATAR_GRADIENTS[idx % AVATAR_GRADIENTS.length]
                  } text-2xl font-bold text-white shadow-xl ring-4 ring-surface-800/50 transition-all group-hover:scale-105 group-hover:ring-primary-500/30`}
                >
                  {member.avatar}
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="mt-1 gradient-text text-sm font-semibold">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="mt-4 text-sm leading-relaxed text-surface-200/60">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="mt-6 flex items-center justify-center gap-3">
                  {Object.entries(member.socials).map(([platform, url]) => {
                    const SocialIcon = SOCIAL_ICONS[platform];
                    if (!SocialIcon) return null;

                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-surface-200/10 p-2.5 text-surface-200/50 transition-all hover:bg-primary-500/20 hover:text-primary-400"
                        aria-label={`${member.name} ${SOCIAL_LABELS[platform] || platform}`}
                        title={SOCIAL_LABELS[platform] || platform}
                      >
                        <SocialIcon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
