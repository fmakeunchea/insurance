import { Shield, Award } from 'lucide-react';

const CARRIERS = [
  { name: 'Mutual of Omaha', abbr: 'MO' },
  { name: 'National Life Group', abbr: 'NLG' },
  { name: 'Transamerica', abbr: 'TA' },
  { name: 'North American', abbr: 'NA' },
  { name: 'Foresters Financial', abbr: 'FF' },
  { name: 'American National', abbr: 'AN' },
  { name: 'Global Atlantic', abbr: 'GA' },
  { name: 'Nationwide', abbr: 'NW' },
];

export default function CarrierTrustBar() {
  return (
    <section className="bg-white py-8 border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Virginia badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-navy-900 text-white rounded-full px-5 py-2">
            <Award className="w-5 h-5 text-gold-400" />
            <span className="text-sm font-semibold">Licensed in Virginia</span>
          </div>
          <div className="flex items-center gap-2 bg-gold-50 border border-gold-200 text-gold-700 rounded-full px-5 py-2">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-semibold">15+ A-Rated Carriers</span>
          </div>
        </div>

        <p className="text-center text-navy-400 text-xs font-medium uppercase tracking-wider mb-5">
          Partnered with carriers you can trust
        </p>

        <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
          {CARRIERS.map((c) => (
            <div key={c.name} className="flex flex-col items-center justify-center py-3 px-2 rounded-xl hover:bg-navy-50 transition-colors group">
              <div className="w-11 h-11 bg-navy-100 group-hover:bg-navy-200 rounded-xl flex items-center justify-center mb-1.5 transition-colors">
                <span className="text-navy-500 font-bold text-[10px]">{c.abbr}</span>
              </div>
              <span className="text-navy-400 text-[9px] text-center font-medium leading-tight">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
