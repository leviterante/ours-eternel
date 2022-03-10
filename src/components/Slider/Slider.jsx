import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { images } from "../../constants";

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
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
  font-size: 0px;
`;

const ImageContainer = styled.div`
  height: 50rem;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Hero = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 1rem;
  color: white;
`;

const Description = styled.p`
  font-size: 30px;
  margin-bottom: 1rem;
  color: white;
`;

const TextContainer = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: black;
`;

const Text = styled.h1`
  font-size: 40px;
  color: #d3ab9e;
`;

const Slider = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={images.slide} />
      </ImageContainer>
      <Hero>
        <Title>Ours Eternel®</Title>
        <Description>
          Bring Elegance & Splendor to Everyday Life with Unique Gifts
        </Description>
        <ThemeProvider theme={theme}>
          <Button color="pink" variant="contained">
            Shop Now
          </Button>
        </ThemeProvider>
      </Hero>
      <TextContainer>
        <Text>
          Real Roses That Last 3 Years, No Water, No Sunlight, Just Beauty.
        </Text>
      </TextContainer>
    </Container>
  );
};

export default Slider;
