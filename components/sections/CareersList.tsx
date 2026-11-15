'use client'

import { useState } from 'react'
import { MapPin, Briefcase, Building, CheckCircle2, X, Send } from 'lucide-react'

export type CareerRole = {
  id: string
  title: string
  hub: string
  department: string
  type: string
  description: string
  requirements: string[]
}

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'role-1',
    title: 'Data Architect',
    hub: 'Coimbatore, India',
    department: 'Digital & AI',
    type: 'Full-time',
    description:
      'Lead the design and implementation of regulatory-compliant data architectures powering ProofX, NovaQMS, and LifelineData. You will define scalable data models, audit trail pipelines, and secure multi-tenant cloud architectures for mission-critical MedTech analytics.',
    requirements: [
      '8+ years of enterprise data architecture and engineering experience',
      'Extensive expertise in distributed database systems, cloud data warehouses (Snowflake, BigQuery), and streaming pipelines',
      'Demonstrated experience with GxP, 21 CFR Part 11, and HIPAA data integrity and security standards',
      'Proficiency in Python, SQL, data modelling, and automated metadata cataloguing',
      'Strong background in designing resilient, audit-proof data lineage and versioning frameworks',
    ],
  },
  {
    id: 'role-2',
    title: 'ETL Tester',
    hub: 'Coimbatore, India',
    department: 'Quality & Validation',
    type: 'Full-time',
    description:
      'Ensure absolute data integrity and regulatory validity across enterprise data pipelines, migrations, and integration points. You will author comprehensive test protocols, execute automated data verification suites, and document defect lifecycles in alignment with GAMP5 principles.',
    requirements: [
      '4+ years of dedicated ETL / Data Warehouse testing experience',
      'Advanced SQL scripting capabilities for complex data reconciliations, boundary analysis, and transformation validations',
      'Hands-on experience with automated test frameworks (e.g., Great Expectations, dbt test, Python test suites)',
      'Understanding of data validation protocols, test summaries, and traceability matrices',
      'Strong analytical mindset with high attention to detail in high-consequence environments',
    ],
  },
  {
    id: 'role-3',
    title: 'Validation Engineer (CSV/GAMP5)',
    hub: 'Coimbatore, India',
    department: 'Quality & Regulatory',
    type: 'Full-time',
    description:
      'Author, execute, and defend Computer System Validation (CSV) packages for enterprise GxP applications, laboratory systems, and custom software tools. You will apply GAMP5 risk-based methodologies to ensure compliance with FDA QMSR, 21 CFR Part 11, and Annex 11.',
    requirements: [
      '5+ years of CSV / CSA experience within medical devices, biotechnology, or pharmaceuticals',
      'Deep mastery of GAMP5 risk-based validation life cycle (URS, FS, DS, IQ, OQ, PQ, VSR, RTM)',
      'Proven expertise in 21 CFR Part 11 and EU Annex 11 assessment and remediation',
      'Experience authoring validation plans, protocols, deviations, and summary reports',
      'Excellent verbal and written technical communication skills',
    ],
  },
  {
    id: 'role-4',
    title: 'Quality Engineer (ISO 13485)',
    hub: 'Exton, PA or Dublin, Ireland',
    department: 'Quality & Regulatory',
    type: 'Full-time',
    description:
      'Serve as the key quality partner for client product engineering and manufacturing initiatives. You will establish and maintain ISO 13485 and FDA QMSR compliant processes, lead risk management activities per ISO 14971, oversee design controls, and manage CAPA investigations.',
    requirements: [
      '6+ years of medical device quality engineering experience across Class II / Class III devices',
      'In-depth knowledge of ISO 13485:2016, FDA 21 CFR Part 820 / QMSR, and EU MDR 2017/745',
      'Proven leadership in ISO 14971 risk management (dFMEA, pFMEA, Risk Management Plans & Reports)',
      'Demonstrated experience with design verification and validation (V&V) protocols and design transfer',
      'Track record of managing CAPAs, non-conformances, and supplier quality audits',
    ],
  },
]

export default function CareersList() {
  const [activeModalRole, setActiveModalRole] = useState<CareerRole | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverNote: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleOpenModal = (role: CareerRole) => {
    setActiveModalRole(role)
    setSubmitted(false)
    setFormData({ name: '', email: '', coverNote: '' })
  }

  const handleCloseModal = () => {
    setActiveModalRole(null)
    setSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Role Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CAREER_ROLES.map((role) => (
          <div
            key={role.id}
            className="bg-white rounded-xl border border-[#E8EDF2] p-6 sm:p-8 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#00B8A9] bg-[#00B8A9]/10 px-2.5 py-1 rounded font-semibold">
                  {role.department}
                </span>
                <span className="text-xs font-medium text-[#6B7A8C] bg-[#F7F9FB] px-2.5 py-1 rounded border border-[#E8EDF2]">
                  {role.type}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#0A1B2E] mb-2">
                {role.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-[#6B7A8C] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#00B8A9]" />
                <span>{role.hub}</span>
              </div>

              <p className="text-sm text-[#6B7A8C] leading-relaxed mb-6">
                {role.description}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0A1B2E]">
                  Key Requirements:
                </h4>
                <ul className="space-y-1.5">
                  {role.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#6B7A8C]">
                      <span className="text-[#00B8A9] mt-0.5">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8EDF2]">
              <button
                type="button"
                onClick={() => handleOpenModal(role)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#00B8A9] text-white font-semibold text-xs rounded-lg hover:bg-[#009e91] transition-colors cursor-pointer shadow-xs"
              >
                <span>Quick Apply</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Apply Modal */}
      {activeModalRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div
            className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#E8EDF2] p-6 sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 text-[#6B7A8C] hover:text-[#0A1B2E] hover:bg-[#F7F9FB] rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-[#00B8A9]/10 text-[#00B8A9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0A1B2E] mb-2">
                  Application Submitted!
                </h3>
                <p className="text-sm text-[#6B7A8C] max-w-sm mx-auto mb-6">
                  Thank you for applying for the <strong>{activeModalRole.title}</strong> role. Our talent team will review your application and respond within 2 business days.
                </p>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 bg-[#00B8A9] text-white text-xs font-semibold rounded-lg hover:bg-[#009e91] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#00B8A9] font-semibold">
                    Quick Application
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#0A1B2E] mt-1">
                    {activeModalRole.title}
                  </h3>
                  <p className="text-xs text-[#6B7A8C] mt-1">
                    {activeModalRole.hub} · {activeModalRole.department}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1B2E] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-[#E8EDF2] rounded-lg text-sm text-[#0A1B2E] focus:outline-none focus:border-[#00B8A9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1B2E] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex.mercer@medtech.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-[#E8EDF2] rounded-lg text-sm text-[#0A1B2E] focus:outline-none focus:border-[#00B8A9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1B2E] mb-1">
                      Role (Pre-filled)
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={activeModalRole.title}
                      className="w-full px-3.5 py-2.5 bg-[#F7F9FB] border border-[#E8EDF2] rounded-lg text-sm text-[#6B7A8C] cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1B2E] mb-1">
                      Cover Note / Summary *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Highlight your relevant experience, technical certifications, and availability..."
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-[#E8EDF2] rounded-lg text-sm text-[#0A1B2E] focus:outline-none focus:border-[#00B8A9]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-4 py-2.5 text-xs font-medium text-[#6B7A8C] hover:text-[#0A1B2E] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#00B8A9] text-white text-xs font-semibold rounded-lg hover:bg-[#009e91] transition-colors cursor-pointer shadow-xs"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
