import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";

import arrowDown from "../../../img/homePage/icons/arrow.svg";

import "../../../styles/scss/smallComponents.scss";

import { itemsModalOptions } from "../constants";
import { getActiveLabel } from "../../helpers";
import { Modal } from "../../smallComponents/Modal";
import { setSortBy } from "../../../redux/actions/filters";

export function Sorting() {
  const sortRef = useRef();
  const dispatch = useDispatch();
  const activeLabelProperty = useSelector(({ filters }) => filters.sortBy);

  const [isModalActive, setModalActive] = useState(false);

  const activeLabel = itemsModalOptions.find((item) => {
    return getActiveLabel(item, activeLabelProperty);
  });

  const handleClickSorting = () => {
    setModalActive(!isModalActive);
  };

  return (
    <div className="categories-menu__right" ref={sortRef}>
      <div className="sorting" onClick={handleClickSorting}>
        <img
          className={classNames("sorting-img", {
            rotated: isModalActive,
          })}
          src={arrowDown}
          alt=""
        />
        <b className="sorting-text">Сортировка по:</b>
        <span className="sorting-options">{activeLabel.name}</span>
      </div>
      <Modal
        isModalActive={isModalActive}
        setModalActive={setModalActive}
        sortElem={sortRef}
        workWithRedux={(optionType) =>
          dispatch(setSortBy(optionType.main, optionType.order))
        }
      />
    </div>
  );
}
