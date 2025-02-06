import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FiSettings,
  FiUsers,
  FiGrid,
  FiActivity,
  FiLayers,
  FiZap,
  FiUser,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoIcon />
        <LogoText>Salesway</LogoText>
      </LogoContainer>
      <NavSection>
        <SectionTitle>Settings</SectionTitle>
        <NavItem>
          <FiSettings />
          <Link to="/settings">Settings</Link>
        </NavItem>
        <NavItem>
          <FiUsers />
          <Link to="/team">Team</Link>
        </NavItem>
      </NavSection>
      <NavSection>
        <SectionTitle>Menu</SectionTitle>
        <NavItem active>
          <FiGrid />
          <Link to="/dashboard">Dashboard</Link>
        </NavItem>
        <NavItem>
          <FiActivity />
          <Link to="/campaigns">Campaigns</Link>
        </NavItem>
        <NavItem>
          <FiLayers />
          <Link to="/flows">Flows</Link>
        </NavItem>
        <NavItem>
          <FiZap />
          <Link to="/integrations">Integrations</Link>
        </NavItem>
        <NavItem>
          <FiUser />
          <Link to="/customers">Customers</Link>
        </NavItem>
      </NavSection>
      <ProfileSection>
        <ProfileImage src="https://via.placeholder.com/40" alt="Profile" />
        <ProfileName>Tom Wang</ProfileName>
      </ProfileSection>
    </SidebarContainer>
  );
};

// Styled Components
const SidebarContainer = styled.div`
  width: 260px;
  height: 100vh;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const LogoIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #007bff;
  border-radius: 50%;
  margin-right: 10px;
`;

const LogoText = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const NavSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  color: #888;
  margin-bottom: 10px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  margin-bottom: 10px;
  background: ${(props) => (props.active ? "#007bff" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? "#0056b3" : "#e0e0e0")};
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
  }

  svg {
    font-size: 16px;
  }
`;

const ProfileSection = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ProfileName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export default Sidebar;
