"use client";

import { useRouter } from "next/navigation";
import type { NextPage } from "next/types";
import { useForm } from "react-hook-form";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type SubscribeFormValues = {
  plan: "monthly" | "yearly";
};

const SubscribePage: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SubscribeFormValues>({ mode: "onSubmit" });

  const selectedPlan = watch("plan");

  const onSubmit = (_data: SubscribeFormValues) => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <main className="mx-auto flex w-full max-w-2xl flex-col px-6 py-20 lg:px-8">
        {/* Stepper */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-400/40 text-xs font-bold text-purple-200">
              1
            </div>
            <span className="text-sm text-purple-300">Account</span>
          </div>
          <div className="h-px w-10 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-400/40 text-xs font-bold text-purple-200">
              2
            </div>
            <span className="text-sm text-purple-300">Socials</span>
          </div>
          <div className="h-px w-10 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xs font-bold text-white">
              3
            </div>
            <span className="text-sm font-semibold text-white">Plan</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Pick your plan, start earning today 💸
        </h1>
        <p className="mt-3 text-center text-purple-200">
          Save $100s by choosing Pagely! <br />
          All-In-One store, easy to set up.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-4">
          {/* Plan cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Monthly */}
            <label
              htmlFor="monthly"
              className={`group relative flex cursor-pointer flex-col rounded-2xl border p-6 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/50 ${
                selectedPlan === "monthly"
                  ? "border-purple-400 bg-white/10"
                  : "border-white/20 bg-white/5 hover:border-purple-400/60 hover:bg-white/8"
              }`}
            >
              <input
                id="monthly"
                type="radio"
                value="monthly"
                {...register("plan", {
                  required: "Please select a plan to continue",
                })}
                className="absolute right-4 top-4 h-4 w-4 accent-purple-500"
              />
              <p className="text-lg font-bold text-white">Monthly</p>
              <p className="mt-2 text-3xl font-extrabold text-white">£0</p>
              <p className="mt-1 text-sm text-purple-200">today for 14 days</p>
              <p className="mt-3 text-sm text-purple-100">
                then{" "}
                <span className="font-semibold text-white">£25 / month</span>
              </p>
            </label>

            {/* Yearly */}
            <label
              htmlFor="yearly"
              className={`group relative flex cursor-pointer flex-col rounded-2xl border p-6 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/50 ${
                selectedPlan === "yearly"
                  ? "border-purple-400 bg-white/10"
                  : "border-white/20 bg-white/5 hover:border-purple-400/60 hover:bg-white/8"
              }`}
            >
              <div className="absolute -top-3 left-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-0.5 text-xs font-semibold text-white">
                Best value
              </div>
              <input
                id="yearly"
                type="radio"
                value="yearly"
                {...register("plan", {
                  required: "Please select a plan to continue",
                })}
                className="absolute right-4 top-4 h-4 w-4 accent-purple-500"
              />
              <p className="text-lg font-bold text-white">Yearly</p>
              <p className="mt-2 text-3xl font-extrabold text-white">£0</p>
              <p className="mt-1 text-sm text-purple-200">today for 14 days</p>
              <p className="mt-3 text-sm text-purple-100">
                then <span className="font-semibold text-white">£260</span>{" "}
                <span className="text-purple-300 line-through">£300</span>{" "}
                <span className="text-xs text-purple-300">/ year</span>
              </p>
            </label>
          </div>

          {errors.plan && (
            <p className="text-center text-xs text-red-400">
              {errors.plan.message}
            </p>
          )}

          {/* Due today */}
          <div className="px-1 py-2 text-center">
            <p className="text-sm text-purple-200">Due today</p>
            <p className="mt-1 text-2xl font-bold text-white">£0</p>
          </div>

          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-blue-400 hover:to-purple-500"
          >
            Next
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>
      </main>
    </div>
  );
};

export default SubscribePage;
