/**
 * Currency formatting and parsing helpers
 * Matches the comma-grouped Rp. format used on https://cherykarawaci.com/
 */

export function formatRupiah(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return 'Rp. 0';
  return 'Rp. ' + Math.round(amount).toLocaleString('en-US');
}

export function formatNumber(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return '0';
  return Math.round(amount).toLocaleString('en-US');
}

export function parseNumericString(str) {
  const digits = String(str || '').replace(/[^\d]/g, '');
  return digits ? parseInt(digits, 10) : 0;
}
