import React from 'react';
import { X } from 'lucide-react';
import { useModal } from '../../hooks/useModal';

export default function Modal({
  isOpen,
  onClose,
  title,
  titleId = 'chery-modal-title',
  maxWidthClass = 'max-w-2xl',
  hideDefaultHeader = false,
  closeOnBackdrop = true,
  children,
}) {
  const modalRef = useModal(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      style={{ animation: 'fade-in 0.2s ease-out' }}
      onMouseDown={(e) => {
        if (closeOnBackdrop && e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        className={`relative w-full ${maxWidthClass} bg-white rounded-[12px] shadow-2xl max-h-[90vh] flex flex-col overflow-hidden focus:outline-none`}
      >
        {!hideDefaultHeader && (
          <div className="px-5 py-4 border-b border-black/10 flex items-center justify-between gap-3 bg-[var(--chery-dark)] text-white">
            <h3 id={titleId} className="text-base sm:text-lg font-bold !text-white leading-snug">
              {title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup dialog"
              className="w-8 h-8 rounded-full inline-flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
