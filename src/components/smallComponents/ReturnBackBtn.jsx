import React from "react";

import { arrowIcon } from "../../pages";

export function ReturnBackBtn() {
  return (
    <button className="main-button cart__footer-btn">
      <img src={arrowIcon} alt="" />
      Вернуться назад
    </button>
  );
}
