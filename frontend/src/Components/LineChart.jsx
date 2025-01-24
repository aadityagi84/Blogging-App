import React from "react";
import { RiDownloadCloud2Fill } from "react-icons/ri";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Sample data
const data = [
  { name: "Sunday", orders: 120 },
  { name: "Monday", orders: 250 },
  { name: "Tuesday", orders: 456 },
  { name: "Wednesday", orders: 320 },
  { name: "Thursday", orders: 150 },
  { name: "Friday", orders: 400 },
  { name: "Saturday", orders: 300 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg text-center">
        <p className="text-lg font-semibold">{`${payload[0].value} Order`}</p>
        <p className="text-sm text-gray-400">Oct 18th, 2020</p>
      </div>
    );
  }
  return null;
};

const ChartOrder = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold">Chart Order</h3>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adip
          </p>
        </div>
        <button className="flex items-center text-blue-500 border border-blue-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-700 ">
          <RiDownloadCloud2Fill />
          &nbsp; Save Report
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* Gradient for line shading */}
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3498db" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#3498db" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#666" }}
            tickLine={false}
            axisLine={false}
          />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#3498db"
            strokeWidth={3}
            fill="url(#colorGradient)"
            dot={{ r: 5, fill: "#3498db" }}
            activeDot={{ r: 8, stroke: "#fff", strokeWidth: 2 }}
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartOrder;
