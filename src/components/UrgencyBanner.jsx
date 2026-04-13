import React from 'react';
import { TrendingUp, Clock, AlertCircle, ArrowRight } from 'lucide-react';

export default function UrgencyBanner() {
  return (
    <section className="py-14 bg-gradient-to-r from-red-50 via-amber-50 to-red-50 border-y border-amber-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-amber-600" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <AlertCircle className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-2">
              Did You Know? Rates Increase Every Year You Wait.
            </h3>
            <p className="text-navy-600 leading-relaxed">
              The average 30-year-old pays <strong className="text-navy-900">47% less</strong> than a 40-year-old for the same coverage.
              A healthy 35-year-old can get $500K in term life coverage for as little as <strong className="text-navy-900">$26/month</strong>.
              Lock in your rate today — your future self will thank you.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all hover:shadow-lg active:scale-[0.98] whitespace-nowrap"
            >
              <Clock className="w-4 h-4" />
              Lock In My Rate
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
