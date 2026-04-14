import { useState } from 'react';
import { Send, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { trackLead } from '../utils/track';

export default function QuickForm() {
  const [data, setData] = useState({ name: '', phone: '', email: '', coverage: '', time: '' });
  const [done, setDone] = useState(false);

  const set = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Lead: ${data.name} — ${data.coverage}` }),
      });
    } catch {}
    trackLead('Quick Form', { coverage: data.coverage });
    setDone(true);
  };

  const input = "w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 text-[15px]";

  return (
    <section id="quick-form" className="bg-gradient-to-b from-navy-900 to-navy-950 py-16 sm:py-20 -mt-1">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your Free <span className="text-gold-400">Personalized Quote</span>
          </h2>
          <p className="text-navy-300 leading-relaxed mb-8">
            Most clients save <strong className="text-white">$300–$500/year</strong> compared to going direct.
            Tell me a bit about yourself and I'll find your best rate from 15+ carriers.
          </p>
          {[
            'Same-day personal response',
            '15+ A-rated carriers compared',
            'You choose how we connect',
            'Zero pressure, always',
          ].map(t => (
            <div key={t} className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-gold-400 shrink-0" />
              <span className="text-navy-200 text-sm">{t}</span>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3 bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          {done ? (
            <div className="text-center py-8">
              <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">You're All Set!</h3>
              <p className="text-navy-500 mb-6">I'll review your needs and reach out with a personalized recommendation.</p>
              <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl">
                Want Faster? Book a Call <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <p className="font-display text-lg font-bold text-navy-900 mb-1">Tell Me About Your Needs</p>
              <p className="text-navy-400 text-sm mb-4">60 seconds is all it takes.</p>
              <input type="text" name="name" value={data.name} onChange={set} required placeholder="Full Name *" className={input} />
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="tel" name="phone" value={data.phone} onChange={set} placeholder="Phone (optional)" className={input} />
                <input type="email" name="email" value={data.email} onChange={set} placeholder="Email (optional)" className={input} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select name="coverage" value={data.coverage} onChange={set} className={input}>
                  <option value="">Coverage type...</option>
                  <option>Term Life</option>
                  <option>Whole Life</option>
                  <option>Final Expense</option>
                  <option>Family Protection</option>
                  <option>Retirement</option>
                  <option>Not Sure — Help Me Choose</option>
                </select>
                <select name="time" value={data.time} onChange={set} className={input}>
                  <option value="">Best time to call...</option>
                  <option>Morning (9am–12pm)</option>
                  <option>Afternoon (12pm–3pm)</option>
                  <option>Evening (3pm–6pm)</option>
                  <option>Anytime</option>
                </select>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-base transition-all active:scale-[0.98]">
                <Send className="w-5 h-5" /> Get My Free Quote
              </button>
              <p className="text-navy-300 text-xs text-center flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" /> Your info stays private. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
