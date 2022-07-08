export function getItemsCount(items) {
  return getListItems(items).length;
}

export function getTotalPrice(items) {
  return getListItems(items).reduce((totalPrice, item) => {
    return totalPrice + item?.price;
  }, 0);
}

export function getListItems(objectItemsInfo) {
  const arrayLists = Object.values(objectItemsInfo).map((item) => {
    return item.list;
  });

  return [].concat.apply([], Object.values(arrayLists));
}
