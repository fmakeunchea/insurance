import { useState, useEffect } from 'react';
import { X, Shield, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { trackLead } from '../utils/track';

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed || sessionStorage.getItem('exit-shown')) return;

    const handleLeave = (e) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem('exit-shown', '1');
      }
    };

    // Mobile: show after 45s
    const mobile = setTimeout(() => {
      if (window.innerWidth < 768 && !sessionStorage.getItem('exit-shown')) {
        setShow(true);
        sessionStorage.setItem('exit-shown', '1');
      }
    }, 45000);

    document.addEventListener('mouseleave', handleLeave);
    return () => { document.removeEventListener('mouseleave', handleLeave); clearTimeout(mobile); };
  }, [closed]);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, _subject: `Exit Popup Lead: ${email}`, source: 'Exit Intent Popup' }),
      });
    } catch {}
    trackLead('Exit Popup');
    setDone(true);
  };

  const close = () => { setShow(false); setClosed(true); };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm" onClick={close} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
        <button onClick={close} className="absolute top-4 right-4 w-8 h-8 bg-navy-100 hover:bg-navy-200 rounded-full flex items-center justify-center text-navy-500 z-10">
          <X className="w-4 h-4" />
        </button>
        <div className="h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        <div className="p-8 sm:p-10">
          {done ? (
            <div className="text-center py-4">
              <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">You're All Set!</h3>
              <p className="text-navy-500 text-sm mb-6">Check your inbox — I'll send a personalized quote within 24 hours.</p>
              <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl">
                Book a Call Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-3 py-1 mb-5">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                <span className="text-red-600 text-xs font-semibold">Only 7 consultation slots left this week</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
                Wait — Don't Leave Without Your <span className="text-gold-600">Free Quote</span>
              </h2>
              <p className="text-navy-500 mb-6">
                Most families overpay by <strong className="text-navy-900">$300–$500/year</strong> on life insurance.
                Enter your email and I'll show you what you should actually be paying.
              </p>
              <form onSubmit={submit} className="space-y-3">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Enter your email address" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all">
                  Send My Free Quote <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-navy-100 text-navy-400 text-xs">
                <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" />No spam</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" />100% free</span>
              </div>
              <button onClick={close} className="block mx-auto mt-4 text-navy-400 hover:text-navy-600 text-xs">No thanks</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
