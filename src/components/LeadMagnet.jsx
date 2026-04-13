import { useState } from 'react';
import { Download, ArrowRight, CheckCircle, Shield, BookOpen, FileText } from 'lucide-react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Lead magnet download:', email);
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full -translate-y-1/2 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Guide preview */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Guide mockup */}
              <div className="w-56 h-72 bg-white rounded-xl shadow-2xl shadow-navy-950/50 p-6 flex flex-col relative z-10">
                <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-display text-lg font-bold text-navy-900 leading-tight mb-2">
                  The Ultimate Life Insurance Buying Guide
                </h4>
                <p className="text-navy-400 text-xs leading-relaxed flex-1">
                  15 questions to ask, common mistakes to avoid, and how to save thousands.
                </p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-navy-100">
                  <FileText className="w-3.5 h-3.5 text-navy-400" />
                  <span className="text-navy-400 text-[10px]">Free PDF — 12 pages</span>
                </div>
              </div>
              {/* Shadow card behind */}
              <div className="absolute top-3 left-3 w-56 h-72 bg-navy-700 rounded-xl -z-0" />
            </div>
          </div>

          {/* Right: CTA */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-3 py-1 mb-5">
              <Download className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-gold-300 text-xs font-semibold">Free Download</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              Get the Free Guide: <span className="text-gold-400">15 Questions to Ask</span> Before
              Buying Life Insurance
            </h2>
            <p className="text-navy-300 leading-relaxed mb-6">
              Families who follow this guide save an average of <strong className="text-white">$47/month</strong> on their premiums.
              Learn the 5 costly mistakes that drain thousands from family budgets — and how to avoid every one.
            </p>

            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-5 py-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Check your inbox!</p>
                  <p className="text-navy-300 text-xs">Your free guide is on its way.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/25"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Get Free Guide</span>
                  </button>
                </div>
                <p className="text-navy-400 text-xs flex items-center gap-1.5">
                  <Shield className="w-3 h-3" />
                  No spam. Unsubscribe anytime. Your info stays private.
                </p>
              </form>
            )}

            {/* What's inside */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                'Term vs. Whole Life explained',
                'How much coverage you need',
                'Hidden fees to watch for',
                'How to save up to 40%',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span className="text-navy-300 text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
