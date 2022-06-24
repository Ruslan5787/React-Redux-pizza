import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadingPizzaItem, PizzaItem } from "./";
import { fetchPizzas } from "../../redux/actions/pizzas";

export function ContentList() {
  const dispatch = useDispatch();
  const pizzasItems = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const listPizzas = pizzasItems.map((pizza) => (
    <PizzaItem key={pizza.id} {...pizza} addPizzaToCart={dispatch} />
  ));

  return (
    <div className="content-list">
      {isLoaded
        ? listPizzas
        : Array(8)
            .fill(0)
            .map(() => <LoadingPizzaItem key={Math.random()} />)}
    </div>
  );
}
