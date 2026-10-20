// Appends a form entry to the team's Google Sheet through the Apps Script
// web app in scripts/forms-sheet.gs. Never throws: the sheet is a record
// kept alongside the email, so a sheet outage shouldn't fail the form.
export type SheetTab = "Waitlist" | "Partners" | "Ambassadors";

export async function appendToSheet(
  tab: SheetTab,
  row: Record<string, string>
): Promise<boolean> {
  const url = process.env.SHEET_WEBHOOK_URL;
  const secret = process.env.SHEET_WEBHOOK_SECRET;
  if (!url || !secret) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      // Apps Script only reads text/plain bodies without a preflight-style fuss.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ secret, sheet: tab, row }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.ok) {
      console.error(`Sheet append to ${tab} failed`, res.status, data);
      return false;
    }
    return true;
  } catch (error) {
    console.error(`Sheet append to ${tab} failed`, error);
    return false;
  }
}
