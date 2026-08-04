export function formatFiat(n: number): string {
  return n.toLocaleString("en-KE", { maximumFractionDigits: 0 });
}

export function formatAsset(n: number): string {
  if (n === 0) return "0";
  return n.toLocaleString("en-KE", { maximumFractionDigits: 6 });
}

export function timeLeft(updatedAt: number, ttlSeconds: number): number {
  const elapsed = (Date.now() - updatedAt) / 1000;
  return Math.max(0, Math.round(ttlSeconds - elapsed));
}
