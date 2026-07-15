import { execSync } from "node:child_process";
import { NextResponse } from "next/server";


function check(service:string){

  try{

    const result = execSync(
      `systemctl is-active ${service}`
    )
    .toString()
    .trim();


    return result === "active"
      ? "Running"
      : "Stopped";


  }catch{

    return "Not Found";

  }

}



export async function GET(){

  return NextResponse.json({

    nginx: check("nginx"),

    ssh: check("sshd"),

    network: check("NetworkManager"),

  });

}