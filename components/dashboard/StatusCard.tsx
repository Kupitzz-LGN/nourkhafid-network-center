import ProgressBar from "./ProgressBar";

type Props = {
  title: string;
  status: string;
  value: string;
  color: string;
  progress: number;
};

export default function StatusCard({
  title,
  status,
  value,
  color,
  progress,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <div
          className={`h-3 w-3 rounded-full ${color} animate-pulse`}
        />

      </div>

      <p className="mt-7 text-4xl font-black">
        {value}
      </p>

      <p className="mt-2 text-gray-400">
        {status}
      </p>

      <ProgressBar value={progress} />

    </div>
  );
}