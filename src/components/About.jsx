import { Heart, Target, Handshake, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold-100 to-navy-50 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img src="/fifi.jpg" alt="Fifi Makeunchea" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4 block">About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
            Your Neighbor, Your Advisor, Your <span className="text-gold-600">Advocate</span>
          </h2>
          <div className="space-y-4 text-navy-600 leading-relaxed mb-8">
            <p>I'm Fifi Makeunchea, a licensed insurance agent based in Fredericksburg, Virginia. I chose this career because every family deserves clear, honest guidance when it comes to protecting the people they love.</p>
            <p>Over 12 years, I've helped 1,200+ families find the right coverage. I work with 15+ A-rated carriers, which means I shop the market for you — something a captive agent can't do.</p>
          </div>
          <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all mb-8">
            <Calendar className="w-4 h-4" /> Book a Free Consultation
          </a>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Heart, title: 'Compassion', text: 'Every conversation begins with understanding your situation.' },
              { icon: Target, title: 'Clarity', text: 'I break down complex topics into simple language.' },
              { icon: Handshake, title: 'Commitment', text: 'I stand by my clients long after the paperwork.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-navy-50/50 rounded-xl p-4 border border-navy-100">
                <Icon className="w-5 h-5 text-gold-500 mb-2" />
                <h3 className="font-semibold text-navy-900 text-sm mb-1">{title}</h3>
                <p className="text-navy-500 text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
