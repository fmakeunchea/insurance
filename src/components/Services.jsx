import { Shield, Flower2, TrendingUp, GraduationCap, ClipboardList, ArrowRight } from 'lucide-react';

const ITEMS = [
  { icon: Shield, title: 'Term Life Insurance', desc: 'Affordable coverage for a set period. Ideal for young families and mortgage protection.', price: 'From $18/mo' },
  { icon: Shield, title: 'Whole Life Insurance', desc: 'Lifetime coverage that builds cash value. Perfect for legacy planning and wealth building.', price: 'From $85/mo' },
  { icon: Flower2, title: 'Final Expense', desc: 'Covers burial and end-of-life costs so your family never has to worry.', price: 'From $30/mo' },
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
          {ITEMS.map(({ icon: Icon, title, desc, price }) => (
            <div key={title} className="group bg-white rounded-2xl p-7 border border-navy-100 hover:border-gold-200 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
              <div className="w-12 h-12 bg-navy-900 group-hover:bg-gold-500 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <Icon className="w-6 h-6 text-gold-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">{title}</h3>
              <p className="text-navy-500 text-sm leading-relaxed flex-1">{desc}</p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-navy-50">
                <span className="text-gold-600 text-sm font-semibold">{price}</span>
                <a href="#quick-form" className="text-navy-400 hover:text-gold-600 text-sm font-medium inline-flex items-center gap-1">
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
