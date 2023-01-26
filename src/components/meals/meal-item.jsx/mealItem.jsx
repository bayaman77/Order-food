import styled from "styled-components";

import MealItemForm from "./MealItemForm";

const MealItem =  ({meal})=>{
    return (
      <Container>
        <StyledItemInfo>
          <StyledTitle>{meal.title}</StyledTitle>
          <p>{meal.description}</p>
          <span>${meal.price}</span>
        </StyledItemInfo>
        <MealItemForm id={"amount" + Math.random().toString()}/>
      </Container>
    );
}

export default MealItem;

const Container = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 20px;
  :last-child(2) {
    border: none;
    margin: 0;
  }
`;

const StyledItemInfo = styled.div`
  margin-bottom: 20px;
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 54px;
    margin: 0;
    margin-top: 4px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
    margin-top: 4px;
  }
`;

const StyledTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
 margin: 0;
`;