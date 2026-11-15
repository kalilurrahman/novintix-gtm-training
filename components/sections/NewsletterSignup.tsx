'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 max-w-xl mx-auto text-center mb-8 shadow-sm">
      <p className="font-semibold text-[#0A1B2E] mb-4">Stay ahead of MedTech regulation</p>
      {submitted ? (
        <p className="text-sm text-[#00B8A9] font-medium py-2">
          Thank you for subscribing to The Lifecycle Brief!
        </p>
      ) : (
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#00B8A9]"
          />
          <button
            type="submit"
            className="bg-[#00B8A9] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#009e91] transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  )
}
