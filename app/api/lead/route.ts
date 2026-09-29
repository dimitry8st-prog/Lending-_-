import { NextResponse } from "next/server";

const required = ["athleteName", "athleteAge", "parentName", "phone", "branch", "sport", "consent"] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  for (const key of required) {
    if (!body[key] || String(body[key]).trim().length === 0) {
      return NextResponse.json({ ok: false, error: `missing_${key}` }, { status: 400 });
    }
  }

  const phone = String(body.phone);
  if (!/^[+0-9 ()-]{10,20}$/.test(phone)) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: "lead_webhook_not_configured" }, { status: 503 });
  }

  const payload = {
    source: "force-team-landing",
    submittedAt: new Date().toISOString(),
    athleteName: String(body.athleteName).slice(0, 120),
    athleteAge: String(body.athleteAge).slice(0, 3),
    parentName: String(body.parentName).slice(0, 120),
    phone: phone.slice(0, 32),
    branch: String(body.branch).slice(0, 120),
    sport: String(body.sport).slice(0, 120),
    consent: body.consent === "yes",
  };

  try {
    const result = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!result.ok) throw new Error(`webhook_${result.status}`);
  } catch {
    return NextResponse.json({ ok: false, error: "upstream_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
