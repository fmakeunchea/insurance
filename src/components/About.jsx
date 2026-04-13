import { Heart, Target, Handshake, Award, Calendar } from 'lucide-react';

const VALUES = [
  { icon: Heart, title: 'Compassion', text: 'Every conversation begins with understanding your unique situation and goals.' },
  { icon: Target, title: 'Clarity', text: 'I break down complex insurance topics into language that makes sense.' },
  { icon: Handshake, title: 'Commitment', text: 'I stand by my clients long after the paperwork is signed.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo area */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-100 to-navy-50 rounded-3xl" />
              <div className="relative bg-navy-100 rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <img src="/fifi.jpg" alt="Fifi Makeunchea — Licensed Insurance Agent" className="w-full h-full object-cover object-top" />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-400/10 rounded-2xl -z-10" />

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-navy-900 text-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                <Award className="w-6 h-6 text-gold-400" />
                <div>
                  <p className="font-bold text-lg leading-tight">12+</p>
                  <p className="text-navy-300 text-xs">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              Your Neighbor, Your Advisor, Your{' '}
              <span className="text-gold-600">Advocate</span>
            </h2>
            <div className="space-y-4 text-navy-600 leading-relaxed mb-8">
              <p>
                I'm Fifi Makeunchea, a licensed insurance agent based in Fredericksburg, Virginia.
                I chose this career because I believe every family deserves access to
                clear, honest guidance when it comes to protecting the people they love
                — and I'm passionate about making that happen.
              </p>
              <p>
                Over the past 12 years, I've helped more than 1,200 families find the right
                coverage — from first-time parents looking for affordable term life insurance
                to retirees securing their final expenses. My approach is simple: listen first,
                educate thoroughly, and recommend only what genuinely fits your needs and budget.
              </p>
              <p>
                I work with over 15 A-rated carriers, which means I can shop the market
                for you and find the best rates — something a captive agent simply can't do.
                Whether you're a new parent, a professional building wealth, or someone
                seeking peace of mind, I'm here to help you navigate your options with confidence.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://calendly.com/harnordinc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/25 mb-8"
            >
              <Calendar className="w-4 h-4" />
              Let's Talk — Book a Free Consultation
            </a>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-4">
              {VALUES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-navy-50/50 rounded-xl p-4 border border-navy-100">
                  <Icon className="w-5 h-5 text-gold-500 mb-2.5" />
                  <h3 className="font-semibold text-navy-900 text-sm mb-1">{title}</h3>
                  <p className="text-navy-500 text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
