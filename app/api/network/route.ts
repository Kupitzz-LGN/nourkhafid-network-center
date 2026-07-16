import { execSync } from "node:child_process";
import { NextResponse } from "next/server";

const isVercel = !!process.env.VERCEL;

export async function GET() {
  if (isVercel) {
    return NextResponse.json({
      interface: "eth0",
      ip: "Vercel Network",
      status: "Online",
    });
  }

  try {
    const output = execSync("ip -4 addr show wlan0").toString();

    const ipMatch = output.match(/inet\s+(\d+\.\d+\.\d+\.\d+)/);

    return NextResponse.json({
      interface: "wlan0",
      ip: ipMatch ? ipMatch[1] : "Unavailable",
      status: "Online",
    });
  } catch {
    return NextResponse.json({
      interface: "wlan0",
      ip: "Unavailable",
      status: "Offline",
    });
  }
}