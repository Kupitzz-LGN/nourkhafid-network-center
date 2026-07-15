import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SystemInfo from "@/components/dashboard/SystemInfo";
import NetworkChart from "@/components/charts/NetworkChart";
import StatusCard from "@/components/dashboard/StatusCard";
import ProgressCard from "@/components/dashboard/ProgressCard";
import NetworkInfo from "@/components/dashboard/NetworkInfo";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <DashboardHeader />

        <SystemInfo />

        <div className="mt-8">
          <NetworkInfo />
        </div>

        <div className="mt-8">
          <NetworkChart />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <StatusCard
            title="Linux Server"
            status="Online"
            value="100%"
            color="bg-green-500"
            progress={100}
          />

          <ProgressCard/>
        </div>
      </section>
    </main>
  );
}