import React from "react";
import styled from "styled-components";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary Caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h2>Oops! Something went wrong.</h2>
          <p>{this.state.error?.message || "An unexpected error occurred."}</p>
        </ErrorContainer>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

const ErrorContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: red;
`;

export default ErrorBoundary;
