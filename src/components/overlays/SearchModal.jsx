import React, { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import Modal from '../ui/Modal';
import { ALL_SEARCHABLE_VEHICLES } from '../../data/vehicles';

export default function SearchModal({
  isOpen,
  initialQuery,
  onClose,
  onSelectVehicle,
}) {
  const [query, setQuery] = useState(initialQuery || '');

  useEffect(() => {
    setQuery(initialQuery || '');
  }, [initialQuery, isOpen]);

  const q = query.trim().toLowerCase();
  const matches = ALL_SEARCHABLE_VEHICLES.filter(
    (car) =>
      !q ||
      car.name.toLowerCase().includes(q) ||
      car.vehicleType.toLowerCase().includes(q) ||
      car.variants.some((v) => v.type.toLowerCase().includes(q))
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Cari Tipe Mobil Chery"
      titleId="search-modal-title"
      maxWidthClass="max-w-lg"
      hideDefaultHeader
    >
      <div className="p-4 border-b border-black/10 flex items-center gap-2.5">
        <Search className="w-5 h-5 text-[var(--chery-red)] shrink-0" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari Tiggo Cross, Chery C5, Tiggo 8, Tiggo 9, E5, J6, Chery Q..."
          aria-label="Cari model mobil Chery"
          className="flex-1 text-sm text-[#111111] focus:outline-none"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup pencarian"
          className="p-1.5 rounded-full text-neutral-500 hover:text-[#111111] hover:bg-neutral-100 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="max-h-[65vh] overflow-y-auto divide-y divide-black/10">
        {matches.length === 0 ? (
          <p className="p-6 text-center text-sm text-[var(--chery-body-text)]">
            Tidak ditemukan model Chery yang cocok dengan &ldquo;{query}&rdquo;.
          </p>
        ) : (
          matches.map((car) => (
            <button
              key={car.id}
              type="button"
              onClick={() => {
                onClose();
                onSelectVehicle(car);
              }}
              className="w-full px-4 py-3 text-left hover:bg-[var(--chery-surface)] flex items-center justify-between gap-3 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={car.image}
                  alt=""
                  aria-hidden="true"
                  className="w-14 h-10 rounded-[6px] object-cover bg-neutral-100 shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#111111] truncate">{car.name}</p>
                  <p className="text-xs text-[var(--chery-body-text)]">
                    {car.vehicleType} • {car.seats} Seats
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-[var(--chery-red)] tabular-nums shrink-0">
                {car.priceDisplay}
              </span>
            </button>
          ))
        )}
      </div>
    </Modal>
  );
}
