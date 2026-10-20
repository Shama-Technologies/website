export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "../../../lib/sheet";

// Field name in the form -> column heading in the "Ambassadors" tab.
const COLUMNS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  address: "Address",
  institution: "Institution",
  fellowship: "Fellowship / church",
  contribution: "Contribution",
  skill: "Digital skill",
};

// Records an ambassador application in the team sheet. The email copy is
// sent from the browser through EmailJS.
export async function POST(req: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    // Fall through to validation.
  }

  const row: Record<string, string> = {};
  for (const [field, heading] of Object.entries(COLUMNS)) {
    const value = String(body[field] ?? "").trim().slice(0, 2000);
    if (!value) {
      return NextResponse.json({ success: false, message: `Missing ${field}` }, { status: 400 });
    }
    row[heading] = value;
  }

  const saved = await appendToSheet("Ambassadors", row);
  return saved
    ? NextResponse.json({ success: true })
    : NextResponse.json({ success: false }, { status: 500 });
}
