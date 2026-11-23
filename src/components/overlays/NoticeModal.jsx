import React from 'react';
import { ExternalLink } from 'lucide-react';
import Modal from '../ui/Modal';

export default function NoticeModal({ notice, onClose }) {
  if (!notice) return null;

  return (
    <Modal
      isOpen={Boolean(notice)}
      onClose={onClose}
      title={notice.title}
      titleId="notice-modal-title"
      maxWidthClass="max-w-md"
    >
      <div className="p-5 space-y-4">
        <p className="text-sm text-[var(--chery-body-text)] leading-relaxed">
          {notice.message}
        </p>
        <div className="flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-neutral-300 text-xs font-semibold text-[#333333] hover:border-[#111111] cursor-pointer"
          >
            Tutup
          </button>
          {notice.url && (
            <a
              href={notice.url}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn !py-2 !px-4 !text-xs"
            >
              <span>Kunjungi</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
