import React from "react";
import { ReactComponent as IconArrowLeft } from "../../img/cartPage/icons/arrow-left.svg";

export function ReturnBackBtn() {
  return (
    <button className="main-button cart__footer-btn">
      <IconArrowLeft />
      Вернуться назад
    </button>
  );
}
