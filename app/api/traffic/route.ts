import { execSync } from "node:child_process";
import { NextResponse } from "next/server";

const isVercel = !!process.env.VERCEL;

export async function GET() {
  if (isVercel) {
    return NextResponse.json({
      interface: "eth0",
      download: 12563487,
      upload: 5487321,
    });
  }

  try {
    const output = execSync("cat /proc/net/dev").toString();

    const line = output
      .split("\n")
      .find((x) => x.includes("wlan0"));

    if (!line) {
      return NextResponse.json({
        interface: "wlan0",
        download: 0,
        upload: 0,
      });
    }

    const data = line
      .trim()
      .replace(":", " ")
      .split(/\s+/);

    return NextResponse.json({
      interface: data[0],
      download: Number(data[1]),
      upload: Number(data[9]),
    });
  } catch {
    return NextResponse.json({
      interface: "wlan0",
      download: 0,
      upload: 0,
    });
  }
}