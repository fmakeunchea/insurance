import { useState, useEffect } from 'react';
import { Calculator, X, Phone, Calendar } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero section
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-white border-t border-navy-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
          <div className="flex gap-2 max-w-lg mx-auto">
            <a
              href="#quote"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl text-sm transition-all"
            >
              <Calculator className="w-4 h-4" />
              Free Quote
            </a>
            <a
              href="https://calendly.com/harnordinc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl text-sm transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book Call
            </a>
            <a
              href="tel:+15404241852"
              className="w-12 inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop floating button */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        {expanded && (
          <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-navy-100 p-5 w-72 animate-[slideUp_0.2s_ease-out]">
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold text-navy-900 text-sm">Get Started</p>
              <button onClick={() => setExpanded(false)} className="text-navy-400 hover:text-navy-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              <a
                href="#quote"
                onClick={() => setExpanded(false)}
                className="flex items-center gap-3 w-full px-4 py-3 bg-gold-50 hover:bg-gold-100 text-gold-700 rounded-xl transition-colors"
              >
                <Calculator className="w-4 h-4" />
                <div>
                  <p className="font-semibold text-sm">Free Quote</p>
                  <p className="text-gold-600/70 text-xs">60-second estimate</p>
                </div>
              </a>
              <a
                href="https://calendly.com/harnordinc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-4 py-3 bg-navy-50 hover:bg-navy-100 text-navy-700 rounded-xl transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <div>
                  <p className="font-semibold text-sm">Book Consultation</p>
                  <p className="text-navy-500/70 text-xs">Free, no obligation</p>
                </div>
              </a>
              <a
                href="tel:+15404241852"
                className="flex items-center gap-3 w-full px-4 py-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                <div>
                  <p className="font-semibold text-sm">Call Now</p>
                  <p className="text-green-600/70 text-xs">(540) 424-1852</p>
                </div>
              </a>
            </div>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 ${
            expanded
              ? 'bg-navy-900 hover:bg-navy-800'
              : 'bg-gold-500 hover:bg-gold-600 shadow-gold-500/30 animate-[pulse-subtle_3s_ease-in-out_infinite]'
          }`}
        >
          {expanded ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Calculator className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </>
  );
}
