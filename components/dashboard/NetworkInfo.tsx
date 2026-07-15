"use client";

import { useEffect, useState } from "react";

export default function NetworkInfo() {

  const [network, setNetwork] = useState<any>(null);


  async function getNetwork() {
    const res = await fetch("/api/network");
    const data = await res.json();

    setNetwork(data);
  }


  useEffect(() => {

    getNetwork();

    const interval = setInterval(getNetwork, 5000);

    return () => clearInterval(interval);

  }, []);



  if (!network) {
    return (
      <div className="rounded-xl border border-gray-800 bg-black/40 p-6">
        Loading network...
      </div>
    );
  }


  return (

    <div className="grid gap-6 md:grid-cols-3">


      <div className="rounded-xl border border-gray-800 bg-black/40 p-6">

        <p className="text-gray-400">
          Interface
        </p>

        <h3 className="mt-2 text-2xl font-bold text-cyan-400">
          {network.interface}
        </h3>

      </div>



      <div className="rounded-xl border border-gray-800 bg-black/40 p-6">

        <p className="text-gray-400">
          IP Address
        </p>

        <h3 className="mt-2 text-2xl font-bold text-cyan-400">
          {network.ip}
        </h3>

      </div>



      <div className="rounded-xl border border-gray-800 bg-black/40 p-6">

        <p className="text-gray-400">
          Status
        </p>

        <h3 className="mt-2 text-2xl font-bold text-green-400">
          {network.status}
        </h3>

      </div>


    </div>

  );
}