export type PlaybookStage = {
  step: string
  name: string
  duration: string
  pricing: string
  badge: string
  objective: string
  mechanisms: string[]
  proofxRole: string
  transitionTrigger: string
}

export const playbookStages: PlaybookStage[] = [
  {
    step: 'Stage 1',
    name: 'Land Wedge (Scoped Pilot)',
    duration: '30 Days',
    pricing: '$15,000 – $30,000 (Fixed Fee)',
    badge: 'Low-Risk Entry',
    objective: 'Land on one scoped device family, subsystem, or digital health module to prove automated evidence generation without operational friction.',
    mechanisms: [
      'Scope down to a single high-visibility pain point (e.g. V&V backlog, UDI data gap, or CSV cloud qualification)',
      'Zero deep infrastructure disruption: connect ProofX via non-invasive API connectors to Jira/Polarion/GitHub',
      'Conduct 10-day initial discovery and baseline verification speed audit',
      'Deliver working ProofX automated traceability proof-of-concept within 30 days',
    ],
    proofxRole: 'Automated test record capture and real-time IEC 62304 / GAMP5 matrix generation.',
    transitionTrigger: 'Verification report delivered 60% faster with zero audit non-conformances.',
  },
  {
    step: 'Stage 2',
    name: 'Automation Proof & Value Benchmark',
    duration: 'Weeks 4 – 8',
    pricing: 'Included in Pilot / Sprint',
    badge: 'Quantified ROI',
    objective: 'Quantify undeniable ROI for GCC leadership and global sponsors before proposal for expansion.',
    mechanisms: [
      'Measure baseline metrics: Hours saved per engineer, reduction in rework cycles, audit-readiness latency',
      'Present C-level benchmark report: "How NovintiX ProofX Compressed Submission Velocity by 60%"',
      'Secure executive endorsement from India GCC Site Head and VP Engineering',
      'Identify 2–3 adjacent device programs or software squads for expansion',
    ],
    proofxRole: 'Executive analytics dashboard showing continuous compliance velocity and time saved.',
    transitionTrigger: 'Global QA & GCC Director sign-off on expanding tool across squads.',
  },
  {
    step: 'Stage 3',
    name: 'Team Expansion (Seat Licenses)',
    duration: 'Quarter 2',
    pricing: '$1,500 – $3,000 / seat / year (25–100 seats)',
    badge: 'Squad Scaling',
    objective: 'Expand ProofX software across all software and V&V squads in the India center.',
    mechanisms: [
      'Roll out ProofX developer & tester seat licenses across active engineering squads',
      'Train internal GCC software engineers on automated regulatory evidence workflows',
      'Standardize unified test evidence templates across hybrid offshore-onshore teams',
      'Integrate with enterprise SSO, ALM, and corporate PLM environments',
    ],
    proofxRole: 'Daily operational ALM companion ensuring every code commit and test run is audit-stamped.',
    transitionTrigger: 'Seat count exceeds 50 users or team demands dedicated regulatory staffing support.',
  },
  {
    step: 'Stage 4',
    name: 'Enterprise Platform & Retained Pod',
    duration: 'Annual Retained',
    pricing: '$120,000 – $400,000 / yr + $30,000 – $50,000 / mo Pod',
    badge: 'Permanent Partnership',
    objective: 'Consolidate NovintiX as the permanent strategic MedTech lifecycle partner with multi-million dollar annual account value.',
    mechanisms: [
      'Multi-year enterprise platform license covering all GCC product lines and business units',
      'Embedded NovintiX Engineering Pod (3–5 senior specialists) managing continuous compliance',
      'Direct participation in Notified Body audits and FDA pre-submission meetings',
      'Strategic advisory seat on GCC Technology & Quality governance board',
    ],
    proofxRole: 'Core enterprise compliance backbone across the global organization.',
    transitionTrigger: 'Permanent multi-year partnership with continuous expansion into new device franchises.',
  },
]

export const competitiveMatrix = [
  {
    capability: 'Domain Specialization',
    novintix: '100% pure-play MedTech & GxP Life Sciences',
    itGiants: 'Generic IT conglomerates (BFSI, Retail, Telecom)',
    inHouse: 'Deep institutional knowledge, but stretched thin across multiple fires',
  },
  {
    capability: 'Regulatory Rigor (QMSR, MDR, 62304)',
    novintix: 'Dedicated MedTech systems architects & former auditors',
    itGiants: 'Junior IT staff trained on generic QA/QC checklists',
    inHouse: 'Strong regulatory awareness, but manual documentation bottleneck',
  },
  {
    capability: 'Automation Technology',
    novintix: 'Proprietary ProofX automated CI/CD evidence platform',
    itGiants: 'Manual Word/Excel testing protocols billed by the hour',
    inHouse: 'Custom spreadsheets and fragile internal Python scripts',
  },
  {
    capability: 'Time to Value / Deployment',
    novintix: '1–6 weeks fixed-scope productized sprint delivery',
    itGiants: '3–6 months RFP procurement cycles with large team bloat',
    inHouse: '6–9 months recruitment cycle for rare specialized talent',
  },
  {
    capability: 'Commercial Alignment',
    novintix: 'Fixed-fee outcome sprints + predictable ARR SaaS',
    itGiants: 'Time & Materials billing: perverse incentive to bill more hours',
    inHouse: 'Fixed high overhead and expensive onshore contractor rates',
  },
]

export const objectionBattlecards = [
  {
    id: 'alm-tools',
    objection: '"We already use Polarion / Jira / Azure DevOps for ALM."',
    counter: 'ProofX does not replace your ALM — it is a specialized regulatory layer that plugs directly into Polarion, Jira, and Azure DevOps via native webhooks. Instead of your engineers manually copying test results into compliance matrices, ProofX automatically pulls execution data, verifies 21 CFR Part 11 integrity, and compiles the submission-ready DHF with zero double-entry.',
  },
  {
    id: 'global-hq',
    objection: '"Our global corporate HQ handles all regulatory submissions."',
    counter: 'That is exactly why GCCs partner with NovintiX. Global RA depends on India for engineering verification evidence. When evidence packets from the GCC arrive with traceability gaps or unformatted test logs, submissions stall. NovintiX ensures the engineering evidence generated in India is 100% audit-ready before it ever reaches global RA, turning the India center into an indispensable high-velocity asset.',
  },
  {
    id: 'security-ip',
    objection: '"We have strict IP and cloud security policies for medical devices."',
    counter: 'ProofX is architected with enterprise-grade security for medical device R&D. It can be deployed in your private AWS/Azure tenant (VPC deployment) or on-premise air-gapped environments. Source code and proprietary algorithms never leave your security perimeter — ProofX only processes test execution metadata and traceability relationships.',
  },
  {
    id: 'budget-freeze',
    objection: '"We don\'t have budget for new vendors or platforms this quarter."',
    counter: 'Our entry wedges (such as the $8k–$15k Health Check or $25k UDI Sprint) are specifically structured to fit under departmental discretionary spending thresholds, requiring no complex RFP or procurement escalation. We prove measurable ROI (60% time compression) within 30 days, creating the hard business case for leadership funding.',
  },
]
