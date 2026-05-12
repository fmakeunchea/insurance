import { useState, useEffect } from 'react';
import { Cpu, Code2, Cloud, TrendingUp, Shield, CheckCircle, ArrowRight, Calendar, DollarSign, Terminal, Sparkles, Lock } from 'lucide-react';
import SEO from '../components/SEO';
import { trackLead } from '../utils/track';

export default function ForEngineers() {
  const [form, setForm] = useState({ name: '', email: '', company: '', salary: '' });
  const [sent, setSent] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `Engineer Lead: ${form.name} from ${form.company} — ${form.salary}`,
          source: 'For Engineers Landing Page',
        }),
      });
    } catch {}
    trackLead('For Engineers Landing', { salary: form.salary });
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Life Insurance for Engineers — IUL for Tech Workers"
        description="Former AWS DevOps engineer turned licensed insurance agent. IUL, term life, and disability insurance for software engineers, devs, and tech professionals. Licensed in all 50 states."
        path="/for-engineers"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,153,102,0.15),transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
                <Terminal className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 text-sm font-semibold">Built for Engineers, by an Engineer</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
                Your 401(k) Is a <span className="text-red-400">Tax Time Bomb</span>.<br />
                Here's the <span className="text-gold-400">Engineer's Hedge</span>.
              </h1>
              <p className="text-lg text-navy-200 mb-8 max-w-xl">
                I'm a former AWS DevOps engineer turned licensed insurance agent in all 50 states.
                I help software engineers, devs, and tech professionals build tax-free wealth using
                Index Universal Life — the strategy your CFO uses but Reddit never told you about.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#audit" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-base">
                  Get My Free Tax-Bomb Audit <ArrowRight className="w-5 h-5" />
                </a>
                <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-base">
                  <Calendar className="w-5 h-5" /> Book a 20-Min Call
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-navy-950 border border-navy-700 rounded-xl p-6 font-mono text-sm shadow-2xl">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-navy-800">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-navy-400 text-xs ml-2">tax-strategy.sh</span>
                </div>
                <div className="space-y-1.5 text-[13px] leading-relaxed">
                  <div className="text-navy-500"># Diagnosing $200K engineer retirement</div>
                  <div className="text-gold-400">$ check_tax_exposure --401k</div>
                  <div className="text-red-400">FAIL: 100% taxable on withdrawal</div>
                  <div className="text-red-400">FAIL: Future tax rate UNKNOWN</div>
                  <div className="text-red-400">FAIL: RMDs forced at age 73</div>
                  <div className="text-navy-500 mt-2"># Try alternative...</div>
                  <div className="text-gold-400">$ deploy_iul --tax-free</div>
                  <div className="text-green-400">PASS: 0% floor (no losses)</div>
                  <div className="text-green-400">PASS: Tax-free loans</div>
                  <div className="text-green-400">PASS: Living benefits enabled</div>
                  <div className="text-green-400 mt-2 font-bold">Status: Wealth Architecture deployed ✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why engineers section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 text-center mb-4">
          Why Most Engineers Are <span className="text-red-600">Underinsured</span> and Overtaxed
        </h2>
        <p className="text-navy-500 text-center max-w-2xl mx-auto mb-14">
          If you're earning $150K–$500K in tech, here's what your company plan probably doesn't cover.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Code2, title: 'Your Employer Coverage Is 1x Salary', text: 'Most tech companies give you $150K–$200K in group life insurance. Your family needs $1M–$3M. The gap is on you.' },
            { icon: Cloud, title: 'You Leave Coverage Behind When You Switch Jobs', text: 'Tech workers switch jobs every 2–3 years. Each switch resets your coverage. Personal IUL stays with you.' },
            { icon: TrendingUp, title: 'Your RSU Math Doesn\'t Account for Tax', text: 'You\'re heavily concentrated in your employer\'s stock. IUL diversifies your wealth with zero correlation to your equity comp.' },
            { icon: DollarSign, title: 'Your 401(k) Match Caps at $23,500/year', text: 'Maxing your 401(k) is the floor, not the ceiling. IUL has no IRS contribution limit and grows tax-free.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-navy-50/50 border border-navy-100 rounded-2xl p-7">
              <Icon className="w-7 h-7 text-gold-500 mb-4" />
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">{title}</h3>
              <p className="text-navy-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Math */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">
            The Math: <span className="text-gold-400">$200K Engineer, 30 Years</span>
          </h2>
          <p className="text-navy-300 text-center mb-12">
            Real numbers. Same person. Two retirement strategies.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-navy-900 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="px-5 py-4 text-left">Strategy</th>
                  <th className="px-5 py-4 text-left">Monthly Contribution</th>
                  <th className="px-5 py-4 text-left">After 30 Years (Pre-tax)</th>
                  <th className="px-5 py-4 text-left bg-gold-600/20">After Tax</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-navy-800">
                  <td className="px-5 py-4 text-navy-300">401(k) only</td>
                  <td className="px-5 py-4 text-navy-300">$2,000</td>
                  <td className="px-5 py-4 text-navy-300">$2.4M</td>
                  <td className="px-5 py-4 text-red-400 font-bold">$1.5M (37% tax)</td>
                </tr>
                <tr className="border-t border-navy-800">
                  <td className="px-5 py-4 text-navy-300">Brokerage</td>
                  <td className="px-5 py-4 text-navy-300">$2,000</td>
                  <td className="px-5 py-4 text-navy-300">$2.0M</td>
                  <td className="px-5 py-4 text-red-400 font-bold">$1.7M (cap gains)</td>
                </tr>
                <tr className="border-t border-navy-800 bg-gold-500/5">
                  <td className="px-5 py-4 text-gold-400 font-bold">IUL + 401(k) match</td>
                  <td className="px-5 py-4 text-gold-400 font-bold">$2,000</td>
                  <td className="px-5 py-4 text-gold-400 font-bold">$2.1M</td>
                  <td className="px-5 py-4 text-green-400 font-bold">$2.1M (0% tax)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-navy-400 text-xs text-center mt-4">
            Assumes 7% average return, 37% marginal bracket, 20% capital gains.
            IUL projection uses 6.5% effective crediting with 0% floor.
            Past performance does not guarantee future results.
          </p>
          <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6 mt-8 text-center">
            <p className="text-gold-300 text-lg font-semibold">
              The IUL strategy keeps <span className="text-white">$400K–$600K more</span> in your pocket at retirement —
              tax-free, accessible at any age, with a death benefit and living benefits included.
            </p>
          </div>
        </div>
      </section>

      {/* The unique angle */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-12">
            Why Work With an Engineer-Turned-Agent?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: 'I speak your language', text: 'No insurance jargon. I explain IUL like you\'d explain Kubernetes to a junior. Systems thinking, real math, no fluff.' },
              { icon: Lock, title: 'I understand your comp', text: 'RSUs, options, golden handcuffs, vesting cliffs, severance scenarios. I\'ve been there. I design around it.' },
              { icon: Sparkles, title: 'I respect your time', text: 'Async over Slack. Video calls only when needed. No "let\'s grab coffee" — let\'s grab 20 minutes when it works for you.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white border-2 border-navy-100 rounded-2xl p-7 hover:border-gold-400 transition-colors">
                <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-2">{title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit form */}
      <section id="audit" className="bg-gradient-to-b from-navy-900 to-navy-950 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your <span className="text-gold-400">Free Tax-Bomb Audit</span>
            </h2>
            <p className="text-navy-300 max-w-xl mx-auto">
              I'll run the numbers on your specific situation — current comp, 401(k) balance,
              tax bracket — and show you exactly how much tax-free wealth you could build with IUL.
              Free. 20 minutes. No pressure.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {sent ? (
              <div className="text-center py-8">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">You're In.</h3>
                <p className="text-navy-500 mb-6">
                  I'll review your details and send your custom IUL projection within 24 hours.
                  Want to skip the wait?
                </p>
                <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl">
                  <Calendar className="w-5 h-5" /> Book a 20-Min Call Now
                </a>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder="First name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                  <input type="email" required placeholder="Work or personal email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                </div>
                <input type="text" placeholder="Company (optional, e.g. AWS, Google, Stripe)" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                <select required value={form.salary} onChange={(e) => setForm({ ...form, salary: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500">
                  <option value="">Total comp range *</option>
                  <option>$100K – $150K</option>
                  <option>$150K – $250K</option>
                  <option>$250K – $400K</option>
                  <option>$400K – $750K</option>
                  <option>$750K+</option>
                </select>
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-base transition-all active:scale-[0.98]">
                  Get My Free Audit <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-navy-300 text-xs text-center flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" /> Engineer-to-engineer. No spam. No pressure.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
