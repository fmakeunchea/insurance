import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const html = post.content
    .replace(/^### (.*$)/gm, '<h3 class="font-display text-xl font-semibold text-navy-900 mt-8 mb-3">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="font-display text-2xl font-bold text-navy-900 mt-10 mb-4">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-navy-900">$1</strong>')
    .replace(/^\| (.+) \|$/gm, (m) => {
      const cells = m.split('|').filter(Boolean).map(c => c.trim());
      if (cells.every(c => /^-+$/.test(c))) return '';
      return '<tr>' + cells.map(c => `<td class="px-4 py-2 border border-navy-200 text-sm">${c}</td>`).join('') + '</tr>';
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, (m) => `<table class="w-full border-collapse mb-6">${m}</table>`)
    .replace(/^\- (.+$)/gm, '<li class="mb-1">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, (m) => `<ul class="list-disc pl-6 mb-4">${m}</ul>`)
    .replace(/^(?!<[a-z])(.*\S.*)$/gm, '<p class="mb-4 leading-relaxed">$1</p>');

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-navy-950 pt-32 pb-14">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-navy-400 hover:text-gold-400 text-sm mb-6"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider block mb-3">{post.category}</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">{post.title}</h1>
          <div className="flex items-center gap-4 text-navy-400 text-sm"><Clock className="w-4 h-4" />{post.readTime}<span>{post.date}</span></div>
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-navy-800">
            <div className="w-10 h-10 rounded-full overflow-hidden"><img src="/fifi.jpg" alt="Fifi" className="w-full h-full object-cover" /></div>
            <div><p className="text-white font-semibold text-sm">Fifi Makeunchea</p><p className="text-navy-400 text-xs">Licensed Agent • Fredericksburg, VA</p></div>
          </div>
        </div>
      </section>
      <article className="max-w-3xl mx-auto px-4 py-12 text-navy-700" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-3">Get Your Personalized Quote</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/#quick-form" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl"><Calendar className="w-5 h-5" />Free Quote</Link>
            <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl">Talk to Fifi</a>
          </div>
        </div>
      </div>
      <section className="bg-navy-50/50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="font-display text-2xl font-bold text-navy-900 mb-8 text-center">Keep Reading</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-white rounded-2xl border border-navy-100 hover:border-gold-200 p-6 hover:shadow-lg flex flex-col">
                <h4 className="font-display text-lg font-bold text-navy-900 group-hover:text-gold-600 mb-2">{p.title}</h4>
                <p className="text-navy-500 text-sm flex-1">{p.excerpt}</p>
                <span className="mt-4 text-gold-600 text-sm font-semibold inline-flex items-center gap-1">Read <ArrowRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
