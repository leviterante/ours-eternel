import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";

import { images } from "../../constants";

const Container = styled.div`
  display: flex;
  background-color: #fae1dd;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ours Eternel®</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse interdum consectetur libero id faucibus nisl. Varius duis
          at consectetur lorem.
        </Description>
        <SocialContainer>
          <SocialIcon color="#3b5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="#e60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Products</ListItem>
          <ListItem>Gallery</ListItem>
          <ListItem>Reviews</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlists</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>

      <Right>
        <Title></Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          234 Boulevard Voltaire, Paris 75011, France
        </ContactItem>
        <ContactItem>
          <PhoneIphoneIcon style={{ marginRight: "10px" }} />
          +33 6 65 12 39 02
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} />
          contact@ours-eternel.dev
        </ContactItem>
        <Payment src={images.payment} />
      </Right>
    </Container>
  );
};

export default Footer;
