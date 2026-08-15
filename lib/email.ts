/**
 * Uses Resend's plain REST API (no npm package) so this doesn't add a new
 * dependency. Requires a verified sending domain in Resend — an
 * unverified `from` address will get every send rejected.
 */
async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NOTIFY_EMAIL_FROM;

  if (!apiKey || !from) {
    console.error("Email not sent — RESEND_API_KEY / NOTIFY_EMAIL_FROM missing.");
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
    // Never let an email failure break the caller's success path — a
    // failed notification shouldn't be the reason an order fails to
    // finalize, whether it's the owner's copy or the customer's.
    console.error("Resend send threw:", err);
  }
}

/** To you — NOTIFY_EMAIL_TO. */
export async function sendOwnerNotification(subject: string, html: string): Promise<void> {
  const to = process.env.NOTIFY_EMAIL_TO;
  if (!to) {
    console.error("Owner email not sent — NOTIFY_EMAIL_TO missing.");
    return;
  }
  await sendEmail(to, subject, html);
}

/** To the customer — only called when an order actually has an email on
 *  it (the field is optional in both the buy and sell flows). */
export async function sendUserEmail(to: string, subject: string, html: string): Promise<void> {
  await sendEmail(to, subject, html);
}

/**
 * A plain, consistently-formatted details table for order-notification
 * emails. Values render in monospace inside a bordered cell so they're
 * easy to triple-click-select and copy out of an email client — order
 * ids, addresses, and phone numbers are exactly the kind of value you'll
 * want to paste into a block explorer, Daraja, or a support ticket.
 */
export function renderDetailsTable(rows: [label: string, value: string][]): string {
  const cells = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:6px 12px;color:#5b5548;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:6px 12px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;border:1px solid #e2ded0;border-radius:6px;">${value}</td>
        </tr>`
    )
    .join("");

  return `
    <table cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 4px;font-family:ui-sans-serif,system-ui,sans-serif;">
      ${cells}
    </table>`;
}
