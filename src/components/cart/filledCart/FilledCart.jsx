import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";

export function FilledCart() {
  return (
    <div className="cart__not-empty">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
