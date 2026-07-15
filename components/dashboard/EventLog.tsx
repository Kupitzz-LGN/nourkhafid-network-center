"use client";

import { useEffect, useState } from "react";


export default function EventLog(){

  const [logs,setLogs] = useState<any[]>([]);


  async function getLogs(){

    const res = await fetch("/api/logs");
    const data = await res.json();

    setLogs(data);

  }


  useEffect(()=>{

    getLogs();

    const interval =
      setInterval(getLogs,5000);


    return ()=>clearInterval(interval);


  },[]);



  return(

    <div className="rounded-xl border border-gray-800 bg-black/40 p-6">


      <h2 className="mb-5 text-xl font-bold text-cyan-400">
        Event Log
      </h2>


      <div className="space-y-3">


      {logs.map((log,index)=>(


        <div
        key={index}
        className="flex justify-between rounded-lg border border-gray-800 p-3"
        >


          <div>

            <p className="text-sm text-gray-400">
              {log.time}
            </p>

            <p>
              {log.message}
            </p>

          </div>


          <span
          className={
            log.type === "WARNING"
            ? "text-yellow-400"
            : "text-green-400"
          }
          >

          {log.type}

          </span>


        </div>


      ))}


      </div>


    </div>

  );

}