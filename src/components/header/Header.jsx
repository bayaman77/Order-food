import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import BasketButton from "./BasketButton";

const Header = () => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 21px 120px;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
`;
