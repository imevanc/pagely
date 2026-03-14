"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next/types";
import { useForm } from "react-hook-form";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { PagelyLogo } from "@/components/PagelyLogo";

type LoginFormValues = {
  username: string;
  password: string;
};

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: "onSubmit" });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login submitted", data);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Logo */}
      <a href="/" aria-label="Pagely home" className="mb-8">
        <PagelyLogo />
      </a>

      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Get your bag 💰🤑
        </h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          {/* Username */}
          <div>
            <div
              className={`flex h-12 overflow-hidden rounded-xl border bg-slate-900/60 transition focus-within:border-purple-400 ${
                errors.username ? "border-red-500" : "border-white/20"
              }`}
            >
              {/* Icon slab — 1/6 width */}
              <div className="flex w-1/6 shrink-0 items-center justify-center border-r border-white/10">
                <UserIcon className="h-5 w-5 text-purple-300" />
              </div>
              <input
                type="text"
                placeholder="Username"
                autoComplete="username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 2,
                    message: "Username must be at least 2 characters",
                  },
                })}
                className="h-full flex-1 bg-transparent px-4 text-sm text-white placeholder:text-purple-300/60 focus:outline-none"
              />
            </div>
            {errors.username && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div
              className={`flex h-12 overflow-hidden rounded-xl border bg-slate-900/60 transition focus-within:border-purple-400 ${
                errors.password ? "border-red-500" : "border-white/20"
              }`}
            >
              {/* Icon slab — 1/6 width */}
              <div className="flex w-1/6 shrink-0 items-center justify-center border-r border-white/10">
                <LockClosedIcon className="h-5 w-5 text-purple-300" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                autoComplete="current-password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="h-full flex-1 bg-transparent px-4 text-sm text-white placeholder:text-purple-300/60 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="flex shrink-0 items-center justify-center px-4 text-purple-300 transition hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-purple-300 transition hover:text-white"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-blue-400 hover:to-purple-500"
          >
            Log In
          </button>
        </form>

        {/* Sign up */}
        <p className="mt-6 text-center text-sm text-purple-200">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="text-base font-semibold text-white underline underline-offset-2 transition hover:text-purple-200"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
