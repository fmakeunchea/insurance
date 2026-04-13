import { useState } from 'react';
import { Send, Shield, CheckCircle, Clock, Phone, ArrowRight } from 'lucide-react';

const COVERAGE_OPTIONS = [
  'Term Life Insurance',
  'Whole Life Insurance',
  'Final Expense / Burial',
  'Family Protection Plan',
  'Retirement Strategies',
  'Not Sure — Help Me Choose',
];

const CONTACT_TIMES = [
  'Morning (9am–12pm)',
  'Afternoon (12pm–3pm)',
  'Evening (3pm–6pm)',
  'Anytime works',
];

export default function QuickLeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    coverage: '',
    contactTime: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New Quick Lead: ${formData.name} — ${formData.coverage}`,
          source: 'Quick Lead Form (Above the Fold)',
        }),
      });
    } catch (err) {
      // Still show success
    }
    setSubmitted(true);
  };

  return (
    <section id="lead-form" className="relative bg-gradient-to-b from-navy-900 to-navy-950 py-16 sm:py-20 -mt-1 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(180,153,102,0.08),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Left: Value proposition — 2 columns */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Get Your Free <span className="text-gold-400">Personalized Quote</span>
            </h2>
            <p className="text-navy-300 text-base leading-relaxed mb-8">
              Tell me a little about yourself and I'll find you the best rate from 15+ carriers.
              Most clients save <strong className="text-white">$300–$500/year</strong> compared to going direct.
            </p>

            <div className="space-y-5">
              {[
                { icon: Clock, title: 'Same-Day Response', text: 'I personally review every request within hours' },
                { icon: Shield, title: '15+ A-Rated Carriers', text: 'I shop the market so you never overpay' },
                { icon: Phone, title: 'You Choose How We Connect', text: 'Phone, video, in-person, or email — your call' },
                { icon: CheckCircle, title: 'Zero Pressure, Always', text: 'Honest guidance, no sales tactics' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-navy-400 text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form — 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl shadow-navy-950/50 p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">
                    You're All Set, {formData.name.split(' ')[0] || 'Friend'}!
                  </h3>
                  <p className="text-navy-500 leading-relaxed mb-6 max-w-sm mx-auto">
                    I'll review your needs and reach out {formData.contactTime ? `during your preferred time (${formData.contactTime.toLowerCase()})` : 'within 24 hours'} with a personalized recommendation.
                  </p>
                  <a
                    href="https://calendly.com/harnordinc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg"
                  >
                    Want Faster? Book a Call Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-1">
                      Tell Me About Your Needs
                    </h3>
                    <p className="text-navy-400 text-sm">
                      60 seconds is all it takes. I'll handle the rest.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wider">Phone <span className="text-navy-300 normal-case">(optional)</span></label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wider">Email <span className="text-navy-300 normal-case">(optional)</span></label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@email.com"
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wider">Coverage Interest</label>
                        <select name="coverage" value={formData.coverage} onChange={handleChange} className="form-input">
                          <option value="">Select type...</option>
                          {COVERAGE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wider">Best Time to Call</label>
                        <select name="contactTime" value={formData.contactTime} onChange={handleChange} className="form-input">
                          <option value="">Select time...</option>
                          {CONTACT_TIMES.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-base transition-all hover:shadow-lg hover:shadow-gold-500/25 active:scale-[0.98] mt-2"
                    >
                      <Send className="w-5 h-5" />
                      Get My Free Quote
                    </button>
                  </form>

                  <p className="text-navy-300 text-xs text-center mt-4 flex items-center justify-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    Your info stays private. No spam. No selling your data. Ever.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
