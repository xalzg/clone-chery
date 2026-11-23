import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { PROMOTIONS, PROMO_SECTION_COPY } from '../../data/promotions';

export default function PromotionSection() {
  const featuredPromo = PROMOTIONS.find((p) => p.featuredOnHome) || PROMOTIONS[0];

  return (
    <section
      id="promo-section"
      className="w-full bg-white pt-[64px] sm:pt-[96px] lg:pt-[120px] pb-[48px] sm:pb-[56px]"
    >
      <Container>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#111111] tracking-tight">
            {PROMO_SECTION_COPY.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--chery-body-text)]">
            {PROMO_SECTION_COPY.subtitle}
          </p>
        </div>

        {/* Exact 1:1 Centered Promo Card with Red Pill Overlay Link */}
        <div className="max-w-[560px] mx-auto px-1">
          <div className="promo-image-wrapper">
            <img
              src={featuredPromo.homeImage}
              alt={featuredPromo.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = featuredPromo.fallback;
              }}
              className="w-full h-auto block rounded-[16px]"
            />

            <Link
              to={`/promo/detail/${featuredPromo.id}`}
              className="promo-overlay-btn"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
