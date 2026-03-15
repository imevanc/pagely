"use client";

import { useEffect, useState } from "react";

const COOKIE_KEY = "pagely_cookie_consent";
const COOKIE_TTL_MS = 5 * 60 * 60 * 1000; // 5 hours

function getConsent(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_KEY}=`));
  return match ? match.split("=")[1] : null;
}

function setConsent(value: "accepted" | "rejected") {
  const expires = new Date(Date.now() + COOKIE_TTL_MS).toUTCString();
  document.cookie = `${COOKIE_KEY}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  const handleAccept = () => {
    setConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    setConsent("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* ── Backdrop ── blocks ALL interaction on tablet + mobile */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
      />

      {/* ── Desktop banner (bottom bar) ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie consent"
        className="
          fixed bottom-0 left-0 right-0 z-50
          hidden lg:flex
          items-center justify-between gap-8
          border-t border-white/10
          bg-blue-950/95 backdrop-blur
          px-10 py-5
          shadow-2xl shadow-black/40
        "
      >
        <CookieText />
        <CookieButtons onAccept={handleAccept} onReject={handleReject} />
      </div>

      {/* ── Tablet / Mobile modal (centre screen) ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie consent"
        className="
          fixed inset-0 z-50
          flex items-center justify-center
          px-6
          lg:hidden
        "
      >
        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-blue-950/95 p-7 shadow-2xl shadow-black/60 backdrop-blur">
          <div className="mb-5 flex items-center gap-2">
            <span className="text-2xl">🍪</span>
            <h2 className="text-base font-bold text-white">We use cookies</h2>
          </div>
          <CookieText />
          <div className="mt-6 flex flex-col gap-3">
            <CookieButtons
              onAccept={handleAccept}
              onReject={handleReject}
              stacked
            />
          </div>
        </div>
      </div>
    </>
  );
};

const CookieText = () => (
  <p className="max-w-2xl text-sm leading-relaxed text-purple-100">
    🍪 Cookies help us improve performance and make your experience more
    personal. Use of this site means you agree to our{" "}
    <a
      href="#"
      className="font-semibold text-white underline underline-offset-2 hover:text-purple-200"
    >
      Terms
    </a>{" "}
    and{" "}
    <a
      href="#"
      className="font-semibold text-white underline underline-offset-2 hover:text-purple-200"
    >
      Privacy Policy
    </a>
    .
  </p>
);

const CookieButtons = ({
  onAccept,
  onReject,
  stacked = false,
}: {
  onAccept: () => void;
  onReject: () => void;
  stacked?: boolean;
}) => (
  <div className={`flex shrink-0 gap-3 ${stacked ? "flex-col" : "flex-row"}`}>
    <button
      onClick={onAccept}
      className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:from-blue-400 hover:to-purple-500"
    >
      Accept All
    </button>
    <button
      onClick={onReject}
      className="rounded-xl border border-white/20 px-6 py-2.5 text-sm font-semibold text-purple-100 transition hover:border-white/40 hover:text-white"
    >
      Reject All
    </button>
  </div>
);
