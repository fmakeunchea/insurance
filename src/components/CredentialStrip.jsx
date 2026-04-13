import { Shield, UserCheck, Clock, HeartHandshake } from 'lucide-react';

const CREDENTIALS = [
  { icon: Shield, label: 'Licensed & Insured', detail: 'Virginia-certified agent' },
  { icon: UserCheck, label: 'Truly Personalized', detail: 'Every plan built for you' },
  { icon: Clock, label: 'Your Schedule', detail: 'Phone, video, or in-person' },
  { icon: HeartHandshake, label: 'Plain Language', detail: 'No jargon, no confusion' },
];

export default function CredentialStrip() {
  return (
    <section className="bg-navy-50 py-6 border-b border-navy-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {CREDENTIALS.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-navy-100/50">
              <div className="w-9 h-9 bg-gold-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <p className="text-navy-900 font-semibold text-sm leading-tight">{label}</p>
                <p className="text-navy-400 text-xs">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
