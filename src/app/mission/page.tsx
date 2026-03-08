import {
  ArrowRightIcon,
  BoltIcon,
  HeartIcon,
  LightBulbIcon,
  ChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const values = [
  { name: "Be bold", icon: BoltIcon },
  { name: "Creator first", icon: HeartIcon },
  { name: "Take ownership", icon: LightBulbIcon },
  { name: "Data-driven", icon: ChartBarIcon },
  { name: "Spark joy", icon: SparklesIcon },
];

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-5xl px-6 py-12 text-center lg:px-8 lg:py-16">
          <p className="inline-flex rounded-full border border-purple-300/30 bg-white/5 px-4 py-1 text-sm text-purple-100">
            Our mission
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            "We exist to help anyone work for themselves."
          </h1>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[220px,1fr] md:items-start">
            <div className="mx-auto h-44 w-44 rounded-2xl border border-white/15 bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
            <div>
              <h2 className="text-3xl font-bold tracking-tight">A message from our founder</h2>
              <p className="mt-3 text-sm text-purple-200">Evan, Founder</p>
              <p className="mt-4 text-purple-100">
                I started Pagely because creators deserve tools that respect their ambition. Too many people with talent stay stuck because the setup feels overwhelming. We are building Pagely so anyone can launch, earn, and grow with confidence.
              </p>
              <p className="mt-3 text-purple-100">
                Our promise is simple: remove friction, design for creators first, and help more people build independent businesses online.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
          <h2 className="text-3xl font-bold tracking-tight">Our values</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <value.icon className="h-5 w-5 text-blue-300" aria-hidden="true" />
                <h3 className="mt-2 font-semibold">{value.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="register" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Start your free trial</h2>
            <p className="mt-3 text-purple-100">Create your page, connect your tools, and start growing today.</p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Continue to Registration
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default MissionPage;

