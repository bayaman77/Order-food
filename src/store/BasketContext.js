import { createContext, useState } from "react";

export const BasketContext = createContext({
  item: [],
});

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToBasket = (newItem) => {
    setItems((prevState) => {
      const doesItemExist = prevState.find(
        (oldItem) => oldItem.id === newItem.id
      );

      if(!doesItemExist) {
        return [...prevState, newItem]
      }

      const updatedItems = prevState.map((oldItem) => {
        if(oldItem.id === newItem.id) {
            oldItem.amount += newItem.amount
        }
        return oldItem
      })

      return updatedItems
    });
  }

  const increment = (id) => {
    setItems((prevState) => {
      const updatedItems = prevState.map((item) => {
        if(item.id === id){
          item.amount++
        }
        return item
      })
      return updatedItems
    })
  }

  const decrement = (id) => {
    setItems((prevState) => {
      let updatedItems = prevState.map((item) => {
        if(item.id === id && item.amount > 0){
          item.amount--
        }
        return item
      })
      updatedItems = updatedItems.filter((meal) => meal.amount > 0)
      return updatedItems
    })
  }

  const state = {
    items,
    addToBasket,
    increment,
    decrement
  };

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
