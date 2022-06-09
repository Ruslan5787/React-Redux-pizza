import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "../../styles/scss/home/sorting.scss";

export function Modal(props) {
  const { items, isModalActive, setModalActive, sortElem, setActiveLabel } =
    props;
  const [activeOptions, setActiveOptions] = useState(0);

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  });

  function onSelectItem(index, option) {
    setActiveOptions(index);
    setActiveLabel(option);
    setModalActive(false);
  }

  function handleOutsideClick(event) {
    if (!event.path.includes(sortElem.current)) {
      setModalActive(false);
    }
  }

  function RenderOptions() {
    return (
      items &&
      items.map((option, index) => (
        <span
          className={classNames("modal-options", {
            "modal-options--active": activeOptions === index,
          })}
          key={`${option}_${index}`}
          onClick={() => {
            onSelectItem(index, option);
          }}
        >
          {option}
        </span>
      ))
    );
  }

  return (
    isModalActive && (
      <div className="modal">
        <RenderOptions />
      </div>
    )
  );
}
