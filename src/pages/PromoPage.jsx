import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { PROMOTIONS } from '../data/promotions';
import { PAGES_CONTENT } from '../data/pagesContent';
import { DEALER_INFO } from '../data/dealer';

const DOMISILI_OPTIONS = ['Jakarta', 'Depok', 'Tangerang', 'Bekasi', 'Bogor', 'Diluar Jabodetabek'];
const UNIT_OPTIONS = ['Chery J6', 'Chery C5', 'Tiggo Cross CSH', 'Tiggo Cross', 'Tiggo 8', 'Chery E5'];
const DP_OPTIONS = ['15%', '20%', '30%', '50%'];

export default function PromoPage() {
  const [nama, setNama] = useState('');
  const [domisili, setDomisili] = useState('Tangerang');
  const [unit, setUnit] = useState('Chery J6');
  const [totalDp, setTotalDp] = useState('20%');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama.trim()) {
      setError('Mohon masukkan Nama lengkap Anda.');
      return;
    }
    setError('');
    const pesan = `Hallo https://cherykarawaci.com Nama Saya : *${nama.trim()}* Domisili : *${domisili}* Type Unit : *${unit}* Total DP : *${totalDp}*`;
    window.open(
      `https://api.whatsapp.com/send?phone=${DEALER_INFO.salesWhatsappNumber}&text=${encodeURIComponent(pesan)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="w-full bg-white pt-[96px] lg:pt-[56px] pb-[90px] sm:pb-[120px]">
      <Container>
        <SectionHeading
          title="Promo"
          subtitle="Dapatkan Promo terbaik Chery Dunia Karawaci, kesempatan untuk mendapatkan Emas 5 Gram dan Bunga 0% selama 2 Tahun."
          showDivider
        />

        {/* Top 9-col Banner + 3-col Form (Exact match to /promo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-start">
          <div className="lg:col-span-9">
            <div className="rounded-[12px] overflow-hidden shadow-[var(--shadow-card)] bg-neutral-100">
              <img
                src={PAGES_CONTENT.promoBanner}
                alt="Promo Chery Dunia Karawaci"
                className="w-full h-auto block"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="find-car-form !p-5">
              <h3 className="text-[15px] font-bold text-[#111111] mb-4 leading-snug">
                Dapatkan Angsuran Chery Terbaik disini :
              </h3>
              <form onSubmit={handleSubmit} noValidate className="space-y-3">
                <div>
                  <label htmlFor="promo-form-nama" className="block text-xs font-medium text-[#111111] mb-1">
                    Nama Anda <span className="text-[var(--chery-red)]">*</span>
                  </label>
                  <input
                    id="promo-form-nama"
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama lengkap"
                    className="w-full h-10 px-3 rounded-[8px] border border-[#dddddd] text-sm text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
                  />
                </div>
                <div>
                  <label htmlFor="promo-form-domisili" className="block text-xs font-medium text-[#111111] mb-1">
                    Domisili <span className="text-[var(--chery-red)]">*</span>
                  </label>
                  <select
                    id="promo-form-domisili"
                    value={domisili}
                    onChange={(e) => setDomisili(e.target.value)}
                    className="w-full h-10 px-3 rounded-[8px] border border-[#dddddd] bg-white text-sm text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
                  >
                    {DOMISILI_OPTIONS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="promo-form-unit" className="block text-xs font-medium text-[#111111] mb-1">
                    Pilih Type <span className="text-[var(--chery-red)]">*</span>
                  </label>
                  <select
                    id="promo-form-unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full h-10 px-3 rounded-[8px] border border-[#dddddd] bg-white text-sm text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
                  >
                    {UNIT_OPTIONS.map((u) => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="promo-form-dp" className="block text-xs font-medium text-[#111111] mb-1">
                    Total DP <span className="text-[var(--chery-red)]">*</span>
                  </label>
                  <select
                    id="promo-form-dp"
                    value={totalDp}
                    onChange={(e) => setTotalDp(e.target.value)}
                    className="w-full h-10 px-3 rounded-[8px] border border-[#dddddd] bg-white text-sm text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
                  >
                    {DP_OPTIONS.map((dp) => (
                      <option key={dp} value={dp}>{dp}</option>
                    ))}
                  </select>
                </div>

                {error && <p role="alert" className="text-xs text-[var(--chery-red)]">{error}</p>}

                <button type="submit" className="theme-btn w-full !py-2.5 mt-2">
                  Dapatkan Penawaran
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMOTIONS.map((promo) => (
            <article key={promo.id} className="blog-item flex flex-col">
              <Link to={`/promo/detail/${promo.id}`} className="blog-item-img block mb-4">
                <img
                  src={promo.thumbnail}
                  alt={promo.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover block"
                />
              </Link>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-bold text-[#111111] mb-2">
                    <Link
                      to={`/promo/detail/${promo.id}`}
                      className="text-[#111111] hover:text-[var(--chery-red)] transition-colors"
                    >
                      {promo.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[var(--chery-body-text)] mb-4">
                    {promo.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2.5 pt-2">
                  <Link
                    to={`/promo/detail/${promo.id}`}
                    className="theme-btn !px-7 !py-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cek Promo</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
