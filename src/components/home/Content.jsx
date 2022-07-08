import React from "react";

import "../../styles/scss/homePage/content.scss";

import { ContentList } from "./";

export function Content() {
  return (
    <main className="content">
      <h2 className="content-title">Все пиццы</h2>
      <ContentList />
    </main>
  );
}
