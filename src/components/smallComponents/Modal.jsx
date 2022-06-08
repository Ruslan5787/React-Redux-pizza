import React, { useState } from "react";

import "../../styles/scss/sorting.scss";
import classNames from "classnames";

export function Modal(props) {
  const { items, isModalActive } = props;
  const [activeOptions, setActiveOptions] = useState(0);

  const onSelectItem = (index) => {
    setActiveOptions(index);
  };

  return (
    isModalActive && (
      <div className="modal">
        {items &&
          items.map((option, index) => (
            <span
              className={classNames("modal-options", {
                "modal-options--active": activeOptions === index,
              })}
              key={`${option}_${index}`}
              onClick={() => onSelectItem(index)}
            >
              {option}
            </span>
          ))}
      </div>
    )
  );
}
