import React, { useState } from "react";

import classNames from "classnames";

export function Categories(props) {
  const { items } = props;
  const [activeCategory, setActiveCategory] = useState(0);

  const onSelectItem = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories-types-pizza">
      {items &&
        items.map((title, index) => (
          <button
            className={classNames("categories-types-pizza-btn", {
              "categories-btn--active": activeCategory === index,
            })}
            key={`${title}_${index}`}
            onClick={() => onSelectItem(index)}
          >
            {title}
          </button>
        ))}
    </div>
  );
}
