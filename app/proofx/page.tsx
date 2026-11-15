import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Lock, Cpu, Sparkles } from 'lucide-react'
import ProofXTour from '@/components/sections/ProofXTour'

export const metadata: Metadata = {
  title: 'ProofX — AI-Native V&V Platform | NovintiX',
  description:
    'AI-Native V&V. Audit-Ready Evidence. Every Time. ProofX automates test protocol generation, bi-directional traceability, and compliance dossier assembly for MedTech teams.',
}

export default function ProofXPage() {
  const flowSteps = [
    { title: 'Requirements In', desc: 'Sync from Jama, Polarion, or DOORS' },
    { title: 'AI Test Generation', desc: 'Deterministic test case synthesis' },
    { title: 'Auto-Traceability Matrix', desc: 'Real-time bi-directional RTM' },
    { title: 'Human Sign-off', desc: '21 CFR Part 11 e-signatures' },
    { title: 'Audit Pack Export', desc: 'One-click FDA & MDR dossiers' },
  ]

  const integrations = [
    'Jama Software',
    'Siemens Polarion',
    'Azure DevOps',
    'Greenlight Guru',
    'MasterControl',
    'Veeva Vault',
    'Atlassian Jira',
    'PTC Windchill',
  ]

  const pricingTiers = [
    {
      name: 'Pilot',
      price: '$15k – $30k',
      period: '6–8 weeks fixed scope',
      description: 'Ideal for validating ProofX on a single device sub-system or critical software module.',
      features: [
        '1 development program / subsystem',
        'Up to 300 requirements parsed & mapped',
        'Automated RTM & boundary test synthesis',
        'Audit pack export (FDA / MDR format)',
        'Dedicated NovintiX V&V onboarding specialist',
      ],
      popular: false,
      cta: 'Get started',
      href: '/contact?tier=pilot&ref=proofx',
    },
    {
      name: 'Team',
      price: '$1.5k – $3k',
      period: 'per seat / year',
      description: 'Built for focused engineering and QA teams delivering continuous verification.',
      features: [
        'Up to 10 active seats',
        'Unlimited requirement imports',
        'Automated bi-directional traceability',
        '21 CFR Part 11 compliant sign-off workflows',
        'Standard ALM / PLM connector integrations',
        'Email & Slack technical support',
      ],
      popular: false,
      cta: 'Get started',
      href: '/contact?tier=team&ref=proofx',
    },
    {
      name: 'Platform',
      price: '$120k – $400k',
      period: 'per year',
      description: 'Org-wide deployment for enterprise MedTech manufacturers running multiple device classes.',
      features: [
        'Organization-wide unlimited seats',
        'Enterprise SSO, SCIM & RBAC controls',
        'Full custom ALM/PLM enterprise connectors',
        'Unlimited automated audit pack exports',
        'Dedicated private cloud or VPC deployment option',
        '99.9% uptime SLA & dedicated account manager',
      ],
      popular: true,
      cta: 'Get started',
      href: '/contact?tier=platform&ref=proofx',
    },
    {
      name: 'ProofX + NovintiX Pod',
      price: 'Custom',
      period: 'Managed V&V delivery',
      description: 'Combines the ProofX software platform with our seasoned MedTech verification engineering pod.',
      features: [
        'Full dedicated pod: Lead V&V + test engineers',
        'Turnkey execution of IQ/OQ/PQ protocols',
        'Complete DHF remediation & gap closure',
        'Audit defense support during Notified Body audits',
        'Guaranteed submission readiness timeline',
      ],
      popular: false,
      cta: 'Get started',
      href: '/contact?tier=managed-pod&ref=proofx',
    },
  ]

  const accelerators = [
    {
      tag: 'QMS ACCELERATOR',
      title: 'NovaQMS Starter',
      subtitle: 'Validated digital QMS for ISO 13485',
      description:
        'Pre-configured, fully validated QMS templates designed to accelerate ISO 13485 and FDA QMSR compliance in under 90 days.',
      icon: ShieldCheck,
      features: ['24 pre-built SOPs', 'Integrated change control', 'CAPA & Deviation engine'],
    },
    {
      tag: 'ANALYTICS ENGINE',
      title: 'LifelineData',
      subtitle: 'MedTech analytics and compliance reporting',
      description:
        'Continuous quality intelligence that ingests complaint data, PMS signals, and CAPAs to predict compliance risks before inspectors arrive.',
      icon: Cpu,
      features: ['Automated PSUR generation', 'Signal detection algorithms', 'EUDAMED & FDA MDR reporting'],
    },
    {
      tag: 'COMPLIANCE AI',
      title: 'DocPilot',
      subtitle: '21 CFR Part 11 document compliance assistant',
      description:
        'Intelligent document authoring assistant that validates regulatory citations, cross-references design inputs, and ensures flawless formatting.',
      icon: Sparkles,
      features: ['Instant citation validation', 'Redline audit logs', 'Automated Annex II/III mapping'],
    },
  ]

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO SECTION (dark)                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#0A1B2E] text-white py-24 md:py-32 px-4 relative overflow-hidden">
        {/* Ambient glow accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00B8A9]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-[#00B8A9]/40 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00B8A9] animate-pulse" />
            <span
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="text-xs uppercase tracking-widest text-[#00B8A9]"
            >
              PROOFX BY NOVINTIX
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
            AI-Native V&amp;V.{' '}
            <span className="text-[#00B8A9]">Audit-Ready Evidence.</span> Every Time.
          </h1>

          <p className="text-lg md:text-xl text-[#6B7A8C] max-w-3xl mx-auto leading-relaxed mb-10">
            ProofX replaces fragile spreadsheets and manual test authoring with automated requirement parsing,
            deterministic test generation, and sealed audit dossiers compliant with IEC 62304 and 21 CFR Part 820.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?ref=proofx"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00B8A9] hover:bg-[#00a398] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-[#00B8A9]/20"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              See pricing
            </a>
          </div>

          {/* Key Stat Badges */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white font-display">60% Faster</div>
              <div className="text-xs text-[#6B7A8C] mt-1">V&amp;V protocol authoring</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#00B8A9] font-display">100%</div>
              <div className="text-xs text-[#6B7A8C] mt-1">Bi-directional traceability</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white font-display">Zero 483s</div>
              <div className="text-xs text-[#6B7A8C] mt-1">On ProofX-generated RTMs</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#FFB454] font-display">Part 11</div>
              <div className="text-xs text-[#6B7A8C] mt-1">Validated e-signatures</div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. WHAT IS PROOFX (light)                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-24 px-4 border-b border-[#E8EDF2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text explanation */}
            <div className="lg:col-span-5 space-y-6">
              <p
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                className="text-xs text-[#00B8A9] uppercase tracking-widest font-semibold"
              >
                Verification &amp; Validation Re-Engineered
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1B2E] leading-tight">
                Eliminate the hand-off friction between R&amp;D and Quality.
              </h2>
              <p className="text-[#6B7A8C] text-base leading-relaxed">
                Traditional MedTech verification forces systems engineers to manually draft test cases, copy-paste
                matrices into spreadsheets, and reconcile broken IDs before every regulatory milestone.
              </p>
              <p className="text-[#6B7A8C] text-base leading-relaxed">
                ProofX connects directly to your existing systems of record. It treats requirements as structured data,
                synthesizes rigorous test protocols mapped to ISO 14971 risks, and keeps your traceability matrix synchronized in real time.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#0A1B2E] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#00B8A9]/20 text-[#00B8A9] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Deterministic AI — zero hallucinations in regulatory text</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#0A1B2E] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#00B8A9]/20 text-[#00B8A9] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Continuous gap detection for orphan requirements</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#0A1B2E] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#00B8A9]/20 text-[#00B8A9] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Cryptographically immutable audit trail for Notified Bodies</span>
                </div>
              </div>
            </div>

            {/* Right Column: 5-step flow diagram */}
            <div className="lg:col-span-7 bg-[#F7F9FB] border border-[#E8EDF2] p-8 rounded-2xl shadow-sm">
              <div className="text-xs font-mono text-[#6B7A8C] uppercase tracking-wider mb-6 flex items-center justify-between">
                <span>ProofX Architecture Flow</span>
                <span className="text-[#00B8A9]">End-to-End Automated Pipeline</span>
              </div>

              <div className="space-y-3">
                {flowSteps.map((s, idx) => (
                  <div key={s.title}>
                    <div className="bg-white border border-[#E8EDF2] hover:border-[#00B8A9] transition-all p-4 rounded-xl flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-4">
                        <div
                          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                          className="w-8 h-8 rounded-lg bg-[#0A1B2E] text-[#00B8A9] flex items-center justify-center text-xs font-bold"
                        >
                          0{idx + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-[#0A1B2E]">{s.title}</div>
                          <div className="text-xs text-[#6B7A8C]">{s.desc}</div>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center text-xs text-[#00B8A9] font-mono">
                        <span>Active</span>
                      </div>
                    </div>

                    {/* Teal connector arrow */}
                    {idx < flowSteps.length - 1 && (
                      <div className="flex justify-center my-1.5">
                        <div className="w-0.5 h-4 bg-[#00B8A9]/40 relative">
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-[#00B8A9]" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. INTERACTIVE PRODUCT TOUR (dark)                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#0A1B2E]">
        <ProofXTour />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. INTEGRATIONS (light/paper)                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#F7F9FB] py-16 px-4 border-b border-[#E8EDF2]">
        <div className="max-w-5xl mx-auto text-center">
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-xs text-[#00B8A9] uppercase tracking-widest mb-3 font-semibold"
          >
            Connected Ecosystem
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1B2E] mb-3">
            Works with your existing stack
          </h2>
          <p className="text-[#6B7A8C] text-sm max-w-xl mx-auto mb-8">
            No painful migration. ProofX connects via certified APIs to the tools your engineering and quality teams already rely on.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {integrations.map((tool) => (
              <span
                key={tool}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                className="text-xs md:text-sm bg-white border border-[#E8EDF2] text-[#0A1B2E] font-medium px-5 py-2.5 rounded-full shadow-sm hover:border-[#00B8A9] hover:text-[#00B8A9] transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. PRICING LADDER (light)                                          */}
      {/* ------------------------------------------------------------------ */}
      <section id="pricing" className="bg-white py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="text-xs text-[#00B8A9] uppercase tracking-widest mb-3 font-semibold"
            >
              Transparent Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B2E] mb-4">
              Designed for Teams from Early Prototype to Global OEM
            </h2>
            <p className="text-[#6B7A8C] max-w-2xl mx-auto text-base">
              Predictable pricing without hidden implementation fees. Every tier includes full regulatory schema validation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all relative ${
                  tier.popular
                    ? 'border-2 border-[#00B8A9] shadow-xl bg-white scale-[1.02] z-10'
                    : 'border border-[#E8EDF2] bg-[#F7F9FB] hover:border-slate-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00B8A9] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="text-lg font-bold text-[#0A1B2E] mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-[#0A1B2E] font-display mt-3">
                    {tier.price}
                  </div>
                  <div
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    className="text-xs text-[#6B7A8C] mb-4"
                  >
                    {tier.period}
                  </div>
                  <p className="text-xs text-[#6B7A8C] mb-6 leading-relaxed min-h-[48px]">
                    {tier.description}
                  </p>

                  <div className="border-t border-[#E8EDF2] pt-4 mb-6">
                    <div className="text-xs font-mono text-[#0A1B2E] font-semibold uppercase tracking-wider mb-3">
                      Included Capabilities
                    </div>
                    <ul className="space-y-2.5">
                      {tier.features.map((f) => (
                        <li key={f} className="text-xs text-[#6B7A8C] flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#00B8A9] flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={tier.href}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-xs text-center transition-colors block ${
                    tier.popular
                      ? 'bg-[#00B8A9] text-white hover:bg-[#00a398] shadow-md shadow-[#00B8A9]/20'
                      : 'bg-[#0A1B2E] text-white hover:bg-slate-800'
                  }`}
                >
                  {tier.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. DIGITAL ACCELERATORS (dark)                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#0A1B2E] text-white py-24 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="text-xs text-[#00B8A9] uppercase tracking-widest mb-3"
            >
              Proprietary IP
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              NovintiX Digital Accelerators
            </h2>
            <p className="text-[#6B7A8C] max-w-2xl mx-auto text-base">
              Beyond ProofX, our engineering hubs maintain a suite of pre-built, regulatory-tested accelerators to fast-track every lifecycle stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {accelerators.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00B8A9]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#00B8A9]/10 border border-[#00B8A9]/30 text-[#00B8A9] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                        className="text-[10px] text-[#00B8A9] bg-[#00B8A9]/10 px-2 py-0.5 rounded"
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#00B8A9] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-[#FFB454] mb-3">{item.subtitle}</div>
                    <p className="text-xs text-[#6B7A8C] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="border-t border-white/10 pt-4 mb-6">
                      <ul className="space-y-2 text-xs text-slate-300 font-mono">
                        {item.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2">
                            <span className="text-[#00B8A9]">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/contact?ref=accelerator"
                    className="text-xs font-semibold text-[#00B8A9] hover:text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                  >
                    <span>Request technical brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 7. CTA SECTION (dark)                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#06111D] text-white py-24 px-4 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-xs text-[#00B8A9] uppercase tracking-widest mb-3"
          >
            Take The Next Step
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to eliminate V&amp;V audit risk?
          </h2>
          <p className="text-[#6B7A8C] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Schedule a 30-minute demonstration with our V&amp;V platform team. Bring your toughest requirements document and watch ProofX generate the RTM live.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?ref=proofx-pilot-call"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00B8A9] hover:bg-[#00a398] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-[#00B8A9]/20"
            >
              <span>Book a ProofX pilot call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/customers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Read Customer Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
