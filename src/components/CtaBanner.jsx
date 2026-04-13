import { Calculator, ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-navy-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
          Ready to Take the First Step Toward{' '}
          <span className="text-gold-400">Peace of Mind</span>?
        </h2>
        <p className="text-navy-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          A simple, no-pressure conversation is all it takes. See how affordable
          protecting your family can be — get an instant estimate in 60 seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-gold-500/30 active:scale-[0.98]"
          >
            <Calculator className="w-5 h-5" />
            Get Your Free Quote Now
          </a>
          <a
            href="https://calendly.com/harnordinc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all active:scale-[0.98]"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
