"use client";
import { useState, useTransition } from "react";
import { submitContact } from "@/app/actions/contact";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  async function onAction(formData: FormData) {
    setStatus("submitting");
    setError(undefined);
    const res = await submitContact(formData);
    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setError(res.error || "Submission failed");
    }
  }

  return (
    <section id="contact" className="section bg-[#2B1A16]" aria-labelledby="contact-heading">
      <div className="container flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-2xl px-4 sm:px-6">
  <h2 id="contact-heading" className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#F5E1C8]">Get in touch</h2>
  <p className="text-sm sm:text-base text-[#F5E1C8]/80">Share your goals. We&apos;ll propose a clear, pragmatic path. Email <a href="mailto:naitronsolutions@gmail.com" className="underline underline-offset-4 text-[#C06C43] hover:text-[#D7BFA4]">naitronsolutions@gmail.com</a>.</p>
        <form className="grid gap-4" action={(fd) => startTransition(() => onAction(fd))} suppressHydrationWarning>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#F5E1C8]" htmlFor="name">Name</label>
            <input id="name" name="name" required disabled={isPending} className="h-11 px-3 rounded-md border border-[#C06C43]/30 bg-[#2B1A16]/50 backdrop-blur-sm text-[#F5E1C8] placeholder:text-[#F5E1C8]/40 focus:outline-none focus:ring-2 ring-[#C06C43]/50" suppressHydrationWarning />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#F5E1C8]" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required disabled={isPending} className="h-11 px-3 rounded-md border border-[#C06C43]/30 bg-[#2B1A16]/50 backdrop-blur-sm text-[#F5E1C8] placeholder:text-[#F5E1C8]/40 focus:outline-none focus:ring-2 ring-[#C06C43]/50" suppressHydrationWarning />
          </div>
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#F5E1C8]" htmlFor="message">Project / Message</label>
            <textarea id="message" name="message" rows={5} required disabled={isPending} className="p-3 rounded-md border border-[#C06C43]/30 bg-[#2B1A16]/50 backdrop-blur-sm text-[#F5E1C8] placeholder:text-[#F5E1C8]/40 focus:outline-none focus:ring-2 ring-[#C06C43]/50 resize-none" suppressHydrationWarning />
          </div>
          <button type="submit" disabled={isPending || status === "success"} className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C06C43] text-[#FAF4EE] h-11 px-6 text-sm font-medium hover:bg-[#D7BFA4] hover:text-[#2B1A16] hover:shadow-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-[#2B1A16] ring-[#C06C43]/40 disabled:opacity-60 transition-all duration-300 hover:scale-105 active:scale-95" suppressHydrationWarning>
            {isPending && (
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {status === "success" ? "Sent ✔" : isPending ? "Sending..." : "Send inquiry"}
          </button>
          {status === "error" && <p className="text-sm text-red-600">{error}</p>}
          {status === "success" && <p className="text-sm text-green-600">Thanks—your message has been received.</p>}
        </form>
      </div>
    </section>
  );
}
