import {
  Router,
  Server,
  ShieldCheck,
  Network,
  Activity,
} from "lucide-react";

const devices = [
  {
    icon: Router,
    name: "Router",
    status: "Online",
    desc: "MikroTik Routing",
  },
  {
    icon: Network,
    name: "Core Switch",
    status: "Online",
    desc: "Network Distribution",
  },
  {
    icon: Server,
    name: "Server",
    status: "Online",
    desc: "Linux Server",
  },
  {
    icon: ShieldCheck,
    name: "Firewall",
    status: "Online",
    desc: "Security Layer",
  },
  {
    icon: Activity,
    name: "Monitoring",
    status: "Active",
    desc: "System Metrics",
  },
];

export default function NetworkRack() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold">
        Network Center
      </h2>

      <p className="mt-2 text-gray-400">
        Infrastructure monitoring and network laboratory.
      </p>


      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-5">

        {devices.map((device) => {
          const Icon = device.icon;

          return (
            <div
              key={device.name}
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-xl
              hover:border-cyan-400
              transition
              "
            >

              <Icon className="text-cyan-400 mb-4" size={32}/>

              <h3 className="font-bold">
                {device.name}
              </h3>

              <p className="text-sm text-gray-400">
                {device.desc}
              </p>

              <div className="mt-4 flex items-center gap-2">

                <span className="
                h-2
                w-2
                rounded-full
                bg-green-400
                "/>

                <span className="text-sm text-green-400">
                  {device.status}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}