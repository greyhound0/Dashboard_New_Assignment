import { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { fetchData } from "../../services/api";

const Score = () => {
  const [scoreData, setScoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("http://3.111.196.92:8020/api/v1/sample_assignment_api_3/")
      .then((response) => {
        setScoreData(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching score data:", err);
        setError("Failed to fetch score data");
        setLoading(false);
      });
  }, []);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error}</Container>;

  const score = scoreData?.score || 0;
  const maxScore = 100;

  return (
    <Container>
      <ProgressWrapper>
        <CircularProgressbar
          value={score}
          maxValue={maxScore}
          text={`${score}`}
          styles={buildStyles({
            textColor: "#000",
            pathColor: "#007bff",
            trailColor: "#e6e6e6",
          })}
        />
        <ScoreText>of {maxScore} points</ScoreText>
      </ProgressWrapper>
      <Description>
        <FeedbackText>You are good!</FeedbackText>
        <SubText>
          Your sales performance score is better than 80% of other users.
        </SubText>
      </Description>
      <ActionButton>Improve your score</ActionButton>
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

const ProgressWrapper = styled.div`
  position: relative;
  width: 150px;
  margin: 0 auto;
`;

const ScoreText = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

const Description = styled.div`
  margin: 20px 0;
`;

const FeedbackText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: green;
`;

const SubText = styled.div`
  font-size: 14px;
  color: #555;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #0056b3;
  }
`;

export default Score;
