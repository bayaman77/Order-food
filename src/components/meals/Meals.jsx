import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAPI } from "../../lib/fetchApi";
import MealItem from "./meal-item.jsx/MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true)

  const getMeals = async () => {
    try {
      setLoading(false)

      const response = await fetchAPI("foods");

      setMeals(response.data);
    } catch (error) {
      console.log(error);
      setError("Failed to load meals");
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <Card>
      {isLoading && !error && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul>
        {meals.map((meal) => {
          return <MealItem meal={meal} key={meal._id} />;
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
