import React from "react";

import logoPizza from "../../img/logo/logo-pizza.png";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <button>
          <img className="logo-img" src={logoPizza} alt="" />
        </button>
      </Link>

      <div className="logo-text">
        <h1 className="logo-text__title">REACT PIZZA</h1>
        <div className="logo-text__subtitle">
          самая вкусная пицца во вселенной
        </div>
      </div>
    </div>
  );
}
