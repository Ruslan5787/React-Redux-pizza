import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import classNames from "classnames";

import "../../styles/scss/homePage/sorting.scss";
import { itemsModalOptions } from "../home/constants";
import { areTheValuesFromReduxTrue } from "../helpers";

export function Modal(props) {
  const { isModalActive, setModalActive, sortElem, workWithRedux } = props;
  const activeLabelProperty = useSelector(({ filters }) => filters.sortBy);

  const listModalOptions = itemsModalOptions.map((option) => (
    <span
      className={classNames("modal-options", {
        "modal-options--active": areTheValuesFromReduxTrue(
          option,
          activeLabelProperty
        ),
      })}
      key={Math.random()}
      onClick={() => {
        onSelectItem(option.type);
      }}
    >
      {option.name}
    </span>
  ));

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  });

  function onSelectItem(optionType) {
    setModalActive(false);
    workWithRedux(optionType);
  }

  function handleOutsideClick(event) {
    if (!event.path.includes(sortElem.current)) {
      setModalActive(false);
    }
  }

  return isModalActive && <div className="modal">{listModalOptions}</div>;
}
