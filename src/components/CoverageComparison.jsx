import React, { useState } from 'react';
import { Check, X, ArrowRight, Info } from 'lucide-react';

const PLANS = [
  {
    name: 'Term Life',
    tagline: 'Most Affordable',
    price: 'From $18',
    period: '/month',
    description: 'Pure protection for a set period — ideal for young families and mortgages.',
    popular: true,
    features: [
      { label: 'Coverage Duration', value: '10, 20, or 30 years' },
      { label: 'Monthly Cost', value: 'Lowest', highlight: true },
      { label: 'Cash Value', value: false },
      { label: 'Fixed Premiums', value: true },
      { label: 'Convertible to Permanent', value: true },
      { label: 'Death Benefit', value: '$50K – $1M+' },
      { label: 'Best For', value: 'Young families, mortgages' },
    ],
  },
  {
    name: 'Whole Life',
    tagline: 'Lifetime Protection',
    price: 'From $85',
    period: '/month',
    description: 'Permanent coverage that builds tax-deferred cash value over time.',
    popular: false,
    features: [
      { label: 'Coverage Duration', value: 'Lifetime' },
      { label: 'Monthly Cost', value: 'Moderate' },
      { label: 'Cash Value', value: true },
      { label: 'Fixed Premiums', value: true },
      { label: 'Convertible to Permanent', value: 'N/A' },
      { label: 'Death Benefit', value: '$25K – $500K+' },
      { label: 'Best For', value: 'Wealth building, legacy' },
    ],
  },
  {
    name: 'Final Expense',
    tagline: 'Peace of Mind',
    price: 'From $30',
    period: '/month',
    description: 'Simplified coverage to protect your family from end-of-life costs.',
    popular: false,
    features: [
      { label: 'Coverage Duration', value: 'Lifetime' },
      { label: 'Monthly Cost', value: 'Low' },
      { label: 'Cash Value', value: true },
      { label: 'Fixed Premiums', value: true },
      { label: 'Convertible to Permanent', value: 'N/A' },
      { label: 'Death Benefit', value: '$5K – $50K' },
      { label: 'Best For', value: 'Seniors, burial costs' },
    ],
  },
];

function FeatureValue({ value }) {
  if (value === true) return <Check className="w-5 h-5 text-green-500" />;
  if (value === false) return <X className="w-5 h-5 text-navy-300" />;
  return <span className="text-sm font-medium text-navy-700">{value}</span>;
}

export default function CoverageComparison() {
  const [activePlan, setActivePlan] = useState(0);

  return (
    <section id="compare" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Compare Plans
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5 leading-tight">
            Find the Right <span className="text-gold-600">Coverage</span> for You
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            Not sure which plan fits best? Here's a side-by-side comparison to help you decide.
            I'll walk you through the details during your free consultation.
          </p>
        </div>

        {/* Mobile Plan Tabs */}
        <div className="flex lg:hidden gap-2 mb-6 overflow-x-auto pb-2">
          {PLANS.map((plan, i) => (
            <button
              key={plan.name}
              onClick={() => setActivePlan(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activePlan === i
                  ? 'bg-navy-900 text-white'
                  : 'bg-navy-50 text-navy-600'
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-7 transition-all duration-300 ${
                plan.popular
                  ? 'border-gold-400 bg-white shadow-xl shadow-gold-500/10'
                  : 'border-navy-100 bg-white hover:border-navy-200'
              } ${i !== activePlan ? 'hidden lg:block' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gold-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <p className="text-navy-400 text-xs font-semibold uppercase tracking-wider mb-1">{plan.tagline}</p>
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-1">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-0.5 my-3">
                  <span className="text-3xl font-bold text-navy-900">{plan.price}</span>
                  <span className="text-navy-400 text-sm">{plan.period}</span>
                </div>
                <p className="text-navy-500 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div
                    key={feature.label}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg ${
                      feature.highlight ? 'bg-green-50' : ''
                    }`}
                  >
                    <span className="text-navy-500 text-sm">{feature.label}</span>
                    <FeatureValue value={feature.value} />
                  </div>
                ))}
              </div>

              <a
                href="#quote"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/25'
                    : 'bg-navy-900 hover:bg-navy-800 text-white'
                }`}
              >
                Get a {plan.name} Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Help note */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-navy-50 rounded-full px-5 py-2.5">
            <Info className="w-4 h-4 text-navy-400" />
            <span className="text-navy-500 text-sm">
              Not sure which is right? <a href="#contact" className="text-gold-600 font-semibold hover:text-gold-700">Let's talk</a> — I'll help you choose.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
