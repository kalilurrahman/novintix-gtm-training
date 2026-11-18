export type TrainingModule = {
  id: string
  number: string
  title: string
  subtitle: string
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  targetAudience: string
  coreCompetency: string
  summary: string
  learningObjectives: string[]
  keyFrameworks: {
    name: string
    summary: string
    bullets: string[]
  }[]
  interactiveExercise: {
    title: string
    scenario: string
    taskInstructions: string[]
    deliverableTemplate: string
    rubricCriteria: { criteria: string; weight: string; standard: string }[]
  }
  quiz: {
    question: string
    options: string[]
    correctIndex: number
    explanation: string
  }[]
}

export const trainingModules: TrainingModule[] = [
  {
    id: 'mod-1-positioning',
    number: '01',
    title: 'MedTech Lifecycle Positioning & Defeating Vendor Fragmentation',
    subtitle: 'Mastering the NovintiX Value Proposition vs. Disjointed Vendor Silos',
    duration: '45 mins',
    difficulty: 'Beginner',
    targetAudience: 'GTM Account Executives, BDRs, Pre-Sales Consultants, Practice Leads',
    coreCompetency: 'Category Claim & Competitive Differentiation',
    summary:
      'Understand why the traditional "Hand-Off Economy" fails MedTech OEMs (6 disconnected vendors causing context leakage, audit non-conformances, and 12-month delays) and how NovintiX positions as the single connected thread from Concept to Scale.',
    learningObjectives: [
      'Articulate the NovintiX category claim: "The MedTech Lifecycle Partner" with strict zero-surprise commitment.',
      'Diagnose the 5 failure points of the Hand-Off Economy (CROs, design boutiques, legacy QA agencies, software houses).',
      'Explain the strategic value of the 3-Hub Footprint (Exton US HQ, Dublin EU Gateway, Coimbatore Delivery Core).',
      'Frame the business case for combining services with ProofX AI-native V&V software.',
    ],
    keyFrameworks: [
      {
        name: 'The 6-Silo Fragmentation Diagnosis',
        summary: 'How traditional hand-offs leak regulatory context and cause 9-14 month remediation delays.',
        bullets: [
          'Design Agency → CRO: Loss of original clinical intent and usability requirements.',
          'CRO → QA Consultancy: Mismatched trace protocols and unformatted risk controls.',
          'QA → Regulatory Dossier: Late discovery of traceability gaps right before FDA submission.',
          'Regulatory → Mfg Partner: Unvalidated equipment modifications and missing IQ/OQ/PQ records.',
          'Software House → Enterprise QMS: Disconnected IEC 62304 artifacts failing 21 CFR Part 11 audit trails.',
        ],
      },
      {
        name: 'The 5-Node Lifecycle Thread',
        summary: 'NovintiX’s unified operating model connecting concept directly to scale.',
        bullets: [
          'CONCEPT: DHF architecture built for audit readiness from Day 1.',
          'DESIGN: ISO 14971 Risk Management and Human Factors unified with core engineering.',
          'MANUFACTURE: IQ/OQ/PQ executed with regulatory submission acceptance criteria.',
          'COMPLY: Defensible FDA 510(k), QMSR (Part 820), and EU MDR/IVDR cleared dossiers.',
          'SCALE: ProofX continuous automated test proof and retained engineering pods.',
        ],
      },
    ],
    interactiveExercise: {
      title: 'Real-World Drill: Elevator Pitch to an OEM VP of Engineering',
      scenario:
        'You are speaking with the VP of Engineering at a Tier-1 Orthopedic OEM. They complain that their clinical CRO in Europe and their software development team in Bangalore keep pointing fingers over missing test traceability for an upcoming EU MDR audit in 60 days.',
      taskInstructions: [
        'Acknowledge the specific pain point (finger-pointing, context loss between CRO and Bangalore).',
        'Contrast their current 6-vendor silo experience with the NovintiX single-thread model.',
        'Propose an immediate, low-friction entry wedge (e.g. 30-day ProofX automated audit proof sprint).',
      ],
      deliverableTemplate: `Hi [Prospect Name],
What you're experiencing is the classic "Hand-Off Economy" trap: two capable vendors operating with different data models, leaving your team holding the audit risk.

At NovintiX, we replace fragmented vendors with one continuous lifecycle thread. Through our 3-hub model (Exton, Dublin, Coimbatore), our regulatory leads in Dublin directly coordinate with our validation engineers in India. 

For your 60-day MDR deadline, we don't ask you to swap vendors today. We deploy ProofX as a non-invasive layer over your existing Jira/Polarion stack, automatically closing your RTM coverage gaps in under 3 weeks. 

Would you be open to a 20-minute diagnostic this Thursday to inspect the automated gap analysis?`,
      rubricCriteria: [
        { criteria: 'Pain Point Empathy', weight: '25%', standard: 'Directly cites the CRO vs. software hand-off breakdown.' },
        { criteria: 'Category Differentiation', weight: '35%', standard: 'Clearly explains NovintiX single lifecycle thread without badmouthing competitors.' },
        { criteria: 'Low-Risk Call to Action', weight: '40%', standard: 'Proposes non-invasive ProofX audit sprint instead of massive overhaul.' },
      ],
    },
    quiz: [
      {
        question: 'What is the core strategic danger of the "Hand-Off Economy" in MedTech commercialization?',
        options: [
          'Vendors charge too little, lowering industry quality standards.',
          'Each hand-off between disconnected firms leaks context, leading to late-stage trace gaps and audit findings.',
          'It forces device manufacturers to only use internal engineers.',
          'Regulatory bodies refuse to review submissions with more than one vendor.',
        ],
        correctIndex: 1,
        explanation:
          'When multiple agencies touch different lifecycle stages, context and data models are lost, resulting in costly 9-14 month remediation delays right before submission.',
      },
      {
        question: 'What unique strategic role does NovintiX’s Dublin hub provide for global OEMs?',
        options: [
          'Low-cost call center operations.',
          'Direct EU Regulatory Gateway for EU MDR/IVDR technical documentation and Notified Body engagement.',
          'Automotive electronics testing.',
          'Solely handling US FDA pre-submissions.',
        ],
        correctIndex: 1,
        explanation:
          'Dublin serves as the European Regulatory Gateway, bridging transatlantic compliance between US headquarters and high-scale delivery in India.',
      },
    ],
  },
  {
    id: 'mod-2-proofx',
    number: '02',
    title: 'ProofX Product Architecture, ALM Integration & ROI Calculation',
    subtitle: 'Selling and Deploying AI-Native V&V Test Proof for Regulated MedTech',
    duration: '60 mins',
    difficulty: 'Intermediate',
    targetAudience: 'Solutions Architects, Technical Account Managers, Sales Engineers',
    coreCompetency: 'Product Mastery & Economic Justification',
    summary:
      'Master the technical architecture of ProofX: automated test case generation, ISO 14971 risk link mining, live RTM synthesis, and 21 CFR Part 11 compliant e-signature audit packs. Learn how to calculate customer ROI and structure pilot pricing.',
    learningObjectives: [
      'Deconstruct the 5-step ProofX workflow (Requirements In → AI Gen → Auto-Trace → Human Sign-off → Audit Pack).',
      'Explain how ProofX integrates non-invasively with Jama, Polarion, Azure DevOps, and Greenlight Guru.',
      'Demonstrate compliance with IEC 62304 Ed.2, ISO 14971, and 21 CFR Part 11.',
      'Calculate customer time savings (60% velocity increase) and justify the $15k–$30k pilot tier.',
    ],
    keyFrameworks: [
      {
        name: 'The 5-Step ProofX Verification Engine',
        summary: 'How ProofX transforms raw requirements into defensible regulatory evidence.',
        bullets: [
          '1. Requirements In: Automated import via REST APIs from Jama, Polarion, Jira, or DOORS.',
          '2. AI Test Gen: Generates boundary, stress, and negative test cases mapped to regulatory intent.',
          '3. Auto-Traceability Matrix: Real-time dynamic graph linking REQ → TC → Test Run → Risk Control.',
          '4. Human-in-the-Loop Sign-off: Cryptographically verified, Part 11 compliant e-signatures.',
          '5. Audit Pack Export: One-click generation of PDF/ZIP dossiers formatted for FDA & Notified Body audits.',
        ],
      },
      {
        name: 'ProofX Pricing Ladder & Land-and-Expand Strategy',
        summary: 'Product tiering designed to eliminate enterprise procurement friction.',
        bullets: [
          'Pilot ($15k–$30k fixed fee, 30–60 days): One device family or SaMD module with guaranteed proof.',
          'Team ($1.5k–$3k / seat / yr): Scaling across 10–50 software and QA engineers.',
          'Platform ($120k–$400k / yr): Enterprise-wide deployment with unlimited ALM connectors and SSO.',
          'ProofX + NovintiX Pod ($30k–$50k / mo): Managed delivery combining software with dedicated validation engineers.',
        ],
      },
    ],
    interactiveExercise: {
      title: 'Interactive Calculator: Formulating an ROI Justification Proposal',
      scenario:
        'A prospective SaMD client has 800 software requirements and currently spends 240 engineering hours manually updating Excel traceability matrices before every sprint release, experiencing an average of 3 audit defects per cycle.',
      taskInstructions: [
        'Calculate their current annual manual cost assuming $120/hr loaded engineering rate across 6 releases/year.',
        'Project time savings with ProofX (60% reduction in manual documentation).',
        'Draft a 3-bullet ROI summary for their Director of Software Quality justifying a $25k pilot.',
      ],
      deliverableTemplate: `CURRENT STATE BASELINE:
• 240 hrs/release × 6 releases/yr = 1,440 hours annually.
• At $120/hr, annual manual V&V documentation cost = $172,800.
• Audit risk: 3 recurring non-conformance defects per cycle delaying release approval by 3-5 weeks.

PROOFX VALUE REALIZATION:
• 60% Reduction in Manual Hours: Saves 864 engineering hours/year ($103,680 direct cost reduction).
• Audit Defect Elimination: Automated 100% bi-directional traceability closes orphan requirements automatically.
• Payback Period: The $25,000 fixed-fee pilot pays for itself within the first 1.8 release cycles.`,
      rubricCriteria: [
        { criteria: 'Financial Accuracy', weight: '30%', standard: 'Correct calculation of current labor cost and projected savings.' },
        { criteria: 'Regulatory Alignment', weight: '35%', standard: 'Highlights elimination of audit defects and orphan requirements.' },
        { criteria: 'Executive Persuasiveness', weight: '35%', standard: 'Clear payback period and low-risk pilot recommendation.' },
      ],
    },
    quiz: [
      {
        question: 'Why does ProofX enforce mandatory human sign-off before exporting audit packs?',
        options: [
          'Because the AI software does not know how to generate PDFs.',
          'To satisfy 21 CFR Part 11 and FDA QMSR requirements for accountable professional oversight and legal intent.',
          'Because the user must pay an additional fee per export.',
          'To delay the verification cycle for billing purposes.',
        ],
        correctIndex: 1,
        explanation:
          'Regulators (FDA, Notified Bodies) require human-in-the-loop validation and legally defensible electronic signatures under 21 CFR Part 11; autonomous AI sign-off is non-compliant.',
      },
      {
        question: 'Which of the following describes the recommended entry wedge for ProofX in a Global GCC?',
        options: [
          'An all-or-nothing $500,000 enterprise rip-and-replace contract.',
          'A fixed-scope $15k–$30k pilot on one device family or subsystem delivering automated proof in 30 days.',
          'Providing free consulting forever with no software.',
          'Replacing their existing Jira/Polarion systems entirely.',
        ],
        correctIndex: 1,
        explanation:
          'A scoped, low-friction pilot on one program allows GCC leads to experience 60% faster verification before scaling to enterprise seats.',
      },
    ],
  },
  {
    id: 'mod-3-gcc-gtm',
    number: '03',
    title: 'India GCC Account Intelligence & Executive Multi-Touch Cadence',
    subtitle: 'Navigating the 51-Account GCC Corridor and Executing Why-Now Outreach',
    duration: '60 mins',
    difficulty: 'Advanced',
    targetAudience: 'Enterprise Account Executives, GCC Practice Leads, Outbound SDRs',
    coreCompetency: 'Enterprise Account Planning & Multi-Touch Pipeline Generation',
    summary:
      'Master the 51-account target matrix (J&J, AstraZeneca, GSK, Novartis, Roche, Sanofi, Medtronic MEIC, Philips, Siemens). Learn how to leverage live corporate triggers (campus expansions, GxP leadership hires) and execute the 6-touch outreach cadence.',
    learningObjectives: [
      'Navigate the 51-account target matrix and prioritize P0 (Act-Now) vs P1 (High) opportunities.',
      'Match corporate triggers (e.g. AstraZeneca Rs 166 Cr expansion) to the right productized entry wedge.',
      'Execute the 6-touch executive outreach cadence from Day 0 LinkedIn peer note to Day 30 breakup note.',
      'Conduct executive discovery using the 5 productized GCC offers (UDI Sprint, SaMD Assurance, CSV/GAMP5).',
    ],
    keyFrameworks: [
      {
        name: 'The 5 Productized GCC Entry Wedges',
        summary: 'Packaged solutions designed for fast procurement sign-off without enterprise RFP friction.',
        bullets: [
          '1. MedTech Engineering Health Check ($8k–$15k, ~1 wk): Scored design-control & submission readiness diagnostic.',
          '2. UDI Sprint ($25k–$60k, 6 wks): GUDID & EUDAMED compliant data packs for one device family.',
          '3. SaMD Assurance Pack ($40k–$90k, ~8 wks): Complete IEC 62304 Class B/C verification evidence.',
          '4. Design-Control Accelerator ($60k–$120k, ~11 wks): Audit-ready DHF & ISO 14971 risk files.',
          '5. Bespoke Engineering Pod ($30k–$50k/mo): Retained pod of 3–5 dedicated validation and QA specialists.',
        ],
      },
      {
        name: 'The 6-Touch Executive Cadence Architecture',
        summary: 'Systematic multi-channel outreach calibrated for senior GCC Site Heads and VPs.',
        bullets: [
          'Day 0: Warm LinkedIn peer connection note from Kalilur Rahman citing shared industry context.',
          'Day 3: Trigger-led executive email connecting their live announcement to 1 concrete outcome.',
          'Day 8: High-value artefact share (UDI Checklist, QMSR Transition Matrix, SaMD V&V template).',
          'Day 15: Invitation to exclusive peer executive roundtable on Design Controls or GxP Data Integrity.',
          'Day 22: Micro peer case study proof showing 60% acceleration with zero audit findings.',
          'Day 30: Professional breakup / quarterly check-in note resetting accountability.',
        ],
      },
    ],
    interactiveExercise: {
      title: 'Account Strategy Simulation: Crafting an Outreach Strategy for AstraZeneca GCC',
      scenario:
        'AstraZeneca has announced a Rs 166 Crore expansion of their Global Hub in Bangalore, creating 1,200 digital health and GxP data positions. You need to initiate a conversation with their VP of Digital Health & Enterprise Quality.',
      taskInstructions: [
        'Select the ideal entry offer from the 5 productized wedges.',
        'Identify the "Why-Now" trigger.',
        'Draft Day 0 LinkedIn connection note and Day 3 follow-up email tailored to this trigger.',
      ],
      deliverableTemplate: `TARGET ACCOUNT: AstraZeneca Global Innovation Hub (Bangalore)
TARGET PERSONA: VP of Digital Health & GxP Quality
SELECTED ENTRY WEDGE: CSV / GAMP5 Cloud Validation Sprint ($40k–$90k)
WHY-NOW TRIGGER: Rs 166 Cr expansion & rapid scale-up of cloud-hosted digital health workloads.

DAY 0 LINKEDIN NOTE:
"Hi [First Name], congratulations on the Bangalore hub's Rs 166 Cr expansion. As you scale digital health and GxP data workloads across the campus, curious how your team is managing CSV/GAMP5 validation velocity without slowing development squads? Would value connecting with a fellow life sciences leader."

DAY 3 EMAIL TEMPLATE:
Subject: AstraZeneca Bangalore expansion — GAMP5 validation speed
Hi [First Name],
Following your team's announcement of the Rs 166 Cr Bangalore hub scale-up, life sciences VPs frequently tell us that rapid team growth creates a bottleneck in CSV protocol execution and cloud data qualification.

At NovintiX, our Coimbatore engineering core deploys GAMP5-compliant automated validation suites that eliminate manual test scripting. For enterprise expansions like yours, we deliver a scoped CSV Validation Sprint in 6 weeks with zero disruption to active sprints.

Could we schedule a 20-minute discussion next Tuesday at 2 PM IST to share our automated GAMP5 cloud checklist?`,
      rubricCriteria: [
        { criteria: 'Trigger Integration', weight: '30%', standard: 'Effectively mentions the Rs 166 Cr Bangalore expansion.' },
        { criteria: 'Wedge Precision', weight: '35%', standard: 'Correctly matches GAMP5/CSV validation offer to pharma digital hub.' },
        { criteria: 'Tone & Brevity', weight: '35%', standard: 'Executive, consultative tone under 120 words with clear frictionless call to action.' },
      ],
    },
    quiz: [
      {
        question: 'Why are Productized Entry Wedges (like UDI Sprint or SaMD Assurance Pack) superior to generic T&M consulting for landing in India GCCs?',
        options: [
          'They allow NovintiX to bill unlimited hours without deliverables.',
          'They provide fixed scope, clear pricing, and defined deliverables that fit within discretionary budgets without lengthy enterprise RFP cycles.',
          'GCC Site Heads are prohibited from buying software.',
          'Productized offers do not require any delivery work.',
        ],
        correctIndex: 1,
        explanation:
          'Fixed-scope productized offers reduce buyer risk and bypass bureaucratic 6-month enterprise procurement cycles by solving an immediate, urgent bottleneck.',
      },
      {
        question: 'What is the purpose of the Day 30 "Breakup" touchpoint in the executive outreach cadence?',
        options: [
          'To express frustration at the prospect for not answering.',
          'To politely release sales pressure while leaving the door open and prompting fear of missing out, often yielding the highest response rate.',
          'To report the executive to their corporate headquarters.',
          'To remove the account permanently from CRM without follow-up.',
        ],
        correctIndex: 1,
        explanation:
          'A professional breakup note removes sales tension, maintains executive dignity, and frequently triggers replies from busy decision-makers.',
      },
    ],
  },
  {
    id: 'mod-4-regulatory',
    number: '04',
    title: 'MedTech Regulatory Standards Mastery (QMSR, EU MDR, IEC 62304)',
    subtitle: 'Speaking the Language of Regulatory Officers, Quality Directors & Notified Bodies',
    duration: '50 mins',
    difficulty: 'Intermediate',
    targetAudience: 'Consultants, Project Managers, Sales Leads, Technical Specialists',
    coreCompetency: 'Regulatory Literacy & Compliance Articulation',
    summary:
      'Gain fluency in the primary regulatory frameworks governing modern medical devices: the FDA QMSR 2026 transition (21 CFR Part 820 harmonizing with ISO 13485), EU MDR 2017/745 (Technical Documentation & PMCF), and IEC 62304 Software Life Cycle processes.',
    learningObjectives: [
      'Explain the critical shifts in the FDA QMSR (Quality Management System Regulation) transition.',
      'Differentiate ISO 13485 requirements from legacy FDA 21 CFR Part 820 expectations.',
      'Break down IEC 62304 software safety classes (Class A, B, C) and verification requirements.',
      'Guide clients on Post-Market Clinical Follow-up (PMCF) under EU MDR Annex XIV.',
    ],
    keyFrameworks: [
      {
        name: 'FDA QMSR Harmonization Matrix',
        summary: 'Key changes as FDA replaces 21 CFR 820 with ISO 13485:2016 alignment.',
        bullets: [
          'Design Controls: ISO 13485 7.3 harmonized with FDA expectations; emphasis on risk-based design controls.',
          'Risk Management: Direct incorporation of ISO 14971 throughout total product life cycle.',
          'Terminology Shift: "Design History File (DHF)" shifts toward ISO 13485 "Medical Device File (MDF)".',
          'Document Controls: Alignment on electronic signatures under 21 CFR Part 11 remaining legally binding.',
        ],
      },
      {
        name: 'IEC 62304 Software Safety Classification & V&V',
        summary: 'Standardized regulatory requirements for SaMD and embedded firmware.',
        bullets: [
          'Class A: No injury or damage to health possible (requires basic verification).',
          'Class B: Non-serious injury possible (requires detailed unit, integration, and system verification).',
          'Class C: Death or serious injury possible (requires rigorous anomaly tracking, full code coverage, and independent V&V).',
          'ProofX Application: Automates trace mapping from software safety classification down to unit test proof.',
        ],
      },
    ],
    interactiveExercise: {
      title: 'Gap Analysis Drill: Evaluating a Client’s DHF Architecture',
      scenario:
        'A MedTech client is preparing for a Notified Body audit under EU MDR for a Class IIb wearable cardiac monitor. Their engineering team has unit tests passing in GitHub Actions, but their ISO 14971 Risk Analysis was last updated 18 months ago in a separate Word document.',
      taskInstructions: [
        'Identify the critical regulatory non-conformances.',
        'Explain the specific risk of audit refusal by the Notified Body.',
        'Formulate a 4-step remediation plan leveraging NovintiX Quality & Regulatory services.',
      ],
      deliverableTemplate: `REGULATORY GAP ASSESSMENT:
1. Critical Non-Conformance: Disconnect between active software commits and static ISO 14971 Risk Register violates EU MDR General Safety and Performance Requirements (GSPR) 4, 5, and 8.
2. Major Finding Risk: Notified Body will issue a Major Non-Conformance for failure to maintain a living Risk Management File synchronized with design changes.

NOVINTIX 4-STEP REMEDIATION SPRINT (30 DAYS):
• Step 1: Rapid Traceability Extraction — Connect ProofX to client GitHub repository to extract all active functional endpoints.
• Step 2: Risk Register Harmonization — Senior NovintiX RA/QA specialist reconciles ISO 14971 risk mitigations against active code features.
• Step 3: Bi-Directional RTM Generation — Rebuild live Requirements Traceability Matrix linking Hazards → Hazardous Situations → Harms → Software Controls → Verification Records.
• Step 4: Audit Dossier Packaging — Author technical justification memo for the Notified Body demonstrating verified closure of all open hazards.`,
      rubricCriteria: [
        { criteria: 'Regulatory Rigor', weight: '35%', standard: 'Correctly cites ISO 14971 and EU MDR living risk management requirements.' },
        { criteria: 'Consequence Clarity', weight: '30%', standard: 'Accurately predicts Major Non-Conformance audit outcome.' },
        { criteria: 'Remediation Actionability', weight: '35%', standard: 'Provides concrete 30-day timeline with software and practitioner synergy.' },
      ],
    },
    quiz: [
      {
        question: 'Under the FDA QMSR rule, which international standard is directly harmonized into US device regulations?',
        options: [
          'ISO 9001:2015',
          'ISO 13485:2016',
          'ISO 27001:2022',
          'IEEE 829',
        ],
        correctIndex: 1,
        explanation:
          'The FDA Quality Management System Regulation (QMSR) formally harmonizes FDA 21 CFR Part 820 with ISO 13485:2016.',
      },
      {
        question: 'For an IEC 62304 Class C software system, what level of verification is strictly required?',
        options: [
          'Informal verbal sign-off by a developer.',
          'Full verification documentation including software system testing, integration testing, unit verification, and rigorous defect tracking.',
          'Only a user manual review.',
          'No testing is required if the device is low voltage.',
        ],
        correctIndex: 1,
        explanation:
          'Class C systems (where death or serious injury is possible) demand exhaustive, documented verification across all levels with bi-directional traceability.',
      },
    ],
  },
]
