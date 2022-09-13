import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { name, price, description, id, code } = props;
  return (
    <div>
      <h4>{name}</h4>
      <p>price: {price}</p>
      <p>code: {code}</p>
      <p>description: {description} </p>
      <p>id: {id}</p>
      <Link to={"/product/" + id}>See Detail</Link>
      <button>Order</button>
    </div>
  );
}
