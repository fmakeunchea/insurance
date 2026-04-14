import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, ShieldCheck } from 'lucide-react';

const DATA = [
  { name: 'Marcus & Tanya J.', loc: 'Fredericksburg', text: 'Fifi made life insurance so simple. She explained everything, found a plan in our budget, and now we sleep better knowing our kids are protected.', coverage: 'Term Life — $500K', initials: 'MJ' },
  { name: 'Dr. Angela F.', loc: 'Stafford', text: 'No pressure, no pushy sales tactics — just an honest conversation. Fifi helped me find gaps in my employer coverage I didn\'t know about.', coverage: 'Whole Life — $250K', initials: 'AF' },
  { name: 'Gloria W.', loc: 'Spotsylvania', text: 'After my husband passed, Fifi was compassionate and thorough. She never rushed me. My children won\'t have to worry about burial costs now.', coverage: 'Final Expense — $25K', initials: 'GW' },
  { name: 'David & Sarah C.', loc: 'Fredericksburg', text: 'We got $750K in coverage for less than Netflix. Fifi broke everything down in a way that actually made sense. Best financial decision we\'ve made.', coverage: 'Term Life — $750K', initials: 'DC' },
  { name: 'Robert P.', loc: 'King George', text: 'As a business owner, I needed personal and key-man coverage. Fifi understood immediately and checks in quarterly. Five stars all day.', coverage: 'Whole + Term — $1M', initials: 'RP' },
  { name: 'Keisha B.', loc: 'Woodbridge', text: 'I was worried I couldn\'t afford coverage as a single mom. Fifi found me $250K of protection for $32/month. She genuinely cares.', coverage: 'Term Life — $250K', initials: 'KB' },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % DATA.length);
  const prev = () => setIdx((i) => (i - 1 + DATA.length) % DATA.length);
  const visible = [0, 1, 2].map((i) => DATA[(idx + i) % DATA.length]);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4 block">Client Stories</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Trusted by <span className="text-gold-600">1,200+ Families</span></h2>
          <div className="inline-flex items-center gap-3 bg-white rounded-full border border-navy-100 px-6 py-3 mt-4">
            <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />)}</div>
            <span className="font-bold text-navy-900">4.9/5</span>
            <span className="text-navy-400 text-sm">128 reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div key={`${idx}-${i}`} className="bg-white rounded-2xl p-8 shadow-lg shadow-navy-900/[0.04] border border-navy-100/80 hover:shadow-xl transition-all flex flex-col relative">
              <div className="absolute top-6 right-7 opacity-[0.06]"><Quote className="w-20 h-20" /></div>
              <div className="flex gap-0.5 mb-5">{[1,2,3,4,5].map(j => <Star key={j} className="w-5 h-5 text-gold-400 fill-gold-400" />)}</div>
              <p className="text-navy-700 leading-relaxed mb-6 flex-1 relative z-10">"{t.text}"</p>
              <div className="inline-flex items-center gap-1.5 bg-gold-50 text-gold-700 border border-gold-200/50 text-xs font-semibold px-3 py-2 rounded-lg mb-6 self-start">
                <ShieldCheck className="w-3.5 h-3.5" />{t.coverage}
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-navy-100/50">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center">
                  <span className="text-gold-400 font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-navy-900">{t.name}</p>
                  <p className="text-navy-400 text-sm flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{t.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 mt-10">
          <button onClick={prev} className="w-12 h-12 bg-white border border-navy-200 rounded-full flex items-center justify-center text-navy-400 hover:text-navy-900 hover:shadow-md transition-all"><ChevronLeft className="w-5 h-5" /></button>
          <div className="flex gap-2">{DATA.map((_, i) => <button key={i} onClick={() => setIdx(i)} className={`h-2.5 rounded-full transition-all ${i === idx ? 'bg-gold-500 w-8' : 'bg-navy-200 w-2.5'}`} />)}</div>
          <button onClick={next} className="w-12 h-12 bg-white border border-navy-200 rounded-full flex items-center justify-center text-navy-400 hover:text-navy-900 hover:shadow-md transition-all"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
    </section>
  );
}
