export type Role = {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Contract'
  hub: 'Exton, PA' | 'Dublin' | 'Coimbatore'
  description: string
  requirements: string[]
  niceToHave: string[]
}

export const openRoles: Role[] = [
  {
    id: 'role-001',
    title: 'Data Architect',
    department: 'Digital & AI',
    location: 'Coimbatore, India',
    type: 'Full-time',
    hub: 'Coimbatore',
    description:
      'Lead the design and implementation of regulatory-compliant data architectures powering ProofX, NovaQMS, and LifelineData. You will define scalable data models, audit trail pipelines, and secure multi-tenant cloud architectures for mission-critical MedTech analytics.',
    requirements: [
      '8+ years of enterprise data architecture and engineering experience',
      'Extensive expertise in distributed database systems, cloud data warehouses (Snowflake, BigQuery), and streaming pipelines',
      'Demonstrated experience with GxP, 21 CFR Part 11, and HIPAA data integrity and security standards',
      'Proficiency in Python, SQL, data modelling, and automated metadata cataloguing',
      'Strong background in designing resilient, audit-proof data lineage and versioning frameworks',
    ],
    niceToHave: [
      'Experience in medical device software or digital health environments',
      'Hands-on experience with vector databases and RAG architectures for regulatory LLMs',
      'Familiarity with ISO 13485 and IEC 62304 software lifecycle requirements',
    ],
  },
  {
    id: 'role-002',
    title: 'ETL Tester',
    department: 'Quality & Validation',
    location: 'Coimbatore, India',
    type: 'Full-time',
    hub: 'Coimbatore',
    description:
      'Ensure absolute data integrity and regulatory validity across enterprise data pipelines, migrations, and integration points. You will author comprehensive test protocols, execute automated data verification suites, and document defect lifecycles in alignment with GAMP5 principles.',
    requirements: [
      '4+ years of dedicated ETL / Data Warehouse testing experience',
      'Advanced SQL scripting capabilities for complex data reconciliations, boundary analysis, and transformation validations',
      'Hands-on experience with automated test frameworks (e.g., Great Expectations, dbt test, Python test suites)',
      'Understanding of data validation protocols, test summaries, and traceability matrices',
      'Strong analytical mindset with high attention to detail in high-consequence environments',
    ],
    niceToHave: [
      'Familiarity with 21 CFR Part 11 audit trails and electronic signature verifications',
      'Experience in clinical data, post-market surveillance data, or ERP migration projects',
      'Familiarity with JIRA, Xray, or Polarion ALM test management',
    ],
  },
  {
    id: 'role-003',
    title: 'Validation Engineer (CSV/GAMP5)',
    department: 'Quality & Regulatory',
    location: 'Coimbatore, India',
    type: 'Full-time',
    hub: 'Coimbatore',
    description:
      'Author, execute, and defend Computer System Validation (CSV) packages for enterprise GxP applications, laboratory systems, and custom software tools. You will apply GAMP5 risk-based methodologies to ensure compliance with FDA QMSR, 21 CFR Part 11, and Annex 11.',
    requirements: [
      '5+ years of CSV / CSA experience within medical devices, biotechnology, or pharmaceuticals',
      'Deep mastery of GAMP5 risk-based validation life cycle (URS, FS, DS, IQ, OQ, PQ, VSR, RTM)',
      'Proven expertise in 21 CFR Part 11 and EU Annex 11 assessment and remediation',
      'Experience authoring validation plans, protocols, deviations, and summary reports',
      'Excellent verbal and written technical communication skills',
    ],
    niceToHave: [
      'Experience transitioning traditional CSV frameworks into modern Computer Software Assurance (CSA)',
      'Validation experience with cloud platforms (AWS/Azure) and SaaS quality management systems',
      'Hands-on experience supporting regulatory inspections or customer audits',
    ],
  },
  {
    id: 'role-004',
    title: 'Quality Engineer (ISO 13485)',
    department: 'Quality & Regulatory',
    location: 'Exton, PA (or Dublin, Ireland)',
    type: 'Full-time',
    hub: 'Exton, PA',
    description:
      'Serve as the key quality partner for client product engineering and manufacturing initiatives. You will establish and maintain ISO 13485 and FDA QMSR compliant processes, lead risk management activities per ISO 14971, oversee design controls, and manage CAPA investigations.',
    requirements: [
      '6+ years of medical device quality engineering experience across Class II / Class III devices',
      'In-depth knowledge of ISO 13485:2016, FDA 21 CFR Part 820 / QMSR, and EU MDR 2017/745',
      'Proven leadership in ISO 14971 risk management (dFMEA, pFMEA, Risk Management Plans & Reports)',
      'Demonstrated experience with design verification and validation (V&V) protocols and design transfer',
      'Track record of managing CAPAs, non-conformances, and supplier quality audits',
    ],
    niceToHave: [
      'ASQ Certified Quality Engineer (CQE) or Lead Auditor certification',
      'Experience supporting 510(k), PMA, or CE technical documentation reviews',
      'Background in human factors engineering (IEC 62366) or sterile packaging validation',
    ],
  },
]
