import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./cartItem/CartItem";

export function ContentList() {
  const pizzaItemsInCart = useSelector(({ cart }) => cart.items);
  const pizzaItemsKeys = Object.keys(pizzaItemsInCart);
  const pizzaItemsInCartList = pizzaItemsKeys.map((key) => {
    return pizzaItemsInCart[key].list[0];
  });

  const pizzaItemsInCartListComponents = pizzaItemsInCartList.map(
    (pizzaItem) => {
      return <CartItem key={Math.random()} {...pizzaItem} />;
    }
  );

  return <div className="cart__content">{pizzaItemsInCartListComponents}</div>;
}
