/**
 * Credit Simulation Calculator
 * Preserves the exact flat-rate calculation formula from the baseline prototype
 * while exposing Pokok Hutang and Suku Bunga (%) for the expandable detail rows
 * matching https://cherykarawaci.com/#modal_result_simulation.
 *
 * Disclaimer: Frontend estimate only — not an official leasing offer.
 */

export const CREDIT_TENOR_CONFIG = [
  { months: 12, annualFlatRate: 0.032, adminFee: 3500000, insuranceRate: 0.025 },
  { months: 24, annualFlatRate: 0.038, adminFee: 4000000, insuranceRate: 0.042 },
  { months: 36, annualFlatRate: 0.043, adminFee: 4500000, insuranceRate: 0.058 },
  { months: 48, annualFlatRate: 0.049, adminFee: 5000000, insuranceRate: 0.072 },
  { months: 60, annualFlatRate: 0.054, adminFee: 5500000, insuranceRate: 0.085 },
];

export const CREDIT_ASSUMPTIONS_SUMMARY =
  'Asumsi estimasi simulasi frontend: bunga flat tahunan 3.2% (1 thn) s.d. 5.4% (5 thn), biaya admin Rp. 3,500,000 – Rp. 5,500,000, serta estimasi asuransi 2.5% – 8.5% dari harga OTR.';

/**
 * Calculates credit installment schedule across 12 to 60 months.
 * @param {number} carPrice - Vehicle OTR price in IDR
 * @param {number} dpAmount - Down payment amount in IDR
 * @param {number|null} selectedTenorMonths - Optional single tenor filter (null returns all 5 tenors)
 */
export function calculateCreditSchedule(carPrice, dpAmount, selectedTenorMonths = null) {
  if (!carPrice || carPrice <= 0) return [];

  const safeDp = Math.max(0, Math.min(dpAmount, carPrice * 0.85));
  const principal = Math.max(0, carPrice - safeDp);

  const configs = selectedTenorMonths
    ? CREDIT_TENOR_CONFIG.filter((t) => t.months === Number(selectedTenorMonths))
    : CREDIT_TENOR_CONFIG;

  return configs.map((t) => {
    const years = t.months / 12;
    const totalInterest = principal * t.annualFlatRate * years;
    const monthlyInstallment = (principal + totalInterest) / t.months;
    const insurance = carPrice * t.insuranceRate;
    const tdp = safeDp + monthlyInstallment + t.adminFee + insurance;

    return {
      tenorLabel: `${t.months} Bulan (${years} Tahun)`,
      tenorShort: `${t.months} Bulan`,
      months: t.months,
      years,
      pokokHutang: Math.round(principal),
      bungaPercent: Number((t.annualFlatRate * 100).toFixed(2)),
      adminFee: t.adminFee,
      insurance: Math.round(insurance),
      tdp: Math.round(tdp / 1000) * 1000,
      installment: Math.round(monthlyInstallment / 1000) * 1000,
    };
  });
}
