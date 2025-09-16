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
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container flex flex-col gap-6 max-w-2xl">
        <h2 id="contact-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Start a Conversation</h2>
        <p className="text-sm md:text-base text-foreground/70">Tell us about your goals and we will propose a pragmatic path to value. Email <a href="mailto:contact@naitrons.example.com" className="underline underline-offset-4">contact@naitrons.example.com</a>.</p>
        <form className="grid gap-4" action={(fd) => startTransition(() => onAction(fd))} suppressHydrationWarning>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="name">Name</label>
            <input id="name" name="name" required disabled={isPending} className="h-11 px-3 rounded-md border border-black/15 dark:border-white/20 bg-background/70 backdrop-blur-sm focus:outline-none focus:ring ring-foreground/30" suppressHydrationWarning />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required disabled={isPending} className="h-11 px-3 rounded-md border border-black/15 dark:border-white/20 bg-background/70 backdrop-blur-sm focus:outline-none focus:ring ring-foreground/30" suppressHydrationWarning />
          </div>
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="message">Project / Message</label>
            <textarea id="message" name="message" rows={5} required disabled={isPending} className="p-3 rounded-md border border-black/15 dark:border-white/20 bg-background/70 backdrop-blur-sm focus:outline-none focus:ring ring-foreground/30 resize-none" suppressHydrationWarning />
          </div>
          <button type="submit" disabled={isPending || status === "success"} className="inline-flex items-center justify-center rounded-md bg-foreground text-background h-11 px-6 text-sm font-medium hover:opacity-90 focus:outline-none focus:ring ring-offset-2 ring-offset-background ring-foreground/40 disabled:opacity-60" suppressHydrationWarning>
            {status === "success" ? "Sent ✔" : isPending ? "Sending..." : "Send inquiry"}
          </button>
          {status === "error" && <p className="text-sm text-red-600">{error}</p>}
          {status === "success" && <p className="text-sm text-green-600">Thanks—your message has been received.</p>}
        </form>
      </div>
    </section>
  );
}
