export type ProductizedOffer = {
  id: string
  name: string
  tier: string
  price: string
  duration: string
  summary: string
  targetBuyer: string
  targetAccounts: string[]
  deliverables: string[]
  painPoints: string[]
  proofxIntegration: string
  expansionPath: string
  conversionTimeline: string
}

export const productizedOffers: ProductizedOffer[] = [
  {
    id: 'health-check',
    name: 'MedTech Engineering Health Check',
    tier: 'Entry Diagnostic Wedge',
    price: '$8,000 – $15,000',
    duration: '1 Week',
    summary: 'Scored design-control & submission readiness diagnostic analyzing DHF, risk files, and software V&V maturity across GCC squads.',
    targetBuyer: 'VP Engineering, Head of Regulatory Affairs, GCC Quality Director',
    targetAccounts: ['Baxter', 'Fresenius', 'B. Braun India', 'Hologic', 'Getinge India', 'Haemonetics', 'Bio-Rad Laboratories'],
    deliverables: [
      'Comprehensive 42-point regulatory gap score (FDA QMSR 2026, EU MDR 2017/745, IEC 62304, ISO 14971)',
      'Submissions readiness heat map identifying critical-path audit vulnerabilities',
      'Actionable 30/60/90-day remediation roadmap with prioritized engineering workstreams',
      'Executive briefing presentation for global leadership & India GCC sponsors',
    ],
    painPoints: [
      'Offshore engineering output rejected by global QA teams due to documentation format mismatches',
      'Anxiety over impending FDA QMSR transition deadlines and unannounced Notified Body audits',
      'Lack of clear objective baseline of offshore team maturity across design controls',
    ],
    proofxIntegration: 'Runs ProofX automated static file and ALM traceability analyzer against sample repositories to benchmark audit trail coverage.',
    expansionPath: 'Converts directly into Design-Control Accelerator (45% conversion) or SaMD Assurance Pack (35% conversion).',
    conversionTimeline: 'Closes in 5–10 business days from initial discovery call.',
  },
  {
    id: 'udi-sprint',
    name: 'UDI Sprint',
    tier: 'Fast-Track Compliance Wedge',
    price: '$25,000 – $60,000',
    duration: '6 Weeks',
    summary: 'Turnkey data remediation and validation producing GUDID/EUDAMED-ready UDI records and multi-market packaging compliance.',
    targetBuyer: 'Director of Global Regulatory Affairs, Master Data Head, Supply Chain Director',
    targetAccounts: ['Abbott India', 'Becton Dickinson', 'Smith+Nephew', 'Terumo India', 'Cook Medical', 'Bausch + Lomb'],
    deliverables: [
      'Automated extraction, normalization, and validation of 500+ SKU product attributes across legacy ERPs',
      'Validated XML submissions packages ready for direct FDA GUDID and European EUDAMED upload',
      'Automated packaging barcode and label verification matrix (GS1 / HIBCC compliant)',
      'UDI Master Data Governance standard operating procedure (SOP) tailored for GCC maintenance',
    ],
    painPoints: [
      'Severe backlog in mapping regional ERP bills of materials to evolving EUDAMED mandatory fields',
      'High risk of customs impoundment and distributor halts due to mismatched UDI-DI/PI labels',
      'Manual copy-paste spreadsheet processes prone to human transcription errors',
    ],
    proofxIntegration: 'ProofX UDI Data Engine ingests messy BOM spreadsheets, runs cross-market schema validation rules, and generates auditable change logs.',
    expansionPath: 'Expands into ongoing UDI Lifecycle Maintenance subscription ($24k/yr) and CSV/GAMP5 Sprint for ERP validation.',
    conversionTimeline: '14–21 days from pipeline entry due to acute regulatory deadlines.',
  },
  {
    id: 'samd-assurance',
    name: 'SaMD Assurance Pack',
    tier: 'Core Engineering Wedge',
    price: '$40,000 – $90,000',
    duration: '8 Weeks',
    summary: 'End-to-end IEC 62304-aligned V&V evidence pack, automated traceability matrix, and FDA QMSR audit-ready submission bundle.',
    targetBuyer: 'VP Software Engineering, Head of SaMD / Digital Health, Lead Verification Architect',
    targetAccounts: ['Johnson & Johnson', 'Medtronic MEIC', 'Philips Innovation Campus', 'Siemens Healthineers', 'Roche', 'Boston Scientific', 'Stryker India', 'Edwards Lifesciences', 'ResMed India', 'Varian Medical Systems'],
    deliverables: [
      'Bi-directional automated traceability matrix linking user needs, software requirements, test runs, and bug reports',
      'Software Architecture & Detailed Design documentation aligned to IEC 62304 Class A/B/C',
      'Automated test execution harness with cryptographic audit trails satisfying 21 CFR Part 11',
      'FDA Pre-market SaMD & Cybersecurity submission bundle with SBOM (Software Bill of Materials)',
    ],
    painPoints: [
      'Agile development sprints outpace slow, manual documentation updates by 4+ months',
      'Software developers resent spending 40% of their engineering time formatting Word document test protocols',
      'Notified bodies demanding proof that automated CI/CD pipelines cannot be altered without audit stamps',
    ],
    proofxIntegration: 'ProofX CI/CD Webhooks capture test runs directly from GitHub Actions, GitLab, and Azure DevOps, auto-generating compliance-grade test records.',
    expansionPath: 'Translates immediately into ProofX Team/Platform licenses ($60k–$150k ARR) plus Retained Embedded Engineering Pod ($35k/mo).',
    conversionTimeline: '3–5 weeks; highest average contract value in initial quarter.',
  },
  {
    id: 'design-control-accelerator',
    name: 'Design-Control Accelerator',
    tier: 'Deep Systems Engineering Wedge',
    price: '$60,000 – $120,000',
    duration: '11 Weeks',
    summary: 'Audit-ready Design History File (DHF) compilation and ISO 14971 risk management file remediation for Class II/III devices.',
    targetBuyer: 'Head of Quality Assurance, VP Systems Engineering, Chief Regulatory Officer',
    targetAccounts: ['Danaher', 'Zimmer Biomet', 'Dentsply Sirona India', 'Integra LifeSciences', 'Teleflex', 'Olympus India', 'Carl Zeiss Meditec'],
    deliverables: [
      'Complete, audit-ready Design History File (DHF) synchronized across hardware, firmware, and labeling',
      'Comprehensive ISO 14971:2019 Risk Management File including dFMEA, uFMEA, and Hazard Traceability Matrix',
      'Design Verification & Validation (DV&V) protocol execution and statistical analysis reports',
      'Regulatory audit defense battlecard and mock Notified Body audit defense interview training',
    ],
    painPoints: [
      'M&A integration left multiple legacy DHFs scattered across disconnected tools (Word, DOORS, Jira)',
      'Design changes implemented without updating corresponding hazard analyses or risk mitigations',
      'High risk of FDA 483 inspection observations during scheduled pre-market inspections',
    ],
    proofxIntegration: 'ProofX Risk Matrix links engineering changes directly to risk mitigations and design verification records with live impact alerts.',
    expansionPath: 'Converts into annual enterprise platform contract ($150k–$250k ARR) plus dedicated lifecycle management pod.',
    conversionTimeline: '4–6 weeks.',
  },
  {
    id: 'bespoke-pod',
    name: 'Bespoke Engineering Pod',
    tier: 'Retained Embedded Capacity',
    price: '$30,000 – $50,000 / mo',
    duration: '6–12 Months Retained',
    summary: 'Retained, high-velocity embedded regulatory engineering squad (3–5 senior specialists) operating inside the client GCC.',
    targetBuyer: 'Managing Director GCC, Global VP R&D, VP Technology Operations',
    targetAccounts: ['Johnson & Johnson', 'Novartis', 'Medtronic MEIC', 'AstraZeneca', 'Sanofi', 'Philips Innovation Campus'],
    deliverables: [
      'Dedicated squad of 3–5 senior MedTech engineers (Regulatory Systems Architect, V&V Lead, CSV Specialist, Bio-firmware Engineer)',
      'Direct integration into client daily standups, Jira/Polarion boards, and sprint planning cycles',
      'Continuous maintenance of DHF, continuous V&V pipeline execution, and ongoing Notified Body surveillance defense',
      'Monthly executive KPI dashboard tracking documentation velocity, audit-readiness score, and zero non-conformance rate',
    ],
    painPoints: [
      'Inability of generic offshore staffing agencies (TCS/Wipro/Infosys) to provide specialized MedTech regulatory talent',
      'High attrition in GCC engineering teams causing loss of critical institutional device knowledge',
      'Extreme pressure from global HQ to deliver more software releases without adding onshore headcount',
    ],
    proofxIntegration: 'Squad operates with full ProofX Enterprise Platform deployment, ensuring 3x faster delivery than traditional offshore contractors.',
    expansionPath: 'Multi-year retained engagement scaling from 1 pod to 3–5 pods across business units ($500k–$2M+ annual account value).',
    conversionTimeline: 'Typically follows successful execution of a Sprint or Accelerator within 60 days.',
  },
]
