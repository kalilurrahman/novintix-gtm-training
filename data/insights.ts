export type Insight = {
  id: string
  title: string
  slug: string
  category: 'Regulatory Watch' | 'Guide' | 'Webinar' | 'Report'
  excerpt: string
  readTime: string
  date: string
  tags: string[]
  featured: boolean
}

export const insights: Insight[] = [
  {
    id: 'insight-001',
    title: 'FDA QMSR 2026: What Every MedTech QA Leader Needs to Know Now',
    slug: 'fda-qmsr-2026-qa-leaders-guide',
    category: 'Regulatory Watch',
    excerpt:
      'With FDA’s Quality Management System Regulation now in effect, medical device manufacturers must bridge the critical gaps between legacy 21 CFR Part 820 and ISO 13485:2016.',
    readTime: '6 min read',
    date: 'February 2026',
    tags: ['FDA QMSR', 'ISO 13485', 'Quality Management', 'Compliance', 'Audits'],
    featured: true,
  },
  {
    id: 'insight-002',
    title: 'EU MDR Annex XIV PMCF Planning: A Practical Checklist',
    slug: 'eu-mdr-annex-xiv-pmcf-planning-checklist',
    category: 'Guide',
    excerpt:
      'A step-by-step framework for establishing defensible Post-Market Clinical Follow-up plans that satisfy Notified Body expectations without unnecessary clinical trial overhead.',
    readTime: '8 min read',
    date: 'January 2026',
    tags: ['EU MDR', 'PMCF', 'Clinical Affairs', 'Annex XIV', 'Notified Body'],
    featured: false,
  },
  {
    id: 'insight-003',
    title: '21 CFR Part 11 for SaMD: Closing the Compliance Gap',
    slug: '21-cfr-part-11-samd-compliance-gap',
    category: 'Regulatory Watch',
    excerpt:
      'Modern cloud architectures and CI/CD pipelines challenge traditional electronic records and signature controls. Here is how to achieve strict Part 11 compliance in agile SaMD environments.',
    readTime: '5 min read',
    date: 'December 2025',
    tags: ['21 CFR Part 11', 'SaMD', 'Digital Health', 'Electronic Records', 'Cloud Validation'],
    featured: false,
  },
  {
    id: 'insight-004',
    title: 'The MedTech Digital Quality Index 2026',
    slug: 'medtech-digital-quality-index-2026',
    category: 'Report',
    excerpt:
      'Benchmarking data from 120+ global medical device manufacturers on digital V&V adoption, regulatory submission lead times, and post-market surveillance automation.',
    readTime: '12 min read',
    date: 'February 2026',
    tags: ['Industry Report', 'Digital Quality', 'Benchmarking', 'V&V', 'Automation'],
    featured: true,
  },
  {
    id: 'insight-005',
    title: 'Design Controls Under FDA QMSR: 5 Common Gaps We See',
    slug: 'design-controls-under-fda-qmsr-5-common-gaps',
    category: 'Guide',
    excerpt:
      'An analysis of common design control vulnerabilities observed during mock audits, from design transfer ambiguities to disconnected risk management files.',
    readTime: '7 min read',
    date: 'November 2025',
    tags: ['Design Controls', 'FDA QMSR', 'ISO 14971', 'Risk Management', 'DHF'],
    featured: false,
  },
  {
    id: 'insight-006',
    title: 'IEC 62304 V&V Evidence: What Auditors Actually Look For',
    slug: 'iec-62304-vv-evidence-auditors-look-for',
    category: 'Regulatory Watch',
    excerpt:
      'A practical breakdown of software lifecycle documentation expectations, traceability depth, and automated verification artefacts required by FDA and EU notified bodies.',
    readTime: '9 min read',
    date: 'October 2025',
    tags: ['IEC 62304', 'V&V', 'Software Lifecycle', 'ProofX', 'Regulatory Audit'],
    featured: false,
  },
]
