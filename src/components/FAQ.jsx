import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'How does life insurance work?',
    answer:
      'Life insurance provides a financial safety net for your loved ones in the event of your passing. You pay a regular premium, and in return, the policy pays a benefit to your beneficiaries. There are different types — term, whole life, and more — and I\'ll help you understand which one makes sense for your situation.',
  },
  {
    question: 'Is life insurance expensive?',
    answer:
      'It depends on factors like your age, health, and the type of coverage you choose — but many people are surprised at how affordable it can be. For example, a healthy 30-year-old can get $250K in term coverage for as little as $15/month. During our consultation, I\'ll show you real numbers based on your profile.',
  },
  {
    question: 'Can I get coverage if I\'m on a tight budget?',
    answer:
      'Absolutely. There are options designed for every budget. Final expense plans start around $30/month, and term life can be even less. My job is to help you find the right balance between coverage and affordability. Even a small policy can make a meaningful difference for your family.',
  },
  {
    question: 'Why should I work with an independent agent vs. going direct?',
    answer:
      'An independent agent like me works with multiple carriers (I shop 15+), which means I can compare rates and find you the best deal. If you go direct to one company, you only see their products and their prices. I do the shopping for you — at no extra cost, since carriers pay my commission.',
  },
  {
    question: 'How long does a consultation take?',
    answer:
      'Most initial consultations take about 20 to 30 minutes. It\'s a relaxed, no-pressure conversation where we discuss your goals and I answer any questions you have. There\'s no commitment required — many clients tell me it was the easiest financial conversation they\'ve ever had.',
  },
  {
    question: 'How accurate is the online quote calculator?',
    answer:
      'The quote calculator gives you a solid ballpark estimate based on general rate tables. Your actual premium may be the same or even lower depending on your specific health profile and the carrier we choose. Think of it as a starting point — I\'ll refine the numbers during our consultation.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'I\'m based in Fredericksburg, Virginia and serve clients throughout the greater Fredericksburg and Northern Virginia area in person. I also work with clients across the state via phone and video. Whether you prefer to meet face-to-face or remotely, I\'m happy to accommodate.',
  },
  {
    question: 'What happens after I get my policy?',
    answer:
      'My service doesn\'t end when the paperwork is signed. I do annual reviews to make sure your coverage still fits your life as things change — new baby, new home, career change. I also help with claims processing and any questions that come up. You\'ll always have a direct line to me.',
  },
];

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-navy-100 rounded-xl overflow-hidden transition-colors hover:border-gold-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-navy-50/30 transition-colors"
      >
        <span className="font-semibold text-navy-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-navy-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-gold-500' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-6 text-navy-500 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-navy-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5 leading-tight">
            Questions? I've Got{' '}
            <span className="text-gold-600">Answers</span>
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            Here are the most common questions I get from families like yours.
            If yours isn't listed, just reach out — I'm always happy to chat.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 bg-white rounded-2xl p-8 border border-navy-100">
          <p className="text-navy-600 font-medium mb-4">
            Still have questions? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all hover:shadow-lg active:scale-[0.98]"
            >
              Get in Touch
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg active:scale-[0.98]"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
