# IMPLEMENTATION LOG — CHERY DUNIA KARAWACI

## Phase 0 — Repository Audit (2026-11-23)
- Mengaudit direktori workspace `C:\Users\Rifalda\Documents\Cherry-Clone` dan menemukan direktori masih kosong (belum ada `package.json`, `vite.config.js`, maupun `src/`).
- Melakukan audit statis penuh terhadap prototype single-file React (~1.300 baris) pada `uiux dukungan`.
- Mendokumentasikan seluruh temuan, technical debt, anomali kontak/promo, dan rencana bertahap pada [PRD_AUDIT_REPORT.md](file:///c:/Users/Rifalda/Documents/Cherry-Clone/docs/PRD_AUDIT_REPORT.md).
- Memperoleh persetujuan pengguna (Opsi 1) untuk menginisialisasi proyek baseline Vite + React + Tailwind CSS dan melanjutkan ke Phase 1.

## Phase 1 — Reference Website Forensic Analysis (2026-11-23)
- Mengunduh dan mengaudit live HTML dari `https://cherykarawaci.com/`, `/promo`, `/promo/detail/beli-chery-dapat-emas`, dan `/harga-mobil-chery`.
- Mengunduh dan mengaudit stylesheet produksi `style.css` (124 KB), `home.css`, dan `pop-banner.css`.
- Menemukan seluruh token desain aktual yang berbeda dari estimasi prototype:
  - Warna merah brand aktual: `#bf3136` (bukan `#C8102E`).
  - Typography resmi: `Roboto` (body `16px`, `#757F95`) dan `Inter` (headings, `#111111`).
  - Permukaan section gelap: `#2b2b2b` (`choose-area` & `footer-area`), copyright strip `#181818` dengan diagonal red wedge `#bf3136`, topbar `#111111` dengan angled red wedges kiri & kanan.
  - 11 hero slide resmi dengan gambar terpisah desktop (`>= 601px`) & mobile (`<= 600px`).
  - 6 thumbnail produk resmi homepage + 4 thumbnail tambahan di daftar harga.
  - 8 thumbnail video testimoni resmi + 8 YouTube video ID asli.
  - Temuan keamanan: tautan Instagram di footer live HTML terdeteksi terdefaced (`zeus4dsip.net`); direkonstruksi aman ke `https://www.instagram.com/chery.karawaci/`.
- Mengambil 6 screenshot referensi live melalui headless Edge across 5 target viewport (`375`, `430`, `768`, `1366`, `1920`).
- Menyimpan laporan pada [REFERENCE_FORENSIC_ANALYSIS.md](file:///c:/Users/Rifalda/Documents/Cherry-Clone/docs/REFERENCE_FORENSIC_ANALYSIS.md).

## Phase 2 & 3 — Component Architecture & Design System Extraction
- Memecah kode monolitik menjadi struktur modular: `components/{layout,sections,ui,overlays}`, `data/`, `hooks/`, `pages/`, `styles/`, `utils/`.
- Menghapus tumpukan 3 library animasi CDN (`GSAP` + `ScrollTrigger` + `Lenis` + `Motion`) sesuai PRD Section 3.2 dan menggantinya dengan CSS transitions & keyframe native (`heading-move`, `slide-down`, `showchat`) yang menghormati `prefers-reduced-motion`.
- Menerapkan design tokens aktual pada `src/styles/tokens.css`, `src/styles/animations.css`, dan `src/styles/index.css`.
- Memisahkan kalkulasi kredit ke `src/utils/creditCalculator.js` dan format rupiah ke `src/utils/currency.js`.

## Phase 4 & 5 — Section Reconstruction, Features & Accessibility
- Merekonstruksi ke-10 section + 9 overlay/modal sesuai urutan DOM referensi:
  1. `Header` + `MobileNavigation` + `DealerSidebarDrawer`
  2. `HeroSlider` (11 responsive slides)
  3. `PromotionSection` (kartu terpusat + pill overlay `Selengkapnya` + catatan verifikasi periode promo)
  4. `VehicleCatalog` (6 unit resmi + harga merah `#bf3136` + tombol `Details` + link Daftar Harga)
  5. `CreditSimulation` (`.find-car-form`, 23 varian, stepper DP ±5% + nominal `Rp`, DP cepat `20/25/30/40%`, filter tenor opsional, validasi inline)
  6. `BenefitsSection` (`#2b2b2b`, gambar resmi garansi 10 tahun, 4 kartu staggered bernomor outline `01`–`04`)
  7. `TestimonialsSection` (8 kartu video resmi dengan pill merah `.location-info` + pemutar YouTube embed di `VideoModal`)
  8. `SimulationResultModal` (ikon simulasi resmi, tabel tenor dengan tombol `Detail` yang membuka `Pokok Hutang` & `Suku Bunga`, tombol biru Test Drive + hijau WA Sales + `Ulangi Simulasi`)
  9. `Footer` (3 kolom `#2b2b2b`, logo putih resmi, Google Maps embed resmi, copyright `#181818` dengan diagonal red wedge)
  10. `ChatWidget` (pill putih `Chat with Us`, popup header hitam + 2 kartu `Beli Mobil` & `Servis Mobil`) + `ScrollTopButton` + `PromoPopupBanner`.
- Menambahkan hook `useModal` untuk seluruh modal & drawer: Escape close, backdrop close, scroll lock, focus trap & restoration, dan ARIA dialog attributes.
- Memperluas `SearchModal` agar mencakup seluruh 10 model / 23 varian Chery.

## Phase 6 & 7 — Visual Regression Testing & Iterative Fixes
- **Pass 1 Screenshot Audit:** Menemukan 2 issue nyata dari perbandingan visual:
  - **P0:** Aturan `width: 100%` unlayered pada `.location-item` menimpa kelas lebar utilitas Tailwind v4 sehingga kartu testimoni melebar 100% container. -> **Diperbaiki** dengan menghapus `width: 100%` pada `.location-item`.
  - **P1:** Judul `Miliki Segera Mobil Chery` membungkus menjadi 2 baris pada desktop `1366px` dibanding 1 baris di referensi. -> **Diperbaiki** dengan skala tipografi responsif `!text-[28px] sm:!text-[34px] xl:!text-[40px]`.
  - **P1:** Memastikan `PromoPopupBanner` menggunakan `w-[calc(100vw-32px)] max-w-[760px]` agar tidak pernah meluber pada layar `375px` & `430px`.
- **Pass 2 Verification:** Build ulang produksi dan re-capture seluruh 5 target viewport (`375`, `430`, `768`, `1366`, `1920`) dengan `--force-device-scale-factor=1` untuk verifikasi akhir.

## Phase 9 — Full 1:1 Multi-Page Parity & Icon Reconstruction (User Audit Follow-up)
Berdasarkan audit langsung pengguna terhadap detail produk `chery-e5` dan ikon section `Miliki Segera Mobil Chery`:
- **React Router Multi-Page Architecture:** Menambahkan `react-router-dom` dengan `SiteLayout` bersama dan 8 rute resmi yang sama persis 1:1 dengan `https://cherykarawaci.com/`:
  - `/` (`HomePage`)
  - `/product/details/:slug` (`ProductDetailPage` — seluruh 6 model: `tiggo-cross-csh`, `chery-c5`, `tiggo-8`, `tiggo-cross`, `chery-e5`, `chery-j6`)
  - `/promo` (`PromoPage`) & `/promo/detail/:slug` (`PromoDetailPage`)
  - `/harga-mobil-chery` (`HargaPage`)
  - `/artikel` (`ArtikelPage`)
  - `/galeri` (`GaleriPage` dengan 15 foto resmi & accessible Lightbox)
  - `/kontak` (`KontakPage` dengan jam operasional lengkap & formulir `Kirim Pesan`)
- **Product Detail 1:1 (`ProductDetailPage`):** Merekonstruksi penuh Breadcrumb banner, FlexSlider gallery + thumbnail strip, seluruh section detail `EXTERIOR`, `INTERIOR`, `SPECIFICATION`, `PERFORMANCE`, dan `FEATURES` dengan gambar dan deskripsi verbatim dari situs asli, 4-kolom animated Performance Counter, interactive `EXTERIOR COLOR` / `INTERIOR COLOR` switcher + official circular color swatches, `PRICE LIST ON THE ROAD JAKARTA` + tautan PDF `Download Brochure` + `Pesan Sekarang`, serta simulasi kredit spesifik model.
- **Exact 1:1 Benefit Icons (`BenefitsSection`):** Mengganti 4 ikon Lucide generik menjadi SVG vektor 1:1 yang identik dengan Flaticon/FontAwesome Pro pada situs asli (`01 Chauffeur`, `02 Steering Wheel`, `03 Crossed Screwdriver & Wrench`, `04 Front Car + Service Badge`) serta memperbaiki font outline angka `01–04` ke `Roboto` agar tidak ada garis tumpang tindih pada angka `04`.
- **1:1 Header Parity:** Menghapus ikon search ekstra pada navbar desktop (memindahkan pencarian ke dalam off-canvas Dealer Sidebar Drawer & menu mobile) dan menyamakan tombol kanan dengan `bars-sort` asli.
