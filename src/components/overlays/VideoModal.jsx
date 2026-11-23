import React from 'react';
import { ExternalLink } from 'lucide-react';
import Modal from '../ui/Modal';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1${
    video.startSeconds ? `&start=${video.startSeconds}` : ''
  }`;

  return (
    <Modal
      isOpen={Boolean(video)}
      onClose={onClose}
      title={`Cerita Mereka Tentang Kami — ${video.name}`}
      titleId="video-modal-title"
      maxWidthClass="max-w-3xl"
    >
      <div className="p-4 sm:p-5 bg-[#111111] space-y-3">
        <div className="aspect-video w-full rounded-[8px] overflow-hidden bg-black">
          <iframe
            src={embedUrl}
            title={`Video Testimoni ${video.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        <div className="flex items-center justify-between text-xs text-neutral-300">
          <span>Testimoni Pelanggan Chery Dunia Karawaci: {video.name}</span>
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-[var(--chery-red)] transition-colors"
          >
            <span>Buka di YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </Modal>
  );
}
