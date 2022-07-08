import { actionTypes } from "../actionTypes";

const {
  ADD_PIZZA_ITEM_TO_CART,
  CLEAR_CART,
  DELETE_CART_PIZZA,
  DECREASE_COUNT_PIZZA_ITEMS,
  INCREASE_COUNT_PIZZA_ITEMS,
} = actionTypes;

export function addPizzaItemToCart(pizzaObj) {
  return {
    type: ADD_PIZZA_ITEM_TO_CART,
    payload: pizzaObj,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}

export function decreaseCountPizzaItems(id) {
  return {
    type: DECREASE_COUNT_PIZZA_ITEMS,
    payload: id,
  };
}

export function increaseCountPizzaItems(id) {
  return {
    type: INCREASE_COUNT_PIZZA_ITEMS,
    payload: id,
  };
}

export function deleteCartPizzaItem(id) {
  return {
    type: DELETE_CART_PIZZA,
    payload: id,
  };
}
