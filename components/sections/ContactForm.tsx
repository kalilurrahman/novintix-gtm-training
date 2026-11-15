'use client'

import { useState } from 'react'
import { Calendar, CheckCircle2, Clock, Mail, ShieldCheck, ArrowRight } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Product Engineering & Design Controls',
  'Supply Chain & UDI Integration',
  'Manufacturing & Process Validation',
  'Quality & Regulatory Compliance (FDA QMSR / EU MDR)',
  'Clinical Affairs & CER / PMCF',
  'Digital & AI / SaMD Validation',
  'ProofX Automated V&V Platform',
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    serviceInterest: SERVICE_OPTIONS[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left: 5-field Consult Form */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E8EDF2] p-8 sm:p-10 shadow-sm">
        <div className="mb-8">
          <h2 className="font-display font-bold text-2xl text-[#0A1B2E] mb-2">
            Schedule a Lifecycle Consultation
          </h2>
          <p className="text-sm text-[#6B7A8C]">
            Speak directly with a senior regulatory or engineering partner under mutual NDA. We respond within 1 business day.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#00B8A9]/10 text-[#00B8A9] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#0A1B2E]">
              Consultation Request Received
            </h3>
            <p className="text-sm text-[#6B7A8C] max-w-md mx-auto">
              Thank you, <strong>{formData.name}</strong>. A Practice Lead from our{' '}
              <span className="text-[#0A1B2E] font-medium">{formData.serviceInterest}</span> team
              has received your request and will reach out to <strong>{formData.email}</strong> within 1 business day.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: '',
                    company: '',
                    email: '',
                    serviceInterest: SERVICE_OPTIONS[0],
                    message: '',
                  })
                }}
                className="text-xs font-semibold text-[#00B8A9] hover:underline cursor-pointer"
              >
                Send another message →
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#0A1B2E] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E8EDF2] rounded-lg text-sm text-[#0A1B2E] focus:outline-none focus:border-[#00B8A9] focus:ring-1 focus:ring-[#00B8A9]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A1B2E] mb-1.5">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Therapeutics"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E8EDF2] rounded-lg text-sm text-[#0A1B2E] focus:outline-none focus:border-[#00B8A9] focus:ring-1 focus:ring-[#00B8A9]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0A1B2E] mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="eleanor.vance@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#E8EDF2] rounded-lg text-sm text-[#0A1B2E] focus:outline-none focus:border-[#00B8A9] focus:ring-1 focus:ring-[#00B8A9]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0A1B2E] mb-1.5">
                Service Interest *
              </label>
              <select
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#E8EDF2] rounded-lg text-sm text-[#0A1B2E] bg-white focus:outline-none focus:border-[#00B8A9] focus:ring-1 focus:ring-[#00B8A9]"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0A1B2E] mb-1.5">
                Project Summary / Message
              </label>
              <textarea
                rows={4}
                placeholder="Describe your device classification, upcoming submission dates, or regulatory remediation requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#E8EDF2] rounded-lg text-sm text-[#0A1B2E] focus:outline-none focus:border-[#00B8A9] focus:ring-1 focus:ring-[#00B8A9]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#00B8A9] text-white font-semibold text-sm rounded-lg hover:bg-[#009e91] transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-[#6B7A8C] flex items-center gap-1.5 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00B8A9]" />
              <span>Strict confidentiality guaranteed. We operate under mutual non-disclosure.</span>
            </p>
          </form>
        )}
      </div>

      {/* Right: Direct Booking Placeholder Div */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-[#F7F9FB] rounded-2xl border border-[#E8EDF2] p-8">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#00B8A9] font-semibold mb-3">
            <Calendar className="w-4 h-4" />
            <span>Fast-Track Scheduling</span>
          </div>

          <h3 className="font-display font-bold text-xl text-[#0A1B2E] mb-2">
            Book Directly on Our Calendar
          </h3>

          <p className="text-sm text-[#6B7A8C] leading-relaxed mb-6">
            Prefer to pick a specific 30-minute introductory slot? Connect directly with our regulatory and technical leadership.
          </p>

          {/* Styled Calendly Placeholder Box */}
          <div className="border border-dashed border-[#00B8A9]/40 bg-white rounded-xl p-6 text-center space-y-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#00B8A9]/10 text-[#00B8A9] flex items-center justify-center mx-auto">
              <Clock className="w-5 h-5" />
            </div>
            <p className="font-medium text-sm text-[#0A1B2E]">
              Interactive Calendly Scheduling Widget
            </p>
            <p className="text-xs text-[#6B7A8C]">
              Direct calendar integration coming soon. For immediate booking, email our scheduling desk directly:
            </p>
            <a
              href="mailto:hello@novintix.com?subject=Consultation%20Scheduling%20Request"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00B8A9] hover:text-[#0A1B2E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>hello@novintix.com</span>
            </a>
          </div>

          <div className="space-y-3 text-xs text-[#6B7A8C] pt-2 border-t border-[#E8EDF2]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00B8A9]" />
              <span>Response guaranteed within 1 business day</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00B8A9]" />
              <span>Complimentary 30-minute scoping assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00B8A9]" />
              <span>Direct pairing with senior regulatory or engineering partner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
