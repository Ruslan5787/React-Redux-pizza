import React from "react";

import "../styles/scss/cart/cart.scss";
import { CategoriesMenu, Content } from "../components/main";

export function Home() {
  return (
    <>
      <CategoriesMenu />
      <Content />
    </>
  );
}
