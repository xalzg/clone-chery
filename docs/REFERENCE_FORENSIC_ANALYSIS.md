# PHASE 1 — REFERENCE WEBSITE FORENSIC ANALYSIS

**Reference Website:** https://cherykarawaci.com/  
**Secondary Pages Audited:**
- `https://cherykarawaci.com/promo`
- `https://cherykarawaci.com/promo/detail/beli-chery-dapat-emas`
- `https://cherykarawaci.com/harga-mobil-chery`
**Stylesheets Audited:**
- `https://cherykarawaci.com/vendor/frontend/assets/css/style.css` (124,332 bytes — Motex Car Dealer theme customized for Chery Dunia Karawaci)
- `https://cherykarawaci.com/app/css/home.css` (3,196 bytes)
- `https://cherykarawaci.com/vendor/frontend/assets/css/pop-banner.css` (1,268 bytes)
**Audit Date:** 2026-11-23

---

## 1. Exact Section Inventory & DOM Order

Urutan DOM aktual halaman utama `https://cherykarawaci.com/` dari atas ke bawah:

| # | Section / Element | Reference Selector | Background | Padding / Spacing |
|---|---|---|---|---|
| 01a | Top Contact Utility Bar | `.header-top` | `#111111` + angled `#bf3136` side wedges (`10%` kiri & kanan) | `8px 0 10px 0` (disembunyikan `<= 992px`) |
| 01b | Sticky Main Navigation | `.main-navigation > .navbar` | `#ffffff` + `box-shadow: 0 0 40px 5px rgb(0 0 0 / 5%)` | Link desktop `padding: 30px 0` (~86px bar height); fixed top pada `<= 991px` |
| 01c | Off-Canvas Dealer Drawer | `.sidebar-popup` / `.sidebar-wrapper` | Overlay `rgba(0,0,0,0.8)`, drawer `#ffffff` (`450px` wide) | `padding: 40px` |
| 02 | Hero Slider (11 Slides) | `.hero-section > #carouselSlider` | Full-bleed responsive `<picture>` | `margin-top: 46px` pada `<= 991px` |
| 03 | Promo Mobil Chery Bulan Ini | `.promo-section.pt-120.pb-50` | `#ffffff` | `padding-top: 120px; padding-bottom: 50px` |
| 04 | Mobil Terbaru Chery (6 Cars) | `.car-area.bg.pt-50.pb-120` | `#F9F9F9` | `padding-top: 50px` (satu wrapper dengan Simulasi Kredit) |
| 05 | Simulasikan Kredit Mobil Anda | `.car-area.bg` > `.row.mt-5` > `.find-car-form` | Wrapper `#F9F9F9`, card `#ffffff` (`radius 12px`) | `padding: 30px` (desktop), `25px` (`<= 991px`), section `pb-120` |
| 06 | Miliki Segera Mobil Chery | `.choose-area.py-120` | `#2b2b2b` (`--color-gray`) | `padding: 120px 0` |
| 07 | Cerita Mereka Tentang Kami | `.testimonial-area.py-120` | `#ffffff` | `padding: 120px 0` |
| 08 | Hasil Simulasi Kredit (Modal) | `#modal_result_simulation` | `#ffffff` modal, header tabel `#f2f2f2` | Dipicu setelah submit `#formSimulasi` |
| 08b | Promo Popup Banner | `#promo-popup.popup-banner` | Overlay `rgba(0,0,0,0.5)`, `max-width: 800px` | Muncul 500ms setelah load (desktop & mobile image terpisah) |
| 09 | Footer & Copyright Strip | `.footer-area` + `.copyright` | Footer `#2b2b2b`, copyright `#181818` + diagonal `#bf3136` wedge (`50%` kanan) | Widget `pt-100 pb-70`, copyright `padding: 20px 0` |
| 10a | Floating WhatsApp Chat Widget | `.blantershow-chat` + `#whatsapp-chat` | Trigger `#ffffff` pill; popup header `#000000`, body `#eeeeee` | Fixed `bottom: 10px; right: 25px` |
| 10b | Scroll-to-Top Button | `#scroll-top` | `#bf3136` (`50×50px`, `radius 14px`) | Fixed `bottom: 85px; right: 30px` saat aktif |

---

## 2. Verified Color System (Extracted Directly from `style.css` & `home.css`)

| Token | Verified Hex / Value | Usage on Reference Site |
|---|---|---|
| `--theme-color` | `#bf3136` | Brand red utama (bukan `#C8102E` seperti di prototype!): button `.theme-btn`, `.promo-overlay-btn`, harga `.car-price`, icon badge, heading highlight `<span>`, divider, topbar/copyright polygon accents, active nav |
| `--theme-color-hover` | `#e6383e` / `#a0292e` | Hover `.promo-overlay-btn` (`#e6383e`) & `.link-all-article` (`#a0292e`) |
| `--color-dark` | `#111111` | Heading, nav text, `.header-top` bg, `.theme-btn:hover::before` circle fill |
| `--color-gray` | `#2b2b2b` | `.choose-area` background & `.footer-area` background |
| `--footer-bg2` | `#181818` | `.copyright` bar background |
| `--theme-bg-light` | `#F9F9F9` | `.car-area.bg` section background |
| `--body-text-color` | `#757F95` | Body paragraph & muted description text |
| `--color-white` | `#ffffff` | Page bg, cards, navbar, chat trigger pill |
| `--footer-text-color` | `#F5FAFF` | Footer contact & copyright text |
| `--btn-testdrive` | `#2775e2` | Tombol `Booking Test Drive` pada modal hasil simulasi |
| `--btn-whatsapp` | `#1dbf53` | Tombol `Hubungi Sales` pada modal hasil simulasi |
| `--owl-dot` | `#b43a3a` / `#d14444` | Indikator dot carousel testimoni |
| `--box-shadow` | `0 0 40px 5px rgb(0 0 0 / 5%)` | `.navbar`, `.car-item`, `.find-car-form`, `.choose-item`, `.theme-btn` |
| `--box-shadow2` | `0 0 15px rgba(0, 0, 0, 0.17)` | Fixed navbar & `#scroll-top` |

---

## 3. Verified Typography (`style.css`)

Google Fonts resmi dari `style.css` line 82:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');
```

| Role | Font Family | Size | Weight | Line Height | Color |
|---|---|---|---|---|---|
| Body | `'Roboto', sans-serif` | `16px` | `400` | `1.8` | `#757F95` |
| Headings (`h1`–`h6`) | `'Inter', sans-serif` | `40 / 35 / 28 / 22 / 18 / 16px` | `600` | `1.2` | `#111111` |
| `.site-title` | `'Inter', sans-serif` | `45px` (desktop), responsive mobile | `700` | `1.2` | `#111111` (`<span>` `#bf3136`) |
| Desktop Nav Link | `'Roboto'` / inherit | `17px` | `600` | — | `#111111` (active `#bf3136`) |
| Car Card Title | `'Inter', sans-serif` | `18px` | `600` | `1.2` | `#333333` |
| Car Card Price | inherit | `19px` | `600` | — | `#bf3136` |
| Choose Card Title | `'Inter', sans-serif` | `22px` | `600` | `1.2` | `#111111` |
| Choose Number Outline | inherit | `60px` | `800` | `1` | `-webkit-text-stroke: 1px #bf3136; transparent fill` |
| Theme Button | inherit | `14px` | `500` | — | `#ffffff` (`border-radius: 100px`) |
| Footer Widget Title | `'Inter', sans-serif` | `21px` | `600` | — | `#ffffff` |

---

## 4. Verified Layout Measurements

- **Container max-width:** `1200px` (`@media (min-width: 1200px)`).
- **Logo width:** `200px` desktop, `130px` mobile (`<= 991px`), `250px` / `50%` footer, `40%` sidebar drawer.
- **Heading Divider (`.heading-divider`):** `90px` lebar, `4px` garis bawah `#bf3136`, notch putih `15×6px` bergerak horizontal (`heading-move 5s infinite linear`).
- **Car Card (`.car-item`):** `border-radius: 10px`, `padding: 10px`, `.car-img` `border-radius: 10px` dengan zoom `scale(1.2)` saat hover, `.car-content` `padding: 10px 10px 6px 10px`.
- **Credit Simulation Form (`.find-car-form`):** `col-lg-8 mx-auto` (~66.6% container), `padding: 30px`, `border-radius: 12px`, input `border-radius: 8px`, `padding: 6px 12px`.
- **Benefits Cards (`.choose-item`):** 2 kolom staggered (`mt-lg-5` pada kolom kiri 01 & 02), `border-radius: 12px`, `padding: 20px`, icon bulat `80×80px` `#bf3136`.
- **Testimonial Cards (`.location-item`):** `border-radius: 15px`, overlay bar merah `.location-info` di `bottom: 20px; left: 20px; width: 80%; height: 50px; border-radius: 40px; background: #bf3136`.
- **Footer Map iframe:** `height: 220px`, `width: 100%`.
- **Chat Trigger & Popup:** Trigger `padding: 10px 20px; border-radius: 30px`; popup `width: 350px` (`left: 5%; right: 5%` pada `<= 480px`), header `height: 245px; border-radius: 30px`, body `top: -70px; height: 200px; border-radius: 30px`.

---

## 5. Critical Data, Security & Content Findings

1. **Nomor WhatsApp & Kontak Live (Diverifikasi dari HTML):**
   - Header Top & Footer & Sidebar menampilkan `0822463061161331` (`wa.me/+62822463061161331`), telepon kantor `0215322151`, jam `Minggu (08:30 - 15:30)`, email `support.karawaci@cherydunia.com`.
   - Widget Chat & Modal Hasil Simulasi menggunakan nomor WhatsApp Sales **`6282246006116`** (`Beli Mobil` / `Booking Test Drive` / `Hubungi Sales`) dan nomor Servis **`628131890024`** (`Servis Mobil`).
2. **Temuan Keamanan pada Link Instagram Live Site (PENTING):**
   - Pada HTML live `cherykarawaci.com` (baris 114 & 1208), tautan Instagram `Chery.karawaci` ternyata mengarah ke domain tidak resmi/defaced (`https://zeus4dsip.net/desktop/home`).
   - **Tindakan Aman:** Rekonstruksi kami **TIDAK menyalin tautan spam/judi tersebut**, melainkan mengarahkan ke akun resmi `https://www.instagram.com/chery.karawaci/`.
3. **Status Promo (Validasi Tanggal vs Live Site):**
   - Halaman utama live menampilkan promo `Beli Chery Dapat Emas` (`home-promo-images-BeliCheryDapatEmas_20260409_170233.webp`) dengan teks periode `1 – 30 April 2026` di halaman detail.
   - Halaman `/promo` live memuat 2 kartu promo: `Beli Chery Dapat Emas` dan `PROMO SPESIAL BULAN KEMERDEKAAN` (diunggah `19082026`).
   - Popup banner live menampilkan `POPUP_BANNER_DEKSTOP_20260911_122458.jpg` (diunggah `11 Sep 2026`).
   - Karena tanggal saat ini adalah `2026-11-23`, seluruh promo berperiode lampau tetap dipertahankan secara transparan dengan label verifikasi periode/status agar tidak mengklaim promo kedaluwarsa sebagai penawaran aktif tanpa konfirmasi sales (mematuhi Rule 2.3 & Section 8.3).
4. **Harga Chery J6:**
   - Homepage CMS live masih menampilkan `Rp. 0*`, sementara `/harga-mobil-chery` menampilkan `J6 RWD: 565,500,000` s.d. `J6T IWD: 650,500,000`. Kami menampilkan harga OTR terverifikasi `Rp. 565,500,000*` dengan catatan kaki transparan.
5. **Form Simulasi Kredit Live:**
   - Tidak memiliki dropdown tenor terpisah di form; form berisi `Nama *`, `Nomor Hp (+62) *`, `Pilih Mobil *` (23 varian), dan `Uang Muka *` (`%` stepper kelipatan 5% mulai 5% + nominal `Rp`). Hasil simulasi menampilkan tabel seluruh tenor dengan tombol `Detail` yang membuka breakdown `Pokok Hutang`, `Suku Bunga`, dan `Tenor`.

---

## 6. Responsive Behavior Rules (Extracted from `style.css` & `home.css`)

| Breakpoint | Observed Reference Behavior |
|---|---|
| `>= 1200px` | Container `1200px`, nav link `margin-right: 22px`, `nav-right` `margin-left: 45px`, 3-kolom car grid, 2-kolom promo carousel |
| `992px – 1199px` | Top bar gap mengecil (`10px`), nav link `margin-right: 15px`, `nav-right` `margin-left: 25px` |
| `<= 992px` / `<= 991px` | `.header-top` disembunyikan (`display: none`); `.navbar` menjadi `position: fixed; top: 0`; logo mengecil `200px -> 130px`; `#carouselSlider` mendapat `margin-top: 46px`; hamburger mobile muncul; `.nav-right` disembunyikan; `.find-car-form` `padding: 25px`; `.choose-content-wrapper` `margin-top: 40px` |
| `<= 767px` | Car grid 1 kolom, copyright diagonal wedge menjadi `clip-path: polygon(30% 1%, 100% 0, 100% 100%, 0% 100%)`, mobile stacked copyright text |
| `<= 600px` | Hero slider & popup banner otomatis memuat gambar `SLIDER_MOBILE__*` & `POPUP_BANNER_MOBILE_*` via `<picture><source>` |
| `<= 576px` | Promo carousel menampilkan 1 slide per layar |
| `<= 480px` | `#whatsapp-chat` melebar `left: 5%; right: 5%; width: auto` |

---

## 7. Known Limitations

- Chrome DevTools remote debugging port (`DevToolsActivePort`) tidak aktif pada environment host untuk browser subagent, sehingga analisis forensik dilakukan langsung melalui ekstraksi penuh live HTML (`home.html`, `promo.html`, `harga.html`, `promo-detail.html`) dan seluruh stylesheet produksi (`style.css`, `home.css`, `pop-banner.css`), dilengkapi verifikasi screenshot headless Chromium/Edge untuk visual regression.
- Backend API kalkulasi leasing `POST /api/request_simulasi` memerlukan CSRF token & server Chery; kalkulator lokal di `src/utils/creditCalculator.js` mereplikasi struktur output (`Tenor`, `Total Bayar Pertama`, `Angsuran`, `Pokok Hutang`, `Suku Bunga`) dengan asumsi bunga/admin/asuransi yang ditampilkan transparan.
