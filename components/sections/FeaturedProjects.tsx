import {
  Network,
  Server,
  Cloud,
} from "lucide-react";

const projects = [
  {
    icon: Network,
    title: "MikroTik Hotspot",
    desc: "Hotspot authentication & bandwidth management",
  },
  {
    icon: Server,
    title: "Linux Server",
    desc: "Nginx, Docker, SSH, Monitoring",
  },
  {
    icon: Cloud,
    title: "AWS Infrastructure",
    desc: "VPC, EC2, Route53, Security Groups",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <h2 className="text-center text-5xl font-black">
        Featured
        <span className="text-cyan-400">
          {" "}Projects
        </span>
      </h2>

      <p className="mt-5 text-center text-gray-400">
        Some networking projects I've built and learned.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-3">

        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <project.icon
              size={48}
              className="text-cyan-400"
            />

            <h3 className="mt-6 text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {project.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}