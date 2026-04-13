import React, { useState } from 'react';
import { Calculator, ArrowRight, ArrowLeft, CheckCircle, Shield, Clock, DollarSign, User, Heart, Calendar } from 'lucide-react';

const COVERAGE_TYPES = [
  { id: 'term', label: 'Term Life', description: 'Affordable coverage for a set period', icon: Clock, popular: true },
  { id: 'whole', label: 'Whole Life', description: 'Lifetime coverage with cash value', icon: Shield, popular: false },
  { id: 'final', label: 'Final Expense', description: 'Covers end-of-life costs', icon: Heart, popular: false },
];

const AGE_RANGES = ['18-25', '26-35', '36-45', '46-55', '56-65', '65+'];
const HEALTH_OPTIONS = [
  { id: 'excellent', label: 'Excellent', description: 'No health issues, non-smoker' },
  { id: 'good', label: 'Good', description: 'Minor issues, non-smoker' },
  { id: 'average', label: 'Average', description: 'Some conditions or smoker' },
  { id: 'below', label: 'Below Average', description: 'Multiple conditions' },
];

const COVERAGE_AMOUNTS = [
  { value: 50000, label: '$50K' },
  { value: 100000, label: '$100K' },
  { value: 250000, label: '$250K' },
  { value: 500000, label: '$500K' },
  { value: 750000, label: '$750K' },
  { value: 1000000, label: '$1M' },
];

function estimatePremium(type, age, health, amount) {
  const baseRates = { term: 0.0006, whole: 0.0015, final: 0.002 };
  const ageMultipliers = { '18-25': 0.7, '26-35': 0.85, '36-45': 1.0, '46-55': 1.4, '56-65': 2.0, '65+': 3.2 };
  const healthMultipliers = { excellent: 0.8, good: 1.0, average: 1.3, below: 1.7 };

  const base = baseRates[type] || 0.001;
  const ageMult = ageMultipliers[age] || 1.0;
  const healthMult = healthMultipliers[health] || 1.0;

  const monthly = amount * base * ageMult * healthMult;
  return Math.round(monthly * 100) / 100;
}

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    coverageType: '',
    age: '',
    health: '',
    coverageAmount: 250000,
    name: '',
    email: '',
    phone: '',
  });
  const [showResults, setShowResults] = useState(false);
  const totalSteps = 4;

  const canProceed = () => {
    switch (step) {
      case 1: return formData.coverageType !== '';
      case 2: return formData.age !== '' && formData.health !== '';
      case 3: return formData.coverageAmount > 0;
      case 4: return formData.name !== '' && formData.email !== '' && formData.phone !== '';
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const estimate = estimatePremium(formData.coverageType, formData.age, formData.health, formData.coverageAmount);

  return (
    <section id="quote" className="py-20 sm:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <Calculator className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">Free Instant Estimate</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Get Your <span className="text-gold-400">Personalized Quote</span> in 60 Seconds
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            No commitment required. See how affordable protecting your family can be.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-navy-950/50 overflow-hidden">
          {/* Progress Bar */}
          {!showResults && (
            <div className="bg-navy-50 px-8 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-navy-600">Step {step} of {totalSteps}</span>
                <span className="text-sm text-navy-400">{Math.round((step / totalSteps) * 100)}% complete</span>
              </div>
              <div className="w-full bg-navy-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-gold-500 to-gold-400 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="p-8 sm:p-10">
            {showResults ? (
              /* Results */
              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">
                  Your Estimated Monthly Premium
                </h3>
                <div className="my-8">
                  <div className="inline-flex items-baseline gap-1">
                    <span className="text-navy-400 text-2xl">$</span>
                    <span className="text-6xl font-bold text-navy-900 font-display">{estimate.toFixed(0)}</span>
                    <span className="text-navy-400 text-lg">/mo</span>
                  </div>
                  <p className="text-navy-400 text-sm mt-2">
                    That's just ${(estimate / 30).toFixed(2)} per day to protect your family
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-navy-50 rounded-xl p-4">
                    <p className="text-navy-400 text-xs mb-1">Coverage Type</p>
                    <p className="font-semibold text-navy-900 capitalize">{formData.coverageType} Life</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-4">
                    <p className="text-navy-400 text-xs mb-1">Coverage Amount</p>
                    <p className="font-semibold text-navy-900">${formData.coverageAmount.toLocaleString()}</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-4">
                    <p className="text-navy-400 text-xs mb-1">Annual Cost</p>
                    <p className="font-semibold text-navy-900">${(estimate * 12).toFixed(0)}/yr</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
                  <p className="text-navy-700 text-sm leading-relaxed">
                    <strong>Great news, {formData.name}!</strong> Your actual rate may be <strong>even lower</strong> — I compare
                    15+ carriers to find the absolute best price. I'll personally review your options and
                    reach out within 24 hours.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <p className="text-navy-700 text-xs">
                    <strong>Important:</strong> This rate is based on your current age. Waiting even 1 year could increase your premium by 8–12%.
                    Lock in today's rate by booking a free consultation.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/harnordinc"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Free Consultation Now
                  </a>
                  <a
                    href="tel:+15404241852"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all"
                  >
                    Call (540) 424-1852
                  </a>
                </div>
              </div>
            ) : (
              <>
                {/* Step 1: Coverage Type */}
                {step === 1 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
                      What type of coverage are you looking for?
                    </h3>
                    <p className="text-navy-400 text-sm mb-6">Select the option that best fits your needs.</p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {COVERAGE_TYPES.map(({ id, label, description, icon: Icon, popular }) => (
                        <button
                          key={id}
                          onClick={() => setFormData({ ...formData, coverageType: id })}
                          className={`relative text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                            formData.coverageType === id
                              ? 'border-gold-500 bg-gold-50 shadow-lg shadow-gold-500/10'
                              : 'border-navy-100 hover:border-navy-200 bg-white'
                          }`}
                        >
                          {popular && (
                            <span className="absolute -top-2.5 right-3 bg-gold-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                              Most Popular
                            </span>
                          )}
                          <Icon className={`w-8 h-8 mb-3 ${formData.coverageType === id ? 'text-gold-500' : 'text-navy-300'}`} />
                          <p className="font-semibold text-navy-900">{label}</p>
                          <p className="text-navy-400 text-xs mt-1">{description}</p>
                          {formData.coverageType === id && (
                            <CheckCircle className="absolute top-4 right-4 w-5 h-5 text-gold-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Age & Health */}
                {step === 2 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
                      Tell us about yourself
                    </h3>
                    <p className="text-navy-400 text-sm mb-6">This helps us provide a more accurate estimate.</p>

                    <div className="mb-8">
                      <label className="block text-sm font-semibold text-navy-700 mb-3">
                        <User className="w-4 h-4 inline mr-1.5 text-navy-400" />
                        Your Age Range
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {AGE_RANGES.map((range) => (
                          <button
                            key={range}
                            onClick={() => setFormData({ ...formData, age: range })}
                            className={`py-3 px-2 rounded-lg text-sm font-medium border transition-all ${
                              formData.age === range
                                ? 'border-gold-500 bg-gold-50 text-gold-700'
                                : 'border-navy-100 text-navy-600 hover:border-navy-200'
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-3">
                        <Heart className="w-4 h-4 inline mr-1.5 text-navy-400" />
                        General Health Status
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {HEALTH_OPTIONS.map(({ id, label, description }) => (
                          <button
                            key={id}
                            onClick={() => setFormData({ ...formData, health: id })}
                            className={`text-left p-4 rounded-xl border-2 transition-all ${
                              formData.health === id
                                ? 'border-gold-500 bg-gold-50'
                                : 'border-navy-100 hover:border-navy-200'
                            }`}
                          >
                            <p className="font-medium text-navy-900 text-sm">{label}</p>
                            <p className="text-navy-400 text-xs mt-0.5">{description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Coverage Amount */}
                {step === 3 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
                      How much coverage do you need?
                    </h3>
                    <p className="text-navy-400 text-sm mb-6">
                      A common rule of thumb: 10-12x your annual income.
                    </p>

                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
                      {COVERAGE_AMOUNTS.map(({ value, label }) => (
                        <button
                          key={value}
                          onClick={() => setFormData({ ...formData, coverageAmount: value })}
                          className={`py-4 px-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                            formData.coverageAmount === value
                              ? 'border-gold-500 bg-gold-50 text-gold-700 shadow-lg shadow-gold-500/10'
                              : 'border-navy-100 text-navy-600 hover:border-navy-200'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    {/* Live estimate preview */}
                    <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-6 text-center">
                      <p className="text-navy-300 text-sm mb-2">Estimated Monthly Premium</p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-gold-400 text-lg">$</span>
                        <span className="text-4xl font-bold text-white font-display">
                          {estimatePremium(formData.coverageType, formData.age, formData.health, formData.coverageAmount).toFixed(0)}
                        </span>
                        <span className="text-navy-400">/mo</span>
                      </div>
                      <p className="text-navy-400 text-xs mt-2">
                        ${formData.coverageAmount.toLocaleString()} in {formData.coverageType} life coverage
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Info */}
                {step === 4 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
                      Where should we send your quote?
                    </h3>
                    <p className="text-navy-400 text-sm mb-6">
                      Your information is 100% private. No spam, ever.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1.5">Full Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-1.5">Email Address</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="james@example.com"
                            className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-1.5">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                            className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Trust signals */}
                    <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-navy-100">
                      <div className="flex items-center gap-1.5 text-navy-400 text-xs">
                        <Shield className="w-3.5 h-3.5" />
                        <span>256-bit encryption</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-navy-400 text-xs">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>No spam guarantee</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-navy-400 text-xs">
                        <DollarSign className="w-3.5 h-3.5" />
                        <span>100% free, no obligation</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-100">
                  {step > 1 ? (
                    <button
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-5 py-3 text-navy-600 hover:text-navy-900 font-medium rounded-xl hover:bg-navy-50 transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl transition-all ${
                      canProceed()
                        ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/25 hover:shadow-xl'
                        : 'bg-navy-100 text-navy-300 cursor-not-allowed'
                    }`}
                  >
                    {step === totalSteps ? 'See My Quote' : 'Continue'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom trust text */}
        <p className="text-center text-navy-400 text-sm mt-6">
          Trusted by 1,200+ families across the Fredericksburg, Virginia area
        </p>
      </div>
    </section>
  );
}
