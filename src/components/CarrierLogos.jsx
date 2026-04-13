import React from 'react';
import { Shield } from 'lucide-react';

const CARRIERS = [
  { name: 'Mutual of Omaha', abbr: 'MO' },
  { name: 'Transamerica', abbr: 'TA' },
  { name: 'National Life Group', abbr: 'NLG' },
  { name: 'American National', abbr: 'AN' },
  { name: 'Foresters Financial', abbr: 'FF' },
  { name: 'North American', abbr: 'NA' },
  { name: 'Global Atlantic', abbr: 'GA' },
  { name: 'Nationwide', abbr: 'NW' },
];

export default function CarrierLogos() {
  return (
    <section className="py-12 bg-white border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-navy-400 text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-gold-500" />
            Partnered with A-Rated Carriers You Can Trust
          </p>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6 items-center">
          {CARRIERS.map((carrier) => (
            <div
              key={carrier.name}
              className="flex flex-col items-center justify-center py-4 px-2 rounded-xl hover:bg-navy-50 transition-colors group"
            >
              <div className="w-12 h-12 bg-navy-100 group-hover:bg-navy-200 rounded-xl flex items-center justify-center mb-2 transition-colors">
                <span className="text-navy-500 font-bold text-xs">{carrier.abbr}</span>
              </div>
              <span className="text-navy-400 text-[10px] text-center font-medium leading-tight">
                {carrier.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
