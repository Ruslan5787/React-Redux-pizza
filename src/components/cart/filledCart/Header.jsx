import React from "react";

import { shoppingCartIcon, trashIcon } from "../../../pages";

export function Header() {
  return (
    <div className="cart__header">
      <div className="cart__header-label">
        <img className="cart__header-label-img" src={shoppingCartIcon} alt="" />
        Корзина
      </div>
      <button className="cart__header-button">
        <img className="cart__header-button-img" src={trashIcon} alt="" />
        Очистить корзину
      </button>
    </div>
  );
}
