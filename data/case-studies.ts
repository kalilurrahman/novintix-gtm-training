export type CaseStudy = {
  id: string
  client: string
  industry:
    | 'Medical Devices'
    | 'Pharmaceuticals'
    | 'Biotechnology'
    | 'Diagnostics'
    | 'Digital Health'
    | 'Combination Products'
  challenge: string
  solution: string
  metric: string
  metricLabel: string
  services: string[] // service slugs
  tags: string[]
  featured: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-001',
    client: 'Global OEM',
    industry: 'Medical Devices',
    challenge:
      'A global Class II device OEM faced a 510(k) submission timeline of 18+ months due to DHF gaps, missing V&V data, and an unstructured technical file. With a competitor product gaining market share, every week of delay had direct revenue consequences.',
    solution:
      'NovintiX embedded a cross-functional team covering Quality & Regulatory and Product Engineering. We conducted a DHF completeness audit, closed V&V gaps using our structured protocol library, rebuilt the predicate analysis, and assembled the full 510(k) package using our submission workflow.',
    metric: '60%',
    metricLabel: 'reduction in 510(k) submission timeline',
    services: ['quality-regulatory', 'product-engineering'],
    tags: ['510(k)', 'DHF', 'V&V', 'FDA', 'Class II'],
    featured: true,
  },
  {
    id: 'cs-002',
    client: 'European Device Manufacturer',
    industry: 'Medical Devices',
    challenge:
      "An established European manufacturer had a portfolio of 14 legacy MDD-certified devices requiring EU MDR transition. Their initial internal roadmap projected 18 months to complete the transition — a timeline that risked missing notified body application deadlines under EU Regulation 2023/607.",
    solution:
      'NovintiX conducted a portfolio risk stratification, prioritised devices by revenue and clinical risk, and created a parallel-track technical file remediation programme. We authored SSCP documents, updated clinical evaluations with PMCF plans, and managed the notified body application process end to end.',
    metric: '11 months',
    metricLabel: 'vs. 18-month projected roadmap',
    services: ['quality-regulatory', 'clinical-affairs'],
    tags: ['EU MDR', 'MDR Transition', 'Technical File', 'SSCP', 'Notified Body'],
    featured: false,
  },
  {
    id: 'cs-003',
    client: 'SaMD Startup',
    industry: 'Digital Health',
    challenge:
      'A digital health startup had developed an AI-powered triage decision-support tool but lacked the IEC 62304-compliant V&V evidence package required for their FDA De Novo submission. Their development team had no experience with regulated software documentation.',
    solution:
      "NovintiX deployed the ProofX V&V platform to integrate with the startup's existing CI/CD pipeline. We automated test evidence capture, generated the traceability matrix from user needs through to test results, and authored the software V&V summary report in FDA submission format — all within 8 weeks.",
    metric: '8 weeks',
    metricLabel: 'to IEC 62304-compliant V&V evidence package',
    services: ['digital-ai'],
    tags: ['SaMD', 'IEC 62304', 'ProofX', 'V&V', 'AI/ML', 'De Novo'],
    featured: true,
  },
  {
    id: 'cs-004',
    client: 'Contract Manufacturer',
    industry: 'Medical Devices',
    challenge:
      'A contract device manufacturer was preparing for their first FDA facility inspection following a site expansion that added new cleanroom space and manufacturing equipment. Previous inspections at a sister site had yielded multiple 483 observations related to process validation and equipment qualification.',
    solution:
      'NovintiX conducted a pre-inspection mock audit, identified 23 readiness gaps, and executed a 12-week remediation programme covering IQ/OQ/PQ documentation, cleaning validation, and batch record updates. We provided front-room and back-room support during the actual FDA inspection.',
    metric: '0',
    metricLabel: 'FDA observations on first inspection',
    services: ['manufacturing'],
    tags: ['FDA Inspection', 'GMP', 'Process Validation', 'IQ/OQ/PQ', 'Cleanroom'],
    featured: false,
  },
  {
    id: 'cs-005',
    client: 'Global Diagnostics Company',
    industry: 'Diagnostics',
    challenge:
      'A diagnostics company with 400+ device variants across 12 product families needed to submit UDI records to both GUDID (FDA) and EUDAMED simultaneously ahead of a regulatory deadline. Their internal team had no UDI submission experience and their ERP data was inconsistent across product lines.',
    solution:
      'NovintiX deployed a dedicated UDI team to audit and clean ERP data, establish a UDI-DI/UDI-PI data model, and create a submission pipeline to both GUDID and EUDAMED. We also authored the labelling update procedure and trained the client team on ongoing UDI record maintenance.',
    metric: '400+',
    metricLabel: 'device variant UDI records submitted in 6 weeks',
    services: ['supply-chain'],
    tags: ['UDI', 'GUDID', 'EUDAMED', 'Labelling', 'EU MDR', 'FDA'],
    featured: false,
  },
  {
    id: 'cs-006',
    client: 'Class III Implant Manufacturer',
    industry: 'Medical Devices',
    challenge:
      'A Class III implant manufacturer needed a Clinical Evaluation Report for their EU MDR technical file. Two previous CER attempts had been rejected by their notified body for insufficient equivalence justification and an inadequate literature search strategy.',
    solution:
      "NovintiX's clinical affairs team redesigned the clinical evaluation plan, executed a systematic literature search across MEDLINE and Embase, rebuilt the equivalence justification with device-level clinical and technical data, and authored a fully restructured CER aligned to MEDDEV 2.7/1 Rev 4 and the notified body's published expectations.",
    metric: '1st submission',
    metricLabel: 'CER accepted by notified body',
    services: ['clinical-affairs'],
    tags: ['CER', 'Clinical Evaluation', 'EU MDR', 'MEDDEV 2.7/1', 'Class III', 'Implant'],
    featured: false,
  },
]
