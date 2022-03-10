import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";

import { images } from "../../constants";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid #f191ac;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 50%;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Item = styled.div`
  font-size: 25px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #d3ab9e;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo src={images.logo_transparent} />
        </Center>
        <Right>
          <MenuItem>
            <PhoneIcon sx={{ color: "#f191ac" }} />{" "}
            <p style={{ color: "#f191ac" }}>+33 6 65 12 39 02</p>
          </MenuItem>
          <MenuItem>
            <PersonIcon sx={{ color: "#f191ac" }} />
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} sx={{ color: "#f191ac" }}>
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      <ItemContainer>
        <Item>Products</Item>
        <Item>Gallery</Item>
        <Item>Review</Item>
        <Item>Contact Us</Item>
      </ItemContainer>
    </Container>
  );
};

export default Navbar;
