import { AlertTriangle, DollarSign, Home, Heart, GraduationCap, ArrowRight } from 'lucide-react';

const RISKS = [
  {
    icon: DollarSign,
    stat: '$15,000',
    label: 'Average funeral cost',
    detail: 'Without coverage, your family pays out of pocket — often within days of loss.',
  },
  {
    icon: Home,
    stat: '63%',
    label: 'of families can\'t cover a $500 emergency',
    detail: 'A sudden loss without insurance can mean losing the family home to debt.',
  },
  {
    icon: Heart,
    stat: '40%',
    label: 'of Americans have no life insurance',
    detail: 'Don\'t be part of this statistic. Coverage starts at less than $1/day.',
  },
  {
    icon: GraduationCap,
    stat: '$108K',
    label: 'Average college tuition',
    detail: 'Without insurance, your children\'s education dreams could disappear overnight.',
  },
];

export default function RiskSection() {
  return (
    <section className="py-16 sm:py-20 bg-navy-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,153,102,0.06),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-5">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">The Cost of Waiting</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            What Happens If You <span className="text-red-400">Don't</span> Have Coverage?
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Nobody wants to think about it. But the families who plan ahead are the ones who survive
            the unexpected without financial devastation.
          </p>
        </div>

        {/* Risk cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {RISKS.map(({ icon: Icon, stat, label, detail }) => (
            <div
              key={label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <Icon className="w-6 h-6 text-red-400 mb-4" />
              <p className="text-3xl font-bold text-white font-display mb-1">{stat}</p>
              <p className="text-gold-400 text-sm font-semibold mb-3">{label}</p>
              <p className="text-navy-300 text-xs leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-white text-lg font-semibold mb-2">
              The good news? Coverage is more affordable than you think.
            </p>
            <p className="text-navy-300 text-sm mb-6">
              A healthy 30-year-old can protect their family with $500K in coverage for <strong className="text-gold-400">less than $1/day</strong>.
              Lock in your rate now — it only goes up from here.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/25"
              >
                See How Little It Costs
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://calendly.com/harnordinc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all"
              >
                Talk to Fifi — It's Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
