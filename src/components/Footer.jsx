import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/logo.png" alt="Cornerstone Life Advisors" className="h-10 w-auto brightness-0 invert mb-5" />
            <p className="text-navy-300 text-sm leading-relaxed mb-6 max-w-xs">
              Licensed insurance agent helping families in Fredericksburg, VA protect what matters most.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/profile.php?id=61572156419175', label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { href: 'https://www.instagram.com/fmakeunch/', label: 'Instagram', path: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z' },
                { href: 'https://www.linkedin.com/company/cornerstone-life-advisors/', label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 bg-navy-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-navy-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[['Services','#services'],['About','#about'],['Testimonials','#testimonials'],['FAQ','#faq'],['Contact','#contact']].map(([l,h]) => (
                <li key={l}><a href={h} className="text-navy-300 hover:text-gold-400 transition-colors">{l}</a></li>
              ))}
              <li><Link to="/blog" className="text-navy-300 hover:text-gold-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {['Term Life','Whole Life','Final Expense','Family Protection','Retirement','Free Quote'].map(s => (
                <li key={s}><a href="#services" className="text-navy-300 hover:text-gold-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="tel:+15404241852" className="flex items-center gap-2 text-navy-300 hover:text-gold-400"><Phone className="w-4 h-4" />(540) 424-1852</a></li>
              <li><a href="mailto:hanordinc@gmail.com" className="flex items-center gap-2 text-navy-300 hover:text-gold-400"><Mail className="w-4 h-4" />hanordinc@gmail.com</a></li>
              <li><span className="flex items-center gap-2 text-navy-300"><MapPin className="w-4 h-4" />Fredericksburg, VA</span></li>
            </ul>
            <a href="#quick-form" className="inline-flex items-center mt-5 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold rounded-lg transition-colors">Get a Free Quote</a>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center sm:text-left">
          <p className="text-navy-400 text-xs">&copy; {year} Cornerstone Life Advisors. All rights reserved. Fifi Makeunchea, Licensed Insurance Agent.</p>
        </div>
      </div>
    </footer>
  );
}
