import { actionTypes } from "../actionTypes";

const { SET_SORT_BY, SET_CATEGORY } = actionTypes;

export const setSortBy = (main, order) => {
  return {
    type: SET_SORT_BY,
    payload: {
      main,
      order,
    },
  };
};

export const setCategory = (categoryIndex) => {
  return {
    type: SET_CATEGORY,
    payload: categoryIndex,
  };
};
