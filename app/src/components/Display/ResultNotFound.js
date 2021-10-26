import React from "react";
import styled from "styled-components";

//@Custom styled components
const Container = styled.div`
  display: block;
  margin: auto;
  text-align: center;

  p {
    font-size: 20px;
    font-weight: 700;
  }
  span {
    font-size: 20px;
  }
`;

/**
 * Displays a results not found component.
 */
const ResultNotFound = () => {
  return (
    <Container>
      <p>
        Details Not Found <span>&#128532;</span>
      </p>
    </Container>
  );
};

export default ResultNotFound;
