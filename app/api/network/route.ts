import { execSync } from "node:child_process";
import { NextResponse } from "next/server";

export async function GET() {
  try {

    const output = execSync("ip -4 addr show wlan0").toString();

    const ipMatch = output.match(/inet\s+(\d+\.\d+\.\d+\.\d+)/);

    const ip = ipMatch ? ipMatch[1] : "Unavailable";


    return NextResponse.json({
      interface: "wlan0",
      ip,
      status: "Online",
    });


  } catch (error) {

    return NextResponse.json({
      interface: "wlan0",
      ip: "Unavailable",
      status: "Offline",
      error: String(error),
    });

  }
}