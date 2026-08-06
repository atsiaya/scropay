/**
 * Accepts the common ways a Kenyan number gets typed — 07XXXXXXXX,
 * 01XXXXXXXX, 2547XXXXXXXX, +2541XXXXXXXX — and normalizes to the
 * 254XXXXXXXXX shape the Daraja (M-Pesa) API expects. Returns null if it
 * doesn't match any of those, so the caller can show a validation message.
 */
export function normalizeMsisdn(input: string): string | null {
  const digits = input.replace(/[^0-9]/g, "");

  if (/^0[17]\d{8}$/.test(digits)) return "254" + digits.slice(1);
  if (/^254[17]\d{8}$/.test(digits)) return digits;

  return null;
}

export function formatMsisdn(msisdn: string): string {
  // 2547XXXXXXXX -> +254 7XX XXX XXX
  if (!/^254\d{9}$/.test(msisdn)) return msisdn;
  return `+254 ${msisdn.slice(3, 6)} ${msisdn.slice(6, 9)} ${msisdn.slice(9)}`;
}
