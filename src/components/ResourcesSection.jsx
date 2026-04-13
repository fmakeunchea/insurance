import React from 'react';
import { BookOpen, TrendingUp, ShieldCheck, Clock, ArrowRight, Download } from 'lucide-react';

const RESOURCES = [
  {
    icon: BookOpen,
    category: 'Guide',
    title: 'Life Insurance 101: Everything You Need to Know',
    description: 'A beginner-friendly guide covering term vs. whole life, how premiums work, and how much coverage you actually need.',
    readTime: '8 min read',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: TrendingUp,
    category: 'Planning',
    title: '5 Financial Mistakes Young Families Make',
    description: 'Common pitfalls that leave families vulnerable — and the simple steps to avoid them before it\'s too late.',
    readTime: '5 min read',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: ShieldCheck,
    category: 'Checklist',
    title: 'The Ultimate Life Insurance Buying Checklist',
    description: 'Download our free checklist of 15 questions to ask before purchasing any life insurance policy.',
    readTime: 'Free Download',
    isDownload: true,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Clock,
    category: 'Insight',
    title: 'Why Waiting to Buy Insurance Costs You More',
    description: 'Every year you wait, your premiums go up. See the real numbers behind why locking in rates early saves thousands.',
    readTime: '4 min read',
    color: 'bg-amber-50 text-amber-600',
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Resources & Guides
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
              Learn Before You <span className="text-gold-600">Decide</span>
            </h2>
            <p className="text-navy-500 text-lg leading-relaxed">
              Free educational content to help you make confident, informed decisions about your family's financial protection.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors whitespace-nowrap"
          >
            View all resources
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Resource Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map(({ icon: Icon, category, title, description, readTime, isDownload, color }) => (
            <article
              key={title}
              className="group bg-white rounded-2xl border border-navy-100 hover:border-gold-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-navy-400 text-xs font-semibold uppercase tracking-wider">
                    {category}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-navy-900 mb-2 leading-snug group-hover:text-gold-600 transition-colors">
                  {title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed flex-1">
                  {description}
                </p>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-navy-50">
                  <span className="text-navy-400 text-xs flex items-center gap-1.5">
                    {isDownload ? <Download className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                    {readTime}
                  </span>
                  <span className="text-gold-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {isDownload ? 'Download' : 'Read'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-navy-100 p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
              Want a personalized coverage analysis?
            </h3>
            <p className="text-navy-500 text-sm">
              I'll review your situation and give you clear, honest recommendations — completely free.
            </p>
          </div>
          <a
            href="#quote"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/25"
          >
            Get Free Analysis
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
