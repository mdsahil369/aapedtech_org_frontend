"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaLock } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div
      className="
        min-h-screen flex items-center justify-center px-4
        bg-[color:var(--background)]
      "
    >
      <div
        className="
          w-full max-w-6xl overflow-hidden rounded-2xl
          bg-background
          border border-foreground/10
          shadow-xl
          grid grid-cols-1 md:grid-cols-2
        "
      >
        {/* ================= LEFT : LOGIN FORM ================= */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Welcome back!
          </h1>

          <p className="mb-8 leading-relaxed text-foreground/70">
            নতুন একাউন্ট খুলতে অথবা পুরাতন একাউন্টে প্রবেশ করতে  
            মোবাইল নাম্বার ও পাসওয়ার্ড দিয়ে লগইন করুন
          </p>

          {/* Mobile Number */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-foreground">
              মোবাইল নাম্বার
            </label>

            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
              <input
                type="tel"
                placeholder="01XXXXXXXXX"
                className="
                  w-full rounded-lg border
                  border-foreground/20
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
            <label className="block text-sm font-medium mb-2 text-foreground">
              পাসওয়ার্ড
            </label>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
              <input
                type="password"
                placeholder="********"
                className="
                  w-full rounded-lg border
                  border-foreground/20
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

          {/* Forgot Password */}
          <div className="flex justify-end mb-6">
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
              w-full rounded-lg bg-primary
              py-3 font-semibold text-white
              hover:opacity-90 transition
            "
          >
            লগইন করুন
          </button>

          {/* Register */}
          <p className="mt-6 text-sm text-center text-foreground/70">
            একাউন্ট নেই?
            <Link
              href="/register"
              className="ml-1 text-primary hover:underline"
            >
              নতুন একাউন্ট খুলুন
            </Link>
          </p>
        </div>

        {/* ================= RIGHT : IMAGE ================= */}
        <div className="relative hidden md:block">
          <Image
            src="/assets/Tablet_login-amico.jpg"
            alt="Login Illustration"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay for dark mode readability */}
          <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
        </div>
      </div>
    </div>
  );
}
