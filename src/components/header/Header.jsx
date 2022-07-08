import React from "react";

import "../../styles/scss/homePage/header.scss";
import { HeaderLogo, ShoppingCartBtn } from "./index";

export function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <ShoppingCartBtn />
    </header>
  );
}
