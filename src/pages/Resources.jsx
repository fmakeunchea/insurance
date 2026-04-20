import { useEffect, useState } from 'react';
import { BookOpen, Users, TrendingUp, Sparkles, Download, Clock, Shield, ArrowRight, CheckCircle, Star, Calendar } from 'lucide-react';
import { freeGuides } from '../data/freeGuides';
import LeadMagnetForm from '../components/LeadMagnetForm';
import SEO from '../components/SEO';

const ICONS = { Users, TrendingUp, BookOpen, Sparkles };

const COLOR_CLASSES = {
  emerald: {
    badge: 'bg-emerald-600',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accent: 'border-emerald-200',
  },
  gold: {
    badge: 'bg-gold-500',
    iconBg: 'bg-gold-50',
    iconColor: 'text-gold-600',
    accent: 'border-gold-400',
  },
  navy: {
    badge: 'bg-navy-900',
    iconBg: 'bg-navy-50',
    iconColor: 'text-navy-900',
    accent: 'border-navy-200',
  },
};

export default function Resources() {
  const [selected, setSelected] = useState(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free Life Insurance Guides & Resources"
        description="Download free expert guides on life insurance, IUL, term life, and wealth planning. Written by licensed Virginia agent Fifi Makeunchea. Instant PDF downloads."
        path="/free-guides"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,153,102,0.12),transparent_50%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">100% Free Expert Guides</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Free Guides for <span className="text-gold-400">Virginia Families</span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-8">
            Download expert insurance guides written by a licensed Virginia agent with 12+ years of experience.
            Instant PDF. No fluff. No spam.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-navy-400">
            <span className="flex items-center gap-1.5"><Download className="w-4 h-4" />Instant download</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" />100% free</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-gold-400 fill-gold-400" />Trusted by 1,200+ families</span>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {freeGuides.map((guide) => {
            const Icon = ICONS[guide.audienceIcon] || BookOpen;
            const colors = COLOR_CLASSES[guide.color] || COLOR_CLASSES.navy;
            return (
              <div
                key={guide.slug}
                className={`rounded-2xl overflow-hidden flex flex-col border-2 ${
                  guide.featured
                    ? 'bg-gradient-to-br from-navy-900 to-navy-800 border-gold-400 text-white'
                    : `bg-white ${colors.accent}`
                }`}
              >
                <div className="p-7 flex-1 flex flex-col">
                  {guide.featured && (
                    <span className="self-start bg-gold-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                      Most Popular
                    </span>
                  )}

                  <div className={`w-12 h-12 ${guide.featured ? 'bg-gold-500/20' : colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${guide.featured ? 'text-gold-400' : colors.iconColor}`} />
                  </div>

                  <h2 className={`font-display text-2xl font-bold mb-1 ${guide.featured ? 'text-white' : 'text-navy-900'}`}>
                    {guide.title}
                  </h2>
                  <p className={`text-sm mb-4 ${guide.featured ? 'text-navy-300' : 'text-navy-500'}`}>
                    {guide.subtitle}
                  </p>

                  <div className={`flex items-center gap-3 text-xs mb-4 ${guide.featured ? 'text-navy-400' : 'text-navy-400'}`}>
                    <span className="flex items-center gap-1"><Download className="w-3 h-3" />{guide.pages}</span>
                    <span>·</span>
                    <span>Free</span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-5 flex-1 ${guide.featured ? 'text-navy-200' : 'text-navy-600'}`}>
                    {guide.description}
                  </p>

                  {/* Bullets */}
                  <div className="space-y-2 mb-6">
                    {guide.bullets.slice(0, 4).map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${guide.featured ? 'text-gold-400' : 'text-gold-500'}`} />
                        <span className={`text-sm ${guide.featured ? 'text-navy-200' : 'text-navy-600'}`}>{b}</span>
                      </div>
                    ))}
                  </div>

                  <p className={`text-xs mb-4 uppercase tracking-wide font-semibold ${guide.featured ? 'text-gold-400' : 'text-navy-400'}`}>
                    For: {guide.audience}
                  </p>

                  <button
                    onClick={() => setSelected(guide)}
                    className={`w-full flex items-center justify-center gap-2 py-4 font-bold rounded-xl text-base transition-all active:scale-[0.98] ${
                      guide.featured
                        ? 'bg-gold-500 hover:bg-gold-600 text-white'
                        : 'bg-navy-900 hover:bg-navy-800 text-white'
                    }`}
                  >
                    <Download className="w-5 h-5" /> Get the Free Guide
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust + Benefits */}
      <section className="bg-navy-50/50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Why These Guides?</h2>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Shield, title: '12+ Years Experience', text: 'Written by a licensed agent who\'s helped 1,200+ Virginia families' },
              { icon: Star, title: 'Virginia-Specific', text: 'Rates, laws, and advice tailored to the Virginia market' },
              { icon: Download, title: 'Instant Access', text: 'Enter email, get PDF. No waiting, no phone calls.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-navy-100">
                <Icon className="w-6 h-6 text-gold-500 mx-auto mb-3" />
                <h3 className="font-semibold text-navy-900 mb-2">{title}</h3>
                <p className="text-navy-500 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Prefer to Talk Through Your Options?
          </h2>
          <p className="text-navy-300 mb-8">
            The guides are great, but nothing replaces a personalized conversation.
            Book a free 20-minute consultation — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/harnordinc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg"
            >
              <Calendar className="w-5 h-5" /> Book Free Consultation
            </a>
            <a
              href="tel:+15404241852"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-lg"
            >
              Call (540) 424-1852
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-navy-100 hover:bg-navy-200 rounded-full flex items-center justify-center text-navy-500 z-10"
              aria-label="Close"
            >
              ×
            </button>
            <div className="h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
            <div className="p-8">
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">
                Get: <span className="text-gold-600">{selected.title}</span>
              </h2>
              <p className="text-navy-500 text-sm mb-5">{selected.subtitle}</p>

              <div className="bg-navy-50/50 border border-navy-100 rounded-xl p-4 mb-6">
                <p className="text-xs text-navy-400 uppercase tracking-wider font-semibold mb-2">What's inside</p>
                <ul className="space-y-1.5">
                  {selected.bullets.map((b) => (
                    <li key={b} className="text-sm text-navy-600 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadMagnetForm guide={selected} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
