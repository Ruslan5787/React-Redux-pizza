import axios from "axios";

import { actionTypes } from "../actionTypes";
import { URL_PIZZAS } from "../../components/workWithServer";

const { SET_PIZZAS, SET_LOADED_FLAG } = actionTypes;

export const fetchPizzas = (category, sortBy) => {
  return (dispatch) => {
    dispatch(setLoadedFlag());

    const selectedCategory = category !== null ? `category=${category}` : "";

    axios
      .get(
        `${URL_PIZZAS}?${selectedCategory}&_sort=${sortBy.main}&_order=${sortBy.order}`
      )
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  };
};

export const setPizzas = (items) => {
  return {
    type: SET_PIZZAS,
    payload: items,
  };
};

export const setLoadedFlag = () => {
  return {
    type: SET_LOADED_FLAG,
  };
};
