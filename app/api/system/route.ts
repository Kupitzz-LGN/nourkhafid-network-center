import { execSync } from "node:child_process";
import { NextResponse } from "next/server";

const isVercel = !!process.env.VERCEL;

function run(cmd: string, fallback = "") {
  try {
    return execSync(cmd).toString().trim();
  } catch {
    return fallback;
  }
}

function getCPUUsage() {
  try {
    const result = execSync("top -bn1 | grep Cpu")
      .toString()
      .trim();

    const match = result.match(/([\d.,]+)\s*id/);

    if (match) {
      const idle = parseFloat(match[1].replace(",", "."));
      return Math.round(100 - idle);
    }

    return 0;
  } catch {
    return 0;
  }
}

function getPing() {
  try {
    const result = execSync("ping -c 1 1.1.1.1").toString();

    const match = result.match(/(?:time|waktu)[=<]([\d.]+)/);

    if (match) {
      return Math.round(Number(match[1]));
    }

    return 0;
  } catch {
    return 0;
  }
}

export async function GET() {
  if (isVercel) {
    return NextResponse.json({
      hostname: "Vercel",
      kernel: "Serverless",
      uptime: "Online",
      ram: "Managed by Vercel",
      diskUsage: 0,
      cpu: 0,
      ping: 0,
    });
  }

  return NextResponse.json({
    hostname: run("hostname"),
    kernel: run("uname -r"),
    uptime: run("uptime -p"),
    ram: run("free -h | grep Mem"),
    diskUsage: run("df / | tail -1 | awk '{print $5}'").replace("%", ""),
    cpu: getCPUUsage(),
    ping: getPing(),
  });
}