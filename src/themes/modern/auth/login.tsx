"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaLock } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div
      className="
        min-h-screen w-full
        grid grid-cols-1 lg:grid-cols-2
        bg-background
      "
    >
      {/* ================= LEFT : IMAGE / BRAND ================= */}
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/Tablet_login-amico.jpg"
          alt="Login Illustration"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 dark:from-black/40 dark:to-black/70" />

        {/* Brand text */}
        <div className="relative z-10 max-w-md text-center text-white px-6">
          <h2 className="text-3xl font-bold mb-4">
            Welcome back!
          </h2>
          <p className="text-sm opacity-90 leading-relaxed">
            নতুন একাউন্ট খুলতে অথবা পুরাতন একাউন্টে প্রবেশ করতে  
            মোবাইল নাম্বার ও পাসওয়ার্ড দিয়ে লগইন করুন
          </p>
        </div>
      </div>

      {/* ================= RIGHT : LOGIN FORM ================= */}
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div
            className="
              rounded-2xl
              bg-background
              border border-foreground/10
              shadow-xl
              p-8 md:p-10
            "
          >
            {/* Mobile heading */}
            <div className="mb-8 lg:hidden">
              <h1 className="text-3xl font-bold text-primary mb-2">
                Welcome back!
              </h1>
              <p className="text-foreground/70 text-sm leading-relaxed">
                নতুন একাউন্ট খুলতে অথবা পুরাতন একাউন্টে প্রবেশ করতে  
                মোবাইল নাম্বার ও পাসওয়ার্ড দিয়ে লগইন করুন
              </p>
            </div>

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
        </div>
      </div>
    </div>
  );
}
