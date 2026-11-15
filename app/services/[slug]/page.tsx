import type { Metadata } from 'next'
import Link from 'next/link'
import LifecycleThread from '@/components/ui/LifecycleThread'
import ServiceClientSections from '@/components/sections/ServiceClientSections'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type PainPoint = { icon: string; title: string; body: string }
type Capability = { title: string; deliverables: [string, string, string] }
type FAQ = { q: string; a: string }
type RelatedService = { slug: string; name: string; tagline: string }

type ServiceData = {
  name: string
  tagline: string
  badges: string[]
  lifecycleStage: 'concept' | 'design' | 'manufacture' | 'comply' | 'scale'
  painPoints: [PainPoint, PainPoint, PainPoint]
  capabilities: [Capability, Capability, Capability, Capability, Capability, Capability]
  regulatoryStandards: string[]
  faqs: [FAQ, FAQ, FAQ]
  relatedServices: RelatedService[]
}

// ---------------------------------------------------------------------------
// Service Data (all 6 hardcoded inline)
// ---------------------------------------------------------------------------
const SERVICES: Record<string, ServiceData> = {
  'product-engineering': {
    name: 'Product Engineering & Discovery',
    tagline: 'From idea to design-locked prototype — without the hand-off chaos.',
    badges: ['IEC 62304', 'ISO 14971', 'FDA 21 CFR Part 820', 'MDR 2017/745'],
    lifecycleStage: 'design',
    painPoints: [
      {
        icon: '⚡',
        title: 'Requirements Drift',
        body: 'Vague or ever-changing requirements stall development and inflate rework costs by 3–5×.',
      },
      {
        icon: '🔗',
        title: 'Siloed Engineering Teams',
        body: 'Disconnected mechanical, software, and regulatory workstreams produce costly late-stage surprises.',
      },
      {
        icon: '📋',
        title: 'Traceability Gaps',
        body: 'Lack of end-to-end traceability from requirements through V&V creates audit exposure.',
      },
    ],
    capabilities: [
      {
        title: 'Systems Architecture',
        deliverables: ['System Requirements Spec (SRS)', 'Hardware-Software Interface Docs', 'Architecture Decision Records'],
      },
      {
        title: 'Embedded & Firmware',
        deliverables: ['RTOS-based firmware design', 'Boot-loader & OTA update modules', 'IEC 62304 Class B/C software lifecycle'],
      },
      {
        title: 'UX & Human Factors',
        deliverables: ['Formative usability studies', 'IEC 62366 use specification', 'Summative evaluation protocols'],
      },
      {
        title: 'Risk Management',
        deliverables: ['ISO 14971 risk file', 'FMEA & fault-tree analysis', 'Residual risk acceptability review'],
      },
      {
        title: 'Design Verification',
        deliverables: ['Verification test protocols (IQ/OQ/PQ)', 'Design review records (DRR)', 'Traceability matrices (RTM)'],
      },
      {
        title: 'Technology Transfer',
        deliverables: ['DHF package assembly', 'BOM rationalisation', 'Design freeze readiness report'],
      },
    ],
    regulatoryStandards: ['IEC 62304', 'ISO 14971', 'IEC 62366', 'FDA 21 CFR Part 820', 'MDR 2017/745', 'ISO 13485'],
    faqs: [
      {
        q: 'How does NovintiX handle projects mid-flight?',
        a: 'We embed directly into your existing DHF structure, audit the current state, and provide a gap-remediation roadmap within two weeks — no restart required.',
      },
      {
        q: 'Can you work alongside our internal engineering team?',
        a: 'Yes. Our pod model is designed for collaboration. We integrate with your JIRA/Azure DevOps, attend stand-ups, and work as an extension of your team.',
      },
      {
        q: 'What is the typical engagement duration?',
        a: 'Most product engineering engagements run 6–18 months, from concept through design lock. We also offer sprint-based packages for discrete work packages.',
      },
    ],
    relatedServices: [
      { slug: 'quality-regulatory', name: 'Quality & Regulatory', tagline: 'QMS, audits, and submission readiness.' },
      { slug: 'clinical-affairs', name: 'Clinical Affairs', tagline: 'CIP design to clinical report authoring.' },
      { slug: 'digital-ai', name: 'Digital & AI', tagline: 'AI-enabled tools and digital health acceleration.' },
    ],
  },

  'supply-chain': {
    name: 'Supply Chain & Procurement',
    tagline: 'Resilient, audit-ready supply chains that survive every regulatory inspection.',
    badges: ['ISO 13485', 'FDA 21 CFR Part 820', 'EU MDR', 'REACH / RoHS'],
    lifecycleStage: 'manufacture',
    painPoints: [
      {
        icon: '🌐',
        title: 'Single-Source Dependency',
        body: 'Over-reliance on single suppliers creates catastrophic risk during disruptions or component obsolescence.',
      },
      {
        icon: '📦',
        title: 'Supplier Qualification Backlog',
        body: 'Supplier audits and qualification packages pile up, delaying builds and jeopardising launch timelines.',
      },
      {
        icon: '⚠️',
        title: 'Non-Conformance Escapes',
        body: 'Incoming inspection gaps and weak supplier controls let non-conforming material reach the production floor.',
      },
    ],
    capabilities: [
      {
        title: 'Supplier Qualification',
        deliverables: ['Supplier questionnaires & audits', 'Approved Supplier List (ASL) management', 'Supplier corrective action (SCAR) workflow'],
      },
      {
        title: 'Risk & Resilience Planning',
        deliverables: ['Supply-chain risk mapping', 'Dual-source & alternate-source strategies', 'Business continuity plan (BCP) for critical components'],
      },
      {
        title: 'Regulatory Compliance',
        deliverables: ['REACH / RoHS substance declarations', 'Conflict minerals (Dodd-Frank) reporting', 'EU MDR Article 10 technical documentation'],
      },
      {
        title: 'Incoming Quality Control',
        deliverables: ['IQC sampling plans (ISO 2859)', 'Certificate of Conformance review workflows', 'Quarantine & hold management procedures'],
      },
      {
        title: 'Demand & Inventory Planning',
        deliverables: ['Safety-stock modelling', 'ERP/MRP system configuration support', 'Demand-signal integration with manufacturing'],
      },
      {
        title: 'Logistics & Serialisation',
        deliverables: ['UDI serialisation & labelling compliance', 'Cold-chain validation protocols', 'Customs & import/export classification'],
      },
    ],
    regulatoryStandards: ['ISO 13485', 'FDA 21 CFR Part 820', 'EU MDR 2017/745', 'REACH', 'RoHS', 'ISO 2859'],
    faqs: [
      {
        q: 'How quickly can NovintiX qualify a new supplier?',
        a: 'Standard qualification takes 4–8 weeks. For critical or sole-source suppliers we offer an expedited 2-week remote audit pathway.',
      },
      {
        q: 'Do you support dual-sourcing projects?',
        a: 'Yes — we run comparative technical evaluations, negotiate supply agreements, and manage the qualification timeline in parallel to avoid production impact.',
      },
      {
        q: 'Can you help with component end-of-life (EOL) risk?',
        a: 'Absolutely. We monitor lifecycle databases, trigger re-qualification projects 18–24 months before predicted EOL, and manage the design-change package if a substitution is needed.',
      },
    ],
    relatedServices: [
      { slug: 'manufacturing', name: 'Manufacturing', tagline: 'Scale production with validated processes.' },
      { slug: 'quality-regulatory', name: 'Quality & Regulatory', tagline: 'QMS, audits, and submission readiness.' },
      { slug: 'product-engineering', name: 'Product Engineering', tagline: 'From concept to design-locked prototype.' },
    ],
  },

  'manufacturing': {
    name: 'Manufacturing & Process Validation',
    tagline: 'Validated, scalable manufacturing that satisfies FDA and Notified Body scrutiny.',
    badges: ['ISO 13485', 'FDA 21 CFR Part 820', 'IQ/OQ/PQ', 'ISO 11135', 'ISO 11607'],
    lifecycleStage: 'manufacture',
    painPoints: [
      {
        icon: '🔬',
        title: 'Validation Gaps',
        body: 'Undocumented process parameters and skipped IQ/OQ/PQ steps are the #1 FDA 483 observation category.',
      },
      {
        icon: '📉',
        title: 'Yield Variability',
        body: 'Unstable processes drive scrap, rework, and unpredictable COGS that erode already-thin MedTech margins.',
      },
      {
        icon: '🏭',
        title: 'Scale-Up Risk',
        body: 'Moving from prototype to full-rate production without a structured transfer plan routinely delays launches by 6–12 months.',
      },
    ],
    capabilities: [
      {
        title: 'Process Validation (IQ/OQ/PQ)',
        deliverables: ['Validation Master Plan (VMP)', 'Installation, Operational, Performance Qualification protocols', 'Statistical process control (SPC) setup'],
      },
      {
        title: 'Equipment Qualification',
        deliverables: ['URS, DQ, IQ, OQ, PQ packages for new equipment', 'Calibration programme design', 'Preventive maintenance (PM) schedule'],
      },
      {
        title: 'Production Process Design',
        deliverables: ['Process flow diagrams (PFD)', 'Work instructions (WI) and travellers', 'Failure Mode & Effect Analysis (PFMEA)'],
      },
      {
        title: 'Sterilisation Validation',
        deliverables: ['EO, gamma, e-beam validation (ISO 11135/11137)', 'Bioburden & sterility testing coordination', 'SAL 10⁻⁶ assurance documentation'],
      },
      {
        title: 'Packaging & Shelf-Life',
        deliverables: ['ISO 11607 package validation', 'Accelerated & real-time aging protocols', 'Distribution simulation (ASTM D4169)'],
      },
      {
        title: 'Continuous Improvement',
        deliverables: ['Lean/Six Sigma project facilitation', 'OEE tracking & improvement plans', 'Process capability (Cpk) enhancement roadmap'],
      },
    ],
    regulatoryStandards: ['ISO 13485', 'FDA 21 CFR Part 820', 'ISO 11135', 'ISO 11137', 'ISO 11607', 'ASTM D4169'],
    faqs: [
      {
        q: 'What is a Validation Master Plan and do I need one?',
        a: 'A VMP is the overarching document that maps all validation activities across equipment, processes, software, and facilities. FDA and ISO 13485 inspectors routinely request it — yes, you need one.',
      },
      {
        q: 'How long does process validation take?',
        a: 'IQ/OQ typically takes 8–12 weeks; PQ adds another 4–8 weeks for three production runs. Compressed timelines are possible when equipment is pre-qualified at the OEM level.',
      },
      {
        q: 'Can NovintiX support validations at our existing contract manufacturer?',
        a: 'Yes. We have experience across 40+ CMOs globally. We work directly with your CM quality team to execute protocols on-site and author the final validation reports.',
      },
    ],
    relatedServices: [
      { slug: 'supply-chain', name: 'Supply Chain', tagline: 'Resilient, audit-ready supply chains.' },
      { slug: 'quality-regulatory', name: 'Quality & Regulatory', tagline: 'QMS, audits, and submission readiness.' },
      { slug: 'product-engineering', name: 'Product Engineering', tagline: 'From concept to design-locked prototype.' },
    ],
  },

  'quality-regulatory': {
    name: 'Quality & Regulatory Affairs',
    tagline: 'First-time approvals and inspection-ready QMS — built by people who\'ve seen every 483.',
    badges: ['ISO 13485', 'FDA 21 CFR Part 820', 'EU MDR', 'FDA 510(k)', 'PMA', 'UKCA'],
    lifecycleStage: 'comply',
    painPoints: [
      {
        icon: '📋',
        title: 'Submission Rework',
        body: 'Poorly structured technical files and incomplete clinical evidence trigger 100-day Additional Information requests that derail market timelines.',
      },
      {
        icon: '🔎',
        title: 'Inspection Readiness',
        body: 'Most companies discover QMS gaps during — not before — FDA or Notified Body inspections, resulting in warning letters or certificate suspensions.',
      },
      {
        icon: '🌍',
        title: 'Multi-Market Complexity',
        body: 'Maintaining compliance across FDA, MDR, UKCA, TGA, and ANVISA simultaneously drains internal resources and creates version-control nightmares.',
      },
    ],
    capabilities: [
      {
        title: 'QMS Design & Implementation',
        deliverables: ['ISO 13485-compliant QMS build or remediation', 'SOP library creation & document control setup', 'Management Review & CAPA programme design'],
      },
      {
        title: 'FDA Submissions',
        deliverables: ['510(k) pre-submission & submission authoring', 'De Novo request strategy', 'PMA module preparation & FDA meeting facilitation'],
      },
      {
        title: 'EU MDR Technical Files',
        deliverables: ['Technical Documentation per Annex II & III', 'Clinical Evaluation Report (CER) authoring', 'Post-Market Clinical Follow-up (PMCF) plans'],
      },
      {
        title: 'Notified Body Liaison',
        deliverables: ['Notified Body selection & application', 'Audit preparation & mock audits', 'Response-to-queries (RTQ) authoring'],
      },
      {
        title: 'Post-Market Surveillance',
        deliverables: ['PMS plan & report (MDR Annex III)', 'Vigilance & MDR reporting workflows', 'Complaint handling & trend analysis'],
      },
      {
        title: 'Global Registration',
        deliverables: ['UKCA, TGA, Health Canada, ANVISA strategy', 'EUDAMED registration support', 'UDI implementation & GS1 registration'],
      },
    ],
    regulatoryStandards: ['ISO 13485', 'FDA 21 CFR Part 820', 'EU MDR 2017/745', 'FDA 510(k)', 'PMA', 'UKCA', 'TGA', 'ANVISA'],
    faqs: [
      {
        q: 'How long does a 510(k) submission typically take?',
        a: 'Preparation takes 3–6 months depending on predicate complexity and testing gaps. FDA review averages 3–6 months additional. Total: 6–12 months from kick-off to clearance.',
      },
      {
        q: 'Can you remediate an existing ISO 13485 QMS that failed a third-party audit?',
        a: 'Yes. We conduct a gap assessment within two weeks, provide a prioritised remediation plan, and can embed an interim Quality Director while permanent hires are made.',
      },
      {
        q: 'What is included in a CER for EU MDR?',
        a: 'A Clinical Evaluation Report includes a systematic literature review, clinical data appraisal, state-of-the-art analysis, clinical safety & performance assessment, and benefit-risk conclusions per MDCG 2020-1.',
      },
    ],
    relatedServices: [
      { slug: 'clinical-affairs', name: 'Clinical Affairs', tagline: 'CIP design to clinical report authoring.' },
      { slug: 'product-engineering', name: 'Product Engineering', tagline: 'From concept to design-locked prototype.' },
      { slug: 'digital-ai', name: 'Digital & AI', tagline: 'AI-enabled tools and digital health acceleration.' },
    ],
  },

  'clinical-affairs': {
    name: 'Clinical Affairs',
    tagline: 'Clinical evidence strategy, study execution, and reporting — de-risked from day one.',
    badges: ['ISO 14155', 'ICH GCP', 'EU MDR Annex XIV', 'FDA IDE', 'MDCG 2020-1'],
    lifecycleStage: 'comply',
    painPoints: [
      {
        icon: '📊',
        title: 'Weak Clinical Evidence',
        body: 'Insufficient or poorly structured clinical data is the leading reason for EU MDR certification refusals and FDA Additional Information requests.',
      },
      {
        icon: '⏱️',
        title: 'Site Activation Delays',
        body: 'Ethical review bodies and institutional sign-off timelines are routinely underestimated, adding 3–6 months to study start.',
      },
      {
        icon: '📁',
        title: 'Data Integrity Issues',
        body: 'GCP deviations and source data verification failures discovered during monitoring visits threaten study validity and regulatory acceptance.',
      },
    ],
    capabilities: [
      {
        title: 'Clinical Strategy',
        deliverables: ['Clinical Evaluation Plan (CEP / PMCF plan)', 'Regulatory pathway & clinical endpoint selection', 'Benefit-risk framework development'],
      },
      {
        title: 'Study Design & CIP',
        deliverables: ['Clinical Investigation Plan (ISO 14155)', 'Statistical analysis plan (SAP)', 'Investigator Brochure & informed consent templates'],
      },
      {
        title: 'Site Management',
        deliverables: ['Site feasibility & selection', 'Regulatory & ethics submissions (IRB/EC)', 'Site initiation visits (SIV) & investigator training'],
      },
      {
        title: 'Clinical Monitoring',
        deliverables: ['Risk-based monitoring (RBM) plan', 'On-site & remote monitoring visits', 'Monitoring reports & deviation management'],
      },
      {
        title: 'Data Management',
        deliverables: ['eCRF design & EDC setup', 'Data cleaning & lock procedures', 'Statistical analysis & tables/listings/figures (TLFs)'],
      },
      {
        title: 'Clinical Reporting',
        deliverables: ['Clinical Evaluation Report (CER — MDCG 2020-1)', 'Clinical Study Report (CSR — ISO 14155)', 'PMCF evaluation reports (PMCFER)'],
      },
    ],
    regulatoryStandards: ['ISO 14155', 'ICH GCP', 'EU MDR 2017/745', 'FDA 21 CFR Part 812', 'MDCG 2020-1', 'ISO 13485'],
    faqs: [
      {
        q: 'What is the difference between a CEP and a CER?',
        a: 'The Clinical Evaluation Plan (CEP) defines the scope, methods, and acceptance criteria for evaluating clinical data. The Clinical Evaluation Report (CER) is the executed output — the documented appraisal of that data against MDR requirements.',
      },
      {
        q: 'Can NovintiX manage a clinical study from protocol to report?',
        a: 'Yes. We offer full-service clinical project management including protocol development, site activation, monitoring, data management, statistical analysis, and final report authoring — all under one engagement.',
      },
      {
        q: 'How do you handle PMCF obligations under EU MDR?',
        a: 'We build a risk-proportionate PMCF plan, select appropriate methods (registry, PMCF study, PMS survey), execute the activities, and produce the PMCF Evaluation Report on the mandated 1-year or 3-year cycle.',
      },
    ],
    relatedServices: [
      { slug: 'quality-regulatory', name: 'Quality & Regulatory', tagline: 'QMS, audits, and submission readiness.' },
      { slug: 'product-engineering', name: 'Product Engineering', tagline: 'From concept to design-locked prototype.' },
      { slug: 'digital-ai', name: 'Digital & AI', tagline: 'AI-enabled tools and digital health acceleration.' },
    ],
  },

  'digital-ai': {
    name: 'Digital & AI Solutions',
    tagline: 'AI-accelerated product development, digital health, and intelligent compliance tooling.',
    badges: ['FDA AI/ML Guidance', 'EU AI Act', 'IEC 62304', 'SaMD', 'ISO 14971'],
    lifecycleStage: 'scale',
    painPoints: [
      {
        icon: '🤖',
        title: 'AI/ML Regulatory Uncertainty',
        body: 'Teams build AI-driven SaMD without a clear regulatory pathway, risking redesign when FDA or Notified Bodies flag algorithm transparency issues.',
      },
      {
        icon: '🔄',
        title: 'Digital Integration Friction',
        body: 'Connecting IoT devices, cloud platforms, and legacy ERP/QMS systems creates costly custom integration work that slows every programme.',
      },
      {
        icon: '📈',
        title: 'Scaling Without Governance',
        body: 'AI tools deployed without proper validation and drift-monitoring frameworks create silent quality and compliance failures at scale.',
      },
    ],
    capabilities: [
      {
        title: 'SaMD Development & Validation',
        deliverables: ['SaMD classification & regulatory strategy', 'IEC 62304 software lifecycle management', 'Algorithm validation & performance testing'],
      },
      {
        title: 'AI/ML Model Governance',
        deliverables: ['Predetermined change control plan (PCCP)', 'Model drift monitoring & retraining protocols', 'EU AI Act conformity assessment support'],
      },
      {
        title: 'Digital Health Platforms',
        deliverables: ['Patient engagement app development', 'Wearable & IoT device integration', 'HL7 FHIR API design & implementation'],
      },
      {
        title: 'Intelligent QMS & Compliance',
        deliverables: ['ProofX V&V platform deployment', 'AI-assisted document authoring & review', 'Automated traceability matrix generation'],
      },
      {
        title: 'Data Architecture',
        deliverables: ['Real-world data (RWD) strategy', 'Clinical data warehouse design', '21 CFR Part 11 / Annex 11 compliant systems'],
      },
      {
        title: 'Cybersecurity',
        deliverables: ['FDA cybersecurity pre-market submission support', 'Threat modelling (STRIDE / PASTA)', 'Post-market cybersecurity monitoring plan'],
      },
    ],
    regulatoryStandards: ['IEC 62304', 'ISO 14971', 'FDA AI/ML Guidance', 'EU AI Act', 'FDA 21 CFR Part 11', 'HL7 FHIR'],
    faqs: [
      {
        q: 'Is AI/ML software always classified as SaMD?',
        a: 'Not necessarily. AI tools embedded in physical devices are regulated as part of the device; stand-alone AI that meets the definition of "intended to diagnose, treat, cure, or prevent" is SaMD. We help you determine the right classification before development begins.',
      },
      {
        q: 'What is a Predetermined Change Control Plan (PCCP)?',
        a: 'A PCCP is a document submitted to FDA that pre-describes the types of modifications an AI/ML algorithm may undergo and the validation approach for each — allowing updates without a new 510(k) submission.',
      },
      {
        q: 'How does NovintiX approach cybersecurity for connected devices?',
        a: 'We follow FDA\'s 2023 cybersecurity guidance: threat modelling in design, software bill of materials (SBOM), coordinated vulnerability disclosure policy, and a post-market TPRS (Total Product Life Cycle) security plan.',
      },
    ],
    relatedServices: [
      { slug: 'product-engineering', name: 'Product Engineering', tagline: 'From concept to design-locked prototype.' },
      { slug: 'quality-regulatory', name: 'Quality & Regulatory', tagline: 'QMS, audits, and submission readiness.' },
      { slug: 'clinical-affairs', name: 'Clinical Affairs', tagline: 'CIP design to clinical report authoring.' },
    ],
  },
}

const SLUGS = Object.keys(SERVICES)

// ---------------------------------------------------------------------------
// generateStaticParams
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }))
}

// ---------------------------------------------------------------------------
// generateMetadata
// ---------------------------------------------------------------------------
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params
  const service = SERVICES[slug]
  if (!service) return { title: 'Service Not Found' }
  return {
    title: service.name,
    description: service.tagline,
  }
}

// ---------------------------------------------------------------------------
// Lifecycle stage → index (for highlighting)
// ---------------------------------------------------------------------------
const stageIndex: Record<string, number> = {
  concept: 0,
  design: 1,
  manufacture: 2,
  comply: 3,
  scale: 4,
}

const timelineNodes = ['CONCEPT', 'DESIGN', 'MANUFACTURE', 'COMPLY', 'SCALE']

// ---------------------------------------------------------------------------
// Page (Server Component)
// ---------------------------------------------------------------------------
export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const service = SERVICES[slug]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A1B2E] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/" className="text-[#00B8A9] underline">Return home</Link>
        </div>
      </div>
    )
  }

  const activeStage = stageIndex[service.lifecycleStage] ?? 0

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* HERO — dark                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#0A1B2E] text-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-xs text-[#00B8A9] uppercase tracking-widest mb-4"
          >
            NovintiX / Services
          </p>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{service.name}</h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[#6B7A8C] max-w-2xl mb-8">{service.tagline}</p>

          {/* Regulatory badge pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {service.badges.map((badge) => (
              <span
                key={badge}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                className="text-xs bg-white/10 text-[#00B8A9] border border-[#00B8A9]/30 rounded-full px-3 py-1"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* LifecycleThread */}
          <LifecycleThread variant="compact" />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PAIN POINTS — paper                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#F7F9FB] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-xs text-[#00B8A9] uppercase tracking-widest mb-2"
          >
            The Challenge
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B2E] mb-10">
            Why teams come to NovintiX
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.painPoints.map((pp) => (
              <div
                key={pp.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#E8EDF2]"
              >
                <span className="text-3xl mb-4 block">{pp.icon}</span>
                <h3 className="text-lg font-semibold text-[#0A1B2E] mb-2">{pp.title}</h3>
                <p className="text-[#6B7A8C] text-sm leading-relaxed">{pp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CAPABILITIES — light                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-xs text-[#00B8A9] uppercase tracking-widest mb-2"
          >
            What We Deliver
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B2E] mb-10">
            6 Core Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl p-6 border border-[#E8EDF2] hover:border-[#00B8A9] transition-colors group"
              >
                <div className="w-1 h-6 bg-[#00B8A9] rounded-full mb-4" />
                <h3 className="text-base font-semibold text-[#0A1B2E] mb-3">{cap.title}</h3>
                <ul className="space-y-1">
                  {cap.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[#6B7A8C]">
                      <span className="text-[#00B8A9] mt-0.5">›</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* LIFECYCLE TIMELINE — dark                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#0A1B2E] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-xs text-[#00B8A9] uppercase tracking-widest mb-2"
          >
            MedTech Lifecycle
          </p>
          <h2 className="text-3xl font-bold text-white mb-12">Where this service fits</h2>
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
            {timelineNodes.map((node, i) => {
              const isActive = i === activeStage
              return (
                <div key={node} className="flex items-center flex-1 min-w-0">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        isActive
                          ? 'bg-[#FFB454] border-[#FFB454] text-[#0A1B2E]'
                          : 'bg-transparent border-[#00B8A9]/40 text-[#6B7A8C]'
                      }`}
                    >
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <span
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                      className={`text-[10px] mt-2 tracking-wider ${
                        isActive ? 'text-[#FFB454]' : 'text-[#6B7A8C]'
                      }`}
                    >
                      {node}
                    </span>
                  </div>
                  {i < timelineNodes.length - 1 && (
                    <div
                      className={`h-px flex-1 mx-2 ${
                        i < activeStage ? 'bg-[#00B8A9]' : 'bg-[#00B8A9]/20'
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* REGULATORY STANDARDS — paper                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#F7F9FB] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-xs text-[#00B8A9] uppercase tracking-widest mb-2"
          >
            Standards & Frameworks
          </p>
          <h2 className="text-2xl font-bold text-[#0A1B2E] mb-6">Regulatory coverage</h2>
          <div className="flex flex-wrap gap-3">
            {service.regulatoryStandards.map((std) => (
              <span
                key={std}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                className="text-sm bg-white border border-[#E8EDF2] text-[#0A1B2E] rounded-md px-4 py-2 shadow-sm"
              >
                {std}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ + CONSULT FORM + RELATED — client sections                      */}
      {/* ------------------------------------------------------------------ */}
      <ServiceClientSections
        faqs={service.faqs}
        relatedServices={service.relatedServices}
        serviceName={service.name}
      />
    </>
  )
}
