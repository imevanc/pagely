"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {PagelyLogo} from "./PagelyLogo";

const links = [
  { label: "Home", href: "/" },
  { label: "Our Mission", href: "/mission" },
  { label: "Blog", href: "/blog" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        <a href="/" aria-label="Pagely home">
          <PagelyLogo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-purple-100 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-blue-400 hover:to-purple-500"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-purple-100 lg:hidden"
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40 bg-slate-950/60" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-gradient-to-b from-indigo-950 to-purple-950 px-6 py-6 ring-1 ring-white/10">
          <div className="flex items-center justify-between">
            <PagelyLogo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-purple-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 space-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-purple-100 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-2 text-center text-base font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
