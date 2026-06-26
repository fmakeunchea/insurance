import { useState, useEffect } from 'react';
import {
  Shield, ArrowRight, ArrowLeft, CheckCircle, Clock, Lock,
  Home, Heart, Users, DollarSign, Calendar, Phone, ShieldCheck, Award,
} from 'lucide-react';
import SEO from '../components/SEO';
import { trackQuote, trackLead, trackBooking } from '../utils/track';

// ── Quiz questions. Each option carries hidden points (0–10). Max score = 100. ──
const QUESTIONS = [
  {
    id: 'household', icon: Users, q: 'What best describes your household?',
    options: [
      { label: 'Married / partnered with children', points: 6 },
      { label: 'Married / partnered, no children', points: 8 },
      { label: 'Single parent', points: 5 },
      { label: 'Single, no dependents', points: 10 },
    ],
  },
  {
    id: 'dependents', icon: Users, q: 'How many people rely on your income?',
    options: [
      { label: 'None', points: 10 },
      { label: '1', points: 8 },
      { label: '2', points: 6 },
      { label: '3 or more', points: 4 },
    ],
  },
  {
    id: 'home', icon: Home, q: 'Do you own your home?',
    options: [
      { label: 'Own it outright (no mortgage)', points: 10 },
      { label: 'Own with a mortgage', points: 6 },
      { label: 'Rent', points: 8 },
    ],
  },
  {
    id: 'mortgage', icon: Home, q: 'Roughly how much is left on your mortgage?',
    options: [
      { label: 'No mortgage / paid off', points: 10 },
      { label: 'Under $100k', points: 8 },
      { label: '$100k – $250k', points: 6 },
      { label: '$250k – $500k', points: 4 },
      { label: 'Over $500k', points: 2 },
    ],
  },
  {
    id: 'coverage', icon: Shield, q: 'Do you currently have life insurance?',
    options: [
      { label: 'Yes — a policy I bought myself', points: 10 },
      { label: 'Only through my employer', points: 5 },
      { label: 'Not sure', points: 2 },
      { label: 'No life insurance at all', points: 0 },
    ],
  },
  {
    id: 'income', icon: DollarSign, q: 'If your income stopped tomorrow, how long could your family keep their lifestyle?',
    options: [
      { label: 'More than 2 years', points: 10 },
      { label: '6 – 24 months', points: 7 },
      { label: '1 – 6 months', points: 4 },
      { label: 'Less than 1 month', points: 0 },
    ],
  },
  {
    id: 'savings', icon: DollarSign, q: 'How many months of expenses are in your emergency savings?',
    options: [
      { label: '6+ months', points: 10 },
      { label: '3 – 6 months', points: 7 },
      { label: '1 – 3 months', points: 4 },
      { label: 'Less than 1 month / none', points: 0 },
    ],
  },
  {
    id: 'beneficiaries', icon: Users, q: 'Are the beneficiaries on your accounts and policies up to date?',
    options: [
      { label: 'Yes — all current and reviewed recently', points: 10 },
      { label: 'Some, but not all / not recent', points: 5 },
      { label: 'No / not sure', points: 0 },
    ],
  },
  {
    id: 'final', icon: Heart, q: 'Do you have a plan for final expenses (funeral, burial, end-of-life costs)?',
    options: [
      { label: 'Yes — fully covered', points: 10 },
      { label: 'Somewhat — partially planned', points: 5 },
      { label: 'No plan in place', points: 0 },
    ],
  },
  {
    id: 'future', icon: Award, q: "Is your family's long-term future (retirement, kids' education) on track?",
    options: [
      { label: 'Yes — actively saving and on track', points: 10 },
      { label: 'Started, but behind where I\'d like', points: 6 },
      { label: 'Not yet', points: 2 },
      { label: "Haven't thought about it", points: 0 },
    ],
  },
];

// ── Five result tiers keyed by score range. ──
const TIERS = [
  {
    min: 90, name: 'Excellent Protection', emoji: '🟢', color: 'green',
    ring: 'text-green-500', badge: 'bg-green-50 text-green-700 border-green-200',
    headline: 'Your family is well protected.',
    body: "Outstanding — you've done what most families never get around to. Your mortgage, income, and family's future appear to be in strong shape. That's real peace of mind, and you earned it.",
    risks: [
      'Is your coverage amount still right as your income and home value have grown?',
      'Are your beneficiaries 100% current?',
      'Could you be paying more than you need for the same protection?',
    ],
    next: 'A free 15-minute review keeps your great setup great — and often finds easy savings.',
  },
  {
    min: 70, name: 'Good Protection', emoji: '🔵', color: 'blue',
    ring: 'text-blue-500', badge: 'bg-blue-50 text-blue-700 border-blue-200',
    headline: 'Solid protection — with a few gaps worth closing.',
    body: "You're ahead of most families, and that's worth celebrating. But your answers point to one or two areas where your family could be more exposed than you'd like.",
    risks: [
      'A possible gap between your coverage and what your family would actually need',
      'Income or savings runway that may be thinner than ideal',
      'Final-expense or beneficiary details that may need updating',
    ],
    next: 'A free 15-minute review pinpoints your specific gaps and closes them — without overpaying.',
  },
  {
    min: 50, name: 'Moderate Risk', emoji: '🟡', color: 'amber',
    ring: 'text-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200',
    headline: 'Some protection — but also some real gaps.',
    body: 'Right now, an unexpected event could put your family under financial strain. This is a very common place to be — and it is very fixable, usually for less than you expect.',
    risks: [
      'Income replacement — your family may not maintain its lifestyle for long without your paycheck',
      'Mortgage protection — the home could be at risk',
      "Savings or final-expense planning that isn't fully in place",
    ],
    next: 'A free 15-minute review maps your gaps and builds a simple plan to close them.',
  },
  {
    min: 30, name: 'High Risk', emoji: '🟠', color: 'orange',
    ring: 'text-orange-500', badge: 'bg-orange-50 text-orange-700 border-orange-200',
    headline: 'Significant protection gaps worth addressing soon.',
    body: "This isn't about scaring you — it's about clarity. Based on your answers, if something happened to you, your family could face serious financial hardship. The encouraging part: families exactly like yours close these gaps every day, usually more affordably than they'd guess.",
    risks: [
      'Losing the ability to cover the mortgage',
      'Little or no income replacement to keep daily life going',
      'No plan for final expenses, leaving loved ones to cover the cost',
    ],
    next: "A free 15-minute review walks through your situation and builds a clear, judgment-free plan. Protection generally costs less the sooner it's in place.",
  },
  {
    min: 0, name: 'Critical Gaps', emoji: '🔴', color: 'red',
    ring: 'text-red-500', badge: 'bg-red-50 text-red-700 border-red-200',
    headline: 'Right now, your family is largely unprotected.',
    body: 'No guilt, no lecture. The fact that you took this quiz means you care about your family\'s future — and that\'s the hardest part. This is fixable, starting today. Many families in this exact situation get meaningful protection in place quickly and for far less than they assumed.',
    risks: [
      'No life insurance to replace your income',
      'No protection for the mortgage or the roof over their heads',
      "No plan for final expenses or your children's future",
    ],
    next: 'Your most important next step is a free 15-minute review. We start simple, go at your pace, and build a plan that fits your budget.',
  },
];

function tierFor(score) {
  return TIERS.find((t) => score >= t.min) || TIERS[TIERS.length - 1];
}

export default function FamilyProtectionQuiz() {
  // step: 0 = intro, 1..10 = questions, 11 = lead gate, 12 = results
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({}); // questionIndex -> points
  const [lead, setLead] = useState({ first: '', last: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [step]);

  const qIndex = step - 1; // when in a question step
  const totalQ = QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const progress = step === 0 ? 0 : Math.min(100, Math.round((Math.min(step, totalQ + 1) / (totalQ + 1)) * 100));

  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const tier = tierFor(score);

  const start = () => { trackQuote('Family Protection Score Quiz'); setStep(1); };

  const choose = (points) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: points }));
    // brief delay so the selection is visible, then auto-advance
    setTimeout(() => setStep((s) => s + 1), 180);
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const canSubmitLead = lead.first && lead.last && lead.email && lead.phone;

  const submitLead = async () => {
    if (!canSubmitLead) return;
    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...lead,
          score,
          tier: tier.name,
          _subject: `Family Protection Score Lead: ${lead.first} ${lead.last} — ${score}/100 (${tier.name})`,
          source: 'Family Protection Score Quiz',
        }),
      });
    } catch { /* non-blocking */ }
    trackLead('Family Protection Score Quiz', { score, tier: tier.name });
    setSubmitted(true);
    setStep(totalQ + 2); // results
  };

  const card = (active) =>
    `w-full text-left p-5 rounded-xl border-2 transition-all ${
      active ? 'border-gold-500 bg-gold-50 shadow-lg shadow-gold-500/10' : 'border-navy-100 hover:border-navy-300 hover:bg-navy-50/50'
    }`;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="What's Your Family Protection Score? Free 60-Second Quiz"
        description="Take the free 60-second Family Protection Score quiz and discover gaps in your mortgage protection, income replacement, children's future, and final expenses. Licensed advisor, no obligation."
        path="/quiz"
      />

      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 pt-32 pb-16 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,153,102,0.10),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-4">

          {/* ── INTRO ── */}
          {step === 0 && (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
                <Shield className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 text-sm font-semibold">Free 60-Second Quiz · Licensed Advisor</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
                What's Your <span className="text-gold-400">Family Protection Score?</span>
              </h1>
              <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-8">
                Answer 10 quick questions and discover the hidden gaps in your family's financial protection —
                across your <strong className="text-white">mortgage, income, children's future, and final expenses.</strong> Get
                your personalized score in under 60 seconds. Free, private, and no obligation.
              </p>
              <button onClick={start} className="inline-flex items-center gap-2 px-9 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg transition-all hover:shadow-xl shadow-gold-500/25">
                Start My Free Quiz <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-navy-300 text-sm">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold-400" />Takes 60 seconds</span>
                <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-gold-400" />100% free</span>
                <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-gold-400" />No spam, never sold</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-gold-400" />Licensed professional</span>
              </div>
            </div>
          )}

          {/* ── QUESTIONS + LEAD GATE card ── */}
          {step >= 1 && step <= totalQ + 1 && (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-navy-50 px-6 sm:px-8 py-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-navy-600">
                    {step <= totalQ ? `Question ${step} of ${totalQ}` : 'Last step'}
                  </span>
                  <span className="text-navy-400">{progress}%</span>
                </div>
                <div className="w-full bg-navy-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-gold-500 to-gold-400 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="p-6 sm:p-10">
                {/* Question steps */}
                {step <= totalQ && (() => {
                  const Q = QUESTIONS[qIndex];
                  const Icon = Q.icon;
                  return (
                    <div>
                      <div className="flex items-start gap-3 mb-6">
                        <div className="w-11 h-11 shrink-0 bg-gold-50 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-gold-500" />
                        </div>
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-900 pt-1">{Q.q}</h2>
                      </div>
                      <div className="space-y-3">
                        {Q.options.map((o) => (
                          <button key={o.label} onClick={() => choose(o.points)} className={card(answers[qIndex] === o.points)}>
                            <span className="font-semibold text-navy-900">{o.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                {/* Lead gate */}
                {step === totalQ + 1 && (
                  <div>
                    <div className="text-center mb-6">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">Your score is ready!</h2>
                      <p className="text-navy-500 text-sm">Where should we send your full Family Protection Score and personalized breakdown?</p>
                    </div>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" value={lead.first} onChange={(e) => setLead({ ...lead, first: e.target.value })} placeholder="First Name *" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                        <input type="text" value={lead.last} onChange={(e) => setLead({ ...lead, last: e.target.value })} placeholder="Last Name *" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                      </div>
                      <input type="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} placeholder="Email *" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                      <input type="tel" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="Phone *" className="w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500" />
                      <button onClick={submitLead} disabled={!canSubmitLead} className={`w-full flex items-center justify-center gap-2 px-7 py-4 font-bold rounded-xl text-lg transition-all ${canSubmitLead ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/25' : 'bg-navy-100 text-navy-300 cursor-not-allowed'}`}>
                        See My Family Protection Score <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-5 text-navy-400 text-xs">
                      <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5" />Private &amp; encrypted</span>
                      <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" />No spam, ever</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" />100% free</span>
                    </div>
                    <p className="text-center text-navy-300 text-[11px] mt-4 leading-relaxed">
                      By submitting, you agree to receive your results and follow-up by email or text from Cornerstone Life. Reply STOP anytime. Your information is never sold.
                    </p>
                  </div>
                )}

                {/* Back nav (questions only) */}
                {step >= 2 && step <= totalQ && (
                  <div className="mt-8 pt-6 border-t border-navy-100">
                    <button onClick={back} className="flex items-center gap-2 px-4 py-2 text-navy-500 hover:text-navy-900 font-medium rounded-lg hover:bg-navy-50">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── RESULTS ── */}
          {step === totalQ + 2 && submitted && (
            <div>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-8 sm:p-10 text-center border-b border-navy-100">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide border rounded-full px-3 py-1 mb-5 ${tier.badge}`}>
                    {tier.emoji} {tier.name}
                  </span>
                  <p className="text-navy-400 text-sm mb-1">{lead.first}, your Family Protection Score is</p>
                  <div className="my-2">
                    <span className={`text-7xl font-bold font-display ${tier.ring}`}>{score}</span>
                    <span className="text-navy-300 text-2xl font-display">/100</span>
                  </div>
                  <div className="w-full max-w-md mx-auto bg-navy-100 rounded-full h-3 mt-4">
                    <div className={`h-3 rounded-full transition-all duration-1000 ${tier.color === 'green' ? 'bg-green-500' : tier.color === 'blue' ? 'bg-blue-500' : tier.color === 'amber' ? 'bg-amber-500' : tier.color === 'orange' ? 'bg-orange-500' : 'bg-red-500'}`} style={{ width: `${score}%` }} />
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">{tier.headline}</h2>
                  <p className="text-navy-600 leading-relaxed mb-6">{tier.body}</p>

                  <div className="bg-navy-50 rounded-2xl p-6 mb-6">
                    <p className="font-semibold text-navy-900 mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-gold-500" /> What to look at next:
                    </p>
                    <ul className="space-y-2.5">
                      {tier.risks.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-navy-700 text-sm">
                          <span className="text-gold-500 mt-0.5 shrink-0">›</span> {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-navy-700 mb-8"><strong>Your next step:</strong> {tier.next}</p>

                  {/* Appointment CTA */}
                  <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-7 text-center">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Book Your Free Family Protection Review</h3>
                    <p className="text-navy-300 text-sm mb-5 max-w-md mx-auto">
                      A relaxed 15-minute conversation with a licensed advisor, built entirely around your family.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-navy-300 text-xs mb-6">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-400" />15 minutes</span>
                      <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-gold-400" />No obligation</span>
                      <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-gold-400" />No pressure</span>
                      <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-gold-400" />Personalized guidance</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href="https://calendly.com/fifi-cornerstonelifeinsure" target="_blank" rel="noopener noreferrer" onClick={trackBooking} className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl transition-all hover:shadow-lg">
                        <Calendar className="w-5 h-5" /> Book My Free Review
                      </a>
                      <a href="tel:+15404241852" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20">
                        <Phone className="w-5 h-5" /> Call (540) 424-1852
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-navy-400 text-xs mt-6 max-w-xl mx-auto leading-relaxed">
                The Family Protection Score is an educational self-assessment, not financial, legal, tax, or insurance advice, nor an offer of insurance. Results are estimates based on your answers. All coverage is subject to underwriting approval, policy terms, limitations, and exclusions.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
