import { useEffect } from 'react';
import { Shield, CheckCircle, ArrowRight, Calendar, Lock, TrendingUp, Heart } from 'lucide-react';
import SEO from '../components/SEO';

export default function WholeLife() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Whole Life Insurance in Virginia — Lifetime Coverage + Cash Value"
        description="Whole life insurance for Virginia families. Guaranteed lifetime coverage with cash value growth. From $85/month. Compare 15+ A-rated carriers with Fifi Makeunchea."
        path="/services/whole-life"
      />
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <Lock className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm">Lifetime Protection</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Whole Life Insurance: <span className="text-gold-400">Stability That Lasts Forever</span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-8">
            Permanent coverage that never expires, with guaranteed cash value growth.
            Perfect for legacy planning, final expenses, and families who want lifelong peace of mind.
          </p>
          <a href="/#quote" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg">
            Get My Whole Life Rate <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-display text-2xl font-bold text-navy-900 mb-8 text-center">Why Choose Whole Life?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Lock, title: 'Guaranteed Coverage', text: 'Your policy never expires as long as you pay your premiums. No renewal, no rate increases — ever.' },
            { icon: TrendingUp, title: 'Cash Value Growth', text: 'Your policy builds tax-deferred cash value over time that you can borrow against or withdraw.' },
            { icon: Heart, title: 'Legacy & Final Expense', text: 'Leave a guaranteed inheritance for your family or cover end-of-life costs without burden.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-navy-50/50 rounded-2xl p-7 border border-navy-100 text-center">
              <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">{title}</h3>
              <p className="text-navy-500 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-50/50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Whole Life vs. Term Life</h2>
          <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
            <thead><tr className="bg-navy-900 text-white">
              <th className="px-4 py-3 text-left">Feature</th>
              <th className="px-4 py-3 text-left">Term Life</th>
              <th className="px-4 py-3 text-left">Whole Life</th>
            </tr></thead>
            <tbody>
              {[
                ['Duration', '10-30 years', 'Lifetime'],
                ['Premiums', 'Lowest', 'Fixed, higher'],
                ['Cash Value', 'None', 'Guaranteed growth'],
                ['Best For', 'Young families', 'Legacy planning'],
                ['Rate Changes', 'Fixed during term', 'Never changes'],
              ].map(([f, t, w]) => (
                <tr key={f} className="border-t border-navy-100">
                  <td className="px-4 py-3 font-medium text-navy-900">{f}</td>
                  <td className="px-4 py-3 text-navy-500">{t}</td>
                  <td className="px-4 py-3 text-navy-900 font-medium">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Get Your Whole Life Quote</h2>
          <p className="text-navy-500 mb-8">I'll compare multiple carriers to find you the best rate and cash value projections.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl">
              <Calendar className="w-5 h-5" /> Free Quote
            </a>
            <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl">
              Book Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
