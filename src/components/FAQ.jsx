import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: 'What is the difference between term life and whole life?', a: 'Term life covers you for a set period (10, 20, or 30 years) at the lowest cost. Whole life covers you for your entire life and builds cash value. During your free consultation, I\'ll help you determine which fits best.' },
  { q: 'How much does life insurance cost?', a: 'It depends on age, health, and coverage amount — but most people are surprised at how affordable it is. A healthy 30-year-old can get $500K in term coverage for about $18/month. I\'ll show you real numbers based on your profile.' },
  { q: 'Can I get insurance if I\'m on a tight budget?', a: 'Absolutely. There are plans for every budget. Final expense coverage starts around $30/month, and term life can be even less. My job is to find the right balance between protection and affordability.' },
  { q: 'What is final expense insurance?', a: 'Final expense (or burial insurance) is designed to cover end-of-life costs — funeral, medical bills, outstanding debts — so your family doesn\'t bear that financial burden during a difficult time.' },
  { q: 'How long does the process take?', a: 'The initial consultation is about 20 minutes. After that, most applications are completed in one session. Many clients are approved within days, sometimes instantly depending on the carrier.' },
  { q: 'Do I need a medical exam?', a: 'Not always. Many carriers offer no-exam policies, especially for final expense and simplified-issue term life. During our conversation, I\'ll find the best option based on your health profile.' },
  { q: 'Why work with an independent agent instead of going direct?', a: 'An independent agent like me shops 15+ carriers to find you the best rate. Going direct means you only see one company\'s products. I do the comparison for you — at no extra cost.' },
  { q: 'What areas do you serve?', a: 'I\'m based in Fredericksburg, Virginia and serve clients throughout the greater Fredericksburg area, Stafford, Spotsylvania, King George, and all of Northern Virginia — in person, by phone, or video.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4 block">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5">
            Questions? I've Got <span className="text-gold-600">Answers</span>
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-navy-100 rounded-xl overflow-hidden hover:border-gold-200 transition-colors">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-navy-50/30 transition-colors">
                <span className="font-semibold text-navy-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-navy-400 shrink-0 transition-transform ${open === i ? 'rotate-180 text-gold-500' : ''}`} />
              </button>
              <div className={`transition-all overflow-hidden ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-navy-500 leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
