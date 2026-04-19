import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { blogPosts } from '../src/data/blogPosts.js';
import { products } from '../src/data/products.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://cornerstonelifeinsure.com';
const today = new Date().toISOString().split('T')[0];

const urls = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/services/iul', priority: '0.9', changefreq: 'monthly' },
  { loc: '/services/term-life', priority: '0.9', changefreq: 'monthly' },
  { loc: '/services/whole-life', priority: '0.9', changefreq: 'monthly' },
  { loc: '/blog', priority: '0.8', changefreq: 'weekly' },
  { loc: '/shop', priority: '0.8', changefreq: 'weekly' },
  ...blogPosts.map(p => ({ loc: `/blog/${p.slug}`, priority: '0.7', changefreq: 'monthly' })),
  ...products.map(p => ({ loc: `/shop/${p.slug}`, priority: '0.8', changefreq: 'monthly' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(join(__dirname, '..', 'public', 'sitemap.xml'), xml);
console.log(`✓ sitemap.xml generated with ${urls.length} URLs`);
