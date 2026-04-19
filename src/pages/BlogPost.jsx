import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

function renderContent(content) {
  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) { i++; continue; }

    // H2
    if (trimmed.startsWith('## ')) {
      elements.push(<h2 key={i} className="font-display text-2xl font-bold text-navy-900 mt-10 mb-4">{trimmed.slice(3)}</h2>);
      i++; continue;
    }

    // H3
    if (trimmed.startsWith('### ')) {
      elements.push(<h3 key={i} className="font-display text-xl font-semibold text-navy-900 mt-8 mb-3">{trimmed.slice(4)}</h3>);
      i++; continue;
    }

    // Table
    if (trimmed.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const row = lines[i].trim();
        const cells = row.split('|').filter(Boolean).map(c => c.trim());
        if (!cells.every(c => /^-+$/.test(c))) {
          rows.push(cells);
        }
        i++;
      }
      if (rows.length > 0) {
        elements.push(
          <table key={`table-${i}`} className="w-full border-collapse mb-6 text-sm">
            <thead>
              <tr>{rows[0].map((c, j) => <th key={j} className="bg-navy-50 text-left px-4 py-2.5 font-semibold text-navy-900 border border-navy-200">{c}</th>)}</tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri}>{row.map((c, j) => <td key={j} className="px-4 py-2.5 border border-navy-200">{formatInline(c)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        );
      }
      continue;
    }

    // List items
    if (trimmed.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 mb-4 space-y-1">
          {items.map((item, j) => <li key={j}>{formatInline(item)}</li>)}
        </ul>
      );
      continue;
    }

    // Regular paragraph
    elements.push(<p key={i} className="mb-4 leading-relaxed">{formatInline(trimmed)}</p>);
    i++;
  }

  return elements;
}

function formatInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-navy-900">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      <section className="bg-navy-950 pt-32 pb-14">
        <div className="max-w-3xl mx-auto px-4">
          <button onClick={() => navigate('/blog')} className="inline-flex items-center gap-2 text-navy-400 hover:text-gold-400 text-sm mb-6">
            <ArrowLeft className="w-4 h-4" />Back to Blog
          </button>
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider block mb-3">{post.category}</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">{post.title}</h1>
          <div className="flex items-center gap-4 text-navy-400 text-sm">
            <Clock className="w-4 h-4" />{post.readTime}<span>{post.date}</span>
          </div>
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-navy-800">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="/fifi.jpg" alt="Fifi" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Fifi Makeunchea</p>
              <p className="text-navy-400 text-xs">Licensed Agent • Fredericksburg, VA</p>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 text-navy-700">
        {renderContent(post.content)}
      </article>

      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-3">Get Your Personalized Quote</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#quick-form" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl">
              <Calendar className="w-5 h-5" />Free Quote
            </a>
            <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl">
              Talk to Fifi
            </a>
          </div>
        </div>
      </div>

      <section className="bg-navy-50/50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="font-display text-2xl font-bold text-navy-900 mb-8 text-center">Keep Reading</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {others.map((p) => (
              <button
                key={p.slug}
                onClick={() => navigate(`/blog/${p.slug}`)}
                className="group bg-white rounded-2xl border border-navy-100 hover:border-gold-200 p-6 hover:shadow-lg flex flex-col text-left"
              >
                <h4 className="font-display text-lg font-bold text-navy-900 group-hover:text-gold-600 mb-2">{p.title}</h4>
                <p className="text-navy-500 text-sm flex-1">{p.excerpt}</p>
                <span className="mt-4 text-gold-600 text-sm font-semibold inline-flex items-center gap-1">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
