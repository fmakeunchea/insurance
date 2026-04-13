import { CalendarCheck, Target, Search, FileCheck, Calculator } from 'lucide-react';

const STEPS = [
  {
    icon: CalendarCheck,
    step: '01',
    title: 'Get an Instant Quote',
    description: 'Use our free quote calculator to see estimated rates in 60 seconds. No commitment required.',
  },
  {
    icon: Target,
    step: '02',
    title: 'Review Your Goals',
    description: 'We\'ll have an honest conversation about where you are today and what you want to protect.',
  },
  {
    icon: Search,
    step: '03',
    title: 'Compare Top Carriers',
    description: 'I shop 15+ A-rated carriers to find you the best coverage at the best price.',
  },
  {
    icon: FileCheck,
    step: '04',
    title: 'Get Protected',
    description: 'Simple enrollment, fast approval, and ongoing support. Your family is covered.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5 leading-tight">
            Getting Protected Is{' '}
            <span className="text-gold-600">Simple</span>
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            No complicated applications. No confusing paperwork. Just a straightforward
            process designed around your comfort — from quote to coverage.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STEPS.map(({ icon: Icon, step, title, description }, i) => (
            <div key={step} className="relative group">
              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] right-0 h-px bg-gradient-to-r from-gold-300 to-gold-100 z-0" />
              )}

              <div className="relative bg-white rounded-2xl p-7 border border-navy-100 text-center hover:border-gold-200 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-900 group-hover:bg-gold-500 rounded-2xl mb-5 transition-colors duration-300 relative z-10">
                  <Icon className="w-6 h-6 text-gold-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="block text-gold-500 font-bold text-xs tracking-widest uppercase mb-2">
                  Step {step}
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-2.5">
                  {title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/25 active:scale-[0.98]"
          >
            <Calculator className="w-5 h-5" />
            Start With Step One
          </a>
        </div>
      </div>
    </section>
  );
}
