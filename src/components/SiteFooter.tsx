import {
  GlobeAltIcon,
  MusicalNoteIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import PagelyLogo from "./PagelyLogo";

const socialLinks = [
  { label: "Instagram", href: "#", icon: GlobeAltIcon },
  { label: "TikTok", href: "#", icon: MusicalNoteIcon },
  { label: "LinkedIn", href: "#", icon: BriefcaseIcon },
  { label: "Twitter", href: "#", icon: ChatBubbleBottomCenterTextIcon },
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

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/40">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
        <div>
          <PagelyLogo />
          <p className="mt-4 max-w-md text-sm text-purple-100">
            Build a premium creator presence with one beautiful page and zero technical friction.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-purple-100 transition hover:bg-white/10">
                <social.icon className="h-4 w-4" aria-hidden="true" />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-purple-100 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

