import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Compare Plans', href: '#compare' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '/blog', isRoute: true },
  { label: 'Contact', href: '#contact' },
];

const SERVICES_LINKS = [
  { label: 'Life Insurance', href: '#services' },
  { label: 'Final Expense Planning', href: '#services' },
  { label: 'Retirement Strategies', href: '#services' },
  { label: 'Education Planning', href: '#services' },
  { label: 'Financial Needs Analysis', href: '#services' },
  { label: 'Get a Free Quote', href: '#quote' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-navy-950 text-white">
      {/* Newsletter Banner */}
      <div className="border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Get Smart About Insurance
              </h3>
              <p className="text-navy-300 text-sm">
                Join 2,000+ subscribers. Free tips, guides, and rate alerts delivered to your inbox. No spam, ever.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl px-5 py-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300 font-medium text-sm">You're subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full md:w-64 px-4 py-3 rounded-xl bg-navy-700 border border-navy-600 text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all text-sm"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="inline-flex items-center mb-5">
              <img
                src="/logo.png"
                alt="Cornerstone Life Advisors"
                className="h-10 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-navy-300 text-sm leading-relaxed mb-6 max-w-xs">
              Licensed insurance agent helping families in the Fredericksburg, Virginia area protect
              what matters most. Honest guidance, personalized solutions, and genuine care.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { name: 'facebook', href: 'https://www.facebook.com/profile.php?id=61572156419175' },
                { name: 'instagram', href: 'https://www.instagram.com/fmakeunch/' },
                { name: 'linkedin', href: 'https://www.linkedin.com/company/cornerstone-life-advisors/' },
                { name: 'twitter', href: '#twitter' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                  className="w-9 h-9 bg-navy-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+15404241852" className="flex items-center gap-2.5 text-navy-300 hover:text-gold-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (540) 424-1852
                </a>
              </li>
              <li>
                <a href="mailto:hanordinc@gmail.com" className="flex items-center gap-2.5 text-navy-300 hover:text-gold-400 text-sm transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  hanordinc@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-navy-300 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Fredericksburg, Virginia
                </div>
              </li>
            </ul>
            <a
              href="#quote"
              className="inline-flex items-center mt-5 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-navy-400 text-xs">
              &copy; {year} Fifi Makeunchea Insurance. All rights reserved.
            </p>
            <p className="text-navy-500 text-xs leading-relaxed max-w-2xl">
              Disclaimer: The information provided on this website is for general informational purposes
              only and does not constitute financial or insurance advice. Coverage options, terms, and
              availability may vary by state and carrier. Please consult directly for personalized recommendations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  const paths = {
    facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    instagram:
      'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z',
    linkedin:
      'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z',
    twitter:
      'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  };

  return (
    <svg className="w-4 h-4 text-navy-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}
