import { useEffect } from 'react';
import { Sparkles, CheckCircle, ArrowRight, Calendar, TrendingUp, Shield, HeartPulse, DollarSign } from 'lucide-react';

export default function WealthIUL() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,153,102,0.15),transparent_50%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-semibold">Our Most Popular Product</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            IUL: Life Insurance That <span className="text-gold-400">Builds Wealth</span> While You're Alive
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-4">
            Index Universal Life (IUL) isn't just insurance — it's a financial strategy.
            Cash value grows tax-free tied to market indexes, with <strong className="text-white">zero downside risk</strong>.
            Plus living benefits for critical, chronic, and terminal illness.
          </p>
          <p className="text-gold-400 font-semibold text-lg mb-8">
            Interest in IUL has grown 1,178% as Americans discover insurance as a wealth-building tool.
          </p>
          <a href="/#quote" className="inline-flex items-center gap-2 px-8 py-5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg">
            See If IUL Is Right for Me <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="font-display text-2xl font-bold text-navy-900 mb-10 text-center">How IUL Works for You</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: TrendingUp, title: 'Tax-Free Growth', text: 'Cash value grows tied to the S&P 500 — without the risk. Your floor is 0%, your ceiling is unlimited.' },
            { icon: DollarSign, title: 'Tax-Free Withdrawals', text: 'Access your money through policy loans — no taxes, no penalties, no restrictions on use.' },
            { icon: HeartPulse, title: 'Living Benefits', text: 'If diagnosed with critical, chronic, or terminal illness, access your death benefit while you\'re alive.' },
            { icon: Shield, title: 'Death Benefit', text: 'Your family receives the full tax-free death benefit — on top of any cash value you\'ve built.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-navy-100 hover:border-gold-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">{title}</h3>
              <p className="text-navy-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-950 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-6">IUL vs. Other Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-navy-800 text-white">
                <th className="px-4 py-3 text-left border border-navy-700">Feature</th>
                <th className="px-4 py-3 text-left border border-navy-700">Term</th>
                <th className="px-4 py-3 text-left border border-navy-700">Whole Life</th>
                <th className="px-4 py-3 text-left border border-navy-700 bg-gold-600/20">IUL</th>
              </tr></thead>
              <tbody>
                {[
                  ['Cash Value', 'No', 'Guaranteed, slow', 'Market-linked, faster'],
                  ['Tax-Free Loans', 'No', 'Yes', 'Yes'],
                  ['Living Benefits', 'Sometimes', 'Sometimes', 'Built-in'],
                  ['Flexible Premiums', 'No', 'No', 'Yes'],
                  ['Downside Protection', 'N/A', 'N/A', '0% floor — no losses'],
                  ['Wealth Building', 'No', 'Modest', 'Significant'],
                ].map(([f, t, w, i]) => (
                  <tr key={f} className="border-t border-navy-700">
                    <td className="px-4 py-3 text-navy-300 font-medium border border-navy-700">{f}</td>
                    <td className="px-4 py-3 text-navy-400 border border-navy-700">{t}</td>
                    <td className="px-4 py-3 text-navy-400 border border-navy-700">{w}</td>
                    <td className="px-4 py-3 text-gold-400 font-semibold border border-navy-700 bg-gold-600/5">{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-6 text-center">Who Is IUL Best For?</h2>
          <div className="space-y-3">
            {[
              'Professionals who want tax-free retirement income beyond their 401(k)',
              'Business owners seeking tax-advantaged wealth accumulation',
              'Parents who want to protect their family AND build generational wealth',
              'Anyone who wants living benefits for critical illness protection',
              'People who want market-linked growth with zero downside risk',
            ].map(t => (
              <div key={t} className="flex items-start gap-3 bg-navy-50/50 rounded-xl p-4 border border-navy-100">
                <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <p className="text-navy-700 text-sm">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-navy-900 to-navy-800 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Build Wealth with <span className="text-gold-400">IUL</span>?
          </h2>
          <p className="text-navy-300 mb-8">
            I'll walk you through exactly how IUL works for your specific situation — free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg">
              <Calendar className="w-5 h-5" /> Book My IUL Consultation
            </a>
            <a href="tel:+15404241852" className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-lg">
              Call (540) 424-1852
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
