'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react'

type FAQ = { q: string; a: string }
type RelatedService = { slug: string; name: string; tagline: string }

type Props = {
  faqs: [FAQ, FAQ, FAQ]
  relatedServices: RelatedService[]
  serviceName: string
}

export default function ServiceClientSections({ faqs, relatedServices, serviceName }: Props) {
  // Accordion state (first one open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate brief submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* FAQS SECTION — light                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-xs text-[#00B8A9] uppercase tracking-widest mb-2"
          >
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B2E] mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={faq.q}
                  className="border border-[#E8EDF2] rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#F7F9FB] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-lg text-[#0A1B2E] pr-4">
                      {faq.q}
                    </span>
                    <span className="text-[#00B8A9] flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[#6B7A8C] text-base leading-relaxed border-t border-[#E8EDF2]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONSULT FORM SECTION — dark                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="consult-form" className="bg-[#0A1B2E] text-white py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="text-xs text-[#00B8A9] uppercase tracking-widest mb-3"
            >
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schedule a Consultation on {serviceName}
            </h2>
            <p className="text-[#6B7A8C] max-w-xl mx-auto">
              Speak directly with our senior MedTech regulatory and engineering leads. We respond within 1 business day.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#00B8A9]/20 text-[#00B8A9] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Consultation Request Received</h3>
                <p className="text-[#6B7A8C] max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our practice lead for {serviceName} will review your inquiry and reach out to <span className="text-white font-medium">{formData.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', company: '', email: '', message: '' })
                  }}
                  className="mt-6 text-sm text-[#00B8A9] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-[#6B7A8C] uppercase tracking-wider mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      placeholder="Dr. Jordan Taylor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A1B2E] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#00B8A9] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#6B7A8C] uppercase tracking-wider mb-2" htmlFor="company">
                      Company / Organization *
                    </label>
                    <input
                      id="company"
                      required
                      type="text"
                      placeholder="MedTech Innovations Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0A1B2E] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#00B8A9] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#6B7A8C] uppercase tracking-wider mb-2" htmlFor="email">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="j.taylor@medtechinnovations.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0A1B2E] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#00B8A9] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#6B7A8C] uppercase tracking-wider mb-2" htmlFor="message">
                    Project Scope / Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your target submission, device classification, or immediate engineering challenge..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0A1B2E] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#00B8A9] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00B8A9] hover:bg-[#00a398] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* RELATED SERVICES — light                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-xs text-[#00B8A9] uppercase tracking-widest mb-2"
          >
            Connected Capabilities
          </p>
          <h2 className="text-3xl font-bold text-[#0A1B2E] mb-10">
            Related Lifecycle Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group block p-6 rounded-xl border border-[#E8EDF2] hover:border-[#00B8A9] hover:shadow-md transition-all"
              >
                <div className="text-xs font-mono text-[#00B8A9] mb-2">Service Segment</div>
                <h3 className="text-lg font-bold text-[#0A1B2E] group-hover:text-[#00B8A9] transition-colors mb-2 flex items-center justify-between">
                  <span>{rel.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#6B7A8C] group-hover:text-[#00B8A9] transform group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-sm text-[#6B7A8C]">{rel.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
