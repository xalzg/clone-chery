import React from 'react';
import { ExternalLink, KeyRound, Users } from 'lucide-react';
import Modal from '../ui/Modal';
import { formatRupiah } from '../../utils/currency';

export default function VehicleDetailModal({
  vehicle,
  onClose,
  onSimulate,
  onTestDrive,
}) {
  if (!vehicle) return null;

  return (
    <Modal
      isOpen={Boolean(vehicle)}
      onClose={onClose}
      title={vehicle.name}
      titleId="vehicle-detail-title"
      maxWidthClass="max-w-2xl"
    >
      <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
        <div className="aspect-[16/10] bg-neutral-100 rounded-[10px] overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = vehicle.fallback;
            }}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[#333333]">
          <span className="inline-flex items-center gap-1.5">
            <KeyRound className="w-4 h-4 text-[var(--chery-red)]" />
            Vehicle Type : {vehicle.vehicleType}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[var(--chery-red)]" />
            {vehicle.doors} Doors, {vehicle.seats} Seats
          </span>
        </div>

        {vehicle.verifiedHighlights && (
          <div className="flex flex-wrap gap-2">
            {vehicle.verifiedHighlights.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-[var(--chery-surface)] border border-black/10 text-xs font-medium text-[#333333]"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--chery-body-text)] mb-2.5">
            Daftar Varian &amp; Harga OTR Referensi
          </h4>
          <div className="border border-black/10 rounded-[10px] divide-y divide-black/10 overflow-hidden">
            {vehicle.variants.map((v) => (
              <div
                key={v.type}
                className="px-4 py-3 flex items-center justify-between gap-3 text-sm bg-white"
              >
                <span className="font-medium text-[#111111]">{v.type}</span>
                <span className="font-bold text-[var(--chery-red)] tabular-nums">
                  {formatRupiah(v.price)}
                </span>
              </div>
            ))}
          </div>
          {vehicle.priceNote && (
            <p className="mt-2 text-xs text-[var(--chery-body-text)]">{vehicle.priceNote}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <button
            type="button"
            onClick={() => onSimulate(vehicle.defaultSimVariant)}
            className="theme-btn w-full"
          >
            Simulasikan Kredit
          </button>
          <button
            type="button"
            onClick={() => onTestDrive(vehicle.name)}
            className="w-full inline-flex items-center justify-center rounded-full bg-[var(--chery-dark)] hover:bg-[var(--chery-red)] text-white text-sm font-medium py-3 px-5 transition-colors cursor-pointer"
          >
            Booking Test Drive
          </button>
        </div>

        {vehicle.officialUrl && (
          <div className="text-center pt-1">
            <a
              href={vehicle.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--chery-body-text)] hover:text-[var(--chery-red)]"
            >
              <span>Buka halaman spesifikasi resmi di cherykarawaci.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </Modal>
  );
}
