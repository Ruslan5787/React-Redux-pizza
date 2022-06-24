import React from "react";

import "../styles/scss/cart/cart.scss";
import { CartNotEmpty, CartEmpty } from "./index";

export function Cart() {
  return (
    <main className="cart">
      {/*<CartEmpty />*/}
      <CartNotEmpty />
    </main>
  );
}
