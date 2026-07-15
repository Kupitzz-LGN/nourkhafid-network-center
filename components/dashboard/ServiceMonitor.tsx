"use client";

import { useEffect, useState } from "react";


export default function ServiceMonitor(){

  const [services,setServices] = useState<any>(null);


  async function getServices(){

    const res = await fetch("/api/services");
    const data = await res.json();

    setServices(data);

  }


  useEffect(()=>{

    getServices();

    const interval =
      setInterval(getServices,5000);


    return ()=>clearInterval(interval);

  },[]);



  if(!services){

    return(
      <div className="rounded-xl border border-gray-800 bg-black/40 p-6">
        Loading service...
      </div>
    );

  }



  return(

    <div className="rounded-xl border border-gray-800 bg-black/40 p-6">


      <h2 className="mb-5 text-xl font-bold text-cyan-400">
        Service Monitor
      </h2>



      <div className="grid gap-4 md:grid-cols-3">


        {Object.entries(services).map(([name,status])=>(


          <div
          key={name}
          className="rounded-lg border border-gray-800 p-4"
          >


            <p className="text-gray-400 uppercase">
              {name}
            </p>


            <p
            className={
              status === "Running"
              ? "mt-2 text-green-400 font-bold"
              : "mt-2 text-red-400 font-bold"
            }
            >

              {String(status)}

            </p>


          </div>


        ))}


      </div>


    </div>

  );

}