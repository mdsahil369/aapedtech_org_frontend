"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaArrowLeft } from "react-icons/fa";

export default function ForgotPasswordPage() {
  return (
    <div
      className="
        min-h-screen flex items-center justify-center px-4
        bg-background
      "
    >
      <div
        className="
          w-full max-w-6xl
          grid grid-cols-1 md:grid-cols-2
          overflow-hidden rounded-2xl
          bg-background
          border border-foreground/10
          shadow-xl
        "
      >
        {/* ================= LEFT : FORM ================= */}
        <div className="flex flex-col justify-center p-8 md:p-12">
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

          <h1 className="mb-3 text-3xl font-bold text-primary">
            পাসওয়ার্ড ভুলে গেছেন?
          </h1>

          <p className="mb-8 leading-relaxed text-foreground/70">
            আপনার একাউন্টের সাথে যুক্ত মোবাইল নাম্বারটি দিন।  
            আমরা সেখানে একটি যাচাইকরণ কোড (OTP) পাঠাবো।
          </p>

          {/* Mobile Number */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-foreground">
              মোবাইল নাম্বার
            </label>

            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
              <input
                type="tel"
                placeholder="01XXXXXXXXX"
                className="
                  w-full rounded-lg
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
              w-full rounded-lg bg-primary
              py-3 font-semibold text-white
              hover:opacity-90 transition
            "
          >
            OTP পাঠান
          </button>

          {/* Info */}
          <p className="mt-6 text-center text-xs text-foreground/50">
            নিরাপত্তার জন্য OTP শুধুমাত্র নিবন্ধিত মোবাইল নাম্বারে পাঠানো হবে
          </p>
        </div>

        {/* ================= RIGHT : IMAGE ================= */}
        <div className="relative hidden md:block">
          <Image
            src="/assets/Tablet_login-amico.jpg"
            alt="Forgot Password Illustration"
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
