export type Service = {
  slug: string
  name: string
  tagline: string
  description: string
  painPoints: string[]
  capabilities: { title: string; deliverables: string[] }[]
  regulatoryBadges: string[]
  faqs: { q: string; a: string }[]
  lifecycleStage: 'CONCEPT' | 'DESIGN' | 'MANUFACTURE' | 'COMPLY' | 'SCALE'
  icon: string // lucide icon name
}

export const services: Service[] = [
  {
    slug: 'product-engineering',
    name: 'Product Engineering & Discovery',
    tagline: 'From concept to controlled design — without the DHF debt.',
    description:
      'We embed with your teams at the earliest stage of development to ensure every engineering decision is regulatory-ready. Our structured approach to design controls, risk management, and human factors engineering prevents costly rework and accelerates your path to design freeze.',
    lifecycleStage: 'CONCEPT',
    icon: 'Cpu',
    painPoints: [
      'Regulatory uncertainty at concept stage leaves teams building toward an unclear finish line',
      'Design History File (DHF) gaps discovered late in development cause expensive redesign cycles',
      'Design freeze pressure forces premature decisions that undermine long-term product safety and efficacy',
    ],
    capabilities: [
      {
        title: 'Requirements Engineering',
        deliverables: [
          'User Needs documentation',
          'Design Input traceability matrix',
          'Software requirements specification (SRS)',
          'Requirements review and baselining',
        ],
      },
      {
        title: 'System Architecture',
        deliverables: [
          'Hardware/software architecture definition',
          'Interface control documents',
          'Block diagrams and system decomposition',
          'Architecture risk assessment',
        ],
      },
      {
        title: 'Usability & HFE',
        deliverables: [
          'Formative usability study design and execution',
          'Summative validation protocol and report',
          'Use error analysis and risk controls',
          'HFE report for 510(k)/PMA submission',
        ],
      },
      {
        title: 'Design Controls (21 CFR 820/QMSR)',
        deliverables: [
          'Design and Development Plan (DDP)',
          'Design History File (DHF) structure and population',
          'Design review templates and records',
          'Design transfer checklist',
        ],
      },
      {
        title: 'Risk Management (ISO 14971)',
        deliverables: [
          'Risk management plan',
          'Hazard identification and FMEA/FTA',
          'Risk evaluation and control measures',
          'Residual risk acceptability and risk management report',
        ],
      },
      {
        title: 'Verification & Validation Planning',
        deliverables: [
          'Master Validation Plan (MVP)',
          'V&V protocol authoring and review',
          'Test report templates and traceability',
          'Summary Technical Documentation (STED) support',
        ],
      },
    ],
    regulatoryBadges: ['ISO 14971', '21 CFR Part 820', 'IEC 62304', 'IEC 60601'],
    faqs: [
      {
        q: 'What design controls are required under FDA QMSR?',
        a: "FDA's Quality Management System Regulation (QMSR), effective February 2026, aligns with ISO 13485 and requires a formal design and development process including planning, inputs, outputs, reviews, verification, validation, and design transfer. All design activities must be documented in a Design History File (DHF). Our team helps you establish compliant design controls from day one, so the DHF is built as you design — not reconstructed at the end.",
      },
      {
        q: 'How do you help avoid DHF gaps during development?',
        a: "DHF gaps most commonly arise when engineering teams create records reactively rather than prospectively. We embed a design controls framework at project kickoff, define the required DHF sections up front, and assign documentation responsibilities to each milestone. We also conduct interim DHF audits at key stage gates — giving you an objective view of completeness before FDA or a notified body does.",
      },
      {
        q: 'At what point should we start ISO 14971 risk management?',
        a: 'Risk management under ISO 14971 should begin at concept — not design freeze. Early hazard identification shapes design inputs, informs architecture decisions, and prevents costly late-stage risk controls. We initiate a Risk Management Plan during the concept phase and maintain a living risk file throughout the product lifecycle, satisfying both FDA and EU MDR requirements for ongoing risk management.',
      },
    ],
  },
  {
    slug: 'supply-chain',
    name: 'Supply Chain',
    tagline: 'Build a supply chain your regulators trust as much as you do.',
    description:
      'Regulatory compliance starts with your suppliers. We design and operationalise supply chains that satisfy ISO 13485 and EU MDR supplier control requirements — from initial qualification through ongoing monitoring — giving you full traceability and audit-ready documentation at every tier.',
    lifecycleStage: 'DESIGN',
    icon: 'Network',
    painPoints: [
      'Supplier qualification delays stall product launches and create schedule risk',
      'Component traceability gaps trigger FDA observations and MDR non-conformances',
      'BOM complexity across global supply chains makes change control and obsolescence management unmanageable',
    ],
    capabilities: [
      {
        title: 'Supplier Qualification',
        deliverables: [
          'Supplier evaluation and audit questionnaires',
          'On-site and remote supplier audits',
          'Approved Supplier List (ASL) maintenance',
          'Supplier qualification reports',
        ],
      },
      {
        title: 'BOM Management',
        deliverables: [
          'Multi-level BOM structuring and governance',
          'Change order impact assessment',
          'Obsolescence monitoring and re-qualification planning',
          'BOM traceability to design inputs',
        ],
      },
      {
        title: 'Procurement Strategy',
        deliverables: [
          'Strategic sourcing roadmap',
          'Dual-source and sole-source risk analysis',
          'Supplier negotiation support',
          'Total cost of compliance modelling',
        ],
      },
      {
        title: 'Component Traceability',
        deliverables: [
          'Lot/batch traceability system design',
          'UDI-DI/UDI-PI linkage to component records',
          'Device History Record (DHR) templates',
          'Traceability matrix authoring',
        ],
      },
      {
        title: 'Logistics Optimization',
        deliverables: [
          'Cold chain and controlled storage assessment',
          'Import/export regulatory mapping',
          'Shipping validation protocols',
          'Logistics KPI dashboards',
        ],
      },
      {
        title: 'Risk Mitigation',
        deliverables: [
          'Supply chain risk register',
          'Business continuity and contingency planning',
          'Critical component identification and buffer strategy',
          'Supplier corrective action (SCAR) process design',
        ],
      },
    ],
    regulatoryBadges: ['ISO 13485', '21 CFR Part 820', 'EU MDR Annex IX'],
    faqs: [
      {
        q: 'What does ISO 13485 require for supplier qualification?',
        a: 'ISO 13485 Clause 7.4 requires that organizations evaluate and select suppliers based on their ability to supply products meeting your requirements. This includes defining selection criteria, maintaining an Approved Supplier List (ASL), and re-evaluating suppliers periodically. The extent of control depends on the criticality of the supplied item and its impact on device safety and performance.',
      },
      {
        q: 'How do you ensure UDI compliance across a complex BOM?',
        a: 'We map every component, sub-assembly, and finished device to its Device Identifier (DI) and ensure Production Identifier (PI) data — lot number, serial number, manufacture and expiry dates — is captured in your DHR and ERP system. We also support GUDID and EUDAMED submissions for all device variants, including accessories and software modules that require separate UDI assignment.',
      },
      {
        q: 'What is included in an EU MDR Annex IX supply chain review?',
        a: 'EU MDR Annex IX relates to conformity assessment based on a quality management system. For supply chain, this means your notified body will scrutinize supplier controls, purchasing controls, and traceability. We prepare your supplier file, purchasing procedures, and supplier audit programme to withstand this scrutiny, and we participate in notified body technical file reviews on your behalf.',
      },
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'First-inspection-ready manufacturing — built in, not bolted on.',
    description:
      'Scale with confidence. Our manufacturing excellence team designs, validates, and optimises production processes to satisfy GMP, ISO 13485, and FDA QMSR requirements. From IQ/OQ/PQ to clean room management, we ensure your manufacturing site is audit-ready from day one of production.',
    lifecycleStage: 'MANUFACTURE',
    icon: 'Factory',
    painPoints: [
      'Process validation gaps create FDA 483 observations and delay market entry',
      'GMP compliance requirements are inconsistently applied across production shifts and sites',
      'Scale-up risks — including yield loss, contamination, and process drift — are poorly characterised before launch',
    ],
    capabilities: [
      {
        title: 'Process Validation (IQ/OQ/PQ)',
        deliverables: [
          'Validation Master Plan (VMP)',
          'Installation Qualification (IQ) protocols and reports',
          'Operational Qualification (OQ) protocols and reports',
          'Performance Qualification (PQ) protocols and reports',
        ],
      },
      {
        title: 'GMP Compliance',
        deliverables: [
          'GMP gap assessment and remediation roadmap',
          'Standard Operating Procedures (SOPs) and batch records',
          'Personnel training programmes',
          'GMP audit facilitation and response',
        ],
      },
      {
        title: 'Production Planning',
        deliverables: [
          'Capacity planning and line balancing',
          'Work instructions and travellers',
          'Production scheduling and demand forecasting',
          'OEE monitoring and improvement programmes',
        ],
      },
      {
        title: 'Equipment Qualification',
        deliverables: [
          'User Requirement Specification (URS) authoring',
          'Factory and site acceptance testing (FAT/SAT)',
          'Equipment calibration programme design',
          'Preventive maintenance schedules',
        ],
      },
      {
        title: 'Clean Room Management',
        deliverables: [
          'Clean room classification and monitoring design',
          'Environmental monitoring programme',
          'Gowning and behaviour SOPs',
          'ISO 14644 compliance assessment',
        ],
      },
      {
        title: 'Sterility Assurance',
        deliverables: [
          'Sterilisation process validation (EO, gamma, e-beam)',
          'Bioburden monitoring programme',
          'Sterility assurance level (SAL) calculations',
          'ISO 11135 / ISO 11137 compliance documentation',
        ],
      },
    ],
    regulatoryBadges: ['ISO 13485', '21 CFR Part 820', 'EU MDR', 'ISO 11135'],
    faqs: [
      {
        q: 'What is the difference between IQ, OQ, and PQ?',
        a: "Installation Qualification (IQ) verifies that equipment is installed correctly per manufacturer specifications and site requirements. Operational Qualification (OQ) demonstrates that the equipment operates within defined parameters across its intended operating range. Performance Qualification (PQ) confirms that the process consistently produces a product meeting its predetermined specifications under routine conditions. All three are required for critical manufacturing equipment under FDA QMSR and ISO 13485.",
      },
      {
        q: 'How do you prepare a site for a first FDA inspection?',
        a: "We conduct a pre-inspection mock audit against 21 CFR Part 820 / QMSR requirements, covering all systems: design controls, production and process controls, CAPA, complaints, and records. We identify gaps, prioritise remediation by inspection risk, and work with your team to close them before the inspection window. We also provide front-room and back-room support during the actual inspection.",
      },
      {
        q: 'What GMP documentation is typically missing at scale-up?',
        a: "The most common scale-up documentation gaps we encounter are: insufficient process characterisation data bridging pilot to commercial scale, master batch records that don't reflect commercial equipment parameters, inadequate cleaning validation for multi-product lines, and missing change control records for the scale-up itself. We address all of these in our scale-up readiness assessment.",
      },
    ],
  },
  {
    slug: 'quality-regulatory',
    name: 'Quality & Regulatory Compliance',
    tagline: 'Submission-ready, inspection-proof, always.',
    description:
      'Regulatory affairs and quality management are inseparable. Our dual-qualified team builds QMS systems that satisfy FDA, EU MDR, and global regulators simultaneously — and prepares submissions that move through review without unnecessary back-and-forth.',
    lifecycleStage: 'COMPLY',
    icon: 'ShieldCheck',
    painPoints: [
      'FDA submissions stall in review due to inadequate technical documentation and evidence packages',
      'EU MDR transition remains incomplete for many legacy devices, exposing manufacturers to market withdrawal risk',
      'QMS gaps — particularly in CAPA effectiveness and complaint handling — repeatedly surface at audits',
      'Audit unreadiness results in avoidable observations, warning letters, and remediation costs',
    ],
    capabilities: [
      {
        title: 'QMS Implementation (ISO 13485)',
        deliverables: [
          'ISO 13485 gap assessment',
          'QMS procedure library and document hierarchy',
          'Management review and internal audit programme',
          'Certification body liaison and audit support',
        ],
      },
      {
        title: 'FDA QMSR/510(k)/PMA',
        deliverables: [
          '510(k) predicate analysis and substantial equivalence argument',
          'PMA module authoring and compilation',
          'Q-Sub and Pre-Sub meeting preparation',
          'FDA response management and deficiency resolution',
        ],
      },
      {
        title: 'EU MDR/IVDR',
        deliverables: [
          'Technical File and Summary of Safety and Clinical Performance (SSCP)',
          'EU MDR Article 10 compliance gap assessment',
          'Notified Body selection and application support',
          'Declaration of Conformity and labelling review',
        ],
      },
      {
        title: 'CAPA Management',
        deliverables: [
          'CAPA procedure and form design',
          'Root cause analysis facilitation (5-Why, Fishbone, FMEA)',
          'Effectiveness check protocol design',
          'CAPA trending and metrics dashboards',
        ],
      },
      {
        title: 'Audit Readiness',
        deliverables: [
          'Mock FDA / notified body audit execution',
          'Observation response and corrective action planning',
          'Front-room and back-room inspection support',
          'Post-inspection remediation programme management',
        ],
      },
      {
        title: 'Post-Market Surveillance',
        deliverables: [
          'PMS Plan and PMS Report authoring',
          'Vigilance and MDR reporting procedures',
          'Complaint handling and trend analysis',
          'Signal detection and benefit-risk update process',
        ],
      },
    ],
    regulatoryBadges: [
      'ISO 13485',
      '21 CFR Part 820',
      'EU MDR',
      'EU IVDR',
      '21 CFR Part 11',
      'ISO 14971',
    ],
    faqs: [
      {
        q: 'What changed with FDA QMSR replacing 21 CFR Part 820?',
        a: "FDA's Quality Management System Regulation (QMSR) became effective on February 2, 2026. It incorporates ISO 13485:2016 by reference, meaning compliance with ISO 13485 is now the baseline for FDA GMP compliance. Key practical changes include greater emphasis on risk-based approaches, alignment of terminology with ISO standards, and removal of several prescriptive requirements that are now addressed within the ISO 13485 framework. Existing ISO 13485 certificates do not automatically satisfy QMSR — companies must assess their QMS against the full regulatory text.",
      },
      {
        q: 'How long does a 510(k) submission typically take to prepare?',
        a: "A well-scoped 510(k) for a low-to-moderate complexity device typically requires 12–20 weeks of preparation if V&V data is already complete. The most time-consuming sections are performance testing summaries, substantial equivalence arguments, and biocompatibility documentation. Submissions with incomplete V&V or unclear predicate selection often take 6+ months. Our structured submission workflow and predicate library significantly compress this timeline.",
      },
      {
        q: 'Is our legacy device portfolio at risk under EU MDR?',
        a: "Yes — legacy devices that received CE marking under the Medical Devices Directive (MDD) or Active Implantable Medical Devices Directive (AIMDD) must transition to EU MDR conformity assessment. The extended transition provisions under EU Regulation 2023/607 provide some relief, but all Class IIb and III devices must have a notified body application submitted and accepted to benefit from the extension. We assess your portfolio, classify transition risk by device class, and manage your notified body roadmap.",
      },
    ],
  },
  {
    slug: 'clinical-affairs',
    name: 'Clinical Affairs',
    tagline: 'Clinical evidence that holds up under regulatory scrutiny.',
    description:
      'Clinical evidence is the cornerstone of EU MDR compliance and increasingly central to FDA review. Our clinical affairs team designs and executes clinical evaluation strategies that satisfy MEDDEV 2.7/1 Rev 4, EU MDR Annex XIV, and FDA clinical requirements — first time, every time.',
    lifecycleStage: 'COMPLY',
    icon: 'Stethoscope',
    painPoints: [
      'Clinical Evaluation Report (CER) evidence packages lack the depth and rigour required by notified bodies',
      'Post-Market Clinical Follow-up (PMCF) plans are superficial and fail to demonstrate adequate evidence generation',
      'Clinical trial complexity — protocol design, site selection, ethics submissions — overwhelms lean internal teams',
    ],
    capabilities: [
      {
        title: 'Clinical Evaluation Reports (CER)',
        deliverables: [
          'Clinical evaluation plan (CEP)',
          'Literature search strategy and execution',
          'Equivalent device justification',
          'CER authoring and notified body response management',
        ],
      },
      {
        title: 'PMCF Planning & Execution',
        deliverables: [
          'PMCF Plan compliant with EU MDR Annex XIV Part B',
          'PMCF Study protocol design and ethics submission',
          'Registry participation strategy',
          'PMCF Evaluation Report authoring',
        ],
      },
      {
        title: 'Clinical Trial Support',
        deliverables: [
          'Investigational Device Exemption (IDE) applications',
          'Clinical investigation plan (CIP) authoring',
          'Ethics committee and competent authority submissions',
          'Site initiation, monitoring, and close-out',
        ],
      },
      {
        title: 'Benefit-Risk Analysis',
        deliverables: [
          'Benefit-risk framework design',
          'Clinical benefit identification and quantification',
          'Residual risk acceptability assessment',
          'Benefit-risk section for SSCP and technical file',
        ],
      },
      {
        title: 'Literature Review',
        deliverables: [
          'Systematic literature search (MEDLINE, Embase, Cochrane)',
          'Study quality appraisal and GRADE assessment',
          'Clinical data tabulation and synthesis',
          'State-of-the-art review for equivalent devices',
        ],
      },
      {
        title: 'Regulatory Strategy',
        deliverables: [
          'Clinical development roadmap',
          'Regulatory pathway analysis (510(k), PMA, De Novo, EU MDR)',
          'Pre-submission meeting strategy and preparation',
          'Global regulatory intelligence briefings',
        ],
      },
    ],
    regulatoryBadges: [
      'EU MDR Annex XIV',
      'ISO 14155',
      '21 CFR Part 812',
      'MEDDEV 2.7/1 Rev 4',
    ],
    faqs: [
      {
        q: 'What does a notified body look for in a CER?',
        a: "Under MEDDEV 2.7/1 Rev 4 and EU MDR, notified bodies evaluate whether the CER demonstrates sufficient clinical evidence to confirm safety and performance. Common rejection reasons include: inadequate literature search methodology, over-reliance on equivalent device data without proper equivalence justification, failure to address specific residual risks with clinical evidence, and outdated state-of-the-art assessments. Our CERs are structured to MEDDEV 2.7/1 Rev 4 and benchmarked against leading notified body expectations.",
      },
      {
        q: "What is PMCF and when is it required?",
        a: "Post-Market Clinical Follow-up (PMCF) is a continuous process to collect and evaluate clinical data on a marketed device to confirm its safety and performance, identify emerging risks, and detect rare or long-term adverse events. Under EU MDR Article 83 and Annex XIV Part B, PMCF is mandatory for all CE-marked devices unless the absence of PMCF is duly justified. This is a significant departure from MDD, where PMCF was only required when standard PMS was insufficient.",
      },
      {
        q: 'How does a clinical strategy differ for a 510(k) vs PMA device?',
        a: "For 510(k) devices, clinical data requirements depend on the predicate and substantial equivalence argument. Many 510(k)s rely on bench testing and literature data without clinical studies. PMA devices require valid scientific evidence of safety and effectiveness, typically including at least one well-controlled clinical investigation. De Novo requests and Breakthrough Device designations introduce additional strategic considerations. We build the minimum-sufficient clinical evidence package for each pathway, avoiding over-investment in clinical data while ensuring regulatory acceptance.",
      },
    ],
  },
  {
    slug: 'digital-ai',
    name: 'Digital & AI Hub',
    tagline: 'Regulated AI/ML and digital quality — built on evidence, not assumptions.',
    description:
      'SaMD and AI/ML-enabled devices demand a new standard of evidence. Our Digital & AI Hub combines deep IEC 62304 engineering expertise with our proprietary ProofX V&V platform to deliver the validation evidence regulators require — at the speed digital health companies demand.',
    lifecycleStage: 'SCALE',
    icon: 'BrainCircuit',
    painPoints: [
      'Unvalidated AI/ML models in regulated contexts create significant liability and submission risk',
      'V&V evidence packages for SaMD lack the depth, traceability, and format regulators expect',
      '21 CFR Part 11 compliance for digital quality tools and electronic records is poorly understood and inconsistently implemented',
    ],
    capabilities: [
      {
        title: 'SaMD Development (IEC 62304)',
        deliverables: [
          'Software development plan (SDP)',
          'Software architecture and detailed design documentation',
          'Unit and integration test specifications and reports',
          'Software release and configuration management',
        ],
      },
      {
        title: 'AI/ML Validation',
        deliverables: [
          'AI/ML model card and intended use documentation',
          'Training, tuning, and test dataset governance',
          'Performance evaluation and bias assessment',
          'FDA AI/ML Action Plan alignment review',
        ],
      },
      {
        title: 'ProofX V&V Platform',
        deliverables: [
          'Automated test execution and evidence capture',
          'Traceability matrix generation (requirements → tests → results)',
          'Audit-ready V&V package export',
          'Continuous compliance monitoring dashboards',
        ],
      },
      {
        title: 'NovaQMS Digital QMS',
        deliverables: [
          'Electronic QMS implementation and configuration',
          '21 CFR Part 11 compliance validation',
          'User access control and audit trail review',
          'QMS migration and data integrity assessment',
        ],
      },
      {
        title: 'LifelineData Analytics',
        deliverables: [
          'Real-world evidence (RWE) pipeline design',
          'Post-market data analytics for PMS/PMCF',
          'Signal detection algorithms and threshold setting',
          'Regulatory-grade data reporting',
        ],
      },
      {
        title: 'DocPilot Compliance',
        deliverables: [
          'AI-assisted regulatory document authoring',
          'Template library for 510(k), EU MDR, ISO 13485',
          'Document review and consistency checking',
          'Submission-ready document package assembly',
        ],
      },
    ],
    regulatoryBadges: [
      'IEC 62304',
      'ISO 14971',
      '21 CFR Part 11',
      'EU MDR Article 22',
      'FDA AI/ML Action Plan',
    ],
    faqs: [
      {
        q: 'What IEC 62304 safety class applies to our AI diagnostic software?',
        a: "IEC 62304 assigns software to Class A (no injury), Class B (non-serious injury), or Class C (serious injury or death) based on the severity of harm that could result from a software failure. AI diagnostic software that informs clinical decisions typically falls into Class B or C, requiring progressively more rigorous development and testing activities. The safety class determination must be documented and justified in your software development plan, and it drives the depth of your V&V evidence package.",
      },
      {
        q: 'How does ProofX accelerate SaMD V&V?',
        a: "ProofX is our purpose-built V&V automation platform for regulated software. It integrates with your development environment to capture test execution evidence automatically, generate traceability matrices from requirements to test results, and produce audit-ready V&V packages in formats recognised by FDA reviewers and notified bodies. Clients using ProofX typically compress their V&V evidence cycle from 12–16 weeks to 6–8 weeks, without sacrificing rigour.",
      },
      {
        q: 'What does 21 CFR Part 11 require for a digital QMS?',
        a: "21 CFR Part 11 applies to electronic records and electronic signatures used to satisfy FDA regulatory requirements. For a digital QMS, this means: system validation, audit trails that cannot be disabled or altered, operator identification for every record action, and controls for record integrity. Practically, it requires a validation package for your eQMS software, SOPs for record management, and periodic audit trail reviews. Many off-the-shelf eQMS platforms claim Part 11 compliance but have not been validated in your specific configuration — we address this gap.",
      },
    ],
  },
]
