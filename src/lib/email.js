export async function sendVerificationEmail({ user, url }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    throw new Error("Set RESEND_API_KEY and RESEND_FROM_EMAIL to send verification emails.");
  }

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
      text: `Hello ${user.name || "there"},\n\nVerify your email address by opening this link:\n\n${url}\n\nThis link expires in 1 hour. If you did not create this account, you can ignore this email.`,
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    // Do not log the email body, verification token, or API key.
    throw new Error(`Verification email delivery failed (Resend HTTP ${response.status}).`);
  }
}
