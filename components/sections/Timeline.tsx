import { timeline } from "@/data/timeline";
import { CheckCircle2, Clock3, Rocket } from "lucide-react";

export default function Timeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">

      <div className="text-center">

        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          Journey
        </p>

        <h2 className="mt-3 text-5xl font-black">
          My Learning Timeline
        </h2>

        <p className="mt-4 text-gray-400">
          Every milestone that brings me closer to becoming a Network Engineer.
        </p>

      </div>

      <div className="relative mt-20">

        <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-cyan-500/20" />

        <div className="space-y-10">

          {timeline.map((item) => {

            const Icon =
              item.status === "completed"
                ? CheckCircle2
                : item.status === "current"
                ? Rocket
                : Clock3;

            return (
              <div
                key={item.id}
                className="relative pl-16"
              >

                <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 text-black">
                  <Icon size={18} />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400">

                  <span className="text-sm text-cyan-400">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="font-medium text-cyan-300">
                    {item.company}
                  </p>

                  <p className="mt-4 text-gray-400">
                    {item.description}
                  </p>

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}