import { actionTypes } from "../actionTypes";
import { getItemsCount, getTotalPrice } from "./helpers";

const { ADD_PIZZA_ITEM_TO_CART, CLEAN_CART } = actionTypes;

const initialState = {
  items: {},
  itemsCount: 0,
  totalPrice: 0,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_ITEM_TO_CART:
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      return {
        ...state,
        items: newItems,
        itemsCount: getItemsCount(newItems),
        totalPrice: getTotalPrice(newItems),
      };

    default:
      return state;
  }
};
