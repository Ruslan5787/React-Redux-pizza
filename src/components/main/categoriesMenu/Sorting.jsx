import React, { useRef, useState } from "react";

import arrowDown from "../../../img/main/icons/arrow.svg";

import "../../../styles/scss/smallComponents.scss";
import classNames from "classnames";
import { Modal } from "../../smallComponents/Modal";

export function Sorting() {
  const itemsModal = ["популярности", "цене", "алфавиту"];
  const [isModalActive, setModalActive] = useState(false);
  const [activeLabel, setActiveLabel] = useState("популярности");
  const sortRef = useRef();

  const handleClickSorting = () => {
    setModalActive(!isModalActive);
  };
  //
  return (
    <div className="categories-menu__right" ref={sortRef}>
      <div className="sorting" onClick={handleClickSorting}>
        <img
          className={classNames("sorting-img", {
            rotated: isModalActive,
          })}
          src={arrowDown}
          alt="стрелка вниз"
        />
        <b className="sorting-text">Сортировка по:</b>
        <span className="sorting-options">{activeLabel}</span>
      </div>
      <Modal
        items={itemsModal}
        isModalActive={isModalActive}
        setModalActive={setModalActive}
        sortElem={sortRef}
        setActiveLabel={setActiveLabel}
      />
    </div>
  );
}
