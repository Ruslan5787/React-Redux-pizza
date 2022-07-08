import React from "react";
import { ReactComponent as IconPlus } from "../../../../img/homePage/icons/plus.svg";

export default React.memo(function PizzaItemOptions(props) {
  const { price, handleClick, pizzaItemsCounterInCart } = props;

  return (
    <div className="card-options-buy">
      <div className="card-options-buy__price">от {price} ₽</div>
      <button className="card-options-buy__add-btn" onClick={handleClick}>
        <IconPlus className="card-options-buy__add-img" />
        Добавить
        {pizzaItemsCounterInCart}
      </button>
    </div>
  );
});
