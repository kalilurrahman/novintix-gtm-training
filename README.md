# NovintiX — The MedTech Lifecycle Partner

> Production web application combining the NovintiX public lifecycle website, the **ProofX** AI V&V showcase, and the internal passcode-gated **GCC GTM Intelligence Portal** (`/gtm`).

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.18+ or Node 20+ / 24+
- npm 10+

### Local Development
```bash
# Clone the repository
git clone https://github.com/novintix/novintix-gtm-training.git
cd novintix-gtm-training

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Typecheck and build all static routes
npm run build

# Start production server
npm run start
```

---

## 🔐 GCC GTM Portal Access (`/gtm`)
The internal India GCC & ProofX Go-To-Market Intelligence Portal is client-passcode protected:
- **URL:** `/gtm`
- **Passcode:** `novintix2026`
- **Key Modules:**
  - **KPI Header:** 51 Accounts · 20 P0 Act-Now · 195 Warm Senior Execs · 24 Live Triggers
  - **Account Matrix:** Filterable 51-account database (J&J, AstraZeneca, GSK, Novartis, Roche, Sanofi, Medtronic MEIC, Philips, Siemens Healthineers, etc.)
  - **Productized Offer Ladder:** Health Check ($8k–$15k), UDI Sprint ($25k–$60k), SaMD Assurance Pack ($40k–$90k), Design-Control Accelerator ($60k–$120k), Retained Pod ($30k–$50k/mo)
  - **6-Touch Outreach Cadence:** One-click copy templates for LinkedIn, trigger emails, and roundtables
  - **ProofX Wedge Strategy:** Pilot to enterprise expansion framework

---

## 📐 Architecture & Tech Stack

| Component | Technology |
|---|---|
| Framework | **Next.js 16.4.6** (App Router, Turbopack, Partial Prerendering) |
| UI & Runtime | **React 19.3.0** + TypeScript strict mode |
| Styling | **Tailwind CSS 4** + Custom Design Tokens |
| Icons | **Lucide React** + Custom inline SVGs for brand compliance |
| Data Layer | Static TypeScript data stores (`data/*.ts`) |
| Fonts | Google Fonts: Space Grotesk, Inter, IBM Plex Mono |

---

## 🗺️ Route Directory

- [`/`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/page.tsx) — Main Homepage (12 alternating dark/light sections, interactive ProofX tour, Lifecycle Thread SVG)
- [`/services/[slug]`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/services/[slug]/page.tsx) — Dynamic MedTech services detail pages:
  - `/services/product-engineering` — Product Engineering & Discovery
  - `/services/supply-chain` — Supply Chain
  - `/services/manufacturing` — Manufacturing
  - `/services/quality-regulatory` — Quality & Regulatory Compliance
  - `/services/clinical-affairs` — Clinical Affairs
  - `/services/digital-ai` — Digital & AI Hub
- [`/proofx`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/proofx/page.tsx) — ProofX AI-Native V&V platform showcase & pricing tiers
- [`/customers`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/customers/page.tsx) — Filterable case studies with one-metric proof
- [`/insights`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/insights/page.tsx) — The Lifecycle Brief regulatory watch & guides
- [`/about`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/about/page.tsx) — Founding story, 3-hub footprint (Exton PA, Dublin, Coimbatore)
- [`/careers`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/careers/page.tsx) — 4 open roles with quick-apply modal
- [`/contact`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/contact/page.tsx) — 5-field consult form + hub routing
- [`/gtm`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/gtm/page.tsx) — Passcode-gated GCC GTM Portal
- [`/privacy`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/privacy/page.tsx), [`/terms`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/terms/page.tsx), [`/responsible-ai`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/responsible-ai/page.tsx), [`/cookies`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/app/cookies/page.tsx) — Compliance & legal pages
- [`/public/llms.txt`](file:///c:/Users/VC/Documents/GitHub/novintix-gtm-training/public/llms.txt) — LLM-readable site manifest

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub / GitLab / Bitbucket.
2. In [Vercel Dashboard](https://vercel.com/dashboard), click **Add New > Project** and import the repository.
3. Framework Preset: **Next.js** (detected automatically).
4. Build Command: `next build` (default).
5. Output Directory: `.next` (default).
6. Click **Deploy**. Vercel will build and distribute all 22 static and partial-prerendered routes globally on Edge CDN.

### Deploy to Railway
1. In [Railway Dashboard](https://railway.app), click **New Project > Deploy from GitHub repo**.
2. Select `novintix-gtm-training`.
3. Under **Settings > Build**:
   - Build Command: `npm run build`
   - Start Command: `npm run start`
4. Set Environment Variable:
   - `PORT=3000`
5. Railway will automatically provision the Node.js container and expose a public HTTPS domain.
