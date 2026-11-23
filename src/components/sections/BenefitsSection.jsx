import React from 'react';
import Container from '../ui/Container';
import {
  BENEFITS_BANNER_FALLBACK,
  BENEFITS_BANNER_IMAGE,
  DEALER_BENEFITS,
} from '../../data/dealer';

/**
 * Exact 1:1 Custom Line SVG Icons matching the original Flaticon / FontAwesome Pro
 * icons on https://cherykarawaci.com/:
 * - 01 Warranty: flaticon-chauffeur (chauffeur with cap & steering wheel)
 * - 02 Free Test Drives: far fa-steering-wheel (3-spoke steering wheel)
 * - 03 Spare Parts: flaticon-screwdriver (crossed screwdriver & wrench)
 * - 04 Maintenance Packages: flaticon-car (front-facing car with service gear/wrench badge on roof)
 */
function BenefitIcon({ type }) {
  const shared = {
    className: 'w-[44px] h-[44px] text-white',
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2.4',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  switch (type) {
    case 'shield':
      // 01: Chauffeur icon (flaticon-chauffeur)
      return (
        <svg {...shared}>
          {/* Peaked cap */}
          <path d="M18 15c0-4 6-7 14-7s14 3 14 7l-2 5H20l-2-5z" />
          <path d="M20 20h24" />
          <circle cx="32" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
          {/* Head & ears */}
          <path d="M22 20v5c0 5.5 4.5 10 10 10s10-4.5 10-10v-5" />
          <path d="M22 23h-2a2 2 0 0 0 0 4h2" />
          <path d="M42 23h2a2 2 0 0 1 0 4h-2" />
          {/* Eyes & mouth */}
          <circle cx="28.5" cy="25" r="1" fill="currentColor" stroke="none" />
          <circle cx="35.5" cy="25" r="1" fill="currentColor" stroke="none" />
          <path d="M29.5 29.5c1.5 1 3.5 1 5 0" />
          {/* Shoulders, collar & tie */}
          <path d="M13 55v-6c0-6.5 6-11 14-12.5L32 42l5-5.5C45 38 51 42.5 51 49v6" />
          <path d="M27 36.5l5 5.5 5-5.5" />
          <path d="M32 42v6" />
          {/* Steering wheel rim at bottom */}
          <path d="M19 55a13 13 0 0 1 26 0" />
          <path d="M23 55a9 9 0 0 1 18 0" />
          <line x1="13" y1="55" x2="51" y2="55" />
        </svg>
      );

    case 'wheel':
      // 02: 3-spoke Steering Wheel icon (far fa-steering-wheel)
      return (
        <svg {...shared} strokeWidth="3.2">
          <circle cx="32" cy="32" r="21" />
          <circle cx="32" cy="32" r="5" />
          {/* Top-left & top-right spokes */}
          <path d="M11.5 27.5h15.8" />
          <path d="M36.7 27.5h15.8" />
          {/* Bottom vertical spoke */}
          <path d="M32 37v16" />
        </svg>
      );

    case 'wrench':
      // 03: Crossed Screwdriver & Wrench (flaticon-screwdriver)
      return (
        <svg {...shared}>
          {/* Screwdriver (top-left handle to bottom-right tip) */}
          <path d="M14 20l6-6 10 10-6 6-10-10z" />
          <line x1="27" y1="27" x2="46" y2="46" />
          <path d="M46 46l5 2 2 5-5-2-2-5z" />
          {/* Wrench (bottom-left to top-right open jaw) */}
          <path d="M37 21a9 9 0 0 1 12.5-8.2l-4.5 4.5 3.7 3.7 4.5-4.5A9 9 0 0 1 42 28.8L22 48.8a4.5 4.5 0 0 1-6.4-6.4L35.6 22.4" />
        </svg>
      );

    default:
      // 04: Maintenance Packages — Front-facing car with circular service badge above roof (flaticon-car)
      return (
        <svg {...shared}>
          {/* Circular tools badge above roof */}
          <circle cx="32" cy="18" r="10" />
          <path d="M28 14l8 8" />
          <path d="M36 14l-8 8" />
          {/* Car windshield & roof */}
          <path d="M16 35l4-10h5" />
          <path d="M48 35l-4-10h-5" />
          {/* Side mirrors */}
          <path d="M15 33h-3v3h3" />
          <path d="M49 33h3v3h-3" />
          {/* Car body & headlights */}
          <rect x="12" y="35" width="40" height="14" rx="4" />
          <circle cx="19" cy="42" r="2.5" />
          <circle cx="45" cy="42" r="2.5" />
          <line x1="26" y1="41" x2="38" y2="41" />
          <line x1="27" y1="45" x2="37" y2="45" />
          {/* Wheels */}
          <path d="M15 49v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5" />
          <path d="M41 49v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5" />
        </svg>
      );
  }
}

function BenefitCard({ benefit }) {
  return (
    <div className="choose-item">
      <span className="choose-count" aria-hidden="true">
        {benefit.number}
      </span>
      <div className="choose-item-icon">
        <BenefitIcon type={benefit.icon} />
      </div>
      <div>
        <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#111111] mb-2">
          {benefit.title}
        </h3>
        <p className="text-[14px] sm:text-[15px] text-[var(--chery-body-text)] leading-[1.7]">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  const leftColumnCards = DEALER_BENEFITS.slice(0, 2); // 01 & 02 (staggered lower on desktop)
  const rightColumnCards = DEALER_BENEFITS.slice(2, 4); // 03 & 04

  return (
    <section
      id="benefits-section"
      className="choose-area w-full py-[72px] sm:py-[100px] lg:py-[120px]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
          {/* Left Column: Heading + Official Warranty Vehicle Image */}
          <div className="lg:col-span-6">
            <h2 className="site-title !text-white !text-[28px] sm:!text-[34px] xl:!text-[40px] mb-6 sm:mb-8">
              Miliki Segera <span>Mobil Chery</span>
            </h2>
            <div className="w-full overflow-hidden rounded-[10px]">
              <img
                src={BENEFITS_BANNER_IMAGE}
                alt="Miliki Segera Mobil Chery"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = BENEFITS_BANNER_FALLBACK;
                }}
                className="w-full h-auto block object-cover"
              />
            </div>
          </div>

          {/* Right Column: Exact Staggered 2x2 White Benefit Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6 lg:mt-12">
                {leftColumnCards.map((benefit) => (
                  <BenefitCard key={benefit.number} benefit={benefit} />
                ))}
              </div>
              <div className="space-y-6">
                {rightColumnCards.map((benefit) => (
                  <BenefitCard key={benefit.number} benefit={benefit} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
