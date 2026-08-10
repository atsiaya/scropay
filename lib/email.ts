/**
 * Uses Resend's plain REST API (no npm package) so this doesn't add a new
 * dependency. Requires a verified sending domain in Resend — an
 * unverified `from` address will get every send rejected.
 */
export async function sendOwnerNotification(subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  const from = process.env.NOTIFY_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    console.error(
      "Email not sent — RESEND_API_KEY / NOTIFY_EMAIL_TO / NOTIFY_EMAIL_FROM missing."
    );
    return;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, html }),
    });
    if (!res.ok) {
      console.error("Resend send failed:", res.status, await res.text());
    }
  } catch (err) {
    // Never let an email failure break the caller's success path — this
    // notifies you, it isn't part of the user-facing transaction.
    console.error("Resend send threw:", err);
  }
}
