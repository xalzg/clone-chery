# ASSET INVENTORY — CHERY DUNIA KARAWACI

Seluruh aset visual pada implementasi rekonstruksi ini menggunakan **aset resmi dari `https://cherykarawaci.com/`** yang diekstrak langsung dari live HTML pada Phase 1 (menggantikan foto substitusi Wikimedia Commons yang dipakai prototype awal), dilengkapi fallback aman apabila terjadi kendala jaringan.

## 1. Brand & System Assets

| Asset | Source URL | Usage |
|---|---|---|
| Favicon | `https://cherykarawaci.com/app/img/favicon.ico` | Browser tab icon (`index.html`) |
| Logo Black | `https://cherykarawaci.com/uploads/logo/logo-black_20251230_171253.png` | Main Header navbar & Dealer Sidebar Drawer |
| Logo White | `https://cherykarawaci.com/uploads/logo/logo-white_20251230_171330.png` | Footer & Chat Widget header |
| OG Share Image | `https://cherykarawaci.com/uploads/meta_sosmed/meta_og_image_share_20251230_170831.png` | Open Graph metadata |
| Simulation Icon | `https://cherykarawaci.com/app/img/icon-simulasi.png` | Header modal `SimulationResultModal` |
| Car Button Icon | `https://cherykarawaci.com/app/img/icon-car.png` | Tombol `Booking Test Drive` di hasil simulasi |
| WhatsApp Button Icon | `https://cherykarawaci.com/app/img/icon-wa.png` | Tombol `Hubungi Sales` di hasil simulasi |
| Chat Beli Mobil Icon | `https://cherykarawaci.com/app/img/Mobil.png` | Kartu `Beli Mobil` pada `ChatWidget` |
| Chat Servis Mobil Icon | `https://cherykarawaci.com/app/img/Servis.png` | Kartu `Servis Mobil` pada `ChatWidget` |
| Video Play Icon | `https://cherykarawaci.com/app/img/icon-play.png` | Pill overlay `.location-info` pada `TestimonialsSection` |

## 2. Hero Slider Banners (11 Slides — Responsive Desktop & Mobile)

Setiap slide menggunakan elemen `<picture>` dengan `<source media="(max-width: 600px)">` untuk banner mobile dan `<source media="(min-width: 601px)">` untuk banner desktop:

1. `SLIDER_DESKTOP__31102026_100835.jpg` / `SLIDER_MOBILE__31102026_100835.jpg` (`fetchPriority="high"`, eager)
2. `SLIDER_DESKTOP__31102026_100935.jpg` / `SLIDER_MOBILE__31102026_100935.jpg` (lazy)
3. `SLIDER_DESKTOP__31102026_101004.jpg` / `SLIDER_MOBILE__31102026_101004.jpg` (lazy)
4. `SLIDER_DESKTOP__31102026_101022.jpg` / `SLIDER_MOBILE__31102026_101022.jpg` (lazy)
5. `SLIDER_DESKTOP__31102026_101053.jpg` / `SLIDER_MOBILE__31102026_101053.jpg` (lazy)
6. `SLIDER_DESKTOP__31102026_101109.jpg` / `SLIDER_MOBILE__31102026_101109.jpg` (lazy)
7. `SLIDER_DESKTOP__31102026_101125.jpg` / `SLIDER_MOBILE__31102026_101125.jpg` (lazy)
8. `SLIDER_DESKTOP__31102026_101143.jpg` / `SLIDER_MOBILE__31102026_101143.jpg` (lazy)
9. `SLIDER_DESKTOP__31102026_101158.jpg` / `SLIDER_MOBILE__31102026_101158.jpg` (lazy)
10. `SLIDER_DESKTOP__31102026_101211.jpg` / `SLIDER_MOBILE__31102026_101211.jpg` (lazy)
11. `SLIDER_DESKTOP__31102026_105502.jpg` / `SLIDER_MOBILE__31102026_105502.jpg` (lazy)

Base path: `https://cherykarawaci.com/uploads/slider/`

## 3. Promotion, Popup & Benefits Assets

| Asset | Source URL |
|---|---|
| Homepage Promo Banner (`Beli Chery Dapat Emas`) | `https://cherykarawaci.com/uploads/promotion/home-promo-images-BeliCheryDapatEmas_20260409_170233.webp` |
| Promo Thumbnail 1 | `https://cherykarawaci.com/uploads/promotion/promotion-thumbnails-BeliCheryDapatEmas_20260409_170130.webp` |
| Promo Thumbnail 2 (`Bulan Kemerdekaan`) | `https://cherykarawaci.com/uploads/promotion/promotion-thumbnails-PROMOSPESIALBULANKEMERDEKAAN_19082026_112613.jpg` |
| Official Notice Popup Desktop | `https://cherykarawaci.com/uploads/popup_banner/POPUP_BANNER_DEKSTOP_20260911_122458.jpg` |
| Official Notice Popup Mobile | `https://cherykarawaci.com/uploads/popup_banner/POPUP_BANNER_MOBILE_20260911_134131.jpg` |
| Benefits Section Banner (`Miliki Segera Mobil Chery`) | `https://cherykarawaci.com/app/img/product/miliki-segera-mobil-chery.webp` |

## 4. Vehicle Catalog & Price List Thumbnails (10 Official Models)

| Model | Official Thumbnail URL |
|---|---|
| Tiggo Cross CSH | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_TiggoCrossCSH_21102025_163710.jpg` |
| Chery C5 | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryC5_02042026_172134.webp` |
| Tiggo 8 | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_Tiggo8_20241016_152435.png` |
| Tiggo Cross | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_TiggoCross_25022025_172001.jpg` |
| Chery E5 | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_OmodaE5_20240510_140230.png` |
| Chery J6 (Homepage) | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryJ6_03112026_100823.webp` |
| Chery J6 (Price List) | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_J6_20241204_104949.png` |
| Chery Q | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryQ_19082026_150437.png` |
| Chery C5 CSH | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryC5CSH_18022026_143705.webp` |
| Tiggo 8 CSH | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_Tiggo8CSH_20052025_150237.png` |
| Tiggo 9 CSH | `https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_Tiggo9CSH_22102025_094455.jpg` |

## 5. Video Testimonial Thumbnails & YouTube IDs (8 Entries)

| Customer | Thumbnail URL | YouTube Video |
|---|---|---|
| Ridwan Hanif | `.../THUMBNAIL_RidwanHanif_24102024_161509.png` | `ika3haFSPtQ` (`t=1103s`) |
| Mark Konstantin | `.../THUMBNAIL_MarkKonstantin_09102024_112903.png` | `p8Hr33-60no` |
| Jessica Gracelyn | `.../THUMBNAIL_JessicaGracelynWijaya_19092024_103943.png` | `RVbbHNxWeJo` |
| Fajar Alfian | `.../THUMBNAIL_FajarAlfian_17092024_105020.png` | `zz6-mrQOwf4` |
| Lucky Kristanto | `.../THUMBNAIL_LuckyKristanto_14082024_092937.png` | `bUf13t8iA-U` |
| Kristin | `.../THUMBNAIL_ReviewOmoda5_20240802_165424.png` | `1eIdTX3I-U4` |
| Anny Sofia | `.../THUMBNAIL_AnnySofia_20240802_165705.png` | `uZYcrRZdOVQ` |
| Echa Heriawati | `.../THUMBNAIL_EchaHeriawati_20240802_170528.png` | `XiJ1SsdxfA8` |

## 6. Typography & Icon Assets

- **Fonts:** Google Fonts `Inter` (weights 300–900) dan `Roboto` (weights 300–900) dimuat di `index.html`, persis seperti deklarasi `@import` pada `style.css` situs referensi.
- **UI Icons:** `lucide-react` digunakan secara konsisten untuk seluruh ikon antarmuka, ditambah ikon warna resmi WhatsApp SVG pada tombol floating `Chat with Us`.
