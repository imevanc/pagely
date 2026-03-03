"use client";

import { useState } from "react";
import type { NextPage } from "next/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    LinkIcon,
    SparklesIcon,
    ChartBarIcon,
    PaintBrushIcon,
    DevicePhoneMobileIcon,
    CheckIcon
} from "@heroicons/react/24/outline";

const navigation = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Templates", href: "#templates" },
    { name: "About", href: "#about" },
];

const features = [
    {
        name: "Custom Links",
        description: "Create unlimited custom links with your personal branding. Share all your content in one beautiful place.",
        icon: LinkIcon,
    },
    {
        name: "Beautiful Themes",
        description: "Choose from stunning gradient themes or customize your own. Make your page truly unique.",
        icon: PaintBrushIcon,
    },
    {
        name: "Analytics Dashboard",
        description: "Track clicks, views, and engagement. Understand your audience with powerful insights.",
        icon: ChartBarIcon,
    },
    {
        name: "Mobile Optimized",
        description: "Perfect experience on any device. Your page looks great everywhere.",
        icon: DevicePhoneMobileIcon,
    },
];

const pricing = [
    {
        name: "Free",
        price: "$0",
        description: "Perfect for getting started",
        features: [
            "Unlimited links",
            "Basic themes",
            "Basic analytics",
            "Pagely subdomain",
        ],
    },
    {
        name: "Pro",
        price: "$9",
        description: "For serious creators",
        features: [
            "Everything in Free",
            "Custom domain",
            "Advanced analytics",
            "Priority support",
            "Remove Pagely branding",
            "Custom CSS",
        ],
        highlighted: true,
    },
    {
        name: "Business",
        price: "$29",
        description: "For teams and agencies",
        features: [
            "Everything in Pro",
            "Multiple team members",
            "API access",
            "White label",
            "Dedicated support",
        ],
    },
];

const Home: NextPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    return (
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 min-h-screen">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    aria-label="Global"
                    className="flex items-center justify-between p-6 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pagely
              </span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-purple-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                data-testid={`${item.name}-desktop`}
                                className="text-sm font-semibold leading-6 text-purple-100 hover:text-white transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-purple-100 hover:text-white transition-colors"
                        >
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                    className="lg:hidden"
                >
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-purple-500/30">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Pagely
                </span>
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-purple-200"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-purple-500/25">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            data-testid={`${item.name}-mobile`}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-purple-100 hover:bg-purple-800/50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-purple-100 hover:bg-purple-800/50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            {/* Hero Section */}
            <div className="relative isolate overflow-hidden pt-14">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="mb-8 flex justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-purple-200 ring-1 ring-purple-400/30 hover:ring-purple-400/50 transition-all">
                                🚀 Join thousands of creators worldwide{" "}
                                <a href="#" className="font-semibold text-white">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Get started <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
                            Your Links,{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Beautifully
              </span>{" "}
                            Organized
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-purple-100">
                            Create a stunning landing page for all your links. Share your content,
                            grow your audience, and track engagement—all in one place. Perfect for creators,
                            influencers, and businesses.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 transition-all"
                            >
                                Start for Free
                            </a>
                            <a
                                href="#"
                                className="text-sm font-semibold leading-6 text-white hover:text-purple-200 transition-colors"
                            >
                                View Demo <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-600 to-blue-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-base font-semibold leading-7 text-purple-300">
                            Everything you need
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Powerful Features for Creators
                        </p>
                        <p className="mt-6 text-lg leading-8 text-purple-100">
                            All the tools you need to create, customize, and grow your online presence.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-white">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-purple-200">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div id="pricing" className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-base font-semibold leading-7 text-purple-300">
                            Pricing
                        </h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Choose the Perfect Plan
                        </p>
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-purple-100">
                        Start for free, upgrade as you grow. All plans include our core features.
                    </p>
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                        {pricing.map((tier) => (
                            <div
                                key={tier.name}
                                className={`rounded-3xl p-8 ${
                                    tier.highlighted
                                        ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 ring-2 ring-purple-500"
                                        : "bg-white/5 ring-1 ring-purple-500/30"
                                }`}
                            >
                                <h3 className="text-lg font-semibold leading-8 text-white">
                                    {tier.name}
                                </h3>
                                <p className="mt-4 text-sm leading-6 text-purple-200">
                                    {tier.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {tier.price}
                  </span>
                                    <span className="text-sm font-semibold leading-6 text-purple-200">
                    /month
                  </span>
                                </p>
                                <a
                                    href="#"
                                    className={`mt-6 block rounded-lg px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                                        tier.highlighted
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                    } transition-all`}
                                >
                                    Get started
                                </a>
                                <ul className="mt-8 space-y-3 text-sm leading-6 text-purple-200">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon
                                                className="h-6 w-5 flex-none text-purple-400"
                                                aria-hidden="true"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to Get Started?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-purple-100">
                            Join thousands of creators who are already using Pagely to share their content and grow their audience.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 transition-all"
                            >
                                Create Your Page
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-purple-500/20 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <p className="text-center text-sm leading-6 text-purple-300">
                        © 2026 Pagely. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;

