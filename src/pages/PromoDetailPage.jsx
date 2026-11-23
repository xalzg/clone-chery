import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AlertCircle, Instagram } from 'lucide-react';
import Container from '../components/ui/Container';
import { PROMOTIONS } from '../data/promotions';
import { PAGES_CONTENT } from '../data/pagesContent';
import { DEALER_INFO } from '../data/dealer';

export default function PromoDetailPage() {
  const { slug } = useParams();
  const promo = PROMOTIONS.find((p) => p.id === slug) || PROMOTIONS[0];
  const otherPromos = PROMOTIONS.filter((p) => p.id !== promo.id);

  return (
    <section className="w-full bg-white pt-[96px] lg:pt-[56px] pb-[90px] sm:pb-[120px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main 8-col Promo Content */}
          <div className="lg:col-span-8">
            <div className="rounded-[12px] overflow-hidden mb-6 shadow-[var(--shadow-card)]">
              <img
                src={promo.thumbnail}
                alt={promo.title}
                className="w-full h-auto block"
              />
            </div>

            <h1 className="text-[26px] sm:text-[32px] font-bold text-[#111111] mb-4">
              {promo.title}
            </h1>

            {promo.isExpiredPeriod && (
              <div className="flex items-start gap-2.5 p-4 mb-5 rounded-[10px] bg-amber-50 border border-amber-200 text-sm text-amber-900">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>{promo.statusNote}</p>
              </div>
            )}

            <div className="text-[#111111] text-[15px] leading-[1.85] space-y-3">
              <p className="font-semibold">Periode tercantum: {promo.period}</p>
              <p>{promo.id === 'promo-spesial-bulan-kemerdekaan' ? PAGES_CONTENT.promoKemerdekaanDesc : promo.summary}</p>
              <div>
                <p className="font-semibold mb-1.5">Syarat &amp; ketentuan berlaku:</p>
                <ul className="list-disc pl-6 space-y-1">
                  {promo.terms.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <p>Jangan sampai kehabisan, karena stok &amp; periode terbatas! Langsung hubungi kami sekarang untuk booking unitmu!</p>
            </div>

            <div className="mt-7 mb-7">
              <a
                href={promo.waPromoUrl || DEALER_INFO.salesWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn !px-8"
              >
                Pesan Sekarang
              </a>
            </div>

            <hr className="border-black/10 my-6" />

            <div>
              <h5 className="text-base font-bold text-[#111111] mb-3">Tags</h5>
              <div className="flex flex-wrap gap-2">
                {['Promo Chery', 'Chery Dunia', 'Tiggo 8', 'Tiggo Cross Sport', 'Tiggo 9 CSH', 'Beli Chery Dapat Emas'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-[var(--chery-surface)] border border-black/10 text-xs font-medium text-[#333333]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right 4-col Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[var(--chery-surface)] rounded-[12px] p-6">
              <h5 className="text-[18px] font-bold text-[#111111] mb-5 pb-2 border-b-2 border-[var(--chery-red)] inline-block">
                Promo Lainnya
              </h5>
              <div className="space-y-4">
                {otherPromos.map((other) => (
                  <Link
                    key={other.id}
                    to={`/promo/detail/${other.id}`}
                    className="flex items-center gap-3.5 group"
                  >
                    <img
                      src={other.thumbnail}
                      alt={other.title}
                      className="w-[70px] h-[70px] rounded-[8px] object-cover shrink-0"
                    />
                    <span className="text-sm font-semibold text-[#111111] group-hover:text-[var(--chery-red)] transition-colors leading-snug">
                      {other.title}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  to="/promo"
                  className="text-[15px] font-medium text-[var(--chery-red)] hover:underline"
                >
                  Lihat semua promo &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-[var(--chery-surface)] rounded-[12px] p-6">
              <h5 className="text-[18px] font-bold text-[#111111] mb-4 pb-2 border-b-2 border-[var(--chery-red)] inline-block">
                Follow Us
              </h5>
              <div className="flex items-center gap-3">
                <a
                  href={DEALER_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Chery Dunia Karawaci"
                  className="w-10 h-10 rounded-full bg-[var(--chery-red)] hover:bg-[#111111] text-white inline-flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
