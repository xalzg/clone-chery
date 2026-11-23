# PHASE 7 — VISUAL REGRESSION REPORT

**Project:** Chery Dunia Karawaci — Pixel-Perfect Website Reconstruction  
**Reference Website:** https://cherykarawaci.com/  
**Test Date:** 2026-11-23  
**Verification Method:** Side-by-side headless Edge screenshot comparison + Chrome DevTools Protocol (`Emulation.setDeviceMetricsOverride`) across all 5 PRD target viewports.

---

## 1. Viewport Coverage & Geometry Matrix

| Device Target | Viewport (`W × H`) | `innerWidth` | `scrollWidth` | Horizontal Overflow | Broken Images | Visual Parity Status |
|---|---|---:|---:|---|---|---|
| Mobile S | `375 × 812` | `375` | `375` | **None (`false`)** | `0 / 37` | **PASS** |
| Mobile S (Popup Open) | `375 × 812` | `375` | `375` | **None (`false`)** | `0 / 38` | **PASS** |
| Mobile L | `430 × 932` | `430` | `430` | **None (`false`)** | `0 / 37` | **PASS** |
| Tablet | `768 × 1024` | `768` | `768` | **None (`false`)** | `0 / 37` | **PASS** |
| Desktop | `1366 × 768` (`5500px` full) | `1366` | `1351` | **None (`false`)** | `0 / 37` | **PASS** |
| Desktop Large | `1920 × 1080` | `1920` | `1905` | **None (`false`)** | `0 / 37` | **PASS** |

---

## 2. Iterative Visual Regression Cycles (Pass 1 -> Pass 2)

### Issues Identified in Pass 1 & Resolved Before Pass 2

| Priority | Section | Observed Visual Difference (Pass 1) | Root Cause | Resolution Applied | Pass 2 Verification |
|---|---|---|---|---|---|
| **P0 — Critical** | `TestimonialsSection` (`Cerita Mereka Tentang Kami`) | Kartu video testimoni pertama melebar 100% lebar container (~1200px) bukan 4 kolom sejajar | Aturan unlayered `.location-item { width: 100%; }` pada `src/styles/index.css` mengalahkan utilitas lebar responsif Tailwind v4 (`lg:w-[calc(25%-15px)]`) | Menghapus `width: 100%` dari `.location-item` sehingga lebar responsif Tailwind bekerja penuh | **FIXED** — 4 kartu sejajar rapi (`Ridwan Hanif`, `Mark Konstantin`, `Jessica Gracelyn`, `Fajar Alfian`) lengkap dengan pill merah & dot indikator |
| **P1 — High** | `BenefitsSection` (`Miliki Segera Mobil Chery`) | Judul membungkus 2 baris (`Miliki Segera Mobil` / `Chery`) pada desktop `1366px`, sedangkan referensi tampil 1 baris | Ukuran font `45px` terlalu besar untuk setengah container (`col-lg-6`) pada `1366px` | Menyesuaikan skala responsif judul menjadi `!text-[28px] sm:!text-[34px] xl:!text-[40px]` | **FIXED** — Tampil 1 baris rapi sejajar referensi di `1366px` & `1920px` |
| **P1 — High** | `PromoPopupBanner` (Mobile `375px` & `430px`) | Pada situs live asli, popup banner melebihi lebar layar kecil; perlu jaminan batas aman pada mobile | Width popup perlu batas `calc(100vw - 32px)` | Menerapkan `w-[calc(100vw-32px)] max-w-[760px]` dan `<picture>` portrait mobile | **FIXED** — Terpusat penuh pada `375px` dengan tombol tutup terlihat jelas & `scrollWidth === 375` |

---

## 3. Section-by-Section Visual Fidelity Audit (Final State)

| # | Section | Visual Fidelity Check Against `https://cherykarawaci.com/` |
|---|---|---|
| 01 | **Header & Top Utility Bar** | `#111111` bar dengan wedge miring `#bf3136` di kiri & kanan, kontak terpusat, navbar putih sticky dengan logo hitam resmi `CHERY`, menu 7 item (`Home` aktif `#bf3136`), dropdown `Tipe Mobil`, ikon search, dan tombol drawer kanan. Sembunyikan top bar & sticky header pada `<= 991px`. |
| 02 | **Hero Slider** | 11 banner resmi desktop & mobile via `<picture>`, full-bleed tanpa teks overlay buatan, 11 indikator garis horizontal di bawah, panah prev/next halus. |
| 03 | **Promo Mobil Chery Bulan Ini** | Heading terpusat + subjudul muted, kartu banner resmi `Chery Bagi-Bagi Emas` terpusat (`max-w-[560px]`, `radius 16px`), tombol pill merah `#bf3136` `Selengkapnya` di bawah tengah. |
| 04 | **Mobil Terbaru Chery** | Latar `#F9F9F9`, heading `Mobil Terbaru` + `Chery` (`#bf3136`) + animated `.heading-divider`, grid 3×2 desktop / 2×3 tablet / 1×6 mobile, 6 foto resmi produk, ikon spek merah, harga `#bf3136`, tombol pill merah `Details` dengan ikon mata. |
| 05 | **Simulasikan Kredit Mobil Anda** | Berada dalam wrapper `#F9F9F9` yang sama, heading terpusat hitam, card putih elevasi `.find-car-form` (`radius 12px`), `Informasi Kendaraan`, grid 2×2 (`Nama *`, `Nomor Hp +62 *`, `Pilih Mobil *`, `Uang Muka % & Rp *`), shortcut DP cepat & filter tenor rapi, tombol pill merah `Simulasikan` terpusat. |
| 06 | **Miliki Segera Mobil Chery** | Latar `#2b2b2b`, kiri: heading 1 baris putih+merah & gambar resmi garansi 10 tahun; kanan: 4 kartu putih staggered (`01–02` turun `mt-12`, `03–04` naik) dengan ikon bulat `#bf3136` dan angka outline merah besar `01`–`04`. |
| 07 | **Cerita Mereka Tentang Kami** | Latar putih, heading + animated divider, 4 kartu video sejajar di desktop dengan thumbnail pelanggan asli, pill merah `.location-info` + ikon play resmi + nama pelanggan, dan dot merah melingkar di bawah. |
| 08 | **Hasil Simulasi Kredit Modal** | Ikon simulasi resmi 76×76 di tengah atas, judul `Hasil Simulasi Kredit Mobil Anda`, tabel 5 tenor dengan tombol merah `Detail v` yang membuka `Pokok Hutang` & `Suku Bunga`, tombol biru `#2775e2` `Booking Test Drive` + hijau `#1dbf53` `Hubungi Sales` + `Ulangi Simulasi`, disclaimer merah terpusat. |
| 09 | **Footer & Copyright Strip** | Latar `#2b2b2b`, 3 kolom (logo putih resmi + welcome copy, Kontak dengan 5 badge kotak melingkar `#bf3136`, iframe Google Maps `220px`), copyright `#181818` dengan wedge diagonal `#bf3136` di sisi kanan. |
| 10 | **Chat Widget & Scroll-Top** | Pill putih `Chat with Us` dengan ikon WhatsApp hijau di kanan bawah, popup header hitam + body `#eeeeee` berisi kartu `Beli Mobil` & `Servis Mobil`, plus tombol scroll-to-top merah saat scroll. |

---

## 4. Documented Intentional Improvements Over Live Reference

1. **Harga Chery J6 pada Homepage:** Menampilkan harga OTR terverifikasi `Rp. 565,500,000*` dari `/harga-mobil-chery` (live homepage menampilkan `Rp. 0*`).
2. **Keamanan Tautan Instagram:** Mengarahkan ke `https://www.instagram.com/chery.karawaci/` alih-alih tautan eksternal terdefaced pada live HTML.
3. **Transparansi Promo & Estimasi Kredit:** Menyertakan catatan verifikasi periode promo (`1 – 30 April 2026`) dan asumsi bunga/admin/asuransi simulasi secara eksplisit sesuai PRD Rule 2.3 & Section 8.5.
4. **Mobile Popup Responsiveness:** Memperbaiki perilaku popup banner agar tidak meluber pada `375px` & `430px`.

---

## 5. Pass 3 — Full 1:1 Multi-Page & Icon Audit Results

Seluruh perbedaan dari audit pengguna telah diaudit langsung terhadap HTML produksi semua subhalaman `https://cherykarawaci.com/` dan diverifikasi dengan headless Edge CDP:

| Route / Area | Target Width | `overflowX` | Broken Images | Interactive / Visual Result |
|---|---:|---|---|---|
| `/` (`BenefitsSection` icons & `01–04` outlines) | `1366px` | `false` | `0` | **PASS** — 4 ikon 1:1 (Chauffeur, Steering Wheel, Crossed Screwdriver/Wrench, Car + Roof Service Badge) & angka outline `01–04` bersih tanpa overlap |
| `/product/details/chery-e5` (Desktop & Mobile) | `1366px`, `375px` | `false` | `0` | **PASS** — Breadcrumb, FlexSlider gallery + thumbnails, Exterior & Interior details, 4 Performance Counters (`505 +Km`, `61.06 kWh`, `175 Km/h`, `340 Nm`), interactive `EXTERIOR COLOR` & `INTERIOR COLOR` switcher dengan preload instan, Price List OTR Jakarta + PDF Brochure, dan Simulasi Kredit model |
| `/promo` & `/promo/detail/:slug` | `1366px` | `false` | `0` | **PASS** — Banner 9-kolom + form penawaran 3-kolom + 2 kartu promo resmi |
| `/harga-mobil-chery` | `1366px` | `false` | `0` | **PASS** — Breadcrumb + 10 kartu harga model dengan tabel OTR lengkap |
| `/artikel` | `1366px` | `false` | `0` | **PASS** — 6 artikel resmi dengan thumbnail & CTA `Selengkapnya` |
| `/galeri` | `1366px` | `false` | `0` | **PASS** — Breadcrumb + 15 foto galeri resmi + accessible Lightbox |
| `/kontak` | `1366px` | `false` | `0` | **PASS** — Breadcrumb + 3 kartu info (`Senin - Sabtu 08:30 - 17:30`, `Minggu 08:30 - 15:30`) + foto showroom + form `Kirim Pesan` |
| Runtime Console & Exceptions | All routes | — | — | **0 console error, 0 runtime exception** |
