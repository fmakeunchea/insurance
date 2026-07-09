import { useState, useEffect } from 'react';
import { X, Shield, ArrowRight, CheckCircle, Download, BookOpen } from 'lucide-react';
import { trackLead } from '../utils/track';
import { freeGuides } from '../data/freeGuides';

// The lead magnet we offer: the Family Protection Checklist.
const GUIDE = freeGuides.find((g) => g.slug === 'family-protection-checklist') || freeGuides[0];

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed || sessionStorage.getItem('guide-popup-shown')) return;

    const trigger = () => {
      if (sessionStorage.getItem('guide-popup-shown')) return;
      setShow(true);
      sessionStorage.setItem('guide-popup-shown', '1');
    };

    // Desktop: exit-intent (mouse leaves top of window)
    const handleLeave = (e) => { if (e.clientY <= 0) trigger(); };
    document.addEventListener('mouseleave', handleLeave);

    // Fallback timer so non-exiting visitors still see it once (30s desktop / 45s mobile)
    const delay = window.innerWidth < 768 ? 45000 : 30000;
    const timer = setTimeout(trigger, delay);

    return () => { document.removeEventListener('mouseleave', handleLeave); clearTimeout(timer); };
  }, [closed]);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          guide: GUIDE.title,
          _subject: `Free Guide Popup: ${GUIDE.title} — ${email}`,
          source: 'Free Guide Popup',
        }),
      });
    } catch {}
    trackLead('Free Guide Popup', { guide: GUIDE.slug });
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
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">Your Checklist Is Ready</h3>
              <p className="text-navy-500 text-sm mb-6">Click below to download it now — I've also emailed you a copy.</p>
              <a
                href={GUIDE.pdfUrl}
                download
                onClick={() => trackLead('Free Guide Downloaded', { guide: GUIDE.slug })}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl transition-all"
              >
                <Download className="w-5 h-5" /> Download the Free Checklist
              </a>
              <p className="text-navy-400 text-xs mt-5">
                Want it personalized?{' '}
                <a href="/quiz" className="text-gold-600 font-semibold">Take the free 60-second quiz →</a>
              </p>
            </div>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-100 rounded-full px-3 py-1 mb-5">
                <BookOpen className="w-3.5 h-3.5 text-gold-600" />
                <span className="text-gold-700 text-xs font-semibold">Free Download · No Cost</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
                Free Guide: The <span className="text-gold-600">Family Protection Checklist</span>
              </h2>
              <p className="text-navy-500 mb-6">
                {GUIDE.subtitle}. Enter your email and I'll send you this simple, jargon-free checklist —
                so you know exactly what your family needs, before you ever talk to an agent.
              </p>
              <form onSubmit={submit} className="space-y-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email address" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all">
                  Send Me the Free Checklist <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-navy-100 text-navy-400 text-xs">
                <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" />No spam, ever</span>
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
