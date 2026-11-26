export async function sendVerificationEmail({ user, url }) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !from) {
    throw new Error("Set RESEND_API_KEY and RESEND_FROM_EMAIL to send verification emails.");
  }

  const recipientName = escapeHtml(user.name || "there");
  const safeUrl = escapeHtml(url);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify your ChakriKhuji email</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f5f7; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 560px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
          
          <!-- Brand Header -->
          <tr>
            <td style="padding: 28px 36px 20px; border-bottom: 1px solid #f3f4f6;">
              <span style="font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #111827;">
                Chakri<span style="color: #ea580c;">Khuji</span>
              </span>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 32px 36px;">
              <h1 style="margin: 0 0 16px; font-size: 20px; font-weight: 700; color: #111827; line-height: 1.3;">
                Verify your email address
              </h1>
              <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6; color: #4b5563;">
                Hello ${recipientName},
              </p>
              <p style="margin: 0 0 28px; font-size: 15px; line-height: 1.6; color: #4b5563;">
                Thanks for signing up for <strong>ChakriKhuji</strong>! Click the button below to confirm your email address and activate your account.
              </p>

              <!-- CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 28px;">
                <tr>
                  <td align="center" style="border-radius: 8px; background-color: #ea580c;">
                    <a href="${safeUrl}" target="_blank" style="display: inline-block; padding: 13px 28px; font-size: 15px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 8px;">
                      Verify Email Address
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Expiration Notice -->
              <p style="margin: 0 0 24px; font-size: 13px; line-height: 1.5; color: #6b7280;">
                This verification link will expire in <strong>1 hour</strong>. If you didn’t create a ChakriKhuji account, you can safely ignore this email.
              </p>
              
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 36px; background-color: #f9fafb; border-top: 1px solid #f3f4f6; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                © ${new Date().getFullYear()} ChakriKhuji. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `Hello ${user.name || "there"},\n\nVerify your ChakriKhuji email address by opening this link:\n\n${url}\n\nThis link expires in 1 hour. If you did not create this account, you can ignore this email.`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [user.email],
      subject: "Verify your ChakriKhuji email address",
      html,
      text,
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    let reason = "Check the Resend dashboard for details.";
    const providerMessage = typeof error?.message === "string" ? error.message : "";
    if (providerMessage.includes("only send testing emails")) {
      reason = "The resend.dev sender can only email your Resend account address. Verify your own domain and update RESEND_FROM_EMAIL to send to other users.";
    } else if (providerMessage.includes("domain") && providerMessage.includes("not verified")) {
      reason = "The sender domain is not verified in Resend. Verify it and update RESEND_FROM_EMAIL.";
    } else if (response.status === 401) {
      reason = "Check RESEND_API_KEY: the key is missing, invalid, or inactive.";
    } else if (response.status === 429) {
      reason = "Resend rate limit or quota reached. Check your Resend usage before retrying.";
    }
    // Report actionable details without exposing recipients, tokens, or credentials.
    throw new Error(`Verification email delivery failed (Resend HTTP ${response.status}). ${reason}`);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}