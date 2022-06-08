import React, { useEffect, useState } from "react";

import arrowDown from "../../img/icons/arrow.svg";

import "../../styles/scss/smallComponents.scss";
import { Modal } from "../smallComponents/Modal";

export function Sorting() {
  const itemsModal = ["популярности", "по цене"];
  const [isModalActive, setModalActive] = useState(false);

  const handleClickSorting = () => {
    setModalActive(!isModalActive);
  };

  const handleOutsideClick = (event) => {
    console.log(event);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="categories-menu__right">
      <div className="sorting" onClick={handleClickSorting}>
        <img className="sorting-img" src={arrowDown} alt="" />
        <b className="sorting-text">Сортировка по:</b>
        <span className="sorting-options">популярности</span>
      </div>
      <Modal items={itemsModal} isModalActive={isModalActive} />
    </div>
  );
}
