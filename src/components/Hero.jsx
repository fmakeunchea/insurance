import { Phone, Calendar, CheckCircle, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,153,102,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">Accepting New Clients in Fredericksburg, VA</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6">
              Sleep Soundly Knowing Your Family Is <span className="text-gold-400">Protected</span>
            </h1>

            <p className="text-lg text-navy-200 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Affordable life insurance starting at <strong className="text-white">less than $1/day</strong>.
              I compare 15+ carriers to find you the lowest rate — so you never overpay.
            </p>

            {/* Mobile headshot */}
            <div className="flex justify-center lg:hidden mb-8">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gold-400/30 shadow-xl">
                <img src="/fifi.jpg" alt="Fifi Makeunchea" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8 bg-white/5 rounded-xl px-5 py-3 border border-white/10 w-fit mx-auto lg:mx-0">
              <div className="flex -space-x-2">
                {['MJ','AF','DC','RP'].map((i, k) => (
                  <div key={k} className="w-9 h-9 bg-navy-700 border-2 border-navy-800 rounded-full flex items-center justify-center">
                    <span className="text-gold-400 text-[10px] font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />)}
                  <span className="text-white font-bold text-sm ml-1">4.9</span>
                </div>
                <span className="text-white/50 text-xs">from 128 reviews</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4">
              <a href="#quick-form" className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg transition-all hover:shadow-xl active:scale-[0.98]">
                <Calendar className="w-5 h-5" /> Get My Free Quote
              </a>
              <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white hover:bg-gold-50 text-navy-900 font-bold rounded-xl text-lg transition-all active:scale-[0.98]">
                <Phone className="w-5 h-5" /> Book Free Consultation
              </a>
            </div>
            <p className="text-white/40 text-sm text-center lg:text-left mb-10">No cost. No obligation. Just honest guidance.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {['Licensed & Certified', 'No-Obligation Consultations', '1,200+ Families Protected'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span className="text-white/70 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop headshot */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/20 to-gold-600/10 rounded-3xl blur-2xl" />
              <div className="relative w-96 h-[28rem] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/fifi.jpg" alt="Fifi Makeunchea" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-gold-500" />
                <div>
                  <p className="text-navy-900 font-semibold text-sm">Licensed Agent</p>
                  <p className="text-navy-500 text-xs">12+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
