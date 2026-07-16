import { execSync } from "node:child_process";
import { NextResponse } from "next/server";

const isVercel = !!process.env.VERCEL;

function check(service: string) {
  try {
    return execSync(`systemctl is-active ${service}`)
      .toString()
      .trim() === "active"
      ? "Running"
      : "Stopped";
  } catch {
    return "Not Found";
  }
}

export async function GET() {
  if (isVercel) {
    return NextResponse.json({
      nginx: "Managed",
      ssh: "Managed",
      network: "Managed",
    });
  }

  return NextResponse.json({
    nginx: check("nginx"),
    ssh: check("sshd"),
    network: check("NetworkManager"),
  });
}