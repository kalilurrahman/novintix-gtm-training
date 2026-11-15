'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react'

export type InsightItem = {
  id: string
  title: string
  category: 'Regulatory Watch' | 'Guide' | 'Webinar' | 'Report'
  excerpt: string
  readTime: string
  date: string
  featured?: boolean
}

export const INSIGHTS: InsightItem[] = [
  {
    id: 'in-1',
    title: 'FDA QMSR 2026: What Every MedTech QA Leader Needs to Know Now',
    category: 'Regulatory Watch',
    excerpt:
      'With FDA’s Quality Management System Regulation now in effect, medical device manufacturers must bridge the critical gaps between legacy 21 CFR Part 820 and ISO 13485:2016.',
    readTime: '8 min read',
    date: 'February 2026',
    featured: true,
  },
  {
    id: 'in-2',
    title: 'EU MDR Annex XIV PMCF Planning: A Practical Checklist',
    category: 'Guide',
    excerpt:
      'A step-by-step framework for establishing defensible Post-Market Clinical Follow-up plans that satisfy Notified Body expectations without unnecessary clinical trial overhead.',
    readTime: '12 min read',
    date: 'January 2026',
    featured: false,
  },
  {
    id: 'in-3',
    title: '21 CFR Part 11 for SaMD: Closing the Compliance Gap',
    category: 'Regulatory Watch',
    excerpt:
      'Modern cloud architectures and CI/CD pipelines challenge traditional electronic records and signature controls. Here is how to achieve strict Part 11 compliance in agile SaMD environments.',
    readTime: '6 min read',
    date: 'December 2025',
    featured: false,
  },
  {
    id: 'in-4',
    title: 'The MedTech Digital Quality Index 2026',
    category: 'Report',
    excerpt:
      'Benchmarking data from 120+ global medical device manufacturers on digital V&V adoption, regulatory submission lead times, and post-market surveillance automation.',
    readTime: '20 min read',
    date: 'February 2026',
    featured: true,
  },
  {
    id: 'in-5',
    title: 'Design Controls Under FDA QMSR: 5 Common Gaps We See',
    category: 'Guide',
    excerpt:
      'An analysis of common design control vulnerabilities observed during mock audits, from design transfer ambiguities to disconnected risk management files.',
    readTime: '7 min read',
    date: 'November 2025',
    featured: false,
  },
  {
    id: 'in-6',
    title: 'IEC 62304 V&V Evidence: What Auditors Actually Look For',
    category: 'Regulatory Watch',
    excerpt:
      'A practical breakdown of software lifecycle documentation expectations, traceability depth, and automated verification artefacts required by FDA and EU notified bodies.',
    readTime: '9 min read',
    date: 'October 2025',
    featured: false,
  },
]

const CATEGORIES = ['All', 'Regulatory Watch', 'Guide', 'Webinar', 'Report'] as const

export default function InsightsFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredInsights = useMemo(() => {
    if (selectedCategory === 'All') return INSIGHTS
    return INSIGHTS.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="space-y-8">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8EDF2] pb-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  active
                    ? 'bg-[#00B8A9] text-white shadow-xs'
                    : 'bg-[#F7F9FB] text-[#0A1B2E] hover:bg-[#E8EDF2] border border-[#E8EDF2]'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="text-xs text-[#6B7A8C]">
          Showing <strong className="text-[#0A1B2E]">{filteredInsights.length}</strong> publications
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInsights.map((item) => {
          const isFeatured = item.featured && selectedCategory === 'All'

          return (
            <article
              key={item.id}
              className={`bg-white rounded-xl border border-[#E8EDF2] p-6 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group ${
                isFeatured ? 'md:col-span-2 bg-gradient-to-br from-white to-[#F7F9FB]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-[11px] font-semibold text-[#00B8A9] bg-[#00B8A9]/10 border border-[#00B8A9]/20 px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#FFB454] bg-[#FFB454]/10 px-2 py-0.5 rounded-full border border-[#FFB454]/20">
                      <Sparkles className="w-3 h-3" /> Featured Analysis
                    </span>
                  )}
                </div>

                <h3
                  className={`font-display font-bold text-[#0A1B2E] group-hover:text-[#00B8A9] transition-colors leading-snug mb-3 ${
                    isFeatured ? 'text-xl sm:text-2xl' : 'text-lg'
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-sm text-[#6B7A8C] leading-relaxed mb-6">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8EDF2] flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-[11px] text-[#6B7A8C]">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {item.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {item.date}
                  </span>
                </div>

                <Link
                  href={`/contact?subject=${encodeURIComponent('Discussion about article: ' + item.title)}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#00B8A9] hover:text-[#0A1B2E] transition-colors"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
