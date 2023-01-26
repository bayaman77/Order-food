import styled from "styled-components";
import MealItem from "./meal-item.jsx/mealItem";


const DUMMY_MEALS = [
  {
    id: "1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.51,
  },
  {
    id:"3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];


const Meals = () => {
  return (
    <Card>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return<MealItem meal={meal} key={meal.id}/>
        })}
      </ul>
    </Card>
  );
};

export default Meals;


const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 75%;
  margin: 230px auto;
  padding: 40px 40px 16px 40px;
 
 
`;