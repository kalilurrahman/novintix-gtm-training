export type CadenceStep = {
  day: number
  touchpoint: string
  channel: 'LinkedIn' | 'Email' | 'Event' | 'Content' | 'Breakup'
  action: string
  template: string
}

export const outreachCadence: CadenceStep[] = [
  {
    day: 0,
    touchpoint: 'Touch 1 — Warm Peer Connection',
    channel: 'LinkedIn',
    action: 'Send personalised LinkedIn message from Kalilur / practice lead referencing shared industry context or recent GCC expansion milestone.',
    template: `Hi {{firstName}},

Noticed the impressive expansion of your engineering and quality footprint at {{company}}'s {{gccCity}} center.

Having spent 20+ years navigating FDA and EU MDR lifecycle hurdles across global MedTech leaders, I know the friction between accelerated software release velocity and audit-ready V&V documentation.

We recently helped a peer MedTech team compress their 510(k) V&V evidence cycle by 60% using our ProofX platform without expanding headcount.

Would welcome connecting to share notes on how GCC leaders are handling the QMSR transition this year.

Best regards,
Kalilur`,
  },
  {
    day: 3,
    touchpoint: 'Touch 2 — Trigger-Led Value Email',
    channel: 'Email',
    action: 'Send trigger-led email tying current regulatory deadlines (e.g. FDA QMSR 2026 or EU MDR transition) directly to their GCC focus area with a concise 20-minute call proposal.',
    template: `Subject: {{company}} GCC: Accelerating {{entryOffer}} timeline

Hi {{firstName}},

Following up on my LinkedIn note. With FDA's QMSR now live and EU MDR enforcement intensifying, several GCC leaders in {{gccCity}} have mentioned that cross-functional handoffs between local development teams and global regulatory affairs are slowing release velocity.

Specifically for {{company}}, our {{entryOffer}} targets this exact gap:
• 60% faster test-to-traceability turnaround
• Zero audit-trail remediation cycles
• Fully automated FDA/ISO-compliant evidence export directly from your existing ALM tools

Do you have 20 minutes this Thursday or Friday to benchmark your team's current V&V evidence workflow?

Best regards,
Kalilur`,
  },
  {
    day: 8,
    touchpoint: 'Touch 3 — Value-First Artefact Delivery',
    channel: 'Content',
    action: 'Share an actionable diagnostic checklist or playbook artefact (UDI, CSV/GAMP5, or SaMD Readiness) without requiring a meeting.',
    template: `Subject: Resource: {{entryOffer}} Diagnostic Checklist for {{company}}

Hi {{firstName}},

Even if now is not the right time for a discussion, I wanted to share this practical resource our regulatory engineering team put together:

[Download: The 2026 MedTech GCC Compliance & V&V Audit Readiness Checklist]

It highlights the top 5 documentation vulnerabilities notified bodies and FDA inspectors are actively flagging in remote R&D and GCC deliverables:
1. Disconnected dFMEA risk-to-test traceability
2. Cloud GxP qualification gaps under GAMP5 / CSA
3. Missing automated audit trail verification in automated test runs
4. Inconsistent UDI-DI/PI mapping across regional ERP systems
5. Inadequate formative usability validation data

Hope this provides immediate value to your engineering and QA leads in {{gccCity}}.

Warm regards,
Kalilur`,
  },
  {
    day: 15,
    touchpoint: 'Touch 4 — Executive Peer Roundtable Invite',
    channel: 'Event',
    action: 'Invite the executive to a closed-door, Chatham House rule peer roundtable on Design Controls, UDI, or GxP Data Integrity.',
    template: `Subject: Invitation: MedTech GCC Leaders Roundtable (Closed Door)

Hi {{firstName}},

On the 25th of this month, NovintiX is hosting a private virtual roundtable for MedTech and Life Sciences GCC heads across Bangalore, Hyderabad, and Pune.

Topic: "De-risking FDA QMSR & MDR Software Submissions from Indian R&D Centers"
Format: 45 minutes, Chatham House rule, strictly VP/Director peer exchange (no vendor pitching).

We already have confirmed participation from digital health and QA leads at three top-10 MedTech organizations.

We have reserved a seat for {{company}}'s leadership. Would you or your VP of Quality/Engineering be open to joining the discussion?

Best regards,
Kalilur`,
  },
  {
    day: 22,
    touchpoint: 'Touch 5 — Peer Case Study Proof',
    channel: 'Content',
    action: 'Send a targeted 1-page case study demonstrating tangible metrics (timeline compression, zero 483s) achieved for a direct industry peer.',
    template: `Subject: Case study: How a global OEM cut 510(k) V&V timeline by 60%

Hi {{firstName}},

Wanted to share a quick 2-minute read on how a global medical device manufacturer resolved the exact bottleneck your team may be navigating in {{gccCity}}.

The challenge: 18+ month backlog in technical documentation and V&V evidence generation across distributed software teams.
The approach: Deployed NovintiX embedded validation engineers with ProofX automated traceability.
The outcome:
• 60% reduction in submission timeline
• First-time acceptance with zero technical deficiencies
• Auditable traceability across 1,400+ requirements in under 8 weeks

Here is the full breakdown: [Link to Case Study]

Happy to walk through how we could replicate this for {{company}}'s current product roadmap.

Best,
Kalilur`,
  },
  {
    day: 30,
    touchpoint: 'Touch 6 — Breakup / Quarterly Check-in Note',
    channel: 'Breakup',
    action: 'Send a professional, low-pressure breakup note giving them an easy out while leaving the door open for future quarterly planning cycles.',
    template: `Subject: Stepping back / {{company}} priorities

Hi {{firstName}},

I haven't heard back, which usually means one of two things:
1. Your team already has a rock-solid, automated pipeline for {{entryOffer}} and audit readiness.
2. Timing just isn't right given other pressing strategic initiatives.

If it's the latter, I will step back for now so I don't clutter your inbox. We will keep publishing our quarterly MedTech Regulatory Watch updates, which you can access anytime.

If your priorities shift ahead of your next regulatory submission or GCC expansion milestone, please feel free to reconnect.

Wishing you and the {{company}} team continued success.

Warm regards,
Kalilur`,
  },
]
