import type { NextPage } from "next/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const values = [
  {
    emoji: "⚡️",
    title: "Be Bold",
    description:
      "We ship fast, take risks, and make decisions with conviction. Playing it safe is not in our DNA.",
  },
  {
    emoji: "🎨",
    title: "Creator First",
    description:
      "Every feature, every design choice, every line of code is written for the people who build in public.",
  },
  {
    emoji: "🙋",
    title: "Take Ownership",
    description:
      "We treat every problem as our own. No finger-pointing — just solutions and accountability.",
  },
  {
    emoji: "📊",
    title: "Data-Driven",
    description:
      "Intuition starts the conversation; data ends it. We test, measure, and iterate relentlessly.",
  },
  {
    emoji: "✨",
    title: "Spark Joy",
    description:
      "We believe work tools can actually be delightful. If using Pagely doesn't make you smile, we haven't done our job.",
  },
];

const MissionPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <main>
        {/* Mission quote */}
        <section className="relative overflow-hidden px-6 py-24 text-center lg:px-8 lg:py-32">
          {/* background glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl">
            <p className="inline-flex rounded-full border border-purple-300/30 bg-white/5 px-4 py-1 text-sm text-purple-100">
              Our mission
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              We exist to help anyone{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                work for themselves.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
              The internet has made it possible for anyone to build an audience
              and turn their passion into a living. Pagely makes that transition
              simple, beautiful, and fast — so you can spend more time creating
              and less time wrangling tools.
            </p>
          </div>
        </section>

        {/* Founder message */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Photo side */}
              <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-10">
                {/* Avatar / photo placeholder */}
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl shadow-purple-950/60">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-5xl font-bold text-white/90">E</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white">Evan</p>
                  <p className="text-sm text-purple-300">
                    Founder & CEO, Pagely
                  </p>
                </div>
              </div>

              {/* Message side */}
              <div className="flex flex-col justify-center p-10 lg:p-12">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  A message from our founder
                </h2>
                <div className="mt-6 space-y-4 text-purple-100">
                  <p>
                    "I started Pagely because I watched too many talented people
                    get stuck — not because they lacked skill or drive, but
                    because the tools were too complicated, too expensive, or
                    just not built for them.
                  </p>
                  <p>
                    I wanted to build something that genuinely felt like a
                    superpower in your hands. Something that meets you where you
                    are, whether you're posting your first link or managing a
                    seven-figure business.
                  </p>
                  <p>
                    If Pagely helps even one more person take the leap and work
                    for themselves, then we've done exactly what we set out to
                    do.
                  </p>
                  <p className="font-semibold text-white">— Evan, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our values */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our values
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-purple-100">
              These aren't buzzwords on a wall — they're the standards we hold
              ourselves to every single day.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-purple-400/30 hover:bg-white/8"
              >
                <span className="text-3xl">{value.emoji}</span>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-purple-100">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-16">
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-[300px] w-[600px] rounded-full bg-blue-600/20 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to work for yourself?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-purple-100">
                Join thousands of creators already using Pagely to build their
                brand, grow their audience, and earn on their own terms.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:from-blue-400 hover:to-purple-500"
              >
                Start your free trial
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-3 text-xs text-purple-300">
                No credit card required · Cancel any time
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MissionPage;
