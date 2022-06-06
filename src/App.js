import React from "react";
import "./styles/scss/main.css";
import "./styles/scss/header.css";
import "./styles/scss/sorting.css";
import "./styles/scss/content.css";

import logoPizza from "./img/logo/logo-pizza.png";
import arrowDown from "./img/icons/arrow.svg";
import pizzaItem from "./img/pizza-1.png";

export function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <div className="logo">
            <img className="logo-img" src={logoPizza} alt="lo" />
            <div className="logo-text">
              <h1 className="logo-text__title">REACT PIZZA</h1>
              <div className="logo-text__subtitle">
                самая вкусная пицца во вселенной
              </div>
            </div>
          </div>
          <button className="shopping-cart">
            <span className="shopping-cart-price">520 ₽</span>
            <span className="shopping-cart-amount">3</span>
          </button>
        </div>
        <div className="sorting">
          <div className="sorting-types-pizza">
            <button className="sorting-types-pizza-btn sorting-btn--active">
              Все
            </button>
            <button className="sorting-types-pizza-btn">Мясные</button>
            <button className="sorting-types-pizza-btn">Вегетарианская</button>
            <button className="sorting-types-pizza-btn">Гриль</button>
            <button className="sorting-types-pizza-btn">Острые</button>
            <button className="sorting-types-pizza-btn">Закрытые</button>
          </div>
          <div className="sorting-sort">
            <img className="sorting-sort-img" src={arrowDown} alt="" />
            <b className="sorting-sort-text">Сортировка по:</b>
            <span className="sorting-sort-options">популярности</span>
          </div>
          {/*<div class="sorting-modal">*/}
          {/*    <span class="sorting-modal-options sorting-modal-options&#45;&#45;active">популярности</span>*/}
          {/*    <span class="sorting-modal-options">по цене</span>*/}
          {/*</div>*/}
        </div>
        <div className="content">
          <h2 className="content-title">Все пиццы</h2>
          <div className="content-list">
            <div className="content-list__card card">
              <img className="card-img" src={pizzaItem} alt="" />
              <div className="card-bottom">
                <h4 className="card-name">Чизбургер-пицца</h4>
                <div className="card-options">
                  <div className="card-options__pizza">
                    <button className="card-options__btn card-options__btn--active">
                      тонкое
                    </button>
                    <button className="card-options__btn">традиционное</button>
                  </div>
                  <div className="card-options__pizza">
                    <button className="card-options__btn card-options__btn--active">
                      26 см.
                    </button>
                    <button className="card-options__btn">30 см.</button>
                    <button className="card-options__btn">40 см.</button>
                  </div>
                </div>
                <div className="card-options-buy">
                  <div className="card-options-buy__price">от 395 ₽</div>
                  <button className="card-options-buy__add-btn">
                    Добавить<i className="card-options-buy__add-number">2</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
