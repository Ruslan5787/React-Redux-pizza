import React from "react";
import { useSelector } from "react-redux";

import "../../styles/scss/main.scss";

import { Link } from "react-router-dom";

export function ShoppingCartBtn() {
  const { totalPrice, itemsCount } = useSelector(({ cart }) => cart);

  return (
    <Link to="/cart">
      <button className="main-button shopping-cart">
        <span className="shopping-cart-price">{totalPrice} ₽</span>
        <span className="shopping-cart-amount">{itemsCount}</span>
      </button>
    </Link>
  );
}
