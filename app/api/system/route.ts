import { execSync } from "node:child_process";
import { NextResponse } from "next/server";

function getCPUUsage() {
  try {
    const result = execSync(
      "top -bn1 | grep Cpu"
    )
      .toString()
      .trim();


    const match = result.match(/([\d,]+)\s*id/);

    if (match) {
      const idle = parseFloat(
        match[1].replace(",", ".")
      );

      return Math.round(100 - idle);
    }

    return 0;

  } catch {
    return 0;
  }
}


function getPing() {
  try {
    const result = execSync(
      "ping -c 1 1.1.1.1"
    )
      .toString();


    const match = result.match(
      /(?:time|waktu)[=<]([\d.]+)/
    );


    if (match) {
      return Math.round(Number(match[1]));
    }


    return 0;

  } catch {
    return 0;
  }
}


export async function GET() {
  try {

    const hostname = execSync("hostname")
      .toString()
      .trim();


    const kernel = execSync("uname -r")
      .toString()
      .trim();


    const uptime = execSync("uptime -p")
      .toString()
      .trim();


    const ram = execSync("free -h | grep Mem")
      .toString()
      .trim();


    const diskUsage = execSync(
      "df / | tail -1 | awk '{print $5}'"
    )
      .toString()
      .trim()
      .replace("%","");


    const cpu = getCPUUsage();

    const ping = getPing();


    return NextResponse.json({
      hostname,
      kernel,
      uptime,
      ram,
      diskUsage,
      cpu,
      ping,
    });


  } catch(error){

    return NextResponse.json({
      error:String(error)
    });

  }
}