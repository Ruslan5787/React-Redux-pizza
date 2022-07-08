import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadingPizzaItem, PizzaItem } from "./";
import { fetchPizzas } from "../../redux/actions/pizzas";

export function ContentList() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { sortBy, category } = useSelector(({ filters }) => filters);
  const pizzaItemsInCart = useSelector(({ cart }) => cart.items);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const pizzaItemsList = items.map((pizza) => (
    <PizzaItem
      key={pizza.id}
      {...pizza}
      addPizzaToCart={dispatch}
      pizzaItemsInCartAboutId={pizzaItemsInCart[pizza.id]}
    />
  ));

  const loadingPizzaItemsList = Array(4)
    .fill(0)
    .map(() => <LoadingPizzaItem key={Math.random()} />);

  return (
    <div className="content-list">
      {isLoaded ? pizzaItemsList : loadingPizzaItemsList}
    </div>
  );
}
