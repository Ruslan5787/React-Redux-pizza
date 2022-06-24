import React from "react";

import { deleteIcon, minusIcon, pizza1, plusIcon } from "../../../pages";

export function CartItem() {
  return (
    <div className="cart__content-item cart__item">
      <div className="cart__item-info">
        <img className="cart__item-img" src={pizza1} alt="" />
        <div className="cart__item-info-text">
          <h4 className="cart__item-title">Сырный цыпленок</h4>
          <span className="cart__item-subtitle">тонкое тесто, 26 см.</span>
        </div>
      </div>
      <div className="cart__item-right">
        <div className="cart__item-counter">
          <button className="cart__item-btn">
            <img src={minusIcon} alt="" />
          </button>
          <span className="cart__item-counter-number">2</span>
          <button className="cart__item-plus">
            <img src={plusIcon} alt="" />
          </button>
        </div>
        <span className="cart__item-price">770 ₽ </span>
        <button className="cart__item-delete">
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
