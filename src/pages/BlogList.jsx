import { useNavigate } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useEffect } from 'react';

export default function BlogList() {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <BookOpen className="w-8 h-8 text-gold-400 mx-auto mb-4" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">The Cornerstone <span className="text-gold-400">Blog</span></h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">Free guides and insights to help you make smarter insurance decisions.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 gap-6">
          {blogPosts.map((p) => (
            <button
              key={p.slug}
              onClick={() => navigate(`/blog/${p.slug}`)}
              className="group bg-white rounded-2xl border border-navy-100 hover:border-gold-200 p-7 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col text-left"
            >
              <span className="text-gold-600 text-xs font-semibold uppercase tracking-wider mb-3">{p.category}</span>
              <h3 className="font-display text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-2">{p.title}</h3>
              <p className="text-navy-500 text-sm flex-1">{p.excerpt}</p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-navy-50">
                <span className="text-navy-300 text-xs flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{p.readTime}</span>
                <span className="text-gold-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight className="w-3.5 h-3.5" /></span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Ready to Protect Your Family?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl">
              <Calendar className="w-5 h-5" />Get Free Quote
            </a>
            <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl">
              Book Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
