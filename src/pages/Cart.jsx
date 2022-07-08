import React from "react";
import { useSelector } from "react-redux";

import "../styles/scss/cartPage/cart.scss";

import { EmptyCart, FilledCart } from "./index";

export function Cart() {
  const cartTotalPrice = useSelector(({ cart }) => cart.totalPrice);

  return (
    <main className="cart">
      {cartTotalPrice ? <FilledCart /> : <EmptyCart />}
    </main>
  );
}
