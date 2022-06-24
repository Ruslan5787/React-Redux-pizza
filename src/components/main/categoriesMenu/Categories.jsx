import React from "react";
import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";

import { itemsCategories } from "./constants";
import { setCategory } from "../../../redux/actions/filters";

export function Categories() {
  const dispatch = useDispatch();
  const activeCategory = useSelector(({ filters }) => filters.category);

  const onSelectItem = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="categories-types-pizza">
      <div style={{ marginRight: 10 }}>
        <button
          className={classNames("categories-types-pizza-btn", {
            "categories-btn--active": activeCategory === null,
          })}
          key={Math.random()}
          onClick={() => onSelectItem(null)}
        >
          Все
        </button>
      </div>
      {itemsCategories.map((title, index) => (
        <button
          className={classNames("categories-types-pizza-btn", {
            "categories-btn--active": activeCategory === index,
          })}
          key={Math.random()}
          onClick={() => onSelectItem(index)}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
