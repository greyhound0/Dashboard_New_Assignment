import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const Layout = () => {
  return (
    <Container>
      <Sidebar />

      <MainContent>
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      </MainContent>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

export default Layout;
