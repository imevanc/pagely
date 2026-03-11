"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { NextPage } from "next/types";
import { useForm } from "react-hook-form";
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaSpotify,
  FaSnapchat,
  FaDiscord,
  FaPinterestP,
} from "react-icons/fa6";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type SocialsFormValues = {
  instagram: string;
  facebook: string;
  email: string;
  linkedin: string;
  youtube: string;
  x: string;
  spotify: string;
  snapchat: string;
  discord: string;
  pinterest: string;
};

const defaultSocials = [
  {
    key: "instagram" as const,
    label: "Instagram",
    icon: FaInstagram,
    placeholder: "www.instagram.com/username",
    color: "text-[#E1306C]",
    bg: "bg-[#E1306C]/20",
  },
  {
    key: "facebook" as const,
    label: "Facebook",
    icon: FaFacebookF,
    placeholder: "www.facebook.com/username",
    color: "text-[#1877F2]",
    bg: "bg-[#1877F2]/20",
  },
  {
    key: "email" as const,
    label: "Email",
    icon: FaEnvelope,
    placeholder: "hello@example.com",
    color: "text-purple-300",
    bg: "bg-purple-400/20",
  },
];

const extraSocials = [
  {
    key: "linkedin" as const,
    label: "LinkedIn",
    icon: FaLinkedinIn,
    placeholder: "www.linkedin.com/in/username",
    color: "text-[#0A66C2]",
    bg: "bg-[#0A66C2]/20",
  },
  {
    key: "youtube" as const,
    label: "YouTube",
    icon: FaYoutube,
    placeholder: "www.youtube.com/@username",
    color: "text-[#FF0000]",
    bg: "bg-[#FF0000]/20",
  },
  {
    key: "x" as const,
    label: "X",
    icon: FaXTwitter,
    placeholder: "www.x.com/username",
    color: "text-white",
    bg: "bg-white/10",
  },
  {
    key: "spotify" as const,
    label: "Spotify",
    icon: FaSpotify,
    placeholder: "open.spotify.com/artist/username",
    color: "text-[#1DB954]",
    bg: "bg-[#1DB954]/20",
  },
  {
    key: "snapchat" as const,
    label: "Snapchat",
    icon: FaSnapchat,
    placeholder: "www.snapchat.com/add/username",
    color: "text-[#FFFC00]",
    bg: "bg-[#FFFC00]/10",
  },
  {
    key: "discord" as const,
    label: "Discord",
    icon: FaDiscord,
    placeholder: "discord.gg/invite",
    color: "text-[#5865F2]",
    bg: "bg-[#5865F2]/20",
  },
  {
    key: "pinterest" as const,
    label: "Pinterest",
    icon: FaPinterestP,
    placeholder: "www.pinterest.com/username",
    color: "text-[#E60023]",
    bg: "bg-[#E60023]/20",
  },
];

const SocialsContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get("username") || "username";
  const [showMore, setShowMore] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<SocialsFormValues & { root: never }>({
    mode: "onSubmit",
  });

  const onSubmit = (data: SocialsFormValues) => {
    const keys = Object.keys(data) as (keyof SocialsFormValues)[];
    const hasAtLeastOne = keys.some((k) => data[k]?.trim());
    if (!hasAtLeastOne) {
      setError(
        "root" as never,
        {
          type: "manual",
          message: "Please add at least one social link to continue.",
        } as never,
      );
      return;
    }
    clearErrors();
    router.push("/subscribe");
  };

  const allSocials = showMore
    ? [...defaultSocials, ...extraSocials]
    : defaultSocials;

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
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xs font-bold text-white">
              2
            </div>
            <span className="text-sm font-semibold text-white">Socials</span>
          </div>
          <div className="h-px w-10 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-400/40 text-xs font-bold text-purple-200">
              3
            </div>
            <span className="text-sm text-purple-300">Plan</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Connect your social accounts
          <br />
          to your store
        </h1>

        {/* Store URL preview */}
        <div className="mt-6 flex flex-col items-center gap-1">
          <p className="text-lg font-bold text-purple-200">
            <span className="text-2xl font-extrabold text-white">@</span>
            {username}
          </p>
          <p className="text-xs text-purple-400">
            URL&nbsp;
            <span className="text-purple-200">
              https://pagely.co/{username}
            </span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          {allSocials.map(
            ({ key, label, icon: Icon, placeholder, color, bg }) => (
              <div key={key}>
                <label className="mb-1.5 block text-sm font-medium text-purple-100">
                  {label}
                </label>
                <div className="flex h-11 overflow-hidden rounded-lg border border-white/20 focus-within:border-purple-400">
                  {/* Icon box — 1/5 width */}
                  <div
                    className={`flex w-1/5 min-w-[3.5rem] shrink-0 items-center justify-center gap-2 ${bg} border-r border-white/20`}
                  >
                    <Icon className={`h-5 w-5 ${color}`} />
                    <span className="text-lg font-extrabold text-purple-300">
                      @
                    </span>
                  </div>
                  {/* Input — 4/5 width */}
                  <input
                    type="text"
                    placeholder={placeholder}
                    {...register(key)}
                    className="h-full w-4/5 bg-slate-900/60 px-3 text-sm text-white placeholder:text-purple-300/60 focus:outline-none"
                  />
                </div>
              </div>
            ),
          )}

          {!showMore && (
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 py-2 text-sm font-medium text-purple-300 transition hover:bg-white/10 hover:text-white"
            >
              View more ↓
            </button>
          )}

          {(errors as Record<string, { message?: string }>)["root"]
            ?.message && (
            <p className="text-center text-xs text-red-400">
              {(errors as Record<string, { message?: string }>)["root"].message}
            </p>
          )}

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

const SocialsPage: NextPage = () => (
  <Suspense
    fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900" />
    }
  >
    <SocialsContent />
  </Suspense>
);

export default SocialsPage;
