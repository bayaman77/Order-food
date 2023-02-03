import { createContext, useEffect, useState } from "react";
import { fetchAPI } from "../lib/fetchApi";

export const BasketContext = createContext({
  item: [],
});

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getBasket = async () => {
    try {
      const { data } = await fetchAPI("basket");

      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBasket();
  }, []);

  const addToBasket = async (newItem) => {
    try {
      const response = await fetchAPI(`foods/${newItem.id}/addToBasket`, {
        method: "POST",
        body: { amount: newItem.amount },
      });

      setItems(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBasketitem = async ({ id, amount }) => {
    try {
      const { data } = await fetchAPI(`basketitem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });

      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBasketitem = async (id) => {
    try {
      const { data } = await fetchAPI(`basketitem/${id}/delete`, {
        method: "DELETE"
      });

      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  

  // const increment = (id) => {
  //   setItems((prevState) => {
  //     const updatedItems = prevState.map((item) => {
  //       if (item.id === id) {
  //         item.amount++;
  //       }
  //       return item;
  //     });
  //     return updatedItems;
  //   });
  // };

  // const decrement = (id) => {
  //   setItems((prevState) => {
  //     let updatedItems = prevState.map((item) => {
  //       if (item.id === id && item.amount > 0) {
  //         item.amount--;
  //       }
  //       return item;
  //     });
  //     updatedItems = updatedItems.filter((meal) => meal.amount > 0);
  //     return updatedItems;
  //   });
  // };

  const state = {
    items,
    addToBasket,
    updateBasketitem,
    deleteBasketitem
  };

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
