# COMPONENT INVENTORY — CHERY DUNIA KARAWACI

## Architecture Overview

Aplikasi telah direkonstruksi secara modular dengan pemisahan tanggung jawab antara layout, section halaman, UI primitives, accessible overlays, data terverifikasi, hooks, dan utilitas bisnis.

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── MobileNavigation.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── HeroSlider.jsx
│   │   ├── PromotionSection.jsx
│   │   ├── VehicleCatalog.jsx
│   │   ├── CreditSimulation.jsx
│   │   ├── BenefitsSection.jsx
│   │   └── TestimonialsSection.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── Modal.jsx
│   │   ├── ScrollTopButton.jsx
│   │   └── SectionHeading.jsx
│   └── overlays/
│       ├── ChatWidget.jsx
│       ├── NoticeModal.jsx
│       ├── PriceListModal.jsx
│       ├── PromoDetailModal.jsx
│       ├── PromoPopupBanner.jsx
│       ├── SearchModal.jsx
│       ├── SimulationResultModal.jsx
│       ├── TestDriveModal.jsx
│       └── VideoModal.jsx
├── data/
│   ├── dealer.js
│   ├── promotions.js
│   ├── testimonials.js
│   └── vehicles.js
├── hooks/
│   ├── useModal.js
│   └── useReducedMotion.js
├── pages/
│   └── HomePage.jsx
├── styles/
│   ├── animations.css
│   ├── index.css
│   └── tokens.css
├── utils/
│   ├── creditCalculator.js
│   └── currency.js
├── App.jsx
└── main.jsx
```

## Detailed Component Catalog

| Component | File | Purpose | Key Features / Accessibility |
|---|---|---|---|
| `Header` | [Header.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/layout/Header.jsx) | Top bar kontak (`.header-top` dengan wedge merah `#bf3136`), sticky navbar, logo resmi hitam, dropdown `Tipe Mobil`, search trigger, off-canvas dealer drawer | Sticky scroll behavior, outside-click dropdown close, accessible drawer via `useModal` |
| `MobileNavigation` | [MobileNavigation.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/layout/MobileNavigation.jsx) | Menu navigasi mobile (`< 1024px`) dengan search inline, accordion `Tipe Mobil`, dan shortcut Simulasi Kredit & Test Drive | Keyboard accessible, auto-close on navigation |
| `Footer` | [Footer.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/layout/Footer.jsx) | Footer 3 kolom `#2b2b2b` (logo putih + welcome, kontak dengan badge merah, iframe Google Maps) + copyright strip `#181818` dengan diagonal red wedge | Safe Instagram URL (`instagram.com/chery.karawaci`), lazy iframe |
| `HeroSlider` | [HeroSlider.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/sections/HeroSlider.jsx) | Carousel 11 banner resmi desktop/mobile via `<picture>` | Autoplay 5 detik (menghormati `prefers-reduced-motion`), pause-on-hover, swipe touch, arrows & 11 indicator bars |
| `PromotionSection` | [PromotionSection.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/sections/PromotionSection.jsx) | Section `Promo Mobil Chery Bulan Ini` dengan kartu banner terpusat dan overlay tombol pill `Selengkapnya` | Transparansi catatan periode promo sesuai Rule 2.3 |
| `VehicleCatalog` | [VehicleCatalog.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/sections/VehicleCatalog.jsx) | Katalog 6 model unggulan Chery pada grid 1/2/3 kolom | Gambar resmi + hover zoom, harga merah `#bf3136`, tombol pill `Details`, tautan `Daftar Harga Lengkap` |
| `CreditSimulation` | [CreditSimulation.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/sections/CreditSimulation.jsx) | Form `Simulasikan Kredit Mobil Anda` dalam card `.find-car-form` | 23 varian mobil, stepper `%` (±5%) tersinkronisasi dengan nominal `Rp`, quick DP `20/25/30/40%`, filter tenor opsional, validasi inline |
| `BenefitsSection` | [BenefitsSection.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/sections/BenefitsSection.jsx) | Section gelap `#2b2b2b` `Miliki Segera Mobil Chery` dengan gambar garansi 10 tahun & 4 kartu staggered bernomor outline `01`–`04` | Verbatim copy & staggered 2×2 grid sesuai referensi |
| `TestimonialsSection` | [TestimonialsSection.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/sections/TestimonialsSection.jsx) | Carousel 8 video testimoni pelanggan dengan thumbnail resmi & pill overlay merah | Scroll-snap horizontal, tombol prev/next desktop, circular red dots, membuka `VideoModal` YouTube |
| `SimulationResultModal` | [SimulationResultModal.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/overlays/SimulationResultModal.jsx) | Modal hasil kalkulasi kredit dengan baris `Detail` yang dapat dibuka per tenor | Menampilkan `Pokok Hutang`, `Suku Bunga`, `Tenor`, tombol `#2775e2` Test Drive, `#1dbf53` WA Sales, tombol `Ulangi Simulasi`, dan disclaimer |
| `VehicleDetailModal` | [VehicleDetailModal.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/overlays/VehicleDetailModal.jsx) | Detail unit, daftar varian & harga OTR, CTA Simulasi & Test Drive | Escape, backdrop close, focus trap via `Modal` |
| `PromoDetailModal` | [PromoDetailModal.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/overlays/PromoDetailModal.jsx) | Detail promo + switcher 2 campaign `/promo` + form inquiry tervalidasi | Menampilkan peringatan status periode promo |
| `PromoPopupBanner` | [PromoPopupBanner.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/overlays/PromoPopupBanner.jsx) | Popup banner informasi anti-penipuan resmi (desktop & mobile `<picture>`) | Dismissible via tombol close/backdrop/Escape, disimpan di `sessionStorage`, tanpa overflow di mobile 375px |
| `PriceListModal` | [PriceListModal.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/overlays/PriceListModal.jsx) | Daftar harga OTR lengkap 10 model / 23 varian dengan thumbnail resmi | Shortcut langsung `Simulasi` per varian |
| `SearchModal` | [SearchModal.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/overlays/SearchModal.jsx) | Pencarian instan seluruh 10 model & 23 varian Chery | Memperbaiki celah prototype yang sebelumnya hanya mencari 6 model |
| `TestDriveModal` | [TestDriveModal.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/overlays/TestDriveModal.jsx) | Formulir booking Free Test Drive dengan validasi inline & konfirmasi WA | Tanpa `alert()`, feedback state jelas |
| `VideoModal` | [VideoModal.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/overlays/VideoModal.jsx) | Pemutar YouTube embed resmi untuk ke-8 testimoni pelanggan | Mendukung timestamp awal (`startSeconds`) & tautan YouTube langsung |
| `ChatWidget` | [ChatWidget.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/overlays/ChatWidget.jsx) | Floating pill putih `Chat with Us` + popup header hitam & 2 kartu (`Beli Mobil` & `Servis Mobil`) | Link langsung ke WA Sales (`6282246006116`) & WA Servis (`628131890024`), dukungan Escape close |
| `Modal` + `useModal` | [Modal.jsx](file:///c:/Users/Rifalda/Documents/Cherry-Clone/src/components/ui/Modal.jsx) | Shared dialog wrapper | Escape close, click-outside, scroll lock, focus trap & restoration, ARIA `role="dialog"` |
