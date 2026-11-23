import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Container from '../components/ui/Container';
import HeroSlider from '../components/sections/HeroSlider';
import PromotionSection from '../components/sections/PromotionSection';
import VehicleCatalog from '../components/sections/VehicleCatalog';
import CreditSimulation from '../components/sections/CreditSimulation';
import BenefitsSection from '../components/sections/BenefitsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PromoPopupBanner from '../components/overlays/PromoPopupBanner';

export default function HomePage() {
  const { preselectedSimVariant, onSimulationReady, onSelectVideo } = useOutletContext();

  return (
    <>
      {/* SECTION 02: HERO SLIDER (11 Official Responsive Slides) */}
      <HeroSlider />

      {/* SECTION 03: PROMO MOBIL CHERY BULAN INI */}
      <PromotionSection />

      {/* SECTIONS 04 & 05: Shared .car-area.bg (#F9F9F9) */}
      <section className="w-full bg-[var(--chery-surface)] pt-[48px] sm:pt-[60px] pb-[72px] sm:pb-[110px]">
        <Container>
          {/* SECTION 04: MOBIL TERBARU CHERY */}
          <VehicleCatalog />

          {/* SECTION 05: SIMULASIKAN KREDIT MOBIL ANDA */}
          <CreditSimulation
            preselectedVariant={preselectedSimVariant}
            onSimulationReady={onSimulationReady}
          />
        </Container>
      </section>

      {/* SECTION 06: MILIKI SEGERA MOBIL CHERY */}
      <BenefitsSection />

      {/* SECTION 07: CERITA MEREKA TENTANG KAMI */}
      <TestimonialsSection onSelectVideo={onSelectVideo} />

      {/* OFFICIAL ANTI-FRAUD NOTICE POPUP BANNER */}
      <PromoPopupBanner />
    </>
  );
}
