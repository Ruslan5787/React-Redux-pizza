import React from "react";

import "../../styles/scss/home/content.scss";
import { PizzaItem } from "./pizzaItem/PizzaItem";

export function Content(props) {
  const { pizzas } = props;
  const listPizzas = pizzas.map((pizza) => (
    <PizzaItem key={pizza.id} {...pizza} />
  ));

  return (
    <main className="content">
      <h2 className="content-title">Все пиццы</h2>
      <div className="content-list">{listPizzas}</div>
    </main>
  );
}
