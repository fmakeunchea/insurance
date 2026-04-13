import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Calculator, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const CATEGORY_COLORS = {
  Planning: 'bg-blue-50 text-blue-600',
  Education: 'bg-green-50 text-green-600',
  Local: 'bg-purple-50 text-purple-600',
  Pricing: 'bg-amber-50 text-amber-600',
  Awareness: 'bg-red-50 text-red-600',
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-950 pt-32 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-navy-400 hover:text-gold-400 text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category]}`}>
              {post.category}
            </span>
            <span className="text-navy-400 text-xs flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-navy-400 text-xs">{post.date}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-navy-300 text-lg leading-relaxed">{post.excerpt}</p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-navy-800">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="/fifi.jpg" alt="Fifi Makeunchea" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Fifi Makeunchea</p>
              <p className="text-navy-400 text-xs">Licensed Insurance Agent • Fredericksburg, VA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-navy max-w-none text-navy-700 leading-relaxed
          [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy-900 [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy-900 [&_h3]:mt-8 [&_h3]:mb-3
          [&_p]:mb-4 [&_p]:leading-relaxed
          [&_strong]:text-navy-900
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul_li]:mb-2
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol_li]:mb-2
          [&_table]:w-full [&_table]:mb-6 [&_table]:border-collapse
          [&_th]:bg-navy-50 [&_th]:text-left [&_th]:px-4 [&_th]:py-2.5 [&_th]:text-sm [&_th]:font-semibold [&_th]:text-navy-900 [&_th]:border [&_th]:border-navy-200
          [&_td]:px-4 [&_td]:py-2.5 [&_td]:text-sm [&_td]:border [&_td]:border-navy-200
          [&_blockquote]:border-l-4 [&_blockquote]:border-gold-400 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-navy-500
        ">
          <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
        </div>

        {/* Inline CTA */}
        <div className="mt-12 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Get Your Personalized Quote
          </h3>
          <p className="text-navy-300 mb-6 max-w-lg mx-auto">
            Every family's situation is different. See how affordable coverage can be for you — it takes 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/#quote"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg"
            >
              <Calculator className="w-5 h-5" />
              Free Quote in 60 Seconds
            </Link>
            <a
              href="https://calendly.com/harnordinc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all"
            >
              <Calendar className="w-5 h-5" />
              Talk to Fifi — Free
            </a>
          </div>
        </div>

        {/* Share */}
        <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-navy-100">
          <span className="text-navy-400 text-sm flex items-center gap-1.5">
            <Share2 className="w-4 h-4" />
            Share this article:
          </span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-400 hover:text-blue-600 text-sm font-medium transition-colors"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-400 hover:text-sky-500 text-sm font-medium transition-colors"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-400 hover:text-blue-700 text-sm font-medium transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-navy-50/50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl font-bold text-navy-900 mb-8 text-center">
            Keep Reading
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl border border-navy-100 hover:border-gold-200 p-6 transition-all hover:shadow-lg flex flex-col"
              >
                <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${CATEGORY_COLORS[p.category]}`}>
                  {p.category}
                </span>
                <h4 className="font-display text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-2">
                  {p.title}
                </h4>
                <p className="text-navy-500 text-sm flex-1">{p.excerpt}</p>
                <span className="mt-4 text-gold-600 text-sm font-semibold inline-flex items-center gap-1">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple markdown to HTML converter for blog content
function markdownToHtml(md) {
  return md
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^\| (.+) \|$/gm, (match) => {
      const cells = match.split('|').filter(Boolean).map((c) => c.trim());
      const isHeader = cells.every((c) => /^-+$/.test(c));
      if (isHeader) return '';
      const tag = match.includes('---') ? 'td' : 'td';
      return '<tr>' + cells.map((c) => `<${tag}>${c}</${tag}>`).join('') + '</tr>';
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, (match) => {
      const rows = match.trim().split('\n').filter(Boolean);
      if (rows.length > 0) {
        const header = rows[0].replace(/td>/g, 'th>');
        const body = rows.slice(1).join('\n');
        return `<table><thead>${header}</thead><tbody>${body}</tbody></table>`;
      }
      return match;
    })
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\- (.+$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(?!<[a-z])(.*\S.*)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>\s*<\/p>/g, '');
}
