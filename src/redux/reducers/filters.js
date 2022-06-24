import { actionTypes } from "../actionTypes";

const { SET_SORT_BY, SET_CATEGORY } = actionTypes;

const initialState = {
  sortBy: {
    main: "rating",
    order: "desc",
  },
  category: null,
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: {
          main: action.payload.main,
          order: action.payload.order,
        },
      };

    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};
