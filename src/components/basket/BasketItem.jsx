import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const BasketItem = ({ title, price, amount, increment, decrement }) => {

  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${price}</Price>
          <Amount>X{amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <Button
            borderStyle="sqaured"
            variant="outlined"
            onClick={decrement}
          >
            -
          </Button>
          <Button
            borderStyle="sqaured"
            variant="outlined"
            onClick={increment}
          >
            +
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
};

export default BasketItem;

const Container = styled.div`
  padding: 24px 0;
  width: 95%;
  border-bottom: 1px solid gray;
`;
const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin-bottom: 12px;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
`;

const Amount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  display: block;
  padding: 6px 14px;
`;

const PriceAndAmountContainer = styled.div`
  width: 153px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
