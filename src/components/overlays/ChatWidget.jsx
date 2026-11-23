import React, { useEffect, useState } from 'react';
import { X, Car, Wrench } from 'lucide-react';
import { DEALER_INFO } from '../../data/dealer';

function WhatsAppColorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#eceff1"
        d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"
      />
      <path
        fill="#4caf50"
        d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"
      />
      <path
        fill="#fafafa"
        d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
      />
    </svg>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [beliImgErr, setBeliImgErr] = useState(false);
  const [servisImgErr, setServisImgErr] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Layanan Chat Chery Dunia Karawaci"
          className="whatsapp-chat-popup shadow-2xl"
        >
          {/* Black Rounded Header (Exact match to .header-chat) */}
          <div className="relative bg-black text-white px-6 pt-5 pb-20 rounded-t-[30px]">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup layanan chat"
              className="absolute top-3.5 right-4 w-8 h-8 rounded-full inline-flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={DEALER_INFO.logoWhite}
              alt="Chery Dunia"
              className="w-[130px] h-auto block mb-4"
            />
            <h3 className="text-[24px] font-bold !text-white leading-tight mb-1.5">
              Hello
            </h3>
            <p className="text-[14px] text-white/90 leading-snug max-w-[85%]">
              Selamat datang dilayanan chat Chery Dunia
            </p>
          </div>

          {/* Overlapping Light-Gray Rounded Body (Exact match to .whatsapp-chat-body) */}
          <div className="relative -mt-12 bg-[#eeeeee] px-5 py-6 rounded-[30px]">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={DEALER_INFO.salesWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#f5f5f5] rounded-[10px] p-3.5 text-center shadow-sm transition-colors flex flex-col items-center justify-center gap-2"
              >
                {beliImgErr ? (
                  <Car className="w-10 h-10 text-[var(--chery-red)]" />
                ) : (
                  <img
                    src={DEALER_INFO.chatIcons.beliMobil}
                    alt="Beli Mobil"
                    className="h-12 w-auto object-contain"
                    onError={() => setBeliImgErr(true)}
                  />
                )}
                <span className="text-[14px] font-bold text-[#111111]">
                  Beli Mobil
                </span>
              </a>

              <a
                href={DEALER_INFO.serviceWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#f5f5f5] rounded-[10px] p-3.5 text-center shadow-sm transition-colors flex flex-col items-center justify-center gap-2"
              >
                {servisImgErr ? (
                  <Wrench className="w-10 h-10 text-[var(--chery-red)]" />
                ) : (
                  <img
                    src={DEALER_INFO.chatIcons.servisMobil}
                    alt="Servis Mobil"
                    className="h-12 w-auto object-contain"
                    onError={() => setServisImgErr(true)}
                  />
                )}
                <span className="text-[14px] font-bold text-[#111111]">
                  Servis Mobil
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* White Pill Trigger Button (Exact match to .blantershow-chat) */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          title="Show Chat"
          className="blantershow-chat"
        >
          <WhatsAppColorIcon />
          <span>Chat with Us</span>
        </button>
      )}
    </>
  );
}
