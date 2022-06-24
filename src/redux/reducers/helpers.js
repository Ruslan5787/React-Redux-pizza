export function getListItems(items) {
  return [].concat.apply([], Object.values(items));
}

export function getItemsCount(items) {
  return getListItems(items).length;
}

export function getTotalPrice(items) {
  return getListItems(items).reduce((totalPrice, item) => {
    return totalPrice + item.price;
  }, 0);
}
