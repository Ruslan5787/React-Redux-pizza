import React from "react";

import "./styles/scss/main.scss";

import { Header, CategoriesMenu, Content } from "./components";

export function App() {
  return (
    <div className="main">
      <div className="container">
        <Header />
        <CategoriesMenu />
        <Content />
      </div>
    </div>
  );
}
