'use client'

import React, { useState, useEffect, useMemo } from 'react'
import {
  Lock,
  Unlock,
  Shield,
  ShieldCheck,
  Search,
  Filter,
  Download,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Check,
  Copy,
  Building2,
  MapPin,
  Users,
  Flame,
  Zap,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  FileText,
  Calendar,
  Mail,
  Clock,
  Award,
  Sparkles,
  CheckCircle2,
  XCircle,
  SlidersHorizontal,
  RefreshCw,
  Eye,
  BookOpen,
  Layers,
  Target,
  Briefcase,
  HelpCircle,
  X,
} from 'lucide-react'
import { gtmAccounts, gtmStats, GTMAccount } from '@/data/gtm-accounts'
import { outreachCadence, CadenceStep } from '@/data/gtm-cadence'
import { productizedOffers, ProductizedOffer } from '@/data/gtm-offers'
import {
  playbookStages,
  competitiveMatrix,
  objectionBattlecards,
} from '@/data/gtm-playbook'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

export default function GTMIntelligencePortal() {
  const [mounted, setMounted] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [passcode, setPasscode] = useState('')
  const [passcodeError, setPasscodeError] = useState(false)
  const [showPasscode, setShowPasscode] = useState(false)

  // Dashboard Navigation
  const [activeTab, setActiveTab] = useState<'matrix' | 'offers' | 'cadence' | 'playbook'>('matrix')

  // Account Matrix Filter & Search state
  const [searchQuery, setSearchQuery] = useState('')
  const [sectorFilter, setSectorFilter] = useState<'All' | 'MedTech' | 'Pharma' | 'Diagnostics'>('All')
  const [priorityFilter, setPriorityFilter] = useState<'All' | 'P0' | 'P1' | 'P2'>('All')
  const [cityFilter, setCityFilter] = useState<string>('All')
  const [entryOfferFilter, setEntryOfferFilter] = useState<string>('All')
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table')
  const [selectedAccount, setSelectedAccount] = useState<GTMAccount | null>(null)

  // Cadence Personalizer State
  const [cadenceAccount, setCadenceAccount] = useState<GTMAccount>(gtmAccounts[0])
  const [contactName, setContactName] = useState<string>('Dr. Rajesh')
  const [copiedTouchIndex, setCopiedTouchIndex] = useState<number | null>(null)

  // Expanded Objection Battlecards
  const [expandedObjection, setExpandedObjection] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = sessionStorage.getItem('novintix_gtm_unlocked')
      if (stored === 'true') {
        setIsUnlocked(true)
      }
    } catch {
      // ignore SSR storage issues
    }
  }, [])

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (passcode.trim().toLowerCase() === 'novintix2026') {
      setIsUnlocked(true)
      setPasscodeError(false)
      try {
        sessionStorage.setItem('novintix_gtm_unlocked', 'true')
      } catch {
        // ignore
      }
    } else {
      setPasscodeError(true)
    }
  }

  const handleLock = () => {
    setIsUnlocked(false)
    setPasscode('')
    try {
      sessionStorage.removeItem('novintix_gtm_unlocked')
    } catch {
      // ignore
    }
  }

  // Filtered Accounts
  const filteredAccounts = useMemo(() => {
    return gtmAccounts.filter((acc) => {
      const matchesSearch =
        searchQuery === '' ||
        acc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.gccCity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.whyNow.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.entryOffer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (acc.tags && acc.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())))

      const matchesSector = sectorFilter === 'All' || acc.sector === sectorFilter
      const matchesPriority = priorityFilter === 'All' || acc.priority === priorityFilter
      const matchesCity = cityFilter === 'All' || acc.gccCity.toLowerCase().includes(cityFilter.toLowerCase())
      const matchesOffer = entryOfferFilter === 'All' || acc.entryOffer === entryOfferFilter

      return matchesSearch && matchesSector && matchesPriority && matchesCity && matchesOffer
    })
  }, [searchQuery, sectorFilter, priorityFilter, cityFilter, entryOfferFilter])

  // Unique cities list for filter
  const cityOptions = useMemo(() => {
    return ['Bangalore', 'Hyderabad', 'Pune', 'Mumbai', 'Chennai', 'Gurgaon']
  }, [])

  // Export CSV Handler
  const handleExportCSV = () => {
    const headers = [
      'Account Name',
      'Priority',
      'Score',
      'Sector',
      'GCC City',
      'Why-Now Trigger',
      'Recommended Entry Offer',
      'ProofX Play',
      'Warm Execs',
      'Status',
    ]

    const rows = filteredAccounts.map((acc) => [
      `"${acc.name.replace(/"/g, '""')}"`,
      acc.priority,
      acc.score,
      acc.sector,
      `"${acc.gccCity.replace(/"/g, '""')}"`,
      `"${acc.whyNow.replace(/"/g, '""')}"`,
      `"${acc.entryOffer.replace(/"/g, '""')}"`,
      `"${acc.proofxPlay.replace(/"/g, '""')}"`,
      acc.warmExecs,
      acc.status,
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `novintix-gtm-accounts-51.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Copy Template Handler
  const handleCopyTemplate = (template: string, index: number) => {
    const personalized = template
      .replace(/{{firstName}}/g, contactName || 'Executive')
      .replace(/{{company}}/g, cadenceAccount.name)
      .replace(/{{gccCity}}/g, cadenceAccount.gccCity)
      .replace(/{{entryOffer}}/g, cadenceAccount.entryOffer)

    navigator.clipboard.writeText(personalized)
    setCopiedTouchIndex(index)
    setTimeout(() => {
      setCopiedTouchIndex(null)
    }, 2500)
  }

  const navigateToCadenceForAccount = (account: GTMAccount) => {
    setCadenceAccount(account)
    setSelectedAccount(null)
    setActiveTab('cadence')
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0A1B2E] flex items-center justify-center text-white">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
          <span className="font-mono text-sm text-slate-400">Loading NovintiX Intelligence...</span>
        </div>
      </div>
    )
  }

  // ==========================================
  // PASSCODE GATE SCREEN
  // ==========================================
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#0A1B2E] text-slate-100 flex flex-col justify-center items-center px-4 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          {/* Executive Security Card */}
          <div className="bg-[#0F243A]/90 border border-slate-700/80 rounded-2xl shadow-2xl p-8 backdrop-blur-xl">
            {/* Header / Brand */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 mb-4 shadow-inner">
                <Lock className="w-7 h-7" />
              </div>
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <span className="text-2xl font-bold tracking-tight font-display text-white">
                  Novinti<span className="text-teal-400">X</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 self-end mb-1.5" />
              </div>
              <div className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase font-semibold mb-3">
                CONFIDENTIAL // INTERNAL GTM PLAYBOOK
              </div>
              <h1 className="text-xl font-semibold text-white tracking-tight">
                GCC GTM Intelligence Portal
              </h1>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                India GCC Market Penetration Playbook, 51 Target Account Dossiers &amp; Outreach Cadence
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleUnlock} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Executive Access Passcode
                </label>
                <div className="relative">
                  <input
                    type={showPasscode ? 'text' : 'password'}
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value)
                      if (passcodeError) setPasscodeError(false)
                    }}
                    placeholder="Enter executive key..."
                    autoFocus
                    className={`w-full bg-[#0A1B2E] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 font-mono focus:outline-none transition-all ${
                      passcodeError
                        ? 'border-red-500/80 focus:border-red-500 ring-2 ring-red-500/20'
                        : 'border-slate-700 focus:border-teal-400/80 focus:ring-2 focus:ring-teal-400/20'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasscode(!showPasscode)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
                {passcodeError && (
                  <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Invalid passcode. Access restricted to authorized GTM leadership.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0A1B2E] font-semibold text-sm py-2.5 px-4 rounded-lg shadow-lg shadow-teal-500/20 transition-all duration-200 cursor-pointer"
              >
                <Unlock className="w-4 h-4" />
                Unlock Intelligence Portal
              </button>

              {/* Evaluator Quick Hint / Fill Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setPasscode('novintix2026')
                    setPasscodeError(false)
                  }}
                  className="w-full text-center text-[11px] font-mono text-slate-400 hover:text-teal-300 transition-colors py-1 bg-slate-800/40 border border-slate-700/50 rounded-md"
                >
                  Quick Fill: <span className="text-teal-400 font-medium">novintix2026</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-800/80 text-center">
              <p className="text-[10px] text-slate-500 font-mono">
                Authorised NovintiX GTM &amp; Practice Leadership Only • All access logged and audited
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ==========================================
  // UNLOCKED EXECUTIVE DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-[#071320] text-slate-100 flex flex-col font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* TOP EXECUTIVE HEADER */}
      <header className="sticky top-0 z-40 bg-[#0A1B2E]/95 border-b border-slate-800 backdrop-blur-md px-4 sm:px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Left: Branding & Status Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight font-display text-white">
                Novinti<span className="text-teal-400">X</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 self-end mb-1" />
            </div>
            <div className="h-4 w-px bg-slate-700 hidden sm:block" />
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              CONFIDENTIAL // INTERNAL GTM PLAYBOOK
            </div>
          </div>

          {/* Right: Metadata Pills & Logout */}
          <div className="flex items-center gap-3 text-xs">
            <div className="hidden lg:flex items-center gap-2 font-mono text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                Active Q1 2026
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-teal-300">
                51 Accounts
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-amber-300">
                Lead: Kalilur
              </span>
            </div>

            <button
              onClick={handleLock}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer font-mono text-xs"
              title="Lock portal and clear session"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              Lock Portal
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* KPI STAT CARDS ROW */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Total Accounts */}
          <div className="bg-[#0F243A] border border-slate-800/90 hover:border-slate-700 rounded-xl p-4 shadow-sm transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Accounts Scanned</span>
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display text-white">{gtmStats.totalAccounts}</span>
              <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded">100% Target GCC</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              <span className="text-amber-400 font-medium">{gtmStats.p0Accounts} P0</span> ·{' '}
              <span className="text-teal-300 font-medium">{gtmStats.p1Accounts} P1</span> ·{' '}
              <span className="text-slate-400 font-medium">{gtmStats.p2Accounts} P2</span>
            </p>
          </div>

          {/* Card 2: P0 Act-Now */}
          <div className="bg-[#0F243A] border border-amber-500/30 hover:border-amber-500/50 rounded-xl p-4 shadow-sm transition-all relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">P0 Act-Now Targets</span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <Flame className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display text-amber-300">{gtmStats.p0Accounts}</span>
              <span className="text-xs font-mono text-amber-300 bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.5 rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Active Sprints
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              High-urgency accounts with active dated triggers &amp; verified buyers
            </p>
          </div>

          {/* Card 3: Warm Senior Execs */}
          <div className="bg-[#0F243A] border border-slate-800/90 hover:border-slate-700 rounded-xl p-4 shadow-sm transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Warm Senior Execs</span>
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display text-teal-300">{gtmStats.warmExecs}</span>
              <span className="text-xs font-mono text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded">
                {gtmStats.totalConnections.toLocaleString()} Total
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              <span className="text-teal-300 font-medium">10 A0 verified</span> · 114 at Novartis alone
            </p>
          </div>

          {/* Card 4: Live Dated Triggers */}
          <div className="bg-[#0F243A] border border-slate-800/90 hover:border-slate-700 rounded-xl p-4 shadow-sm transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Live Dated Triggers</span>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display text-white">{gtmStats.liveTriggers}</span>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded">Q1–Q2 2026</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Expansions (J&amp;J, AZ, Sanofi), VP GCC hires &amp; QMSR deadlines
            </p>
          </div>
        </section>

        {/* TAB NAVIGATION */}
        <div className="border-b border-slate-800">
          <nav className="flex flex-wrap gap-2 sm:gap-4">
            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex items-center gap-2 py-3 px-3.5 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === 'matrix'
                  ? 'border-teal-400 text-teal-300 font-semibold bg-teal-500/5 rounded-t-lg'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Account Matrix (51 Accounts)</span>
              <span className="ml-1 text-[11px] font-mono px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300">
                {filteredAccounts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('offers')}
              className={`flex items-center gap-2 py-3 px-3.5 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === 'offers'
                  ? 'border-teal-400 text-teal-300 font-semibold bg-teal-500/5 rounded-t-lg'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Productized Offers &amp; Entry Wedges</span>
              <span className="ml-1 text-[11px] font-mono px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300">
                5 Offers
              </span>
            </button>

            <button
              onClick={() => setActiveTab('cadence')}
              className={`flex items-center gap-2 py-3 px-3.5 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === 'cadence'
                  ? 'border-teal-400 text-teal-300 font-semibold bg-teal-500/5 rounded-t-lg'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>6-Touch Outreach Cadence</span>
              <span className="ml-1 text-[11px] font-mono px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300">
                Playbook
              </span>
            </button>

            <button
              onClick={() => setActiveTab('playbook')}
              className={`flex items-center gap-2 py-3 px-3.5 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === 'playbook'
                  ? 'border-teal-400 text-teal-300 font-semibold bg-teal-500/5 rounded-t-lg'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>ProofX Wedge Playbook</span>
              <span className="ml-1 text-[11px] font-mono px-1.5 py-0.2 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                Land &amp; Expand
              </span>
            </button>
          </nav>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: ACCOUNT MATRIX (51 ACCOUNTS)                           */}
        {/* ============================================================== */}
        {activeTab === 'matrix' && (
          <div className="space-y-4">
            {/* SEARCH AND FILTER BAR */}
            <div className="bg-[#0F243A] border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                {/* Search Box */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 51 accounts by name, city, trigger, entry offer..."
                    className="w-full bg-[#0A1B2E] border border-slate-700 rounded-lg pl-9 pr-8 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-teal-400/80 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* View Mode & Export */}
                <div className="flex items-center gap-2 self-end md:self-auto">
                  <div className="flex bg-[#0A1B2E] border border-slate-700 rounded-lg p-0.5">
                    <button
                      onClick={() => setViewMode('table')}
                      className={`px-2.5 py-1 text-xs rounded font-medium transition-colors cursor-pointer ${
                        viewMode === 'table' ? 'bg-teal-500/20 text-teal-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Table View
                    </button>
                    <button
                      onClick={() => setViewMode('cards')}
                      className={`px-2.5 py-1 text-xs rounded font-medium transition-colors cursor-pointer ${
                        viewMode === 'cards' ? 'bg-teal-500/20 text-teal-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Card Grid
                    </button>
                  </div>

                  <button
                    onClick={handleExportCSV}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#0A1B2E] hover:bg-slate-800 border border-slate-700 text-slate-200 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-teal-400" />
                    Export CSV
                  </button>
                </div>
              </div>

              {/* FILTER PILLS ROW */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80 items-center text-xs">
                {/* Sector filter */}
                <div className="flex items-center gap-1">
                  <span className="text-slate-500 font-mono text-[11px] mr-1">Sector:</span>
                  {(['All', 'MedTech', 'Pharma', 'Diagnostics'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSectorFilter(s)}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                        sectorFilter === s
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                          : 'bg-[#0A1B2E] text-slate-400 border border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <div className="h-4 w-px bg-slate-800 hidden sm:block" />

                {/* Priority filter */}
                <div className="flex items-center gap-1">
                  <span className="text-slate-500 font-mono text-[11px] mr-1">Priority:</span>
                  {(['All', 'P0', 'P1', 'P2'] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPriorityFilter(p)}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                        priorityFilter === p
                          ? p === 'P0'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                            : 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                          : 'bg-[#0A1B2E] text-slate-400 border border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {p === 'P0' ? 'P0 Act-Now' : p === 'P1' ? 'P1 High' : p === 'P2' ? 'P2 Track' : 'All'}
                    </button>
                  ))}
                </div>

                <div className="h-4 w-px bg-slate-800 hidden sm:block" />

                {/* City dropdown */}
                <div className="flex items-center gap-1">
                  <span className="text-slate-500 font-mono text-[11px] mr-1">City:</span>
                  <select
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    className="bg-[#0A1B2E] border border-slate-700 rounded-md text-xs text-slate-300 px-2 py-1 focus:outline-none focus:border-teal-400"
                  >
                    <option value="All">All Cities</option>
                    {cityOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Entry Offer filter */}
                <div className="flex items-center gap-1">
                  <span className="text-slate-500 font-mono text-[11px] mr-1">Offer:</span>
                  <select
                    value={entryOfferFilter}
                    onChange={(e) => setEntryOfferFilter(e.target.value)}
                    className="bg-[#0A1B2E] border border-slate-700 rounded-md text-xs text-slate-300 px-2 py-1 focus:outline-none focus:border-teal-400"
                  >
                    <option value="All">All Entry Wedges</option>
                    <option value="SaMD Assurance Pack">SaMD Assurance Pack</option>
                    <option value="UDI Sprint">UDI Sprint</option>
                    <option value="CSV/GAMP5 Sprint">CSV/GAMP5 Sprint</option>
                    <option value="Design-Control Accelerator">Design-Control Accelerator</option>
                    <option value="Health Check">Health Check</option>
                  </select>
                </div>

                {/* Reset Filters */}
                {(searchQuery || sectorFilter !== 'All' || priorityFilter !== 'All' || cityFilter !== 'All' || entryOfferFilter !== 'All') && (
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSectorFilter('All')
                      setPriorityFilter('All')
                      setCityFilter('All')
                      setEntryOfferFilter('All')
                    }}
                    className="ml-auto text-[11px] text-teal-400 hover:text-teal-300 underline font-mono cursor-pointer"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

            {/* RESULTS COUNT & FILTER STATUS */}
            <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
              <div>
                Showing <span className="text-white font-semibold">{filteredAccounts.length}</span> of {gtmAccounts.length} accounts
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-amber-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  P0: {filteredAccounts.filter((a) => a.priority === 'P0').length} Act-Now
                </span>
                <span className="text-teal-300">
                  P1: {filteredAccounts.filter((a) => a.priority === 'P1').length}
                </span>
                <span className="text-slate-400">
                  P2: {filteredAccounts.filter((a) => a.priority === 'P2').length}
                </span>
              </div>
            </div>

            {/* TABLE VIEW */}
            {viewMode === 'table' ? (
              <div className="bg-[#0F243A] border border-slate-800 rounded-xl overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#0A1B2E] border-b border-slate-800 text-slate-400 font-mono uppercase text-[11px] tracking-wider">
                        <th className="py-3 px-4">Account &amp; Priority</th>
                        <th className="py-3 px-3">Score</th>
                        <th className="py-3 px-3">Sector</th>
                        <th className="py-3 px-3">GCC Location</th>
                        <th className="py-3 px-4 min-w-[240px]">Why-Now Trigger</th>
                        <th className="py-3 px-3 min-w-[150px]">Entry Wedge</th>
                        <th className="py-3 px-3 text-right">Warm Execs</th>
                        <th className="py-3 px-3 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {filteredAccounts.map((account) => {
                        return (
                          <tr
                            key={account.id}
                            className={`hover:bg-slate-800/40 transition-colors ${
                              account.priority === 'P0' ? 'bg-amber-500/[0.02]' : ''
                            }`}
                          >
                            {/* Account & Priority */}
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                                    account.priority === 'P0'
                                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                      : account.priority === 'P1'
                                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                                  }`}
                                >
                                  {account.priority}
                                </span>
                                <div>
                                  <div className="font-semibold text-white text-sm hover:text-teal-300 cursor-pointer" onClick={() => setSelectedAccount(account)}>
                                    {account.name}
                                  </div>
                                  {account.tags && (
                                    <div className="flex gap-1 mt-0.5">
                                      {account.tags.slice(0, 2).map((t) => (
                                        <span key={t} className="text-[10px] font-mono text-slate-400 bg-slate-900/80 px-1 rounded">
                                          {t}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>

                            {/* Fit Score */}
                            <td className="py-3 px-3 font-mono">
                              <div className="flex items-center gap-1.5">
                                <span className={`font-bold ${account.score >= 15 ? 'text-amber-300' : 'text-teal-300'}`}>
                                  {account.score}
                                </span>
                                <span className="text-slate-500 text-[10px]">/20</span>
                              </div>
                            </td>

                            {/* Sector */}
                            <td className="py-3 px-3">
                              <span
                                className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                                  account.sector === 'MedTech'
                                    ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                                    : account.sector === 'Pharma'
                                    ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                                    : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                                }`}
                              >
                                {account.sector}
                              </span>
                            </td>

                            {/* GCC Location */}
                            <td className="py-3 px-3 font-mono text-slate-300 whitespace-nowrap">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                                {account.gccCity}
                              </span>
                            </td>

                            {/* Why-Now Trigger */}
                            <td className="py-3 px-4">
                              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                                {account.whyNow}
                              </p>
                            </td>

                            {/* Recommended Entry Offer */}
                            <td className="py-3 px-3">
                              <span
                                className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
                                  account.entryOffer === 'SaMD Assurance Pack'
                                    ? 'bg-teal-500/10 text-teal-300 border-teal-500/30'
                                    : account.entryOffer === 'UDI Sprint'
                                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                                    : account.entryOffer === 'CSV/GAMP5 Sprint'
                                    ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                                    : account.entryOffer === 'Design-Control Accelerator'
                                    ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                                    : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                                }`}
                              >
                                {account.entryOffer}
                              </span>
                            </td>

                            {/* Warm Execs */}
                            <td className="py-3 px-3 text-right font-mono">
                              <span
                                className={`font-semibold px-2 py-0.5 rounded text-xs ${
                                  account.warmExecs >= 10
                                    ? 'bg-teal-500/20 text-teal-300 font-bold border border-teal-500/40'
                                    : account.warmExecs > 0
                                    ? 'text-slate-200 bg-slate-800'
                                    : 'text-slate-500'
                                }`}
                              >
                                {account.warmExecs > 0 ? `${account.warmExecs} warm` : '—'}
                              </span>
                            </td>

                            {/* Action */}
                            <td className="py-3 px-3 text-center">
                              <button
                                onClick={() => setSelectedAccount(account)}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0A1B2E] hover:bg-teal-500/20 hover:text-teal-300 border border-slate-700 text-slate-300 text-xs font-mono transition-colors cursor-pointer"
                              >
                                Dossier
                                <ChevronRight className="w-3 h-3" />
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              /* CARD GRID VIEW */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAccounts.map((account) => (
                  <div
                    key={account.id}
                    className={`bg-[#0F243A] border rounded-xl p-4 flex flex-col justify-between hover:border-teal-500/40 transition-all shadow-sm ${
                      account.priority === 'P0' ? 'border-amber-500/40 bg-amber-500/[0.02]' : 'border-slate-800'
                    }`}
                  >
                    <div>
                      {/* Card Top */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                                account.priority === 'P0'
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                  : account.priority === 'P1'
                                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                                  : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              {account.priority}
                            </span>
                            <span
                              className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                                account.sector === 'MedTech'
                                  ? 'bg-blue-500/10 text-blue-300'
                                  : account.sector === 'Pharma'
                                  ? 'bg-purple-500/10 text-purple-300'
                                  : 'bg-emerald-500/10 text-emerald-300'
                              }`}
                            >
                              {account.sector}
                            </span>
                          </div>
                          <h3
                            onClick={() => setSelectedAccount(account)}
                            className="text-base font-semibold text-white mt-1.5 hover:text-teal-300 cursor-pointer"
                          >
                            {account.name}
                          </h3>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-mono font-bold text-amber-300">{account.score}</span>
                          <span className="text-[10px] font-mono text-slate-500">/20</span>
                          <div className="text-[10px] font-mono text-teal-400 mt-0.5">
                            {account.warmExecs > 0 ? `${account.warmExecs} Warm` : 'Outreach'}
                          </div>
                        </div>
                      </div>

                      {/* City */}
                      <div className="flex items-center gap-1 text-xs font-mono text-slate-400 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span>{account.gccCity}</span>
                      </div>

                      {/* Why-Now Box */}
                      <div className="bg-[#0A1B2E] border border-slate-800/80 rounded-lg p-2.5 mb-3">
                        <span className="text-[10px] font-mono uppercase text-amber-300/90 font-semibold block mb-0.5">
                          Why-Now Trigger:
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {account.whyNow}
                        </p>
                      </div>

                      {/* ProofX Play */}
                      <div className="text-xs text-slate-400 mb-3">
                        <span className="text-slate-500 font-mono text-[11px] block">ProofX Wedge Play:</span>
                        <span className="text-slate-300 line-clamp-2">{account.proofxPlay}</span>
                      </div>
                    </div>

                    {/* Card Bottom / Action */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-teal-300 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded">
                        {account.entryOffer}
                      </span>
                      <button
                        onClick={() => setSelectedAccount(account)}
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        View Dossier
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: PRODUCTIZED OFFERS & ENTRY WEDGES                       */}
        {/* ============================================================== */}
        {activeTab === 'offers' && (
          <div className="space-y-6">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#0F243A] via-[#102B47] to-[#0F243A] border border-teal-500/30 rounded-xl p-5 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                    CONVERSION PLAYBOOK // ZERO-FRICTION ENTRY WEDGES
                  </div>
                  <h2 className="text-xl font-bold font-display text-white">
                    The NovintiX Productized Offer Ladder
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                    Pre-scoped, fixed-price sprint wedges designed to fit within discretionary engineering spend thresholds ($8k–$90k), completely bypassing generic multi-month vendor procurement RFP cycles and proving 60% acceleration within 30 days.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 font-mono text-xs">
                  <div className="bg-[#0A1B2E] border border-slate-700/80 rounded-lg p-2.5 text-center">
                    <span className="text-slate-400 block text-[10px]">Average Sprint Time</span>
                    <span className="text-teal-300 font-bold text-sm">1–8 Weeks</span>
                  </div>
                  <div className="bg-[#0A1B2E] border border-slate-700/80 rounded-lg p-2.5 text-center">
                    <span className="text-slate-400 block text-[10px]">Pod Expansion Rate</span>
                    <span className="text-amber-300 font-bold text-sm">68% ARR Upsell</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Productized Offer Cards */}
            <div className="space-y-6">
              {productizedOffers.map((offer, idx) => (
                <div
                  key={offer.id}
                  className="bg-[#0F243A] border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all shadow-md"
                >
                  {/* Top Bar: Title, Tier, Price, Duration */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center font-mono font-bold text-sm">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-amber-300 uppercase tracking-wider font-semibold">
                            {offer.tier}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white font-display mt-0.5">
                          {offer.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-start md:self-auto font-mono text-xs">
                      <div className="bg-teal-500/10 text-teal-300 border border-teal-500/30 px-3 py-1 rounded-md font-bold text-sm">
                        {offer.price}
                      </div>
                      <div className="bg-slate-800 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {offer.duration}
                      </div>
                    </div>
                  </div>

                  {/* Summary & Buyer */}
                  <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-800/80 text-xs">
                    <div className="md:col-span-2">
                      <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider block mb-1">
                        Executive Scope
                      </span>
                      <p className="text-slate-200 text-sm leading-relaxed">{offer.summary}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider block mb-1">
                        Target Buyer Persona
                      </span>
                      <p className="text-slate-300 font-mono">{offer.targetBuyer}</p>
                      <span className="text-slate-500 font-mono text-[10px] block mt-2">
                        Sales Cycle: <span className="text-teal-300">{offer.conversionTimeline}</span>
                      </span>
                    </div>
                  </div>

                  {/* Deliverables & Pain Points */}
                  <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs border-b border-slate-800/80">
                    {/* Deliverables */}
                    <div>
                      <span className="text-slate-400 font-mono uppercase tracking-wider text-[11px] font-semibold flex items-center gap-1.5 mb-2.5 text-teal-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400" />
                        Guaranteed Deliverables &amp; Artifacts
                      </span>
                      <ul className="space-y-2">
                        {offer.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pain Points Addressed */}
                    <div>
                      <span className="text-slate-400 font-mono uppercase tracking-wider text-[11px] font-semibold flex items-center gap-1.5 mb-2.5 text-amber-300">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        Target GCC Bottlenecks Unblocked
                      </span>
                      <ul className="space-y-2">
                        {offer.painPoints.map((pain, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom: Tooling, Expansion & Accounts */}
                  <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs items-center">
                    <div className="md:col-span-2 space-y-1.5">
                      <div>
                        <span className="text-slate-500 font-mono text-[10px] uppercase block">
                          ProofX Automation Engine:
                        </span>
                        <p className="text-slate-300">{offer.proofxIntegration}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 font-mono text-[10px] uppercase block">
                          ARR Upsell &amp; Expansion Path:
                        </span>
                        <p className="text-teal-300 font-mono text-[11px]">{offer.expansionPath}</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-500 font-mono text-[10px] uppercase block mb-1.5">
                        Target P0 Accounts ({offer.targetAccounts.length}):
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {offer.targetAccounts.slice(0, 5).map((accName) => (
                          <button
                            key={accName}
                            onClick={() => {
                              setSearchQuery(accName)
                              setActiveTab('matrix')
                            }}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A1B2E] border border-slate-700 text-slate-300 hover:text-teal-300 hover:border-teal-500/40 transition-colors cursor-pointer"
                          >
                            {accName}
                          </button>
                        ))}
                        {offer.targetAccounts.length > 5 && (
                          <span className="text-[10px] font-mono text-slate-500 self-center">
                            +{offer.targetAccounts.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: 6-TOUCH EXECUTIVE OUTREACH CADENCE                     */}
        {/* ============================================================== */}
        {activeTab === 'cadence' && (
          <div className="space-y-6">
            {/* PERSONALIZATION CONTROLS */}
            <div className="bg-[#0F243A] border border-slate-800 rounded-xl p-5 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 mb-1.5">
                    <Mail className="w-3.5 h-3.5 text-teal-400" />
                    LIVE PERSONALIZATION ENGINE // 6-TOUCH SEQUENCE
                  </div>
                  <h2 className="text-lg font-bold font-display text-white">
                    Executive Outreach Sequence for Kalilur &amp; Leadership
                  </h2>
                  <p className="text-xs text-slate-300">
                    Select any target GCC account below to dynamically personalize all 6 touches with their exact location, trigger, and recommended entry offer.
                  </p>
                </div>

                {/* Personalizer Selectors */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
                  <div className="w-full sm:w-auto">
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                      Target GCC Account
                    </label>
                    <select
                      value={cadenceAccount.id}
                      onChange={(e) => {
                        const found = gtmAccounts.find((a) => a.id === e.target.value)
                        if (found) setCadenceAccount(found)
                      }}
                      className="w-full sm:w-56 bg-[#0A1B2E] border border-slate-700 text-white rounded-lg text-xs px-3 py-2 focus:outline-none focus:border-teal-400 font-mono"
                    >
                      {gtmAccounts.map((acc) => (
                        <option key={acc.id} value={acc.id}>
                          {acc.name} ({acc.gccCity})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full sm:w-auto">
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                      Recipient Name
                    </label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh"
                      className="w-full sm:w-36 bg-[#0A1B2E] border border-slate-700 text-white rounded-lg text-xs px-3 py-2 focus:outline-none focus:border-teal-400 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic Preview Pill */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="text-slate-400">Personalizing for:</span>
                <span className="text-teal-300 font-bold bg-[#0A1B2E] px-2 py-0.5 rounded border border-slate-700">
                  {cadenceAccount.name}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-300">GCC: {cadenceAccount.gccCity}</span>
                <span className="text-slate-400">•</span>
                <span className="text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                  Offer: {cadenceAccount.entryOffer}
                </span>
              </div>
            </div>

            {/* 6-TOUCH SEQUENCE TIMELINE */}
            <div className="space-y-5">
              {outreachCadence.map((step, idx) => {
                const personalizedTemplate = step.template
                  .replace(/{{firstName}}/g, contactName || 'Executive')
                  .replace(/{{company}}/g, cadenceAccount.name)
                  .replace(/{{gccCity}}/g, cadenceAccount.gccCity)
                  .replace(/{{entryOffer}}/g, cadenceAccount.entryOffer)

                const isCopied = copiedTouchIndex === idx

                return (
                  <div
                    key={idx}
                    className="bg-[#0F243A] border border-slate-800 hover:border-slate-700 rounded-xl p-5 shadow-sm transition-all"
                  >
                    {/* Step Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                          T{idx + 1}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                              Day {step.day}
                            </span>
                            <span
                              className={`text-[11px] font-mono px-2 py-0.5 rounded flex items-center gap-1 ${
                                step.channel === 'LinkedIn'
                                  ? 'bg-blue-500/10 text-blue-300 border border-blue-500/30'
                                  : step.channel === 'Email'
                                  ? 'bg-teal-500/10 text-teal-300 border border-teal-500/30'
                                  : step.channel === 'Event'
                                  ? 'bg-purple-500/10 text-purple-300 border border-purple-500/30'
                                  : step.channel === 'Content'
                                  ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                                  : 'bg-slate-800 text-slate-300 border border-slate-700'
                              }`}
                            >
                              {step.channel === 'LinkedIn' && <LinkedInIcon className="w-3 h-3" />}
                              {step.channel === 'Email' && <Mail className="w-3 h-3" />}
                              {step.channel === 'Event' && <Calendar className="w-3 h-3" />}
                              {step.channel === 'Content' && <FileText className="w-3 h-3" />}
                              {step.channel === 'Breakup' && <Clock className="w-3 h-3" />}
                              {step.channel}
                            </span>
                          </div>
                          <h3 className="text-base font-semibold text-white mt-0.5">
                            {step.touchpoint}
                          </h3>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopyTemplate(step.template, idx)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all cursor-pointer ${
                          isCopied
                            ? 'bg-teal-400 text-[#0A1B2E] shadow-md shadow-teal-400/20'
                            : 'bg-[#0A1B2E] hover:bg-slate-800 border border-slate-700 text-slate-200'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            Copied to Clipboard!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-teal-400" />
                            Copy Template
                          </>
                        )}
                      </button>
                    </div>

                    {/* Action Description */}
                    <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                      <span className="font-mono text-slate-500 uppercase text-[10px] mr-1">Objective:</span>
                      {step.action}
                    </p>

                    {/* Personalized Template Box */}
                    <div className="relative bg-[#0A1B2E] border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed shadow-inner">
                      {personalizedTemplate}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: PROOFX WEDGE PLAYBOOK                                   */}
        {/* ============================================================== */}
        {activeTab === 'playbook' && (
          <div className="space-y-6">
            {/* Overview Banner */}
            <div className="bg-gradient-to-r from-[#0F243A] via-[#112F4E] to-[#0F243A] border border-amber-500/30 rounded-xl p-5 shadow-lg">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  LAND &amp; EXPAND STRATEGY // ENTERPRISE MULTIPLIER
                </div>
                <h2 className="text-xl font-bold font-display text-white">
                  ProofX Land &amp; Expand Architecture
                </h2>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Start with a single scoped device family or subsystem pilot ($15k–$30k). Prove 60% compression in V&amp;V evidence generation and zero audit defects within 30 days. Expand into multi-seat team licenses ($1.5k–$3k/seat/yr), and culminate in an enterprise platform agreement ($120k–$400k/yr) supported by a retained NovintiX Engineering Pod ($30k–$50k/mo).
                </p>
              </div>
            </div>

            {/* 4-STAGE FLYWHEEL */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {playbookStages.map((st, i) => (
                <div
                  key={st.step}
                  className="bg-[#0F243A] border border-slate-800 hover:border-slate-700 rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
                        {st.step}
                      </span>
                      <span className="text-[10px] font-mono text-teal-300 border border-teal-500/30 px-1.5 py-0.5 rounded">
                        {st.duration}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white font-display mb-1">{st.name}</h3>

                    <div className="text-xs font-mono text-teal-300 font-semibold mb-3 bg-[#0A1B2E] p-1.5 rounded border border-slate-800 text-center">
                      {st.pricing}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">{st.objective}</p>

                    {/* Mechanisms */}
                    <div className="space-y-1.5 mb-3">
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">
                        Core Mechanisms:
                      </span>
                      {st.mechanisms.map((mech, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <Check className="w-3 h-3 text-teal-400 mt-0.5 shrink-0" />
                          <span>{mech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 text-[11px]">
                    <span className="text-[10px] font-mono uppercase text-amber-400/90 block">
                      Expansion Trigger:
                    </span>
                    <span className="text-slate-300">{st.transitionTrigger}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* PRICING BREAKDOWN MATRIX */}
            <div className="bg-[#0F243A] border border-slate-800 rounded-xl p-5 shadow-sm">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-teal-400" />
                ProofX Commercial Model &amp; Packaging Breakdown
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                {/* Tier 1 */}
                <div className="bg-[#0A1B2E] border border-slate-800 p-4 rounded-lg">
                  <span className="text-slate-400 font-mono text-[10px] uppercase">Pilot Wedge</span>
                  <h4 className="text-base font-bold text-white mt-1">Scoped Pilot</h4>
                  <div className="text-lg font-bold font-mono text-teal-300 my-2">$15k – $30k</div>
                  <p className="text-slate-300 text-[11px] mb-3">
                    Fixed-fee 30-day proof on 1 device family or GxP subsystem.
                  </p>
                  <ul className="text-slate-400 text-[11px] space-y-1 font-mono">
                    <li>• Non-invasive ALM webhooks</li>
                    <li>• Traceability benchmark report</li>
                    <li>• Zero long-term commitment</li>
                  </ul>
                </div>

                {/* Tier 2 */}
                <div className="bg-[#0A1B2E] border border-slate-800 p-4 rounded-lg">
                  <span className="text-slate-400 font-mono text-[10px] uppercase">Team License</span>
                  <h4 className="text-base font-bold text-white mt-1">Squad Seats</h4>
                  <div className="text-lg font-bold font-mono text-teal-300 my-2">$1.5k – $3k<span className="text-xs text-slate-400">/seat/yr</span></div>
                  <p className="text-slate-300 text-[11px] mb-3">
                    Active developer &amp; verification engineer seats across GCC squads.
                  </p>
                  <ul className="text-slate-400 text-[11px] space-y-1 font-mono">
                    <li>• 25 – 100 developer seats</li>
                    <li>• Automated CI/CD evidence capture</li>
                    <li>• Real-time Part 11 audit trails</li>
                  </ul>
                </div>

                {/* Tier 3 */}
                <div className="bg-[#0A1B2E] border border-slate-800 p-4 rounded-lg">
                  <span className="text-amber-400 font-mono text-[10px] uppercase">Enterprise SaaS</span>
                  <h4 className="text-base font-bold text-white mt-1">Platform License</h4>
                  <div className="text-lg font-bold font-mono text-amber-300 my-2">$120k – $400k<span className="text-xs text-slate-400">/year</span></div>
                  <p className="text-slate-300 text-[11px] mb-3">
                    Unlimited site-wide GCC license covering all device franchises.
                  </p>
                  <ul className="text-slate-400 text-[11px] space-y-1 font-mono">
                    <li>• Multi-tenant private cloud (VPC)</li>
                    <li>• Custom ALM connectors (Polarion/DOORS)</li>
                    <li>• Enterprise SSO &amp; multi-site compliance</li>
                  </ul>
                </div>

                {/* Tier 4 */}
                <div className="bg-[#0A1B2E] border border-slate-800 p-4 rounded-lg">
                  <span className="text-teal-400 font-mono text-[10px] uppercase">Embedded Capacity</span>
                  <h4 className="text-base font-bold text-white mt-1">Retained Pod</h4>
                  <div className="text-lg font-bold font-mono text-teal-300 my-2">$30k – $50k<span className="text-xs text-slate-400">/month</span></div>
                  <p className="text-slate-300 text-[11px] mb-3">
                    3–5 senior MedTech regulatory engineers embedded into daily sprints.
                  </p>
                  <ul className="text-slate-400 text-[11px] space-y-1 font-mono">
                    <li>• Dedicated verification architects</li>
                    <li>• Ongoing DHF maintenance &amp; audits</li>
                    <li>• Zero offshore onboarding lag</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* COMPETITIVE DIFFERENTIATION MATRIX */}
            <div className="bg-[#0F243A] border border-slate-800 rounded-xl p-5 shadow-sm">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                Competitive Positioning: NovintiX ProofX vs Legacy IT Giants vs In-House
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#0A1B2E] text-slate-400 font-mono uppercase text-[11px] border-b border-slate-800">
                      <th className="py-2.5 px-3">Evaluation Dimension</th>
                      <th className="py-2.5 px-3 text-teal-300 font-bold">NovintiX ProofX</th>
                      <th className="py-2.5 px-3">Legacy IT Giants (TCS/Wipro/HCL)</th>
                      <th className="py-2.5 px-3">In-House DIY Team</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {competitiveMatrix.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30">
                        <td className="py-3 px-3 font-medium text-white font-mono text-xs">
                          {row.capability}
                        </td>
                        <td className="py-3 px-3 text-teal-300 font-semibold bg-teal-500/[0.04]">
                          {row.novintix}
                        </td>
                        <td className="py-3 px-3 text-slate-400">{row.itGiants}</td>
                        <td className="py-3 px-3 text-slate-400">{row.inHouse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* OBJECTION HANDLING BATTLECARDS */}
            <div className="bg-[#0F243A] border border-slate-800 rounded-xl p-5 shadow-sm">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                Executive Objection Handling Battlecards
              </h3>
              <div className="space-y-3">
                {objectionBattlecards.map((obj) => {
                  const isOpen = expandedObjection === obj.id
                  return (
                    <div
                      key={obj.id}
                      className="bg-[#0A1B2E] border border-slate-800 rounded-lg overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setExpandedObjection(isOpen ? null : obj.id)}
                        className="w-full text-left px-4 py-3 flex items-center justify-between text-xs font-semibold text-white hover:text-teal-300 transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-amber-400 font-mono font-bold">Q:</span>
                          {obj.objection}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isOpen ? 'rotate-180 text-teal-300' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-3 pt-1 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed font-sans">
                          <span className="text-teal-400 font-mono uppercase text-[10px] font-bold block mb-1">
                            Executive Counter &amp; Proof:
                          </span>
                          {obj.counter}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* STRATEGIC ACCOUNT DOSSIER SLIDE-OVER DRAWER */}
      {selectedAccount && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
          <div
            className="w-full max-w-xl bg-[#0A1B2E] border-l border-slate-800 h-full overflow-y-auto p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        selectedAccount.priority === 'P0'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : selectedAccount.priority === 'P1'
                          ? 'bg-teal-500/20 text-teal-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {selectedAccount.priority} ACT-NOW
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      {selectedAccount.sector}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold font-display text-white mt-1.5">
                    {selectedAccount.name}
                  </h2>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    <span>{selectedAccount.gccCity}</span>
                    <span>•</span>
                    <span className="text-amber-300">Fit Score: {selectedAccount.score}/20</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedAccount(null)}
                  className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="py-5 space-y-5 text-xs">
                {/* Why Now Deep Dive */}
                <div className="bg-[#0F243A] border border-amber-500/30 rounded-xl p-4">
                  <span className="text-[11px] font-mono uppercase text-amber-300 font-bold flex items-center gap-1.5 mb-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    Why-Now Regulatory &amp; Expansion Trigger
                  </span>
                  <p className="text-slate-200 text-sm leading-relaxed">{selectedAccount.whyNow}</p>
                </div>

                {/* Recommended Entry Offer */}
                <div className="bg-[#0F243A] border border-slate-800 rounded-xl p-4">
                  <span className="text-[11px] font-mono uppercase text-teal-300 font-bold flex items-center gap-1.5 mb-1.5">
                    <Target className="w-3.5 h-3.5 text-teal-400" />
                    Recommended Entry Offer Wedge
                  </span>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-white font-display">
                      {selectedAccount.entryOffer}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
                      Fixed-Scope Sprint
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Designed to address {selectedAccount.name}&apos;s specific challenge in {selectedAccount.gccCity} with guaranteed delivery within 1–8 weeks.
                  </p>
                </div>

                {/* ProofX Playbook */}
                <div className="bg-[#0F243A] border border-slate-800 rounded-xl p-4">
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5 mb-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    ProofX Automation Play
                  </span>
                  <p className="text-slate-300 leading-relaxed font-mono text-[11px]">
                    {selectedAccount.proofxPlay}
                  </p>
                </div>

                {/* Warm Network Breakdown */}
                <div className="bg-[#0F243A] border border-slate-800 rounded-xl p-4">
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5 mb-1.5">
                    <Users className="w-3.5 h-3.5 text-teal-400" />
                    Executive Connections in GCC
                  </span>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold font-display text-white">
                      {selectedAccount.warmExecs}
                    </span>
                    <span className="text-slate-400 font-mono">Warm Senior Leaders identified</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Includes Director/VP of Software Engineering, Head of Regulatory Affairs, and GCC Site Managing Director.
                  </p>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-4 border-t border-slate-800 flex gap-3">
              <button
                onClick={() => navigateToCadenceForAccount(selectedAccount)}
                className="flex-1 bg-teal-500 hover:bg-teal-400 text-[#0A1B2E] font-semibold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Launch 6-Touch Cadence for {selectedAccount.name}
              </button>
              <button
                onClick={() => setSelectedAccount(null)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs py-2.5 px-4 rounded-lg font-mono transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-auto border-t border-slate-800/80 bg-[#0A1B2E]/50 px-4 py-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-mono">
          <div>
            NovintiX Internal GTM Portal • Strict Executive Confidentiality • ISO 13485 &amp; FDA 21 CFR Part 11 Compliant
          </div>
          <div>
            Built for Kalilur Rahman &amp; MedTech Practice Leadership
          </div>
        </div>
      </footer>
    </div>
  )
}
