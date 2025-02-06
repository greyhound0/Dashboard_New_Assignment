import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard_layout/Dashboard";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Team from "./pages/Team";
import Campaigns from "./pages/Campaigns";
import Integrations from "./pages/Integrations";
import Flows from "./pages/Flows";
import Customers from "./pages/Customers";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    Component: Layout,
    ErrorBoundary,

    children: [
      { index: true, element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/settings", element: <Settings /> },
      { path: "/team", element: <Team /> },
      { path: "/campaigns", element: <Campaigns /> },
      { path: "/integrations", element: <Integrations /> },
      { path: "/flows", element: <Flows /> },
      { path: "/customers", element: <Customers /> },
    ],
  },
  { path: "*", element: <Navigate to="/login" /> }, // Redirect unknown routes
]);

export default router;
