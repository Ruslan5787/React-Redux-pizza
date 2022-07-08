import React from "react";

import { useDispatch, useSelector } from "react-redux";

import "../../../../styles/scss/cartPage/cartItem.scss";

import { ReactComponent as IconMinus } from "../../../../img/cartPage/icons/minus.svg";
import { ReactComponent as IconPlus } from "../../../../img/cartPage/icons/plus.svg";
import { ReactComponent as IconDelete } from "../../../../img/cartPage/icons/delete.svg";

import {
  decreaseCountPizzaItems,
  deleteCartPizzaItem,
  increaseCountPizzaItems,
} from "../../../../redux/actions/cart";

import { CartItemInfo } from "./CartItemInfo";
import { CartItemBtn } from "./CartItemBtn";

export default React.memo(function CartItem(props) {
  const dispatch = useDispatch();
  const { id } = props;
  const pizzaItems = useSelector(({ cart }) => cart.items);

  function handelDecreaseCountPizzaItems() {
    if (pizzaItems[id].list.length === 1) {
      dispatch(deleteCartPizzaItem(id));
    } else {
      dispatch(decreaseCountPizzaItems(id));
    }
  }

  function handelIncreaseCountPizzaItems() {
    dispatch(increaseCountPizzaItems(id));
  }

  function handleDeleteCartPizza() {
    dispatch(deleteCartPizzaItem(id));
  }

  return (
    <div className="cart__content-item cart__item">
      <CartItemInfo {...props} />

      <div className="cart__item-right">
        <div className="cart__item-counter">
          <CartItemBtn action={handelDecreaseCountPizzaItems}>
            <IconMinus />
          </CartItemBtn>

          <span className="cart__item-counter-number">
            {pizzaItems[id].list.length}
          </span>

          <CartItemBtn action={handelIncreaseCountPizzaItems}>
            <IconPlus />
          </CartItemBtn>
        </div>
        <span className="cart__item-price">{pizzaItems[id].totalPrice} ₽ </span>

        <CartItemBtn
          action={() => handleDeleteCartPizza(id)}
          additionalStyleClass="delete"
        >
          <IconDelete />
        </CartItemBtn>
      </div>
    </div>
  );
});
