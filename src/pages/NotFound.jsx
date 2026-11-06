import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <section className="bg-navy-900 text-white py-28 px-4 text-center">
      <Helmet>
        <title>Page Not Found | Cornerstone Life Advisors</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <p className="text-gold-400 font-semibold mb-3">404</p>
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">We couldn't find that page</h1>
      <p className="text-navy-300 max-w-xl mx-auto mb-8">
        The page may have moved. Here are the best places to start:
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/" className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-6 py-3 rounded-lg">Home</Link>
        <Link to="/quiz" className="border border-white/30 hover:border-gold-400 px-6 py-3 rounded-lg">Take the 2-minute quiz</Link>
        <Link to="/blog" className="border border-white/30 hover:border-gold-400 px-6 py-3 rounded-lg">Read the blog</Link>
        <Link to="/book" className="border border-white/30 hover:border-gold-400 px-6 py-3 rounded-lg">Book a free call</Link>
      </div>
    </section>
  );
}
