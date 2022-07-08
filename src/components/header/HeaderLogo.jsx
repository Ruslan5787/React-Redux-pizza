import React from "react";
import { Link } from "react-router-dom";

import logoPizza from "../../img/logo/logo-pizza.png";

export function HeaderLogo() {
  return (
    <div className="logo">
      <Link to="/" style={{ display: "flex" }}>
        <img className="logo-img" src={logoPizza} alt="" />
      </Link>

      <div className="logo-text">
        <h1 className="logo-text__title">REACT PIZZA</h1>
        <div className="logo-text__subtitle">
          вкусная пицца во всей вселенной
        </div>
      </div>
    </div>
  );
}
