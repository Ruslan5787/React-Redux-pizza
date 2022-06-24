import { actionTypes } from "../actionTypes";

const { ADD_PIZZA_ITEM_TO_CART, CLEAN_CART } = actionTypes;

export function addPizzaItemToCart(pizzaObj) {
  return {
    type: ADD_PIZZA_ITEM_TO_CART,
    payload: pizzaObj,
  };
}

export function cleanCart() {
  return {
    type: CLEAN_CART,
  };
}
