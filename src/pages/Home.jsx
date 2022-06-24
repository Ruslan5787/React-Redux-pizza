import React, { useEffect, useState } from "react";
import { CategoriesMenu, Content } from "../components/main";

import "../styles/scss/cart/cart.scss";

export function Home() {
  const [pizzaItems, setPizzaItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/database.json")
      .then((response) => response.json())
      .then((json) => {
        setPizzaItems(json.pizzas);
      });
  }, []);

  return (
    <>
      <CategoriesMenu />
      <Content pizzas={pizzaItems} />
    </>
  );
}
