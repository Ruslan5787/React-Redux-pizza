import React from "react";

import "../../styles/scss/header.scss";
import { Logo, ShoppingCart } from "./index";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <ShoppingCart />
    </header>
  );
}
