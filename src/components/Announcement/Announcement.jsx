import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fec5bb;

  height: 2.5rem;
`;

const Announcement = () => {
  return <Container>Super Deal!!! Free shipping on orders over $50</Container>;
};

export default Announcement;
