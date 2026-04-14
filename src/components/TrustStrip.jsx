import { Shield, UserCheck, Clock, HeartHandshake } from 'lucide-react';

const ITEMS = [
  { icon: Shield, label: 'Licensed & Insured', sub: 'Virginia-certified agent' },
  { icon: UserCheck, label: 'Truly Personalized', sub: 'Every plan built for you' },
  { icon: Clock, label: 'Your Schedule', sub: 'Phone, video, or in-person' },
  { icon: HeartHandshake, label: 'Plain Language', sub: 'No jargon, no confusion' },
];

export default function TrustStrip() {
  return (
    <section className="bg-navy-50 py-6 border-b border-navy-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {ITEMS.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-navy-100/50">
            <div className="w-9 h-9 bg-gold-50 rounded-lg flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <p className="text-navy-900 font-semibold text-sm leading-tight">{label}</p>
              <p className="text-navy-400 text-xs">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
