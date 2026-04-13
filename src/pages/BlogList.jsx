import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const CATEGORY_COLORS = {
  Planning: 'bg-blue-50 text-blue-600',
  Education: 'bg-green-50 text-green-600',
  Local: 'bg-purple-50 text-purple-600',
  Pricing: 'bg-amber-50 text-amber-600',
  Awareness: 'bg-red-50 text-red-600',
};

export default function BlogList() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <BookOpen className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">Insurance Education</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            The Cornerstone <span className="text-gold-400">Blog</span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Free guides, tips, and insights to help you make smarter decisions about
            life insurance and financial protection for your family.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <Link
          to={`/blog/${featured.slug}`}
          className="block bg-white rounded-2xl border border-navy-100 shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
        >
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[featured.category]}`}>
                {featured.category}
              </span>
              <span className="text-navy-400 text-xs flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featured.readTime}
              </span>
              <span className="text-navy-300 text-xs">{featured.date}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
              {featured.title}
            </h2>
            <p className="text-navy-500 leading-relaxed mb-5">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm group-hover:gap-3 transition-all">
              Read Full Article <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* Post Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-navy-100 hover:border-gold-200 p-7 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category]}`}>
                  {post.category}
                </span>
                <span className="text-navy-400 text-xs flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-navy-50">
                <span className="text-navy-300 text-xs">{post.date}</span>
                <span className="text-gold-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Protect Your Family?
          </h2>
          <p className="text-navy-300 mb-8">
            Reading is great — but action is what protects your family. Get a free personalized quote
            in 60 seconds, or book a consultation with Fifi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#quote"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Get Your Free Quote
            </Link>
            <a
              href="https://calendly.com/harnordinc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
