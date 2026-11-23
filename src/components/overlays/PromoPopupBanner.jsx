import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { POPUP_BANNER } from '../../data/promotions';
import { useModal } from '../../hooks/useModal';

const STORAGE_KEY = 'chery_karawaci_popup_dismissed';

export default function PromoPopupBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('nopopup') === '1') {
        return undefined;
      }
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return undefined;
    } catch {
      // Ignore storage access errors
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // Ignore storage access errors
    }
  };

  const containerRef = useModal(isOpen, handleClose);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/55"
      style={{ animation: 'fade-in 0.25s ease-out' }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Informasi Resmi Chery Dunia Karawaci"
        tabIndex={-1}
        className="relative w-[calc(100vw-32px)] max-w-[760px] rounded-[10px] shadow-2xl focus:outline-none"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Tutup informasi banner"
          className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 hover:bg-[var(--chery-red)] text-white inline-flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <a
          href={POPUP_BANNER.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
          className="block rounded-[10px] overflow-hidden bg-white"
        >
          <picture>
            <source media="(max-width: 600px)" srcSet={POPUP_BANNER.mobile} />
            <source media="(min-width: 601px)" srcSet={POPUP_BANNER.desktop} />
            <img
              src={POPUP_BANNER.desktop}
              alt={POPUP_BANNER.alt}
              className="w-full max-h-[82vh] object-contain block"
            />
          </picture>
        </a>
      </div>
    </div>
  );
}
