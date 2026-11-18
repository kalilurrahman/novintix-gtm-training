import Link from 'next/link'
import { MapPin, ArrowUpRight } from 'lucide-react'

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const services = [
  { slug: 'product-engineering', label: 'Product Engineering' },
  { slug: 'supply-chain', label: 'Supply Chain' },
  { slug: 'manufacturing', label: 'Manufacturing' },
  { slug: 'quality-regulatory', label: 'Quality & Regulatory' },
  { slug: 'clinical-affairs', label: 'Clinical Affairs' },
  { slug: 'digital-ai', label: 'Digital & AI' },
]

const company = [
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
  { href: '/proofx', label: 'ProofX' },
  { href: '/customers', label: 'Customers' },
  { href: '/insights', label: 'Insights' },
  { href: '/training', label: 'GTM Training Academy' },
]

const hubs = [
  { city: 'Exton, PA', desc: 'US HQ' },
  { city: 'Dublin', desc: 'EU Gateway' },
  { city: 'Coimbatore', desc: 'APAC Hub' },
]

const legal = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/responsible-ai', label: 'Responsible AI' },
  { href: '/cookies', label: 'Cookies' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A1B2E' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="font-display font-bold text-xl tracking-tight">
              NovintiX<span style={{ color: '#00B8A9' }}>·</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              The MedTech Lifecycle Partner
            </p>
            <p
              className="text-xs leading-relaxed font-mono-tag"
              style={{ color: '#00B8A9', fontFamily: "'IBM Plex Mono', monospace" }}
            >
              ISO 13485 · EU MDR · 21 CFR PART 11 · IEC 62304
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 font-mono-tag">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 font-mono-tag">
              Company
            </h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Hubs + LinkedIn */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 font-mono-tag">
              Global Hubs
            </h3>
            <ul className="space-y-3 mb-6">
              {hubs.map((hub) => (
                <li key={hub.city} className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#00B8A9' }} />
                  <span className="text-sm text-white/70">
                    <span className="text-white font-medium">{hub.city}</span>
                    {' — '}{hub.desc}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.linkedin.com/company/novintix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <LinkedInIcon size={16} />
              LinkedIn
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 NovintiX. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
