import React from "react";

import "../styles/scss/cart/cart.scss";
import { FilledCart, EmptyCart } from "./index";

export function Cart() {
  return (
    <main className="cart">
      <FilledCart />
      {/*<EmptyCart />*/}
    </main>
  );
}
