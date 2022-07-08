import React, { useState } from "react";
import classNames from "classnames";

import { generalInfo } from "../constants";

export default React.memo(function PizzaItemTypeOptions(props) {
  const { optionType, optionList, setActiveOption } = props;
  const [activeCategory, setActiveCategory] = useState(optionList[0]);

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
          active: index === category || item === activeCategory,
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

  function handleClick(index, setCategory) {
    setCategory(index);
    setActiveOption(optionList[index]);
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
});
