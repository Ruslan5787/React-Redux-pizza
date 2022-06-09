import "../../../styles/scss/home/categories.scss";

import { Categories, Sorting } from "./index";

export function CategoriesMenu() {
  const itemsCategories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories-menu">
      <Categories items={itemsCategories} />
      <Sorting />
    </div>
  );
}
