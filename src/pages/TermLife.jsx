import { useEffect } from 'react';
import { Shield, CheckCircle, ArrowRight, Calendar, Clock, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const RATES = [
  { age: '25', m250: '$13', m500: '$19', m1m: '$30' },
  { age: '30', m250: '$14', m500: '$21', m1m: '$33' },
  { age: '35', m250: '$16', m500: '$26', m1m: '$42' },
  { age: '40', m250: '$22', m500: '$38', m1m: '$67' },
  { age: '45', m250: '$35', m500: '$62', m1m: '$115' },
  { age: '50', m250: '$55', m500: '$102', m1m: '$195' },
];

export default function TermLife() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm">Most Affordable Option</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Term Life Insurance in <span className="text-gold-400">Virginia</span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-8">
            Pure protection at the lowest cost. Ideal for young families, mortgage coverage, and income replacement.
            A healthy 30-year-old can get $500K in coverage for just <strong className="text-white">$21/month</strong>.
          </p>
          <a href="/#quote" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg">
            Get My Term Life Rate <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-display text-2xl font-bold text-navy-900 mb-8 text-center">Virginia Term Life Rates (2026)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy-50">
                <th className="px-4 py-3 text-left font-semibold text-navy-900 border border-navy-200">Age</th>
                <th className="px-4 py-3 text-left font-semibold text-navy-900 border border-navy-200">$250K</th>
                <th className="px-4 py-3 text-left font-semibold text-navy-900 border border-navy-200">$500K</th>
                <th className="px-4 py-3 text-left font-semibold text-navy-900 border border-navy-200">$1M</th>
              </tr>
            </thead>
            <tbody>
              {RATES.map(r => (
                <tr key={r.age} className="hover:bg-gold-50/50">
                  <td className="px-4 py-3 border border-navy-200 font-medium">{r.age}</td>
                  <td className="px-4 py-3 border border-navy-200">{r.m250}/mo</td>
                  <td className="px-4 py-3 border border-navy-200">{r.m500}/mo</td>
                  <td className="px-4 py-3 border border-navy-200">{r.m1m}/mo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-navy-400 text-xs mt-3 text-center">*Estimated rates for healthy, non-smoking applicants. 20-year level term.</p>
      </section>

      <section className="bg-navy-50/50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-8">Who Is Term Life Best For?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Users, title: 'Young Families', text: 'Replace your income if something happens during your children\'s growing years.' },
              { icon: DollarSign, title: 'Mortgage Protection', text: 'Match your term to your mortgage so your family keeps the home.' },
              { icon: Clock, title: 'Budget-Conscious', text: 'Get maximum coverage for minimum cost — often less than $1/day.' },
              { icon: Shield, title: 'Employer Supplement', text: 'Employer coverage is usually just 1-2x salary. Term fills the gap.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-navy-100 flex gap-4">
                <Icon className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">{title}</h3>
                  <p className="text-navy-500 text-sm">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Ready to Lock In Your Rate?</h2>
          <p className="text-navy-500 mb-8">Every year you wait, your premium goes up 4-8%. Let me find you the best rate today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl">
              <Calendar className="w-5 h-5" /> Get My Free Quote
            </a>
            <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl">
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
