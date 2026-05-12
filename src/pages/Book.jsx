import { useEffect } from 'react';
import { Calendar, Phone, Video, MessageCircle, CheckCircle, Clock, Shield, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { trackBooking } from '../utils/track';

const STEPS = [
  { num: '1', title: 'Pick a 20-minute slot', text: 'Use the Calendly widget below. Pick a time that works in your timezone — I serve clients in all 50 states.' },
  { num: '2', title: 'We meet via Zoom', text: 'Video call so we can share my screen. I\'ll walk you through your current situation and show real numbers.' },
  { num: '3', title: 'Get a custom illustration', text: 'After our call, I send a personalized IUL/term/whole life projection tailored to YOUR age, comp, and goals.' },
  { num: '4', title: 'Decide on your time', text: 'No pressure to buy on the call. Most clients take 1–2 weeks to review. Some apply that day. Whatever works for you.' },
];

const FAQS = [
  { q: 'Is the consultation really free?', a: 'Yes. I\'m only compensated when a carrier pays me a commission — and that only happens if YOU decide to buy a policy. The consultation, the illustration, and the strategy session are 100% free.' },
  { q: 'What if I\'m not in Virginia?', a: 'I\'m licensed in all 50 states. We meet by Zoom, phone, or whatever\'s convenient. Most of my clients are not in Virginia.' },
  { q: 'How long does the call take?', a: 'The first call is 20 minutes. If we both want to keep going, we extend. I respect your time.' },
  { q: 'What do I need to prepare?', a: 'Nothing required. Helpful to have: your approximate income, current 401(k)/IRA balance, and any existing life insurance details. But you can tell me on the call.' },
  { q: 'Will you try to sell me something?', a: 'No. My approach is "diagnose first, recommend second." Sometimes the right answer is "you don\'t need anything new." I\'ll tell you honestly.' },
  { q: 'What carriers do you work with?', a: 'I\'m independent — I represent 15+ A-rated carriers including Mutual of Omaha, Transamerica, National Life Group, North American, Foresters, and more. I shop the market to find your best rate.' },
];

export default function Book() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Book a Free Consultation — 20 Minutes, All 50 States"
        description="Book a free 20-minute video consultation with licensed insurance agent Fifi Makeunchea. Available in all 50 states. No pressure, no obligation."
        path="/book"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,153,102,0.12),transparent_50%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-semibold">Free 20-Minute Strategy Call</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Let's Build Your <span className="text-gold-400">Wealth Architecture</span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-8">
            20 minutes. Free. No pressure. Just clean math, honest answers, and a clear next step
            for protecting your family and growing wealth — wherever you are in the 50 states.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-navy-300">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold-400" />20-minute call</span>
            <span className="flex items-center gap-1.5"><Video className="w-4 h-4 text-gold-400" />Zoom or phone</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-gold-400" />Licensed in all 50 states</span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />4.9/5 (128 reviews)
            </span>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl border border-navy-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-5">
            <h2 className="text-white font-display text-2xl font-bold">Pick a Time That Works for You</h2>
            <p className="text-white/90 text-sm mt-1">All times shown in your timezone. Same-week slots available.</p>
          </div>
          <div className="p-2 sm:p-4">
            <iframe
              src="https://calendly.com/harnordinc?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=b49966"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a free consultation with Fifi Makeunchea"
              style={{ minHeight: '700px' }}
            />
          </div>
        </div>

        {/* Fallback CTA */}
        <div className="text-center mt-6">
          <p className="text-navy-500 text-sm mb-3">Calendar not loading?</p>
          <a
            href="https://calendly.com/harnordinc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackBooking}
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl text-sm"
          >
            Open Calendly in New Tab <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Alternative contact methods */}
      <section className="bg-navy-50/50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-navy-900 text-center mb-8">
            Prefer Another Way to Connect?
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <a
              href="tel:+15404241852"
              className="bg-white border border-navy-100 hover:border-gold-300 rounded-2xl p-6 text-center transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-1">Call Direct</h3>
              <p className="text-navy-500 text-sm mb-2">Talk now or leave voicemail</p>
              <span className="text-gold-600 font-bold">(540) 424-1852</span>
            </a>
            <a
              href="https://wa.me/15404241852"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-navy-100 hover:border-gold-300 rounded-2xl p-6 text-center transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-1">WhatsApp</h3>
              <p className="text-navy-500 text-sm mb-2">Async messaging</p>
              <span className="text-gold-600 font-bold">Send a message →</span>
            </a>
            <a
              href="mailto:hanordinc@gmail.com"
              className="bg-white border border-navy-100 hover:border-gold-300 rounded-2xl p-6 text-center transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-400 text-xl font-bold">@</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-1">Email</h3>
              <p className="text-navy-500 text-sm mb-2">For longer questions</p>
              <span className="text-gold-600 font-bold">hanordinc@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* How the call works */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-3">
          How the Call <span className="text-gold-600">Actually Works</span>
        </h2>
        <p className="text-navy-500 text-center mb-12 max-w-xl mx-auto">
          No mystery. Here's exactly what happens from "click book" to "actionable plan."
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map(({ num, title, text }) => (
            <div key={num} className="bg-navy-50/50 border border-navy-100 rounded-2xl p-6 relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold-500 text-white font-bold rounded-full flex items-center justify-center text-lg shadow-lg">
                {num}
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2 mt-2">{title}</h3>
              <p className="text-navy-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50/50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="bg-white border border-navy-100 rounded-xl group">
                <summary className="cursor-pointer p-5 font-semibold text-navy-900 hover:text-gold-600 transition-colors flex items-center justify-between">
                  {faq.q}
                  <span className="text-gold-500 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-navy-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <CheckCircle className="w-12 h-12 text-gold-400 mx-auto mb-5" />
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            One Conversation Can Change Everything
          </h2>
          <p className="text-navy-300 mb-8 max-w-xl mx-auto">
            20 minutes today could give your family a lifetime of security and you a clear path to tax-free wealth.
          </p>
          <a
            href="https://calendly.com/harnordinc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackBooking}
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg transition-all hover:shadow-xl"
          >
            <Calendar className="w-5 h-5" /> Book My Free 20-Min Call
          </a>
        </div>
      </section>
    </div>
  );
}
