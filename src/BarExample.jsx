import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid,Cell } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const barColors = ["#1f77b4", "#ff7f0e", "#2ca02c"];
export default function BarExample() {
  return (
    <ResponsiveContainer width="100%" height={325}>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <Legend
          width={100}
          wrapperStyle={{ top: 40, right: 20, backgroundColor: "#f5f5f5", border: "1px solid #d5d5d5", borderRadius: 3, lineHeight: "40px" }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      

        <Bar dataKey="uv">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % 3]} />
          ))}
        </Bar>
        <Bar dataKey="pv">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % 3]} />
          ))}
        </Bar>

        {/* <Bar dataKey="uv" fill={barColors} barSize={30} />
        <Bar dataKey="pv" fill={barColors} barSize={30} />
        <Bar dataKey="amt" fill={barColors} barSize={30} /> */}
      </BarChart>



    </ResponsiveContainer>
  );
}
