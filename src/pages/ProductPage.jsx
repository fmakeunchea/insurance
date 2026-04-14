import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ShoppingBag, CheckCircle, Shield, Download, ArrowLeft, ArrowRight, Star, Users } from 'lucide-react';
import { products } from '../data/products';
import { trackQuote } from '../utils/track';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!product) return <Navigate to="/shop" replace />;

  const handleBuy = () => {
    trackQuote('Product Purchase', { product: product.title, price: product.price });
    if (product.checkoutUrl && product.checkoutUrl !== '#') {
      window.open(product.checkoutUrl, '_blank');
    } else {
      alert('Checkout coming soon! For now, book a free consultation and I\'ll send you the guide personally.');
      window.open('https://calendly.com/harnordinc', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <button onClick={() => navigate('/shop')} className="inline-flex items-center gap-2 text-navy-400 hover:text-gold-400 text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </button>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Product preview */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 bg-white rounded-xl shadow-2xl p-8 flex flex-col relative z-10">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-900 leading-tight mb-2">{product.title}</h3>
                  <p className="text-navy-400 text-xs leading-relaxed flex-1">{product.subtitle}</p>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-navy-100">
                    <Download className="w-3.5 h-3.5 text-navy-400" />
                    <span className="text-navy-400 text-[10px]">{product.pages}</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 w-64 h-80 bg-navy-700 rounded-xl -z-0" />
              </div>
            </div>

            {/* Right: Details */}
            <div>
              {product.badge && (
                <span className={`inline-block ${product.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4`}>
                  {product.badge}
                </span>
              )}
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">{product.title}</h1>
              <p className="text-navy-300 text-lg mb-6">{product.subtitle}</p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-gold-400">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-navy-400 line-through text-xl">${product.originalPrice}</span>
                )}
              </div>

              <button
                onClick={handleBuy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg transition-all active:scale-[0.98] mb-4"
              >
                <ShoppingBag className="w-5 h-5" /> Buy Now — ${product.price}
              </button>

              <div className="flex items-center gap-4 text-navy-400 text-sm mt-2">
                <span className="flex items-center gap-1"><Download className="w-4 h-4" />{product.delivery}</span>
                <span className="flex items-center gap-1"><Shield className="w-4 h-4" />Secure payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-navy-700 text-lg leading-relaxed mb-10">{product.description}</p>

        <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">What's Inside</h2>
        <div className="space-y-3 mb-12">
          {product.features.map(f => (
            <div key={f} className="flex items-start gap-3 bg-navy-50/50 rounded-xl p-4 border border-navy-100">
              <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <p className="text-navy-700">{f}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Who Is This For?</h2>
        <div className="space-y-3 mb-12">
          {product.whoIsFor.map(w => (
            <div key={w} className="flex items-start gap-3">
              <Users className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <p className="text-navy-700">{w}</p>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="bg-gold-50 border border-gold-200 rounded-2xl p-8 text-center mb-12">
          <div className="flex justify-center gap-1 mb-3">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-gold-500 fill-gold-500" />)}
          </div>
          <p className="text-navy-700 italic mb-3">
            "This guide gave me the confidence to finally get coverage for my family. I understood everything — no confusing jargon. Worth every penny."
          </p>
          <p className="text-navy-900 font-semibold text-sm">— Sarah M., Fredericksburg</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleBuy}
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg transition-all active:scale-[0.98]"
          >
            <ShoppingBag className="w-5 h-5" /> Get It Now — ${product.price}
          </button>
          <p className="text-navy-400 text-xs mt-3">Instant PDF download. Secure checkout via Stripe.</p>
        </div>
      </section>

      {/* Upsell */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Want Personalized Help?</h2>
          <p className="text-navy-300 mb-8">Book a free consultation and I'll walk you through everything in person.</p>
          <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
