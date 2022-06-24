import "../../../styles/scss/home/categories.scss";

import { Categories, Sorting } from "./index";

export function CategoriesMenu() {
  return (
    <div className="categories-menu">
      <Categories />
      <Sorting />
    </div>
  );
}
