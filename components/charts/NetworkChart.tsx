"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { time: "08", traffic: 15 },
  { time: "09", traffic: 28 },
  { time: "10", traffic: 19 },
  { time: "11", traffic: 35 },
  { time: "12", traffic: 42 },
  { time: "13", traffic: 31 },
  { time: "14", traffic: 48 },
];

export default function NetworkChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h3 className="mb-6 text-xl font-bold">
        Network Traffic
      </h3>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="time" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="traffic"
              stroke="#22d3ee"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}