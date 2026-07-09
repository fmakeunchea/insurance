import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, ArrowRight, Shield, Calendar } from 'lucide-react';

const TRUST_CHIPS = ['Licensed Professional', 'Educational Review', 'No Obligation', 'Personalized Guidance'];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,153,102,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">Licensed in All 50 States — Accepting New Clients</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold text-white leading-[1.08] mb-6">
              Could Your Family <span className="text-gold-400">Keep the House</span> If Your Income Stopped Tomorrow?
            </h1>

            <p className="text-lg text-navy-200 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Life insurance that keeps your family in their home, replaces your income, and protects
              your children's future. Personalized guidance from a licensed advisor serving families in
              all 50 states — no pressure, no obligation.
            </p>

            {/* Mobile headshot */}
            <div className="flex justify-center lg:hidden mb-8">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gold-400/30 shadow-xl">
                <img src="/fifi.jpg" alt="Fifi Makeunchea" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8 bg-white/5 rounded-xl px-5 py-3 border border-white/10 w-fit mx-auto lg:mx-0">
              <div className="flex -space-x-2">
                {['MJ','AF','DC','RP','KB'].map((i, k) => (
                  <div key={k} className="w-9 h-9 bg-navy-700 border-2 border-navy-800 rounded-full flex items-center justify-center">
                    <span className="text-gold-400 text-[10px] font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />)}
                  <span className="text-white font-bold text-sm ml-1">4.9</span>
                </div>
                <span className="text-white/50 text-xs">1,200+ families protected</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {['Licensed & Certified', 'IUL & Cash Value Specialist', 'Free Consultations'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span className="text-white/70 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Family Protection Review CTA card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 px-7 py-5">
                  <h2 className="text-white font-display font-bold text-xl">Get Your Free Family Protection Review</h2>
                  <p className="text-white/90 text-sm mt-1.5">
                    In just 15 minutes, discover whether your mortgage, income, children's future, and
                    final expenses are adequately protected.
                  </p>
                </div>
                <div className="p-7">
                  {/* Primary CTA — quiz */}
                  <Link to="/quiz" className="w-full flex items-center justify-center gap-2 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-base transition-all active:scale-[0.98] shadow-lg shadow-gold-500/25">
                    <Shield className="w-5 h-5" /> Take the Free Quiz <ArrowRight className="w-5 h-5" />
                  </Link>

                  {/* Secondary CTA — book */}
                  <Link to="/book" className="w-full flex items-center justify-center gap-2 py-3.5 mt-3 bg-white hover:bg-navy-50 text-navy-900 font-semibold rounded-xl text-base border-2 border-navy-200 hover:border-navy-300 transition-all">
                    <Calendar className="w-5 h-5 text-navy-400" /> Book My Free Review <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Trust chips */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mt-6 pt-6 border-t border-navy-100">
                    {TRUST_CHIPS.map((t) => (
                      <span key={t} className="flex items-center gap-1.5 text-navy-600 text-xs font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Click to call under card */}
              <a href="tel:+15404241852" className="flex items-center justify-center gap-2 mt-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white font-semibold text-sm transition-all">
                <Phone className="w-4 h-4 text-gold-400" /> Prefer to talk? (540) 424-1852
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
