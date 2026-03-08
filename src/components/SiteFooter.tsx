import type { ElementType } from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {PagelyLogo} from "./PagelyLogo";

const socialLinks = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "TikTok", href: "#", icon: FaTiktok },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
  { label: "Twitter", href: "#", icon: FaXTwitter },
];

const footerLinks = [
  { label: "Sign In", href: "#" },
  { label: "Blog", href: "/blog" },
  { label: "Referral Program", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Help", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
];

export const SiteFooter = () =>
    <footer className="border-t border-white/10 bg-slate-950/40">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
        <div>
          <PagelyLogo />
          <p className="mt-4 max-w-md text-sm text-purple-100">
            Build a premium creator presence with one beautiful page and zero technical friction.
          </p>
          <div className="mt-5 flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon as ElementType;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-lg border border-white/15 bg-white/5 p-2.5 text-purple-100 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-purple-100 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-purple-300">
        © {new Date().getFullYear()} Pagely. All rights reserved.
      </div>
    </footer>


