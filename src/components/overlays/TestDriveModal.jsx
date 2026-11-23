import React, { useEffect, useState } from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import Modal from '../ui/Modal';
import { DEALER_INFO } from '../../data/dealer';
import { ALL_SEARCHABLE_VEHICLES } from '../../data/vehicles';

export default function TestDriveModal({ isOpen, initialModel, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState(initialModel || ALL_SEARCHABLE_VEHICLES[0].name);
  const [preferredDate, setPreferredDate] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialModel) setModel(initialModel);
    if (!isOpen) {
      setSubmitted(false);
      setError('');
    }
  }, [initialModel, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Mohon masukkan Nama lengkap Anda.');
      return;
    }
    if (phone.replace(/[^\d]/g, '').length < 8) {
      setError('Mohon masukkan nomor WhatsApp yang valid (minimal 8 digit).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const confirmWaUrl = `https://api.whatsapp.com/send?phone=${DEALER_INFO.salesWhatsappNumber}&text=${encodeURIComponent(
    `Halo Chery Dunia Karawaci, saya ${name} (${phone}) ingin booking Free Test Drive untuk unit ${model}${
      preferredDate ? ` pada tanggal ${preferredDate}` : ''
    }.`
  )}`;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Booking Free Test Drive"
      titleId="testdrive-modal-title"
      maxWidthClass="max-w-md"
    >
      <div className="p-5 sm:p-6 overflow-y-auto">
        {submitted ? (
          <div className="p-4 rounded-[10px] bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 space-y-3">
            <div className="flex items-center gap-2 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Jadwal Test Drive Siap Dikonfirmasi</span>
            </div>
            <p className="leading-relaxed">
              Terima kasih <strong>{name}</strong>. Silakan konfirmasi jadwal test drive unit{' '}
              <strong>{model}</strong> langsung dengan tim sales kami melalui WhatsApp.
            </p>
            <a
              href={confirmWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 underline"
            >
              <span>Konfirmasi via WhatsApp Sales</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
            <div>
              <label
                htmlFor="td-name"
                className="block text-xs font-semibold text-[#111111] mb-1"
              >
                Nama <span className="text-[var(--chery-red)]">*</span>
              </label>
              <input
                id="td-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama lengkap"
                className="w-full h-10 px-3 rounded-[8px] text-sm border border-[#dddddd] text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
              />
            </div>

            <div>
              <label
                htmlFor="td-phone"
                className="block text-xs font-semibold text-[#111111] mb-1"
              >
                Nomor WhatsApp <span className="text-[var(--chery-red)]">*</span>
              </label>
              <input
                id="td-phone"
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ''))}
                placeholder="08xxxxxxxxxx"
                className="w-full h-10 px-3 rounded-[8px] text-sm border border-[#dddddd] text-[#111111] focus:outline-none focus:border-[var(--chery-red)] tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="td-model"
                className="block text-xs font-semibold text-[#111111] mb-1"
              >
                Pilih Tipe Mobil
              </label>
              <select
                id="td-model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full h-10 px-3 rounded-[8px] text-sm border border-[#dddddd] bg-white text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
              >
                {ALL_SEARCHABLE_VEHICLES.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
                {!ALL_SEARCHABLE_VEHICLES.some((c) => c.name === model) && model && (
                  <option value={model}>{model}</option>
                )}
              </select>
            </div>

            <div>
              <label
                htmlFor="td-date"
                className="block text-xs font-semibold text-[#111111] mb-1"
              >
                Rencana Tanggal (Opsional)
              </label>
              <input
                id="td-date"
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full h-10 px-3 rounded-[8px] text-sm border border-[#dddddd] text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
              />
            </div>

            {error && (
              <p role="alert" className="text-xs font-medium text-[var(--chery-red)]">
                {error}
              </p>
            )}

            <button type="submit" className="theme-btn w-full">
              Jadwalkan Test Drive
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
}
