import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import classNames from "classnames";

import "../../styles/scss/home/sorting.scss";
import { itemsModal } from "../main/categoriesMenu/constants";

export function Modal(props) {
  const { isModalActive, setModalActive, sortElem, workWithRedux } = props;
  const activeLabelProperty = useSelector(({ filters }) => filters.sortBy);

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  });

  function onSelectItem(index, optionType) {
    setModalActive(false);
    workWithRedux(optionType);
  }

  function handleOutsideClick(event) {
    if (!event.path.includes(sortElem.current)) {
      setModalActive(false);
    }
  }

  function ShowOptions() {
    return itemsModal.map((option, index) => (
      <span
        className={classNames("modal-options", {
          "modal-options--active":
            option.type.main === activeLabelProperty.main &&
            option.type.order === activeLabelProperty.order,
        })}
        key={`${option.name}_${index}`}
        onClick={() => {
          onSelectItem(index, option.type);
        }}
      >
        {option.name}
      </span>
    ));
  }

  return (
    isModalActive && (
      <div className="modal">
        <ShowOptions />
      </div>
    )
  );
}
