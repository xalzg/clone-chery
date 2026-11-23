import React, { useEffect, useMemo, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SIMULATION_VARIANTS } from '../../data/vehicles';
import { formatNumber, formatRupiah, parseNumericString } from '../../utils/currency';
import {
  calculateCreditSchedule,
  CREDIT_ASSUMPTIONS_SUMMARY,
} from '../../utils/creditCalculator';

const QUICK_DP_PERCENTS = [20, 25, 30, 40];
const TENOR_OPTIONS = [
  { value: '', label: 'Semua Tenor (12 – 60 Bulan)' },
  { value: '12', label: '12 Bulan (1 Tahun)' },
  { value: '24', label: '24 Bulan (2 Tahun)' },
  { value: '36', label: '36 Bulan (3 Tahun)' },
  { value: '48', label: '48 Bulan (4 Tahun)' },
  { value: '60', label: '60 Bulan (5 Tahun)' },
];

export default function CreditSimulation({
  preselectedVariant,
  variants = SIMULATION_VARIANTS,
  onSimulationReady,
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');
  const [dpPercent, setDpPercent] = useState(5);
  const [dpAmountStr, setDpAmountStr] = useState('0');
  const [selectedTenor, setSelectedTenor] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const selectedCarObj = useMemo(
    () => variants.find((v) => v.label === selectedLabel) || null,
    [selectedLabel, variants]
  );

  // Sync when triggered from preselectedVariant or when model variants list changes
  useEffect(() => {
    if (!preselectedVariant) {
      setSelectedLabel('');
      setDpAmountStr('0');
      return;
    }
    const match = variants.find((v) => v.label === preselectedVariant);
    if (match) {
      setSelectedLabel(match.label);
      const pct = Math.max(5, Math.min(85, dpPercent || 20));
      setDpPercent(pct);
      setDpAmountStr(formatNumber(Math.round((match.price * pct) / 100)));
      setErrorMsg('');
      setFieldErrors({});
    }
  }, [preselectedVariant, variants]);

  const updateDpByPercent = (nextPct, carObj = selectedCarObj) => {
    const clamped = Math.max(5, Math.min(85, nextPct));
    setDpPercent(clamped);
    if (carObj) {
      const amt = Math.round((carObj.price * clamped) / 100);
      setDpAmountStr(formatNumber(amt));
    }
  };

  const handleCarChange = (val) => {
    setSelectedLabel(val);
    setErrorMsg('');
    setFieldErrors((prev) => ({ ...prev, car: false }));
    const found = variants.find((v) => v.label === val) || null;
    if (found) {
      const amt = Math.round((found.price * dpPercent) / 100);
      setDpAmountStr(formatNumber(amt));
    } else {
      setDpAmountStr('0');
    }
  };

  const handleIncrement = () => {
    updateDpByPercent(dpPercent + 5);
  };

  const handleDecrement = () => {
    updateDpByPercent(dpPercent - 5);
  };

  const handleAmountChange = (val) => {
    const rawNum = parseNumericString(val);
    setDpAmountStr(rawNum ? formatNumber(rawNum) : '0');
    setFieldErrors((prev) => ({ ...prev, dp: false }));
    if (selectedCarObj && selectedCarObj.price > 0) {
      const pct = Math.max(0, Math.min(85, Math.round((rawNum / selectedCarObj.price) * 100)));
      setDpPercent(pct);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    const nextErrors = {};

    if (!name.trim()) {
      nextErrors.name = true;
      setFieldErrors(nextErrors);
      setErrorMsg('Mohon masukkan Nama lengkap Anda.');
      return;
    }

    const phoneDigits = phone.replace(/[^\d]/g, '');
    if (phoneDigits.length < 8) {
      nextErrors.phone = true;
      setFieldErrors(nextErrors);
      setErrorMsg('Mohon masukkan Nomor Hp yang valid (minimal 8 digit).');
      return;
    }

    if (!selectedCarObj) {
      nextErrors.car = true;
      setFieldErrors(nextErrors);
      setErrorMsg('Mohon pilih tipe mobil Chery terlebih dahulu.');
      return;
    }

    const dpAmount =
      parseNumericString(dpAmountStr) ||
      Math.round((selectedCarObj.price * dpPercent) / 100);

    if (dpAmount < selectedCarObj.price * 0.05) {
      nextErrors.dp = true;
      setFieldErrors(nextErrors);
      setErrorMsg('Uang muka minimal 5% dari harga OTR kendaraan.');
      return;
    }

    setFieldErrors({});
    setIsLoading(true);

    setTimeout(() => {
      const schedule = calculateCreditSchedule(
        selectedCarObj.price,
        dpAmount,
        selectedTenor ? Number(selectedTenor) : null
      );
      setIsLoading(false);
      onSimulationReady({
        customerName: name.trim(),
        customerPhone: `+62${phoneDigits.replace(/^0+/, '')}`,
        carLabel: selectedCarObj.label,
        carPrice: selectedCarObj.price,
        dpAmount,
        dpPercent: Math.round((dpAmount / selectedCarObj.price) * 100),
        selectedTenor: selectedTenor || null,
        schedule,
      });
    }, 300);
  };

  return (
    <div id="simulasi-section" className="mt-14 sm:mt-20">
      <div className="max-w-[780px] mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="site-title">Simulasikan Kredit Mobil Anda</h2>
        </div>

        <div className="find-car-form">
          <div className="mb-4">
            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111111]">
              Informasi Kendaraan
            </h3>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
              {/* Nama * */}
              <div>
                <label
                  htmlFor="sim-name"
                  className="block text-[14px] font-normal text-[#111111] mb-1.5"
                >
                  Nama <span className="text-[var(--chery-red)]">*</span>
                </label>
                <input
                  id="sim-name"
                  name="nama_lengkap"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setFieldErrors((p) => ({ ...p, name: false }));
                  }}
                  placeholder="Nama"
                  className={`w-full h-[42px] px-3 rounded-[8px] border text-[15px] text-[#212529] bg-white focus:outline-none focus:border-[var(--chery-red)] ${
                    fieldErrors.name ? 'border-[var(--chery-red)]' : 'border-[#dddddd]'
                  }`}
                />
              </div>

              {/* Nomor Hp * */}
              <div>
                <label
                  htmlFor="sim-phone"
                  className="block text-[14px] font-normal text-[#111111] mb-1.5"
                >
                  Nomor Hp <span className="text-[var(--chery-red)]">*</span>
                </label>
                <div
                  className={`flex h-[42px] rounded-[8px] border bg-white overflow-hidden focus-within:border-[var(--chery-red)] ${
                    fieldErrors.phone ? 'border-[var(--chery-red)]' : 'border-[#dddddd]'
                  }`}
                >
                  <span className="inline-flex items-center px-3 bg-white border-r border-[#dddddd] text-[14px] text-[#212529] select-none">
                    +62
                  </span>
                  <input
                    id="sim-phone"
                    name="nomor_hp"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/[^\d]/g, ''));
                      setFieldErrors((p) => ({ ...p, phone: false }));
                    }}
                    placeholder="Nomor Hp"
                    className="w-full px-3 text-[15px] text-[#212529] focus:outline-none tabular-nums"
                  />
                </div>
              </div>

              {/* Pilih Mobil * */}
              <div>
                <label
                  htmlFor="sim-car"
                  className="block text-[14px] font-normal text-[#111111] mb-1.5"
                >
                  Pilih Mobil <span className="text-[var(--chery-red)]">*</span>
                </label>
                <select
                  id="sim-car"
                  name="price_id"
                  value={selectedLabel}
                  onChange={(e) => handleCarChange(e.target.value)}
                  className={`w-full h-[42px] px-3 rounded-[8px] border text-[15px] text-[#212529] bg-white focus:outline-none focus:border-[var(--chery-red)] ${
                    fieldErrors.car ? 'border-[var(--chery-red)]' : 'border-[#dddddd]'
                  }`}
                >
                  <option value="">-Pilih-</option>
                  {variants.map((variant) => (
                    <option key={variant.id} value={variant.label}>
                      {variant.label}
                    </option>
                  ))}
                </select>
                {selectedCarObj && (
                  <p className="mt-1.5 text-xs text-[#333333] tabular-nums">
                    Harga OTR:{' '}
                    <strong className="text-[var(--chery-red)]">
                      {formatRupiah(selectedCarObj.price)}
                    </strong>
                  </p>
                )}
              </div>

              {/* Uang Muka * (Exact % stepper + Rp input from live reference) */}
              <div>
                <label
                  htmlFor="sim-dp-amount"
                  className="block text-[14px] font-normal text-[#111111] mb-1.5"
                >
                  Uang Muka <span className="text-[var(--chery-red)]">*</span>
                </label>
                <div className="flex gap-2">
                  {/* Percentage with Up/Down Steppers */}
                  <div className="w-[38%] flex h-[42px] rounded-[8px] border border-[#dddddd] bg-[#e9ecef] overflow-hidden">
                    <div className="relative flex-1 flex items-center">
                      <input
                        id="persentase_uang_muka"
                        type="text"
                        readOnly
                        value={dpPercent}
                        aria-label="Persentase uang muka"
                        className="w-full h-full pl-2.5 pr-6 text-[15px] text-[#212529] bg-[#e9ecef] focus:outline-none tabular-nums"
                      />
                      <div className="absolute right-1 inset-y-0 flex flex-col justify-center">
                        <button
                          type="button"
                          onClick={handleIncrement}
                          aria-label="Tambah persentase uang muka 5%"
                          className="p-0.5 text-[#333333] hover:text-[var(--chery-red)] leading-none cursor-pointer"
                        >
                          <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleDecrement}
                          aria-label="Kurangi persentase uang muka 5%"
                          className="p-0.5 text-[#333333] hover:text-[var(--chery-red)] leading-none cursor-pointer"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 bg-[#f4f5f7] border-l border-[#dddddd] text-[13px] font-medium text-[#212529] select-none">
                      %
                    </span>
                  </div>

                  {/* Nominal Rp */}
                  <div
                    className={`w-[62%] flex h-[42px] rounded-[8px] border bg-white overflow-hidden focus-within:border-[var(--chery-red)] ${
                      fieldErrors.dp ? 'border-[var(--chery-red)]' : 'border-[#dddddd]'
                    }`}
                  >
                    <span className="inline-flex items-center px-2.5 bg-[#f4f5f7] border-r border-[#dddddd] text-[13px] font-medium text-[#212529] select-none">
                      Rp
                    </span>
                    <input
                      id="sim-dp-amount"
                      name="uang_muka"
                      type="text"
                      inputMode="numeric"
                      value={dpAmountStr}
                      onChange={(e) => handleAmountChange(e.target.value)}
                      aria-label="Nominal uang muka Rupiah"
                      className="w-full px-2.5 text-[14px] text-[#212529] focus:outline-none tabular-nums"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick DP Shortcuts + Optional Tenor Filter (Preserving full PRD Section 8.5 features cleanly) */}
            <div className="mt-4 pt-3 border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-[var(--chery-body-text)] mr-1">DP Cepat:</span>
                {QUICK_DP_PERCENTS.map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => updateDpByPercent(pct)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
                      dpPercent === pct
                        ? 'bg-[var(--chery-red)] text-white border-[var(--chery-red)]'
                        : 'bg-white text-[#333333] border-[#dddddd] hover:border-[var(--chery-red)] hover:text-[var(--chery-red)]'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="sim-tenor"
                  className="text-xs text-[var(--chery-body-text)] whitespace-nowrap"
                >
                  Tenor:
                </label>
                <select
                  id="sim-tenor"
                  value={selectedTenor}
                  onChange={(e) => setSelectedTenor(e.target.value)}
                  className="h-8 px-2.5 rounded-md border border-[#dddddd] text-xs text-[#212529] bg-white focus:outline-none focus:border-[var(--chery-red)]"
                >
                  {TENOR_OPTIONS.map((opt) => (
                    <option key={opt.value || 'all'} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {errorMsg && (
              <div
                role="alert"
                className="mt-4 p-3 rounded-[8px] bg-red-50 border border-red-200 text-xs font-medium text-[var(--chery-red)]"
              >
                {errorMsg}
              </div>
            )}

            {/* Centered Red Pill Submit Button Matching Reference */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="theme-btn theme-btn--simulasi w-full sm:w-[340px] !py-[10px] disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Menghitung Simulasi...</span>
                  </>
                ) : (
                  <span>Simulasikan</span>
                )}
              </button>
            </div>

            <p className="mt-4 text-[11px] text-center text-[var(--chery-body-text)] leading-relaxed">
              {CREDIT_ASSUMPTIONS_SUMMARY} Estimasi ini bukan penawaran kredit resmi leasing.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
