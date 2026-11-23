import React, { useEffect, useMemo, useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import Container from '../components/ui/Container';
import PageBreadcrumb from '../components/ui/PageBreadcrumb';
import CreditSimulation from '../components/sections/CreditSimulation';
import { PRODUCT_DETAILS } from '../data/productDetails';
import { FEATURED_VEHICLES, SIMULATION_VARIANTS } from '../data/vehicles';
import { DEALER_INFO } from '../data/dealer';
import { useReducedMotion } from '../hooks/useReducedMotion';

function AnimatedCounter({ value }) {
  const reducedMotion = useReducedMotion();
  const numericTarget = parseFloat(String(value).replace(/[^\d.]/g, ''));
  const hasDecimal = String(value).includes('.');
  const [display, setDisplay] = useState(reducedMotion || Number.isNaN(numericTarget) ? value : '0');

  useEffect(() => {
    if (reducedMotion || Number.isNaN(numericTarget)) {
      setDisplay(value);
      return undefined;
    }

    const duration = 1200;
    const startTime = performance.now();
    let rafId = null;

    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const current = numericTarget * progress;
      if (progress < 1) {
        setDisplay(hasDecimal ? current.toFixed(2) : String(Math.floor(current)));
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(String(value));
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, numericTarget, hasDecimal, reducedMotion]);

  return <span>{display}</span>;
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { onSimulationReady } = useOutletContext();

  const product = PRODUCT_DETAILS[slug] || PRODUCT_DETAILS['chery-e5'];
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedColorByTab, setSelectedColorByTab] = useState({});

  // Reset gallery & color state when switching models
  useEffect(() => {
    setActiveSlide(0);
    setActiveTabIndex(0);
    setSelectedColorByTab({});
  }, [slug]);

  // Scope simulation dropdown options to this model's variants (matching live cherykarawaci.com!)
  const modelSimVariants = useMemo(() => {
    const vehicleMeta = FEATURED_VEHICLES.find((v) => v.id === product.slug);
    if (!vehicleMeta) return SIMULATION_VARIANTS;

    const prefixMap = {
      'tiggo-cross-csh': 'Tiggo Cross CSH -',
      'chery-c5': 'Chery C5 -',
      'tiggo-8': 'Tiggo 8 -',
      'tiggo-cross': 'Tiggo Cross -',
      'chery-e5': 'Chery E5 -',
      'chery-j6': 'J6 -',
    };
    const prefix = prefixMap[product.slug];
    const filtered = prefix
      ? SIMULATION_VARIANTS.filter((v) => v.label.startsWith(prefix))
      : SIMULATION_VARIANTS;
    return filtered.length > 0 ? filtered : SIMULATION_VARIANTS;
  }, [product.slug]);

  const activeColorTab = product.colorTabs[activeTabIndex] || null;
  const activeColorIndex = activeColorTab ? selectedColorByTab[activeColorTab.id] || 0 : 0;
  const activeColor = activeColorTab ? activeColorTab.colors[activeColorIndex] : null;

  return (
    <>
      {/* 1. Breadcrumb Banner (Exact 1:1 .site-breadcrumb) */}
      <PageBreadcrumb
        title={product.title}
        currentLabel="Detail Produk"
        desktopBg={product.breadcrumbDesktop}
        mobileBg={product.breadcrumbMobile}
      />

      <div className="w-full bg-[var(--chery-surface)] pt-6 pb-[90px] sm:pb-[120px]">
        <Container>
          {/* 2. Main Gallery Slider + Thumbnail Strip (.car-single-widget) */}
          <div className="car-single-widget">
            <div className="mb-5">
              <h2 className="text-[24px] sm:text-[28px] font-bold text-[#111111]">
                {product.title}
              </h2>
            </div>

            {product.slides.length > 0 && (
              <div>
                <div className="relative rounded-[10px] overflow-hidden bg-neutral-100">
                  <img
                    src={product.slides[activeSlide]}
                    alt={`${product.title} slide ${activeSlide + 1}`}
                    className="w-full max-h-[600px] object-cover block"
                  />

                  {product.slides.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSlide(
                            (prev) => (prev - 1 + product.slides.length) % product.slides.length
                          )
                        }
                        aria-label="Foto sebelumnya"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 hover:bg-[var(--chery-red)] text-white inline-flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSlide((prev) => (prev + 1) % product.slides.length)
                        }
                        aria-label="Foto berikutnya"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 hover:bg-[var(--chery-red)] text-white inline-flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* FlexSlider-style Thumbnail Strip */}
                {product.slides.length > 1 && (
                  <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {product.slides.map((src, idx) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveSlide(idx)}
                        aria-label={`Pilih foto ${idx + 1}`}
                        className={`rounded-[8px] overflow-hidden border-2 transition-all cursor-pointer ${
                          idx === activeSlide
                            ? 'border-[var(--chery-red)] opacity-100'
                            : 'border-transparent opacity-65 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          className="w-full aspect-[16/10] object-cover block"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 3. Detailed EXTERIOR / INTERIOR / SPECIFICATION / PERFORMANCE / FEATURES Sections */}
          {product.sections.length > 0 && (
            <div className="car-single-widget">
              <div className="space-y-10">
                {product.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#111111] uppercase mb-5">
                      {section.heading}
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {section.items.map((item, idx) => (
                        <div
                          key={`${section.heading}-${idx}`}
                          className={
                            item.fullWidth ? 'lg:col-span-2 text-center' : 'text-left'
                          }
                        >
                          <div className="mb-3 overflow-hidden rounded-[10px] bg-neutral-100">
                            <img
                              src={item.image}
                              alt={item.title || section.heading}
                              loading="lazy"
                              className={`w-full rounded-[10px] block ${
                                item.fullWidth
                                  ? 'max-h-[540px] object-cover mx-auto'
                                  : 'aspect-[16/10] object-cover'
                              }`}
                            />
                          </div>
                          {item.title && (
                            <h4 className="text-[18px] font-semibold text-[#111111] mb-1.5">
                              {item.title}
                            </h4>
                          )}
                          {item.description && (
                            <p className="text-[15px] text-[var(--chery-body-text)] leading-[1.75]">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Performance Counter Strip (4-column Metrics with .border-performance Dividers) */}
          {product.counters.length > 0 && (
            <div className="car-single-widget">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-6">
                {product.counters.map((metric, idx) => {
                  const isLast = idx === product.counters.length - 1;
                  return (
                    <div
                      key={metric.label}
                      className={`text-center px-4 py-4 ${
                        !isLast
                          ? 'border-b lg:border-b-0 lg:border-r border-[#e5e5e5]'
                          : ''
                      }`}
                    >
                      <span className="block text-[20px] sm:text-[22px] text-[#333333] font-medium mb-1">
                        {metric.label}
                      </span>
                      <div className="flex items-baseline justify-center gap-1.5 text-[32px] sm:text-[38px] font-bold text-[var(--chery-red)] tabular-nums">
                        <AnimatedCounter value={metric.value} />
                        <span>{metric.unit}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5. Interactive EXTERIOR COLOR / INTERIOR COLOR Selector */}
          {product.colorTabs.length > 0 && activeColorTab && (
            <div className="car-single-widget py-8 sm:py-10">
              {/* Pill-Group Tab Switcher (Matches .tab-car / .tab-car.active) */}
              <div className="flex justify-center mb-8" role="tablist" aria-label="Kategori warna">
                <div className="inline-flex rounded-[10px] overflow-hidden border border-[#333333]">
                  {product.colorTabs.map((tab, idx) => {
                    const isActive = idx === activeTabIndex;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTabIndex(idx)}
                        className={`px-5 sm:px-10 py-3 sm:py-4 text-xs sm:text-[15px] font-semibold uppercase tracking-wide transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[#333333] text-white'
                            : 'bg-white text-[#111111] hover:bg-neutral-100'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Studio Vehicle/Interior Color Image Container (Preloads all tab colors for instant switching) */}
              <div className="relative w-full h-[220px] sm:h-[360px] flex items-center justify-center overflow-hidden">
                {product.colorTabs.map((tab, tIdx) =>
                  tab.colors.map((color, cIdx) => {
                    const isVisible = tIdx === activeTabIndex && cIdx === activeColorIndex;
                    return (
                      <img
                        key={`${tab.id}-${color.title}-${cIdx}`}
                        src={color.image}
                        alt={color.title}
                        loading="eager"
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                          isVisible
                            ? 'opacity-100 z-10'
                            : 'opacity-0 z-0 pointer-events-none'
                        }`}
                      />
                    );
                  })
                )}
              </div>

              {/* Circular Color Swatches + Active Color Name */}
              <div className="mt-8 flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {activeColorTab.colors.map((color, idx) => {
                    const isSelected = idx === activeColorIndex;
                    return (
                      <button
                        key={`${color.title}-${idx}`}
                        type="button"
                        onClick={() =>
                          setSelectedColorByTab((prev) => ({
                            ...prev,
                            [activeColorTab.id]: idx,
                          }))
                        }
                        title={color.title}
                        aria-label={`Pilih warna ${color.title}`}
                        aria-pressed={isSelected}
                        className={`w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full overflow-hidden border transition-all cursor-pointer p-0.5 ${
                          isSelected
                            ? 'border-[#333333] ring-2 ring-[#75787b] scale-110'
                            : 'border-[#e5e5e5] hover:scale-105'
                        }`}
                      >
                        <img
                          src={color.swatch}
                          alt={color.title}
                          className="w-full h-full rounded-full object-cover block"
                        />
                      </button>
                    );
                  })}
                </div>
                {activeColor && (
                  <p className="mt-4 text-[18px] sm:text-[24px] font-medium text-[#333333] text-center">
                    {activeColor.title}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* 6. PRICE LIST ON THE ROAD JAKARTA + Download Brochure + Pesan Sekarang */}
          {product.priceItems.length > 0 && (
            <div className="car-single-widget py-8 sm:py-10">
              <h2 className="site-title text-center mb-8">
                PRICE LIST <span>ON THE ROAD</span> JAKARTA
              </h2>

              <div
                className={`grid grid-cols-1 ${
                  product.priceItems.length === 1
                    ? 'max-w-md mx-auto'
                    : product.priceItems.length === 3
                    ? 'sm:grid-cols-3'
                    : 'sm:grid-cols-2'
                } gap-6 mb-8`}
              >
                {product.priceItems.map((variant) => (
                  <div key={variant.name} className="text-center">
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#111111] mb-2">
                      {variant.name}
                    </h3>
                    <p className="text-[20px] sm:text-[22px] font-bold text-[var(--chery-red)] tabular-nums">
                      {variant.priceDisplay}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {product.brochureUrl && (
                  <a
                    href={product.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Brochure</span>
                  </a>
                )}
                <a
                  href={`https://api.whatsapp.com/send?phone=${DEALER_INFO.salesWhatsappNumber}&text=${encodeURIComponent(
                    `Halo Chery Dunia Karawaci, saya ingin informasi terbaru dan pemesanan untuk unit ${product.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-btn-white"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          )}

          {/* 7. Model-Scoped Credit Simulation Section */}
          <CreditSimulation
            variants={modelSimVariants}
            onSimulationReady={onSimulationReady}
          />

          <div className="mt-10 text-center">
            <Link
              to="/"
              className="text-sm font-semibold text-[var(--chery-red)] hover:underline"
            >
              &larr; Kembali ke Beranda
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
