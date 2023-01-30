import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/basket-icon.svg";

const BasketButton = ({ count, ...rest }) => {
  return (
    <StyledButton {...rest}>
      <BasketIcon />
      <StyledTitle>Your cart</StyledTitle>
      <StyledCount id="counter">{count || 0}</StyledCount>
    </StyledButton>
  );
};

export default BasketButton;

const StyledButton = styled.button`
  background: #5a1f08;
  border-radius: 30px;
  padding: 10px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #2d1106;
    color: lightgray;
  }
  &:hover > #counter{
    background-color: #5e1e04;
    color: lightgray;
  }
`;

const StyledTitle = styled.span`
  margin-right: 24px;
  margin-left: 12px;
`;

const StyledCount = styled.span`
  color: white;
  background: #8A2B06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  padding: 4px 20px;
`;
