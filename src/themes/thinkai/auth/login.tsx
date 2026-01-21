"use client";

import Link from "next/link";
import { FaPhoneAlt, FaLock } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div
            className="
              rounded-2xl
              border border-foreground/10
              bg-background/80 backdrop-blur-xl
              shadow-2xl
              p-8
            "
          >
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">
                Welcome back
              </h1>
              <p className="text-sm text-foreground/70 leading-relaxed">
                নতুন একাউন্ট খুলতে অথবা পুরাতন একাউন্টে প্রবেশ করতে  
                মোবাইল নাম্বার ও পাসওয়ার্ড দিয়ে লগইন করুন
              </p>
            </div>

            {/* ================= FORM ================= */}
            {/* Mobile Number */}
            <div className="mb-5">
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

            {/* Password */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">
                পাসওয়ার্ড
              </label>

              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                <input
                  type="password"
                  placeholder="********"
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

            {/* Forgot */}
            <div className="mb-6 flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            {/* Login Button */}
            <button
              className="
                relative w-full overflow-hidden rounded-xl
                bg-primary py-3 font-semibold text-white
                transition hover:opacity-90
              "
            >
              লগইন করুন
            </button>

            {/* Register */}
            <p className="mt-6 text-center text-sm text-foreground/70">
              একাউন্ট নেই?
              <Link
                href="/register"
                className="ml-1 text-primary hover:underline"
              >
                নতুন একাউন্ট খুলুন
              </Link>
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
