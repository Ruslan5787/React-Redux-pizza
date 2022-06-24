import React from "react";

import { PizzaItemTypeOptions } from "./PizzaItemTypeOptions";

export function PizzaItem(props) {
  const { imageUrl, name, types, sizes, price } = props;

  return (
    <div className="content-list__card card">
      <img className="card-img" src={imageUrl} alt="" />
      <div className="card-bottom">
        <h4 className="card-name">{name}</h4>
        <div className="card-options">
          <PizzaItemTypeOptions optionType="dough" optionList={types} />
          <PizzaItemTypeOptions optionType="sizes" optionList={sizes} />
        </div>
        <div className="card-options-buy">
          <div className="card-options-buy__price">от {price} ₽</div>
          <button className="card-options-buy__add-btn">
            Добавить<i className="card-options-buy__add-number">2</i>
          </button>
        </div>
      </div>
    </div>
  );
}
