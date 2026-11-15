'use client'

import { useState } from 'react'

const steps = [
  {
    num: 1,
    title: 'Requirements In',
    desc: 'Import your design controls, software requirements, and risk items directly from your PLM or requirements management system.',
    mock: `$ proofx import --source jama --project NX-2024-001
✓ Connected to Jama Software (v8.x)
✓ Fetched 847 requirements across 12 modules
✓ Mapped 234 risk items from ISO 14971 register
✓ Linked 56 design inputs → design outputs
→ Ready for AI test generation`,
  },
  {
    num: 2,
    title: 'AI Test Generation',
    desc: 'ProofX AI analyses your requirements and generates IEC 62304-compliant test cases, covering boundary conditions and regulatory intent.',
    mock: `[ProofX AI] Analysing REQ-SW-0421: "Device shall not accept
  input values outside calibrated range 0–1000 mmHg"

Generated test cases:
  TC-0421-001  Boundary: input = 0 mmHg       [PASS]
  TC-0421-002  Boundary: input = 1000 mmHg    [PASS]
  TC-0421-003  Out-of-range: input = -1 mmHg  [FAIL → blocked]
  TC-0421-004  Out-of-range: input = 1001     [FAIL → blocked]
  TC-0421-005  Null / empty input             [FAIL → blocked]
✓ 5 test cases generated for REQ-SW-0421`,
  },
  {
    num: 3,
    title: 'Auto-Traceability Matrix',
    desc: 'Every test case is automatically linked to its parent requirement and downstream risk control, generating a live RTM with zero manual effort.',
    mock: `┌─────────────────┬──────────────┬──────────┬──────────┐
│ Requirement     │ Test Case    │ Result   │ Risk Ctrl│
├─────────────────┼──────────────┼──────────┼──────────┤
│ REQ-SW-0421     │ TC-0421-001  │ PASS ✓   │ RC-014   │
│ REQ-SW-0421     │ TC-0421-002  │ PASS ✓   │ RC-014   │
│ REQ-SW-0421     │ TC-0421-003  │ PASS ✓   │ RC-014   │
│ REQ-HW-0088     │ TC-0088-001  │ PASS ✓   │ RC-007   │
│ REQ-HW-0088     │ TC-0088-002  │ PASS ✓   │ RC-007   │
└─────────────────┴──────────────┴──────────┴──────────┘
Coverage: 100% | Gaps: 0 | Orphans: 0`,
  },
  {
    num: 4,
    title: 'Human Sign-off',
    desc: 'Reviewers receive a structured sign-off queue. Each decision is timestamped, identity-verified, and stored as 21 CFR Part 11-compliant e-signature.',
    mock: `[Sign-off Queue] 3 items pending your review

  #1  TC-0421-001  → Dr. Patel [APPROVED] 2024-11-14 09:12 UTC
        Sig: SHA-256:a3f8...  CFR11: ✓ compliant
  #2  TC-0421-002  → Dr. Patel [APPROVED] 2024-11-14 09:14 UTC
        Sig: SHA-256:b7e2...  CFR11: ✓ compliant
  #3  TC-0088-001  → J. Smith  [PENDING] ← awaiting

  Audit trail locked. Tamper-evident log active.`,
  },
  {
    num: 5,
    title: 'Audit Pack Export',
    desc: 'One click generates a complete, audit-ready DHF evidence package — formatted for FDA 510(k), CE mark, or MDR technical file submission.',
    mock: `$ proofx export --format fda-510k --dossier NX-2024-001

Building audit pack...
  ✓ RTM (Requirements Traceability Matrix)   [42 pages]
  ✓ Test Execution Records                   [128 pages]
  ✓ Anomaly / Defect Log                     [8 pages]
  ✓ E-Signature Manifest (21 CFR Part 11)    [3 pages]
  ✓ Risk Summary (ISO 14971)                 [15 pages]
  ✓ Software Level Classification (IEC 62304)[4 pages]

→ NX-2024-001-AuditPack-v1.2.pdf  [200 pages]
✓ Ready for submission`,
  },
]

export default function ProofXTour() {
  const [activeStep, setActiveStep] = useState(0)
  const step = steps[activeStep]

  return (
    <div className="mt-12">
      {/* Step tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {steps.map((s, i) => (
          <button
            key={s.num}
            onClick={() => setActiveStep(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              i === activeStep
                ? 'bg-[#00B8A9] text-white border-[#00B8A9]'
                : 'bg-transparent text-white/60 border-white/20 hover:border-[#00B8A9] hover:text-white'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                i === activeStep ? 'bg-white text-[#00B8A9]' : 'bg-white/10 text-white/60'
              }`}
            >
              {s.num}
            </span>
            {s.title}
          </button>
        ))}
      </div>

      {/* Step content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#00B8A9] flex items-center justify-center text-white font-bold text-sm">
              {step.num}
            </span>
            <h3 className="text-xl font-semibold text-white font-display">{step.title}</h3>
          </div>
          <p className="text-white/70 leading-relaxed">{step.desc}</p>
        </div>

        {/* Terminal mockup */}
        <div className="rounded-lg overflow-hidden border border-white/10">
          <div className="bg-white/10 px-4 py-2 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
            <span className="ml-2 text-white/40 text-xs font-mono">proofx — terminal</span>
          </div>
          <div className="bg-black/40 p-4">
            <pre className="text-[#00B8A9] text-xs font-mono leading-relaxed whitespace-pre-wrap break-words">
              {step.mock}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
