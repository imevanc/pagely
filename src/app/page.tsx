"use client";

import type { NextPage } from "next/types";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const creatorDetails = [
  "Custom bio and brand colors",
  "Pinned links for your top offers",
  "Built-in analytics and conversion tracking",
  "Fast, mobile-first templates",
];

const testimonials = [
  {
    quote:
      "Pagely helped me turn my profile into a storefront in one afternoon.",
    name: "Mia, Creator",
  },
  {
    quote:
      "I moved everything into one page and finally my audience knows where to click.",
    name: "Andre, Coach",
  },
  {
    quote:
      "It looks premium without me touching code.",
    name: "Sam, Photographer",
  },
];

const integrations = ["Instagram", "Google Calendar", "PayPal", "Stripe"];

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <SiteHeader />

      <main>
        <section id="register" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-purple-300/30 bg-white/5 px-4 py-1 text-sm text-purple-100">
              Built for creators who want to own their audience
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              One link page. Unlimited creator growth.
            </h1>
            <p className="mt-4 text-lg text-purple-100">
              Build your brand hub, share everything you sell, and convert followers into customers.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-blue-400 hover:to-purple-500"
            >
              Continue to Registration
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The best creators use Pagely
            </h2>
            <p className="mt-4 text-purple-100">
              Creators choose Pagely to launch faster, look better, and keep every important link in one place.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-purple-100">
              {creatorDetails.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 text-blue-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[2.2rem] border border-white/15 bg-slate-900/70 p-4 shadow-2xl">
            <div className="rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-blue-900/40 to-purple-900/40 p-4">
              <p className="text-xs text-purple-200">@evancreates</p>
              <h3 className="mt-1 text-lg font-semibold">Evan Creator Hub</h3>
              <div className="mt-4 space-y-2">
                {[
                  "Join my newsletter",
                  "Book a strategy call",
                  "Shop my digital products",
                  "Watch my latest video",
                ].map((link) => (
                  <button
                    key={link}
                    type="button"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-sm hover:bg-white/10"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See what people are saying
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <StarIcon className="h-5 w-5 text-blue-300" aria-hidden="true" />
                <p className="mt-3 text-sm text-purple-100">{item.quote}</p>
                <p className="mt-4 text-sm font-semibold">{item.name}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold">
              0% transaction fees
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold">
              Always on
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built to sell, built to scale</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">No coding required</h3>
              <p className="mt-2 text-sm text-purple-100">Launch a polished page without writing a single line of code.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">1-tap checkout</h3>
              <p className="mt-2 text-sm text-purple-100">Turn clicks into sales with simple and fast checkout flows.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Integrated with your favorite apps</h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-purple-100">
                {integrations.map((name) => (
                  <span key={name} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Home;

