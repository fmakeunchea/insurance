import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '/blog', route: true },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const linkClass = scrolled
    ? 'text-navy-600 hover:text-navy-900'
    : 'text-white/80 hover:text-white';

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur shadow-lg shadow-navy-900/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Cornerstone Life Advisors" className={`h-10 w-auto ${scrolled ? '' : 'brightness-0 invert'}`} />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) =>
            l.route ? (
              <Link key={l.href} to={l.href} className={`px-3 py-2 text-sm font-medium rounded-lg ${linkClass}`}>{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href} className={`px-3 py-2 text-sm font-medium rounded-lg ${linkClass}`}>{l.label}</a>
            )
          )}
          <a href="tel:+15404241852" className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold rounded-xl transition-all">
            <Phone className="w-4 h-4" /> (540) 424-1852
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-navy-700' : 'text-white'}`}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy-100 px-4 py-4 shadow-xl">
          {LINKS.map((l) =>
            l.route ? (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-navy-700 hover:bg-navy-50 rounded-lg text-sm font-medium">{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-navy-700 hover:bg-navy-50 rounded-lg text-sm font-medium">{l.label}</a>
            )
          )}
          <a href="tel:+15404241852" className="block mt-2 text-center py-3 bg-gold-500 text-white font-semibold rounded-xl">(540) 424-1852</a>
        </div>
      )}
    </nav>
  );
}
