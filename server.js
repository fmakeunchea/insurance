import express from 'express';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogPosts.js';
import { products } from './src/data/products.js';
import { cities } from './src/data/cities.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const SITE = 'https://cornerstonelifeinsure.com';

const app = express();

// This is an SPA: every route is served the same index.html. Anything baked into
// index.html's head is therefore inherited by every page — which is why every URL
// was serving the homepage's canonical tag and telling Google each page was a
// duplicate of the homepage. react-helmet sets the right values, but only once JS
// runs, which is too late for the initial crawl. So rewrite the head per route here.
const SUFFIX = ' | Cornerstone Life Advisors';
const DEFAULT_TITLE =
  'Cornerstone Life Advisors — Nationwide Life Insurance | Licensed in All 50 States';
const DEFAULT_DESC =
  'Fifi Makeunchea — Licensed insurance agent in all 50 states. IUL, term life, whole life, final expense. 100% remote, free consultations. Call (540) 424-1852.';

const META = {
  '/': { title: DEFAULT_TITLE, description: DEFAULT_DESC },
  '/services/term-life': {
    title: 'Term Life Insurance in Virginia — Rates from $13/month' + SUFFIX,
    description:
      'Affordable term life insurance in Virginia. $500K coverage from $21/month for healthy 30-year-olds. Compare rates from 15+ A-rated carriers.',
  },
  '/services/whole-life': {
    title: 'Whole Life Insurance in Virginia — Lifetime Coverage' + SUFFIX,
    description:
      'Whole life insurance in Virginia. Lifetime coverage that builds guaranteed cash value. Compare 15+ A-rated carriers with a licensed independent agent.',
  },
  '/services/iul': {
    title: 'IUL (Index Universal Life) Insurance in Virginia' + SUFFIX,
    description:
      'Index Universal Life insurance: permanent coverage with market-linked cash value growth, a 0% floor, tax-free policy loans, and living benefits.',
  },
  '/blog': {
    title: 'Life Insurance Blog — Guides & Expert Insights' + SUFFIX,
    description:
      'Free life insurance guides and expert insights on term life, whole life, IUL, and final expense from licensed agent Fifi Makeunchea.',
  },
  '/shop': {
    title: 'Digital Guides & Resources' + SUFFIX,
    description:
      'Digital life insurance guides: The Wealth Architecture, IUL Wealth Blueprint, and the Family Protection Checklist.',
  },
  '/free-guides': {
    title: 'Free Life Insurance Guides' + SUFFIX,
    description:
      'Download free expert guides on IUL, family protection, and choosing the right life insurance coverage for your family.',
  },
  '/for-engineers': {
    title: 'Life Insurance for Engineers & High Earners' + SUFFIX,
    description:
      'Tax-advantaged wealth building and life insurance strategies for engineers and high-income professionals who have maxed out their 401(k).',
  },
  '/book': {
    title: 'Book a Free Consultation' + SUFFIX,
    description:
      'Book a free, no-pressure life insurance consultation with licensed agent Fifi Makeunchea. 100% remote by phone or video.',
  },
  '/quiz': {
    title: 'Family Protection Score — Free 2-Minute Quiz' + SUFFIX,
    description:
      'Find out how protected your family really is. Take the free 2-minute Family Protection Score quiz and get a personalized coverage recommendation.',
  },
  '/start': {
    title: 'Protect Your Family — Get Started' + SUFFIX,
    description:
      'Get a free life insurance quote in minutes. Licensed in all 50 states, comparing 15+ A-rated carriers. No pressure, no obligation.',
  },
};

for (const p of blogPosts) {
  META[`/blog/${p.slug}`] = { title: p.title + SUFFIX, description: p.excerpt };
}
for (const p of products) {
  META[`/shop/${p.slug}`] = { title: p.title + SUFFIX, description: p.description };
}
for (const c of cities) {
  META[`/life-insurance/${c.slug}`] = {
    title: c.title + SUFFIX,
    description: c.metaDescription,
  };
}

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

function renderHead(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  // Canonical is derived from the real path, so even a route with no META entry
  // gets its own canonical instead of falling back to the homepage.
  const canonical = SITE + (clean === '/' ? '/' : clean);
  const meta = META[clean] || { title: DEFAULT_TITLE, description: DEFAULT_DESC };

  // Function replacements: values contain $ and & which are special in replace().
  return template
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(meta.title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      () => `<meta name="description" content="${esc(meta.description)}" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      () => `<link rel="canonical" href="${esc(canonical)}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/?>/,
      () => `<meta property="og:url" content="${esc(canonical)}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/?>/,
      () => `<meta property="og:title" content="${esc(meta.title)}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      () => `<meta property="og:description" content="${esc(meta.description)}" />`,
    );
}

// index:false so express.static doesn't serve raw index.html for "/" and bypass
// the per-route head rewrite below.
app.use(express.static(DIST, { index: false }));

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html').send(renderHead(req.path));
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));
