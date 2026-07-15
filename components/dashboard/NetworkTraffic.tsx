"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";


export default function NetworkTraffic() {

  const [traffic, setTraffic] = useState<any[]>([]);


  async function getTraffic() {

    const res = await fetch("/api/traffic");
    const data = await res.json();


    const download =
      Number(data.download / 1024 / 1024).toFixed(2);

    const upload =
      Number(data.upload / 1024 / 1024).toFixed(2);


    setTraffic((old) => {

      const update = [
        ...old,
        {
          time: new Date().toLocaleTimeString(),
          download: Number(download),
          upload: Number(upload),
        },
      ];


      return update.slice(-10);

    });

  }



  useEffect(() => {

    getTraffic();

    const interval =
      setInterval(getTraffic, 3000);


    return () =>
      clearInterval(interval);


  }, []);



  return (

    <div className="rounded-xl border border-gray-800 bg-black/40 p-6">


      <h2 className="mb-6 text-xl font-bold text-cyan-400">
        Network Traffic Mbps
      </h2>



      <div className="h-72">


        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={traffic}>


            <XAxis dataKey="time" />


            <YAxis />


            <Tooltip />



            <Line
              type="monotone"
              dataKey="download"
              strokeWidth={3}
              dot={false}
            />


            <Line
              type="monotone"
              dataKey="upload"
              strokeWidth={3}
              dot={false}
            />


          </LineChart>


        </ResponsiveContainer>


      </div>


    </div>

  );

}