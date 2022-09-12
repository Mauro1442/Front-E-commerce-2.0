import React from "react";

export default function Product(props) {
  const { title, price, description } = props;
  return (
    <div>
      <h4>{title}</h4>
      <p>price:{price}</p>
      <p>description:{description || ""} </p>
      <button>Order</button>
    </div>
  );
}
