"use client";

import { useEffect, useState } from "react";
import {
  Cpu,
  HardDrive,
  MemoryStick,
  Gauge,
} from "lucide-react";

type SystemData = {
  hostname: string;
  kernel: string;
  uptime: string;
  ram: string;
  disk: string;
  diskUsage: string;
  cpu: number;
  ping: number;
};

export default function SystemInfo() {
  const [system, setSystem] = useState<SystemData | null>(null);

  useEffect(() => {
    const loadSystem = async () => {
      try {
        const res = await fetch("/api/system");
        const data = await res.json();

        setSystem(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadSystem();

    const interval = setInterval(loadSystem, 5000);

    return () => clearInterval(interval);
  }, []);

  const ramPercent = system
    ? (() => {
        const parts = system.ram.trim().split(/\s+/);

        const total = parseFloat(parts[1].replace("Gi", ""));
        const used = parseFloat(parts[2].replace("Gi", ""));

        return Math.round((used / total) * 100);
      })()
    : 0;

  const items = [
    {
      icon: Cpu,
      title: "CPU",
      value: system ? `${system.cpu}%` : "...",
    },
    {
      icon: MemoryStick,
      title: "RAM",
      value: system ? `${ramPercent}%` : "...",
    },
    {
      icon: HardDrive,
      title: "Disk",
      value: system ? `${system.diskUsage}%` : "...",
    },
    {
      icon: Gauge,
      title: "Ping",
      value: system ? `${system.ping} ms` : "...",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400"
          >
            <Icon className="mb-4 text-cyan-400" />

            <p className="text-sm text-gray-400">
              {item.title}
            </p>

            <p className="mt-2 text-3xl font-bold">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}