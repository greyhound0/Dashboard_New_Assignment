import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "../../services/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CustomersByDevice = () => {
  const [deviceData, setDeviceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("http://3.111.196.92:8020/api/v1/sample_assignment_api_4/")
      .then((response = []) => {
        const byHour = response.map((item) => ({
          ...item,
          hour: new Date(item.date2).getHours(),
        }));
        const grouped = byHour.reduce((acc, curr) => {
          if (!acc[curr.hour]) {
            acc[curr.hour] = [];
          }

          acc[curr.hour].push(curr);

          return acc;
        }, {});

        const chartData = [];
        for (let key in grouped) {
          let currentUnique = 0;
          let currentCumulative = 0;

          grouped[key]?.forEach((item) => {
            currentUnique += item.unique_count;
            currentCumulative += item.cumulative_tweets;
          });

          chartData.push({
            hour: key,
            unique: currentUnique,
            cumulative: currentCumulative,
          });
        }
        setDeviceData(chartData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (loading) return <Container>Loading...</Container>;

  console.log("deviceData", deviceData);

  const chartData = {
    labels: deviceData.map((item) => item.hour),
    datasets: [
      {
        label: "Cumulative",
        data: deviceData.map((item) => item.cumulative),
        borderColor: "rgba(54, 162, 235, 0.8)",
        backgroundColor: "rgba(54, 162, 235, 0.3)",
        tension: 0.4,
      },
      {
        label: "Unique",
        data: deviceData.map((item) => item.unique),
        borderColor: "rgba(75, 192, 192, 0.8)",
        backgroundColor: "rgba(75, 192, 192, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Customers by Device",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container>
      <Header>Customers by Device</Header>
      <ChartContainer>
        <Line data={chartData} options={chartOptions} />
      </ChartContainer>
      <Statistics>
        <Stat>
          <ColorIndicator color="rgba(54, 162, 235, 0.8)" />
          <div>
            <StatTitle>Cumulative</StatTitle>
            <StatValue>1304%</StatValue>
          </div>
        </Stat>
        <Stat>
          <ColorIndicator color="rgba(75, 192, 192, 0.8)" />
          <div>
            <StatTitle>Unique</StatTitle>
            <StatValue>473%</StatValue>
          </div>
        </Stat>
      </Statistics>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ChartContainer = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Statistics = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: left;
  }
`;

const ColorIndicator = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const StatTitle = styled.div`
  font-size: 14px;
  color: #555;
`;

const StatValue = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export default CustomersByDevice;
