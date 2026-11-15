'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Filter } from 'lucide-react'

export type CaseStudyItem = {
  id: string
  title: string
  client: string
  industry: string
  metric: string
  metricLabel: string
  challengeSnippet: string
  services: string[]
  featured?: boolean
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'cs-1',
    title: '60% Faster 510(k) Submission',
    client: 'Global OEM',
    industry: 'Medical Devices',
    metric: '60%',
    metricLabel: 'Faster 510(k) Submission',
    challengeSnippet:
      'A global Class II device OEM faced an 18+ month timeline due to DHF gaps and missing V&V data. We rebuilt predicate analysis, closed verification gaps, and assembled the complete submission.',
    services: ['Quality & Regulatory', 'ProofX'],
    featured: true,
  },
  {
    id: 'cs-2',
    title: 'EU MDR Transition: 18→11 Months',
    client: 'Med Device OEM',
    industry: 'Medical Devices',
    metric: '18→11 Mo',
    metricLabel: 'Compressed Transition Timeline',
    challengeSnippet:
      'A portfolio of 14 legacy MDD-certified devices faced Notified Body application cutoffs under EU Regulation 2023/607. We prioritised technical files and authored complete SSCPs and PMCF plans.',
    services: ['Quality & Regulatory', 'Clinical Affairs'],
    featured: true,
  },
  {
    id: 'cs-3',
    title: 'IEC 62304 V&V in 8 Weeks',
    client: 'SaMD startup',
    industry: 'Digital Health',
    metric: '8 Weeks',
    metricLabel: 'To Complete V&V Evidence Package',
    challengeSnippet:
      'An AI triage decision-support startup lacked regulated software documentation for an FDA De Novo submission. ProofX automated test evidence capture and generated full bidirectional traceability.',
    services: ['Digital & AI', 'ProofX'],
    featured: true,
  },
  {
    id: 'cs-4',
    title: 'Zero FDA Observations on First GMP Inspection',
    client: 'Manufacturer',
    industry: 'Medical Devices',
    metric: '0',
    metricLabel: 'FDA Observations on First Audit',
    challengeSnippet:
      'A contract device manufacturer prepared for initial FDA inspection post-facility expansion. A mock audit identified 23 readiness gaps, leading to a 12-week remediation and zero 483 findings.',
    services: ['Manufacturing'],
  },
  {
    id: 'cs-5',
    title: '400+ UDI Device Records in 6 Weeks',
    client: 'Large OEM',
    industry: 'Medical Devices',
    metric: '400+',
    metricLabel: 'UDI Records Published (GUDID & EUDAMED)',
    challengeSnippet:
      'Harmonised ERP data across 400+ variant product lines and authored submission pipelines for concurrent GUDID and EUDAMED UDI compliance ahead of regulatory enforcement deadlines.',
    services: ['Supply Chain'],
  },
  {
    id: 'cs-6',
    title: 'CER Accepted First Submission',
    client: 'EU startup',
    industry: 'Medical Devices',
    metric: '1st Sub',
    metricLabel: 'CER Accepted Without Major Objections',
    challengeSnippet:
      'After two prior rejections by a European Notified Body, our clinical affairs team restructured the clinical evaluation plan, literature search strategy, and equivalence justification.',
    services: ['Clinical Affairs'],
  },
]

const INDUSTRIES = [
  'All',
  'Medical Devices',
  'Pharmaceuticals',
  'Biotechnology',
  'Diagnostics',
  'Digital Health',
  'Combination Products',
]

const SERVICES = [
  'All',
  'Product Engineering',
  'Supply Chain',
  'Manufacturing',
  'Quality & Regulatory',
  'Clinical Affairs',
  'Digital & AI',
]

export default function CustomersFilter() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedService, setSelectedService] = useState('All')

  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter((cs) => {
      const matchIndustry =
        selectedIndustry === 'All' || cs.industry === selectedIndustry
      const matchService =
        selectedService === 'All' ||
        cs.services.some((s) => s.toLowerCase().includes(selectedService.toLowerCase()))
      return matchIndustry && matchService
    })
  }, [selectedIndustry, selectedService])

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="bg-white border border-[#E8EDF2] rounded-xl p-6 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#0A1B2E]">
          <Filter className="w-4 h-4 text-[#00B8A9]" />
          <span>Filter Case Studies</span>
        </div>

        {/* Industry Filter */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-[#6B7A8C] font-semibold">
            By Industry
          </label>
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((industry) => {
              const active = selectedIndustry === industry
              return (
                <button
                  key={industry}
                  type="button"
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    active
                      ? 'bg-[#00B8A9] text-white shadow-xs'
                      : 'bg-[#F7F9FB] text-[#0A1B2E] hover:bg-[#E8EDF2] border border-[#E8EDF2]'
                  }`}
                >
                  {industry}
                </button>
              )
            })}
          </div>
        </div>

        {/* Service Filter */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-[#6B7A8C] font-semibold">
            By Service
          </label>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((service) => {
              const active = selectedService === service
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    active
                      ? 'bg-[#0A1B2E] text-white shadow-xs'
                      : 'bg-[#F7F9FB] text-[#0A1B2E] hover:bg-[#E8EDF2] border border-[#E8EDF2]'
                  }`}
                >
                  {service}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#6B7A8C]">
        <span>
          Showing <strong className="text-[#0A1B2E]">{filteredStudies.length}</strong> of{' '}
          {CASE_STUDIES.length} case studies
        </span>
        {(selectedIndustry !== 'All' || selectedService !== 'All') && (
          <button
            type="button"
            onClick={() => {
              setSelectedIndustry('All')
              setSelectedService('All')
            }}
            className="text-[#00B8A9] hover:underline font-medium"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredStudies.length === 0 ? (
        <div className="text-center py-16 bg-[#F7F9FB] rounded-xl border border-dashed border-[#E8EDF2]">
          <p className="text-[#0A1B2E] font-medium">No case studies match your active filters.</p>
          <p className="text-sm text-[#6B7A8C] mt-1">Try resetting your industry or service selection.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedIndustry('All')
              setSelectedService('All')
            }}
            className="mt-4 px-4 py-2 bg-[#00B8A9] text-white text-xs font-semibold rounded-lg hover:bg-[#009e91]"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl border border-[#E8EDF2] p-6 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B7A8C] bg-[#F7F9FB] px-2.5 py-1 rounded-md border border-[#E8EDF2]">
                    {item.client} · {item.industry}
                  </span>
                  {item.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#00B8A9] bg-[#00B8A9]/10 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Big Metric */}
                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl font-bold font-display text-[#00B8A9] tracking-tight">
                    {item.metric}
                  </div>
                  <div className="text-xs font-medium text-[#6B7A8C] mt-0.5">
                    {item.metricLabel}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-[#0A1B2E] mb-2 group-hover:text-[#00B8A9] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6B7A8C] leading-relaxed mb-6">
                  {item.challengeSnippet}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-[#E8EDF2]">
                  {item.services.map((svc) => (
                    <span
                      key={svc}
                      className="text-[11px] font-medium text-[#0A1B2E] bg-[#F7F9FB] px-2 py-0.5 rounded border border-[#E8EDF2]"
                    >
                      {svc}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?subject=${encodeURIComponent('Inquiry regarding: ' + item.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00B8A9] hover:text-[#0A1B2E] transition-colors"
                >
                  <span>Read case study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
