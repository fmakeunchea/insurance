import { useState, useEffect } from 'react';
import { Calculator, Phone, Calendar } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden">
      <div className="bg-white border-t border-navy-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
        <div className="flex gap-2 max-w-lg mx-auto">
          <a href="#quote" className="flex-1 flex items-center justify-center gap-2 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl text-sm">
            <Calculator className="w-4 h-4" /> Free Quote
          </a>
          <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl text-sm">
            <Calendar className="w-4 h-4" /> Book Call
          </a>
          <a href="tel:+15404241852" className="w-12 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-xl">
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
