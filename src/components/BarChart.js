import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChart = ({ data }) => {
  const formatDate = (date) => {
    var year = date.substring(0, 4);
    var month = date.substring(4, 6);
    var day = date.substring(6, 8);

    return `${day}-${month}-${year}`;
  };
  const format = data.map((row) => ({
    date: formatDate(row[0]),
    tourniments: row[4],
  }));
  return (
    <BarChart
      width={500}
      height={300}
      data={format}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="tourniments" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChart;
