import { Calendar, Phone, MessageCircle, ArrowRight, Shield } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,153,102,0.12),transparent_50%)]" />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
          <Shield className="w-4 h-4 text-gold-400" />
          <span className="text-gold-300 text-sm">One Conversation Can Change Everything</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
          Don't Wait to <span className="text-gold-400">Protect Your Family</span>
        </h2>
        <p className="text-navy-300 text-lg mb-10 max-w-xl mx-auto">
          A 20-minute conversation could give your family a lifetime of security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg transition-all hover:shadow-xl active:scale-[0.98]">
            <Calendar className="w-5 h-5" /> Book Free Consultation
          </a>
          <a href="#quick-form" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-lg transition-all">
            Get My Free Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-md mx-auto space-y-3">
          <p className="text-navy-400 text-xs uppercase tracking-wider font-semibold mb-4">Or reach out directly</p>
          <a href="tel:+15404241852" className="flex items-center justify-center gap-3 w-full py-3.5 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold transition-all">
            <Phone className="w-5 h-5 text-gold-400" /> (540) 424-1852
          </a>
          <a href="https://wa.me/15404241852" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-3.5 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold transition-all">
            <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Me
          </a>
        </div>
      </div>
    </section>
  );
}
