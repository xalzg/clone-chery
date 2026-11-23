import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X, RotateCcw } from 'lucide-react';
import Modal from '../ui/Modal';
import { DEALER_INFO } from '../../data/dealer';
import { formatRupiah } from '../../utils/currency';

export default function SimulationResultModal({
  result,
  onClose,
  onBookTestDrive,
  onRepeatSimulation,
}) {
  const [expandedTenors, setExpandedTenors] = useState({});

  if (!result) return null;

  const toggleRow = (months) => {
    setExpandedTenors((prev) => ({ ...prev, [months]: !prev[months] }));
  };

  const waSalesUrl = `https://api.whatsapp.com/send?phone=${DEALER_INFO.salesWhatsappNumber}&text=${encodeURIComponent(
    `Halo Chery Dunia Karawaci, saya ${result.customerName} ingin konsultasi simulasi kredit untuk ${result.carLabel} dengan DP ${formatRupiah(
      result.dpAmount
    )} (${result.dpPercent}%).`
  )}`;

  return (
    <Modal
      isOpen={Boolean(result)}
      onClose={onClose}
      title="Hasil Simulasi Kredit Mobil Anda"
      titleId="sim-result-title"
      maxWidthClass="max-w-[640px]"
      hideDefaultHeader
    >
      {/* Top Centered Official Simulation Icon + Close Button (Exact match to #modal_result_simulation) */}
      <div className="relative pt-5 pb-2 px-5 flex justify-center">
        <img
          src={DEALER_INFO.chatIcons.simulasi}
          alt="Ikon Simulasi Kredit"
          width={76}
          height={76}
          className="w-[76px] h-[76px] object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup hasil simulasi"
          className="absolute top-3 right-3 w-8 h-8 rounded-full inline-flex items-center justify-center text-[#111111] hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Modal Body */}
      <div className="px-5 sm:px-6 pb-6 overflow-y-auto space-y-4">
        <h3
          id="sim-result-title"
          className="text-center text-[18px] sm:text-[20px] font-bold text-[#111111]"
        >
          Hasil Simulasi Kredit Mobil Anda
        </h3>

        {/* Selected Car & DP Summary */}
        <div className="bg-[var(--chery-surface)] border border-black/10 rounded-[8px] px-4 py-3 text-xs sm:text-sm space-y-1">
          <div className="text-[12px] text-[var(--chery-body-text)]">Mobil</div>
          <div className="font-bold text-[#111111] tabular-nums">
            {result.carLabel} | {formatRupiah(result.carPrice)}
          </div>
          <div className="text-[12px] text-[#333333] tabular-nums">
            Uang Muka ({result.dpPercent}%):{' '}
            <strong className="text-[var(--chery-red)]">
              {formatRupiah(result.dpAmount)}
            </strong>
          </div>
        </div>

        {/* Bordered Result Table with Expandable Detail Rows (Exact Reference Structure) */}
        <div className="overflow-x-auto border border-[#dee2e6] rounded-[6px]">
          <table className="w-full text-left border-collapse text-[11px] sm:text-[13px]">
            <thead>
              <tr className="bg-[#f2f2f2] border-b border-[#dee2e6] text-[#111111]">
                <th className="py-2.5 px-2.5 sm:px-3 font-bold">Tenor</th>
                <th className="py-2.5 px-2.5 sm:px-3 font-bold">Total Bayar Pertama</th>
                <th className="py-2.5 px-2.5 sm:px-3 font-bold">Angsuran</th>
                <th className="py-2.5 px-2.5 sm:px-3 font-bold text-center w-[92px]">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dee2e6] tabular-nums text-[#212529]">
              {result.schedule.map((row) => {
                const isExpanded = Boolean(expandedTenors[row.months]);
                return (
                  <React.Fragment key={row.months}>
                    <tr className="bg-white">
                      <td className="py-2.5 px-2.5 sm:px-3 font-medium">
                        {row.tenorShort}
                      </td>
                      <td className="py-2.5 px-2.5 sm:px-3">{formatRupiah(row.tdp)}</td>
                      <td className="py-2.5 px-2.5 sm:px-3 font-semibold text-[#111111]">
                        {formatRupiah(row.installment)}
                      </td>
                      <td className="py-2 px-2 text-center">
                        <button
                          type="button"
                          onClick={() => toggleRow(row.months)}
                          aria-expanded={isExpanded}
                          className="inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded bg-[var(--chery-red)] hover:bg-[var(--chery-red-dark)] text-white text-[11px] font-medium transition-colors cursor-pointer"
                        >
                          <span>Detail</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </td>
                    </tr>
                    {isExpanded && (
                      <>
                        <tr className="bg-[#f2f2f2]">
                          <td colSpan={2} className="py-2 px-3 font-bold">
                            Pokok Hutang
                          </td>
                          <td colSpan={2} className="py-2 px-3">
                            {formatRupiah(row.pokokHutang)}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td colSpan={2} className="py-2 px-3 font-bold">
                            Suku Bunga (Estimasi Flat/Thn)
                          </td>
                          <td colSpan={2} className="py-2 px-3">
                            {row.bungaPercent}%
                          </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                          <td colSpan={2} className="py-2 px-3 font-bold">
                            Tenor
                          </td>
                          <td colSpan={2} className="py-2 px-3">
                            {row.tenorLabel}
                          </td>
                        </tr>
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Exact Dual Action Buttons (Blue #2775e2 Test Drive + Green #1dbf53 Sales WA) */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookTestDrive(result.carLabel);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-[var(--chery-blue-action)] hover:opacity-90 text-white text-xs sm:text-[13px] font-medium transition-opacity cursor-pointer"
          >
            <img
              src={DEALER_INFO.chatIcons.carBtn}
              alt=""
              aria-hidden="true"
              className="w-[18px] h-[18px] object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span>Booking Test Drive</span>
          </button>

          <a
            href={waSalesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-[var(--chery-green-action)] hover:opacity-90 text-white text-xs sm:text-[13px] font-medium transition-opacity"
          >
            <img
              src={DEALER_INFO.chatIcons.waBtn}
              alt=""
              aria-hidden="true"
              className="w-[18px] h-[18px] object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span>Hubungi Sales</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              if (onRepeatSimulation) onRepeatSimulation();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] border border-neutral-300 hover:border-[#111111] text-[#333333] text-xs sm:text-[13px] font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Ulangi Simulasi</span>
          </button>
        </div>

        {/* Verbatim Centered Red Disclaimers */}
        <ul className="text-center text-[11px] sm:text-[12px] text-[var(--chery-red)] space-y-1 pt-2 border-t border-black/10">
          <li>* Simulasi hitungan diatas tidak mengikat &amp; dapat berubah sewaktu waktu</li>
          <li>* Untuk bentuk simulasi hitungan lainnya bisa hubungi pihak sales kami</li>
        </ul>
      </div>
    </Modal>
  );
}
