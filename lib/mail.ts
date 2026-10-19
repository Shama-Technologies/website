// Server-only mail settings for the Gmail account the site sends from.
// The old NEXT_PUBLIC_* names are still read so existing deployments keep
// working until they're renamed; the NEXT_PUBLIC_ prefix tells Next.js the
// value is safe for the browser, which a password never is.
export function mailConfig() {
  const env = process.env;
  const user = env.EMAIL_USER || env.NEXT_PUBLIC_EMAIL_USER;
  const pass = env.EMAIL_APP_PASSWORD || env.NEXT_PUBLIC_EMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  return {
    user,
    pass,
    from: env.EMAIL_FROM || env.NEXT_PUBLIC_EMAIL_FROM || user,
    to: env.EMAIL_TO || env.NEXT_PUBLIC_EMAIL_TO || user,
  };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
