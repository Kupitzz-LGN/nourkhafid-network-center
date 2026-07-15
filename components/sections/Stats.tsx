"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FolderKanban,
  Cpu,
  BriefcaseBusiness,
  Brain,
} from "lucide-react";

const stats = [
  {
    title: "Projects",
    value: 15,
    suffix: "+",
    description: "Networking & Cloud",
    icon: FolderKanban,
  },
  {
    title: "Technologies",
    value: 20,
    suffix: "+",
    description: "Linux, MikroTik, Cisco",
    icon: Cpu,
  },
  {
    title: "Experience",
    value: 6,
    suffix: " Mo",
    description: "Internship at Desnet",
    icon: BriefcaseBusiness,
  },
  {
    title: "Learning",
    value: 24,
    suffix: "/7",
    description: "Always Improving",
    icon: Brain,
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <Icon className="mb-6 h-10 w-10 text-cyan-400 transition group-hover:rotate-6" />

              <p className="text-5xl font-black text-cyan-400">
                {inView && (
                  <CountUp
                    end={item.value}
                    duration={2}
                    suffix={item.suffix}
                  />
                )}
              </p>

              <h3 className="mt-5 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}