import { useEffect, useState } from "react";
import styled from "styled-components";

import { fetchData } from "../../services/api";

const Finance = () => {
  const [financeData, setFinanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("http://3.111.196.92:8020/api/v1/sample_assignment_api_1/")
      .then((response) => {
        setFinanceData(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch finance data");
        setLoading(false);
      });
  }, []);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error}</Container>;

  return (
    <Container>
      <Header>
        <h2>Dashboard</h2>
        <CompareDropdown>
          Compare to: <span>Last year</span>
        </CompareDropdown>
      </Header>
      <Cards>
        <Card>
          <CardTitle>Purchases</CardTitle>
          <CardValue>{financeData.purchases.toLocaleString()}</CardValue>
          <CardChange positive={true}>{financeData.purchases}</CardChange>
        </Card>
        <Card>
          <CardTitle>Revenue</CardTitle>
          <CardValue>
            ${Math.round(financeData.revenue / 1000).toLocaleString()}k
          </CardValue>
          <CardChange positive={true}>{financeData.revenue}</CardChange>
        </Card>
        <Card>
          <CardTitle>Refunds</CardTitle>
          <CardValue>
            ${Math.round(financeData.refunds / 1000).toLocaleString()}k
          </CardValue>
          <CardChange positive={false}>{financeData.refunds}</CardChange>
        </Card>
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const CompareDropdown = styled.div`
  font-size: 16px;
  span {
    font-weight: bold;
    cursor: pointer;
    color: #007bff;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Card = styled.div`
  flex: 1;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const CardValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const CardChange = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => (props.positive ? "green" : "red")};
`;

export default Finance;
