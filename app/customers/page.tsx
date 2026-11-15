import type { Metadata } from 'next'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'
import CustomersFilter from '@/components/sections/CustomersFilter'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Stories | NovintiX',
  description:
    'Explore real-world MedTech outcomes across FDA 510(k) submissions, EU MDR technical file remediation, automated V&V, and GAMP5 validation.',
}

const PARTNER_LOGOS = [
  'GLOBAL MEDTECH OEM',
  'BIOLABS DYNAMICS',
  'NEUROVANCE HEALTH',
  'ACCURATE DIAGNOSTICS',
  'CELLEXIS BIOMEDICAL',
  'SYNAPSE SaMD',
]

export default function CustomersPage() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <SectionWrapper variant="dark" className="pt-28 pb-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-[#00B8A9]/10 text-[#00B8A9] border border-[#00B8A9]/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PROVEN MEDTECH IMPACT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            MedTech Results That Speak for Themselves
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From accelerated FDA 510(k) submissions to seamless EU MDR transitions and automated
            software validation, see how leading medical device leaders eliminate fragmentation and
            audit risk.
          </p>
        </div>
      </SectionWrapper>

      {/* Case Studies & Filter Section (Light) */}
      <SectionWrapper variant="light" className="py-20">
        <CustomersFilter />
      </SectionWrapper>

      {/* Trust Section (Paper) */}
      <SectionWrapper variant="paper" className="py-16 border-y border-[#E8EDF2]">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#6B7A8C] font-semibold">
              Industry Trust & Client Portfolio
            </h2>
            <p className="font-display font-bold text-2xl text-[#0A1B2E]">
              Partnering with the world&apos;s leading MedTech organisations
            </p>
          </div>

          {/* Logo Text Strip */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center pt-4">
            {PARTNER_LOGOS.map((logo) => (
              <div
                key={logo}
                className="bg-white border border-[#E8EDF2] rounded-lg py-4 px-3 text-center shadow-2xs hover:border-[#00B8A9]/30 transition-colors"
              >
                <span className="font-display font-bold text-xs tracking-wider text-[#6B7A8C]">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section (Dark) */}
      <SectionWrapper variant="dark" className="py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Tell us your challenge
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Whether preparing for a critical FDA review, untangling complex EU MDR documentation,
            or scaling automated V&amp;V evidence, our senior practitioners are ready to assist.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="lg">
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
