import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { FileText, Shield, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | NovintiX',
  description:
    'Terms of Service governing the use of NovintiX advisory services, software evaluation, and web platform.',
}

export default function TermsPage() {
  return (
    <>
      <SectionWrapper variant="dark" className="pt-28 pb-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-[#00B8A9]/10 text-[#00B8A9] border border-[#00B8A9]/20">
            <FileText className="w-3.5 h-3.5" />
            <span>TERMS &amp; CONDITIONS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Terms of Service
          </h1>
          <p className="text-sm font-mono text-gray-400">
            Last Updated: November 2026 · Governing Professional Services &amp; Platform Access
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light" className="py-16">
        <div className="max-w-4xl mx-auto space-y-12 text-[#0A1B2E]">
          <div className="space-y-4 text-base text-[#6B7A8C] leading-relaxed border-b border-[#E8EDF2] pb-8">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website,
              materials, platforms (including ProofX demonstrations), and advisory services provided by
              NovintiX Inc. and its affiliates (&ldquo;NovintiX,&rdquo; &ldquo;we,&rdquo; or &ldquo;our&rdquo;).
            </p>
            <p>
              By accessing our website or engaging our professional services, you agree to be bound by these
              Terms. If you are entering into these Terms on behalf of an enterprise or legal entity, you
              represent that you have the authority to bind such entity.
            </p>
          </div>

          {/* Section 1: Provision of Services */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              1. Provision of Advisory &amp; Engineering Services
            </h2>
            <div className="space-y-3 text-sm text-[#6B7A8C] leading-relaxed">
              <p>
                NovintiX provides specialized lifecycle consulting, quality system architecture, regulatory
                dossier compilation, clinical evaluations, and computerized system validation services.
              </p>
              <p>
                Specific scopes of work, deliverables, milestones, fee structures, and project timelines are
                formalized through individually executed Statements of Work (&ldquo;SOW&rdquo;) or Master
                Services Agreements (&ldquo;MSA&rdquo;). In the event of any conflict between these general Terms
                and an executed MSA/SOW, the executed MSA/SOW shall prevail.
              </p>
            </div>
          </section>

          {/* Section 2: Regulatory Responsibility & Legal Manufacturer */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              2. Regulatory Standing &amp; Manufacturer Responsibility
            </h2>
            <div className="p-4 bg-[#F7F9FB] rounded-xl border border-[#E8EDF2] space-y-2 text-sm text-[#6B7A8C] leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-[#0A1B2E]">
                <AlertCircle className="w-4 h-4 text-[#FFB454]" />
                <span>Notice on Regulatory Authority and Submission Decisions</span>
              </div>
              <p>
                NovintiX operates as an expert technical consultant, dossier author, and engineering partner.
                Unless explicitly agreed upon in writing under a designated European Authorized Representative
                (EC REP) or US Agent contract, the Client remains the sole Legal Manufacturer (per EU MDR
                Article 10 / 21 CFR Part 803/820) responsible for device release, clinical safety determinations,
                and formal submissions to regulatory agencies.
              </p>
              <p>
                Final acceptance, execution, and regulatory submission of any deliverable authored by NovintiX
                remains the ultimate decision and responsibility of the Client&apos;s authorized management.
              </p>
            </div>
          </section>

          {/* Section 3: Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              3. Intellectual Property Rights
            </h2>
            <div className="space-y-3 text-sm text-[#6B7A8C] leading-relaxed">
              <p>
                <strong className="text-[#0A1B2E]">Client Deliverables:</strong> Upon full payment of applicable fees,
                all bespoke documentation, validation protocols, technical files, test matrices, and reports created
                specifically for the Client under an SOW shall be the sole intellectual property of the Client.
              </p>
              <p>
                <strong className="text-[#0A1B2E]">NovintiX Pre-Existing IP:</strong> NovintiX retains all rights,
                title, and interest in its proprietary methodologies, software frameworks, algorithms, ProofX
                tooling, protocol templates, pre-developed libraries, and training materials developed prior to or
                independently of specific client engagements. NovintiX grants the Client a perpetual, non-exclusive,
                royalty-free license to use any embedded pre-existing IP solely as incorporated into the final deliverables.
              </p>
            </div>
          </section>

          {/* Section 4: Confidentiality */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              4. Confidentiality &amp; Non-Disclosure
            </h2>
            <p className="text-sm text-[#6B7A8C] leading-relaxed">
              Both parties agree to protect all confidential proprietary information, including technical files,
              device blueprints, source code, clinical data, and commercial strategies, with no less than reasonable
              care. Confidential information shall only be disclosed to personnel and subcontractors with a strict
              need to know who are bound by confidentiality obligations at least as restrictive as these Terms.
            </p>
          </section>

          {/* Section 5: Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              5. Limitation of Liability
            </h2>
            <div className="space-y-3 text-sm text-[#6B7A8C] leading-relaxed">
              <p>
                To the maximum extent permitted by applicable law, neither party shall be liable for indirect,
                incidental, consequential, special, or punitive damages (including loss of profits, device launch
                delays, or regulatory clearance timelines), regardless of whether such damages were foreseeable.
              </p>
              <p>
                Except for breaches of confidentiality or gross negligence, NovintiX&apos;s aggregate liability
                arising out of or relating to any engagement shall not exceed the total fees paid by Client to
                NovintiX under the applicable SOW during the twelve (12) months preceding the incident.
              </p>
            </div>
          </section>

          {/* Section 6: Governing Law */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              6. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-sm text-[#6B7A8C] leading-relaxed">
              For engagements contracted through NovintiX Inc. (United States), these Terms shall be governed
              by the laws of the Commonwealth of Pennsylvania, without regard to conflict of laws principles. For
              engagements contracted through NovintiX Europe Ltd., these Terms shall be governed by the laws of
              Ireland, and disputes shall be subject to the exclusive jurisdiction of the Irish courts.
            </p>
          </section>

          {/* Section 7: Inquiries */}
          <section className="space-y-4 border-t border-[#E8EDF2] pt-8">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              7. Legal Notices &amp; Inquiries
            </h2>
            <p className="text-sm text-[#6B7A8C]">
              All formal legal notices under these Terms should be delivered to:
            </p>
            <div className="bg-[#F7F9FB] p-5 rounded-xl border border-[#E8EDF2] text-xs font-mono text-[#0A1B2E]">
              <p className="font-bold">NovintiX Legal &amp; Contracts Department</p>
              <p>Email: legal@novintix.com</p>
              <p>NovintiX Inc., 100 Eagleview Blvd, Suite 300, Exton, PA 19341</p>
            </div>
          </section>
        </div>
      </SectionWrapper>
    </>
  )
}
