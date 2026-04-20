// Free lead magnets — each captures email + instantly delivers a PDF
// Upload each PDF to Hostinger at /pdfs/<filename>.pdf

export const freeGuides = [
  {
    slug: 'family-protection-checklist',
    title: 'The Family Protection Checklist',
    subtitle: '15 Critical Questions to Ask Before Buying Life Insurance',
    audience: 'New parents, young families, first-time buyers',
    audienceIcon: 'Users',
    pages: '12-page printable PDF',
    pdfUrl: '/pdfs/family-protection-checklist.pdf',
    color: 'emerald',
    description:
      'Stop guessing. This step-by-step checklist walks you through exactly what to look for, what to avoid, and how to make sure your family is fully protected — before you ever talk to an agent.',
    bullets: [
      'The DIME formula with fill-in-the-blank worksheet',
      '15 questions every family should ask before buying',
      'Term vs. Whole vs. IUL comparison table',
      '4 common mistakes that leave families underinsured',
      'Virginia-specific action plan',
    ],
  },
  {
    slug: 'iul-wealth-blueprint-sample',
    title: 'The IUL Wealth Blueprint',
    subtitle: 'How Smart Families Use Index Universal Life to Build Tax-Free Wealth',
    audience: 'High-income professionals, business owners, ages 35–60',
    audienceIcon: 'TrendingUp',
    pages: '28-page PDF + worksheets',
    pdfUrl: '/pdfs/iul-wealth-blueprint.pdf',
    color: 'gold',
    featured: true,
    description:
      'Discover why interest in IUL has grown 1,178% — and how you can use this powerful financial tool to build wealth, protect your family, and create tax-free retirement income. Written in plain English, no jargon.',
    bullets: [
      'How IUL cash value grows with ZERO downside risk',
      'Tax-free withdrawals: the wealth-building secret',
      'Living benefits for critical, chronic, and terminal illness',
      'Real case study: $480K tax-free cash value at retirement',
      'IUL vs. 401(k) vs. Roth IRA side-by-side',
      'Self-assessment: Is IUL right for you?',
    ],
  },
  {
    slug: 'life-insurance-buying-guide',
    title: 'Life Insurance Buying Guide 2026',
    subtitle: 'Everything You Need to Know Before You Buy — Virginia Edition',
    audience: 'Anyone comparing policies, feeling overwhelmed',
    audienceIcon: 'BookOpen',
    pages: '20-page PDF',
    pdfUrl: '/pdfs/life-insurance-buying-guide.pdf',
    color: 'navy',
    description:
      'The complete guide to buying life insurance in 2026. Covers every type of policy, how pricing works, what affects your rate, and how to avoid the mistakes that cost Virginia families thousands.',
    bullets: [
      'Term, Whole, IUL, Final Expense — every type explained',
      'Real Virginia rate tables by age, health, coverage',
      'Independent agent vs. going direct',
      'Medical exam vs. no-exam policies',
      'The conversion option most agents don\'t mention',
    ],
  },
  {
    slug: 'wealth-architecture-chapter',
    title: 'The Wealth Architecture',
    subtitle: 'Chapter 1 + Full 12-Chapter Outline (Free Preview)',
    audience: 'DevOps pros, executives, technical readers',
    audienceIcon: 'Sparkles',
    pages: '35-page PDF preview',
    pdfUrl: '/pdfs/wealth-architecture-chapter1.pdf',
    color: 'navy',
    description:
      'From an AWS DevOps Engineer and Licensed Insurance Agent: a technical, authoritative guide to using IUL as a wealth-building system. Read Chapter 1 "The Mythology of the 401(k)" plus the full 12-chapter roadmap — free.',
    bullets: [
      'DevOps diagnostics of the 401(k) — 11 failure points',
      'Annual Point-to-Point strategy deep dive',
      '8-year side-by-side: 401(k) vs IUL through crashes',
      'David McKnight tax-free framework',
      'Complete 12-chapter book outline included',
    ],
  },
];
