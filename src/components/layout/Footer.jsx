import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram } from 'lucide-react';
import Container from '../ui/Container';
import { DEALER_INFO } from '../../data/dealer';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer id="footer-section" className="footer-area text-white">
      <div className="pt-[70px] sm:pt-[100px] pb-[50px] sm:pb-[70px]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Column 1: White Official Logo & Welcome Copy */}
            <div className="lg:col-span-4">
              <Link
                to="/"
                aria-label="Chery Dunia – Kembali ke halaman utama"
                className="inline-block mb-8"
              >
                {logoError ? (
                  <span className="text-xl font-extrabold tracking-[0.2em] uppercase text-white">
                    CHERY
                  </span>
                ) : (
                  <img
                    src={DEALER_INFO.logoWhite}
                    alt="Chery Dunia – Kembali ke halaman utama"
                    className="w-[50%] max-w-[240px] min-w-[140px] h-auto block"
                    loading="lazy"
                    onError={() => setLogoError(true)}
                  />
                )}
              </Link>
              <p className="text-[15px] text-white/95 leading-[1.8] pr-2">
                {DEALER_INFO.welcomeCopy}
              </p>
            </div>

            {/* Column 2: Kontak */}
            <div className="lg:col-span-4">
              <h3 className="footer-widget-title">Kontak</h3>
              <ul className="space-y-4 text-[15px] text-[var(--chery-footer-text)]">
                <li className="flex items-center gap-3.5">
                  <span className="w-[30px] h-[30px] rounded-[10px] bg-[var(--chery-red)] text-white inline-flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <a
                    href={DEALER_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--chery-footer-text)] hover:text-[var(--chery-red)] transition-colors tabular-nums"
                  >
                    {DEALER_INFO.whatsappDisplay}
                  </a>
                </li>

                <li className="flex items-center gap-3.5">
                  <span className="w-[30px] h-[30px] rounded-[10px] bg-[var(--chery-red)] text-white inline-flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <a
                    href={DEALER_INFO.phoneHref}
                    className="text-[var(--chery-footer-text)] hover:text-[var(--chery-red)] transition-colors tabular-nums"
                  >
                    {DEALER_INFO.phoneDisplay}
                  </a>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="w-[30px] h-[30px] rounded-[10px] bg-[var(--chery-red)] text-white inline-flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="leading-relaxed">{DEALER_INFO.address}</span>
                </li>

                <li className="flex items-center gap-3.5">
                  <span className="w-[30px] h-[30px] rounded-[10px] bg-[var(--chery-red)] text-white inline-flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <a
                    href={`mailto:${DEALER_INFO.email}`}
                    className="text-[var(--chery-footer-text)] hover:text-[var(--chery-red)] transition-colors break-all"
                  >
                    {DEALER_INFO.email}
                  </a>
                </li>

                <li className="flex items-center gap-3.5">
                  <span className="w-[30px] h-[30px] rounded-[10px] bg-[var(--chery-red)] text-white inline-flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </span>
                  <a
                    href={DEALER_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--chery-footer-text)] hover:text-[var(--chery-red)] transition-colors"
                  >
                    {DEALER_INFO.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Lokasi Dealer (Google Maps Embed) */}
            <div className="md:col-span-2 lg:col-span-4">
              <h3 className="footer-widget-title">Lokasi Dealer</h3>
              <div className="w-full h-[220px] rounded-[8px] overflow-hidden bg-neutral-800 border border-white/10">
                <iframe
                  title="Lokasi Dealer Chery Dunia Karawaci di Google Maps"
                  src={DEALER_INFO.mapsEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={DEALER_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2.5 text-xs text-neutral-300 hover:text-white underline-offset-4 hover:underline"
              >
                Buka di Google Maps &rarr;
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright Strip with Diagonal Red Wedge */}
      <div className="chery-copyright">
        <Container>
          <div className="pb-14 sm:pb-0">
            <p className="hidden md:block text-[15px] text-[var(--chery-footer-text)]">
              &copy; Copyright {DEALER_INFO.copyrightYear}{' '}
              <Link
                to="/"
                className="text-[var(--chery-red)] font-medium hover:underline"
              >
                {DEALER_INFO.copyrightOwner}
              </Link>{' '}
              All Rights Reserved.
            </p>
            <div className="md:hidden text-sm leading-relaxed">
              <p className="text-white">&copy; Copyright {DEALER_INFO.copyrightYear}</p>
              <Link
                to="/"
                className="text-[var(--chery-red)] font-medium hover:underline"
              >
                {DEALER_INFO.copyrightOwner}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
