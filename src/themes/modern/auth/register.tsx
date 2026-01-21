"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full bg-background grid grid-cols-1 lg:grid-cols-2">
      
      {/* ================= LEFT : IMAGE / INFO ================= */}
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/Tablet_login-amico.jpg"
          alt="Register Illustration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 dark:from-black/40 dark:to-black/70" />

        <div className="relative z-10 max-w-md px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            একাউন্ট তৈরি করুন
          </h2>
          <p className="text-sm leading-relaxed opacity-90">
            নতুন একাউন্ট খুলতে আপনার প্রয়োজনীয় তথ্যগুলো দিন  
            এবং সহজেই শেখার যাত্রা শুরু করুন
          </p>
        </div>
      </div>

      {/* ================= RIGHT : FORM ================= */}
      <div className="flex items-center justify-center px-4 py-10">
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

          <div
            className="
              rounded-2xl
              bg-background
              border border-foreground/10
              shadow-xl
              p-8 md:p-10
            "
          >
            <form className="space-y-5">
              {/* Name */}
              <input
                type="text"
                placeholder="নাম"
                className="
                  w-full rounded-lg border
                  border-foreground/20
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
                  w-full rounded-lg border
                  border-foreground/20
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
                  w-full rounded-lg border
                  border-foreground/20
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
                  w-full rounded-lg border
                  border-foreground/20
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
                  w-full rounded-lg border
                  border-foreground/20
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
                  w-full rounded-lg border
                  border-foreground/20
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
                  w-full rounded-lg border
                  border-foreground/20
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
                  w-full rounded-lg border
                  border-foreground/20
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
                  mt-2 w-full rounded-lg bg-primary
                  py-3 font-semibold text-white
                  hover:opacity-90 transition
                "
              >
                একাউন্ট তৈরি করুন
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
