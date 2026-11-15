import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ContactForm from '@/components/sections/ContactForm'
import {
  MessageSquare,
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from 'lucide-react'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Book a MedTech Consultation | NovintiX',
  description:
    'Schedule a confidential consultation with NovintiX regulatory, quality, and software validation leaders in Exton PA, Dublin, or Coimbatore.',
}

const HUB_CONTACTS = [
  {
    flag: '🇺🇸',
    city: 'Exton, PA (US HQ)',
    address: '100 Eagleview Boulevard, Suite 300, Exton, PA 19341, USA',
    handles: 'FDA submissions, 510(k)/PMA strategy, FDA QMSR alignment, US client engagements, and pre-sub preparation.',
    email: 'us@novintix.com',
  },
  {
    flag: '🇮🇪',
    city: 'Dublin, Ireland (European Gateway)',
    address: '2 Grand Canal Square, Grand Canal Dock, Dublin 2, D02 A342, Ireland',
    handles: 'EU MDR & IVDR compliance, Notified Body interface, clinical evaluations (CER), PMCF studies, and CE mark roadmaps.',
    email: 'eu@novintix.com',
  },
  {
    flag: '🇮🇳',
    city: 'Coimbatore, India (APAC Engineering Hub)',
    address: 'TIDEL Park, 4th Floor, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014, India',
    handles: 'GAMP5 CSV/CSA delivery, automated software V&V execution, ProofX platform development, and UDI data pipelines.',
    email: 'apac@novintix.com',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <SectionWrapper variant="dark" className="pt-28 pb-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-[#00B8A9]/10 text-[#00B8A9] border border-[#00B8A9]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Let&apos;s talk about your lifecycle challenge.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether accelerating a submission, auditing for FDA QMSR compliance, or deploying automated
            validation for SaMD, our senior partners are ready to review your objectives under mutual NDA.
          </p>
        </div>
      </SectionWrapper>

      {/* 2-Column Consult Form Section (Light) */}
      <SectionWrapper variant="light" className="py-20">
        <ContactForm />
      </SectionWrapper>

      {/* 3 Hub Contact Cards (Paper) */}
      <SectionWrapper variant="paper" className="py-20 border-t border-[#E8EDF2]">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
              Global Practice Offices
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1B2E] font-display">
              Reach Our Regional Gateways
            </h2>
            <p className="text-base text-[#6B7A8C]">
              Direct contact channels for our North American, European, and Asia-Pacific operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HUB_CONTACTS.map((hub, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E8EDF2] p-8 shadow-xs hover:border-[#00B8A9]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{hub.flag}</div>
                  <h3 className="font-display font-bold text-xl text-[#0A1B2E] mb-2">
                    {hub.city}
                  </h3>
                  <div className="flex items-start gap-2 text-xs text-[#6B7A8C] mb-4">
                    <MapPin className="w-4 h-4 text-[#00B8A9] shrink-0 mt-0.5" />
                    <span>{hub.address}</span>
                  </div>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-semibold text-[#0A1B2E] uppercase tracking-wider block">
                      Scope of Operations:
                    </span>
                    <p className="text-xs text-[#6B7A8C] leading-relaxed">
                      {hub.handles}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8EDF2]">
                  <a
                    href={`mailto:${hub.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00B8A9] hover:text-[#0A1B2E] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{hub.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Row / SLA Banner (Paper/Light) */}
      <SectionWrapper variant="paper" className="py-10 border-t border-[#E8EDF2]">
        <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-[#0A1B2E]">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#00B8A9]" />
            <span>
              Direct Inquiries:{' '}
              <a href="mailto:hello@novintix.com" className="font-semibold text-[#00B8A9] hover:underline">
                hello@novintix.com
              </a>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <LinkedInIcon className="w-4 h-4 text-[#00B8A9]" />
            <a
              href="https://linkedin.com/company/novintix"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0A1B2E] hover:text-[#00B8A9] transition-colors"
            >
              LinkedIn: NovintiX
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00B8A9]" />
            <span className="text-[#6B7A8C]">
              Response guaranteed within <strong className="text-[#0A1B2E]">1 business day</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00B8A9]" />
            <span className="text-[#6B7A8C]">Mutual NDA standard</span>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
