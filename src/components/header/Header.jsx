import React from "react";

import "../../styles/scss/home/header.scss";
import { Logo, ShoppingCartBtn } from "./index";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <ShoppingCartBtn />
    </header>
  );
}
