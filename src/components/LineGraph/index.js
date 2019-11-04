import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Loading } from "../index";
import { loadavg } from "os";

export default ({ data }) => {
  const formatDate = date => {
    var year = date.substring(0, 4);
    var month = date.substring(4, 6);
    var day = date.substring(6, 8);

    return `${day}-${month}-${year}`;
  };
  const format = data.map(row => ({
    date: formatDate(row[0]),
    points: row[3]
  }));
  return (
    <LineChart
      width={500}
      height={300}
      data={format}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="points"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      {/* <Line type="monotone" dataKey="tourniments" stroke="#82ca9d" /> */}
    </LineChart>
  );
};
