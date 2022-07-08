import { actionTypes } from "../actionTypes";
import { getItemsCount, getTotalPrice } from "../helpers";

const {
  ADD_PIZZA_ITEM_TO_CART,
  CLEAR_CART,
  DELETE_CART_PIZZA,
  DECREASE_COUNT_PIZZA_ITEMS,
  INCREASE_COUNT_PIZZA_ITEMS,
} = actionTypes;

const initialState = {
  items: {},
  itemsCount: 0,
  totalPrice: 0,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_ITEM_TO_CART:
      const newPizzaItemsList = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].list, action.payload];
      const newItemsInfo = {
        ...state.items,
        [action.payload.id]: {
          list: newPizzaItemsList,
          totalPrice: newPizzaItemsList.reduce((totalPrice, pizzaItem) => {
            return totalPrice + pizzaItem.price;
          }, 0),
        },
      };

      return {
        items: newItemsInfo,
        itemsCount: getItemsCount(newItemsInfo),
        totalPrice: getTotalPrice(newItemsInfo),
      };

    case CLEAR_CART:
      return {
        items: {},
        itemsCount: 0,
        totalPrice: 0,
      };

    case DELETE_CART_PIZZA:
      const newItems = { ...state.items };

      delete newItems[action.payload];

      return {
        items: newItems,
        itemsCount: getItemsCount(newItems),
        totalPrice: getTotalPrice(newItems),
      };

    case INCREASE_COUNT_PIZZA_ITEMS:
      const lastPizzaItemInList =
        state.items[action.payload].list[
          state.items[action.payload].list.length - 1
        ];
      const newListPizzaItems = {
        ...state.items,
        [action.payload]: {
          list: [...state.items[action.payload].list, lastPizzaItemInList],
          totalPrice:
            state.items[action.payload].totalPrice + lastPizzaItemInList.price,
        },
      };

      return {
        items: newListPizzaItems,
        itemsCount: getItemsCount(newListPizzaItems),
        totalPrice: getTotalPrice(newListPizzaItems),
      };

    case DECREASE_COUNT_PIZZA_ITEMS:
      const newItemsList = {
        ...state.items,
        [action.payload]: {
          list: state.items[action.payload].list.splice(1),
          totalPrice:
            state.items[action.payload].totalPrice -
            state.items[action.payload].list[0].price,
        },
      };

      return {
        ...state,
        items: newItemsList,
        itemsCount: getItemsCount(newItemsList),
        totalPrice: getTotalPrice(newItemsList),
      };

    default:
      return state;
  }
};
