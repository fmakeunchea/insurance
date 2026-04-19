import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Star, ArrowRight, Shield, Download, CheckCircle, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import SEO from '../components/SEO';

export default function Shop() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Insurance Guides & Digital Products"
        description="Expert insurance guides from licensed agent Fifi Makeunchea. The Wealth Architecture, IUL Blueprint, Family Protection Checklist, and more. Instant PDF downloads."
        path="/shop"
      />
      {/* Header */}
      <section className="bg-navy-950 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,153,102,0.12),transparent_50%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">Expert Insurance Guides</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Protect Your Family with <span className="text-gold-400">Knowledge</span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-6">
            Digital guides written by a licensed agent with 12+ years of experience.
            Make confident, informed decisions about your family's financial future.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-navy-400">
            <span className="flex items-center gap-1.5"><Download className="w-4 h-4" />Instant download</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" />Secure checkout</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-gold-400 fill-gold-400" />4.9/5 rated</span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div
              key={p.slug}
              className={`rounded-2xl overflow-hidden flex flex-col ${
                p.slug === 'iul-wealth-blueprint'
                  ? 'bg-gradient-to-br from-navy-900 to-navy-800 border-2 border-gold-400 text-white'
                  : p.slug === 'product-bundle'
                  ? 'bg-gradient-to-br from-red-50 to-gold-50 border-2 border-red-300'
                  : 'bg-white border border-navy-100'
              }`}
            >
              <div className="p-8 flex-1 flex flex-col">
                {/* Badge */}
                {p.badge && (
                  <span className={`self-start ${p.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4`}>
                    {p.badge}
                  </span>
                )}

                <h2 className={`font-display text-2xl font-bold mb-1 ${p.slug === 'iul-wealth-blueprint' ? 'text-white' : 'text-navy-900'}`}>
                  {p.title}
                </h2>
                <p className={`text-sm mb-4 ${p.slug === 'iul-wealth-blueprint' ? 'text-navy-300' : 'text-navy-400'}`}>
                  {p.subtitle}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-5">
                  <span className={`text-3xl font-bold ${p.slug === 'iul-wealth-blueprint' ? 'text-gold-400' : 'text-navy-900'}`}>
                    ${p.price}
                  </span>
                  {p.originalPrice && (
                    <span className="text-navy-400 line-through text-lg">${p.originalPrice}</span>
                  )}
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${p.slug === 'iul-wealth-blueprint' ? 'text-navy-300' : 'text-navy-500'}`}>
                  {p.description}
                </p>

                {/* What's inside */}
                <div className="space-y-2 mb-6 flex-1">
                  {p.features.slice(0, 5).map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${p.slug === 'iul-wealth-blueprint' ? 'text-gold-400' : 'text-gold-500'}`} />
                      <span className={`text-sm ${p.slug === 'iul-wealth-blueprint' ? 'text-navy-200' : 'text-navy-600'}`}>{f}</span>
                    </div>
                  ))}
                  {p.features.length > 5 && (
                    <p className={`text-xs ml-6 ${p.slug === 'iul-wealth-blueprint' ? 'text-navy-400' : 'text-navy-400'}`}>
                      + {p.features.length - 5} more inside
                    </p>
                  )}
                </div>

                {/* Meta */}
                <div className={`flex items-center gap-4 text-xs mb-6 ${p.slug === 'iul-wealth-blueprint' ? 'text-navy-400' : 'text-navy-400'}`}>
                  <span>{p.pages}</span>
                  <span>·</span>
                  <span>{p.delivery}</span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate(`/shop/${p.slug}`)}
                  className={`w-full flex items-center justify-center gap-2 py-4 font-bold rounded-xl text-base transition-all active:scale-[0.98] ${
                    p.slug === 'iul-wealth-blueprint'
                      ? 'bg-gold-500 hover:bg-gold-600 text-white'
                      : p.slug === 'product-bundle'
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-navy-900 hover:bg-navy-800 text-white'
                  }`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {p.slug === 'product-bundle' ? 'Get the Bundle — Save 40%' : `Get It — $${p.price}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust section */}
      <section className="bg-navy-50/50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Why Buy From Me?</h2>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { title: '12+ Years Experience', text: 'Written by a licensed agent who\'s helped 1,200+ families' },
              { title: 'Virginia-Specific', text: 'Rates, laws, and advice tailored to the Virginia market' },
              { title: 'Actionable, Not Academic', text: 'Step-by-step checklists and worksheets you can use today' },
            ].map(({ title, text }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-navy-100">
                <h3 className="font-semibold text-navy-900 mb-2">{title}</h3>
                <p className="text-navy-500 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upsell to consultation */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Want Personalized Advice Instead?
          </h2>
          <p className="text-navy-300 mb-8">
            Every situation is different. Book a free consultation and I'll give you a customized
            recommendation based on your specific needs — no purchase required.
          </p>
          <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
