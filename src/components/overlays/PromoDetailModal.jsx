import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import Modal from '../ui/Modal';
import { DEALER_INFO } from '../../data/dealer';
import { PROMOTIONS } from '../../data/promotions';

export default function PromoDetailModal({ promo, onClose }) {
  const [activePromo, setActivePromo] = useState(promo || PROMOTIONS[0]);
  const [customerName, setCustomerName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('Chery J6');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (promo) {
      setActivePromo(promo);
      setSubmitted(false);
      setError('');
    }
  }, [promo]);

  if (!promo) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setError('Mohon isi Nama lengkap Anda.');
      return;
    }
    if (whatsapp.replace(/[^\d]/g, '').length < 8) {
      setError('Mohon isi nomor WhatsApp yang valid (minimal 8 digit).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <Modal
      isOpen={Boolean(promo)}
      onClose={onClose}
      title={activePromo.title}
      titleId="promo-modal-title"
      maxWidthClass="max-w-xl"
    >
      <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
        {/* Promo Switcher (Both verified campaigns from /promo) */}
        {PROMOTIONS.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {PROMOTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActivePromo(item);
                  setSubmitted(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                  activePromo.id === item.id
                    ? 'bg-[var(--chery-red)] text-white border-[var(--chery-red)]'
                    : 'bg-white text-[#333333] border-neutral-300 hover:border-[var(--chery-red)]'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}

        {/* Promo Image */}
        <div className="rounded-[12px] overflow-hidden bg-neutral-100">
          <img
            src={activePromo.thumbnail || activePromo.homeImage}
            alt={activePromo.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = activePromo.fallback;
            }}
            className="w-full h-auto block"
          />
        </div>

        {/* Period Verification Notice (Rule 2.3 & Section 8.3) */}
        {activePromo.isExpiredPeriod && (
          <div className="flex items-start gap-2.5 p-3.5 rounded-[10px] bg-amber-50 border border-amber-200 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{activePromo.statusNote}</p>
          </div>
        )}

        {/* Promo Details */}
        <div className="p-4 rounded-[10px] bg-[var(--chery-surface)] border border-black/10 text-xs sm:text-sm space-y-2">
          <p className="font-bold text-[#111111]">Periode Tercantum: {activePromo.period}</p>
          <p className="text-[#333333] leading-relaxed">{activePromo.summary}</p>
          <ul className="list-disc list-inside text-[var(--chery-body-text)] space-y-1 pt-1">
            {activePromo.terms.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        {/* Inquiry Form */}
        {submitted ? (
          <div className="p-4 rounded-[10px] bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Permintaan Info Promo Siap Dikirim</span>
            </div>
            <p className="leading-relaxed">
              Halo <strong>{customerName}</strong>, lanjutkan konfirmasi promo terbaru untuk{' '}
              <strong>{selectedUnit}</strong> langsung ke WhatsApp resmi Sales Chery Dunia Karawaci.
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${DEALER_INFO.salesWhatsappNumber}&text=${encodeURIComponent(
                `Halo Chery Dunia Karawaci, saya ${customerName} (${whatsapp}) ingin menanyakan info promo terbaru untuk unit ${selectedUnit}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 underline"
            >
              <span>Lanjutkan ke WhatsApp Sales</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-3">
            <div>
              <label
                htmlFor="promo-name"
                className="block text-xs font-semibold text-[#111111] mb-1"
              >
                Nama <span className="text-[var(--chery-red)]">*</span>
              </label>
              <input
                id="promo-name"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Nama lengkap"
                className="w-full h-10 px-3 rounded-[8px] text-sm border border-[#dddddd] text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
              />
            </div>
            <div>
              <label
                htmlFor="promo-wa"
                className="block text-xs font-semibold text-[#111111] mb-1"
              >
                Nomor WhatsApp <span className="text-[var(--chery-red)]">*</span>
              </label>
              <input
                id="promo-wa"
                type="tel"
                inputMode="numeric"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value.replace(/[^\d]/g, ''))}
                placeholder="08xxxxxxxxxx"
                className="w-full h-10 px-3 rounded-[8px] text-sm border border-[#dddddd] text-[#111111] focus:outline-none focus:border-[var(--chery-red)] tabular-nums"
              />
            </div>
            <div>
              <label
                htmlFor="promo-unit"
                className="block text-xs font-semibold text-[#111111] mb-1"
              >
                Unit Pilihan
              </label>
              <select
                id="promo-unit"
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="w-full h-10 px-3 rounded-[8px] text-sm border border-[#dddddd] bg-white text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
              >
                <option>Chery J6</option>
                <option>Tiggo 8 CSH</option>
                <option>Tiggo 9 CSH</option>
                <option>Tiggo Cross CSH</option>
                <option>Chery C5</option>
                <option>Chery E5</option>
              </select>
            </div>

            {error && (
              <p role="alert" className="text-xs font-medium text-[var(--chery-red)]">
                {error}
              </p>
            )}

            <button type="submit" className="theme-btn w-full">
              Pesan Sekarang
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
}
