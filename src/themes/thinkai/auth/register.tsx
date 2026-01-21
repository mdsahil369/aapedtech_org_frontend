"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* ================= AI GLOW BACKGROUND ================= */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-lg">
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
                একাউন্ট তৈরি করুন
              </h1>
              <p className="text-sm leading-relaxed text-foreground/70">
                নতুন একাউন্ট খুলতে আপনার প্রয়োজনীয় তথ্যগুলো দিন  
                এবং সহজেই শেখার যাত্রা শুরু করুন
              </p>
            </div>

            {/* ================= FORM ================= */}
            <form className="space-y-5">
              {/* Name */}
              <input
                type="text"
                placeholder="নাম"
                className="
                  w-full rounded-xl
                  border border-foreground/20
                  bg-background
                  px-4 py-3
                  text-foreground
                  placeholder:text-foreground/40
                  focus:outline-none
                  focus:ring-2 focus:ring-primary
                "
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="মোবাইল নাম্বার"
                defaultValue="01922035654"
                className="
                  w-full rounded-xl
                  border border-foreground/20
                  bg-background
                  px-4 py-3
                  text-foreground
                  placeholder:text-foreground/40
                  focus:outline-none
                  focus:ring-2 focus:ring-primary
                "
              />

              {/* College */}
              <input
                type="text"
                placeholder="আপনার কলেজ"
                className="
                  w-full rounded-xl
                  border border-foreground/20
                  bg-background
                  px-4 py-3
                  text-foreground
                  placeholder:text-foreground/40
                  focus:outline-none
                  focus:ring-2 focus:ring-primary
                "
              />

              {/* Gender */}
              <select
                className="
                  w-full rounded-xl
                  border border-foreground/20
                  bg-background
                  px-4 py-3
                  text-foreground/70
                  focus:outline-none
                  focus:ring-2 focus:ring-primary
                "
              >
                <option value="">লিঙ্গ নির্বাচন করুন</option>
                <option value="male">পুরুষ</option>
                <option value="female">নারী</option>
                <option value="other">অন্যান্য</option>
              </select>

              {/* HSC Year */}
              <select
                className="
                  w-full rounded-xl
                  border border-foreground/20
                  bg-background
                  px-4 py-3
                  text-foreground/70
                  focus:outline-none
                  focus:ring-2 focus:ring-primary
                "
              >
                <option value="">HSC সাল নির্বাচন করুন</option>
                {Array.from({ length: 10 }).map((_, i) => {
                  const year = 2025 - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>

              {/* Guardian Phone */}
              <input
                type="tel"
                placeholder="অভিভাবকের মোবাইল নাম্বার"
                className="
                  w-full rounded-xl
                  border border-foreground/20
                  bg-background
                  px-4 py-3
                  text-foreground
                  placeholder:text-foreground/40
                  focus:outline-none
                  focus:ring-2 focus:ring-primary
                "
              />

              {/* Email */}
              <input
                type="email"
                placeholder="ইমেইল ঠিকানা"
                className="
                  w-full rounded-xl
                  border border-foreground/20
                  bg-background
                  px-4 py-3
                  text-foreground
                  placeholder:text-foreground/40
                  focus:outline-none
                  focus:ring-2 focus:ring-primary
                "
              />

              {/* Password */}
              <input
                type="password"
                placeholder="পাসওয়ার্ড"
                className="
                  w-full rounded-xl
                  border border-foreground/20
                  bg-background
                  px-4 py-3
                  text-foreground
                  placeholder:text-foreground/40
                  focus:outline-none
                  focus:ring-2 focus:ring-primary
                "
              />

              {/* Submit */}
              <button
                type="submit"
                className="
                  mt-4 w-full rounded-xl
                  bg-primary py-3
                  font-semibold text-white
                  transition hover:opacity-90
                "
              >
                একাউন্ট তৈরি করুন
              </button>
            </form>
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
