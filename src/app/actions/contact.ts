"use server";

import { z } from "zod";

// Basic in-memory rate limiter (per process). For production, replace with Redis/Upstash.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
type Bucket = { count: number; reset: number };
const buckets = new Map<string, Bucket>();

function rateLimit(key: string) {
  const now = Date.now();
  const existing = buckets.get(key);
  if (!existing || existing.reset < now) {
    buckets.set(key, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (existing.count >= RATE_LIMIT_MAX) return false;
  existing.count += 1;
  return true;
}

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  message: z.string().min(10).max(5000),
  // simple honeypot
  company: z.string().optional().refine((v: string | undefined) => !v, { message: "Invalid" })
});

export interface ContactActionResult {
  ok: boolean;
  error?: string;
}

export async function submitContact(formData: FormData): Promise<ContactActionResult> {
  try {
    const raw = Object.fromEntries(formData.entries());
    const parsed = ContactSchema.safeParse(raw);
    if (!parsed.success) {
      return { ok: false, error: parsed.error.issues[0].message };
    }

    // Rate limit keyed by email (fallback) – ideally use IP from request headers in route handler
    const rateKey = (parsed.success && parsed.data.email) || 'anon';
    if (!rateLimit(rateKey)) {
      return { ok: false, error: 'Too many submissions. Please wait a minute.' };
    }

    // Simulate network latency
    await new Promise(r => setTimeout(r, 200));

    // Optional: send via Resend API if configured (no SDK import required)
    if (process.env.RESEND_API_KEY) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Website <noreply@naitrons.tech>',
            to: ['naitronsolutions@gmail.com'],
            subject: 'New Website Inquiry',
            text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\nMessage:\n${parsed.data.message}`,
          }),
        });
        if (!res.ok) {
          console.warn('Resend email failed', await res.text());
        }
      } catch (e) {
        console.warn('Resend email error', e);
      }
    }

    console.log("CONTACT_INQUIRY", parsed.data);

    return { ok: true };
  } catch (err) {
    // Log internally (will appear in server logs) without exposing details to client
    console.error('submitContact failed', err);
    return { ok: false, error: "Unexpected error" };
  }
}
