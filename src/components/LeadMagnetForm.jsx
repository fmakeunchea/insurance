import { useState } from 'react';
import { Download, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { trackLead } from '../utils/track';

export default function LeadMagnetForm({ guide, compact = false }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || '(not provided)',
          email,
          guide: guide.title,
          _subject: `Lead Magnet: ${guide.title} — ${email}`,
          source: `Free Guide: ${guide.slug}`,
        }),
      });
    } catch {}

    trackLead('Lead Magnet', { guide: guide.slug });
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-6">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
          Your Guide Is Ready
        </h3>
        <p className="text-navy-500 text-sm mb-5">
          Click below to download. I've also emailed you a copy.
        </p>
        <a
          href={guide.pdfUrl}
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl transition-all"
          onClick={() => trackLead('Lead Magnet Downloaded', { guide: guide.slug })}
        >
          <Download className="w-5 h-5" /> Download {guide.title}
        </a>
        <p className="text-navy-400 text-xs mt-4">
          Questions?{' '}
          <a
            href="https://calendly.com/harnordinc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-600 font-semibold"
          >
            Book a free consultation →
          </a>
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={submit} className="space-y-3">
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 text-sm"
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-sm transition-all active:scale-[0.98]"
        >
          <Download className="w-4 h-4" /> Send Me the Guide
        </button>
        <p className="text-navy-300 text-xs text-center flex items-center justify-center gap-1">
          <Shield className="w-3 h-3" /> No spam. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        type="text"
        placeholder="First name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 text-[15px]"
      />
      <input
        type="email"
        required
        placeholder="Your email address *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 text-[15px]"
      />
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-base transition-all active:scale-[0.98]"
      >
        <Download className="w-5 h-5" /> Send Me the Free Guide{' '}
        <ArrowRight className="w-4 h-4" />
      </button>
      <p className="text-navy-300 text-xs text-center flex items-center justify-center gap-1">
        <Shield className="w-3 h-3" /> Your info is private. No spam, ever.
      </p>
    </form>
  );
}
