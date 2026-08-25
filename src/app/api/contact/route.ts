import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting store (sliding window per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Email regex standard RFC 5322 simplified
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "127.0.0.1";
    const now = Date.now();
    const clientRate = rateLimitMap.get(ip);

    if (clientRate && now < clientRate.resetTime) {
      if (clientRate.count >= MAX_REQUESTS_PER_WINDOW) {
        const retryAfterSec = Math.ceil((clientRate.resetTime - now) / 1000);
        return NextResponse.json(
          {
            error: "Too many contact requests from this address. Please try again later.",
            retryAfter: retryAfterSec,
          },
          {
            status: 429,
            headers: { "Retry-After": String(retryAfterSec) },
          }
        );
      }
      clientRate.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    // 2. Parse Payload
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const { name, email, subject, message, turnstileToken } = body;

    // 3. Server-Side Validation & Input Length Limits
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name exceeds the maximum length of 100 characters." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }
    if (email.length > 120) {
      return NextResponse.json(
        { error: "Email address exceeds the maximum length of 120 characters." },
        { status: 400 }
      );
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid, well-formed email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      return NextResponse.json({ error: "Subject is required." }, { status: 400 });
    }
    if (subject.length > 150) {
      return NextResponse.json(
        { error: "Subject exceeds the maximum length of 150 characters." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message content is required." }, { status: 400 });
    }
    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Message exceeds the maximum length of 2000 characters." },
        { status: 400 }
      );
    }

    // 4. Cloudflare Turnstile Verification Architecture
    // When CF_TURNSTILE_SECRET_KEY is configured in production environment:
    const turnstileSecret = process.env.CF_TURNSTILE_SECRET_KEY;
    if (turnstileSecret && turnstileToken) {
      const turnstileRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: turnstileToken,
            remoteip: ip,
          }),
        }
      );
      const turnstileOutcome = await turnstileRes.json();
      if (!turnstileOutcome.success) {
        return NextResponse.json(
          { error: "Cloudflare Turnstile spam challenge failed. Please refresh and try again." },
          { status: 403 }
        );
      }
    }

    // 5. Successful Processing (No Database storage in this stage)
    // Log structured message event for development
    console.log("[CONTACT_INQUIRY_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      messageLength: message.length,
      ip,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received successfully. Thank you for reaching out.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[CONTACT_API_ERROR]", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred while processing your request." },
      { status: 500 }
    );
  }
}
