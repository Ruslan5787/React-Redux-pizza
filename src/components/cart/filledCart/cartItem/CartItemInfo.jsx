import React from "react";

export function CartItemInfo(props) {
  const { imageUrl, name, dough, sizes } = props;

  return (
    <div className="cart__item-info">
      <img className="cart__item-img" src={imageUrl} alt="" />
      <div className="cart__item-info-text">
        <h4 className="cart__item-title">{name}</h4>
        <span className="cart__item-subtitle">
          {dough}, {sizes} см.
        </span>
      </div>
    </div>
  );
}
