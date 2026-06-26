import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, ArrowRight, Home, DollarSign, Users, Heart, PiggyBank,
  ShieldCheck, BookOpen, Lock, CheckCircle, Clock,
} from 'lucide-react';
import SEO from '../components/SEO';
import { trackLandingView } from '../utils/track';

const TRUST = [
  { icon: ShieldCheck, label: 'Licensed Insurance Professional' },
  { icon: BookOpen, label: 'Free Educational Tool' },
  { icon: CheckCircle, label: 'No Obligation' },
  { icon: Lock, label: 'Private & Secure' },
];

const CHECKS = [
  { icon: Home, label: 'Mortgage protection', desc: 'Could your family keep the home?' },
  { icon: DollarSign, label: 'Income replacement', desc: 'Would the paycheck be covered?' },
  { icon: Heart, label: "Children's future", desc: 'Education and stability, protected.' },
  { icon: Shield, label: 'Final expenses', desc: 'Spare loved ones the burden.' },
  { icon: Users, label: 'Beneficiaries', desc: 'Are they current and correct?' },
  { icon: PiggyBank, label: 'Emergency savings', desc: 'How long could you weather a loss?' },
];

// Single-goal CTA used throughout the page — always routes to the quiz.
function QuizCTA({ children, className = '' }) {
  return (
    <Link
      to="/quiz"
      className={`inline-flex items-center justify-center gap-2 px-9 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg transition-all hover:shadow-xl shadow-gold-500/25 active:scale-[0.98] ${className}`}
    >
      {children} <ArrowRight className="w-5 h-5" />
    </Link>
  );
}

export default function StartLanding() {
  useEffect(() => { window.scrollTo(0, 0); trackLandingView('Start Landing'); }, []);

  return (
    <div className="min-h-screen bg-white pb-24 lg:pb-0">
      <SEO
        title="Is Your Family Properly Protected? Free 60-Second Quiz"
        description="Most parents don't know if their family is properly protected. Take the free 60-second Family Protection Score quiz — check your mortgage protection, income replacement, children's future, and final expenses. No obligation."
        path="/start"
      />

      {/* Minimal header — logo only, no navigation */}
      <header className="absolute top-0 inset-x-0 z-20 py-5">
        <div className="max-w-5xl mx-auto px-4 flex justify-center lg:justify-start">
          <img src="/logo.png" alt="Cornerstone Life Insurance" className="h-9 w-auto brightness-0 invert" />
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-24 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,153,102,0.12),transparent_55%)]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-semibold">Free 60-Second Quiz</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Most Parents Don't Know If Their Family Is{' '}
            <span className="text-gold-400">Properly Protected</span>
          </h1>
          <p className="text-navy-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Take the free 60-second Family Protection Score quiz and discover potential gaps in your{' '}
            <strong className="text-white">mortgage protection, income replacement, children's future, and final expenses.</strong>
          </p>
          <QuizCTA>Take the Free Quiz</QuizCTA>
          <p className="text-navy-400 text-sm mt-5">No obligation. No pressure. Educational tool only.</p>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="bg-navy-50 border-y border-navy-100 py-6">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TRUST.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <Icon className="w-6 h-6 text-gold-500" />
              <span className="text-navy-700 text-xs font-semibold leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUIZ PREVIEW (directly below hero — communicates value immediately) ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
              What the quiz checks
            </h2>
            <p className="text-navy-500 text-lg flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4" /> Takes less than 60 seconds
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHECKS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-white border border-navy-100 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 bg-gold-50 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">{label}</p>
                  <p className="text-navy-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <QuizCTA>Take the Free Quiz</QuizCTA>
            <p className="text-navy-400 text-sm mt-4 flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4" /> Takes about 60 seconds
            </p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="bg-navy-50/60 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-5">
            Most families are counting on a plan they've never actually checked.
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed mb-4">
            You cover the mortgage. You bring home the income. Maybe you have a policy through work.
            But here's the question almost no one stops to ask:
          </p>
          <p className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-4">
            If your paycheck disappeared tomorrow, would your family really be okay?
          </p>
          <p className="text-navy-600 text-lg leading-relaxed">
            Employer coverage is often only 1–2× your salary — and it disappears the day you leave the job.
            Most families have a protection gap they don't even know about. The good news? It takes
            60 seconds to find out where you stand.
          </p>
        </div>
      </section>

      {/* ── ADVISOR ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-gold-400/40 shadow-xl">
              <img src="/fifi.jpg" alt="Fifi Makeunchea, licensed insurance professional" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="text-navy-700 text-lg leading-relaxed mb-3">
                "Hi, I'm Fifi, a licensed insurance professional. I help families understand their
                protection options in simple language, without pressure."
              </p>
              <p className="font-display font-bold text-navy-900">Fifi Makeunchea</p>
              <p className="text-navy-500 text-sm">Licensed Insurance Professional · Serving families in all 50 states</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Shield className="w-11 h-11 text-gold-400 mx-auto mb-5" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
            Find Out Your Family Protection Score Today
          </h2>
          <QuizCTA>Start My Free Quiz</QuizCTA>
          <p className="text-navy-400 text-sm mt-5">No obligation. No pressure. Educational tool only.</p>
        </div>
      </section>

      {/* ── FOOTER DISCLAIMER (minimal) ── */}
      <footer className="bg-navy-950 py-8">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <img src="/logo.png" alt="Cornerstone Life Insurance" className="h-7 w-auto brightness-0 invert mx-auto mb-4 opacity-80" />
          <p className="text-navy-400 text-xs leading-relaxed">
            This quiz is for educational purposes only and is not a quote, application, or offer of
            insurance. Coverage is subject to underwriting approval, policy terms, limitations, and
            exclusions.
          </p>
          <p className="text-navy-500 text-xs mt-3">© 2026 Cornerstone Life Insurance. All rights reserved.</p>
        </div>
      </footer>

      {/* ── STICKY BOTTOM MOBILE CTA ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white border-t border-navy-200 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] px-4 py-3">
        <Link
          to="/quiz"
          className="flex items-center justify-center gap-2 w-full py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-base active:scale-[0.98] transition-all"
        >
          <Shield className="w-5 h-5" /> Take the Free Quiz
        </Link>
      </div>
    </div>
  );
}
