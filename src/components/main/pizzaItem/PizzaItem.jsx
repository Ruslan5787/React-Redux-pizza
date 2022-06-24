import React, { useState } from "react";

import { PizzaItemTypeOptions } from "./PizzaItemTypeOptions";
import { addPizzaItemToCart } from "../../../redux/actions/cart";

export function PizzaItem(props) {
  const { id, imageUrl, name, types, sizes, price, addPizzaToCart } = props;
  const [activeOptionDough, setActiveOptionDough] = useState(types[0]);
  const [activeOptionSize, setActiveOptionSize] = useState(sizes[0]);

  function handleClick() {
    addPizzaToCart(
      addPizzaItemToCart({
        id,
        imageUrl,
        name,
        price,
        dough: activeOptionDough,
        sizes: activeOptionSize,
      })
    );
  }

  return (
    <div className="content-list__card card">
      <img className="card-img" src={imageUrl} alt="" />
      <div className="card-bottom">
        <h4 className="card-name">{name}</h4>
        <div className="card-options">
          <PizzaItemTypeOptions
            optionType="dough"
            optionList={types}
            setActiveOption={setActiveOptionDough}
          />
          <PizzaItemTypeOptions
            optionType="sizes"
            optionList={sizes}
            setActiveOption={setActiveOptionSize}
          />
        </div>
        <div className="card-options-buy">
          <div className="card-options-buy__price">от {price} ₽</div>
          <button className="card-options-buy__add-btn" onClick={handleClick}>
            <svg
              className="card-options-buy__add-img"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="#EB5A1E"
              />
            </svg>
            Добавить<i className="card-options-buy__add-number">2</i>
          </button>
        </div>
      </div>
    </div>
  );
}
