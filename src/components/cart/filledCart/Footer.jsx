import React from "react";
import {Link} from "react-router-dom";

import {ReturnBackBtn} from "../../smallComponents/ReturnBackBtn";
import {useSelector} from "react-redux";

export function Footer() {
  const {itemsCount, totalPrice} = useSelector(({cart}) => cart);

  return (
    <div className="cart__footer">
      <div className="cart__footer-top">
        <div className="cart__footer-counter">
          Всего пицц: <b>{itemsCount} шт</b>
        </div>
        <div className="cart__footer-price">
          Сумма заказа: <span>{totalPrice} ₽</span>
        </div>
      </div>
      <div className="cart__footer-bottom">
        <Link to="/">
          <ReturnBackBtn />
        </Link>
        <button className="main-button">Оплатить сейчас</button>
      </div>
    </div>
  );
}
