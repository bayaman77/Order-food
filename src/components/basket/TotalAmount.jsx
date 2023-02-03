import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const TotalAmount = ({ price, onClose, onOrder }) => {

    const orderBtn = useCallback(() => price > 0 ? <Button onClick={onOrder}>Order</Button> : null,[onOrder, price])
    
    const fixedPrice = useMemo(() => price.toFixed(2), [price]) 
  return (
    <div style={{ paddingTop: 'px'}}>
      <InfoContainer>
        <Label>Total amount</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>

      <ActionButtonsContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {orderBtn()}
      </ActionButtonsContainer>
    </div>
  );
};

export default TotalAmount;

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #222222;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButtonsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
