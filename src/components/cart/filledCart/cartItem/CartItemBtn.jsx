export function CartItemBtn(props) {
  const { action, additionalStyleClass, children } = props;

  return (
    <button
      className={`cart__item-btn ${additionalStyleClass}`}
      onClick={action}
    >
      {children}
    </button>
  );
}
