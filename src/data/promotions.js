/**
 * Official Hero Slides, Promotions, and Popup Banner
 * Extracted directly from https://cherykarawaci.com/ and /promo
 */

// Exact 11 responsive hero slides with separate desktop (>=601px) and mobile (<=600px) banners
export const HERO_SLIDES = [
  {
    id: 'slide-0',
    alt: 'Banner Chery Dunia Karawaci 1',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_100835.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_100835.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci',
  },
  {
    id: 'slide-1',
    alt: 'Banner Chery Dunia Karawaci 2',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_100935.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_100935.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci+2',
  },
  {
    id: 'slide-2',
    alt: 'Banner Chery Dunia Karawaci 3',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_101004.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_101004.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci+3',
  },
  {
    id: 'slide-3',
    alt: 'Banner Chery Dunia Karawaci 4',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_101022.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_101022.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci+4',
  },
  {
    id: 'slide-4',
    alt: 'Banner Chery Dunia Karawaci 5',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_101053.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_101053.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci+5',
  },
  {
    id: 'slide-5',
    alt: 'Banner Chery Dunia Karawaci 6',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_101109.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_101109.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci+6',
  },
  {
    id: 'slide-6',
    alt: 'Banner Chery Dunia Karawaci 7',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_101125.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_101125.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci+7',
  },
  {
    id: 'slide-7',
    alt: 'Banner Chery Dunia Karawaci 8',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_101143.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_101143.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci+8',
  },
  {
    id: 'slide-8',
    alt: 'Banner Chery Dunia Karawaci 9',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_101158.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_101158.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci+9',
  },
  {
    id: 'slide-9',
    alt: 'Banner Chery Dunia Karawaci 10',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_101211.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_101211.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci+10',
  },
  {
    id: 'slide-10',
    alt: 'Banner Chery Dunia Karawaci 11',
    desktop: 'https://cherykarawaci.com/uploads/slider/SLIDER_DESKTOP__31102026_105502.jpg',
    mobile: 'https://cherykarawaci.com/uploads/slider/SLIDER_MOBILE__31102026_105502.jpg',
    fallback: 'https://placehold.co/1920x720/111111/FFFFFF?text=Chery+Dunia+Karawaci+11',
  },
];

export const PROMO_SECTION_COPY = {
  heading: 'Promo Mobil Chery Bulan Ini',
  subtitle: 'Temukan berbagai promo dan penawaran spesial dari Chery Dunia Karawaci.',
};

/**
 * Verified Promo Entries from live cherykarawaci.com & /promo
 * Date Verification Note (Rule 2.3 & Section 8.3):
 * Both published promos on the live CMS carry earlier 2026 campaign periods.
 * We preserve the exact official promo visuals and explicitly mark period status
 * so users are informed to confirm active program availability with dealer sales.
 */
export const PROMOTIONS = [
  {
    id: 'beli-chery-dapat-emas',
    title: 'Promo Beli Chery Dapat Emas',
    shortDesc: 'Beli Mobil Chery, Langsung Bawa Pulang EMAS 5 Gram!',
    summary:
      'Dapatkan Promo terbaik Chery Dunia Karawaci, kesempatan untuk mendapatkan Emas 5 Gram dan Bunga 0% selama 2 Tahun.',
    period: '1 – 30 April 2026',
    endDateIso: '2026-04-30',
    isExpiredPeriod: true,
    statusNote:
      'Periode tertulis pada halaman promo resmi adalah 1 – 30 April 2026. Hubungi sales Chery Dunia Karawaci untuk konfirmasi promo terbaru yang sedang berlaku.',
    terms: [
      'Khusus NIK 2026',
      'Berlaku untuk pembelian: J6 | Tiggo 8 CSH | Tiggo 9 CSH',
      'Stok & periode terbatas, syarat & ketentuan berlaku',
    ],
    homeImage:
      'https://cherykarawaci.com/uploads/promotion/home-promo-images-BeliCheryDapatEmas_20260409_170233.webp',
    thumbnail:
      'https://cherykarawaci.com/uploads/promotion/promotion-thumbnails-BeliCheryDapatEmas_20260409_170130.webp',
    fallback: 'https://placehold.co/960x540/181A1E/FFFFFF?text=Promo+Beli+Chery+Dapat+Emas',
    officialUrl: 'https://cherykarawaci.com/promo/detail/beli-chery-dapat-emas',
    waPromoUrl: 'https://wa.link/ic6rw7',
    featuredOnHome: true,
  },
  {
    id: 'promo-spesial-bulan-kemerdekaan',
    title: 'PROMO SPESIAL BULAN KEMERDEKAAN',
    shortDesc: 'MERDEKA BERKENDARA BERSAMA CHERY!',
    summary:
      'Program penawaran spesial Bulan Kemerdekaan dari Chery Dunia Karawaci untuk pembelian unit Chery pilihan.',
    period: 'Agustus 2026',
    endDateIso: '2026-08-31',
    isExpiredPeriod: true,
    statusNote:
      'Campaign diunggah pada Agustus 2026 di halaman /promo resmi. Hubungi sales untuk info program promo bulan berjalan.',
    terms: [
      'Berlaku di Dealer Resmi Chery Dunia Karawaci',
      'Syarat & ketentuan program dealer berlaku',
    ],
    homeImage:
      'https://cherykarawaci.com/uploads/promotion/promotion-thumbnails-PROMOSPESIALBULANKEMERDEKAAN_19082026_112613.jpg',
    thumbnail:
      'https://cherykarawaci.com/uploads/promotion/promotion-thumbnails-PROMOSPESIALBULANKEMERDEKAAN_19082026_112613.jpg',
    fallback: 'https://placehold.co/960x540/181A1E/FFFFFF?text=Promo+Spesial+Chery',
    officialUrl: 'https://cherykarawaci.com/promo/detail/promo-spesial-bulan-kemerdekaan',
    waPromoUrl: 'https://wa.link/ic6rw7',
    featuredOnHome: false,
  },
];

export const POPUP_BANNER = {
  desktop: 'https://cherykarawaci.com/uploads/popup_banner/POPUP_BANNER_DEKSTOP_20260911_122458.jpg',
  mobile: 'https://cherykarawaci.com/uploads/popup_banner/POPUP_BANNER_MOBILE_20260911_134131.jpg',
  href: 'https://wa.link/k4s9jb',
  alt: 'Promo Banner Chery Dunia Karawaci',
};
