import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components";

export const metadata: Metadata = {
  title: "Pagely - Your Links, Beautifully Organized",
  description:
    "Create a stunning landing page for all your links. Perfect for creators, influencers, and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <SiteHeader />
      <body className="antialiased">{children}</body>
      <SiteFooter />
    </html>
  );
}
