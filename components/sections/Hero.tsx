import { ArrowRight, Globe, FolderGit2 } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          🚀 Network Engineer • Linux Enthusiast
        </span>

        <h1 className="mt-8 text-6xl font-black leading-tight md:text-8xl">
          NourKhafid
          <br />
          <span className="text-cyan-400">
            Network Center
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          Building modern networking solutions using Linux,
          MikroTik, Cisco, Cloud Computing and Automation.
        </p>

        <div className="mt-12 flex justify-center gap-5">

          <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-400">
            Explore Projects
            <ArrowRight size={18} />
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 transition hover:border-cyan-400">
  <FolderGit2 size={18} />
  GitHub
</button>

        </div>

      </div>

    </section>
  );
}