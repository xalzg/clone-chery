import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../../data/promotions';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const reducedMotion = useReducedMotion();
  const totalSlides = HERO_SLIDES.length;

  useEffect(() => {
    if (isPaused || reducedMotion) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, reducedMotion, totalSlides]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % totalSlides);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 45) goPrev();
    if (delta < -45) goNext();
  };

  return (
    <section
      id="hero-section"
      aria-label="Banner Kendaraan Chery Dunia Karawaci"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="chery-hero-section relative w-full bg-[#111111] overflow-hidden select-none"
    >
      {/* Active Slide & Crossfade Stack */}
      <div className="relative w-full">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={
                isActive
                  ? 'relative w-full opacity-100 transition-opacity duration-500 z-10'
                  : 'absolute inset-0 w-full opacity-0 pointer-events-none transition-opacity duration-500 z-0'
              }
            >
              <picture>
                <source media="(max-width: 600px)" srcSet={slide.mobile} />
                <source media="(min-width: 601px)" srcSet={slide.desktop} />
                <img
                  src={slide.desktop}
                  alt={slide.alt}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  fetchPriority={idx === 0 ? 'high' : 'low'}
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = slide.fallback;
                  }}
                  className="w-full h-auto block object-cover"
                />
              </picture>
            </div>
          );
        })}
      </div>

      {/* Previous & Next Controls (Bootstrap Carousel Style) */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Slide sebelumnya"
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-black/55 text-white inline-flex items-center justify-center transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Slide berikutnya"
        className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-black/55 text-white inline-flex items-center justify-center transition-colors cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Bottom Horizontal Indicator Bars (Exact Bootstrap 11-indicator style) */}
      <div
        className="absolute bottom-3 sm:bottom-5 left-0 right-0 z-20 flex items-center justify-center gap-1.5 sm:gap-2 px-4"
        role="tablist"
        aria-label="Pilih slide banner"
      >
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={idx === activeIndex}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className={`h-[3px] w-5 sm:w-[30px] transition-opacity cursor-pointer ${
              idx === activeIndex
                ? 'bg-white opacity-100'
                : 'bg-white opacity-50 hover:opacity-80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
