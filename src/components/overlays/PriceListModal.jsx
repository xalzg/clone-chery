import React from 'react';
import Modal from '../ui/Modal';
import { FULL_PRICELIST } from '../../data/vehicles';
import { formatRupiah } from '../../utils/currency';

export default function PriceListModal({ isOpen, onClose, onSimulateVariant }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Harga Mobil Chery — OTR Referensi"
      titleId="pricelist-modal-title"
      maxWidthClass="max-w-3xl"
    >
      <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
        <p className="text-xs text-[var(--chery-body-text)]">
          Sumber data: cherykarawaci.com/harga-mobil-chery. Harga OTR dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FULL_PRICELIST.map((group) => (
            <div
              key={group.model}
              className="border border-black/10 rounded-[10px] overflow-hidden bg-white flex flex-col"
            >
              <div className="p-3 bg-[var(--chery-surface)] border-b border-black/10 flex items-center gap-3">
                <img
                  src={group.image}
                  alt={group.model}
                  loading="lazy"
                  className="w-16 h-11 rounded-[6px] object-cover bg-neutral-200 shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h4 className="font-bold text-[15px] text-[#111111]">{group.model}</h4>
              </div>

              <div className="divide-y divide-black/10 flex-1">
                {group.rows.map((row) => (
                  <div
                    key={row.type}
                    className="px-3.5 py-2.5 flex items-center justify-between gap-2 text-xs sm:text-sm"
                  >
                    <span className="text-[#333333]">{row.type}</span>
                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className="font-semibold text-[var(--chery-red)] tabular-nums">
                        {formatRupiah(row.price)}
                      </span>
                      {onSimulateVariant && (
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onSimulateVariant(`${group.model} - ${row.type}`);
                          }}
                          className="text-[11px] font-medium text-[#111111] underline hover:text-[var(--chery-red)] cursor-pointer"
                        >
                          Simulasi
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
