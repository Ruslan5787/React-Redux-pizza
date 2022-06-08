import React from "react";

import pizzaItem from "../img/pizza-1.png";
import "../styles/scss/content.scss";

export function Content() {
  return (
    <main className="content">
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
    </main>
  );
}
