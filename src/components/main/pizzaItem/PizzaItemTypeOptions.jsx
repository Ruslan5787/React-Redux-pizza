import React, { useState } from "react";
import classNames from "classnames";

import { generalInfo } from "../index";

export function PizzaItemTypeOptions(props) {
  const { optionType, optionList } = props;
  const [activeCategory, setActiveCategory] = useState(0);

  function handleClick(index, setCategory) {
    setCategory(index);
  }

  function getPizzaInfoButtons({
    listInfo,
    inStockList,
    styleClass = "card-options__btn",
    additionalText,
    category,
    setCategory,
  }) {
    return listInfo.map((item, index) => (
      <button
        className={classNames(styleClass, {
          absent: !inStockList.includes(item),
          active: index === category,
        })}
        key={Math.random()}
        onClick={() => {
          handleClick(index, setCategory);
        }}
      >
        {item} {additionalText}
      </button>
    ));
  }

  return (
    <div className="card-options__pizza">
      {getPizzaInfoButtons({
        listInfo: generalInfo[optionType],
        inStockList: optionList,
        category: activeCategory,
        setCategory: setActiveCategory,
      })}
    </div>
  );
}
