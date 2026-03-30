import { useState, useCallback } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { ORG_INFO } from '../data/siteData';
import SectionWrapper from './SectionWrapper';
import ScrollReveal from './ScrollReveal';

/** Contact info items displayed beside the form. */
const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: ORG_INFO.email, href: `mailto:${ORG_INFO.email}` },
  { icon: Phone, label: 'Telepon', value: ORG_INFO.phone, href: `tel:${ORG_INFO.phone}` },
  { icon: MapPin, label: 'Alamat', value: ORG_INFO.address },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

/**
 * Contact section with info cards and a simple contact form.
 */
export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setSending(true);

      // Simulate network request
      setTimeout(() => {
        setSending(false);
        setSubmitted(true);
        setForm(INITIAL_FORM);
        setTimeout(() => setSubmitted(false), 4000);
      }, 1500);
    },
    [],
  );

  const inputBaseClass =
    'w-full rounded-xl border border-surface-200/80 bg-surface-50/50 px-4 py-3 text-sm text-surface-800 placeholder-surface-800/40 outline-none transition-all focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20';

  return (
    <SectionWrapper
      id="contact"
      title="Hubungi Kami"
      subtitle="Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami."
      className="gradient-bg-subtle"
    >
      <div className="grid gap-10 lg:grid-cols-5">
        {/* Contact info */}
        <div className="lg:col-span-2">
          <ScrollReveal animation="slide-left">
            <div className="space-y-6">
              {CONTACT_ITEMS.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group flex items-start gap-4 rounded-2xl border border-surface-200/60 bg-white p-5 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-primary-500 to-accent-400 text-white shadow-lg">
                      <IconComp size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-surface-800/60 transition-colors hover:text-primary-500"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-surface-800/60">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-surface-200/60 bg-white shadow-lg">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary-50 to-accent-400/10">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-primary-400" />
                  <p className="mt-2 text-sm font-medium text-surface-800/50">
                    Jakarta Selatan, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          <ScrollReveal animation="slide-right">
            <div className="rounded-2xl border border-surface-200/60 bg-white p-8 shadow-xl lg:p-10">
              <h3 className="mb-6 text-xl font-bold text-surface-900">
                Kirim Pesan
              </h3>

              {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-700 animate-fade-in">
                  <CheckCircle size={20} />
                  Pesan Anda berhasil terkirim! Kami akan segera menghubungi Anda.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-surface-800">
                      Nama Lengkap
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={inputBaseClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-surface-800">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={inputBaseClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-surface-800">
                    Subjek
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Hal yang ingin dibicarakan"
                    required
                    className={inputBaseClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-surface-800">
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    required
                    rows={5}
                    className={`${inputBaseClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary-500/25 transition-all hover:shadow-2xl hover:shadow-primary-500/30 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {sending ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
