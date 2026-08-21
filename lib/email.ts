/**
 * Uses Resend's REST API without adding a package dependency. The sender
 * address must belong to a verified Resend domain.
 */
async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NOTIFY_EMAIL_FROM;

  if (!apiKey || !from) {
    console.error("Email not sent: RESEND_API_KEY / NOTIFY_EMAIL_FROM missing.");
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
    // A notification failure must not invalidate a confirmed payment.
    console.error("Resend send threw:", err);
  }
}

/** Sends an operational alert to the administrator configured in the environment. */
export async function sendAdminNotification(subject: string, html: string): Promise<void> {
  // ADMIN_EMAIL is preferred. NOTIFY_EMAIL_TO keeps existing deployments working.
  const to = process.env.ADMIN_EMAIL || process.env.NOTIFY_EMAIL_TO;
  if (!to) {
    console.error("Admin email not sent: ADMIN_EMAIL / NOTIFY_EMAIL_TO missing.");
    return;
  }
  await sendEmail(to, subject, html);
}

/** Sends a transaction receipt to a customer. */
export async function sendCustomerNotification(
  to: string,
  subject: string,
  html: string
): Promise<void> {
  await sendEmail(to, subject, html);
}

// Existing sell-order callers are operational/admin notifications.
export const sendOwnerNotification = sendAdminNotification;

/** Renders user-controlled values safely inside a consistently styled email table. */
export function renderDetailsTable(rows: [label: string, value: string][]): string {
  const escapeHtml = (text: string) =>
    text.replace(/[&<>"']/g, (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]!
    );
  const cells = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:6px 12px;color:#5b5548;font-size:13px;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:6px 12px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;border:1px solid #e2ded0;border-radius:6px;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <table cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 4px;font-family:ui-sans-serif,system-ui,sans-serif;">
      ${cells}
    </table>`;
}
