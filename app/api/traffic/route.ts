import { execSync } from "node:child_process";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    const output = execSync(
      "cat /proc/net/dev"
    ).toString();


    const line = output
      .split("\n")
      .find((x) => x.includes("wlan0"));


    if (!line) {
      return NextResponse.json({
        error: "interface not found"
      });
    }


    const data = line
      .trim()
      .replace(":", " ")
      .split(/\s+/);


    return NextResponse.json({

      interface: data[0],

      download:
        Number(data[1]),

      upload:
        Number(data[9])

    });


  } catch {

    return NextResponse.json({
      error: "failed"
    });

  }

}