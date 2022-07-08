import React from "react";

import { ContentList, Footer, Header } from "./";

export function FilledCart() {
  return (
    <div className="cart__not-empty">
      <Header />
      <ContentList />
      <Footer />
    </div>
  );
}
