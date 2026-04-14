import { CalendarCheck, Target, Search, FileCheck } from 'lucide-react';

const STEPS = [
  { icon: CalendarCheck, step: '01', title: 'Request a Quote', desc: 'Fill out the quick form or call me. It takes less than a minute.' },
  { icon: Target, step: '02', title: 'Review Your Goals', desc: 'We\'ll have an honest conversation about what you want to protect.' },
  { icon: Search, step: '03', title: 'Compare Top Carriers', desc: 'I shop 15+ A-rated carriers to find your best coverage and rate.' },
  { icon: FileCheck, step: '04', title: 'Get Protected', desc: 'Simple enrollment, fast approval, and ongoing support.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4 block">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5">Getting Protected Is <span className="text-gold-600">Simple</span></h2>
          <p className="text-navy-500 text-lg">No complicated paperwork. Just a straightforward process designed around your comfort.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="group bg-white rounded-2xl p-7 border border-navy-100 text-center hover:border-gold-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-navy-900 group-hover:bg-gold-500 rounded-2xl flex items-center justify-center mb-5 mx-auto transition-colors">
                <Icon className="w-6 h-6 text-gold-400 group-hover:text-white transition-colors" />
              </div>
              <span className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-2 block">Step {step}</span>
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">{title}</h3>
              <p className="text-navy-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
