import { Shield, Flower2, TrendingUp, GraduationCap, ClipboardList, ArrowRight, Sparkles, HeartPulse } from 'lucide-react';

const ITEMS = [
  { icon: Sparkles, title: 'IUL — Index Universal Life', desc: 'Our most popular product. Permanent life insurance with cash value growth tied to market indexes — plus tax-free withdrawals, policy loans, and living benefits for critical, chronic, and terminal illness. Protection that works while you\'re alive, not just after.', price: 'Custom plans', featured: true },
  { icon: Shield, title: 'Term Life Insurance', desc: 'Affordable coverage for a set period. Ideal for young families and mortgage protection.', price: 'From $18/mo' },
  { icon: Shield, title: 'Whole Life Insurance', desc: 'Lifetime coverage that builds cash value. Perfect for legacy planning and wealth building.', price: 'From $85/mo' },
  { icon: Flower2, title: 'Final Expense', desc: 'Covers burial and end-of-life costs so your family never has to worry.', price: 'From $30/mo' },
  { icon: HeartPulse, title: 'Living Benefits', desc: 'Access your death benefit while you\'re still alive if diagnosed with a critical, chronic, or terminal illness. Built into many of our policies at no extra cost.', price: 'Included' },
  { icon: GraduationCap, title: 'Family Protection', desc: 'Comprehensive plans that protect your family\'s future, education, and financial security.', price: 'Custom plans' },
  { icon: TrendingUp, title: 'Retirement Strategies', desc: 'Build a secure financial future with tax-advantaged options tailored to your goals.', price: 'Custom plans' },
  { icon: ClipboardList, title: 'Free Needs Analysis', desc: 'A comprehensive review of your situation so we find the right coverage for you.', price: 'Always free' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4 block">What I Offer</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5">
            Solutions Designed Around <span className="text-gold-600">Your Life</span>
          </h2>
          <p className="text-navy-500 text-lg">I work with 15+ A-rated carriers to find the right protection for your unique goals.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map(({ icon: Icon, title, desc, price, featured }) => (
            <div key={title} className={`group rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col ${featured ? 'bg-gradient-to-br from-navy-900 to-navy-800 border-2 border-gold-400 sm:col-span-2 lg:col-span-1 relative' : 'bg-white border border-navy-100 hover:border-gold-200'}`}>
              {featured && <span className="absolute -top-3 left-6 bg-gold-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${featured ? 'bg-gold-500' : 'bg-navy-900 group-hover:bg-gold-500'}`}>
                <Icon className={`w-6 h-6 transition-colors ${featured ? 'text-white' : 'text-gold-400 group-hover:text-white'}`} />
              </div>
              <h3 className={`font-display text-xl font-semibold mb-3 ${featured ? 'text-white' : 'text-navy-900'}`}>{title}</h3>
              <p className={`text-sm leading-relaxed flex-1 ${featured ? 'text-navy-300' : 'text-navy-500'}`}>{desc}</p>
              <div className={`flex items-center justify-between mt-5 pt-4 ${featured ? 'border-t border-navy-700' : 'border-t border-navy-50'}`}>
                <span className={`text-sm font-semibold ${featured ? 'text-gold-400' : 'text-gold-600'}`}>{price}</span>
                <a href="/#quick-form" className={`text-sm font-medium inline-flex items-center gap-1 ${featured ? 'text-gold-400 hover:text-gold-300' : 'text-navy-400 hover:text-gold-600'}`}>
                  Get Quote <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
