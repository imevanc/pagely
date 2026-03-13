"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { NextPage } from "next/types";
import { useForm } from "react-hook-form";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaGooglePay,
  FaRegCreditCard,
} from "react-icons/fa6";
import { ArrowRightIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

type PaymentFormValues = {
  paymentMethod: "google_pay" | "pay_with_link" | "card";
  cardNumber: string;
  expiryDate: string;
  securityCode: string;
  agreeTerms: boolean;
};

// Calculate trial end date (today + 14 days)
function getTrialEndDate() {
  const date = new Date();
  date.setDate(date.getDate() + 14);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatCardNumber(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

const CVVIcon = () => (
  <svg
    viewBox="0 0 40 28"
    width="36"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-70"
  >
    {/* Card body */}
    <rect x="0.5" y="0.5" width="39" height="27" rx="3.5" fill="#334155" stroke="#64748b" />
    {/* Magnetic stripe */}
    <rect x="0" y="5" width="40" height="6" fill="#1e293b" />
    {/* Signature strip */}
    <rect x="4" y="16" width="24" height="6" rx="1" fill="#e2e8f0" />
    {/* CVV box highlight */}
    <rect x="24" y="16" width="12" height="6" rx="1" fill="#fde68a" opacity="0.9" />
    {/* CVV dots */}
    <circle cx="27" cy="19" r="1" fill="#1e293b" />
    <circle cx="30" cy="19" r="1" fill="#1e293b" />
    <circle cx="33" cy="19" r="1" fill="#1e293b" />
  </svg>
);

const PaymentContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  void searchParams; // available for future use (e.g. passing plan)
  const trialEndDate = getTrialEndDate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PaymentFormValues>({
    mode: "onSubmit",
    defaultValues: {
      paymentMethod: undefined,
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
      agreeTerms: false,
    },
  });

  const selectedMethod = watch("paymentMethod");
  const [cardNumberDisplay, setCardNumberDisplay] = useState("");
  const [expiryDisplay, setExpiryDisplay] = useState("");

  const onSubmit = (data: PaymentFormValues) => {
    console.log("Payment submitted", data);
    // Navigate to success or dashboard
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <main className="mx-auto flex w-full max-w-2xl flex-col px-6 py-16 lg:px-8">
        {/* Stepper */}
        <div className="mb-10 flex items-center justify-center gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-400/40 text-xs font-bold text-purple-200">
              1
            </div>
            <span className="text-sm text-purple-300">Account</span>
          </div>
          <div className="h-px w-8 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-400/40 text-xs font-bold text-purple-200">
              2
            </div>
            <span className="text-sm text-purple-300">Socials</span>
          </div>
          <div className="h-px w-8 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-400/40 text-xs font-bold text-purple-200">
              3
            </div>
            <span className="text-sm text-purple-300">Plan</span>
          </div>
          <div className="h-px w-8 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xs font-bold text-white">
              4
            </div>
            <span className="text-sm font-semibold text-white">Payment</span>
          </div>
        </div>

        {/* Trial banner */}
        <div className="mb-8 rounded-2xl border border-purple-400/30 bg-white/5 px-6 py-4 text-center">
          <p className="text-base font-semibold text-white">
            Your store runs free till{" "}
            <span className="text-purple-300">{trialEndDate}</span>
          </p>
          <p className="mt-1 text-sm text-purple-200">
            Cancel anytime 💝
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Payment Method
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-4"
        >
          {/* Google Pay */}
          <label
            htmlFor="google_pay"
            className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition-all duration-200 ${
              selectedMethod === "google_pay"
                ? "border-purple-400 bg-white/10"
                : "border-white/20 bg-white/5 hover:border-purple-400/60 hover:bg-white/8"
            }`}
          >
            <input
              id="google_pay"
              type="radio"
              value="google_pay"
              {...register("paymentMethod", {
                required: "Please select a payment method to continue",
              })}
              className="h-4 w-4 accent-purple-500"
            />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-white">
                <FaGooglePay className="h-7 w-auto text-black" />
              </div>
              <span className="font-medium text-white">Google Pay</span>
            </div>
          </label>

          {/* Pay with Link (Stripe) */}
          <label
            htmlFor="pay_with_link"
            className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition-all duration-200 ${
              selectedMethod === "pay_with_link"
                ? "border-purple-400 bg-white/10"
                : "border-white/20 bg-white/5 hover:border-purple-400/60 hover:bg-white/8"
            }`}
          >
            <input
              id="pay_with_link"
              type="radio"
              value="pay_with_link"
              {...register("paymentMethod", {
                required: "Please select a payment method to continue",
              })}
              className="h-4 w-4 accent-purple-500"
            />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-[#00D66B]">
                <span className="text-sm font-black tracking-tight text-white">Link</span>
              </div>
              <span className="font-medium text-white">Pay with Link</span>
            </div>
          </label>

          {/* Card */}
          <label
            htmlFor="card"
            className={`flex cursor-pointer flex-col rounded-2xl border transition-all duration-200 ${
              selectedMethod === "card"
                ? "border-purple-400 bg-white/10"
                : "border-white/20 bg-white/5 hover:border-purple-400/60 hover:bg-white/8"
            }`}
          >
            <div className="flex items-center gap-4 p-5">
              <input
                id="card"
                type="radio"
                value="card"
                {...register("paymentMethod", {
                  required: "Please select a payment method to continue",
                })}
                className="h-4 w-4 accent-purple-500"
              />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-slate-800">
                  <FaRegCreditCard className="h-5 w-auto text-purple-300" />
                </div>
                <span className="font-medium text-white">Pay by Card</span>
              </div>
            </div>

            {/* Card fields — only shown when selected */}
            {selectedMethod === "card" && (
              <div className="space-y-3 px-5 pb-5">
                {/* Card Number */}
                <div>
                  <div className="flex h-12 overflow-hidden rounded-lg border border-white/20 bg-slate-900/60 focus-within:border-purple-400">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="Card Number"
                      maxLength={19}
                      value={cardNumberDisplay}
                      {...register("cardNumber", {
                        required: selectedMethod === "card" ? "Card number is required" : false,
                        validate: (v) =>
                          selectedMethod !== "card" ||
                          v.replace(/\s/g, "").length === 16 ||
                          "Enter a valid 16-digit card number",
                      })}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value);
                        setCardNumberDisplay(formatted);
                        setValue("cardNumber", formatted);
                      }}
                      className="h-full flex-1 bg-transparent px-4 text-sm text-white placeholder:text-purple-300/60 focus:outline-none"
                    />
                    <div className="flex shrink-0 items-center gap-1 pr-3">
                      <div className="flex items-center justify-center rounded bg-white px-1 py-0.5">
                        <FaCcVisa className="h-7 w-auto text-[#1A1F71]" />
                      </div>
                      <div className="flex items-center justify-center rounded bg-white px-1 py-0.5">
                        <FaCcMastercard className="h-7 w-auto text-[#EB001B]" />
                      </div>
                      <div className="flex items-center justify-center rounded bg-white px-1 py-0.5">
                        <FaCcAmex className="h-7 w-auto text-[#2E77BC]" />
                      </div>
                    </div>
                  </div>
                  {errors.cardNumber && (
                    <p className="mt-1 text-xs text-red-400">{errors.cardNumber.message}</p>
                  )}
                </div>

                {/* Expiry + Security Code */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex h-12 overflow-hidden rounded-lg border border-white/20 bg-slate-900/60 focus-within:border-purple-400">
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Expiry Date"
                        maxLength={5}
                        value={expiryDisplay}
                        {...register("expiryDate", {
                          required: selectedMethod === "card" ? "Expiry date is required" : false,
                          validate: (v) => {
                            if (selectedMethod !== "card") return true;
                            if (!/^\d{2}\/\d{2}$/.test(v)) return "Use MM/YY format";
                            const [mm, yy] = v.split("/").map(Number);
                            if (mm < 1 || mm > 12) return "Invalid month";
                            const now = new Date();
                            const expiry = new Date(2000 + yy, mm - 1);
                            if (expiry < now) return "Card has expired";
                            return true;
                          },
                        })}
                        onChange={(e) => {
                          const formatted = formatExpiry(e.target.value);
                          setExpiryDisplay(formatted);
                          setValue("expiryDate", formatted);
                        }}
                        className="h-full w-full bg-transparent px-4 text-sm text-white placeholder:text-purple-300/60 focus:outline-none"
                      />
                    </div>
                    {errors.expiryDate && (
                      <p className="mt-1 text-xs text-red-400">{errors.expiryDate.message}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex h-12 overflow-hidden rounded-lg border border-white/20 bg-slate-900/60 focus-within:border-purple-400">
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Security Code"
                        maxLength={4}
                        {...register("securityCode", {
                          required: selectedMethod === "card" ? "Security code is required" : false,
                          validate: (v) =>
                            selectedMethod !== "card" ||
                            /^\d{3,4}$/.test(v) ||
                            "Enter 3 or 4 digits",
                          onChange: (e) => {
                            e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
                          },
                        })}
                        className="h-full flex-1 bg-transparent pl-4 text-sm text-white placeholder:text-purple-300/60 focus:outline-none"
                      />
                      <div className="flex shrink-0 items-center pr-3">
                        <CVVIcon />
                      </div>
                    </div>
                    {errors.securityCode && (
                      <p className="mt-1 text-xs text-red-400">{errors.securityCode.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </label>

          {errors.paymentMethod && (
            <p className="text-center text-xs text-red-400">
              {errors.paymentMethod.message}
            </p>
          )}

          {/* Terms checkbox */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                {...register("agreeTerms", {
                  required: "You must agree to the Terms of Service and Privacy Policy to continue",
                })}
                className="mt-0.5 h-4 w-4 shrink-0 accent-purple-500"
              />
              <span className="text-sm text-purple-100 leading-relaxed">
                I have read and understand the{" "}
                <span className="font-semibold text-white underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="font-semibold text-white underline cursor-pointer">
                  Privacy Policy
                </span>
                . Our{" "}
                <span className="font-semibold text-white underline cursor-pointer">
                  GDPR compliance certificate
                </span>{" "}
                is available for review.
              </span>
            </label>
            {errors.agreeTerms && (
              <p className="mt-2 text-xs text-red-400">{errors.agreeTerms.message}</p>
            )}
          </div>

          {/* Security note */}
          <div className="flex items-center justify-center gap-2 text-xs text-purple-300">
            <ShieldCheckIcon className="h-4 w-4 text-purple-400" />
            <span>256-bit SSL encryption · Secured by Stripe</span>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-4 text-base font-bold text-white transition hover:from-blue-400 hover:to-purple-500"
          >
            Start Your Free 14 Day Trial
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>
      </main>
    </div>
  );
};

const PaymentPage: NextPage = () => (
  <Suspense
    fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900" />
    }
  >
    <PaymentContent />
  </Suspense>
);

export default PaymentPage;







