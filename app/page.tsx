import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'
import LifecycleThread from '@/components/ui/LifecycleThread'
import ProofXTour from '@/components/sections/ProofXTour'
import NewsletterSignup from '@/components/sections/NewsletterSignup'
import {
  Layers,
  Package,
  Factory,
  Shield,
  Stethoscope,
  Cpu,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Building2,
  FileCheck2,
  Sparkles,
  MapPin,
  Award,
} from 'lucide-react'

const CLIENT_LOGOS = [
  'Johnson & Johnson',
  'Medtronic',
  'Stryker',
  'B. Braun',
  'Dentsply Sirona',
]

const STATS = [
  { value: '150+', label: 'Years Combined Leadership', note: 'MedTech-veteran founded' },
  { value: '100+', label: 'Specialists Worldwide', note: 'Validation, QA, Systems' },
  { value: '3', label: 'Global Hubs', note: 'Exton PA · Dublin · Coimbatore' },
  { value: '5.0/5', label: 'Indeed Rating', note: 'Top practitioner culture' },
]

const SERVICES = [
  {
    slug: 'product-engineering',
    name: 'Product Engineering & Discovery',
    tagline: 'De-risk early architecture, Human Factors, and Design Controls.',
    icon: Layers,
    deliverables: [
      'Design History File (DHF) Architecture',
      'ISO 14971 Risk Management File',
      'Usability & Human Factors Protocols',
    ],
  },
  {
    slug: 'supply-chain',
    name: 'Supply Chain',
    tagline: 'GUDID/EUDAMED UDI compliance and resilient component qualification.',
    icon: Package,
    deliverables: [
      'Multi-jurisdiction UDI Data Packs',
      'Critical Supplier Quality Agreements',
      'Component Traceability & Dual Sourcing',
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'Validated production ramp-up with zero-observation GMP audits.',
    icon: Factory,
    deliverables: [
      'IQ / OQ / PQ Validation Dossiers',
      'Cleanroom & Sterility Assurance Files',
      'Master Validation Plans (MVP)',
    ],
  },
  {
    slug: 'quality-regulatory',
    name: 'Quality & Regulatory Compliance',
    tagline: 'FDA QMSR, 510(k), and EU MDR/IVDR cleared dossiers.',
    icon: Shield,
    deliverables: [
      'FDA QMSR / 21 CFR Part 820 Transition',
      'EU MDR Technical Documentation',
      'Rapid Audit Readiness & Remediation',
    ],
  },
  {
    slug: 'clinical-affairs',
    name: 'Clinical Affairs',
    tagline: 'Defensible Clinical Evaluation Reports (CER) and post-market PMCF.',
    icon: Stethoscope,
    deliverables: [
      'MDR Annex XIV Clinical Evaluation (CER)',
      'PMCF Plan & Survey Protocols',
      'State-of-the-Art (SOTA) Reviews',
    ],
  },
  {
    slug: 'digital-ai',
    name: 'Digital & AI Hub',
    tagline: 'SaMD IEC 62304 verification and automated AI-driven V&V test proof.',
    icon: Cpu,
    deliverables: [
      'ProofX Automated Test & RTM Suite',
      'IEC 62304 Class A/B/C Software Files',
      '21 CFR Part 11 Electronic Records Pack',
    ],
  },
]

const INDUSTRIES = [
  {
    title: 'Medical Devices',
    desc: 'Class I, IIa/b, and III hardware and software systems under FDA & EU MDR.',
    span: 'col-span-1 md:col-span-2',
    highlight: 'Class II & III Specialty',
  },
  {
    title: 'Pharmaceuticals',
    desc: 'GxP computer systems validation (GAMP5) and regulatory data integrity.',
    span: 'col-span-1',
  },
  {
    title: 'Biotechnology',
    desc: 'Analytical equipment qualification and process validation for scale.',
    span: 'col-span-1',
  },
  {
    title: 'Diagnostics (IVDR)',
    desc: 'Assay validation, instrument software V&V, and IVDR performance files.',
    span: 'col-span-1',
  },
  {
    title: 'Digital Health & SaMD',
    desc: 'IEC 62304, cloud architectures, cybersecurity, and AI/ML model assurance.',
    span: 'col-span-1 md:col-span-2',
    highlight: 'AI/ML & SaMD Core',
  },
  {
    title: 'Combination Products',
    desc: 'Drug-delivery systems navigating dual 21 CFR 820 / 210 / 211 standards.',
    span: 'col-span-1',
  },
]

const PRACTITIONERS = [
  {
    name: 'Dr. Sarah Chen',
    role: 'VP Quality & Regulatory Systems',
    experience: '20+ yrs FDA submissions (510k, PMA), ex-Johnson & Johnson QA Lead',
    quote:
      'We treat regulatory dossiers as engineering deliverables — rigorous, reproducible, and verifiable.',
  },
  {
    name: 'James O’Brien',
    role: 'Director EU Regulatory Affairs',
    experience: '18+ yrs EU MDR/IVDR Transitions, Dublin Regulatory Gateway',
    quote:
      'Navigating Notified Bodies requires deep technical substantiation, not generic template checklists.',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Digital Validation & ProofX',
    experience: '15+ yrs SaMD, IEC 62304 specialist, ex-Medtronic R&D Hub',
    quote:
      'ProofX turns tedious months of manual test tracing into audit-ready automated proof in weeks.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — Hero (Dark: #0A1B2E) */}
      <section className="bg-[#0A1B2E] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-[#2BD9C8] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#00B8A9] animate-pulse" />
            The MedTech Lifecycle Partner
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08] max-w-5xl mx-auto">
            One partner for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BD9C8] via-[#00B8A9] to-emerald-400">
              entire MedTech lifecycle.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            From concept to compliance to scale. Eliminate vendor hand-offs, disjointed test
            evidence, and regulatory surprises with one connected team of specialists.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button variant="primary" size="lg" href="/contact">
              Book a 30-minute consult
            </Button>
            <Button variant="ghost" size="lg" href="/services/product-engineering">
              Explore the lifecycle
            </Button>
          </div>

          {/* Signature Motif: Lifecycle Thread SVG */}
          <div className="pt-10">
            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest text-center mb-3">
                The NovintiX Connected Lifecycle Thread
              </div>
              <LifecycleThread variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Client Logo Strip (Light: White) */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E8EDF2]">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <p className="text-xs font-mono text-[#6B7A8C] uppercase tracking-wider">
            Trusted by leaders across the MedTech & Pharma Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {CLIENT_LOGOS.map((logo) => (
              <span
                key={logo}
                className="font-display font-semibold text-lg sm:text-xl text-[#0A1B2E]/60 hover:text-[#0A1B2E] transition-colors tracking-tight"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Stat Bar (Paper: #F7F9FB) */}
      <section className="bg-[#F7F9FB] py-14 px-4 sm:px-6 lg:px-8 border-b border-[#E8EDF2]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="font-display font-bold text-3xl sm:text-5xl text-[#00B8A9]">
                {stat.value}
              </div>
              <div className="font-semibold text-sm sm:text-base text-[#0A1B2E]">
                {stat.label}
              </div>
              <div className="text-xs text-[#6B7A8C]">{stat.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — "The Hand-Off Economy is Broken" (Light: White) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8EDF2]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-[#FFB454] uppercase tracking-wider font-semibold">
              The Fundamental Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0A1B2E]">
              The Hand-Off Economy is Broken.
            </h2>
            <p className="text-[#6B7A8C] text-base sm:text-lg">
              Traditional device commercialization bounces across 6 disconnected vendors. Each hand-off
              leaks context, delays submissions, and invites audit findings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* The Fragmented Hand-Off (Without NovintiX) */}
            <div className="p-8 rounded-2xl border-2 border-red-200/80 bg-red-50/20 space-y-6">
              <div className="flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <h3 className="font-display font-bold text-xl text-[#0A1B2E]">
                  Without NovintiX: 6 Disconnected Silos
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Design Agency → CRO', issue: 'Context lost on clinical intent' },
                  { title: 'CRO → QA Consultancy', issue: 'Incompatible test documentation' },
                  { title: 'QA → Regulatory Writer', issue: 'Traceability gaps discovered late' },
                  { title: 'Regulatory → Mfg Partner', issue: 'Unvalidated process changes' },
                  { title: 'Mfg → Software House', issue: 'Disconnected IEC 62304 files' },
                ].map((silo, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-lg border border-red-100 flex items-center justify-between text-xs sm:text-sm"
                  >
                    <span className="font-medium text-[#0A1B2E]">{silo.title}</span>
                    <span className="text-red-600 font-mono text-xs">{silo.issue}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-lg bg-red-100/50 text-red-800 text-xs font-mono text-center">
                Result: 9–14 months in remediation delays & duplicate billing
              </div>
            </div>

            {/* The Connected Lifecycle Thread (With NovintiX) */}
            <div className="p-8 rounded-2xl border-2 border-[#00B8A9] bg-[#00B8A9]/5 space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-6 h-6 text-[#00B8A9] flex-shrink-0" />
                  <h3 className="font-display font-bold text-xl text-[#0A1B2E]">
                    With NovintiX: One Connected Thread
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    { phase: 'Concept & Discovery', benefit: 'DHF architecture built for audit readiness from Day 1' },
                    { phase: 'Design Controls', benefit: 'ISO 14971 risk & usability unified with engineering' },
                    { phase: 'Manufacturing', benefit: 'IQ/OQ/PQ executed with regulatory submission in mind' },
                    { phase: 'Compliance & Submissions', benefit: 'Defensible 510(k), QMSR & EU MDR dossiers' },
                    { phase: 'Digital & AI (ProofX)', benefit: 'Automated test proof & live traceability matrix' },
                  ].map((thread, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-lg border border-[#00B8A9]/30 flex items-center justify-between text-xs sm:text-sm shadow-sm"
                    >
                      <span className="font-semibold text-[#0A1B2E]">{thread.phase}</span>
                      <span className="text-[#00B8A9] text-xs font-medium">{thread.benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#00B8A9]/20 text-[#0A1B2E] text-xs font-mono text-center font-semibold">
                Result: Zero hand-offs · Single system of record · 60% faster clearance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — 6 Lifecycle Service Cards (Paper: #F7F9FB) */}
      <section className="bg-[#F7F9FB] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8EDF2]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-[#00B8A9] uppercase tracking-wider font-semibold">
              End-to-End Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0A1B2E]">
              The Complete Lifecycle. Under One Roof.
            </h2>
            <p className="text-[#6B7A8C] text-base sm:text-lg">
              Six synchronized service pillars delivering verified, audit-ready deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.slug}
                  className="group p-6 rounded-2xl bg-white border border-[#E8EDF2] hover:border-[#00B8A9] transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00B8A9]/10 text-[#00B8A9] flex items-center justify-center group-hover:bg-[#00B8A9] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#0A1B2E] group-hover:text-[#00B8A9] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-[#6B7A8C] leading-relaxed">
                      {service.tagline}
                    </p>

                    <div className="pt-2 border-t border-[#E8EDF2] space-y-2">
                      <div className="text-xs font-mono text-[#6B7A8C] uppercase tracking-wider">
                        Signature Deliverables:
                      </div>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((d, i) => (
                          <li
                            key={i}
                            className="text-xs text-[#0A1B2E] flex items-start gap-2"
                          >
                            <span className="text-[#00B8A9] font-bold">✓</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00B8A9] hover:underline"
                    >
                      <span>Explore {service.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 — ProofX & Digital Accelerators Showcase (Dark: #0A1B2E) */}
      <section className="bg-[#0A1B2E] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B8A9]/20 text-[#2BD9C8] font-mono text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              ProofX AI-Native Platform
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
              AI-Native V&V. Audit-Ready Evidence. Every Time.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              ProofX is NovintiX’s proprietary system of record for verification and validation test
              proof. Generates test cases, mines coverage gaps, maintains live traceability, and exports
              defensible dossiers.
            </p>
          </div>

          {/* Interactive 5-Step Tour Component */}
          <div className="p-4 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <ProofXTour />
          </div>

          {/* Integration Strip */}
          <div className="text-center space-y-3 pt-4">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              Seamlessly integrates with your existing engineering and QMS stack
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm font-mono text-gray-300">
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Jama Software</span>
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Siemens Polarion</span>
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Azure DevOps</span>
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Greenlight Guru</span>
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10">MasterControl</span>
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Veeva Vault</span>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button variant="primary" size="lg" href="/proofx">
              Explore the full ProofX Product Hub & Pricing →
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Featured Case Study (Light: White) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8EDF2]">
        <div className="max-w-6xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0A1B2E] to-[#122840] text-white flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B8A9]/20 text-[#2BD9C8] font-mono text-xs uppercase">
                Featured Case Study
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Global OEM cuts 510(k) submission timeline by 60%.
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Facing an impending FDA QMSR transition and complex multi-subsystem SaMD architecture,
                a tier-1 MedTech manufacturer deployed NovintiX engineering pods alongside ProofX auto-traceability.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#2BD9C8]">
                <span className="px-2.5 py-1 rounded bg-white/10">FDA 510(k)</span>
                <span className="px-2.5 py-1 rounded bg-white/10">IEC 62304</span>
                <span className="px-2.5 py-1 rounded bg-white/10">ProofX Automated V&V</span>
              </div>
              <div>
                <Button variant="primary" size="md" href="/customers">
                  Read all customer case studies →
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3 min-w-[240px]">
              <div className="text-5xl sm:text-6xl font-bold font-display text-[#2BD9C8]">
                60%
              </div>
              <div className="text-sm font-semibold text-white">
                Faster Submission Velocity
              </div>
              <div className="text-xs text-gray-400">
                Zero AI/Software Traceability Objections from FDA review team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — 6 Industries Bento (Paper: #F7F9FB) */}
      <section className="bg-[#F7F9FB] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8EDF2]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-[#00B8A9] uppercase tracking-wider font-semibold">
              Sectors We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0A1B2E]">
              Built for Every Corner of MedTech.
            </h2>
            <p className="text-[#6B7A8C] text-base sm:text-lg">
              From early-stage medical device innovators to global multinational GCC engineering hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.title}
                className={`p-6 rounded-2xl bg-white border border-[#E8EDF2] hover:border-[#00B8A9] transition-all hover:shadow-md ${ind.span}`}
              >
                {ind.highlight && (
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#00B8A9]/10 text-[#00B8A9] text-[10px] font-mono uppercase font-bold mb-3">
                    {ind.highlight}
                  </div>
                )}
                <h3 className="font-display font-bold text-xl text-[#0A1B2E] mb-2">
                  {ind.title}
                </h3>
                <p className="text-sm text-[#6B7A8C] leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — Senior Practitioners Strip (Light: White) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8EDF2]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-[#00B8A9] uppercase tracking-wider font-semibold">
              Practitioners, Not Slide Makers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0A1B2E]">
              150+ Years of Combined MedTech Leadership.
            </h2>
            <p className="text-[#6B7A8C] text-base sm:text-lg">
              Our specialists hold patents, have cleared dozens of 510(k) and CE submissions, and write
              defensible production software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRACTITIONERS.map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-2xl bg-[#F7F9FB] border border-[#E8EDF2] space-y-4"
              >
                <div className="space-y-1">
                  <div className="font-display font-bold text-lg text-[#0A1B2E]">
                    {p.name}
                  </div>
                  <div className="text-xs font-semibold text-[#00B8A9]">{p.role}</div>
                  <div className="text-xs text-[#6B7A8C]">{p.experience}</div>
                </div>
                <p className="text-sm text-[#0A1B2E] italic border-l-2 border-[#00B8A9] pl-3 leading-relaxed">
                  &ldquo;{p.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — Insights Teaser & Newsletter (Paper: #F7F9FB) */}
      <section className="bg-[#F7F9FB] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8EDF2]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#00B8A9] uppercase tracking-wider font-semibold">
                The Lifecycle Brief
              </span>
              <h2 className="text-3xl font-bold font-display text-[#0A1B2E]">
                Regulatory Watch & Executive Insights.
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00B8A9] hover:underline"
            >
              <span>View all articles & guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'FDA QMSR 2026: What Every MedTech QA Leader Needs to Know Now',
                cat: 'Regulatory Watch',
                read: '8 min read',
                href: '/insights',
              },
              {
                title: 'EU MDR Annex XIV PMCF Planning: A Practical Checklist',
                cat: 'Guide',
                read: '12 min read',
                href: '/insights',
              },
              {
                title: '21 CFR Part 11 for SaMD: Closing the Compliance Gap',
                cat: 'Regulatory Watch',
                read: '6 min read',
                href: '/insights',
              },
            ].map((insight, idx) => (
              <Link
                key={idx}
                href={insight.href}
                className="p-6 rounded-2xl bg-white border border-[#E8EDF2] hover:border-[#00B8A9] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#00B8A9] font-semibold">{insight.cat}</span>
                    <span className="text-[#6B7A8C]">{insight.read}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0A1B2E]">
                    {insight.title}
                  </h3>
                </div>
                <div className="pt-4 text-xs font-semibold text-[#00B8A9] flex items-center gap-1">
                  Read article <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>

          <div className="max-w-xl mx-auto pt-6">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* SECTION 11 — 3-Hub Footprint (Light: White) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8EDF2]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-[#00B8A9] uppercase tracking-wider font-semibold">
              Global Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0A1B2E]">
              Three Strategic Hubs. Unified Delivery.
            </h2>
            <p className="text-[#6B7A8C] text-base sm:text-lg">
              Direct access to the FDA, European Notified Bodies, and high-velocity engineering capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#F7F9FB] border border-[#E8EDF2] space-y-4">
              <div className="text-3xl">🇺🇸</div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#0A1B2E]">
                  Exton, Pennsylvania
                </h3>
                <div className="text-xs font-mono text-[#00B8A9] uppercase font-semibold">
                  US HQ & FDA Gateway
                </div>
              </div>
              <p className="text-sm text-[#6B7A8C] leading-relaxed">
                Strategic executive oversight, client partnerships, and direct FDA 510(k)/PMA/QMSR
                regulatory alignment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9FB] border border-[#E8EDF2] space-y-4">
              <div className="text-3xl">🇮🇪</div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#0A1B2E]">
                  Dublin, Ireland
                </h3>
                <div className="text-xs font-mono text-[#00B8A9] uppercase font-semibold">
                  EU Regulatory Gateway
                </div>
              </div>
              <p className="text-sm text-[#6B7A8C] leading-relaxed">
                Specialized in EU MDR/IVDR technical documentation, Notified Body interactions, and CE
                marking dossiers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9FB] border border-[#E8EDF2] space-y-4">
              <div className="text-3xl">🇮🇳</div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#0A1B2E]">
                  Coimbatore, India
                </h3>
                <div className="text-xs font-mono text-[#00B8A9] uppercase font-semibold">
                  APAC Engineering & Validation Hub
                </div>
              </div>
              <p className="text-sm text-[#6B7A8C] leading-relaxed">
                60+ validation engineers, SaMD architects, and ProofX automation specialists delivering
                around-the-clock execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — Final CTA (Dark: #0A1B2E) */}
      <section className="bg-[#0A1B2E] text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#2BD9C8]">
            <Award className="w-3.5 h-3.5" />
            Zero-Surprise Regulatory Commitments
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Ready to simplify your MedTech lifecycle?
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a full DHF turnaround, an EU MDR remediation, or an automated ProofX V&V
            pilot — our specialist pods land in days, not months.
          </p>

          <div className="pt-2">
            <Button variant="primary" size="lg" href="/contact">
              Book a 30-minute discovery call
            </Button>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              ISO 13485 · EU MDR · 21 CFR PART 11 · IEC 62304 · ISO 14971
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
