import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Compare Plans', href: '#compare' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '/blog', isRoute: true },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-[36px] left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Cornerstone Life Advisors"
              className={`h-12 w-auto transition-all ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="#quote"
              className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/25 active:scale-[0.98]"
            >
              <Calculator className="w-4 h-4" />
              Get Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-navy-700 hover:bg-navy-50' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-navy-100 px-4 py-4 space-y-1 shadow-xl">
          {NAV_LINKS.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ) : (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-lg text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
            )
          )}
          <div className="pt-2">
            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 text-center px-5 py-3 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              <Calculator className="w-4 h-4" />
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
