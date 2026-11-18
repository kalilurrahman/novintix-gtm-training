import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import TrainingPortal from '@/components/sections/TrainingPortal'
import { GraduationCap, Award, BookOpen, Target, Sparkles, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'MedTech Lifecycle GTM Training & Execution Academy | NovintiX',
  description:
    'Comprehensive training curriculum, practical exercises, and interactive mastery drills for planning and executing MedTech lifecycle engagements and ProofX deployments.',
}

export default function TrainingPage() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <section className="bg-[#0A1B2E] text-white pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-[#2BD9C8]">
            <GraduationCap className="w-4 h-4 text-[#00B8A9]" />
            INTERNAL & PARTNER ENABLEMENT ACADEMY
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white max-w-4xl mx-auto leading-tight">
            MedTech GTM Training &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BD9C8] via-[#00B8A9] to-emerald-400">
              Execution Curriculum
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The operational playbook to plan, pitch, and execute high-velocity MedTech lifecycle partnerships.
            Study the frameworks, solve real prospect scenarios, and master the ProofX AI V&V wedge.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#00B8A9]" />
              4 Core Modules
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Target className="w-4 h-4 text-[#00B8A9]" />
              Interactive Simulations
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00B8A9]" />
              Rubric-Based Evaluation
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive Training Portal (Paper: #F7F9FB) */}
      <SectionWrapper variant="paper" className="py-12">
        <div className="max-w-7xl mx-auto">
          <TrainingPortal />
        </div>
      </SectionWrapper>
    </>
  )
}
