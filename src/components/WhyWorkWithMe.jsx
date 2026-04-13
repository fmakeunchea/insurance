import { UserCheck, Heart, MessageCircle, Clock, ShieldCheck, Lightbulb } from 'lucide-react';

const VALUE_POINTS = [
  {
    icon: UserCheck,
    title: 'Personalized Guidance',
    description: 'No cookie-cutter plans. Every recommendation is built around your specific needs, goals, and budget.',
  },
  {
    icon: Heart,
    title: 'Family-First Approach',
    description: 'I understand that behind every policy is a family. Your loved ones are always my top priority.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Explanations',
    description: 'Insurance can be confusing. I take the time to break things down in plain, simple language.',
  },
  {
    icon: Clock,
    title: 'Flexible Consultations',
    description: 'In-person, phone, or video — I work around your schedule, not the other way around.',
  },
  {
    icon: ShieldCheck,
    title: 'Independent Agent',
    description: 'I shop 15+ top carriers to find you the best rates. Captive agents can only sell one company\'s products.',
  },
  {
    icon: Lightbulb,
    title: 'Needs-Based Solutions',
    description: 'I don\'t push products. I listen, assess, and recommend what actually makes sense for you.',
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left header */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Why Work With Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              A Different Kind of{' '}
              <span className="text-gold-600">Insurance Experience</span>
            </h2>
            <p className="text-navy-500 text-lg leading-relaxed mb-8">
              I believe the best financial guidance comes from genuine relationships, honest
              conversations, and a real commitment to your well-being — not sales quotas.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors"
            >
              See how affordable coverage can be
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {VALUE_POINTS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-navy-100 hover:border-gold-200 bg-white hover:bg-navy-50/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gold-50 group-hover:bg-gold-100 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-gold-600" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
