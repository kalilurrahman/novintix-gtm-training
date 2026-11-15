import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { Cookie, ShieldCheck, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy | NovintiX',
  description:
    'Information regarding how NovintiX utilizes cookies, local storage, and privacy-preserving telemetry on our digital platforms.',
}

const COOKIE_TABLE = [
  {
    name: 'session_id',
    type: 'Strictly Necessary',
    duration: 'Session',
    purpose: 'Maintains user session state and secure request validation across page navigations.',
  },
  {
    name: 'cookie_consent',
    type: 'Strictly Necessary',
    duration: '1 Year',
    purpose: 'Stores your preferences regarding non-essential cookie categories.',
  },
  {
    name: '_nvx_analytics',
    type: 'Performance / Analytics',
    duration: '90 Days',
    purpose: 'Captures aggregated, anonymized page views and navigation paths without personal identifiers.',
  },
  {
    name: 'filter_pref',
    type: 'Functional',
    duration: '30 Days',
    purpose: 'Remembers active filter selections on our case studies and publications directories.',
  },
]

export default function CookiesPage() {
  return (
    <>
      <SectionWrapper variant="dark" className="pt-28 pb-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-[#00B8A9]/10 text-[#00B8A9] border border-[#00B8A9]/20">
            <Cookie className="w-3.5 h-3.5" />
            <span>TRANSPARENCY &amp; PRIVACY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Cookie Policy
          </h1>
          <p className="text-sm font-mono text-gray-400">
            Last Updated: November 2026 · ePrivacy &amp; GDPR Compliant
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light" className="py-16">
        <div className="max-w-4xl mx-auto space-y-12 text-[#0A1B2E]">
          <div className="space-y-4 text-base text-[#6B7A8C] leading-relaxed border-b border-[#E8EDF2] pb-8">
            <p>
              This Cookie Policy explains how NovintiX Inc. (&ldquo;NovintiX,&rdquo; &ldquo;we,&rdquo; or
              &ldquo;our&rdquo;) uses cookies and similar browser storage technologies when you visit our
              website (novintix.com).
            </p>
            <p>
              We believe in minimal, privacy-first web data practices. We do not use third-party advertising
              tracking cookies or sell user behavioral data to data brokers.
            </p>
          </div>

          {/* Section 1: What Are Cookies */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              1. What Are Cookies?
            </h2>
            <p className="text-sm text-[#6B7A8C] leading-relaxed">
              Cookies are small text files placed on your computer or mobile device when you browse websites.
              They are widely utilized to make web platforms operate efficiently, remember user preferences,
              and provide aggregate analytical insights to website operators.
            </p>
          </section>

          {/* Section 2: Categories We Use */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              2. Categories of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div className="p-5 bg-[#F7F9FB] rounded-xl border border-[#E8EDF2] space-y-1.5">
                <h3 className="font-bold text-base text-[#0A1B2E]">A. Strictly Necessary Cookies</h3>
                <p className="text-xs text-[#6B7A8C] leading-relaxed">
                  These cookies are essential for core website operation, such as page navigation, form
                  submission security, and CSRF token verification. The website cannot function properly
                  without these cookies, and they cannot be deactivated in our systems.
                </p>
              </div>

              <div className="p-5 bg-[#F7F9FB] rounded-xl border border-[#E8EDF2] space-y-1.5">
                <h3 className="font-bold text-base text-[#0A1B2E]">B. Performance &amp; Analytics Cookies</h3>
                <p className="text-xs text-[#6B7A8C] leading-relaxed">
                  These cookies enable us to measure visit counts and traffic sources so we can evaluate and
                  improve site speed and readability. All information collected is aggregated and anonymized;
                  we do not identify individual visitors.
                </p>
              </div>

              <div className="p-5 bg-[#F7F9FB] rounded-xl border border-[#E8EDF2] space-y-1.5">
                <h3 className="font-bold text-base text-[#0A1B2E]">C. Functional Cookies</h3>
                <p className="text-xs text-[#6B7A8C] leading-relaxed">
                  These cookies allow the website to provide enhanced personalization, such as remembering your
                  previously chosen industry or service filters when browsing case studies.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Cookie Table */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              3. Inventory of Cookies Used
            </h2>
            <div className="overflow-x-auto border border-[#E8EDF2] rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F7F9FB] border-b border-[#E8EDF2] font-mono text-[#0A1B2E]">
                  <tr>
                    <th className="p-3.5">Cookie Name</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Lifespan</th>
                    <th className="p-3.5">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8EDF2] text-[#6B7A8C]">
                  {COOKIE_TABLE.map((c, idx) => (
                    <tr key={idx} className="hover:bg-[#F7F9FB]/50">
                      <td className="p-3.5 font-mono font-semibold text-[#0A1B2E]">{c.name}</td>
                      <td className="p-3.5">{c.type}</td>
                      <td className="p-3.5 font-mono">{c.duration}</td>
                      <td className="p-3.5 leading-relaxed">{c.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Managing Preferences */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              4. How to Control &amp; Manage Cookies
            </h2>
            <div className="space-y-3 text-sm text-[#6B7A8C] leading-relaxed">
              <p>
                You have the right to decide whether to accept or reject non-essential cookies. You can exercise
                your cookie preferences directly in your web browser settings. Most browsers permit you to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs">
                <li>View the cookies stored on your computer and delete them individually.</li>
                <li>Block third-party cookies or cookies from specific websites.</li>
                <li>Block all cookies from being placed.</li>
                <li>Delete all cookies when you close your browser session.</li>
              </ul>
              <p className="text-xs pt-1">
                Please note that if you choose to reject strictly necessary cookies, some features and interactive
                forms on our website may not function as intended.
              </p>
            </div>
          </section>

          {/* Section 5: Inquiries */}
          <section className="space-y-4 border-t border-[#E8EDF2] pt-8">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0A1B2E]">
              5. Questions Regarding Our Cookie Practices
            </h2>
            <p className="text-sm text-[#6B7A8C]">
              If you have any questions about our use of cookies or related privacy standards, please reach out:
            </p>
            <div className="bg-[#F7F9FB] p-5 rounded-xl border border-[#E8EDF2] text-xs font-mono text-[#0A1B2E]">
              <p className="font-bold">NovintiX Privacy Desk</p>
              <p>Email: privacy@novintix.com</p>
              <p>Subject: &ldquo;Cookie Policy Inquiry&rdquo;</p>
            </div>
          </section>
        </div>
      </SectionWrapper>
    </>
  )
}
