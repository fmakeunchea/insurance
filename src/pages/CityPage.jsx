import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, ArrowRight, Phone, Calendar, MapPin, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { getCity } from '../data/cities';
import { trackQuote } from '../utils/track';

const PHONE = '(540) 424-1852';
const PHONE_HREF = 'tel:+15404241852';
const CALENDLY = 'https://calendly.com/fifi-cornerstonelifeinsure';

export default function CityPage() {
  const { slug } = useParams();
  const city = getCity(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!city) return <Navigate to="/" replace />;

  const path = `/life-insurance/${city.slug}`;
  const url = `https://cornerstonelifeinsure.com${path}`;

  // Schema tying the business to this specific city, plus the FAQs Google can
  // surface directly in search results.
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['InsuranceAgency', 'FinancialService'],
        '@id': `${url}#business`,
        name: `Cornerstone Life Advisors — ${city.city}, ${city.state}`,
        description: city.metaDescription,
        url,
        telephone: '+15404241852',
        email: 'fifi@cornerstonelifeinsure.com',
        areaServed: {
          '@type': 'City',
          name: city.city,
          address: {
            '@type': 'PostalAddress',
            addressLocality: city.city,
            addressRegion: city.state,
            addressCountry: 'US',
          },
        },
        geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
        priceRange: '$$',
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: city.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO title={city.title} description={city.metaDescription} path={path} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm">{city.heroKicker}</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Life Insurance in{' '}
            <span className="text-gold-400">
              {city.city}, {city.state}
            </span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-8">{city.heroLine}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#quote"
              onClick={() => trackQuote(`City Page — ${city.city}`)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg"
            >
              Get My Free Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-lg"
            >
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-navy-700 text-lg leading-relaxed mb-6">{city.intro}</p>
        <p className="text-navy-500 leading-relaxed">{city.localContext}</p>
      </section>

      {/* What families here need */}
      <section className="bg-navy-50/50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-8">
            What {city.city} Families Come to Me For
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {city.needs.map(({ title, text }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-navy-100 flex gap-4">
                <Shield className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">{title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why independent */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-8">
          Why Work With an Independent Agent
        </h2>
        <div className="space-y-3">
          {[
            'Licensed in all 50 states — your coverage follows you if you move.',
            'Not captive to one insurer. I compare 15+ A-rated carriers on your behalf.',
            'Free consultations by phone or video. No office visit, no home visit.',
            'No pressure. If you do not need a policy, I will tell you so.',
          ].map((t) => (
            <div key={t} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <span className="text-navy-600">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage types — internal links help these pages rank */}
      <section className="bg-navy-50/50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-8">
            Coverage Available in {city.city}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { to: '/services/term-life', title: 'Term Life', text: 'Lowest cost. Ideal for income replacement and mortgage protection.' },
              { to: '/services/whole-life', title: 'Whole Life', text: 'Lifetime coverage that builds guaranteed cash value.' },
              { to: '/services/iul', title: 'IUL', text: 'Permanent coverage with market-linked, tax-advantaged growth.' },
            ].map(({ to, title, text }) => (
              <Link
                key={to}
                to={to}
                className="bg-white rounded-xl p-6 border border-navy-100 hover:border-gold-300 hover:shadow-lg transition-all group"
              >
                <h3 className="font-semibold text-navy-900 mb-1 group-hover:text-gold-600">{title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-8">
          Life Insurance in {city.city} — Common Questions
        </h2>
        <div className="space-y-6">
          {city.faqs.map((f) => (
            <div key={f.q} className="border-b border-navy-100 pb-6 last:border-0">
              <h3 className="font-semibold text-navy-900 mb-2">{f.q}</h3>
              <p className="text-navy-500 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Get Your Free Quote — {city.city}, {city.state}
          </h2>
          <p className="text-navy-300 mb-8">
            A short conversation, real numbers from multiple carriers, and zero obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl"
            >
              <Calendar className="w-5 h-5" /> Book a Free Consultation
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl"
            >
              <Phone className="w-5 h-5" /> Call or Text {PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
