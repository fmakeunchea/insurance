import { useState } from 'react';
import { Phone, CheckCircle, Star, ArrowRight, Shield } from 'lucide-react';
import { trackLead } from '../utils/track';

export default function Hero() {
  const [form, setForm] = useState({ name: '', age: '', coverage: '' });
  const [sent, setSent] = useState(false);
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Quick Quote: ${form.name}, age ${form.age}, ${form.coverage}`, source: 'Hero Quick Quote' }),
      });
    } catch {}
    trackLead('Hero Quick Quote', { coverage: form.coverage });
    setSent(true);
  };

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
              <span className="text-white/80 text-sm">Licensed in Virginia — Accepting New Clients</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold text-white leading-[1.08] mb-6">
              Protecting Virginia Families with Life Insurance That{' '}
              <span className="text-gold-400">Builds Wealth</span>
            </h1>

            <p className="text-lg text-navy-200 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              From affordable term life to IUL cash-value strategies — I compare 15+ A-rated carriers
              to find you the best coverage at the lowest rate. Serving Fredericksburg, Stafford &amp; Spotsylvania.
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

          {/* Right — Quick Quote Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 px-7 py-4">
                  <h2 className="text-white font-bold text-lg">See Your Estimated Rate</h2>
                  <p className="text-white/80 text-sm">Free. 30 seconds. No obligation.</p>
                </div>
                <div className="p-7">
                  {sent ? (
                    <div className="text-center py-6">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <h3 className="font-display text-xl font-bold text-navy-900 mb-2">Got It!</h3>
                      <p className="text-navy-500 text-sm mb-4">I'll send your personalized estimate within a few hours.</p>
                      <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl text-sm">
                        Or Book a Call Now <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={submit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wider">Your Name</label>
                        <input type="text" name="name" value={form.name} onChange={set} required placeholder="Full name" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 text-[15px]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wider">Your Age</label>
                        <input type="number" name="age" value={form.age} onChange={set} required min="18" max="85" placeholder="e.g. 35" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 text-[15px]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wider">Coverage Interest</label>
                        <select name="coverage" value={form.coverage} onChange={set} required className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 text-[15px] appearance-none bg-[url('data:image/svg+xml,%3Csvg+xmlns=%27http://www.w3.org/2000/svg%27+width=%2716%27+height=%2716%27+viewBox=%270+0+24+24%27+fill=%27none%27+stroke=%27%23829ab1%27+stroke-width=%272%27%3E%3Cpath+d=%27m6+9+6+6+6-6%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.75rem_center] pr-10">
                          <option value="">Select type...</option>
                          <option>IUL (Index Universal Life)</option>
                          <option>Term Life</option>
                          <option>Whole Life</option>
                          <option>Final Expense</option>
                          <option>Not Sure — Help Me Choose</option>
                        </select>
                      </div>
                      <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-base transition-all active:scale-[0.98]">
                        See My Estimated Rate <ArrowRight className="w-5 h-5" />
                      </button>
                      <p className="text-navy-300 text-xs text-center flex items-center justify-center gap-1">
                        <Shield className="w-3 h-3" /> No spam. Your info stays private.
                      </p>
                    </form>
                  )}
                </div>
              </div>
              {/* Click to call under form */}
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
