import {
  Globe,
  Router,
  Server,
  Monitor,
  Cloud,
} from "lucide-react";

export default function Topology() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <h2 className="text-center text-5xl font-black">
        Network{" "}
        <span className="text-cyan-400">
          Topology
        </span>
      </h2>

      <p className="mt-4 text-center text-gray-400">
        Example of my networking infrastructure.
      </p>

      <div className="mt-20 flex flex-col items-center gap-10">

        <Node icon={Globe} title="Internet" />

        <Line />

        <Node icon={Cloud} title="Cloudflare" />

        <Line />

        <Node icon={Router} title="MikroTik Router" />

        <div className="flex w-full justify-center gap-20">

          <div className="flex flex-col items-center">
            <Line />
            <Node icon={Server} title="Linux Server" />
          </div>

          <div className="flex flex-col items-center">
            <Line />
            <Node icon={Monitor} title="Client PC" />
          </div>

        </div>

      </div>

    </section>
  );
}

function Node({
  icon: Icon,
  title,
}: {
  icon: any;
  title: string;
}) {
  return (
    <div className="group flex w-56 flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:scale-105 hover:border-cyan-400">

      <Icon className="h-12 w-12 text-cyan-400 transition group-hover:rotate-6" />

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

    </div>
  );
}

function Line() {
  return (
    <div className="h-12 w-[2px] bg-cyan-400/40" />
  );
}