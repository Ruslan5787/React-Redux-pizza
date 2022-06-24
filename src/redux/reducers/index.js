import { combineReducers } from "redux";

import { pizzas } from "./pizzas";
import { filters } from "./filters";
import { cart } from "./cart";

export const rootReducers = combineReducers({
  pizzas,
  filters,
  cart,
});
