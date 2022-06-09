import React, { useRef, useState } from "react";

import arrowDown from "../../img/icons/arrow.svg";

import "../../styles/scss/smallComponents.scss";
import { Modal } from "../smallComponents/Modal";

export function Sorting() {
  const itemsModal = ["популярности", "по цене"];
  const [isModalActive, setModalActive] = useState(false);
  const sortRef = useRef();

  const handleClickSorting = () => {
    setModalActive(!isModalActive);
  };

  return (
    <div className="categories-menu__right" ref={sortRef}>
      <div className="sorting" onClick={handleClickSorting}>
        <img className="sorting-img" src={arrowDown} alt="стрелка вниз" />
        <b className="sorting-text">Сортировка по:</b>
        <span className="sorting-options">популярности</span>
      </div>
      <Modal
        items={itemsModal}
        isModalActive={isModalActive}
        setModalActive={setModalActive}
        sortElem={sortRef}
      />
    </div>
  );
}
