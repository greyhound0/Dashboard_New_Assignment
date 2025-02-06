// import React from "react";
import styled from "styled-components";
import Finance from "./Finance"; // Component 1
import Comparison from "./Comparison"; // Component 2
import Score from "./Score"; // Component 4
import CustomersByDevice from "./CustomersByDevice"; // Component 5
import TopProduct from "./TopProduct"; // Component 3
import Community from "./CommunityFeedback"; //Component 6

const Dashboard = () => {
  return (
    <Container>
      <MainContent>
        <Section>
          <Finance />
        </Section>
        <Section>
          <Comparison />
        </Section>
        <Section>
          <TopProduct />
        </Section>
      </MainContent>
      <Sidebar>
        <Score />
        <CustomersByDevice />
        <Community />
      </Sidebar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  background: #f9f9f9;
`;

const MainContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Dashboard;
