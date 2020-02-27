import React from "react";

function ShoppingList(props) {
  return (
    <div>
      {props.basket.map(basket => (
        <li>{basket.item}</li>
      ))}
    </div>
  );
}

export default ShoppingList;
