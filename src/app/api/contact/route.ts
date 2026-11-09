import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  division?: string;
  service?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const division = String(body.division ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const companyName = String(body.companyName ?? "").trim();
  const service = String(body.service ?? "").trim();

  if (!fullName || !email || !phone || !division || !subject || !message) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please enter a valid business email address." },
      { status: 400 },
    );
  }

  const payload = {
    fullName,
    companyName,
    email,
    phone,
    division,
    service,
    subject,
    message,
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        return NextResponse.json(
          { message: "Unable to deliver your enquiry. Please try again later." },
          { status: 502 },
        );
      }

      return NextResponse.json({
        message: "Thank you. Your enquiry has been sent successfully.",
      });
    } catch {
      return NextResponse.json(
        { message: "Unable to deliver your enquiry. Please try again later." },
        { status: 502 },
      );
    }
  }

  // Integration point: set CONTACT_WEBHOOK_URL (Formspree, Make, Zapier, etc.)
  // or extend this route with an email provider such as Resend.
  console.info("[contact-enquiry]", payload);

  return NextResponse.json({
    message:
      "Your enquiry was validated and logged. Configure CONTACT_WEBHOOK_URL to enable production delivery.",
  });
}
