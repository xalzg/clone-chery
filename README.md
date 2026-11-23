# Chery Dunia Karawaci — Official Dealer Website Reconstruction

Frontend reconstruction of the **Chery Dunia Karawaci** official dealer website (`https://cherykarawaci.com/`), built with React, Vite, Tailwind CSS, and custom CSS tokens extracted directly from the reference site.

## Features

- **Header & Navigation:** Top dark utility contact bar with signature angled `#bf3136` red side wedges, sticky navigation bar, official Chery brand logo, `Tipe Mobil` dropdown, full-lineup vehicle search modal (10 models / 23 variants), mobile navigation menu, and off-canvas dealer information drawer.
- **Hero Slider:** 11 responsive banner slides using `<picture>` with dedicated desktop (`>= 601px`) and mobile (`<= 600px`) assets, autoplay with reduced-motion support, touch swipe, prev/next controls, and slide indicators.
- **Promotion Section:** Centered official promo showcase (`Promo Mobil Chery Bulan Ini`) with pill overlay CTA, campaign detail modal, period transparency notices, and dismissible official anti-fraud notice popup banner.
- **Vehicle Catalog & Full Price List:** 6 featured homepage vehicles (`Tiggo Cross CSH`, `Chery C5`, `Tiggo 8`, `Tiggo Cross`, `Chery E5`, `Chery J6`) with detail modal, plus complete 10-model / 23-variant OTR price list modal.
- **Credit Simulation & Expandable Result Table:** Interactive credit calculator supporting all 23 Chery variants, synced DP `%` stepper (±5%) and `Rp` input, Quick DP shortcuts (`20%`, `25%`, `30%`, `40%`), optional tenor filter (`12–60` months), expandable `Detail` breakdown (`Pokok Hutang`, `Suku Bunga`, `Tenor`), and direct Test Drive / WhatsApp Sales actions.
- **Dealer Benefits (`Miliki Segera Mobil Chery`):** Dark `#2b2b2b` section with official 10-year warranty banner and staggered 2×2 numbered cards (`01`–`04`).
- **Customer Video Testimonials:** Carousel of 8 official video testimonials with authentic thumbnails, signature red pill overlays, and live YouTube embed modal playback.
- **Footer & Floating Chat Widget:** 3-column dark footer with official white logo, dealer contacts, Google Maps embed, diagonal red copyright strip, floating `Chat with Us` WhatsApp widget (`Beli Mobil` & `Servis Mobil`), and scroll-to-top button.

## Technology Stack

- **React 19** (JavaScript ES6+)
- **Vite 6** (`@vitejs/plugin-react`)
- **Tailwind CSS 4** (`@tailwindcss/vite`) + Custom CSS Design Tokens
- **Lucide React** (UI Icons)

## Environment Requirements

- Node.js `>= 18` (verified on Node.js `v26.13.1`, npm `11.20.0`)

## Installation & Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```text
├── docs/
│   ├── PRD_AUDIT_REPORT.md
│   ├── REFERENCE_FORENSIC_ANALYSIS.md
│   ├── COMPONENT_INVENTORY.md
│   ├── ASSET_INVENTORY.md
│   ├── IMPLEMENTATION_LOG.md
│   ├── VISUAL_REGRESSION_REPORT.md
│   └── FINAL_QA_REPORT.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── components/
    │   ├── layout/        # Header, MobileNavigation, Footer
    │   ├── sections/      # HeroSlider, PromotionSection, VehicleCatalog, CreditSimulation, BenefitsSection, TestimonialsSection
    │   ├── ui/            # Button, Container, Modal, SectionHeading, ScrollTopButton, ErrorBoundary
    │   └── overlays/      # SimulationResultModal, VehicleDetailModal, PromoDetailModal, PromoPopupBanner, PriceListModal, SearchModal, TestDriveModal, VideoModal, NoticeModal, ChatWidget
    ├── data/              # dealer.js, vehicles.js, promotions.js, testimonials.js
    ├── hooks/             # useModal.js, useReducedMotion.js
    ├── pages/             # HomePage.jsx
    ├── styles/            # tokens.css, animations.css, index.css
    ├── utils/             # currency.js, creditCalculator.js
    ├── App.jsx
    └── main.jsx
```

## Known Limitations & Transparency Notes

1. **Credit Simulation Math:** The reference backend endpoint (`POST /api/request_simulasi`) is server-side protected; calculations run locally in `src/utils/creditCalculator.js` using transparent flat-rate estimates (`3.2%–5.4%/year`) and display non-binding disclaimers.
2. **Promotion Dates:** Published promotions on the live reference CMS carry earlier 2026 dates (`1–30 April 2026` and `August 2026`); the UI preserves official banners while explicitly prompting visitors to confirm active promotions with sales.
3. **Chery J6 Homepage OTR:** The live homepage CMS displays `Rp. 0*` for Chery J6; this build displays the verified OTR price (`Rp. 565,500,000*`) from `/harga-mobil-chery` with a transparent note.
4. **Instagram Link Sanitization:** The live site's footer Instagram anchor was observed pointing to an unrelated external domain during forensic audit; this implementation safely links to `https://www.instagram.com/chery.karawaci/`.
5. **Remote Image Assets:** Official images load from `https://cherykarawaci.com/uploads/...` with graceful fallback placeholders if offline.
