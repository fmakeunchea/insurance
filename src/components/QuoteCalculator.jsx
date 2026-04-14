import { useState } from 'react';
import { Calculator, ArrowRight, ArrowLeft, CheckCircle, Shield, Clock, DollarSign, User, Heart, Calendar } from 'lucide-react';
import { trackQuote } from '../utils/track';

const TYPES = [
  { id: 'term', label: 'Term Life', desc: 'Affordable coverage for a set period', icon: Clock, popular: true },
  { id: 'whole', label: 'Whole Life', desc: 'Lifetime coverage with cash value', icon: Shield },
  { id: 'final', label: 'Final Expense', desc: 'Covers end-of-life costs', icon: Heart },
];
const AGES = ['18-25', '26-35', '36-45', '46-55', '56-65', '65+'];
const HEALTH = [
  { id: 'excellent', label: 'Excellent', desc: 'No issues, non-smoker' },
  { id: 'good', label: 'Good', desc: 'Minor issues, non-smoker' },
  { id: 'average', label: 'Average', desc: 'Some conditions or smoker' },
  { id: 'below', label: 'Below Average', desc: 'Multiple conditions' },
];
const AMOUNTS = [
  { v: 50000, l: '$50K' }, { v: 100000, l: '$100K' }, { v: 250000, l: '$250K' },
  { v: 500000, l: '$500K' }, { v: 750000, l: '$750K' }, { v: 1000000, l: '$1M' },
];

function estimate(type, age, health, amount) {
  const rates = { term: 0.0006, whole: 0.0015, final: 0.002 };
  const ageMul = { '18-25': 0.7, '26-35': 0.85, '36-45': 1, '46-55': 1.4, '56-65': 2, '65+': 3.2 };
  const healthMul = { excellent: 0.8, good: 1, average: 1.3, below: 1.7 };
  return Math.round(amount * (rates[type] || 0.001) * (ageMul[age] || 1) * (healthMul[health] || 1) * 100) / 100;
}

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [d, setD] = useState({ type: '', age: '', health: '', amount: 250000, name: '', email: '', phone: '' });
  const [results, setResults] = useState(false);

  const set = (k, v) => setD({ ...d, [k]: v });
  const canNext = () => {
    if (step === 1) return d.type !== '';
    if (step === 2) return d.age !== '' && d.health !== '';
    if (step === 3) return d.amount > 0;
    if (step === 4) return d.name !== '' && d.email !== '' && d.phone !== '';
    return false;
  };

  const next = async () => {
    if (step < 4) return setStep(step + 1);
    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, _subject: `Quote Lead: ${d.name} — ${d.type} $${d.amount.toLocaleString()}`, source: 'Quote Calculator' }),
      });
    } catch {}
    trackQuote('Quote Calculator', { type: d.type, amount: d.amount });
    setResults(true);
  };

  const est = estimate(d.type, d.age, d.health, d.amount);
  const sel = (active) => `text-left p-5 rounded-xl border-2 transition-all ${active ? 'border-gold-500 bg-gold-50 shadow-lg shadow-gold-500/10' : 'border-navy-100 hover:border-navy-200'}`;
  const chip = (active) => `py-3 px-3 rounded-xl text-sm font-semibold border-2 transition-all ${active ? 'border-gold-500 bg-gold-50 text-gold-700' : 'border-navy-100 text-navy-600 hover:border-navy-200'}`;

  return (
    <section id="quote" className="py-20 sm:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,153,102,0.08),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <Calculator className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">Free Instant Estimate</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your <span className="text-gold-400">Personalized Quote</span> in 60 Seconds
          </h2>
          <p className="text-navy-300 text-lg">No commitment. See how affordable protection can be.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {!results && (
            <div className="bg-navy-50 px-8 py-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-navy-600">Step {step} of 4</span>
                <span className="text-navy-400">{step * 25}%</span>
              </div>
              <div className="w-full bg-navy-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-gold-500 to-gold-400 h-2 rounded-full transition-all duration-500" style={{ width: `${step * 25}%` }} />
              </div>
            </div>
          )}

          <div className="p-8 sm:p-10">
            {results ? (
              <div className="text-center">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">Your Estimated Monthly Premium</h3>
                <div className="my-8">
                  <span className="text-navy-400 text-2xl">$</span>
                  <span className="text-6xl font-bold text-navy-900 font-display">{est.toFixed(0)}</span>
                  <span className="text-navy-400 text-lg">/mo</span>
                  <p className="text-navy-400 text-sm mt-2">That's ${(est / 30).toFixed(2)}/day to protect your family</p>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-navy-50 rounded-xl p-4"><p className="text-navy-400 text-xs mb-1">Type</p><p className="font-semibold text-navy-900 capitalize">{d.type} Life</p></div>
                  <div className="bg-navy-50 rounded-xl p-4"><p className="text-navy-400 text-xs mb-1">Coverage</p><p className="font-semibold text-navy-900">${d.amount.toLocaleString()}</p></div>
                  <div className="bg-navy-50 rounded-xl p-4"><p className="text-navy-400 text-xs mb-1">Annual</p><p className="font-semibold text-navy-900">${(est * 12).toFixed(0)}/yr</p></div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
                  <p className="text-navy-700 text-sm"><strong>Great news, {d.name}!</strong> Your actual rate may be even lower. I compare 15+ carriers to find the absolute best price.</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                  <p className="text-navy-700 text-xs"><strong>Important:</strong> Waiting 1 year could increase your premium by 8–12%. Lock in today's rate.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg">
                    <Calendar className="w-5 h-5" /> Book Free Consultation
                  </a>
                  <a href="tel:+15404241852" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all">
                    Call (540) 424-1852
                  </a>
                </div>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-2">What type of coverage?</h3>
                    <p className="text-navy-400 text-sm mb-6">Select the option that best fits your needs.</p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {TYPES.map(({ id, label, desc, icon: Icon, popular }) => (
                        <button key={id} onClick={() => set('type', id)} className={`relative ${sel(d.type === id)}`}>
                          {popular && <span className="absolute -top-2.5 right-3 bg-gold-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Popular</span>}
                          <Icon className={`w-8 h-8 mb-3 ${d.type === id ? 'text-gold-500' : 'text-navy-300'}`} />
                          <p className="font-semibold text-navy-900">{label}</p>
                          <p className="text-navy-400 text-xs mt-1">{desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-6">Tell us about yourself</h3>
                    <label className="block text-sm font-semibold text-navy-700 mb-3"><User className="w-4 h-4 inline mr-1 text-navy-400" />Age Range</label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
                      {AGES.map(a => <button key={a} onClick={() => set('age', a)} className={chip(d.age === a)}>{a}</button>)}
                    </div>
                    <label className="block text-sm font-semibold text-navy-700 mb-3"><Heart className="w-4 h-4 inline mr-1 text-navy-400" />Health Status</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {HEALTH.map(h => (
                        <button key={h.id} onClick={() => set('health', h.id)} className={sel(d.health === h.id)}>
                          <p className="font-medium text-navy-900 text-sm">{h.label}</p>
                          <p className="text-navy-400 text-xs">{h.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-2">How much coverage?</h3>
                    <p className="text-navy-400 text-sm mb-6">Rule of thumb: 10–12x your annual income.</p>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
                      {AMOUNTS.map(a => <button key={a.v} onClick={() => set('amount', a.v)} className={chip(d.amount === a.v)}>{a.l}</button>)}
                    </div>
                    <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-6 text-center">
                      <p className="text-navy-300 text-sm mb-2">Estimated Monthly Premium</p>
                      <span className="text-gold-400 text-lg">$</span>
                      <span className="text-4xl font-bold text-white font-display">{estimate(d.type, d.age, d.health, d.amount).toFixed(0)}</span>
                      <span className="text-navy-400">/mo</span>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-2">Where should we send your quote?</h3>
                    <p className="text-navy-400 text-sm mb-6">100% private. No spam, ever.</p>
                    <div className="space-y-4">
                      <input type="text" value={d.name} onChange={e => set('name', e.target.value)} placeholder="Full Name *" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input type="email" value={d.email} onChange={e => set('email', e.target.value)} placeholder="Email *" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                        <input type="tel" value={d.phone} onChange={e => set('phone', e.target.value)} placeholder="Phone *" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-navy-100 text-navy-400 text-xs">
                      <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" />Encrypted</span>
                      <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" />No spam</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" />100% free</span>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8 pt-6 border-t border-navy-100">
                  {step > 1 ? (
                    <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 px-5 py-3 text-navy-600 hover:text-navy-900 font-medium rounded-xl hover:bg-navy-50">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                  ) : <div />}
                  <button onClick={next} disabled={!canNext()} className={`flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl transition-all ${canNext() ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/25' : 'bg-navy-100 text-navy-300 cursor-not-allowed'}`}>
                    {step === 4 ? 'See My Quote' : 'Continue'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <p className="text-center text-navy-400 text-sm mt-6">Trusted by 1,200+ families in the Fredericksburg area</p>
      </div>
    </section>
  );
}
