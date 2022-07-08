import React from "react";
import { useDispatch } from "react-redux";

import "../../../styles/scss/cartPage/header.scss";

import { ReactComponent as IconShoppingCart } from "../../../img/cartPage/icons/shopping-cart.svg";
import { ReactComponent as IconTrash } from "../../../img/cartPage/icons/trash.svg";

import { clearCart } from "../../../redux/actions/cart";

export default React.memo(function Header() {
  const dispatch = useDispatch();

  function handleClick() {
    if (window.confirm("Вы хотите очистить корзину?")) dispatch(clearCart());
  }

  return (
    <div className="cart__header">
      <div className="cart__header-label">
        <IconShoppingCart style={{ marginRight: 10 }} />
        Корзина
      </div>
      <button className="cart__header-button" onClick={handleClick}>
        <IconTrash />
        Очистить корзину
      </button>
    </div>
  );
});
