import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onClose }) => {
  const { items } = useContext(BasketContext);

  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum += price * amount, 0);
  };

  return (
    <Modal onClose={onClose}>
      <Content>
        {items.length ? (
          <FixedHeigthContainer>
            {items.map((item) => (
              <BasketItem
                title={item.title}
                price={item.price}
                amount={item.amount}
                id={item.id}
                key={item.id}
              />
            ))}
          </FixedHeigthContainer>
        ) : null}
        <TotalAmount price={getTotalPrice()} onClose={onClose} />
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedHeigthContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
  margin-bottom: 30px;
`;
