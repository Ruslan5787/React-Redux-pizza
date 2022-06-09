import React from "react";

import "../../styles/scss/main.scss";
import { Link } from "react-router-dom";

export function ShoppingCartBtn() {
  return (
    <Link to="/cart">
      <button className="main-button shopping-cart">
        <span className="shopping-cart-price">520 ₽</span>
        <span className="shopping-cart-amount">3</span>
      </button>
    </Link>
  );
}
