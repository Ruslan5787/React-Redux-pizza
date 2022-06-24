import React from "react";
import { Link } from "react-router-dom";

import smailBadMood from "../../img/cartPage/smails/smail-bad-mood.jpg";
import manWithCart from "../../img/cartPage/picture/man-with-shopping-cart.svg";

export function CartEmpty() {
  return (
    <div className="cart__empty">
      <h3 className="cart__empty-title">
        Корзина пустая
        <img className="cart__empty-smail" src={smailBadMood} alt="" />
      </h3>
      <p className="cart__empty-text">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img className="cart__empty-main-img" src={manWithCart} alt="" />
      <div className="cart__empty-btn--wrapper">
        <Link to="/" className="main-button cart__empty-btn">
          Вернуться назад
        </Link>
      </div>
    </div>
  );
}
