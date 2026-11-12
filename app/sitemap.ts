import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_APP_URL || "https://www.safepal.co.ke").replace(/\/$/, "");
  return ["", "/how-it-works", "/fees", "/faq", "/support", "/terms", "/privacy"].map((p) => ({ url: `${base}${p}` }));
}
