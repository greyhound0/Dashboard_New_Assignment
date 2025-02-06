import { Bar } from "react-chartjs-2";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Comparison = () => {
  const fullData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "This Year",
        data: [
          6000, 2000, 40000, 21000, 9200, 8700, 14000, 18000, 24000, 30000,
          25000, 22000,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
      },
      {
        label: "Last Year",
        data: [
          5000, 10000, 20000, 32000, 12000, 13000, 10000, 14000, 20000, 28000,
          24000, 21000,
        ],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const [dataRange, setDataRange] = useState("6 months");

  const filteredData = {
    labels:
      dataRange === "6 months" ? fullData.labels.slice(0, 6) : fullData.labels,
    datasets: fullData.datasets.map((dataset) => ({
      ...dataset,
      data: dataRange === "6 months" ? dataset.data.slice(0, 6) : dataset.data,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Comparison",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value / 1000}k`,
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
      <Header>
        <h3>Comparison</h3>
        <Select
          value={dataRange}
          onChange={(e) => setDataRange(e.target.value)}
        >
          <option value="6 months">6 months</option>
          <option value="12 months">12 months</option>
        </Select>
      </Header>
      <Bar data={filteredData} options={options} />
    </div>
  );
};

import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default Comparison;
