import { Shield, Flower2, TrendingUp, GraduationCap, ClipboardList, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Shield,
    title: 'Life Insurance',
    description:
      'Term and permanent life insurance options tailored to your family\'s needs and budget. Protect the people who depend on you most.',
    startingAt: 'From $18/mo',
  },
  {
    icon: Flower2,
    title: 'Final Expense Planning',
    description:
      'Affordable coverage designed to ease the financial burden on your loved ones during a difficult time. Plan ahead with dignity.',
    startingAt: 'From $30/mo',
  },
  {
    icon: TrendingUp,
    title: 'Retirement Strategies',
    description:
      'Explore options that can help you build a more secure financial future. Start planning today, no matter where you are in life.',
    startingAt: 'Custom plans',
  },
  {
    icon: GraduationCap,
    title: 'Education Planning',
    description:
      'Help give your children or grandchildren the gift of education. Explore savings approaches that grow with your family.',
    startingAt: 'Custom plans',
  },
  {
    icon: ClipboardList,
    title: 'Financial Needs Analysis',
    description:
      'A comprehensive review of your current situation and future goals — so we can identify the right coverage for you.',
    startingAt: 'Always free',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
            What I Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5 leading-tight">
            Solutions Designed Around{' '}
            <span className="text-gold-600">Your Life</span>
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            Every family's situation is different. I work with 15+ A-rated carriers to find
            the right protection and planning strategies for your unique goals.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, description, startingAt }, index) => (
            <div
              key={title}
              className={`group bg-white rounded-2xl p-7 border border-navy-100 hover:border-gold-200 transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 flex flex-col ${
                index === SERVICES.length - 1 && SERVICES.length % 3 === 2
                  ? 'sm:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              <div className="w-12 h-12 bg-navy-900 group-hover:bg-gold-500 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon className="w-6 h-6 text-gold-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                {title}
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed flex-1">
                {description}
              </p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-navy-50">
                <span className="text-gold-600 text-sm font-semibold">{startingAt}</span>
                <a
                  href="#quote"
                  className="text-navy-400 hover:text-gold-600 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Get Quote <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-navy-500 mb-5">
            Not sure which service fits? I'll help you find the right coverage — most clients save $300+/year by switching.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all hover:shadow-lg active:scale-[0.98]"
          >
            See Your Savings in 60 Seconds
          </a>
        </div>
      </div>
    </section>
  );
}
