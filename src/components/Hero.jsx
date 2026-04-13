import { Phone, Calendar, CheckCircle, Star, Shield } from 'lucide-react';

const TRUST_POINTS = [
  'Licensed & Certified Agent',
  'No-Obligation Consultations',
  '1,200+ Families Protected',
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,153,102,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Now Accepting New Clients in Fredericksburg, VA</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.08] mb-6">
              Sleep Soundly Knowing Your Family Is{' '}
              <span className="text-gold-400">Protected</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Affordable life insurance starting at <strong className="text-white">less than $1/day</strong>.
              I compare 15+ top carriers to find you the lowest rate — so you never overpay.
            </p>

            {/* Mobile headshot (visible only on small screens) */}
            <div className="flex justify-center lg:hidden mb-8">
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gold-400/30 shadow-xl">
                  <img src="/fifi.jpg" alt="Fifi Makeunchea" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-navy-900" />
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 justify-center lg:justify-start mb-8 bg-white/5 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10 w-fit mx-auto lg:mx-0">
              <div className="flex -space-x-2.5">
                {['MJ', 'AF', 'DC', 'RP', 'KB'].map((initials, i) => (
                  <div key={i} className="w-10 h-10 bg-navy-700 border-2 border-navy-800 rounded-full flex items-center justify-center">
                    <span className="text-gold-400 text-xs font-bold">{initials}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.9</span>
                </div>
                <span className="text-white/50 text-xs">from 128 verified reviews</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-gold-500/30 active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                Get My Free Quote
              </a>
              <a
                href="https://calendly.com/harnordinc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-5 bg-white hover:bg-gold-50 text-navy-900 font-bold rounded-xl text-lg transition-all hover:shadow-xl active:scale-[0.98]"
              >
                <Phone className="w-5 h-5" />
                Book Free Consultation
              </a>
            </div>
            <p className="text-white/40 text-sm text-center lg:text-left mb-10">
              No cost. No obligation. Just honest, personalized guidance.
            </p>

            {/* Trust points */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {TRUST_POINTS.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-white/70 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — headshot (desktop only) */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/20 to-gold-600/10 rounded-3xl blur-2xl" />
              <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] bg-gradient-to-br from-navy-700 to-navy-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/fifi.jpg" alt="Fifi Makeunchea — Licensed Insurance Agent" className="w-full h-full object-cover object-top" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-navy-900 font-semibold text-sm">Licensed Agent</p>
                  <p className="text-navy-500 text-xs">12+ Years Experience</p>
                </div>
              </div>

              {/* Floating savings badge */}
              <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-xl shadow-lg px-4 py-2 text-center">
                <p className="text-[10px] uppercase tracking-wider font-medium opacity-80">Avg. Savings</p>
                <p className="font-bold text-lg leading-tight">$47/mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
