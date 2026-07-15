import { NextResponse } from "next/server";


export async function GET() {

  const logs = [

    {
      time: new Date().toLocaleTimeString(),
      type: "INFO",
      message: "Network interface wlan0 active"
    },

    {
      time: new Date().toLocaleTimeString(),
      type: "INFO",
      message: "System monitoring running"
    },

    {
      time: new Date().toLocaleTimeString(),
      type: "WARNING",
      message: "Ping latency checking"
    }

  ];


  return NextResponse.json(logs);

}