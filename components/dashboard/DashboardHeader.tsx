import { Activity, Wifi } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">

      <div>
        <h1 className="text-5xl font-black text-cyan-400">
          Network Operations Center
        </h1>

        <p className="mt-2 text-gray-400">
          Live Infrastructure Monitoring
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-3">

        <Wifi className="h-5 w-5 text-green-400" />

        <div>
          <p className="text-sm text-gray-400">
            System Status
          </p>

          <p className="font-semibold text-green-400">
            Online
          </p>
        </div>

        <Activity className="animate-pulse text-green-400" />

      </div>

    </div>
  );
}