import SystemInfo from "@/components/dashboard/SystemInfo";
import NetworkInfo from "@/components/dashboard/NetworkInfo";
import NetworkTraffic from "@/components/dashboard/NetworkTraffic";
import EventLog from "@/components/dashboard/EventLog";
import ServiceMonitor from "@/components/dashboard/ServiceMonitor";

export default function Dashboard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <h2 className="text-center text-5xl font-black">
        Infrastructure <span className="text-cyan-400">Dashboard</span>
      </h2>

      <p className="mt-4 text-center text-gray-400">
        Real-time infrastructure monitoring.
      </p>


     <div className="mt-16">
        <SystemInfo />
     </div>

     <div className="mt-10">
  <NetworkTraffic />
</div>

     <div className="mt-10">
        <NetworkInfo />
     </div>

     <div className="mt-10">
  <EventLog />
</div>

<div className="mt-10">
  <ServiceMonitor />
</div>

    </section>
  );
}