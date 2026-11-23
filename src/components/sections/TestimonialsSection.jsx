import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import {
  TESTIMONIAL_PLAY_ICON,
  TESTIMONIAL_VIDEOS,
} from '../../data/testimonials';

export default function TestimonialsSection({ onSelectVideo }) {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [playIconFailed, setPlayIconFailed] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    const idx = Math.round(progress * (TESTIMONIAL_VIDEOS.length - 1));
    setActiveDot(Math.max(0, Math.min(TESTIMONIAL_VIDEOS.length - 1, idx)));
  };

  const scrollByStep = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 310, behavior: 'smooth' });
  };

  const scrollToIndex = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index];
    if (card) {
      el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
      setActiveDot(index);
    }
  };

  return (
    <section
      id="testimonials-section"
      className="w-full bg-white py-[72px] sm:py-[100px] lg:py-[120px]"
    >
      <Container>
        <SectionHeading
          title="Cerita Mereka"
          accent="Tentang Kami"
          showDivider
        />

        {/* Carousel Track with Optional Subtle Nav Buttons */}
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByStep(-1)}
            aria-label="Testimoni sebelumnya"
            className="hidden md:inline-flex absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-black/10 shadow-md text-[#111111] hover:bg-[var(--chery-red)] hover:text-white hover:border-[var(--chery-red)] items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollByStep(1)}
            aria-label="Testimoni berikutnya"
            className="hidden md:inline-flex absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-black/10 shadow-md text-[#111111] hover:bg-[var(--chery-red)] hover:text-white hover:border-[var(--chery-red)] items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
          >
            {TESTIMONIAL_VIDEOS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectVideo(item)}
                aria-label={`Putar video testimoni ${item.name}`}
                className="location-item snap-start shrink-0 w-[82vw] sm:w-[300px] md:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] text-left cursor-pointer focus:outline-none"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#181a1f]">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/400x500/181a1f/FFFFFF?text=${encodeURIComponent(
                        item.name
                      )}`;
                    }}
                    className="location-thumb w-full h-full object-cover object-center"
                  />
                </div>

                {/* Exact Signature Red Floating Pill Overlay (.location-info) */}
                <div className="location-info">
                  <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                    {playIconFailed ? (
                      <span className="w-7 h-7 rounded-full bg-white/20 inline-flex items-center justify-center text-white">
                        <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                      </span>
                    ) : (
                      <img
                        src={TESTIMONIAL_PLAY_ICON}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        onError={() => setPlayIconFailed(true)}
                        className="w-7 h-7 object-contain"
                      />
                    )}
                  </div>
                  <h4 className="text-[13px] font-semibold !text-white leading-tight truncate">
                    {item.name}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Circular Red Owl-Carousel Style Dots */}
        <div
          className="mt-5 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Navigasi testimoni"
        >
          {TESTIMONIAL_VIDEOS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeDot === idx}
              aria-label={`Testimonial Slide ${idx + 1}`}
              onClick={() => scrollToIndex(idx)}
              className={`rounded-full transition-all cursor-pointer ${
                activeDot === idx
                  ? 'w-[14px] h-[14px] bg-[var(--chery-dot-active)]'
                  : 'w-[10px] h-[10px] bg-[var(--chery-dot-inactive)] opacity-80 hover:opacity-100'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
