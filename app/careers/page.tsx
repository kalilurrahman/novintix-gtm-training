import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import CareersList from '@/components/sections/CareersList'
import {
  Briefcase,
  Star,
  Users2,
  Globe2,
  Zap,
  Mail,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Careers at NovintiX — MedTech Specialists',
  description:
    'Join a fast-growing global team of MedTech regulatory experts, validation engineers, and digital architects across the US, Europe, and India.',
}

const CULTURE_CARDS = [
  {
    icon: Users2,
    title: 'Practitioners, not advisors',
    description:
      'We write real protocols, execute actual test suites, and author defensible regulatory dossiers. You won’t sit on the sidelines creating theoretical slide decks.',
  },
  {
    icon: Globe2,
    title: 'Global reach, local expertise',
    description:
      'Collaborate across our FDA regulatory gateway in Exton, European hub in Dublin, and engineering delivery center in Coimbatore with seamless, follow-the-sun momentum.',
  },
  {
    icon: Zap,
    title: 'Regulatory precision + speed',
    description:
      'We combine deep domain regulatory rigor with modern automation platforms like ProofX to eliminate repetitive manual overhead and focus on high-impact engineering.',
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <SectionWrapper variant="dark" className="pt-28 pb-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-[#00B8A9]/10 text-[#00B8A9] border border-[#00B8A9]/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>JOIN OUR TEAM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Join the MedTech Lifecycle Team
          </h1>

          {/* Indeed 5.0/5 Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs text-white">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-[#2BD9C8]">5.0 / 5.0 on Indeed</span>
            <span className="text-gray-400 hidden sm:inline">· Rated Top MedTech Workplace 2025</span>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Work at the intersection of medical device engineering, global regulatory science, and
            next-generation validation automation. Help bring lifesaving medical technologies to patients.
          </p>
        </div>
      </SectionWrapper>

      {/* Open Roles Section (Light) */}
      <SectionWrapper variant="light" className="py-20">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
              Current Openings
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1B2E] font-display">
              Explore Available Roles
            </h2>
            <p className="text-base text-[#6B7A8C]">
              We are actively hiring across our Coimbatore, Dublin, and Exton hubs. Click &ldquo;Quick Apply&rdquo;
              to submit your background directly to our practice directors.
            </p>
          </div>

          <CareersList />
        </div>
      </SectionWrapper>

      {/* Culture Section (Paper) */}
      <SectionWrapper variant="paper" className="py-20 border-y border-[#E8EDF2]">
        <div className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00B8A9] font-semibold">
              Life at NovintiX
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1B2E] font-display">
              Why MedTech Specialists Build Their Careers Here
            </h2>
            <p className="text-base text-[#6B7A8C]">
              An environment designed for engineers, regulatory writers, and scientists who care deeply
              about quality and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CULTURE_CARDS.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E8EDF2] p-8 shadow-xs hover:border-[#00B8A9]/40 transition-colors space-y-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#00B8A9]/10 text-[#00B8A9] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0A1B2E]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#6B7A8C] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section (Dark) */}
      <SectionWrapper variant="dark" className="py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Don&apos;t see your exact role?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            We are continuously seeking extraordinary talent in clinical evaluation, SaMD software
            architecture, FDA submission management, and automated testing.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:careers@novintix.com?subject=Speculative%20Application%20-%20MedTech%20Specialist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00B8A9] text-white font-semibold text-sm rounded-lg hover:bg-[#009e91] transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Email careers@novintix.com</span>
            </a>
            <a
              href="https://linkedin.com/company/novintix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold text-sm rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
