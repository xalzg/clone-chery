# PHASE 0 — REPOSITORY AUDIT REPORT

**Project:** Chery Dunia Karawaci — Pixel-Perfect Website Reconstruction  
**Reference Website:** https://cherykarawaci.com/  
**Audit Date:** 2026-11-23  
**Workspace Audited:** `C:\Users\Rifalda\Documents\Cherry-Clone`  
**Status:** Phase 0 Complete — Awaiting Approval Before Project Initialization & Phase 1 Execution

---

## 1. Executive Summary & Critical Finding

Audit langsung terhadap direktori workspace `C:\Users\Rifalda\Documents\Cherry-Clone` menemukan kondisi aktual berikut:

- **Workspace saat ini kosong (0 file, 0 folder, belum merupakan repository Git).**
- Tidak ditemukan `package.json`, `vite.config.js`, `index.html`, `src/`, `public/`, aset gambar lokal, maupun file konfigurasi Tailwind CSS di dalam direktori workspace.
- Implementasi awal aplikasi tersedia dalam bentuk **prototype single-file React (~1.300 baris)** yang dilampirkan langsung pada instruksi user (`uiux dukungan`).
- Environment lokal terverifikasi memiliki **Node.js `v26.13.1`** dan **npm `11.20.0`** pada Windows (PowerShell).

> **Catatan Kepatuhan Rule 2.1 (Jangan Membuat Ulang Project dari Nol):**  
> Karena direktori workspace belum berisi file proyek apa pun, aplikasi tidak dapat dijalankan (`dev`/`build`) ataupun di-screenshot pada kondisi baseline saat ini sebelum file proyek tersedia atau diinisialisasi. Diperlukan konfirmasi pengguna apakah:
> 1. Proyek baseline Vite + React + Tailwind CSS diinisialisasi di workspace ini menggunakan kode prototype yang dilampirkan sebagai fondasi utuh, **atau**
> 2. Repository yang sudah ada berada di lokasi lain dan akan disalin/di-clone ke workspace terlebih dahulu.

---

## 2. Repository Structure Audit

### 2.1 Kondisi Aktual Workspace (`C:\Users\Rifalda\Documents\Cherry-Clone`)

```text
C:\Users\Rifalda\Documents\Cherry-Clone\
└── docs/
    └── PRD_AUDIT_REPORT.md   (dibuat pada Phase 0 ini)
```

- **Git repository:** Tidak terinisialisasi (`fatal: not a git repository`).
- **`package.json`:** Belum tersedia.
- **Entry point (`index.html`, `src/main.jsx`, `src/App.jsx`):** Belum tersedia di disk (tersedia sebagai teks prototype di prompt).
- **Tailwind / Vite config:** Belum tersedia.
- **Local assets / fonts:** Belum tersedia.

### 2.2 Struktur Prototype yang Dilampirkan (`uiux dukungan`)

Prototype yang dilampirkan adalah satu file monolitik (`App.jsx`) yang mencakup:
- Data statis (`DEALER_INFO`, `FEATURED_VEHICLES`, `SIMULATION_VARIANTS`, `FULL_PRICELIST`, `HERO_SLIDES`, `DEALER_BENEFITS`, `TESTIMONIAL_VIDEOS`, `ACTIVE_PROMO`).
- Utilitas format & kalkulasi (`formatRupiah`, `parseNumericString`, `calculateCreditSchedule`).
- Infrastruktur animasi berbasis CDN runtime (`AnimationContext`, `loadExternalScript`, `loadMotionModule`, `useAnimationEngines`, `SplitWordsHeading`, `MotionCard`).
- Sistem ikon inline SVG (`Icon`) dan logo vektor buatan (`CheryLogo`).
- 10 komponen section utama + 7 komponen modal pendukung + `ErrorBoundary`.
- Inline `<style>` untuk CSS variables, container `.chery-container`, dan aturan Lenis / reduced motion.

---

## 3. Existing Component Inventory (Berdasarkan Prototype)

| # | Component / Symbol | Type | Responsibility | Notes / Observations |
|---|---|---|---|---|
| 1 | `ErrorBoundary` | Class Component | Menangkap runtime render error dengan tombol muat ulang tampilan | Baik, pertahankan |
| 2 | `App` / `AppContent` | Root Container | State seluruh modal, preselected variant simulasi, hasil simulasi, `AnimationContext`, inline `<style>` | Terlalu besar dalam satu file; perlu modularisasi terkontrol pada Phase 2 |
| 3 | `Header` | Layout | Top utility bar (WA, phone, jam buka, email, IG), sticky main nav, dropdown `Tipe Mobil`, quick search desktop/mobile, mobile accordion menu, desktop off-canvas dealer drawer | Perlu audit visual terhadap header asli `cherykarawaci.com` |
| 4 | `HeroSlider` | Section 02 | Carousel 6 slide full-bleed, autoplay 5.5s, pause on hover, swipe touch, panah prev/next, indikator bawah | Memakai foto Wikimedia Commons, bukan banner asli `/uploads/*` |
| 5 | `PromotionSection` | Section 03 | Heading `Promo Mobil Chery Bulan Ini`, card split 12-kolom (banner + copy promo gelap), tombol `Selengkapnya` & `Simulasikan Kredit` | Tanggal promo tercantum `1 – 30 April 2026` (kedaluwarsa terhadap tanggal saat ini 2026-11-23 — wajib verifikasi live) |
| 6 | `VehicleCatalog` | Section 04 | Grid 1/2/3 kolom berisi 6 model unggulan (`Tiggo Cross CSH`, `Chery C5`, `Tiggo 8`, `Tiggo Cross`, `Chery E5`, `Chery J6`), link `Lihat Daftar Harga Lengkap`, footnote OTR | Menggunakan foto Wikimedia Commons; tombol `Details` membuka modal |
| 7 | `CreditSimulation` | Section 05 | Form simulasi kredit: `Nama`, `Nomor Hp (+62)`, `Pilih Mobil` (23 varian), `Uang Muka` (`%` & `Rp` tersinkronisasi), tombol DP cepat (`20/25/30/40%`), validasi & loading 350ms | Tidak ada input pilihan tenor di form (seluruh 5 tenor 12–60 bln ditampilkan di tabel hasil); perlu cek perilaku live site |
| 8 | `BenefitsSection` | Section 06 | Banner gelap `Miliki Segera Mobil Chery` + grid 4 benefit bernomor (`01 Warranty`, `02 Free Test Drives`, `03 Spare Parts`, `04 Maintenance Packages`) | Copy diklaim verbatim; visual layout wajib dicocokkan dengan live site |
| 9 | `TestimonialsSection` | Section 07 | Horizontal scroll-snap carousel berisi 8 kartu video testimoni + tombol panah kiri/kanan | Thumbnail menggunakan placeholder gelap tanpa gambar/video embed asli |
| 10 | `SimulationResult` | Section 08 (Modal) | Modal hasil simulasi (tampil setelah submit): ringkasan unit/OTR/DP, tabel 5 tenor (12–60 bln), CTA `Booking Test Drive` & `Hubungi Sales` (WA), disclaimer verbatim | Kurang keyboard Escape, backdrop close, ARIA dialog, focus trap |
| 11 | `Footer` | Section 09 | 3 kolom (Logo & welcome copy, Kontak, Google Maps iframe embed) + copyright strip | Cek kesesuaian kolom & link footer pada situs live |
| 12 | `ChatWidget` | Section 10 | Floating widget kanan bawah (`Chat with Us`), menu topik `Beli Mobil` & `Servis Mobil`, redirect ke WhatsApp | Cek tampilan, warna, dan posisi pada situs live |
| 13 | `VehicleDetailModal` | Overlay | Detail gambar kendaraan, highlights (khusus Chery C5), daftar varian & OTR, CTA `Simulasikan Kredit` & `Booking Test Drive` | Kurang modal accessibility standar |
| 14 | `PromoDetailModal` | Overlay | Detail promo + form `Pesan Sekarang` (demo state) | Kurang validasi & modal accessibility |
| 15 | `PriceListModal` | Overlay | Daftar harga lengkap 10 model / 23 varian (`FULL_PRICELIST`) | Baik, perlu pastikan sinkron dengan harga live terbaru |
| 16 | `SearchModal` | Overlay | Pencarian real-time | Hanya memfilter 6 `FEATURED_VEHICLES`, belum mencakup 4 model lain (`Chery Q`, `Chery C5 CSH`, `Tiggo 8 CSH`, `Tiggo 9 CSH`) |
| 17 | `TestDriveModal` | Overlay | Form jadwal test drive (demo state) | Kurang modal accessibility |
| 18 | `VideoPlaceholderModal` | Overlay | Modal placeholder video testimoni dengan link ke situs resmi | Perlu investigasi sumber video asli di situs live |
| 19 | `NoticeModal` | Overlay | Modal pemberitahuan untuk menu `Artikel` | Cek apakah halaman/section artikel perlu link langsung atau modal |
| 20 | `SplitWordsHeading` & `MotionCard` | Animation UI | Reveal teks per kata via GSAP ScrollTrigger + card entrance & hover lift via Motion | Berpotensi melanggar Rule 2.2 & 3.2 jika tidak ada pada referensi |
| 21 | `Icon` & `CheryLogo` | UI Helpers | 23 inline SVG icons + emblem Chery buatan | PRD merekomendasikan `lucide-react` untuk ikon UI dan aset logo resmi untuk brand |

---

## 4. Existing Feature Inventory

| Feature Area | Implemented in Prototype? | Functional Status (Code Audit) | Gaps / Verification Needed |
|---|---|---|---|
| Top Utility Bar (WA, Telp, Jam, Email, IG) | Ya | Link `href` terpasang | Verifikasi nomor WA 16 digit (`0822463061161331`) & jam operasional lengkap |
| Sticky Navigation & `Tipe Mobil` Dropdown | Ya | Toggle + outside-click close bekerja | Cek apakah dropdown di live site memuat seluruh 10 model atau 6 model |
| Mobile Navigation & Dealer Drawer | Ya | Accordion & slide-over drawer bekerja | Tambah Escape close & focus management |
| Search (Header input + `SearchModal`) | Ya | Filter berjalan untuk 6 model unggulan | Perluas pencarian ke seluruh 10 model / 23 varian di `FULL_PRICELIST` |
| Hero Slider (6 slides) | Ya | Autoplay, pause-hover, touch swipe, arrows, dots | Ganti aset & sesuaikan rasio/tinggi dengan live site |
| Promotion Section & Detail Modal | Ya | Card & modal form demo bekerja | **Kritis:** Verifikasi status promo aktif vs kedaluwarsa (`1–30 April 2026`) |
| Vehicle Catalog (6 Featured Cars) | Ya | Grid 6 mobil, klik gambar/tombol membuka detail | Verifikasi daftar mobil terbaru di live site & harga J6 |
| Full Price List Modal (10 Models, 23 Variants) | Ya | Data lengkap & rapi | Verifikasi harga OTR terbaru di `cherykarawaci.com/harga-mobil-chery` |
| Credit Simulation Form & Calculator | Ya | Sinkronisasi DP `%` <-> `Rp`, quick DP, validasi, kalkulasi 5 tenor | Pisahkan kalkulator ke `src/utils/creditCalculator.js`; cek asumsi bunga/admin/asuransi & apakah live site punya input tenor |
| Simulation Result Modal | Ya | Tampil pasca submit, link WA prefilled, tombol Test Drive | Tambah fitur ulangi simulasi langsung & aksesibilitas modal |
| Benefits Section (01–04) | Ya | 4 kartu + banner gelap | Verifikasi tata letak & visual terhadap live site |
| Testimonials Carousel (8 Customers) | Ya | Scroll horizontal + tombol prev/next + modal video | Verifikasi apakah ada thumbnail/YouTube embed asli di live site |
| Footer + Google Maps Embed | Ya | 3 kolom + iframe Google Maps + copyright | Verifikasi struktur kolom, link navigasi, dan alamat di live site |
| Floating Chat Widget | Ya | Expand/collapse + pilih topik + buka WhatsApp | Verifikasi visual widget chat asli di live site |
| Test Drive Booking Modal | Ya | Form demo + link WA | Tambah validasi field & modal accessibility |

---

## 5. Dependency Inventory

### 5.1 Installed Dependencies (`package.json`)
Belum ada `package.json` di workspace.

### 5.2 Runtime / Implicit Dependencies dalam Prototype
Prototype secara implisit bergantung pada:
1. **React (`react`, `react-dom`)** — Core UI library.
2. **Tailwind CSS** — Seluruh styling layout/utility memakai kelas Tailwind CSS (termasuk arbitrary values seperti `bg-[var(--chery-red)]`, `aspect-[16/10]`).
3. **Runtime CDN External Scripts (Technical Debt — Perlu Disederhanakan sesuai Section 3.2):**
   - `gsap@3.12.5` (via `cdn.jsdelivr.net`)
   - `gsap@3.12.5/dist/ScrollTrigger.min.js` (via `cdn.jsdelivr.net`)
   - `lenis@1.3.8` (via `cdn.jsdelivr.net`)
   - `motion@12/+esm` (via `cdn.jsdelivr.net` inline `<script type="module">`)
4. **External Hotlinked Media & Services:**
   - `commons.wikimedia.org/wiki/Special:FilePath/...` (foto kendaraan & hero)
   - `placehold.co` (fallback gambar)
   - `maps.google.com` (iframe embed lokasi dealer)

### 5.3 Target Dependencies Sesuai PRD Section 3
- `react`, `react-dom`
- `vite`, `@vitejs/plugin-react`
- `tailwindcss` (+ plugin Vite / PostCSS sesuai versi Tailwind)
- `lucide-react`
- **Tidak dibutuhkan / Dihapus:** Menjalankan `GSAP` + `ScrollTrigger` + `Lenis` + `Motion` secara bersamaan dari CDN. Sesuai PRD Section 3.2, prioritaskan CSS transitions, native scrolling, dan native CSS animations.

---

## 6. Technical Debt & Existing Bugs Identified

| Severity | Issue | Detail |
|---|---|---|
| **P0 — Blocker** | Workspace kosong (tidak ada scaffold Vite/React) | Tidak dapat menjalankan `dev`, `build`, console check, maupun screenshot baseline sebelum proyek diinisialisasi atau di-restore. |
| **P0 — Content/Business** | Tanggal promo berpotensi kedaluwarsa | `ACTIVE_PROMO.period` mencantumkan `1 – 30 April 2026`, sedangkan tanggal sistem saat ini adalah `2026-11-23`. Wajib diverifikasi langsung di `https://cherykarawaci.com/promo` pada Phase 1. |
| **P0 — Visual Fidelity** | CSS tokens, font, dan gambar belum diverifikasi dari situs live | Prototype secara eksplisit mencatat bahwa warna hex (`#C8102E`, dll.), font (`Inter`), dimensi px, dan gambar `/uploads/*` masih estimasi/substitusi Wikimedia. |
| **P1 — Performance / Arch** | 3 sistem animasi berjalan bersamaan via CDN runtime (`GSAP` + `Lenis` + `Motion`) | Bertentangan dengan PRD Section 3.2; rentan gagal saat offline/CDN lambat, memicu `ScrollTrigger.refresh()` berulang per heading, dan menambahkan animasi yang belum tentu ada di referensi. |
| **P1 — Accessibility** | 7 modal & 1 drawer tidak memenuhi standar aksesibilitas | Tidak ada penutupan via tombol `Escape`, tidak ada backdrop click-to-close pada modal, tidak ada `role="dialog"` / `aria-modal="true"`, tidak ada focus trap/restoration, dan scroll lock gagal jika Lenis nonaktif (`prefers-reduced-motion`). |
| **P1 — Data Verification** | Anomali data kontak pada `DEALER_INFO` | Nomor WhatsApp `0822463061161331` memiliki 16 digit (tidak lazim untuk nomor seluler Indonesia) dan jam operasional hanya mencantumkan `Minggu (08:30 - 15:30)`. Wajib dicek ulang di situs live. |
| **P2 — Functional** | `SearchModal` hanya mencari 6 dari 10 model | Model `Chery Q`, `Chery C5 CSH`, `Tiggo 8 CSH`, dan `Tiggo 9 CSH` ada di `FULL_PRICELIST` & `SIMULATION_VARIANTS`, tetapi tidak ditemukan saat pencarian. |
| **P2 — Functional** | Asumsi kalkulasi kredit tersembunyi | `calculateCreditSchedule` memakai flat rate 3.2%–5.4%, biaya admin Rp 3.5jt–5.5jt, dan asuransi 2.5%–8.5%, tetapi asumsi persentase ini belum ditampilkan eksplisit ke user (PRD Section 8.5). |
| **P2 — Architecture** | Monolith 1.300 baris dalam 1 file | Menyulitkan maintenance, pengujian per komponen, dan visual regression per section. |
| **P2 — SEO** | Belum ada `index.html` & SEO metadata | Title, meta description, favicon, Open Graph, dan canonical URL perlu disiapkan sesuai PRD Section 12.3. |

---

## 7. Baseline Verification Results (Section 4.3)

| Verification Step | Result | Reason |
|---|---|---|
| Jalankan aplikasi (`npm run dev`) | **Belum dapat dijalankan** | Workspace belum memiliki `package.json` / proyek Vite. |
| Jalankan build (`npm run build`) | **Belum dapat dijalankan** | Workspace belum memiliki `package.json` / proyek Vite. |
| Browser console check | **Belum dapat dijalankan** | Menunggu baseline app berjalan. |
| Interaksi utama & Responsive check | **Diaudit secara statis** | Diverifikasi melalui inspeksi kode prototype; uji runtime dilakukan setelah inisialisasi baseline. |
| Initial screenshots | **Belum diambil** | Akan diambil segera setelah baseline prototype dijalankan sebelum perubahan rekonstruksi. |

---

## 8. Unverified Items (Membutuhkan Phase 1 Forensic Analysis)

Hal-hal berikut **belum dapat diverifikasi** hanya dari audit prototype dan wajib diinspeksi langsung melalui browser pada `https://cherykarawaci.com/` di Phase 1:

1. **Desain Visual Asli & Layout Presisi:** Warna hex aktual, font family & weight asli, tinggi header/navigasi, lebar container, spacing antar section, proporsi hero banner, dan gaya card/tombol/shadow.
2. **Aset Visual Asli:** URL & resolusi logo Chery Dunia Karawaci, slide banner hero asli, banner promo aktif, foto kendaraan resmi di katalog, gambar section `Miliki Segera Mobil Chery`, dan thumbnail/embed video testimoni pelanggan.
3. **Status Promo Terbaru:** Apakah `Promo Beli Chery Dapat Emas` masih aktif atau sudah diganti promo lain per November 2026.
4. **Data Dealer & Kontak Live:** Verifikasi nomor WhatsApp (`0822463061161331`), nomor telepon (`0215322151`), jam buka Senin–Minggu, alamat lengkap, dan link media sosial.
5. **Daftar Model & Harga OTR Terbaru:** Verifikasi 6 model beranda (termasuk status harga Chery J6), 23 varian simulasi, dan tabel `/harga-mobil-chery`.
6. **Perilaku Interaktif Live:** Dropdown navigasi, behavior slider, form simulasi kredit (apakah memiliki input tenor atau langsung menghasilkan tabel), modal/halaman detail, dan tampilan widget chat asli di desktop & mobile.
7. **Responsive Breakpoints Live:** Tampilan aktual `cherykarawaci.com` pada viewport `375×812`, `430×932`, `768×1024`, `1366×768`, dan `1920×1080`.

---

## 9. Recommended Implementation Strategy

Mengikuti workflow PRD Section 13 secara bertahap:

1. **Checkpoint Persetujuan (Sekarang):** Konfirmasi inisialisasi workspace Vite + React + Tailwind CSS dengan memasukkan kode prototype sebagai baseline awal (serta mengambil baseline screenshot), atau konfirmasi jika ada repo eksisting di lokasi lain.
2. **Phase 1 — Reference Forensic Analysis (`docs/REFERENCE_FORENSIC_ANALYSIS.md`):** Inspeksi visual langsung `https://cherykarawaci.com/` menggunakan browser pada 5 target viewport (`375`, `430`, `768`, `1366`, `1920`), ekstraksi CSS tokens (warna, font, ukuran, spacing), audit aset asli, verifikasi promo/harga/kontak, dan dokumentasi lengkap.
3. **Phase 2 & 3 — Modular Architecture & Design System Extraction:** Memecah prototype secara terkontrol ke struktur `src/components/{layout,sections,ui,overlays}`, `src/data/`, `src/hooks/`, `src/utils/`, `src/styles/` sambil menghapus tumpukan CDN GSAP/Lenis/Motion yang berlebihan dan menggunakan design tokens terverifikasi.
4. **Phase 4 & 5 — Section-by-Section Reconstruction & Accessibility:** Merekonstruksi ke-10 section + seluruh modal secara berurutan sesuai referensi, melengkapi aksesibilitas modal (`Escape`, backdrop click, scroll lock, focus trap/restore, ARIA), memperluas pencarian ke seluruh model, serta memisahkan & memverifikasi `creditCalculator.js`.
5. **Phase 6 & 7 — Responsive & Visual Regression Testing (`docs/VISUAL_REGRESSION_REPORT.md`):** Membandingkan screenshot lokal vs referensi pada seluruh target viewport, mencatat diff berdasarkan prioritas P0–P3, dan melakukan iterasi perbaikan hingga akurasi visual optimal.
6. **Phase 8 — Production QA & Documentation:** Optimasi performa, SEO metadata, `npm run build` tanpa error, verifikasi console & fungsional, serta melengkapi seluruh dokumentasi di `docs/` dan `README.md`.
