import React from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = () => {
  const DUMMY_MEALS = [
    {
      id: "1",
      title: "Sushi",
      price: 22.99,
      amount: 1,
    },
    {
      id: "2",
      title: "Schnitzel",
      price: 16.51,
      amount: 1,
    },
    {
      id: "3",
      title: "Barbecue Burger",
      price: 12.99,
      amount: 1,
    },
    {
      id: "4",
      title: "Green Bowl",
      price: 19.99,
      amount: 1,
    },
  ];
  return (
    <Modal onClose={() => {}}>
      <Content>
        {DUMMY_MEALS.length ? (
          <FixedHeigthContainer>
            {DUMMY_MEALS.map((item) => (
              <BasketItem
                title={item.title}
                price={item.price}
                amount={item.amount}
                key={item.id}
              />
            ))}
          </FixedHeigthContainer>
        ) : null}
        <TotalAmount price={200.5034} onClose={() => {}} />
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
