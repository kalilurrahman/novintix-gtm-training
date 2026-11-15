import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'
import InsightsFilter from '@/components/sections/InsightsFilter'
import NewsletterSignup from '@/components/sections/NewsletterSignup'
import { ArrowRight, BookOpen, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Lifecycle Brief — Regulatory Watch & MedTech Insights | NovintiX',
  description:
    'Regulatory intelligence, practical guidance, and compliance analysis covering FDA QMSR, EU MDR, IEC 62304, and digital quality engineering.',
}

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <SectionWrapper variant="dark" className="pt-28 pb-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-[#00B8A9]/10 text-[#00B8A9] border border-[#00B8A9]/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>THE LIFECYCLE BRIEF</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Regulatory intelligence. Practical guidance. No noise.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Direct, practitioner-authored analysis on FDA QMSR, EU MDR Annex XIV, 21 CFR Part 11,
            and software V&amp;V evidence. Built for regulatory directors and QA leaders who make decisions.
          </p>
        </div>
      </SectionWrapper>

      {/* Publications Grid & Filter (Light) */}
      <SectionWrapper variant="light" className="py-20">
        <InsightsFilter />
      </SectionWrapper>

      {/* Newsletter Section (Paper) */}
      <SectionWrapper variant="paper" className="py-20 border-y border-[#E8EDF2]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00B8A9]/10 text-[#00B8A9] mx-auto">
            <Mail className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-display text-[#0A1B2E]">
              Get The Lifecycle Brief in your inbox
            </h2>
            <p className="text-sm text-[#6B7A8C] max-w-xl mx-auto">
              Bi-weekly regulatory alerts, technical checklists, and audit defense strategies
              curated by senior MedTech lifecycle practitioners. Zero marketing fluff.
            </p>
          </div>

          <div className="pt-2">
            <NewsletterSignup />
          </div>

          <p className="text-[11px] text-[#6B7A8C]">
            Delivered every second Tuesday. One-click unsubscribe anytime. We respect your inbox privacy.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA Section (Dark) */}
      <SectionWrapper variant="dark" className="py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Need regulatory guidance now?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Facing an imminent notified body deadline or FDA audit? Our regulatory gateway teams in
            Exton and Dublin are available for rapid technical triage.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="lg">
              <span>Schedule a Regulatory Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
