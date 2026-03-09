"use client";

import {useMemo, useRef, useState} from "react";
import type {NextPage} from "next/types";
import {useForm} from "react-hook-form";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/outline";
import {countryCodes} from "@/constants/countryCodes";

type RegisterFormValues = {
  username: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

const RegisterPage: NextPage = () => {
  const [countryCode, setCountryCode] = useState<string>("+44");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedCountry = countryCodes.find((c) => c.code === countryCode) ?? countryCodes[0];

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<RegisterFormValues>({mode: "onSubmit"});

  const usernameValue = watch("username", "");
  const headingUsername = useMemo(() => usernameValue.trim() || "Username", [usernameValue]);

  const onSubmit = (data: RegisterFormValues) => {
    console.log({...data, countryCode});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <main className="mx-auto flex w-full max-w-2xl flex-col px-6 py-20 lg:px-8">
        <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Hey @{headingUsername} 👋<br />Let&apos;s monetise your following!
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-purple-100">Username</label>
            <div className={`flex items-center rounded-lg border bg-slate-900/60 px-3 py-2 ${errors.username ? "border-red-400" : "border-white/20"}`}>
              <span className="text-sm text-purple-200">@pagely/</span>
              <input
                id="username"
                type="text"
                placeholder="username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {value: 3, message: "Username must be at least 3 characters"},
                  maxLength: {value: 30, message: "Username must be at most 30 characters"},
                  pattern: {value: /^[a-z0-9_-]+$/, message: "Only lowercase letters, numbers, - and _ allowed"},
                })}
                className="ml-1 w-full bg-transparent text-sm text-white placeholder:text-purple-300/70 focus:outline-none"
              />
            </div>
            {errors.username && <p className="mt-1 text-xs text-red-400">{errors.username.message}</p>}
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-purple-100">Full Name</label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="Full Name"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {value: 2, message: "Name must be at least 2 characters"},
              })}
              className={`w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-purple-300/70 focus:outline-none ${errors.fullName ? "border-red-400" : "border-white/20 focus:border-purple-400"}`}
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-purple-100">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address"},
              })}
              className={`w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-purple-300/70 focus:outline-none ${errors.email ? "border-red-400" : "border-white/20 focus:border-purple-400"}`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-purple-100">Phone Number</label>
            <div className="flex gap-3">
              {/* Custom country code dropdown */}
              <div className="relative w-36" ref={dropdownRef}>
                <input type="hidden" name="countryCode" value={countryCode} />
                <button
                  type="button"
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="flex h-10 w-full items-center justify-between rounded-lg border border-white/20 bg-slate-900/60 px-3 text-sm text-white focus:border-purple-400 focus:outline-none"
                >
                  <span className="text-base leading-none">{selectedCountry.flag}</span>
                  <span className="ml-2 text-sm text-white">{selectedCountry.code}</span>
                  <svg className="ml-auto h-4 w-4 text-purple-200" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <ul className="absolute z-50 mt-1 max-h-56 w-44 overflow-auto rounded-lg border border-white/20 bg-slate-900 py-1 shadow-xl">
                    {countryCodes.map((item) => (
                      <li key={`${item.flag}-${item.code}`}>
                        <button
                          type="button"
                          onClick={() => {setCountryCode(item.code); setDropdownOpen(false);}}
                          className="flex w-full items-center gap-3 px-3 py-2 text-sm text-white hover:bg-white/10"
                        >
                          <span className="text-base leading-none">{item.flag}</span>
                          <span className="text-sm">{item.code}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex w-full flex-col">
                <input
                  id="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone Number"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {value: /^[0-9\s\-()]+$/, message: "Enter a valid phone number"},
                    minLength: {value: 7, message: "Phone number is too short"},
                  })}
                  className={`h-10 w-full rounded-lg border bg-slate-900/60 px-3 text-sm text-white placeholder:text-purple-300/70 focus:outline-none ${errors.phoneNumber ? "border-red-400" : "border-white/20 focus:border-purple-400"}`}
                />
                {errors.phoneNumber && <p className="mt-1 text-xs text-red-400">{errors.phoneNumber.message}</p>}
              </div>
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-purple-100">Password</label>
            <div className={`flex items-center rounded-lg border bg-slate-900/60 px-3 ${errors.password ? "border-red-400" : "border-white/20 focus-within:border-purple-400"}`}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {value: 8, message: "Password must be at least 8 characters"},
                  pattern: {value: /^(?=.*[A-Z])(?=.*[0-9])/, message: "Must contain at least one uppercase letter and one number"},
                })}
                className="h-10 w-full bg-transparent text-sm text-white placeholder:text-purple-300/70 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="ml-2 text-purple-300 hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword
                  ? <EyeSlashIcon className="h-4 w-4" />
                  : <EyeIcon className="h-4 w-4" />
                }
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-blue-400 hover:to-purple-500"
          >
            Next
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-purple-200">
          By continuing, you agree to our Terms of Service and Privacy Policy. Your data is protected under GDPR.
        </p>
        <p className="mt-2 text-center text-base font-semibold text-white">
          Have an account? Login
        </p>
      </main>
    </div>
  );
};

export default RegisterPage;



