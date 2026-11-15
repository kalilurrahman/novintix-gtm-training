import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'
import {
  ShieldCheck,
  Building2,
  Globe2,
  Users2,
  Calendar,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About NovintiX — The MedTech Lifecycle Partner',
  description:
    'Founded in 2023 by MedTech veterans to eliminate fragmentation across engineering, quality, clinical affairs, and regulatory pathways.',
}

const STATS = [
  { value: '150+', label: 'Years Combined Leadership', note: 'Executive experience in medical devices' },
  { value: '100+', label: 'Specialists & Engineers', note: 'Quality, regulatory, clinical & software' },
  { value: '3', label: 'Global Delivery Hubs', note: 'Exton (US), Dublin (EU), Coimbatore (APAC)' },
  { value: '2023', label: 'Year Founded', note: 'Architected from scratch for modern standards' },
]

const HUBS = [
  {
    flag: '🇺🇸',
    city: 'Exton, PA',
    country: 'United States',
    role: 'US HQ & FDA Gateway',
    focus:
      'Client engagement, executive governance, FDA 510(k)/PMA submission strategy, and FDA QMSR transition leadership.',
    highlights: ['FDA pre-submission meetings', '510(k) & De Novo submissions', 'QMSR QMS remediation'],
  },
  {
    flag: '🇮🇪',
    city: 'Dublin',
    country: 'Ireland',
    role: 'EU MDR & Market Access Gateway',
    focus:
      'European regulatory affairs, Notified Body interface, clinical evaluations (CER), and PMCF study frameworks.',
    highlights: ['EU MDR 2017/745 technical files', 'SSCP & PMCF authoring', 'Notified body audit defense'],
  },
  {
    flag: '🇮🇳',
    city: 'Coimbatore',
    country: 'India',
    role: 'APAC Engineering & Validation Center',
    focus:
      '60+ dedicated validation engineers and data architects executing high-throughput CSV/CSA, test automation, and ProofX development.',
    highlights: ['GAMP5 computerized systems validation', 'IEC 62304 automated test execution', 'ERP & UDI data pipeline migrations'],
  },
]

const ACCREDITATIONS = [
  {
    code: 'ISO 13485:2016',
    title: 'Medical Devices Quality Management Systems',
    desc: 'Expertise in establishing, auditing, and upgrading comprehensive medical device QMS frameworks.',
  },
  {
    code: '21 CFR Part 820 & QMSR',
    title: 'FDA Quality System Regulation',
    desc: 'Deep operational fluency with FDA inspectional criteria, QSIT methodology, and 2026 QMSR alignment.',
  },
  {
    code: 'EU MDR 2017/745',
    title: 'European Medical Device Regulation',
    desc: 'Rigorous technical documentation, clinical data appraisal, and vigilance workflows aligned with MDCG guidance.',
  },
  {
    code: 'IEC 62304 / ISO 14971',
    title: 'Software Lifecycle & Risk Management',
    desc: 'Standardized lifecycle processes for SaMD and SiMD, bidirectional traceability, and risk control files.',
  },
]

const PRACTITIONERS = [
  {
    name: 'Dr. Sarah Chen, Ph.D.',
    role: 'VP, Regulatory Strategy & Clinical Affairs',
    hub: 'Exton, PA',
    bio: 'Former FDA regulatory reviewer with 18+ years leading Class II/III cardiovascular and orthopedic pre-market submissions, pre-sub consultations, and clinical evaluation strategies.',
    tags: ['FDA 510(k) / PMA', 'De Novo Pathways', 'Clinical Evaluation Plans'],
  },
  {
    name: 'James O’Brien, Eur Ing',
    role: 'Head of European Regulatory Affairs & Quality',
    hub: 'Dublin, Ireland',
    bio: '20+ years leading EU medical device compliance, having guided 50+ notified body technical file submissions across BSI, TÜV SÜD, and DEKRA with zero major non-conformities.',
    tags: ['EU MDR Annex II/III', 'PMCF Strategy', 'MDCG Guidance'],
  },
  {
    name: 'Priya Nair, M.Tech',
    role: 'Director of Digital Systems & Validation Engineering',
    hub: 'Coimbatore, India',
    bio: 'Directs the 60+ member engineering center in Coimbatore. Specialist in GAMP5 computerized systems validation, 21 CFR Part 11 electronic records, and automated test pipelines.',
    tags: ['GAMP5 CSV / CSA', 'IEC 62304 Automated V&V', 'Cloud Data Integrity'],
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <SectionWrapper variant="dark" className="pt-28 pb-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-[#00B8A9]/10 text-[#00B8A9] border border-[#00B8A9]/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>ABOUT NOVINTIX</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Built by MedTech Veterans, for MedTech Leaders
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We saw firsthand how siloed vendors, fragmented handoffs, and obsolete consulting models
            derail life-saving medical devices. NovintiX was created to be the unified partner across
            the entire lifecycle.
          </p>
        </div>
      </SectionWrapper>

      {/* Story Section (Light) */}
      <SectionWrapper variant="light" className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
              The Fragmentation Problem
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1B2E] font-display leading-tight">
              Founded in 2023 to bridge the gap between regulatory strategy and engineering execution.
            </h2>

            <div className="space-y-4 text-base text-[#6B7A8C] leading-relaxed">
              <p>
                In the traditional MedTech ecosystem, bringing a medical device or regulated software to
                market requires coordinating an exhausting web of disconnected partners: mechanical design
                firms that don’t understand FDA Design History Files, regulatory consultancies that deliver
                high-level advice but refuse to write technical protocols, and staffing agencies with no
                domain accountability.
              </p>
              <p>
                Every hand-off is a risk of misinterpretation, audit vulnerability, and costly timeline slippage.
              </p>
              <p>
                NovintiX was built from day one to eliminate that friction. We combine regulatory strategists,
                clinical affairs authors, quality system architects, and software validation engineers into a
                single, synchronized lifecycle team. When we build, we document for the auditor; when we advise,
                we roll up our sleeves to author the technical dossier.
              </p>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#F7F9FB] rounded-xl border border-[#E8EDF2] p-6 text-center space-y-2 hover:border-[#00B8A9]/40 transition-colors"
              >
                <div className="text-4xl font-bold font-display text-[#00B8A9]">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#0A1B2E]">
                  {stat.label}
                </div>
                <div className="text-xs text-[#6B7A8C]">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Mission Section (Paper) */}
      <SectionWrapper variant="paper" className="py-20 border-y border-[#E8EDF2]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR MISSION</span>
          </div>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#0A1B2E] leading-snug">
            &ldquo;To be the most trusted MedTech lifecycle partner — eliminating fragmentation so
            medical innovations reach patients faster and safer.&rdquo;
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="bg-white p-6 rounded-xl border border-[#E8EDF2] space-y-2 shadow-2xs">
              <h3 className="font-display font-bold text-base text-[#0A1B2E]">
                1. Patient Safety First
              </h3>
              <p className="text-xs text-[#6B7A8C] leading-relaxed">
                Speed matters only when safety and compliance are uncompromised. Every protocol we write
                is defensively engineered for global audit scrutiny.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8EDF2] space-y-2 shadow-2xs">
              <h3 className="font-display font-bold text-base text-[#0A1B2E]">
                2. Technical Ownership
              </h3>
              <p className="text-xs text-[#6B7A8C] leading-relaxed">
                We are practitioners, not slide makers. We deliver executed V&amp;V reports, validated code,
                and submission-ready dossiers that we stand behind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8EDF2] space-y-2 shadow-2xs">
              <h3 className="font-display font-bold text-base text-[#0A1B2E]">
                3. Global Continuity
              </h3>
              <p className="text-xs text-[#6B7A8C] leading-relaxed">
                With synchronized teams in the US, Europe, and APAC, our delivery model operates around
                the clock with zero geographical handoff gaps.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3 Hubs Section (Light) */}
      <SectionWrapper variant="light" className="py-20">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
              Global Operating Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1B2E] font-display">
              Three Strategic Hubs. One Integrated Workflow.
            </h2>
            <p className="text-base text-[#6B7A8C]">
              Strategically positioned across primary regulatory gateways and high-capacity engineering
              centers to deliver round-the-clock lifecycle execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E8EDF2] p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{hub.flag}</div>
                  <h3 className="font-display font-bold text-2xl text-[#0A1B2E]">
                    {hub.city}
                  </h3>
                  <div className="text-xs font-mono text-[#00B8A9] font-semibold uppercase tracking-wider mb-1">
                    {hub.role}
                  </div>
                  <div className="text-xs text-[#6B7A8C] mb-4">
                    {hub.country}
                  </div>

                  <p className="text-sm text-[#6B7A8C] leading-relaxed mb-6">
                    {hub.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8EDF2]">
                  <div className="text-xs font-semibold text-[#0A1B2E] uppercase tracking-wider mb-2">
                    Key Capabilities:
                  </div>
                  <ul className="space-y-1.5">
                    {hub.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#6B7A8C]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00B8A9] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Quality & Accreditations Section (Paper) */}
      <SectionWrapper variant="paper" className="py-20 border-y border-[#E8EDF2]">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
              Standards & Regulatory Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1B2E] font-display">
              Honest Quality Built on Global MedTech Standards
            </h2>
            <div className="bg-white border-l-4 border-[#00B8A9] p-4 rounded-r-lg text-sm text-[#6B7A8C] leading-relaxed shadow-2xs">
              <strong className="text-[#0A1B2E]">A note on our accreditations:</strong> As an advisory
              and engineering services provider, NovintiX does not act as a medical device legal manufacturer,
              meaning we do not hold manufacturer CE certificates. However, our internal quality systems,
              operating protocols, and engineering teams strictly comply with and execute directly against the
              governing global standards.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCREDITATIONS.map((acc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E8EDF2] p-6 shadow-2xs hover:border-[#00B8A9]/40 transition-colors space-y-3"
              >
                <div className="inline-block font-mono text-xs font-bold text-[#00B8A9] bg-[#00B8A9]/10 px-2.5 py-1 rounded">
                  {acc.code}
                </div>
                <h3 className="font-display font-bold text-base text-[#0A1B2E]">
                  {acc.title}
                </h3>
                <p className="text-xs text-[#6B7A8C] leading-relaxed">
                  {acc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Practitioners Section (Light) */}
      <SectionWrapper variant="light" className="py-20">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
              Leadership & Practice Directors
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1B2E] font-display">
              The team behind the lifecycle
            </h2>
            <p className="text-base text-[#6B7A8C]">
              Experienced MedTech leaders who have defended audits, authored pre-market approvals, and
              built mission-critical medical device software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRACTITIONERS.map((practitioner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E8EDF2] p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#0A1B2E] text-white flex items-center justify-center font-display font-bold text-lg mb-4">
                    {practitioner.name.split(' ')[1]?.[0] || 'N'}
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#0A1B2E]">
                    {practitioner.name}
                  </h3>
                  <div className="text-xs font-medium text-[#00B8A9] mt-0.5">
                    {practitioner.role}
                  </div>
                  <div className="text-xs text-[#6B7A8C] mb-4">
                    {practitioner.hub}
                  </div>

                  <p className="text-sm text-[#6B7A8C] leading-relaxed mb-6">
                    {practitioner.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8EDF2] flex flex-wrap gap-1.5">
                  {practitioner.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-[#0A1B2E] bg-[#F7F9FB] px-2 py-0.5 rounded border border-[#E8EDF2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section (Dark) */}
      <SectionWrapper variant="dark" className="py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Ready to partner with practitioners?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Whether you want to discuss an upcoming submission, join our growing global practice, or
            tour our Coimbatore engineering hub, we invite you to connect.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              <span>Talk to us</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="/careers" variant="ghost" size="lg">
              <span>Join the team</span>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
