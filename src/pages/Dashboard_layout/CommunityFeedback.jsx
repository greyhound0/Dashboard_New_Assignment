import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "../../services/api";

const CommunityFeedback = () => {
  const [feedbackData, setFeedbackData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("http://3.111.196.92:8020/api/v1/sample_assignment_api_5/")
      .then((response) => {
        setFeedbackData(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching community feedback data:", err);
        setError("Failed to fetch community feedback data");
        setLoading(false);
      });
  }, []);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error}</Container>;
  if (!feedbackData)
    return <Container>No data available for community feedback</Container>;

  const { negative, neutral, positive } = feedbackData;
  const total = negative + neutral + positive;

  return (
    <Container>
      <Header>Community Feedback</Header>
      <Title>
        {positive > neutral && positive > negative
          ? "Mostly Positive"
          : neutral > positive
          ? "Mostly Neutral"
          : "Mixed Feedback"}
      </Title>
      <BarContainer>
        <BarSegment
          color="#f44336"
          width={`${(negative / total) * 100}%`}
        ></BarSegment>
        <BarSegment
          color="#ff9800"
          width={`${(neutral / total) * 100}%`}
        ></BarSegment>
        <BarSegment
          color="#4caf50"
          width={`${(positive / total) * 100}%`}
        ></BarSegment>
      </BarContainer>
      <Statistics>
        <Stat>
          <ColorIndicator color="#f44336" />
          <div>
            <StatTitle>Negative</StatTitle>
            <StatValue>{negative}</StatValue>
          </div>
        </Stat>
        <Stat>
          <ColorIndicator color="#ff9800" />
          <div>
            <StatTitle>Neutral</StatTitle>
            <StatValue>{neutral}</StatValue>
          </div>
        </Stat>
        <Stat>
          <ColorIndicator color="#4caf50" />
          <div>
            <StatTitle>Positive</StatTitle>
            <StatValue>{positive}</StatValue>
          </div>
        </Stat>
      </Statistics>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 400px;
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

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #555;
`;

const BarContainer = styled.div`
  display: flex;
  height: 15px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #e0e0e0;
  margin-bottom: 20px;
`;

const BarSegment = styled.div`
  height: 100%;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
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

export default CommunityFeedback;
