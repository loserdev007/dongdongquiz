import "./Statistic.css";
import {
   LineChart,
   Line,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
} from "recharts";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistic = () => {
   const data = useLoaderData().data;
   console.log(data);
   // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
   const chartData = [];
   data.forEach((element) => {
      chartData.push({
         name: element.name,
         Questions: element.total,
      });
   });
   return (
      <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
         <LineChart
            width={400}
            height={200}
            data={chartData}
         >
            <Line type="monotone" dataKey="Questions" stroke="#807aff" />
            <CartesianGrid stroke="#e1e1e1" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
         </LineChart>
      </div>
   );
};

export default Statistic;
