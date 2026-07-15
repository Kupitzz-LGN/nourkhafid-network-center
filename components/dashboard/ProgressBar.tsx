type Props = {
  value: number;
};

export default function ProgressBar({ value }: Props) {
  return (
    <div className="mt-4">
      <div className="h-2 w-full rounded-full bg-gray-800">
        <div
          className="h-2 rounded-full bg-cyan-400 transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}