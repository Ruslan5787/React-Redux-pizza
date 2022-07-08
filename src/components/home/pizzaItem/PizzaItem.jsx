import React, { useState } from "react";

import "../../../styles/scss/homePage/pizzaItem/pizzaItem.scss";
import "../../../styles/scss/homePage/pizzaItem/pizzaItemOptioins.scss";

import PizzaItemTypeOptions from "./PizzaItemTypeOptions";
import { addPizzaItemToCart } from "../../../redux/actions/cart";
import PizzaItemOptions from "./pizzaOptions/PizzaItemOptions";

export default React.memo(function PizzaItem(props) {
  const {
    id,
    imageUrl,
    name,
    types,
    sizes,
    price,
    addPizzaToCart,
    pizzaItemsInCartAboutId,
  } = props;

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

  const pizzaItemsCounterInCart = pizzaItemsInCartAboutId && (
    <i className="card-options-buy__add-number">
      {Object.keys(pizzaItemsInCartAboutId.list).length}
    </i>
  );

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
        <PizzaItemOptions
          price={price}
          handleClick={handleClick}
          pizzaItemsCounterInCart={pizzaItemsCounterInCart}
        />
      </div>
    </div>
  );
});
