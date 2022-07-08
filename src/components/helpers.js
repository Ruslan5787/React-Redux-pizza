export function getActiveLabel(item, activeLabelProperty) {
  return (
    item.type.main === activeLabelProperty.main &&
    item.type.order === activeLabelProperty.order
  );
}

export function areTheValuesFromReduxTrue(comparedValue, valueFromRedux) {
  return (
    comparedValue.type.main === valueFromRedux.main &&
    comparedValue.type.order === valueFromRedux.order
  );
}
