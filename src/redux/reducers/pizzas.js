import { actionTypes } from "../actionTypes";

const { SET_PIZZAS, SET_LOADED_FLAG } = actionTypes;

const initialState = {
  items: [],
  isLoaded: false,
  isMakeFetch: true,
};

export const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case SET_LOADED_FLAG:
      return {
        ...state,
        isLoaded: false,
      };

    default:
      return state;
  }
};
