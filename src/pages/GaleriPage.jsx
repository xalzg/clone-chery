import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Container from '../components/ui/Container';
import PageBreadcrumb from '../components/ui/PageBreadcrumb';
import SectionHeading from '../components/ui/SectionHeading';
import { PAGES_CONTENT } from '../data/pagesContent';
import { useModal } from '../hooks/useModal';

export default function GaleriPage() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const images = PAGES_CONTENT.galleryImages;
  const isOpen = lightboxIdx !== null;

  const lightboxRef = useModal(isOpen, () => setLightboxIdx(null));

  return (
    <>
      <PageBreadcrumb
        title="Galeri"
        currentLabel="Gallery"
        desktopBg={PAGES_CONTENT.breadcrumbs.galeri}
      />

      <section className="w-full bg-white py-[72px] sm:py-[110px]">
        <Container>
          <div className="text-center">
            <span className="inline-block text-[15px] font-bold uppercase tracking-[4px] text-[var(--chery-red)] mb-2">
              Galeri
            </span>
            <SectionHeading title="Galeri" accent="Chery" showDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-4">
            {images.map((imgUrl, idx) => (
              <div key={imgUrl} className="gallery-card">
                <button
                  type="button"
                  onClick={() => setLightboxIdx(idx)}
                  aria-label={`Lihat foto galeri ${idx + 1}`}
                  className="block w-full overflow-hidden rounded-[12px] cursor-pointer focus:outline-none"
                >
                  <img
                    src={imgUrl}
                    alt={`Galeri Chery Dunia Karawaci ${idx + 1}`}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover block hover:scale-105 transition-transform duration-300"
                  />
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Accessible Lightbox Modal (Replaces GLightbox natively) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setLightboxIdx(null);
          }}
        >
          <div
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-label="Pratinjau foto galeri"
            tabIndex={-1}
            className="relative max-w-4xl w-full flex items-center justify-center focus:outline-none"
          >
            <button
              type="button"
              onClick={() => setLightboxIdx(null)}
              aria-label="Tutup galeri"
              className="fixed top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-[var(--chery-red)] text-white inline-flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={() => setLightboxIdx((prev) => (prev - 1 + images.length) % images.length)}
              aria-label="Foto sebelumnya"
              className="absolute left-0 sm:-left-12 w-10 h-10 rounded-full bg-black/60 hover:bg-[var(--chery-red)] text-white inline-flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={images[lightboxIdx]}
              alt={`Galeri Chery Dunia Karawaci ${lightboxIdx + 1}`}
              className="max-h-[84vh] max-w-full rounded-[10px] object-contain"
            />

            <button
              type="button"
              onClick={() => setLightboxIdx((prev) => (prev + 1) % images.length)}
              aria-label="Foto berikutnya"
              className="absolute right-0 sm:-right-12 w-10 h-10 rounded-full bg-black/60 hover:bg-[var(--chery-red)] text-white inline-flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
