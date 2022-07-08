export const itemsCategories = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const itemsModalOptions = [
  {
    name: "популярности",
    type: {
      main: "rating",
      order: "desc",
    },
  },
  {
    name: "сначала дешевые",
    type: {
      main: "price",
      order: "asc",
    },
  },
  {
    name: "сначала дорогие",
    type: {
      main: "price",
      order: "desc",
    },
  },
];

export const generalInfo = {
  dough: ["тонкое", "традиционное"],
  sizes: [26, 30, 40],
};
