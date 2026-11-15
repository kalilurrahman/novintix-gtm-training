import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { ShieldCheck, Mail, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | NovintiX',
  description:
    'NovintiX GDPR-compliant privacy policy detailing data protection, lawful basis, data retention, and your rights.',
}

export default function PrivacyPage() {
  return (
    <>
      <SectionWrapper variant="dark" className="pt-28 pb-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-[#00B8A9]/10 text-[#00B8A9] border border-[#00B8A9]/20">
            <Lock className="w-3.5 h-3.5" />
            <span>LEGAL &amp; COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-gray-400">
            Last Updated: November 2026 · GDPR &amp; UK-GDPR Ready
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light" className="py-16">
        <div className="max-w-4xl mx-auto space-y-12 text-[#0A1B2E]">
          {/* Introduction */}
          <div className="space-y-4 text-base text-[#6B7A8C] leading-relaxed border-b border-[#E8EDF2] pb-8">
            <p>
              At NovintiX (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we take data protection and
              confidentiality with the highest level of regulatory seriousness. Operating in the medical
              technology, quality assurance, and life sciences consulting sectors, we apply stringent data
              governance principles to protect your personal and organizational information.
            </p>
            <p>
              This Privacy Policy explains how NovintiX collects, processes, protects, and retains your data
              when you visit our website (novintix.com), interact with our digital tools, or engage our
              advisory services.
            </p>
          </div>

          {/* Section 1: Data Controller */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              1. Data Controller
            </h2>
            <p className="text-sm text-[#6B7A8C] leading-relaxed">
              The primary data controller responsible for the processing of your personal data is:
            </p>
            <div className="bg-[#F7F9FB] border border-[#E8EDF2] rounded-xl p-5 text-sm space-y-1.5 font-mono text-[#0A1B2E]">
              <p className="font-bold">NovintiX Inc.</p>
              <p>100 Eagleview Boulevard, Suite 300</p>
              <p>Exton, PA 19341, United States</p>
              <p className="pt-2 text-xs text-[#6B7A8C]">
                European Representative: NovintiX Europe Ltd., 2 Grand Canal Square, Grand Canal Dock, Dublin 2, Ireland
              </p>
              <p className="text-xs text-[#6B7A8C]">
                Data Protection Officer / Inquiries:{' '}
                <a href="mailto:privacy@novintix.com" className="text-[#00B8A9] underline font-semibold">
                  privacy@novintix.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 2: What Data We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              2. What Data We Collect
            </h2>
            <div className="space-y-3 text-sm text-[#6B7A8C] leading-relaxed">
              <p>Depending on how you interact with our platform, we may collect the following categories of data:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#0A1B2E]">Contact and Identification Data:</strong> Full name, professional title, corporate affiliation, business email address, and phone number when requesting a consultation or subscribing to The Lifecycle Brief.
                </li>
                <li>
                  <strong className="text-[#0A1B2E]">Inquiry and Scoping Information:</strong> Project descriptions, device classifications, service interests, and communications transmitted via our consultation inquiry forms.
                </li>
                <li>
                  <strong className="text-[#0A1B2E]">Employment and Candidate Data:</strong> Resumes, CV details, work histories, cover notes, and reference information submitted when applying for open positions.
                </li>
                <li>
                  <strong className="text-[#0A1B2E]">Technical and Usage Telemetry:</strong> Anonymized IP addresses, browser types, operating systems, referring URLs, and interaction timestamps necessary for website performance and security monitoring.
                </li>
              </ul>
              <div className="p-3 bg-[#F7F9FB] rounded-lg border border-[#E8EDF2] text-xs">
                <strong className="text-[#0A1B2E]">Important Note on Patient / Clinical Data:</strong> NovintiX does not collect or process Protected Health Information (PHI) or personal patient records through our public web platform. Any GxP or clinical trial data processed as part of commercial client engagements is handled under separate Business Associate Agreements (BAAs), Data Processing Agreements (DPAs), and strict GxP secure environments.
              </div>
            </div>
          </section>

          {/* Section 3: How We Use It */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              3. How We Use Your Data
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#6B7A8C] leading-relaxed">
              <li>To evaluate and respond to your scoping inquiries and consultation requests.</li>
              <li>To deliver The Lifecycle Brief and relevant regulatory alerts where you have explicitly opted in.</li>
              <li>To evaluate job applicants and manage hiring communication for career opportunities.</li>
              <li>To preserve the cybersecurity, integrity, and operational availability of our website and applications.</li>
              <li>To comply with regulatory, statutory, and legal obligations applicable to professional engineering practices.</li>
            </ul>
          </section>

          {/* Section 4: Lawful Basis */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              4. Lawful Basis for Processing (GDPR Article 6)
            </h2>
            <p className="text-sm text-[#6B7A8C] leading-relaxed">
              We process your personal data under the following recognized legal grounds:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F7F9FB] p-4 rounded-xl border border-[#E8EDF2] space-y-1">
                <h3 className="font-bold text-sm text-[#0A1B2E]">Legitimate Interests</h3>
                <p className="text-xs text-[#6B7A8C]">
                  Processing business inquiries, evaluating corporate partnerships, and securing our systems in a manner that does not override your fundamental privacy rights.
                </p>
              </div>
              <div className="bg-[#F7F9FB] p-4 rounded-xl border border-[#E8EDF2] space-y-1">
                <h3 className="font-bold text-sm text-[#0A1B2E]">Consent</h3>
                <p className="text-xs text-[#6B7A8C]">
                  When you voluntarily subscribe to our newsletter (The Lifecycle Brief) or opt into non-essential cookies. You may revoke consent at any time.
                </p>
              </div>
              <div className="bg-[#F7F9FB] p-4 rounded-xl border border-[#E8EDF2] space-y-1">
                <h3 className="font-bold text-sm text-[#0A1B2E]">Contractual Necessity</h3>
                <p className="text-xs text-[#6B7A8C]">
                  Taking preliminary steps at your request prior to entering into a master services agreement (MSA) or statement of work (SOW).
                </p>
              </div>
              <div className="bg-[#F7F9FB] p-4 rounded-xl border border-[#E8EDF2] space-y-1">
                <h3 className="font-bold text-sm text-[#0A1B2E]">Legal Obligation</h3>
                <p className="text-xs text-[#6B7A8C]">
                  Compliance with statutory tax, corporate governance, and medical device record preservation mandates.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Data Retention */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              5. Data Retention
            </h2>
            <p className="text-sm text-[#6B7A8C] leading-relaxed">
              We retain personal data only for as long as necessary to fulfill the purposes for which it was
              collected. Inquiry records and consultation correspondences are retained for 3 years following our
              last communication, unless converted into active client engagements subject to statutory GxP retention
              periods (typically 10 to 15 years per EU MDR and FDA QMSR documentation requirements). Candidate resumes
              are retained for up to 12 months with consent.
            </p>
          </section>

          {/* Section 6: Your Rights */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              6. Your Rights Under GDPR &amp; Global Privacy Laws
            </h2>
            <p className="text-sm text-[#6B7A8C] leading-relaxed">
              If you reside in the European Economic Area (EEA), United Kingdom, or Switzerland, you possess the
              following statutory rights under the GDPR:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white border border-[#E8EDF2] rounded-lg">
                <strong className="text-[#0A1B2E] block mb-1">• Right of Access:</strong>
                Request confirmation and a copy of the personal data we hold about you.
              </div>
              <div className="p-3 bg-white border border-[#E8EDF2] rounded-lg">
                <strong className="text-[#0A1B2E] block mb-1">• Right to Rectification:</strong>
                Request immediate correction of inaccurate or incomplete personal records.
              </div>
              <div className="p-3 bg-white border border-[#E8EDF2] rounded-lg">
                <strong className="text-[#0A1B2E] block mb-1">• Right to Erasure (&ldquo;Right to Be Forgotten&rdquo;):</strong>
                Request deletion of your data when retention is no longer legally justified.
              </div>
              <div className="p-3 bg-white border border-[#E8EDF2] rounded-lg">
                <strong className="text-[#0A1B2E] block mb-1">• Right to Data Portability:</strong>
                Receive your data in a structured, commonly used, and machine-readable format.
              </div>
              <div className="p-3 bg-white border border-[#E8EDF2] rounded-lg">
                <strong className="text-[#0A1B2E] block mb-1">• Right to Object:</strong>
                Object at any time to data processed on the grounds of legitimate interest or direct marketing.
              </div>
              <div className="p-3 bg-white border border-[#E8EDF2] rounded-lg">
                <strong className="text-[#0A1B2E] block mb-1">• Right to Restriction:</strong>
                Request that we suspend processing while a dispute regarding accuracy is resolved.
              </div>
            </div>
            <p className="text-xs text-[#6B7A8C] pt-2">
              To exercise any of these rights, email{' '}
              <a href="mailto:privacy@novintix.com" className="text-[#00B8A9] font-medium underline">
                privacy@novintix.com
              </a>
              . We respond within 30 days without charge.
            </p>
          </section>

          {/* Section 7: Cookies */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              7. Cookies &amp; Tracking Technologies
            </h2>
            <p className="text-sm text-[#6B7A8C] leading-relaxed">
              Our website uses strictly necessary cookies to enable site navigation and core functionality,
              as well as lightweight, privacy-preserving performance metrics. We do not engage in invasive
              third-party cross-site behavioural tracking. For comprehensive details, please review our dedicated{' '}
              <a href="/cookies" className="text-[#00B8A9] underline font-medium">
                Cookie Policy
              </a>
              .
            </p>
          </section>

          {/* Section 8: Contact DPA */}
          <section className="space-y-4 border-t border-[#E8EDF2] pt-8">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              8. Contact Our Data Protection Authority (DPA)
            </h2>
            <p className="text-sm text-[#6B7A8C] leading-relaxed">
              If you have inquiries, concerns, or complaints regarding how we handle your personal data, you
              are encouraged to contact our privacy team first:
            </p>
            <div className="bg-[#F7F9FB] p-5 rounded-xl border border-[#E8EDF2] text-xs font-mono text-[#0A1B2E] space-y-1">
              <p className="font-bold">NovintiX Data Protection Office</p>
              <p>Email: privacy@novintix.com</p>
              <p>Subject Line: &ldquo;GDPR Data Subject Request&rdquo;</p>
            </div>
            <p className="text-xs text-[#6B7A8C]">
              You also have the right under EU law to lodge a complaint directly with your local supervisory authority,
              such as the Data Protection Commission (DPC) in Ireland (dataprotection.ie).
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  )
}
