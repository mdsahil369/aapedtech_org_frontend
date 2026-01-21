"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        px-4 py-10
        bg-background
      "
    >
      <div
        className="
          w-full max-w-5xl
          grid grid-cols-1 md:grid-cols-2
          overflow-hidden rounded-2xl
          bg-background
          border border-foreground/10
          shadow-xl
        "
      >
        {/* ================= LEFT : FORM ================= */}
        <div className="p-8 md:p-10">
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

          <h1 className="mb-6 text-center text-2xl md:text-3xl font-bold text-primary">
            একাউন্ট তৈরি করুন
          </h1>

          <form className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="নাম"
              className="
                w-full border-b
                border-foreground/30
                bg-transparent
                py-2.5
                text-foreground
                placeholder:text-foreground/50
                focus:outline-none
                focus:border-primary
              "
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="মোবাইল নাম্বার"
              defaultValue="01922035654"
              className="
                w-full border-b
                border-foreground/30
                bg-transparent
                py-2.5
                text-foreground
                placeholder:text-foreground/50
                focus:outline-none
                focus:border-primary
              "
            />

            {/* College */}
            <input
              type="text"
              placeholder="আপনার কলেজ"
              className="
                w-full border-b
                border-foreground/30
                bg-transparent
                py-2.5
                text-foreground
                placeholder:text-foreground/50
                focus:outline-none
                focus:border-primary
              "
            />

            {/* Gender */}
            <select
              className="
                w-full border-b
                border-foreground/30
                bg-transparent
                py-2.5
                text-foreground/70
                focus:outline-none
                focus:border-primary
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
                w-full border-b
                border-foreground/30
                bg-transparent
                py-2.5
                text-foreground/70
                focus:outline-none
                focus:border-primary
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
                w-full border-b
                border-foreground/30
                bg-transparent
                py-2.5
                text-foreground
                placeholder:text-foreground/50
                focus:outline-none
                focus:border-primary
              "
            />

            {/* Email */}
            <input
              type="email"
              placeholder="ইমেইল ঠিকানা"
              className="
                w-full border-b
                border-foreground/30
                bg-background
                py-2.5
                text-foreground
                placeholder:text-foreground/50
                focus:outline-none
                focus:border-primary
              "
            />

            {/* Password */}
            <input
              type="password"
              placeholder="পাসওয়ার্ড"
              className="
                w-full border-b
                border-foreground/30
                bg-background
                py-2.5
                text-foreground
                placeholder:text-foreground/50
                focus:outline-none
                focus:border-primary
              "
            />

            {/* Submit */}
            <div className="pt-6 text-center">
              <button
                type="submit"
                className="
                  rounded-full bg-primary
                  px-10 py-3
                  font-medium text-white
                  hover:opacity-90 transition
                "
              >
                একাউন্ট তৈরি করুন
              </button>
            </div>
          </form>
        </div>

        {/* ================= RIGHT : IMAGE ================= */}
        <div className="relative hidden md:block">
          <Image
            src="/assets/Tablet_login-amico.jpg"
            alt="Register Illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/5 dark:bg-black/30" />
        </div>
      </div>
    </div>
  );
}
