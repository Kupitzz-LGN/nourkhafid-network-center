import { User, GraduationCap, Laptop, MapPin } from "lucide-react";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <div className="grid items-center gap-14 lg:grid-cols-2">

        <div>

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
            About Me
          </span>

          <h2 className="mt-8 text-5xl font-black">
            Future{" "}
            <span className="text-cyan-400">
              Network Engineer
            </span>
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            I'm a vocational high school student currently doing an
            internship at Desnet. My passion is building networking
            infrastructure, Linux servers, cloud computing, and
            automation.
          </p>

        </div>

        <div className="grid gap-5">

          <InfoCard
            icon={GraduationCap}
            title="Education"
            value="SMK Tunas Harapan Pati"
          />

          <InfoCard
            icon={Laptop}
            title="Current"
            value="Internship at Desnet"
          />

          <InfoCard
            icon={MapPin}
            title="Location"
            value="Central Java, Indonesia"
          />

          <InfoCard
            icon={User}
            title="Goal"
            value="Professional Network Engineer"
          />

        </div>

      </div>

    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400">

      <Icon className="h-8 w-8 text-cyan-400" />

      <div>

        <p className="text-sm text-gray-500">
          {title}
        </p>

        <h3 className="font-semibold">
          {value}
        </h3>

      </div>

    </div>
  );
}