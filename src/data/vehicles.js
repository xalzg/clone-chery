/**
 * Official Chery Dunia Karawaci Vehicle Catalog & OTR Price List
 * Verified from https://cherykarawaci.com/ and https://cherykarawaci.com/harga-mobil-chery
 */

export const FEATURED_VEHICLES = [
  {
    id: 'tiggo-cross-csh',
    name: 'Tiggo Cross CSH',
    vehicleType: 'SUV',
    doors: 5,
    seats: 5,
    priceDisplay: 'Rp. 309,900,000*',
    priceNumeric: 309900000,
    priceStatus: 'verified-homepage',
    defaultSimVariant: 'Tiggo Cross CSH - CSH Comfort',
    officialUrl: 'https://cherykarawaci.com/product/details/tiggo-cross-csh',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_TiggoCrossCSH_21102025_163710.jpg',
    fallback: 'https://placehold.co/960x600/F3F4F6/111111?text=Tiggo+Cross+CSH',
    variants: [
      { type: 'CSH Comfort', price: 309900000 },
      { type: 'CSH Premium', price: 339800000 },
    ],
  },
  {
    id: 'chery-c5',
    name: 'Chery C5',
    vehicleType: 'SUV',
    doors: 5,
    seats: 5,
    priceDisplay: 'Rp. 324,900,000*',
    priceNumeric: 324900000,
    priceStatus: 'verified-homepage',
    defaultSimVariant: 'Chery C5 - Z',
    officialUrl: 'https://cherykarawaci.com/product/details/chery-c5',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryC5_02042026_172134.webp',
    fallback: 'https://placehold.co/960x600/F3F4F6/111111?text=Chery+C5',
    variants: [
      { type: 'Z', price: 324900000 },
      { type: 'RZ', price: 354900000 },
      { type: 'RZ Two Tone', price: 359900000 },
    ],
    verifiedHighlights: [
      '1.5 Turbo Charged Engine (108 kW)',
      '6 DCT Transmission',
      '10 ADAS & 6 Airbags',
    ],
  },
  {
    id: 'tiggo-8',
    name: 'Tiggo 8',
    vehicleType: 'SUV',
    doors: 5,
    seats: 7,
    priceDisplay: 'Rp. 362,500,000*',
    priceNumeric: 362500000,
    priceStatus: 'verified-homepage',
    defaultSimVariant: 'Tiggo 8 - Tiggo 8 Comfort',
    officialUrl: 'https://cherykarawaci.com/product/details/tiggo-8',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_Tiggo8_20241016_152435.png',
    fallback: 'https://placehold.co/960x600/F3F4F6/111111?text=Tiggo+8',
    variants: [
      { type: 'Tiggo 8 Comfort', price: 362500000 },
      { type: 'Tiggo 8 Premium', price: 402500000 },
    ],
  },
  {
    id: 'tiggo-cross',
    name: 'Tiggo Cross',
    vehicleType: 'SUV',
    doors: 5,
    seats: 5,
    priceDisplay: 'Rp. 264,500,000*',
    priceNumeric: 264500000,
    priceStatus: 'verified-homepage',
    defaultSimVariant: 'Tiggo Cross - Comfort',
    officialUrl: 'https://cherykarawaci.com/product/details/tiggo-cross',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_TiggoCross_25022025_172001.jpg',
    fallback: 'https://placehold.co/960x600/F3F4F6/111111?text=Tiggo+Cross',
    variants: [
      { type: 'Comfort', price: 264500000 },
      { type: 'Premium', price: 294500000 },
      { type: 'Sport', price: 304900000 },
    ],
  },
  {
    id: 'chery-e5',
    name: 'Chery E5',
    vehicleType: 'FWD',
    doors: 5,
    seats: 5,
    priceDisplay: 'Rp. 419,900,000*',
    priceNumeric: 419900000,
    priceStatus: 'verified-homepage',
    defaultSimVariant: 'Chery E5 - Chery E5',
    officialUrl: 'https://cherykarawaci.com/product/details/chery-e5',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_OmodaE5_20240510_140230.png',
    fallback: 'https://placehold.co/960x600/F3F4F6/111111?text=Chery+E5',
    variants: [
      { type: 'Chery E5', price: 419900000 },
      { type: 'Chery E5 Two Tone', price: 424900000 },
    ],
  },
  {
    id: 'chery-j6',
    name: 'Chery J6',
    vehicleType: 'SUV',
    doors: 5,
    seats: 5,
    // Verified OTR from /harga-mobil-chery (live homepage CMS displays placeholder Rp. 0*)
    priceDisplay: 'Rp. 565,500,000*',
    priceNumeric: 565500000,
    priceStatus: 'verified-pricelist',
    priceNote:
      'OTR dari daftar harga resmi /harga-mobil-chery (beranda situs asli menampilkan placeholder Rp. 0*)',
    defaultSimVariant: 'J6 - J6 RWD',
    officialUrl: 'https://cherykarawaci.com/product/details/chery-j6',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryJ6_03112026_100823.webp',
    fallback: 'https://placehold.co/960x600/F3F4F6/111111?text=Chery+J6',
    variants: [
      { type: 'J6 RWD', price: 565500000 },
      { type: 'J6T RWD', price: 585500000 },
      { type: 'J6 IWD', price: 630500000 },
      { type: 'J6T IWD', price: 650500000 },
    ],
  },
];

// Additional models present in /harga-mobil-chery & simulation dropdown so search covers 100% of lineup
export const ADDITIONAL_CATALOG_MODELS = [
  {
    id: 'chery-q',
    name: 'Chery Q',
    vehicleType: 'Hatchback / EV',
    doors: 5,
    seats: 5,
    priceDisplay: 'Rp. 249,900,000*',
    priceNumeric: 249900000,
    priceStatus: 'verified-pricelist',
    defaultSimVariant: 'Chery Q - PURE',
    officialUrl: 'https://cherykarawaci.com/harga-mobil-chery',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryQ_19082026_150437.png',
    fallback: 'https://placehold.co/960x600/F3F4F6/111111?text=Chery+Q',
    variants: [
      { type: 'PURE', price: 249900000 },
      { type: 'RIZZ', price: 269900000 },
    ],
  },
  {
    id: 'chery-c5-csh',
    name: 'Chery C5 CSH',
    vehicleType: 'SUV Hybrid',
    doors: 5,
    seats: 5,
    priceDisplay: 'Rp. 409,900,000*',
    priceNumeric: 409900000,
    priceStatus: 'verified-pricelist',
    defaultSimVariant: 'Chery C5 CSH - CSH',
    officialUrl: 'https://cherykarawaci.com/harga-mobil-chery',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryC5CSH_18022026_143705.webp',
    fallback: 'https://placehold.co/960x600/F3F4F6/111111?text=Chery+C5+CSH',
    variants: [{ type: 'CSH', price: 409900000 }],
  },
  {
    id: 'tiggo-8-csh',
    name: 'Tiggo 8 CSH',
    vehicleType: 'SUV Hybrid',
    doors: 5,
    seats: 7,
    priceDisplay: 'Rp. 459,900,000*',
    priceNumeric: 459900000,
    priceStatus: 'verified-pricelist',
    defaultSimVariant: 'Tiggo 8 CSH - Comfort',
    officialUrl: 'https://cherykarawaci.com/harga-mobil-chery',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_Tiggo8CSH_20052025_150237.png',
    fallback: 'https://placehold.co/960x600/F3F4F6/111111?text=Tiggo+8+CSH',
    variants: [
      { type: 'Comfort', price: 459900000 },
      { type: 'Premium', price: 529900000 },
      { type: 'AWD', price: 579900000 },
    ],
  },
  {
    id: 'tiggo-9-csh',
    name: 'Tiggo 9 CSH',
    vehicleType: 'SUV Hybrid',
    doors: 5,
    seats: 7,
    priceDisplay: 'Rp. 749,900,000*',
    priceNumeric: 749900000,
    priceStatus: 'verified-pricelist',
    defaultSimVariant: 'Tiggo 9 CSH - AWD',
    officialUrl: 'https://cherykarawaci.com/harga-mobil-chery',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_Tiggo9CSH_22102025_094455.jpg',
    fallback: 'https://placehold.co/960x600/F3F4F6/111111?text=Tiggo+9+CSH',
    variants: [{ type: 'AWD', price: 749900000 }],
  },
];

export const ALL_SEARCHABLE_VEHICLES = [
  ...FEATURED_VEHICLES,
  ...ADDITIONAL_CATALOG_MODELS,
];

// Exact 23 simulation <select> options in verbatim DOM order from https://cherykarawaci.com/
export const SIMULATION_VARIANTS = [
  { id: '12', label: 'Chery E5 - Chery E5', price: 419900000 },
  { id: '15', label: 'Chery E5 - Chery E5 Two Tone', price: 424900000 },
  { id: '17', label: 'Tiggo 8 - Tiggo 8 Comfort', price: 362500000 },
  { id: '20', label: 'Tiggo 8 - Tiggo 8 Premium', price: 402500000 },
  { id: '21', label: 'J6 - J6 RWD', price: 565500000 },
  { id: '22', label: 'J6 - J6 IWD', price: 630500000 },
  { id: '25', label: 'Tiggo Cross - Comfort', price: 264500000 },
  { id: '26', label: 'Tiggo Cross - Premium', price: 294500000 },
  { id: '27', label: 'Tiggo 8 CSH - Premium', price: 529900000 },
  { id: '28', label: 'Tiggo Cross CSH - CSH Comfort', price: 309900000 },
  { id: '29', label: 'Tiggo Cross CSH - CSH Premium', price: 339800000 },
  { id: '30', label: 'Tiggo 9 CSH - AWD', price: 749900000 },
  { id: '31', label: 'Tiggo 8 CSH - Comfort', price: 459900000 },
  { id: '32', label: 'Tiggo 8 CSH - AWD', price: 579900000 },
  { id: '33', label: 'J6 - J6T RWD', price: 585500000 },
  { id: '34', label: 'J6 - J6T IWD', price: 650500000 },
  { id: '35', label: 'Tiggo Cross - Sport', price: 304900000 },
  { id: '36', label: 'Chery C5 CSH - CSH', price: 409900000 },
  { id: '37', label: 'Chery C5 - Z', price: 324900000 },
  { id: '38', label: 'Chery C5 - RZ', price: 354900000 },
  { id: '39', label: 'Chery C5 - RZ Two Tone', price: 359900000 },
  { id: '40', label: 'Chery Q - RIZZ', price: 269900000 },
  { id: '41', label: 'Chery Q - PURE', price: 249900000 },
];

// Complete 10-model Price List from https://cherykarawaci.com/harga-mobil-chery
export const FULL_PRICELIST = [
  {
    model: 'Chery Q',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryQ_19082026_150437.png',
    rows: [
      { type: 'PURE', price: 249900000 },
      { type: 'RIZZ', price: 269900000 },
    ],
  },
  {
    model: 'Chery C5',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryC5_02042026_172134.webp',
    rows: [
      { type: 'Z', price: 324900000 },
      { type: 'RZ', price: 354900000 },
      { type: 'RZ Two Tone', price: 359900000 },
    ],
  },
  {
    model: 'Chery C5 CSH',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_CheryC5CSH_18022026_143705.webp',
    rows: [{ type: 'CSH', price: 409900000 }],
  },
  {
    model: 'Tiggo 9 CSH',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_Tiggo9CSH_22102025_094455.jpg',
    rows: [{ type: 'AWD', price: 749900000 }],
  },
  {
    model: 'Tiggo Cross CSH',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_TiggoCrossCSH_21102025_163710.jpg',
    rows: [
      { type: 'CSH Comfort', price: 309900000 },
      { type: 'CSH Premium', price: 339800000 },
    ],
  },
  {
    model: 'Tiggo 8 CSH',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_Tiggo8CSH_20052025_150237.png',
    rows: [
      { type: 'Comfort', price: 459900000 },
      { type: 'Premium', price: 529900000 },
      { type: 'AWD', price: 579900000 },
    ],
  },
  {
    model: 'Tiggo Cross',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_TiggoCross_25022025_172001.jpg',
    rows: [
      { type: 'Comfort', price: 264500000 },
      { type: 'Premium', price: 294500000 },
      { type: 'Sport', price: 304900000 },
    ],
  },
  {
    model: 'J6',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_J6_20241204_104949.png',
    rows: [
      { type: 'J6 RWD', price: 565500000 },
      { type: 'J6T RWD', price: 585500000 },
      { type: 'J6 IWD', price: 630500000 },
      { type: 'J6T IWD', price: 650500000 },
    ],
  },
  {
    model: 'Chery E5',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_OmodaE5_20240510_140230.png',
    rows: [
      { type: 'Chery E5', price: 419900000 },
      { type: 'Chery E5 Two Tone', price: 424900000 },
    ],
  },
  {
    model: 'Tiggo 8',
    image:
      'https://cherykarawaci.com/uploads/product/thumbnails/PRODUCT_THUMBNAILS_Tiggo8_20241016_152435.png',
    rows: [
      { type: 'Tiggo 8 Comfort', price: 362500000 },
      { type: 'Tiggo 8 Premium', price: 402500000 },
    ],
  },
];
