"use client";

import Link from "next/link";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";

export default function ForgotPassword() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* ================= AI GLOW BACKGROUND ================= */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          {/* Back */}
          <Link
            href="/login"
            className="
              mb-6 inline-flex items-center gap-2
              text-sm text-foreground/60
              hover:text-primary transition
            "
          >
            <FaArrowLeft />
            লগইনে ফিরে যান
          </Link>

          {/* Card */}
          <div
            className="
              rounded-2xl
              border border-foreground/10
              bg-background/80 backdrop-blur-xl
              shadow-2xl
              p-8 md:p-10
            "
          >
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-semibold tracking-tight text-primary">
                পাসওয়ার্ড ভুলে গেছেন?
              </h1>
              <p className="text-sm leading-relaxed text-foreground/70">
                আপনার একাউন্টের সাথে যুক্ত মোবাইল নাম্বারটি দিন।  
                আমরা সেখানে একটি যাচাইকরণ কোড (OTP) পাঠাবো।
              </p>
            </div>

            {/* ================= FORM ================= */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">
                মোবাইল নাম্বার
              </label>

              <div className="relative">
                <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                <input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="
                    w-full rounded-xl
                    border border-foreground/20
                    bg-background
                    px-10 py-3
                    text-foreground
                    placeholder:text-foreground/40
                    focus:outline-none
                    focus:ring-2 focus:ring-primary
                  "
                />
              </div>
            </div>

            {/* Submit */}
            <button
              className="
                w-full rounded-xl
                bg-primary py-3
                font-semibold text-white
                transition hover:opacity-90
              "
            >
              OTP পাঠান
            </button>

            {/* Info */}
            <p className="mt-6 text-center text-xs text-foreground/40">
              নিরাপত্তার জন্য OTP শুধুমাত্র নিবন্ধিত মোবাইল নাম্বারে পাঠানো হবে
            </p>
          </div>

          {/* Footer hint */}
          <p className="mt-6 text-center text-xs text-foreground/40">
            Powered by ThinkAI
          </p>
        </div>
      </div>
    </div>
  );
}
