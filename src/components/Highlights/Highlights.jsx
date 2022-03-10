import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Product from "../Products/Product/Product";

const theme = createTheme({
  palette: {
    pink: {
      main: "#f191ac",
      contrastText: "#fff",
    },
  },
});

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Title = styled.h2``;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const Highlights = ({ products }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>Highlights</Title>
      </TitleContainer>
      <ProductContainer>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ProductContainer>
      <ButtonContainer>
        <ThemeProvider theme={theme}>
          <Button color="pink" variant="contained">
            View All
          </Button>
        </ThemeProvider>
      </ButtonContainer>
    </Container>
  );
};

export default Highlights;
