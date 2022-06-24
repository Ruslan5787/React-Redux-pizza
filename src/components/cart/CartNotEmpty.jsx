import React from "react";
import { Link } from "react-router-dom";

import {
  plusIcon,
  pizza1,
  pizza2,
  pizza3,
  trashIcon,
  minusIcon,
  deleteIcon,
  arrowIcon,
  shoppingCartIcon,
} from "../../pages";

export function CartNotEmpty() {
  return (
    <div className="cart__not-empty">
      <div className="cart__header">
        <div className="cart__header-label">
          <img
            className="cart__header-label-img"
            src={shoppingCartIcon}
            alt=""
          />
          Корзина
        </div>
        <button className="cart__header-button">
          <img className="cart__header-button-img" src={trashIcon} alt="" />
          Очистить корзину
        </button>
      </div>

      <div className="cart__content">
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
              <button className="cart__item-plus">
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
        <div className="cart__content-item cart__item">
          <div className="cart__item-info">
            <img className="cart__item-img" src={pizza2} alt="" />
            <div className="cart__item-info-text">
              <h4 className="cart__item-title">Креветки по-азиатски</h4>
              <span className="cart__item-subtitle">толстое тесто, 40 см.</span>
            </div>
          </div>
          <div className="cart__item-right">
            <div className="cart__item-counter">
              <button className="cart__item-plus">
                <img src={minusIcon} alt="" />
              </button>
              <span className="cart__item-counter-number">1</span>
              <button className="cart__item-plus">
                <img src={plusIcon} alt="" />
              </button>
            </div>
            <span className="cart__item-price">290 ₽</span>
            <button className="cart__item-delete">
              <img src={deleteIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="cart__content-item cart__item">
          <div className="cart__item-info">
            <img className="cart__item-img" src={pizza3} alt="" />
            <div className="cart__item-info-text">
              <h4 className="cart__item-title">Чизбургер-пицца</h4>
              <span className="cart__item-subtitle">тонкое тесто, 30 см.</span>
            </div>
          </div>
          <div className="cart__item-right">
            <div className="cart__item-counter">
              <button className="cart__item-plus">
                <img src={minusIcon} alt="" />
              </button>
              <span className="cart__item-counter-number">3</span>
              <button className="cart__item-plus">
                <img src={plusIcon} alt="" />
              </button>
            </div>
            <span className="cart__item-price">350 ₽</span>
            <button className="cart__item-delete">
              <img src={deleteIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="cart__footer">
        <div className="cart__footer-top">
          <div className="cart__footer-counter">
            Всего пицц: <b>3 шт</b>
          </div>
          <div className="cart__footer-price">
            Сумма заказа: <span>900 ₽</span>
          </div>
        </div>
        <div className="cart__footer-bottom">
          <Link to="/">
            <button className="main-button cart__footer-btn">
              <img src={arrowIcon} alt="" />
              Вернуться назад
            </button>
          </Link>
          <button className="main-button">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
}
