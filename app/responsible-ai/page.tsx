import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'
import {
  Brain,
  ShieldAlert,
  Users,
  History,
  Scale,
  CheckCircle2,
  FileCheck,
  ArrowRight,
  Lock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Responsible AI Framework | NovintiX',
  description:
    'Our governing principles for human-in-the-loop AI validation, deterministic audit trails, and non-autonomous regulatory submissions in MedTech.',
}

const AI_PILLARS = [
  {
    icon: Users,
    title: '1. Mandatory Human-in-the-Loop (HITL) Sign-Off',
    description:
      'We believe AI should augment human expertise, never replace it. In every NovintiX workflow and within ProofX, algorithmic suggestions, automated trace links, and drafted test cases require formal evaluation and explicit cryptographic sign-off by a qualified human practitioner. No AI output is accepted into a regulated dossier without named human accountability.',
  },
  {
    icon: ShieldAlert,
    title: '2. Absolute Prohibition of Autonomous Regulatory Filings',
    description:
      'NovintiX firmly enforces a zero-tolerance policy against autonomous regulatory submissions. No automated tool or generative agent deployed by NovintiX is ever authorized to submit, transmit, or certify filings to the US FDA (ESG), European Commission (EUDAMED), or any Notified Body. Regulatory submissions remain exclusively in the hands of accredited Regulatory Affairs professionals.',
  },
  {
    icon: History,
    title: '3. Deterministic Audit Trails & 21 CFR Part 11 Lineage',
    description:
      'Every interaction, generation, and transformation mediated by our AI tooling generates an immutable, time-stamped audit record. We capture full model provenance, system prompt snapshots, input training boundaries, and versioned differential diffs, ensuring complete compliance with 21 CFR Part 11 and EU Annex 11 audit inspection expectations.',
  },
  {
    icon: Scale,
    title: '4. Continuous Bias Monitoring & Clinical Grounding',
    description:
      'When deploying AI models for data extraction, literature review synthesis, or clinical evaluation, our systems undergo continuous drift and bias surveillance. We test models against validated ground-truth benchmarks to eliminate hallucination risk, demographic bias in clinical datasets, and semantic skew.',
  },
]

const FRAMEWORKS = [
  {
    name: 'FDA Good Machine Learning Practice (GMLP)',
    desc: 'Alignment with the 10 guiding principles established by FDA, Health Canada, and UK MHRA for medical device software development.',
  },
  {
    name: 'EU Artificial Intelligence Act (EU AI Act)',
    desc: 'Compliance with High-Risk AI System governance obligations, risk management systems (ISO 14971), and post-market surveillance.',
  },
  {
    name: 'ISO/IEC 42001:2023',
    desc: 'Adherence to international standards for Artificial Intelligence Management Systems (AIMS), ensuring organizational AI transparency.',
  },
  {
    name: 'GAMP5 Second Edition (CSA)',
    desc: 'Application of Computer Software Assurance risk-based principles to machine learning models used in GxP environments.',
  },
]

export default function ResponsibleAiPage() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <SectionWrapper variant="dark" className="pt-28 pb-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-[#00B8A9]/10 text-[#00B8A9] border border-[#00B8A9]/20">
            <Brain className="w-3.5 h-3.5" />
            <span>ETHICAL MEDTECH INTELLIGENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display">
            Responsible AI in Regulated MedTech
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Why NovintiX enforces strict human oversight, deterministic audit provenance, and zero
            autonomous regulatory submissions across our entire service and technology portfolio.
          </p>
        </div>
      </SectionWrapper>

      {/* Core Principles (Light) */}
      <SectionWrapper variant="light" className="py-20">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
              Our Non-Negotiables
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1B2E] font-display">
              Four Pillars of Responsible MedTech AI
            </h2>
            <p className="text-base text-[#6B7A8C]">
              In life sciences and medical device development, errors can jeopardize patient lives.
              Our Responsible AI Framework establishes clear boundaries for assistive automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AI_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E8EDF2] p-8 shadow-xs hover:border-[#00B8A9]/40 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-[#00B8A9]/10 text-[#00B8A9] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#0A1B2E]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#6B7A8C] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ProofX Governance Spotlight (Paper) */}
      <SectionWrapper variant="paper" className="py-20 border-y border-[#E8EDF2]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
              Platform Architecture
            </span>
            <h2 className="text-3xl font-bold text-[#0A1B2E] font-display">
              ProofX Human-in-the-Loop Governance
            </h2>
            <p className="text-sm text-[#6B7A8C] max-w-2xl mx-auto">
              Our automated V&amp;V platform ProofX is built with defensive architectural barriers that
              guarantee human verification at every milestone.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8EDF2] p-8 space-y-6 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2 p-4 bg-[#F7F9FB] rounded-xl border border-[#E8EDF2]">
                <div className="font-mono text-xs text-[#00B8A9] font-bold">STAGE 1: PARSING</div>
                <h4 className="font-display font-bold text-base text-[#0A1B2E]">Assistive Synthesis</h4>
                <p className="text-xs text-[#6B7A8C]">
                  Algorithms extract user needs and link requirement nodes to code commits.
                </p>
              </div>

              <div className="space-y-2 p-4 bg-[#F7F9FB] rounded-xl border border-[#E8EDF2]">
                <div className="font-mono text-xs text-[#FFB454] font-bold">STAGE 2: SCRUTINY</div>
                <h4 className="font-display font-bold text-base text-[#0A1B2E]">Lead Auditor Review</h4>
                <p className="text-xs text-[#6B7A8C]">
                  Senior CSV engineer verifies test validity, edge cases, and protocol rigor.
                </p>
              </div>

              <div className="space-y-2 p-4 bg-[#F7F9FB] rounded-xl border border-[#E8EDF2]">
                <div className="font-mono text-xs text-[#00B8A9] font-bold">STAGE 3: RELEASE</div>
                <h4 className="font-display font-bold text-base text-[#0A1B2E]">Cryptographic Sign-Off</h4>
                <p className="text-xs text-[#6B7A8C]">
                  Named human signature generated under 21 CFR Part 11 compliant credentials.
                </p>
              </div>
            </div>

            <div className="border-t border-[#E8EDF2] pt-6 flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-[#00B8A9] shrink-0 mt-0.5" />
              <p className="text-xs text-[#6B7A8C] leading-relaxed">
                <strong className="text-[#0A1B2E]">Defensible to Regulatory Auditors:</strong> ProofX outputs
                are structured specifically so that an FDA investigator or EU Notified Body auditor can inspect
                the exact human verification timestamp and rationale for every requirement, test script, and
                traceability relationship.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Global Standards Alignment (Light) */}
      <SectionWrapper variant="light" className="py-20">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
              Regulatory Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1B2E] font-display">
              Aligned with Leading International AI Standards
            </h2>
            <p className="text-base text-[#6B7A8C]">
              We continually track and align our internal protocols with evolving international consensus
              frameworks for medical device software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRAMEWORKS.map((fw, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E8EDF2] p-6 shadow-2xs hover:border-[#00B8A9]/40 transition-colors space-y-2"
              >
                <div className="font-mono text-xs font-bold text-[#00B8A9]">STANDARDS SPEC</div>
                <h3 className="font-display font-bold text-base text-[#0A1B2E]">
                  {fw.name}
                </h3>
                <p className="text-xs text-[#6B7A8C] leading-relaxed">
                  {fw.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section (Dark) */}
      <SectionWrapper variant="dark" className="py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Have questions about our AI governance?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Our Digital Quality and AI Governance committee welcomes inquiries from regulatory auditors,
            client quality directors, and ethics committees.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="lg">
              <span>Contact AI Governance Desk</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
