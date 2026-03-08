"use client";

import type { NextPage } from "next/types";
import { ArrowRightIcon, CheckCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGooglecalendar, SiPaypal, SiStripe } from "react-icons/si";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const creatorDetails = [
  "Custom bio and brand colors",
  "Pinned links for your top offers",
  "Built-in analytics and conversion tracking",
  "Fast, mobile-first templates",
];

const testimonials = [
  { quote: "Pagely helped me turn my profile into a storefront in one afternoon.", name: "Mia", role: "Creator" },
  { quote: "I moved everything into one page and finally my audience knows where to click.", name: "Andre", role: "Coach" },
  { quote: "It looks premium without me touching code.", name: "Sam", role: "Photographer" },
];

const integrations = [
  { name: "Instagram", icon: FaInstagram, color: "text-pink-400" },
  { name: "Google Calendar", icon: SiGooglecalendar, color: "text-blue-400" },
  { name: "PayPal", icon: SiPaypal, color: "text-blue-300" },
  { name: "Stripe", icon: SiStripe, color: "text-purple-400" },
];

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-14 text-center lg:px-8 lg:py-20">
          <p className="inline-flex rounded-full border border-purple-300/30 bg-white/5 px-4 py-1 text-sm text-purple-100">
            Built for creators who want to own their audience
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            One link page.<br />Unlimited creator growth.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-purple-100">
            Build your brand hub, share everything you sell, and convert followers into customers — in minutes.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:from-blue-400 hover:to-purple-500"
          >
            Continue
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </section>

        {/* Best creators + iPhone mockup */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The best creators use Pagely
            </h2>
            <p className="mt-4 text-purple-100">
              Creators choose Pagely to launch faster, look better, and keep every important link in one place.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-purple-100">
              {creatorDetails.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* iPhone */}
          <div className="flex justify-center">
            <div className="relative w-[260px]">
              {/* phone shell */}
              <div className="relative rounded-[3rem] border-[6px] border-slate-700 bg-slate-900 shadow-2xl shadow-purple-950/60">
                {/* side buttons */}
                <div className="absolute -left-[10px] top-24 h-8 w-[4px] rounded-full bg-slate-600" />
                <div className="absolute -left-[10px] top-36 h-12 w-[4px] rounded-full bg-slate-600" />
                <div className="absolute -left-[10px] top-52 h-12 w-[4px] rounded-full bg-slate-600" />
                <div className="absolute -right-[10px] top-36 h-14 w-[4px] rounded-full bg-slate-600" />

                {/* screen */}
                <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-blue-950 to-purple-950">
                  {/* notch */}
                  <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-slate-900" />

                  {/* screen content */}
                  <div className="px-4 pb-6 pt-3">
                    {/* avatar */}
                    <div className="flex flex-col items-center">
                      <div className="h-14 w-14 rounded-full border-2 border-purple-400/50 bg-gradient-to-br from-blue-500 to-purple-500" />
                      <p className="mt-2 text-xs font-semibold text-white">@evancreates</p>
                      <p className="text-[10px] text-purple-300">Creator · Coach · Founder</p>
                    </div>

                    {/* links */}
                    <div className="mt-4 space-y-2">
                      {[
                        "Join my newsletter",
                        "Book a strategy call",
                        "Shop digital products",
                        "Watch my latest video",
                        "Follow on Instagram",
                      ].map((link) => (
                        <div
                          key={link}
                          className="flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-center text-[11px] font-medium text-white"
                        >
                          {link}
                        </div>
                      ))}
                    </div>

                    {/* social row */}
                    <div className="mt-4 flex justify-center gap-3 text-purple-300">
                      <FaInstagram className="h-4 w-4" />
                      <FaTiktok className="h-4 w-4" />
                      <FaXTwitter className="h-4 w-4" />
                      <FaLinkedin className="h-4 w-4" />
                    </div>

                    {/* home indicator */}
                    <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials + stats */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See what people are saying</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-purple-100">"{item.quote}"</p>
                <p className="mt-3 text-sm font-semibold">{item.name} <span className="font-normal text-purple-300">· {item.role}</span></p>
              </article>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-white">0%</p>
              <p className="mt-1 text-sm text-purple-100">Transaction fees — always.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-white">Always on</p>
              <p className="mt-1 text-sm text-purple-100">99.9% uptime so your page is always live.</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built to sell, built to scale</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-2xl">🚫</p>
              <h3 className="mt-3 text-lg font-semibold">No coding required</h3>
              <p className="mt-2 text-sm text-purple-100">Launch a polished page without writing a single line of code.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-2xl">⚡️</p>
              <h3 className="mt-3 text-lg font-semibold">1-tap checkout</h3>
              <p className="mt-2 text-sm text-purple-100">Turn clicks into sales with simple and fast checkout flows.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Integrated with your favorite apps</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {integrations.map(({ name, icon: Icon, color }) => (
                  <div key={name} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <Icon className={`h-5 w-5 flex-shrink-0 ${color}`} aria-hidden="true" />
                    <span className="text-xs text-purple-100">{name}</span>
                  </div>
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

