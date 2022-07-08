import "../../../styles/scss/homePage/categories.scss";

import { Categories, Sorting } from "./index";

export function CategoriesMenu() {
  return (
    <div className="categories-menu">
      <Categories />
      <Sorting />
    </div>
  );
}
