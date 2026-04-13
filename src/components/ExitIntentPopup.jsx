import { useState, useEffect } from 'react';
import { X, Shield, ArrowRight, CheckCircle, Clock } from 'lucide-react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Don't show if already shown this session
    if (sessionStorage.getItem('exit-popup-shown')) return;

    let timeout;
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        // Small delay to avoid false triggers
        timeout = setTimeout(() => {
          setShow(true);
          sessionStorage.setItem('exit-popup-shown', 'true');
        }, 200);
      }
    };

    // Also trigger after 45 seconds of inactivity on mobile
    const mobileTimeout = setTimeout(() => {
      if (window.innerWidth < 768 && !sessionStorage.getItem('exit-popup-shown')) {
        setShow(true);
        sessionStorage.setItem('exit-popup-shown', 'true');
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
      clearTimeout(mobileTimeout);
    };
  }, [dismissed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Exit popup lead:', email);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-[scaleIn_0.3s_ease-out]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-navy-100 hover:bg-navy-200 rounded-full flex items-center justify-center text-navy-500 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

        <div className="p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">
                You're All Set!
              </h3>
              <p className="text-navy-500 text-sm mb-6">
                Check your inbox for your free quote. I'll personally review your
                options and reach out within 24 hours.
              </p>
              <a
                href="https://calendly.com/harnordinc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all"
              >
                Book a Consultation Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <>
              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-3 py-1 mb-5">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                <span className="text-red-600 text-xs font-semibold">Only 7 free consultation slots left this week</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-3 leading-tight">
                Wait — Don't Leave Without Your{' '}
                <span className="text-gold-600">Free Quote</span>
              </h2>
              <p className="text-navy-500 leading-relaxed mb-6">
                Most families in Fredericksburg overpay by <strong className="text-navy-900">$300–$500/year</strong> on life insurance.
                Enter your email and I'll show you what you should actually be paying — free, in 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/25"
                >
                  Send My Free Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-navy-100">
                <div className="flex items-center gap-1.5 text-navy-400 text-xs">
                  <Shield className="w-3.5 h-3.5" />
                  <span>No spam ever</span>
                </div>
                <div className="flex items-center gap-1.5 text-navy-400 text-xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>100% free</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="block mx-auto mt-4 text-navy-400 hover:text-navy-600 text-xs transition-colors"
              >
                No thanks, I don't need coverage
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
