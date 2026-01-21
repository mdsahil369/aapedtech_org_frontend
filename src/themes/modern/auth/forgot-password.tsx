"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen w-full bg-background grid grid-cols-1 lg:grid-cols-2">
      
      {/* ================= LEFT : IMAGE / INFO ================= */}
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/Tablet_login-amico.jpg"
          alt="Forgot password illustration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 dark:from-black/40 dark:to-black/70" />

        <div className="relative z-10 max-w-md px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            পাসওয়ার্ড ভুলে গেছেন?
          </h2>
          <p className="text-sm leading-relaxed opacity-90">
            আপনার একাউন্টের সাথে যুক্ত মোবাইল নাম্বার দিন।  
            আমরা সেখানে একটি যাচাইকরণ কোড (OTP) পাঠাবো।
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
            <h1 className="mb-3 text-2xl font-semibold text-primary">
              পাসওয়ার্ড পুনরুদ্ধার
            </h1>

            <p className="mb-6 text-sm leading-relaxed text-foreground/70">
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
        </div>
      </div>
    </div>
  );
}
