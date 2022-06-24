export function getActiveLabel(item, activeLabelProperty) {
  return (
    item.type.main === activeLabelProperty.main &&
    item.type.order === activeLabelProperty.order
  );
}
