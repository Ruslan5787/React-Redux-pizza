import React from "react";

import logoPizza from "../../img/logo/logo-pizza.png";

export function Logo() {
  return (
    <div className="logo">
      <img className="logo-img" src={logoPizza} alt="" />
      <div className="logo-text">
        <h1 className="logo-text__title">REACT PIZZA</h1>
        <div className="logo-text__subtitle">
          самая вкусная пицца во вселенной
        </div>
      </div>
    </div>
  );
}
