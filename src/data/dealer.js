/**
 * Verified Dealer Information for Chery Dunia Karawaci
 * Extracted from https://cherykarawaci.com/ (2026-11-23)
 *
 * Security Note:
 * Live HTML footer Instagram anchor was found defaced to an unrelated domain;
 * this repository intentionally points Instagram to the official handle URL.
 */

export const DEALER_INFO = {
  brand: 'Chery Dunia Karawaci',
  officialUrl: 'https://cherykarawaci.com/',
  logoBlack: 'https://cherykarawaci.com/uploads/logo/logo-black_20251230_171253.png',
  logoWhite: 'https://cherykarawaci.com/uploads/logo/logo-white_20251230_171330.png',

  // Top bar & footer display contact (verbatim from live HTML)
  whatsappDisplay: '0822463061161331',
  whatsappHref: 'https://wa.me/62822463061161331',

  // Official Sales & Service WhatsApp numbers extracted from live chat widget & simulation modal
  salesWhatsappNumber: '6282246006116',
  serviceWhatsappNumber: '628131890024',
  salesWhatsappHref:
    'https://api.whatsapp.com/send?phone=6282246006116&text=Halo%20Chery%20Dunia%20Tolong%20berikan%20saya%20informasi%20terbaru%20mengenai%20Mobil%20Chery',
  serviceWhatsappHref:
    'https://api.whatsapp.com/send?phone=628131890024&text=Hallo%20Chery%20Dunia%2C%20Saya%20ingin%20melakukan%20booking%20Service',
  testDriveWhatsappHref:
    'https://api.whatsapp.com/send?phone=6282246006116&text=Halo%20Chery%20Dunia%20Karawaci%20saya%20mau%20melakukan%20reservasi%20test%20drive%2C%20mohon%20bantuannya',

  phoneDisplay: '0215322151',
  phoneHref: 'tel:0215322151',
  hours: 'Minggu (08:30 - 15:30)',
  email: 'support.karawaci@cherydunia.com',
  instagramHandle: 'Chery.karawaci',
  instagramUrl: 'https://www.instagram.com/chery.karawaci/',
  address: 'Jl. Imam Bonjol RT.3/RW.4, Kel. Panunggangan Barat, Kec. Cibodas, Tangerang.',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4017.9857540569037!2d106.61787939999999!3d-6.2187252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff2df9bbc2cf%3A0x734282bbec12eeb3!2sChery%20Dunia%20Karawaci!5e1!3m2!1sen!2sid!4v1766041218811!5m2!1sen!2sid',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Chery+Dunia+Karawaci+Jl.+Imam+Bonjol+Panunggangan+Barat+Cibodas+Tangerang',
  welcomeCopy:
    'Selamat datang di Website Dealer Resmi Chery Dunia Karawaci. Kami akan memberikan Excellent Service sesuai dengan kebutuhan Anda dalam memiliki mobil Chery. Silahkan bertanya lebih lanjut tentang produk mobil Chery dengan menghubungi Kami.',
  copyrightYear: '2026',
  copyrightOwner: 'Dealer Resmi Chery Dunia Karawaci',
  chatIcons: {
    beliMobil: 'https://cherykarawaci.com/app/img/Mobil.png',
    servisMobil: 'https://cherykarawaci.com/app/img/Servis.png',
    simulasi: 'https://cherykarawaci.com/app/img/icon-simulasi.png',
    carBtn: 'https://cherykarawaci.com/app/img/icon-car.png',
    waBtn: 'https://cherykarawaci.com/app/img/icon-wa.png',
  },
};

export const DEALER_BENEFITS = [
  {
    number: '01',
    title: 'Warranty',
    description: 'Semua kendaraan Chery telah dilindungi oleh garansi',
    icon: 'shield',
  },
  {
    number: '02',
    title: 'Free Test Drives',
    description: 'Melayani free test drive untuk semua tipe mobil Chery',
    icon: 'wheel',
  },
  {
    number: '03',
    title: 'Spare Parts',
    description: 'Suku cadang asli Chery telah teruji dan berkualitas tinggi',
    icon: 'wrench',
  },
  {
    number: '04',
    title: 'Maintenance Packages',
    description: 'Tersedia paket free service untuk pembelian mobil baru',
    icon: 'car',
  },
];

export const BENEFITS_BANNER_IMAGE =
  'https://cherykarawaci.com/app/img/product/miliki-segera-mobil-chery.webp';
export const BENEFITS_BANNER_FALLBACK =
  'https://placehold.co/720x460/2b2b2b/FFFFFF?text=Miliki+Segera+Mobil+Chery';
