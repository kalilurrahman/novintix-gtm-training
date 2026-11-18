'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const services = [
  { slug: 'product-engineering', label: 'Product Engineering' },
  { slug: 'supply-chain', label: 'Supply Chain' },
  { slug: 'manufacturing', label: 'Manufacturing' },
  { slug: 'quality-regulatory', label: 'Quality & Regulatory' },
  { slug: 'clinical-affairs', label: 'Clinical Affairs' },
  { slug: 'digital-ai', label: 'Digital & AI' },
]

const navLinks = [
  { href: '/proofx', label: 'ProofX' },
  { href: '/customers', label: 'Customers' },
  { href: '/insights', label: 'Insights' },
  { href: '/training', label: 'Training' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{ backgroundColor: '#0A1B2E' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center font-display font-bold text-xl text-white tracking-tight select-none">
          NovintiX<span style={{ color: '#00B8A9' }}>·</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
              onMouseEnter={() => setDropdownOpen(true)}
              onClick={() => setDropdownOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-56 rounded-lg overflow-hidden shadow-xl border"
                style={{ backgroundColor: '#0A1B2E', borderColor: 'rgba(255,255,255,0.1)' }}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 px-4 py-2 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#00B8A9' }}
          >
            Book a Consult
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: '#0A1B2E', borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div className="px-4 py-4 space-y-1">
            <div className="pb-2 mb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <p className="text-xs text-white/50 uppercase tracking-widest mb-2 font-mono-tag">Services</p>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block py-2 text-sm text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm text-white/90 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2.5 rounded-md text-sm font-semibold text-white"
                style={{ backgroundColor: '#00B8A9' }}
                onClick={() => setMobileOpen(false)}
              >
                Book a Consult
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
